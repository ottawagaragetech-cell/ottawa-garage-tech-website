import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const t = "mo" + "tion";
const end = "</" + "div>";

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory() && name !== "scripts") walk(p);
    else if (name.endsWith(".html")) fix(p);
  }
}

function fix(file) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;
  html = html.replace(new RegExp("<" + t + "></" + t + ">", "g"), "");
  html = html.replace(new RegExp("</" + t + ">", "g"), end);
  html = html.replace(new RegExp("<" + t + ">", "g"), "");
  if (html !== before) {
    fs.writeFileSync(file, html);
    console.log("fixed", path.relative(root, file));
  }
}

walk(root);
