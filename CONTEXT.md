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
- Single scrolling page (`src/index.njk`): Hero → About → Events → Media → Contact, modern-minimal design (warm off-white background, one red accent, sans-serif).

## Status as of 2026-07-14

Site scaffolded and building locally (`npm start`), concert-hall brown/mahogany palette with Playfair Display + Source Serif 4 typography, scroll-fade reveal effect, and free stock photos (Pexels) standing in for real ensemble photos. **Not yet deployed.** Repo is local-only git (no remote configured yet).

## Next steps

All detailed in `README.md` at the repo root:
1. Push this repo to GitHub.
2. Connect it to Netlify (build command `npm run build`, publish dir `_site`).
3. Enable Identity + Git Gateway on the Netlify site.
4. Update `site_url` in `src/admin/config.yml` to the real Netlify URL, commit, push.
5. Invite the brother's email as an Identity user so he can log into `/admin`.
6. Swap placeholder text/photos/YouTube IDs for real content via the CMS.

When resuming work, check `git log` rather than assuming deployment status — steps 1–5 happen outside a Claude session (need the user's GitHub/Netlify accounts), so they may or may not have happened between sessions.
