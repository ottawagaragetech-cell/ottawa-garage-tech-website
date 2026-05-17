import fs from "fs";
import path from "path";

const d = "d" + "iv";
const p = path.join(import.meta.dirname, "..", "about.html");
let c = fs.readFileSync(p, "utf8");
if (c.includes("ogt-reviews-grid")) {
  console.log("about.html already has reviews");
  process.exit(0);
}
const block = `
    <section class="ogt-section">
      <${d} class="ogt-section-inner">
        <h2>Customer reviews</h2>
        <p class="ogt-section-intro"><a href="/reviews">Read all reviews</a> from Ottawa-area homeowners.</p>
        <${d} class="ogt-reviews-grid" id="ogt-reviews-grid" data-limit="4"></${d}>
      </${d}>
    </section>`;
c = c.replace("</main>", block + "\n  </main>");
fs.writeFileSync(p, c);
console.log("patched about.html");
