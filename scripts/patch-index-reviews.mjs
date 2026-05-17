import fs from "fs";
import path from "path";

const p = path.join(import.meta.dirname, "..", "index.html");
let c = fs.readFileSync(p, "utf8");
c = c.replace(
  /<p class="ogt-section-intro">Recent feedback from customers across the city and suburbs\.<\/p>/,
  '<p class="ogt-section-intro">Recent feedback from customers across the city and suburbs. <a href="/reviews">See all reviews</a>.</p>'
);
c = c.replace(
  /<div class="ogt-reviews-grid" id="ogt-reviews-grid"><\/motion>/,
  '<div class="ogt-reviews-grid" id="ogt-reviews-grid" data-limit="6"></div>'
);
c = c.replace(
  /<div class="ogt-reviews-grid" id="ogt-reviews-grid"><\/div>/,
  '<div class="ogt-reviews-grid" id="ogt-reviews-grid" data-limit="6"></div>'
);
const d = "d" + "iv";
c = c.replace(
  /<div class="ogt-reviews-grid" id="ogt-reviews-grid" data-limit="6"><\/motion>/,
  `<${d} class="ogt-reviews-grid" id="ogt-reviews-grid" data-limit="6"></${d}>`
);
fs.writeFileSync(p, c);
console.log("patched index.html");
