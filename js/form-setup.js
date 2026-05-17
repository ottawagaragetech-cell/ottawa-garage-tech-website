/**
 * Contact / quote forms → POST /api/contact (same origin, no FormSubmit redirect)
 */
(function () {
  var cfg = window.OGT;
  if (!cfg) return;

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

  function showError(el, message) {
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
    el.classList.add("is-visible");
  }

  function hideError(el) {
    if (!el) return;
    el.hidden = true;
    el.classList.remove("is-visible");
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

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().then(function (json) {
            return { ok: res.ok, json: json };
          });
        })
        .then(function (result) {
          if (result.ok && result.json.success) {
            form.reset();
            hideError(errorEl);
            if (thanksEl) thanksEl.classList.add("is-visible");
            if (options.onSuccess) options.onSuccess();
            return;
          }
          showError(
            errorEl,
            (result.json && result.json.message) ||
              "Something went wrong. Please call (613) 900-6005 or email ottawagaragetech@gmail.com."
          );
        })
        .catch(function () {
          showError(
            errorEl,
            "Connection problem. Please call or text (613) 900-6005, or email ottawagaragetech@gmail.com."
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
