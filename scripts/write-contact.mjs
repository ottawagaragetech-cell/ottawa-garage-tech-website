import fs from "fs";
import path from "path";
import { DOMAIN, socialMeta } from "./seo-meta.mjs";

const contactSocial = socialMeta({
  title: "Contact Ottawa Garage Tech | Call, Text, or Send a Message",
  description:
    "Contact Ottawa Garage Tech for garage door quotes and service in Ottawa. Call or text (613) 900-6005 for urgent repairs; use the form for non-urgent requests. Open daily 7 a.m.–9 p.m.",
  url: `${DOMAIN}/contact`,
});

const d = "div";
const c = (n) => `<${d}${n ? " " + n : ""}>`;
const e = `</${d}>`;

const parts = [
  "<!DOCTYPE html>",
  '<html lang="en-CA" data-ogt-page="contact">',
  "<head>",
  '  <meta charset="UTF-8">',
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  "  <title>Contact Ottawa Garage Tech | Call, Text, or Send a Message</title>",
  '  <meta name="description" content="Contact Ottawa Garage Tech for garage door quotes and service in Ottawa. Call or text (613) 900-6005 for urgent repairs; use the form for non-urgent requests. Open daily 7 a.m.–9 p.m.">',
  '  <meta name="robots" content="index, follow">',
  '  <link rel="canonical" href="https://ottawagaragetech.ca/contact">',
  contactSocial.trim(),
  '  <link rel="icon" type="image/png" href="/assets/favicon-48.png" sizes="48x48">',
  '  <link rel="stylesheet" href="/css/style.css">',
  "</head>",
  "<body>",
  `  ${c('id="ogt-site-header"')}${e}`,
  '  <main id="main">',
  `    ${c('class="ogt-page-hero"')}`,
  "      <h1>Get in touch</h1>",
  '      <p class="ogt-section-intro">For urgent or same-day garage door issues, <strong>call or text is fastest</strong>. Use the form below for quotes, scheduling questions, or non-urgent requests.</p>',
  `      ${c('class="ogt-contact-quick"')}`,
  '        <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">Call (613) 900-6005</a>',
  '        <a class="ogt-btn ogt-btn-secondary" href="sms:+16139006005">Text us</a>',
  `      ${e}`,
  `    ${e}`,
  `    ${c('class="ogt-contact-grid"')}`,
  `      ${c('class="ogt-form-card"')}`,
  "        <h2>Send a message</h2>",
  '        <p class="ogt-form-note">We aim to reply within 2 hours during business hours (Mon-Sun, 7 AM - 9 PM).</p>',
  '        <div id="ogt-form-thanks" class="ogt-form-success" role="status">Thank you - your message was sent. We will get back to you shortly.</div>',
  '        <form class="ogt-form" method="POST">',
  '          <input type="hidden" name="_subject" value="Ottawa Garage Tech website lead">',
  '          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">',
  '          <label for="contact-name">Name <span class="ogt-required">*</span></label>',
  '          <input type="text" id="contact-name" name="name" placeholder="Your name" required autocomplete="name">',
  '          <label for="contact-email">Email <span class="ogt-required">*</span></label>',
  '          <input type="email" id="contact-email" name="email" placeholder="you@example.com" required autocomplete="email">',
  '          <label for="contact-phone">Phone</label>',
  '          <input type="tel" id="contact-phone" name="phone" placeholder="(613) 555-1234" autocomplete="tel">',
  '          <label for="contact-service">Service needed</label>',
  '          <select id="contact-service" name="service"><option value="">Select a service (optional)</option></select>',
  '          <label for="contact-message">Message <span class="ogt-required">*</span></label>',
  '          <textarea id="contact-message" name="message" placeholder="Describe your issue or request..." required></textarea>',
  '          <button type="submit" class="ogt-btn ogt-btn-primary">Send message</button>',
  "        </form>",
  `      ${e}`,
  `      <aside class="ogt-info-card">`,
  "        <h2>Ottawa Garage Tech</h2>",
  "        <p>Ottawa, ON - serving Ottawa and surrounding communities.</p>",
  "        <dl>",
  "          <dt>Call or text</dt>",
  '          <dd><a href="tel:+16139006005">(613) 900-6005</a></dd>',
  "          <dt>Email</dt>",
  '          <dd><a href="mailto:ottawagaragetech@gmail.com">ottawagaragetech@gmail.com</a></dd>',
  "          <dt>Hours</dt>",
  "          <dd>Mon - Sun, 7:00 AM - 9:00 PM</dd>",
  "        </dl>",
  "      </aside>",
  `    ${e}`,
  "  </main>",
  `  ${c('id="ogt-site-footer"')}${e}`,
  '  <script src="/js/site-config.js"></script>',
  '  <script src="/js/layout.js"></script>',
  '  <script src="/js/contact-form.js"></script>',
  "</body>",
  "</html>",
];

let html = parts.join("\n");
html = html.replace(/<div /g, `<${d} `).replace(/<\/motion>/g, e);

fs.writeFileSync(path.resolve(import.meta.dirname, "..", "contact.html"), html);
console.log("ok");
