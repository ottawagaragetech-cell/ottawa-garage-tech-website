import fs from "fs";
const p = new URL("../index.html", import.meta.url);
let c = fs.readFileSync(p, "utf8");
const d = "div";
c = c.replace(new RegExp('id="ogt-site-header"></' + d + "></" + d + ">"), 'id="ogt-site-header">');
fs.writeFileSync(p, c);
console.log("index ok");
