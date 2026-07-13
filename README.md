# Les Acolytes — website

A simple website with a built-in editor so non-technical people can update text, photos, events, and videos without touching code.

**Stack:** [Eleventy](https://www.11ty.dev/) (static site generator) + [Decap CMS](https://decapcms.org/) (the `/admin` editor) + [Netlify](https://netlify.com) (free hosting + login for the editor).

## Local development

```
npm install
npm start
```

Opens the site at `http://localhost:8080`. The admin panel at `/admin` won't work locally (it needs Netlify Identity) — test it on the deployed site instead.

## One-time setup: deploy to Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → pick this repo.
   - Build command: `npm run build`
   - Publish directory: `_site`
3. Once deployed, go to **Site configuration → Identity** and click **Enable Identity**.
4. Under Identity → **Registration**, set to "Invite only" (so randoms can't sign up).
5. Under Identity → **Services**, enable **Git Gateway**.
6. Update `site_url` in `src/admin/config.yml` to your actual Netlify URL (e.g. `https://les-acolytes.netlify.app`), commit, and push.

## Inviting your brother as the editor

1. In Netlify: **Site configuration → Identity → Invite users**, enter his email.
2. He'll get an email invite, sets a password, and can then log in at `yoursite.netlify.app/admin`.
3. From there he can edit:
   - **Site Settings** — ensemble name, tagline, bio, member list, hero/about photos, contact email, Instagram link.
   - **Events** — add/edit/remove concerts (title, date, venue, ticket link, photo).
   - **Media** — YouTube video IDs (the part of the URL after `watch?v=`) and gallery photos.
4. Saving in the CMS commits directly to the repo and Netlify auto-rebuilds the site (~30 seconds).

## Content structure (for reference)

- `src/_data/settings.yaml` — global site content (about, contact, members)
- `src/content/events/*.md` — one file per concert/event
- `src/_data/media.yaml` — YouTube videos + photo gallery
- `src/images/uploads/` — where photos uploaded via the CMS land
- `src/images/placeholders/` — placeholder graphics to swap out for real photos
