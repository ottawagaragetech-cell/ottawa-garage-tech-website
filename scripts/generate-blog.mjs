import fs from "fs";
import path from "path";
import { blogPosts, BLOG_IMAGES } from "./blog-posts.mjs";
import {
  DOMAIN as domain,
  OG_IMAGE,
  absUrl,
  esc,
  socialMeta,
  breadcrumbSchema,
} from "./seo-meta.mjs";

const root = path.resolve(import.meta.dirname, "..");
const blogDir = path.join(root, "blog");

function serviceTitle(slug) {
  const map = {
    "emergency-repair": "Emergency repair",
    "spring-replacement": "Spring replacement",
    "garage-door-installation": "New door installation",
    "opener-service": "Opener service",
    "cable-repair": "Cable repair",
    maintenance: "Maintenance tune-ups",
    "weather-sealing": "Weather sealing",
  };
  return map[slug] || slug;
}

function postBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

function relatedPostsHtml(post) {
  const related = (post.relatedSlugs || [])
    .map(postBySlug)
    .filter(Boolean)
    .slice(0, 3);
  if (!related.length) return "";
  return (
    "<h3>Related articles</h3><ul class=\"ogt-blog-related-list\">" +
    related
      .map(
        (r) =>
          '<li><a href="/blog/' +
          r.slug +
          '">' +
          esc(r.title) +
          "</a></li>"
      )
      .join("") +
    "</ul>"
  );
}

function relatedServicesHtml(post) {
  if (!post.relatedServices?.length) return "";
  const links = post.relatedServices
    .map(
      (s) =>
        '<a href="/services/' + s + '">' + esc(serviceTitle(s)) + "</a>"
    )
    .join("");
  return "<h3>Related services</h3><p class=\"ogt-related-links\">" + links + "</p>";
}

function articlePage(post) {
  const canonical = domain + "/blog/" + post.slug;
  const imgPath = BLOG_IMAGES[post.imageKey] || BLOG_IMAGES.pricing;
  const imgAbs = absUrl(imgPath);
  const isoDate = post.date + "T09:00:00-05:00";
  const pageTitle = `${post.title} | Ottawa Garage Tech Blog`;

  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="blog-post">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(pageTitle)}</title>
  <meta name="description" content="${esc(post.desc)}">
  <meta name="keywords" content="${esc(post.keywords)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">${socialMeta({
    title: post.title,
    description: post.desc,
    url: canonical,
    image: imgPath,
    imageAlt: post.imageAlt,
    type: "article",
    published: isoDate,
  })}
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": ${JSON.stringify(post.h1)},
    "description": ${JSON.stringify(post.desc)},
    "image": ${JSON.stringify(imgAbs)},
    "datePublished": ${JSON.stringify(isoDate)},
    "dateModified": ${JSON.stringify(isoDate)},
    "author": {
      "@type": "Organization",
      "name": "Ottawa Garage Tech",
      "url": "${domain}/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ottawa Garage Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "${OG_IMAGE}"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ${JSON.stringify(canonical)}
    }
  }
  </script>
  <script type="application/ld+json">${breadcrumbSchema([
    { name: "Home", url: `${domain}/` },
    { name: "Blog", url: `${domain}/blog` },
    { name: post.h1, url: canonical },
  ])}</script>
</head>
<body>
  <div id="ogt-site-header"></div>
  <main id="main">
    <nav class="ogt-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span aria-hidden="true">/</span>
      <a href="/blog">Blog</a><span aria-hidden="true">/</span>
      <span>${esc(post.h1)}</span>
    </nav>

    <article class="ogt-blog-article">
      <header class="ogt-blog-article-header">
        <p class="ogt-blog-meta">
          <span class="ogt-blog-category">${esc(post.category)}</span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span>${post.readMin} min read</span>
        </p>
        <h1>${esc(post.h1)}</h1>
        <p class="ogt-section-intro">${esc(post.desc)}</p>
      </header>

      <figure class="ogt-blog-hero-img">
        <img src="${imgPath}" width="900" height="560" alt="${esc(post.imageAlt)}" loading="eager">
      </figure>

      <div class="ogt-section-inner ogt-blog-layout">
        <div class="ogt-blog-main ogt-prose ogt-blog-prose">
          ${post.body}
          <div class="ogt-blog-cta-inline">
            <h2>Need garage door help in Ottawa?</h2>
            <p>Call or text for same-day service when available, or send a message for a quote.</p>
            <p class="ogt-contact-quick">
              <a class="ogt-btn ogt-btn-primary" href="tel:+16139006005">(613) 900-6005</a>
              <a class="ogt-btn ogt-btn-secondary" href="/contact">Request a quote</a>
            </p>
          </div>
        </div>
        <aside class="ogt-blog-aside" aria-label="Article sidebar">
          <div class="ogt-aside-card">
            <h3>Ottawa Garage Tech</h3>
            <p>Local garage door repair, springs, openers, and installation across Ottawa and suburbs.</p>
            <p><a href="tel:+16139006005">(613) 900-6005</a></p>
            <p><a href="/contact">Contact us</a></p>
          </div>
          <div class="ogt-aside-card">
            ${relatedServicesHtml(post)}
          </div>
          <div class="ogt-aside-card">
            ${relatedPostsHtml(post)}
          </div>
        </aside>
      </div>
    </article>
  </main>
  <div id="ogt-site-footer"></div>
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>`;
}

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function card(post) {
  const img = BLOG_IMAGES[post.imageKey] || BLOG_IMAGES.pricing;
  return (
    '<article class="ogt-blog-card">' +
    '<a class="ogt-blog-card-img" href="/blog/' +
    post.slug +
    '"><img src="' +
    img +
    '" alt="' +
    esc(post.imageAlt) +
    '" width="600" height="400" loading="lazy"></a>' +
    '<div class="ogt-blog-card-body">' +
    '<p class="ogt-blog-meta"><span class="ogt-blog-category">' +
    esc(post.category) +
    "</span> · <time datetime=\"" +
    post.date +
    '">' +
    formatDate(post.date) +
    "</time></p>" +
    '<h2><a href="/blog/' +
    post.slug +
    '">' +
    esc(post.title) +
    "</a></h2>" +
    "<p>" +
    esc(post.desc) +
    '</p><a class="ogt-blog-read-more" href="/blog/' +
    post.slug +
    '">Read article →</a></div></article>'
  );
}

function indexPage() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const cards = sorted.map(card).join("\n");
  const itemList = sorted.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: domain + "/blog/" + p.slug,
    name: p.title,
  }));

  return `<!DOCTYPE html>
