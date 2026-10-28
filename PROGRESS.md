# PROGRESS: South Florida Site Work

## CHECKPOINT 0 (27 to 28 Oct 2026): does the repo match live?

**Answer: No.** The live site is built from newer code than this repo (`main` and `claude/funny-wright-fgsyrs`, last commit 1 Dec 2025). The owner must push the live source code before anyone edits this site (master plan 3 "Repo warning", WS6B.1 rule applies here too).

Investigation only. No site code was changed. Raw lists are in `ops-checkpoint0/`.

### Evidence

1. **Live is newer.** Live HTML and sitemap `last-modified: Sun, 18 Jan 2026`, seven weeks after the last repo commit.
2. **Whole sections missing from the repo.** `src/app/` has no `resources/`, `projects/`, `about/` or `contact/` routes. All 43 live `/resources/` pages (including 4 of the 6 protected pages) do not exist in the repo.
3. **34 Florida Keys pages missing.** The repo has only `/service-areas/florida-keys/` and `/service-areas/florida-keys/site-work-site-development/`. Live has 34 more Keys category and sub-service pages, plus 3 Miami site-work sub-service pages (`cut-fill-mass-earthmoving`, `subdivision-infrastructure`, `value-engineering-preconstruction`).
4. **Quote form.** Repo `src/components/QuoteForm.tsx` line 86 has `// TODO: Replace with actual form submission endpoint`. Live posts to Web3Forms (see Form diagnosis).
5. **Sitemap.** Repo `src/app/sitemap.ts` returns only the homepage ("Additional URLs will be added in Phase 15"). Live `/sitemap.xml` lists 228 URLs.
6. **SEO tags differ on pages that exist in both.** Live has canonical tags and `ConstructionCompany` JSON-LD on every page; the repo build has neither. Several live titles differ from the repo (table below).
7. **GA4.** Live loads a GA4 tag (G-P6LMFKQBFH). The repo has no analytics code.
8. **robots.txt.** The repo has `public/robots.txt`; live `/robots.txt` returns 404.

How checked: `git archive HEAD` copy built with `next build` (static export to `out/`, builds cleanly) in a scratch folder, compared with live HTML fetched with curl and Playwright.

### URL diff summary

| Set | Count |
|---|---|
| Live `/sitemap.xml` URLs (no sitemap index; child sitemaps `sitemap-services.xml` 36 and `sitemap-locations.xml` 19 are subsets) | 228 |
| Live sitemap URLs returning 200 | 228 of 228 |
| Repo routes (`src/app/**/page.tsx`, trailingSlash) | 232 |
| In both | 145 |
| Live, missing from repo | 83: 43 `/resources/*`, `/about/`, `/contact/`, `/projects/`, 37 `/service-areas/*` (34 Florida Keys pages, 3 Miami site-work sub-services) |
| Repo, not in live sitemap | 87: all legacy `/services/{cat}/{sub}/{city}/` pages |

The 87 legacy pages exist both in the repo and live. They return **HTTP 200** and redirect only in the browser (Next.js `redirect()` in a static export writes a `NEXT_REDIRECT;replace;...;307` marker and JavaScript). They are not real 301s. Their `<title>` is the homepage title and robots is `index, follow`. This needs fixing in WS6C with real 301s in `_redirects`.

Files: `ops-checkpoint0/live-sitemap-urls.txt`, `live-sitemap-services-child-urls.txt`, `live-sitemap-locations-child-urls.txt`, `repo-routes.txt`, `live-not-in-repo.txt`, `repo-not-in-live.txt`, `live-sitemap-status.tsv`.

### Parity sample (15 pages, all 6 protected pages included)

"Repo" = what the repo at HEAD renders (built `out/` HTML). Full values in `ops-checkpoint0/parity-sample.tsv`.

| Page | Protected | Repo has it | Title | H1 | Canonical | Robots | JSON-LD |
|---|---|---|---|---|---|---|---|
| / | | yes | same | same | DIFF (live has, repo none) | same | DIFF (live ConstructionCompany, repo none) |
| /services/ | yes | yes | same | same | DIFF (live has, repo none) | same | DIFF |
| /services/land-clearing-lot-preparation/ | yes | yes | **DIFF** | same | DIFF (live has, repo none) | same | DIFF |
| /resources/land-clearing-cost-per-acre-florida-keys/ | yes | **no** | n/a | n/a | n/a | n/a | n/a |
| /resources/drainage-system-installation-cost-south-florida/ | yes | **no** | n/a | n/a | n/a | n/a | n/a |
| /resources/land-clearing-cost-per-acre-west-palm-beach/ | yes | **no** | n/a | n/a | n/a | n/a | n/a |
| /resources/land-grading-cost-per-acre-florida/ | yes | **no** | n/a | n/a | n/a | n/a | n/a |
| /resources/ | | no | n/a | n/a | n/a | n/a | n/a |
| /service-areas/ | | yes | same | same | same (none) | same | DIFF |
| /service-areas/miami/ | | yes | **DIFF** | same | DIFF (live has, repo none) | same | DIFF (live adds Service) |
| /service-areas/fort-lauderdale/drainage-stormwater-solutions/french-drains-underdrain-systems/ | | yes | same | same | same (none) | same | DIFF |
| /service-areas/west-palm-beach/excavation-earthwork/ | | yes | same | same | same (none) | same | DIFF |
| /services/drainage-stormwater-solutions/ | | yes | **DIFF** | same | DIFF (live has, repo none) | same | DIFF |
| /services/excavation-earthwork/fill-import-export-hauling/miami/ (legacy) | | yes | same | same | same (none) | same | same |
| /about/ | | no | n/a | n/a | n/a | n/a | n/a |

