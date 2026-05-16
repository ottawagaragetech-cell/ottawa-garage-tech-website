(function () {
  var btn = document.querySelector(".ogt-menu-btn");
  var nav = document.querySelector(".ogt-nav-mobile");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
})();
