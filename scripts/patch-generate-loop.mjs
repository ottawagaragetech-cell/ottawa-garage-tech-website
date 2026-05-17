import fs from "fs";
import path from "path";

const p = path.join(import.meta.dirname, "generate-services.mjs");
let c = fs.readFileSync(p, "utf8");
const start = c.indexOf("const bad = ");
const end = c.indexOf("// patch site-config images");
if (start < 0 || end < 0) throw new Error("markers not found");

const repl = `fs.mkdirSync(path.join(root, "services"), { recursive: true });
for (const [slug, data] of Object.entries(services)) {
  fs.writeFileSync(path.join(root, "services", \`\${slug}.html\`), servicePage(slug, data));
}

`;

c = c.slice(0, start) + repl + c.slice(end);
fs.writeFileSync(p, c);
console.log("patched generate-services loop");
