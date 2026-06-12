/** Shared SEO constants and head helpers for generated pages */

export const DOMAIN = "https://ottawagaragetech.ca";
export const SITE_NAME = "Ottawa Garage Tech";
export const OG_IMAGE = `${DOMAIN}/assets/gallery/gallery-barrhaven-grey.png`;
export const OG_IMAGE_ALT =
  "Taupe wood-grain garage door with bottom seal — new garage door installation Barrhaven, Ottawa";
export const LOCALE = "en_CA";
export const PHONE = "+16139006005";

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

export function absUrl(src) {
  if (!src) return OG_IMAGE;
  if (src.startsWith("http")) return src;
  if (src.startsWith("/")) return DOMAIN + src;
  return src;
}

/** Open Graph + Twitter Card tags (absolute image URLs) */
export function socialMeta({
  title,
  description,
  url,
  image,
  imageAlt,
  type = "website",
  published,
}) {
  const img = absUrl(image);
  let html = `
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:locale" content="${LOCALE}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${img}">
  <meta property="og:image:alt" content="${esc(imageAlt || OG_IMAGE_ALT)}">`;
  if (type === "article" && published) {
    html += `\n  <meta property="article:published_time" content="${published}">`;
    html += `\n  <meta property="article:author" content="${SITE_NAME}">`;
  }
  html += `
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${img}">`;
  return html;
}

export function breadcrumbSchema(items) {
  return `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": ${JSON.stringify(
      items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      }))
    )}
  }`;
}