Title differences, live vs repo:
- `/services/land-clearing-lot-preparation/`: live "Land Clearing and Lot Preparation in South Florida | Site Preparation Contractors | South Florida Site Work", repo "Land Clearing & Lot Preparation | South Florida | South Florida Site Work".
- `/service-areas/miami/`: live "Site Work Services in Miami, FL | Miami-Dade County Contractors | South Florida Site Work", repo "... | Miami-Dade County | South Florida Site Work".
- `/services/drainage-stormwater-solutions/`: live "Drainage and Stormwater Solutions in South Florida | Flood Zone Experts | South Florida Site Work", repo "Drainage & Stormwater Solutions | South Florida | South Florida Site Work".

Body text: `/services/`, `/service-areas/` and the sampled service-area pages match live (word overlap 0.98 to 1.00). The homepage (0.91), `/services/land-clearing-lot-preparation/` (0.82; live 1,157 words vs repo 801) and `/services/drainage-stormwater-solutions/` (0.81) have been expanded live.

**Protected page parity: fails.** 4 of 6 protected pages are not in the repo at all. The other 2 differ in canonical and JSON-LD, and `/services/land-clearing-lot-preparation/` also has a different title and roughly 350 more words live. Deploying this repo would drop the best-ranking pages. Live protected-page values to preserve:
- `/resources/land-clearing-cost-per-acre-florida-keys/`: H1 "Land Clearing Cost Per Acre in the Florida Keys, FL: 2025 Pricing Breakdown".
- `/resources/drainage-system-installation-cost-south-florida/`: H1 "Drainage System Installation Cost in South Florida: Complete 2025 Guide".
- `/resources/land-clearing-cost-per-acre-west-palm-beach/`: H1 "Land Clearing Cost Per Acre in West Palm Beach, FL: 2025 Pricing Breakdown".
- `/resources/land-grading-cost-per-acre-florida/`: H1 "How Much Does Land Grading Cost Per Acre in Florida? 2025 Pricing Guide".
- Each resource title is the H1 followed by "| Resources | South Florida Site Work | South Florida Site Work" (the brand appears twice, a live bug to note but not change without approval). Each has a self-referencing trailing-slash canonical.

### Form diagnosis

- **Posts to:** `https://api.web3forms.com/submit` (client-side `fetch`, FormData). Confirmed in the live JS chunk and by intercepting the request in Playwright. All POSTs were aborted in the browser; nothing was sent.
- **Fields sent:** `access_key`, `name` (first plus last), `email`, `message` (address, service, budget, timeline and details joined into one text), `subject` ("New Quote Request: {service}"), `from_name` ("South Florida Site Work Contact Form"), `to_email`.
- **Visible fields:** first name, last name, email, address or city, service dropdown, budget dropdown, timeline dropdown, details; button "GET MY QUOTE". Required checks are done in JavaScript (form is `noValidate`). No phone field, no consent checkbox, no hidden source or UTM fields.
- **Access key:** yes, a Web3Forms access key is present client-side in the JS bundle (value not recorded). It is a different key from the Miami Septic Pros one. Web3Forms keys are designed to be public, but the plan's ingest endpoint will replace this.
- `/contact/` has a second Web3Forms form (name, email, subject, message).
- **Coverage:** the hero form is on 146 of 228 pages, not every page. There is **no form** on `/services/` and the 35 `/services/{cat}/` and `/services/{cat}/{sub}/` pages, all 43 `/resources/` pages (including the 4 protected cost guides), `/about/`, `/projects/` or `/service-areas/`. The resource pages link to `#getting-quote` instead.
- Works today: this site produces the inbox leads, so this key and path deliver.

### Hosting inventory (WS6C start)

**The live site is not on Vercel.** It is on Namecheap shared hosting:
- Response header `server: LiteSpeed`, `x-turbo-charged-by: LiteSpeed`. No `x-vercel-*` headers anywhere.
- DNS: A record 198.187.29.126, nameservers `dns1.namecheaphosting.com` and `dns2.namecheaphosting.com`.
- It serves the static export (`out/`) as files. Rules live in a server `.htaccess` (returns 403, not readable).

Behaviour to reproduce on Cloudflare:

