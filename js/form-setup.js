/**
 * Shared POST setup for contact / quote forms → ottawagaragetech@gmail.com
 */
(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  function ensureHidden(form, name, value) {
    var el = form.querySelector('input[name="' + name + '"]');
    if (!el) {
      el = document.createElement("input");
      el.type = "hidden";
      el.name = name;
      form.appendChild(el);
    }
    el.value = value;
  }

  function isValidEndpoint(url) {
    if (!url || typeof url !== "string") return false;
    if (/REPLACE/i.test(url)) return false;
    if (/formspree\.io\/f\/REPLACE/i.test(url)) return false;
    return true;
  }

  function formEndpoint() {
    if (isValidEndpoint(cfg.formAction)) return cfg.formAction;
    if (isValidEndpoint(cfg.formspree)) return cfg.formspree;
    return "https://formsubmit.co/" + encodeURIComponent(cfg.email || "ottawagaragetech@gmail.com");
  }

  window.OGT_setupForm = function (form, options) {
    if (!form) return;
    options = options || {};

    form.setAttribute("action", formEndpoint());
    form.setAttribute("method", "POST");

    ensureHidden(form, "_template", "table");
    ensureHidden(form, "_captcha", "false");

    if (options.next) {
      ensureHidden(form, "_next", options.next);
    }

    if (!form.querySelector('input[name="_replyto"]')) {
      var reply = document.createElement("input");
      reply.type = "hidden";
      reply.name = "_replyto";
      form.appendChild(reply);
      form.addEventListener("submit", function () {
        var emailEl = form.querySelector('input[name="email"]');
        reply.value = emailEl ? emailEl.value : "";
      });
    }

    if (!form.querySelector('input[name="_autoresponse"]')) {
      ensureHidden(
        form,
        "_autoresponse",
        "Thank you for contacting Ottawa Garage Tech. We received your message and will reply shortly. For urgent garage door issues, call or text (613) 900-6005."
      );
    }
  };
})();
