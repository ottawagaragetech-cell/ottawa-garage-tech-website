/**
 * Contact form API — delivers leads to ottawagaragetech@gmail.com
 * Set WEB3FORMS_ACCESS_KEY on Vercel for best reliability (free at web3forms.com).
 */
const TO_EMAIL = process.env.CONTACT_TO || "ottawagaragetech@gmail.com";

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(data) {
  return (
    "<h2>New website lead</h2>" +
    "<p><strong>Name:</strong> " +
    escapeHtml(data.name) +
    "</p>" +
    "<p><strong>Email:</strong> " +
    escapeHtml(data.email) +
    "</p>" +
    "<p><strong>Phone:</strong> " +
    escapeHtml(data.phone || "—") +
    "</p>" +
    "<p><strong>Service:</strong> " +
    escapeHtml(data.service || "—") +
    "</p>" +
    "<p><strong>Message:</strong></p><p>" +
    escapeHtml(data.message).replace(/\n/g, "<br>") +
    "</p>"
  );
}

async function sendViaWeb3Forms(data) {
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) return null;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: data._subject || "Ottawa Garage Tech website lead",
      from_name: data.name,
      email: data.email,
      phone: data.phone || "",
      service: data.service || "",
      message: data.message,
    }),
  });

  const json = await res.json().catch(() => ({}));
  if (res.ok && json.success) return { ok: true, provider: "web3forms" };
  return null;
}

async function sendViaResend(data) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;

  const from = process.env.RESEND_FROM || "Ottawa Garage Tech <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [TO_EMAIL],
      reply_to: data.email,
      subject: data._subject || "Ottawa Garage Tech website lead",
      html: buildHtml(data),
    }),
  });

  if (res.ok) return { ok: true, provider: "resend" };
  return null;
}

function formBody(data) {
  const body = new URLSearchParams();
  body.set("name", data.name || "");
  body.set("email", data.email || "");
  body.set("phone", data.phone || "");
  body.set("service", data.service || "");
  body.set("message", data.message || "");
  body.set("_subject", data._subject || "Ottawa Garage Tech website lead");
  body.set("_template", "table");
  body.set("_captcha", "false");
  return body;
}

async function sendViaFormSubmitAjax(data) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/" + encodeURIComponent(TO_EMAIL),
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody(data).toString(),
        signal: controller.signal,
      }
    );
    clearTimeout(timer);
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.success !== "false") return { ok: true, provider: "formsubmit-ajax" };
  } catch (e) {
    clearTimeout(timer);
  }
  return null;
}

async function sendViaFormSubmitClassic(data) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch("https://formsubmit.co/" + encodeURIComponent(TO_EMAIL), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody(data).toString(),
      redirect: "manual",
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.status === 200 || res.status === 302 || res.status === 303) {
      return { ok: true, provider: "formsubmit" };
    }
  } catch (e) {
    clearTimeout(timer);
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const data = req.body || {};
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: "Name, email, and message are required." });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ success: false, message: "Please enter a valid email address." });
    return;
  }

  const payload = {
    name,
    email,
    phone: (data.phone || "").trim(),
    service: (data.service || "").trim(),
    message,
    _subject: data._subject || "Ottawa Garage Tech website lead",
  };

  const providers = [sendViaWeb3Forms, sendViaResend, sendViaFormSubmitAjax, sendViaFormSubmitClassic];
  for (const send of providers) {
    const result = await send(payload);
    if (result && result.ok) {
      res.status(200).json({ success: true, message: "Thank you — we received your message." });
      return;
    }
  }

  res.status(502).json({
    success: false,
    message:
      "We could not send your message right now. Please call or text (613) 900-6005, or email ottawagaragetech@gmail.com directly.",
  });
}
