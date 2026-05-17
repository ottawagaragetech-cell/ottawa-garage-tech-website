import fs from "fs";
import path from "path";

const d = "div";
const root = path.resolve(import.meta.dirname, "..", "services");
for (const name of fs.readdirSync(root)) {
  if (!name.endsWith(".html")) continue;
  const p = path.join(root, name);
  let c = fs.readFileSync(p, "utf8");
  const bad = 'id="ogt-site-header"></' + d + "></" + d + ">";
  const good = 'id="ogt-site-header">';
  if (c.includes(bad)) {
    c = c.split(bad).join(good);
    fs.writeFileSync(p, c);
    console.log("fixed", name);
  }
}
