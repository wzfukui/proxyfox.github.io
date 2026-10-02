# ProxyFox SEO / GEO competitive plan

Date: 2026-10-03

## Executive decision

ProxyFox should not compete on the breadth of PAC engines, per-URL automation, proxy inventory, or cross-browser support. Its defensible position is **predictable Chrome proxy control for development, QA, and managed networks**: strict authentication matching, transactional changes, rollback, local storage, and safe exports.

The website should therefore win high-intent diagnostic and evaluation queries, then support every claim with a stable product-facts page, public source code, privacy documentation, and explicit product boundaries.

## Competitive observations

| Peer | Website acquisition pattern | Product promise | Gap ProxyFox can own |
| --- | --- | --- | --- |
| FoxyProxy | Long product history, large store footprint, browser help, broad feature list | URL patterns, per-tab routing, cross-browser use | A smaller, easier-to-audit control surface with strict auth matching and rollback |
| ZeroOmega | GitHub authority, SwitchyOmega continuity, PAC and auto-switch vocabulary | Advanced profiles and rules | Manual, predictable switching for users who do not need a rules engine |
| Proxy Switcher and Manager | Store-led discovery, PAC/manual/direct modes, error log | Broad proxy modes in a compact extension | Safer configuration lifecycle and clearer privacy evidence |
| MyBrowserAddon Proxy Switcher | Exact-match product page, FAQ, tutorial video, long feature/keyword coverage | Simple multi-proxy switching | Higher-quality troubleshooting content and verifiable data handling |
| ProxyOmega extension | Focused landing page, three-step setup, permission table, FAQ, provider integrations | One-click profiles tied to a proxy service ecosystem | Vendor-neutral, bring-your-own-proxy workflow without account or bandwidth upsell |

Sources reviewed:

- https://getfoxyproxy.org/help/browsers/
- https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp
- https://github.com/zero-peak/ZeroOmega
- https://chromewebstore.google.com/detail/proxy-switcher-and-manage/onnfghpihccifgojkpnnncpagjcdbjod
- https://mybrowseraddon.com/proxy-switcher.html
- https://proxyomega.com/chrome-extension/

## Search and answer-engine gaps

1. The old site had a useful homepage but too few indexable answers for high-intent problems.
2. Product claims were distributed across the homepage and privacy page instead of one stable, citeable fact record.
3. The sitemap lacked `x-default` alternates, and search results showed signs of stale English-page snippets.
4. Existing content emphasized setup, while peers and proxy vendors capture demand through troubleshooting, protocol comparison, and provider-specific tutorials.
5. AI search does not require a special `llms.txt` file. Crawlable HTML, unambiguous facts, semantic structure, and current sitemaps are the durable foundation.

## Implemented direction

### Evidence layer

- Added bilingual Product Facts pages covering supported modes, version, license, permissions, local storage, export behavior, and explicit non-capabilities.
- Expanded homepage structured data into a connected `Organization` + `WebSite` + `SoftwareApplication` graph.
- Added visible authorship/update context and `TechArticle` + `BreadcrumbList` structured data to all new guides.

### Intent layer

Added bilingual pages for three high-intent query clusters:

- Chrome proxy authentication / HTTP 407
- Chrome proxy not working / IP unchanged / setting conflict
- HTTP vs HTTPS vs SOCKS5 proxy vs VPN

Each page starts with a direct answer, provides a diagnostic sequence, names product boundaries, and links to the next relevant task.

### Discovery layer

- Expanded the homepage guide hub from four to eight entry points.
- Expanded the XML sitemap to all new language pairs and added `x-default` alternates.
- Added an IndexNow key, submission script, and GitHub Actions workflow so updated sitemap URLs are proactively announced after relevant pushes.

## Next measurement cycle

Use Google Search Console and Bing Webmaster Tools after access is available. Review at 28 and 56 days:

- indexed URL count and stale canonical variants;
- impressions/clicks for `chrome proxy not working`, `proxy authentication 407`, `socks5 chrome`, and Chinese equivalents;
- homepage-to-guide and guide-to-store click paths;
- queries where an answer page receives impressions but has low click-through rate;
- referring pages and AI-search citations that reuse Product Facts claims.

Do not publish generic weekly articles merely to increase page count. Add a page only when it resolves a distinct user decision or failure mode and can be maintained from product evidence.
