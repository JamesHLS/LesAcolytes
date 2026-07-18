# Project context (for next session / handoff)

Website for the user's brother's ensemble, **Les Acolytes** (French Baroque cantatas, Cambridge-based).

Reference links:
- https://www.cmp.cam.ac.uk/events/event/item/les-acolytes-presents-french-baroque-cantatas/
- https://www.instagram.com/lesacolytesmusic/

## Stack

**Eleventy** (static site generator) + **Decap CMS** (`/admin` panel) + **Netlify** (hosting + Identity/Git Gateway for login).

**Why:** the brother who owns the site day-to-day is non-technical. He needs a form-based editor, not raw file editing — Decap CMS gives him a login at `/admin` where he edits content through fields, which commits to git and triggers a Netlify rebuild. Plain static HTML or a framework without a CMS layer was rejected for this reason.

## Structure

- `src/_data/settings.yaml` — global content (ensemble name, tagline, bio, member list, hero/about images, contact email, Instagram URL) — edited via Decap's "Site Settings" file collection.
- `src/content/events/*.md` — one markdown file per concert (title, date, venue, ticket link, image, description) — edited via Decap's "Events" folder collection. Seeded with the real Cambridge cantatas event plus one placeholder event.
- `src/_data/media.yaml` — YouTube video IDs + gallery photo list — edited via Decap's "Media" file collection.
- `src/images/uploads/` — where photos uploaded through the CMS land; `src/images/stock/` has free Pexels stock photos (chamber music/baroque instruments) standing in for real ensemble photos — swap for real photos via the CMS when available.
- `src/js/reveal.js` — IntersectionObserver scroll-fade-in effect (staggered for lists/grids), respects `prefers-reduced-motion`.
- Single scrolling page (`src/index.njk`): Hero → About → Events → Media → Contact. Concert-hall brown/mahogany palette (ivory `#f3ead9` bg, mahogany `#2b1d14` ink, brick-red `#7a2e1d` accent) with Playfair Display headings + Source Serif 4 body text. Hero is plain and static — single background image, `<h1>`/tagline over a dark gradient, **no entrance animation, no splash/landing screen.**

## Hero animation history — don't re-propose without explicit request

Several hero entrance effects were tried and all rejected: fade+scale on scroll, a two-panel sliding "curtain" split (looked like a slideshow transition, visible seam), a fade-dominant version with drift/blur/easing, a solid-overlay crossfade, and finally a full-screen timed splash screen before the main page — the splash was explicitly rejected too ("not good, lets go back to no landing page"). Conclusion: plain static hero, no landing page, no scroll-linked or timed animation on it. If asked to make the hero more dynamic again, ask what specifically is wanted rather than retrying any of the above.

## Status as of 2026-07-18

Site scaffolded and building locally (`npm start`), hero restored to plain/static. **Not yet deployed.** Repo is local-only git (no remote configured yet).

Real content in place for: media (2 real Marin Marais performance videos embedded, one is an actual Les Acolytes recording — YouTube ID `KMH-7NeWgVA`), member lineup (Andrew Taheny - violin, Billy Hui - flute, Timothy Lin - viola da gamba, Edward Campbell-Rowntree - harpsichord, no founder framing). About bio and event programme description are back to generic placeholder text — web-researched specifics weren't accurate for this ensemble and were reverted; don't re-add researched specifics without user confirmation. Photos are still stock/placeholder (Pexels).

## Next steps

All detailed in `README.md` at the repo root:
1. Push this repo to GitHub.
2. Connect it to Netlify (build command `npm run build`, publish dir `_site`).
3. Enable Identity + Git Gateway on the Netlify site.
4. Update `site_url` in `src/admin/config.yml` to the real Netlify URL, commit, push.
5. Invite the brother's email as an Identity user so he can log into `/admin`.
6. Swap placeholder text/photos/YouTube IDs for real content via the CMS.

When resuming work, check `git log` rather than assuming deployment status — steps 1–5 happen outside a Claude session (need the user's GitHub/Netlify accounts), so they may or may not have happened between sessions.
