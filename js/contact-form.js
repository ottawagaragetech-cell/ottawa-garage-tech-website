(function () {
  var cfg = window.OGT;
  if (!cfg) return;

  var form = document.querySelector(".ogt-form");
  if (!form) return;

  if (window.OGT_setupForm) {
    OGT_setupForm(form, { thanksId: "ogt-form-thanks" });
  } else {
    form.setAttribute(
      "action",
      cfg.formAction || "https://formsubmit.co/" + encodeURIComponent(cfg.email)
    );
    form.setAttribute("method", "POST");
  }

  var serviceSelect = document.getElementById("contact-service");
  if (serviceSelect && cfg.services) {
    var params = new URLSearchParams(window.location.search);
    var prefill = params.get("service");
    var area = params.get("area");
    cfg.services.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.title;
      opt.textContent = s.title;
      if (prefill === s.slug) opt.selected = true;
      serviceSelect.appendChild(opt);
    });
    var other = document.createElement("option");
    other.value = "Other / not sure";
    other.textContent = "Other / not sure";
    serviceSelect.appendChild(other);

    if (area && !prefill) {
      var areaOpt = document.createElement("option");
      areaOpt.value = "Service area: " + area;
      areaOpt.textContent = "Service area: " + area.replace(/-/g, " ");
      areaOpt.selected = true;
      serviceSelect.insertBefore(areaOpt, serviceSelect.firstChild.nextSibling);
    }
  }

  if (new URLSearchParams(window.location.search).get("sent") === "1") {
    var thanks = document.getElementById("ogt-form-thanks");
    if (thanks) thanks.classList.add("is-visible");
  }
})();
