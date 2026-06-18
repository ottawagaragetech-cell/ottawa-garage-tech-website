/**
 * Legacy shim — back to top is initialized in layout.js.
 * Removes duplicate buttons if an older cached layout still loads this file.
 */
(function () {
  document.querySelectorAll(".ogt-back-to-top:not(#ogt-back-to-top-btn)").forEach(function (el) {
    el.remove();
  });
})();
