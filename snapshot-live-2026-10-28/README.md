# Live snapshot: southfloridasitework.com, 28 Oct 2026

Parity baseline and rollback reference for the move from Namecheap shared hosting (LiteSpeed) to Cloudflare Workers static assets (master plan WS6C). Taken on 2026-10-28 between 17:13 and 17:22 UTC (crawl and assets 17:13 to 17:16, probes until 17:22). Nothing on the live site was changed and no form was submitted: every request was a plain GET.

## What is here

| Path | Contents |
|---|---|
| `pages/` | Raw HTML exactly as served for every URL that returned 200 `text/html`, at its URL path (`/services/` is `pages/services/index.html`). Query-string variants are saved beside the page as `index.html__query_<query>`. Bytes are unmodified (only the gzip transfer encoding is removed). |
| `pages/_other-responses/` | Bodies of non-200 responses (LiteSpeed 301 page, LiteSpeed 404 page, 403 page, directory listings, the site's 404 page), stored once each by SHA-256. Every record in `manifest.json` and `probes.json` gives the `body_sha256` of each hop, so each response can be matched to its file. |
| `assets/` | Every same-origin asset referenced by the pages, at its URL path: 195 JS, 188 CSS, 30 WOFF2 fonts, 49 images, favicon, sitemaps, `404.html`. |
| `manifest.json` | One row per requested URL (354) with the full redirect chain (status, Location and all response headers for every hop) and the extracted fields listed below. Also the full asset list (484 entries, each with status, headers, size, SHA-256 and where it is saved). |
| `manifest.csv` | The same page rows, flattened (JSON-LD reduced to types plus a SHA-256; raw JSON-LD is in the JSON). |
| `probes.json` | 415 behaviour probes (each with every hop's status, Location and headers) plus the sitemap fetches. |
| `inferred-_redirects`, `inferred-_headers` | Draft Cloudflare rules inferred from the probes. Inferred, confirm against `.htaccess` when the owner provides it. |

Size: about 47 MB in total, so everything is committed (no git-ignored image folder was needed).

## How it was taken

- Client: Python 3 `requests` (HTTP/1.1 through the session's HTTPS proxy, CA-verified) and BeautifulSoup with lxml for parsing. No JavaScript was executed, so the HTML is what the server sends, not what a browser renders after hydration.
- User agent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36`, with normal browser `Accept` and `Accept-Language` headers.
- Politeness: 3 concurrent workers, 0.35 s pause before every request, up to 4 attempts with exponential backoff on network errors (none were needed).
- Redirects: followed by hand, up to 10 hops, recording every hop. Hops that leave `southfloridasitework.com` and `www.southfloridasitework.com` were not followed (there were none).
- Seeds: `/robots.txt` (404 live, so no Sitemap lines), `/sitemap.xml` (228 URLs), the child sitemaps `/sitemap-services.xml` (36) and `/sitemap-locations.xml` (19), which are subsets, the homepage, and the 87 legacy `/services/{cat}/{sub}/{city}/` URLs from `ops-checkpoint0/repo-not-in-live.txt`.
- Crawl: every same-origin `<a href>`, `<link rel=canonical|alternate>` and `<iframe src>` on every 200 HTML page was followed recursively on `https://southfloridasitework.com`. Fragments were dropped; query strings were kept.
- Assets: collected from `link`, `script`, `img`, `source`, `video`, `audio`, `iframe`, `embed`, `object`, `srcset`, `meta content` and inline `style` attributes and blocks, plus a scan of each page's HTML (including the inline Next.js flight data) for same-origin asset paths and `/_next/static/...` paths. CSS files were scanned for `url()` and `@import`, JS files for `/_next/static/...` paths, repeated until nothing new appeared. The webpack runtime has no async chunk map (`d.u` is empty), so every chunk a page needs is referenced in its HTML. A fixed list of standard root files was also requested (`robots.txt`, `manifest.json`, `site.webmanifest`, `apple-touch-icon.png`, `ads.txt`, `llms.txt` and so on); those that 404 are in the asset list with `referenced_by_pages: false`.
- Next.js RSC payloads: `/services/index.txt` returns 404 here, so this site has no `index.txt` files to save.
- External resources (Google Tag Manager, Google Maps embed, Web3Forms and outbound links to government sites) were not downloaded.
- Probes (`probes.json`, `category` field): `trailing-slash/no-slash-variant` (every 200 page without its slash), `scheme/http-apex`, `host/http-www`, `host/https-www`, `query-string`, `index-and-extension` (`/index.html`, `/services/index.html`, `.txt` and so on), `path-normalisation` (case, `//`, `./`, `../`), `not-found-and-special` (random 404 paths with token `8dknp0myea`, `/404.html`, `/.htaccess`, `/_next/`, `/api/`), `legacy/*` (legacy pattern without slash, over http and www, a random-slug pattern test, and common old paths).

## Extracted fields (manifest)

`url`, `in_sitemap`, `discovered_via`, `status_first`, `status` (final), `final_url`, `hop_count`, `redirect_chain`, `title`, `meta_description`, `canonical` (plus `canonical_is_self` and `canonical_status_in_crawl`), `meta_robots`, `x_robots_tag`, `h1` (all H1s), `jsonld_raw` (each block verbatim) and `jsonld_types`, `word_count`, `main_text_sha256`, `hreflang`, `og_tags`, `twitter_tags`, `internal_links_out` (unique same-origin `<a>` targets, in page order), `inbound_internal_link_pages`, `forms` (every form with its fields and buttons), `quote_form_present`, `form_posts_to`, `meta_csp`, `meta_refresh`, `client_redirect` (Next.js `NEXT_REDIRECT` marker), `duplicate_main_text_count`, `duplicate_title_count`, `last_modified`, `saved_html`, `final_body_sha256`.

- Main text: the `<main>` element if present, otherwise `<body>` without `header`, `nav` and `footer`; `script`, `style`, `noscript`, `template`, `svg` and `iframe` removed; whitespace collapsed to single spaces. `word_count` counts whitespace-separated tokens of that text; `main_text_sha256` is the SHA-256 of it in UTF-8. `main_text_source` says which rule applied.
- Quote form: a `<form>` with at least 3 visible fields including an email or phone field. The forms have no `action` attribute; they submit with client-side `fetch`. `form_posts_to` lists the endpoints found in the same-origin JS the page loads (`https://api.web3forms.com/submit`, found in `/_next/static/chunks/48720-10c85da12d972ca5.js` and the contact page chunk).

## How to view it offline

```
mkdir -p /tmp/sfsw-view && cp -r pages/. assets/. /tmp/sfsw-view/ && python3 -m http.server -d /tmp/sfsw-view 8080
```
Then open http://localhost:8080/. GA4 and the Maps embed need network access.

## What the snapshot shows

- 354 URLs requested. All 228 sitemap URLs return 200 directly. 88 seeds return 200 (87 legacy URLs and `/`). 38 more URLs were found only through links: 30 return 200, 5 are 301 to 200, 3 return 404.
- 346 distinct 200 HTML pages: 216 real pages, 12 `?page=2..4` query copies of the 4 permit guides (listed in the sitemap, canonical to the base page) and 117 legacy `/services/{cat}/{sub}/{city}/` pages.
- The 117 legacy pages (the 87 known ones plus 30 Florida Keys ones linked from the 30 `/services/{cat}/{sub}/` pages) return 200 with the homepage title, `index, follow`, no H1, and a client-side `NEXT_REDIRECT ... 307` to `/service-areas/{city}/{cat}/{sub}/`. They are not 301s.
- 3 internal links point at legacy Miami URLs that 404 (`/services/site-work-site-development/{cut-fill-mass-earthmoving,subdivision-infrastructure,value-engineering-preconstruction}/miami/`).
- Trailing slash: all 332 probed pages 301 from `/path` to `/path/`, query string kept. `http://` is 301 to `https://`; `www` is 301 to the apex in a separate hop (`http://www.../services` takes 3 hops).
- Duplicates served as 200: `/index.html`, `/services/index.html`, `//services/`, `/services//`, `/404/` and `/404.html` (the site's 404 page with status 200). `/_next/` and `/_next/static/` show LiteSpeed directory listings. Unknown URLs get the LiteSpeed default 404 page, not the site's 404 page. `/robots.txt` is 404.
- Headers: HTML has no Cache-Control and no security headers; CSS, fonts and images have `Cache-Control: public, max-age=604800`; JS has none. No CSP anywhere.
- Canonical tags are on 54 of the 346 pages only (13 of those point elsewhere: the 12 `?page=` copies and the bare-host homepage URL).
- The quote form is on 147 pages; it posts to Web3Forms by client-side `fetch`. Referenced images that 404 live: `/images/og-default.jpg` and `/images/services/demolition.jpg`.