<html lang="en-CA" data-ogt-page="blog">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Garage Door Blog Ottawa | Tips, Costs &amp; Repair Guides | Ottawa Garage Tech</title>
  <meta name="description" content="Garage door tips for Ottawa homeowners — broken springs, opener troubleshooting, insulation, winter prep & repair guides from local technicians.">
  <meta name="keywords" content="garage door blog Ottawa, garage door tips, garage door repair guide Ottawa">
  <link rel="canonical" href="${domain}/blog">
  <meta name="robots" content="index, follow">${socialMeta({
    title: "Garage Door Blog | Ottawa Garage Tech",
    description:
      "Garage door repair tips, spring & opener guides, and Ottawa-specific advice for Kanata, Barrhaven, Orleans & suburbs.",
    url: `${domain}/blog`,
    image: BLOG_IMAGES.blogIndex,
  })}
  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ottawa Garage Tech Blog",
    "description": "Garage door repair and installation tips for Ottawa-area homeowners.",
    "url": "${domain}/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Ottawa Garage Tech",
      "url": "${domain}/"
    },
    "blogPost": ${JSON.stringify(
      sorted.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: domain + "/blog/" + p.slug,
        datePublished: p.date,
      }))
    )}
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": ${JSON.stringify(itemList)}
  }
  </script>
</head>
<body>
  <div id="ogt-site-header"></div>
  <main id="main">
    <div class="ogt-page-hero ogt-page-hero--visual">
      <div class="ogt-page-hero-text">
        <p class="ogt-section-label">Blog</p>
        <h1>Garage door tips for Ottawa homeowners</h1>
        <p class="ogt-section-intro">Practical guides on broken springs, opener troubleshooting, insulation, winter prep, and when to call a local technician — written for Ottawa's climate and neighbourhoods.</p>
        <a class="ogt-btn ogt-btn-primary" href="/contact">Get a quote</a>
      </div>
      <div class="ogt-page-hero-media">
        <img src="${BLOG_IMAGES.blogIndex}" width="800" height="500" alt="Chamberlain garage door opener installed on a garage ceiling in Ottawa" loading="eager">
      </div>
    </div>

    <section class="ogt-section">
      <div class="ogt-section-inner">
        <div class="ogt-blog-grid">${cards}</div>
      </div>
    </section>

    <section class="ogt-section ogt-section--alt">
      <div class="ogt-section-inner ogt-seo-prose">
        <h2>Local garage door advice you can use</h2>
        <p>Whether you live in <a href="/areas/kanata">Kanata</a>, <a href="/areas/barrhaven">Barrhaven</a>, <a href="/areas/orleans">Orleans</a>, or central Ottawa, garage doors face the same seasons — hot summers, freeze-thaw winters, and daily use that wears springs, cables, and openers. Our blog explains what to watch for, typical <a href="/services/spring-replacement">spring replacement</a> and <a href="/services/opener-service">opener repair</a> scenarios, and when a <a href="/services/garage-door-installation">new insulated door</a> is the better long-term fix.</p>
        <p>Questions not covered here? See our <a href="/faq">FAQ</a>, <a href="/gallery">project gallery</a>, or <a href="/contact">contact Ottawa Garage Tech</a> — call or text <a href="tel:+16139006005">(613) 900-6005</a> for urgent issues.</p>
      </div>
    </section>

    <section class="ogt-cta-band">
      <h2>Book garage door service in Ottawa</h2>
      <p>Same-day help when scheduling allows · 7 days a week · Upfront quotes</p>
      <a class="ogt-btn ogt-btn-accent" href="tel:+16139006005">(613) 900-6005</a>
    </section>
  </main>
  <div id="ogt-site-footer"></div>
  <script src="/js/site-config.js"></script>
  <script src="/js/layout.js"></script>
</body>
</html>`;
}

fs.mkdirSync(blogDir, { recursive: true });
fs.writeFileSync(path.join(root, "blog.html"), indexPage());
blogPosts.forEach((post) => {
  fs.writeFileSync(path.join(blogDir, post.slug + ".html"), articlePage(post));
});

const sitemapPath = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
const blogUrls =
  `  <url><loc>${domain}/blog</loc><priority>0.75</priority></url>\n` +
  blogPosts
    .map(
      (p) =>
        `  <url><loc>${domain}/blog/${p.slug}</loc><priority>0.7</priority></url>`
    )
    .join("\n") +
  "\n";
if (!sitemap.includes("/blog</loc>")) {
  sitemap = sitemap.replace(
    "  <url><loc>https://ottawagaragetech.ca/gallery</loc>",
    blogUrls + "  <url><loc>https://ottawagaragetech.ca/gallery</loc>"
  );
  fs.writeFileSync(sitemapPath, sitemap);
}

console.log("Generated blog.html and " + blogPosts.length + " posts in blog/");
