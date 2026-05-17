/**
 * Contact / quote forms → Web3Forms (browser) or POST /api/contact (fallback)
 */
(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  var web3formsKey = (cfg.web3formsAccessKey || "").trim();
  var configLoaded = !web3formsKey ? loadFormConfig() : Promise.resolve();

  function loadFormConfig() {
    return fetch("/api/form-config", { headers: { Accept: "application/json" } })
      .then(function (res) {
        return res.ok ? res.json() : {};
      })
      .then(function (json) {
        if (json && json.web3formsAccessKey) {
          web3formsKey = String(json.web3formsAccessKey).trim();
        }
      })
      .catch(function () {});
  }

  function findThanks(form, options) {
    if (options && options.thanksId) {
      return document.getElementById(options.thanksId);
    }
    var card = form.closest(".ogt-form-card");
    if (card) {
      var el = card.querySelector(".ogt-form-success");
      if (el) return el;
    }
    return document.getElementById("ogt-form-thanks") || document.getElementById("ogt-home-form-thanks");
  }

  function findOrCreateError(form) {
    var card = form.closest(".ogt-form-card");
    var el = card ? card.querySelector(".ogt-form-error") : null;
    if (!el) {
      el = document.createElement("div");
      el.className = "ogt-form-error";
      el.setAttribute("role", "alert");
      el.hidden = true;
      var thanks = card ? card.querySelector(".ogt-form-success") : null;
      if (thanks && thanks.parentNode) {
        thanks.parentNode.insertBefore(el, thanks.nextSibling);
      } else {
        form.parentNode.insertBefore(el, form);
      }
    }
    return el;
  }

  function showError(el, message, payload) {
    if (!el) return;
    el.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = message;
    el.appendChild(p);

    if (payload && cfg.email) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ogt-btn ogt-btn-secondary ogt-form-mailto-fallback";
      btn.textContent = "Send via your email app instead";
      btn.addEventListener("click", function () {
        openMailto(payload);
      });
      el.appendChild(btn);
    }

    el.hidden = false;
    el.classList.add("is-visible");
  }

  function hideError(el) {
    if (!el) return;
    el.hidden = true;
    el.classList.remove("is-visible");
    el.innerHTML = "";
  }

  function openMailto(payload) {
    var subject = encodeURIComponent(payload._subject || "Ottawa Garage Tech website lead");
    var body = encodeURIComponent(
      "Name: " +
        (payload.name || "") +
        "\nEmail: " +
        (payload.email || "") +
        "\nPhone: " +
        (payload.phone || "—") +
        "\nService: " +
        (payload.service || "—") +
        "\n\n" +
        (payload.message || "")
    );
    window.location.href =
      "mailto:" + encodeURIComponent(cfg.email) + "?subject=" + subject + "&body=" + body;
  }

  function sendViaWeb3Forms(payload) {
    if (!web3formsKey) return Promise.resolve({ ok: false });
    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: payload._subject || "Ottawa Garage Tech website lead",
        from_name: payload.name,
        name: payload.name,
        email: payload.email,
        phone: payload.phone || "",
        service: payload.service || "",
        message: payload.message,
      }),
    }).then(function (res) {
      return res.json().then(function (json) {
        return { ok: res.ok && json.success, json: json };
      });
    });
  }

  function sendViaApi(payload) {
    return fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }).then(function (res) {
      return res.json().then(function (json) {
        return { ok: res.ok && json.success, json: json };
      });
    });
  }

  window.OGT_setupForm = function (form, options) {
    if (!form || form.dataset.ogtBound === "1") return;
    form.dataset.ogtBound = "1";
    options = options || {};

    form.setAttribute("action", "/api/contact");
    form.setAttribute("method", "POST");
    var thanksEl = findThanks(form, options);
    var errorEl = findOrCreateError(form);
    var submitBtn = form.querySelector('[type="submit"]');
    var defaultLabel = submitBtn ? submitBtn.textContent : "Send message";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      hideError(errorEl);

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var gotcha = form.querySelector('[name="_gotcha"]');
      if (gotcha && gotcha.value) return;

      var payload = {
        name: (form.querySelector('[name="name"]') || {}).value || "",
        email: (form.querySelector('[name="email"]') || {}).value || "",
        phone: (form.querySelector('[name="phone"]') || {}).value || "",
        service: (form.querySelector('[name="service"]') || {}).value || "",
        message: (form.querySelector('[name="message"]') || {}).value || "",
        _subject:
          (form.querySelector('[name="_subject"]') || {}).value ||
          "Ottawa Garage Tech website lead",
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      configLoaded
        .then(function () {
          return sendViaWeb3Forms(payload).then(function (result) {
            if (result.ok) return result;
            return sendViaApi(payload);
          });
        })
        .then(function (result) {
          if (result.ok) {
            form.reset();
            hideError(errorEl);
            if (thanksEl) thanksEl.classList.add("is-visible");
            if (options.onSuccess) options.onSuccess();
            return;
          }
          showError(
            errorEl,
            (result.json && result.json.message) ||
              "We could not send your message right now. Please call or text (613) 900-6005, or use the button below to email us directly.",
            payload
          );
        })
        .catch(function () {
          showError(
            errorEl,
            "Connection problem. Please call or text (613) 900-6005, or use the button below to email us directly.",
            payload
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = defaultLabel;
          }
        });
    });
  };
})();
