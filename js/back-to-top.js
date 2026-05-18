/**
 * Back to top — fixed bottom-right on all viewports
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

    /* Inline placement so fixed positioning wins over any CSS conflicts */
    btn.style.cssText =
      "position:fixed;right:max(1.25rem,env(safe-area-inset-right,0px));" +
      "bottom:max(1.25rem,env(safe-area-inset-bottom,0px));" +
      "top:auto;left:auto;z-index:2147483000;margin:0;";

    document.body.appendChild(btn);

    function update() {
      btn.classList.toggle("is-visible", scrollY() > 120);
    }

    btn.addEventListener("click", function () {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    setTimeout(update, 100);
    setTimeout(update, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
