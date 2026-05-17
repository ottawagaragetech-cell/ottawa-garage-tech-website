import fs from "fs";
import path from "path";

const d = "d" + "iv";
const p = path.join(import.meta.dirname, "..", "index.html");
let c = fs.readFileSync(p, "utf8");

function header(label, h2Id, h2Text, intro) {
  return `        <${d} class="ogt-section-header">
          <p class="ogt-section-label">${label}</p>
          <h2 id="${h2Id}">${h2Text}</h2>
          <p class="ogt-section-intro">${intro}</p>
        </${d}>`;
}

if (!c.includes("ogt-section-label")) {
  c = c.replace(
    `        <h2 id="showcase-heading">Recent work across Ottawa</h2>
        <p class="ogt-section-intro">Doors, springs, openers, and hardware — photos from real jobs in Kanata, Barrhaven, Orleans, and beyond. <a href="/gallery">View gallery</a>.</p>`,
    header(
      "Portfolio",
      "showcase-heading",
      "Recent work across Ottawa",
      'Doors, springs, openers, and hardware — photos from real jobs in Kanata, Barrhaven, Orleans, and beyond. <a href="/gallery">View gallery</a>.'
    )
  );

  c = c.replace(
    `        <h2 id="services-heading">What we do</h2>
        <p class="ogt-section-intro">Residential and light commercial garage doors across Ottawa. <a href="/services">Browse all services</a>.</p>`,
    header(
      "Services",
      "services-heading",
      "What we do",
      'Residential and light commercial garage doors across Ottawa. <a href="/services">Browse all services</a>.'
    )
  );

  c = c.replace(
    `        <h2 id="reviews-heading">What Ottawa homeowners say</h2>
        <p class="ogt-section-intro">Recent feedback from customers across the city and suburbs. <a href="/reviews">See all reviews</a>.</p>`,
    header(
      "Reviews",
      "reviews-heading",
      "What Ottawa homeowners say",
      'Recent feedback from customers across the city and suburbs. <a href="/reviews">See all reviews</a>.'
    )
  );

  c = c.replace(
    `        <h2 id="gallery-preview-heading">On the job</h2>
        <p class="ogt-section-intro">A closer look at installs, repairs, and parts we carry on our trucks.</p>`,
    header(
      "Gallery",
      "gallery-preview-heading",
      "On the job",
      "A closer look at installs, repairs, and parts we carry on our trucks."
    )
  );

  c = c.replace(
    `        <h2 id="areas-heading">Areas we serve</h2>
        <p class="ogt-section-intro">Mobile service across Ottawa and nearby communities. <a href="/areas">See full service area</a>.</p>`,
    header(
      "Coverage",
      "areas-heading",
      "Areas we serve",
      'Mobile service across Ottawa and nearby communities. <a href="/areas">See full service area</a>.'
    )
  );
}

fs.writeFileSync(p, c);
console.log("index premium headers done");
