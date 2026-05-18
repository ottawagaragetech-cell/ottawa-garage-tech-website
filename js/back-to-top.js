/**
 * Back to top — loaded last on every page via layout.js
 */
(function () {
  function scrollY() {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }

  function init() {
    if (document.querySelector(".ogt-back-to-top")) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ogt-back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<span class="ogt-back-to-top-icon" aria-hidden="true">↑</span>';
    document.body.appendChild(btn);

    function update() {
      btn.classList.toggle("is-visible", scrollY() > 200);
    }

    btn.addEventListener("click", function () {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update);
    update();
    requestAnimationFrame(update);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