| Behaviour live | Detail |
|---|---|
| http to https | `http://southfloridasitework.com/` 301 to `https://southfloridasitework.com/` |
| www to apex | `https://www.southfloridasitework.com/` 301 to apex; `http://www.` 301 to `https://www.` then apex (2 hops) |
| Trailing slash | `/services` 301 to `/services/` (all pages) |
| `/index.html` | `/index.html` and `/services/index.html` return 200 (duplicates; no redirect) |
| Legacy URLs | 87 `/services/{cat}/{sub}/{city}/` return 200 plus JS redirect to `/service-areas/{city}/{cat}/{sub}/`. Recommend real 301s on Cloudflare |
| 404 | Unknown URLs return a LiteSpeed default 404 page, not the site's `404.html` |
| robots.txt | 404 live (repo has one) |
| Headers | No security headers, no CSP, no cache-control headers on HTML |
| Sitemaps | `/sitemap.xml`, `/sitemap-services.xml`, `/sitemap-locations.xml` (static files) |
| Third parties | GA4 via googletagmanager.com; Web3Forms; Google Maps embed on `/contact/` |
| Vercel-only features | None in use live (no functions, no image optimisation: `images.unoptimized: true`) |

### Risky claims (rules 2 and 3), live

| # | URL | Exact text | Rule |
|---|---|---|---|
| 1 | All 228 pages (footer) | "Dispatch Office", a street address with apartment number (the one quoted in master plan WS6A.6), "NO WALK-INS. This is our dispatch office address only." | 3 |
| 2 | All 228 pages (JSON-LD) | `ConstructionCompany` schema (a LocalBusiness subtype) with `PostalAddress` (same street address) and `geo` coordinates | 3 |
| 3 | / | "Representative Projects. Examples of the types of projects we coordinate across South Florida." Three cards with "Outcome:" lines: "Site ready for building construction on schedule, with all permits and inspections completed."; "Perfect building pad elevation achieved. Drainage system handles heavy South Florida rains. Home construction proceeded without delays."; "Eliminated flooding issues. Property now handles stormwater effectively. Improved property value and usability." | 2 |
| 4 | / | "Work Completed: Performed detailed site grading, created proper building pad elevation, installed French drain system..." (presents work as done) | 2 |
| 5 | /projects/ | H1 "Project Examples", 9 project cards with "Outcome:" lines, for example "Eliminated flooding issues completely... Property value significantly improved." and "Project completed on schedule with proper drainage established." | 2 |
| 6 | / | "Safety First. ... All contractors in our network maintain current safety certifications, proper insurance coverage, and adhere to strict safety protocols." | 2 (unverified insurance claim) |
| 7 | / | "Reliability & Experience. With extensive experience coordinating large-scale site work projects..." | 2 (experience claim) |
| 8 | /about/ | "All contractors in our network are licensed, insured, and vetted for quality and reliability. We verify certifications, equipment, and experience before adding contractors to our network." | 2 (unless verification is real) |
| 9 | 6 `/resources/how-to-prepare-land-for-construction-*/` and `/resources/how-to-get-site-work-permits-south-florida/` | "Our licensed contractors ensure your site is ready for construction..." / "Our licensed contractors can help coordinate permits..." ("our" implies employees) | 2 (wording) |
| 10 | / (meta description) | "Licensed contractors for commercial and custom home projects starting at $25,000." | 2 (low; fits the referral wording if reworded to "independent, licensed local providers") |

Count: 10 items (2 high-volume sitewide: address and schema). The footer referral wording ("We coordinate work using a vetted network of licensed contractors... is owned and operated by First Class Contractors") is close to the rule 2 disclosure and can be kept with minor wording.

### Decisions needed

1. Owner (P1): push the live source code (the build deployed 18 Jan 2026) to GitHub on a branch. Yes or no: is that source on your computer or in Cursor?
2. Confirm hosting is Namecheap, not Vercel, so WS6C becomes "Namecheap to Cloudflare". Yes or no.
3. Search Console export of pages with clicks, to extend the protected list.

### Unverified

- Contents of the live `.htaccess` (not readable). Behaviour above is from probing.
- Which email the live SFSW Web3Forms key delivers to (assumed support@ because leads arrive).

## WS6C prep (28 Oct 2026): live snapshot taken

Full read-only snapshot of the live site in `snapshot-live-2026-10-28/` (see its README for method). GET requests only; no form submitted; nothing changed live.

- 354 URLs requested: all 228 sitemap URLs 200, 87 legacy seeds 200, 38 more from links (30 x 200, 5 x 301, 3 x 404). 346 distinct 200 HTML pages: 216 real, 12 `?page=` copies listed in the sitemap, 117 legacy JS-redirect pages (87 known plus 30 Florida Keys ones linked from live `/services/{cat}/{sub}/` pages).
- Trailing slash 301 on all 332 probed pages; www and http are separate 301 hops; `/index.html`, `//services/` and `/404/` serve 200 duplicates; `/_next/` shows a directory listing; unknown URLs get LiteSpeed's 404 page.
- 3 internal links point to legacy Miami URLs that 404.
- Draft rules: `inferred-_redirects` (333 live-parity 301s, 234 commented RECOMMENDED legacy 301s) and `inferred-_headers` (5 Cache-Control rules). Inferred from probes; confirm against `.htaccess` when the owner provides it.
- Size about 47 MB, all committed.
