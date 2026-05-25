import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const sitemapPath = path.join(root, "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

let xml = fs.readFileSync(sitemapPath, "utf8");
xml = xml.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(sitemapPath, xml);
console.log(`Updated sitemap lastmod to ${today}`);
