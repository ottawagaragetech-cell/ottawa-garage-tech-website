import fs from "fs";
import path from "path";

const p = path.join(import.meta.dirname, "..", "js", "layout.js");
let c = fs.readFileSync(p, "utf8");
const start = c.indexOf("  var reviewsEl = document.getElementById");
const end = c.indexOf("  var badgesEl = document.getElementById");
if (start < 0 || end < 0) throw new Error("markers not found");

const repl = `  function renderReviewCard(r) {
    var stars = "\\u2605".repeat(r.stars);
    var service = r.service
      ? '<p class="ogt-review-service">' + esc(r.service) + "</p>"
      : "";
    return (
      '<article class="ogt-review-card"><div class="ogt-review-stars" aria-label="' +
      r.stars +
      ' out of 5 stars">' +
      stars +
      "</div>" +
      service +
      '<p class="ogt-review-text">' +
      esc(r.text) +
      '</p><p class="ogt-review-meta"><strong>' +
      esc(r.name) +
      "</strong> · " +
      esc(r.area) +
      " · " +
      esc(r.date) +
      "</p></article>"
    );
  }

  var reviewsEl = document.getElementById("ogt-reviews-grid");
  if (reviewsEl && cfg.reviews) {
    var limit = reviewsEl.getAttribute("data-limit");
    var list = cfg.reviews;
    if (limit) list = list.slice(0, parseInt(limit, 10) || list.length);
    reviewsEl.innerHTML = list.map(renderReviewCard).join("");
  }

  var reviewsSummary = document.getElementById("ogt-reviews-summary");
  if (reviewsSummary && cfg.reviews && cfg.reviews.length) {
    reviewsSummary.innerHTML =
      '<p class="ogt-reviews-score"><span class="ogt-reviews-score-num">5.0</span><span class="ogt-reviews-score-stars" aria-hidden="true">\\u2605\\u2605\\u2605\\u2605\\u2605</span></p>';
  }

`.replace(/<\/motion>/g, "</div>");

fs.writeFileSync(p, c.slice(0, start) + repl + c.slice(end));
console.log("patched layout.js reviews");
