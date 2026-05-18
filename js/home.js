(function () {
  var form = document.getElementById("ogt-home-form");
  if (!form || !window.OGT) return;

  if (window.OGT_setupForm) {
    OGT_setupForm(form, { thanksId: "ogt-home-form-thanks" });
  } else {
    form.setAttribute(
      "action",
      OGT.formAction || "https://formsubmit.co/" + encodeURIComponent(OGT.email)
    );
    form.setAttribute("method", "POST");
  }

  var select = document.getElementById("home-service");
  if (select) {
    OGT.services.forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.title;
      opt.textContent = s.title;
      select.appendChild(opt);
    });
  }

  if (new URLSearchParams(window.location.search).get("sent") === "1") {
    var thanks = document.getElementById("ogt-home-form-thanks");
    if (thanks) thanks.classList.add("is-visible");
  }

})();
