import fs from "fs";
import path from "path";

const d = "d" + "iv";
const p = path.join(import.meta.dirname, "..", "index.html");
let c = fs.readFileSync(p, "utf8");
if (c.includes("ogt-contact-visual-side")) {
  console.log("contact already visual");
  process.exit(0);
}
const re =
  /    <section class="ogt-section" aria-labelledby="contact-home-heading">[\s\S]*?<div class="ogt-form-card ogt-home-form-card">/;
const rep = `    <section class="ogt-section ogt-section--contact-visual" aria-labelledby="contact-home-heading">
      <${d} class="ogt-section-inner ogt-home-contact-wrap">
        <${d} class="ogt-contact-visual-side">
          <img class="ogt-contact-visual-img" src="" alt="" width="500" height="600" loading="lazy">
          <${d} class="ogt-contact-visual-caption">
            <h2 id="contact-home-heading">Send a message</h2>
            <p class="ogt-section-intro">For urgent issues, <strong>call or text (613) 900-6005</strong> is fastest. Use the form for quotes and non-urgent requests.</p>
          </${d}>
        </${d}>
        <${d} class="ogt-form-card ogt-home-form-card">`;
if (!re.test(c)) throw new Error("contact block not found");
c = c.replace(re, rep);
fs.writeFileSync(p, c);
console.log("contact visual ok");
