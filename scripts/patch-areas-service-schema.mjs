import fs from "fs";
import path from "path";

const p = path.join(import.meta.dirname, "generate-areas.mjs");
let s = fs.readFileSync(p, "utf8");

if (s.includes('"@type": "Service"')) {
  console.log("Service schema already present");
  process.exit(0);
}

const block = `  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": \${JSON.stringify("Garage door repair in " + area.name)},
    "description": \${JSON.stringify(desc)},
    "serviceType": "Garage door repair and installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ottawa Garage Tech",
      "url": "\${domain}/",
      "telephone": "+16139006005"
    },
    "areaServed": {
      "@type": "City",
      "name": \${JSON.stringify(area.name)}\${geo ? \`,\\n      "geo": {"@type": "GeoCoordinates", "latitude": \${geo.lat}, "longitude": \${geo.lng}}\` : ""}
    }
  }
  </script>
`;

const marker = '"@type": "BreadcrumbList"';
const idx = s.indexOf(marker);
const end = s.indexOf("</head>", idx);
s = s.slice(0, end) + block + "\n" + s.slice(end);
fs.writeFileSync(p, s);
console.log("Patched generate-areas.mjs with Service schema");
