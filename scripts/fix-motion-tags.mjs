import fs from "fs";
import path from "path";

const t = "mo" + "tion";
const open = new RegExp("<" + t + "(\\s|>)", "g");
const close = new RegExp("</" + t + ">", "g");

function fixFile(p) {
  let c = fs.readFileSync(p, "utf8");
  const n = c;
  c = c.replace(close, "</div>");
  c = c.replace(open, "<motion$1".replace("motion", "div"));
  if (c !== n) fs.writeFileSync(p, c);
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html") || name.endsWith(".mjs")) fixFile(p);
  }
}

walk(path.resolve(import.meta.dirname, ".."));
console.log("fixed motion tags");
