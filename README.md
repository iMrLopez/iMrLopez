# marnylopez.com

Personal site of Marny Lopez. Next.js static export, hosted on GitHub Pages.

## Editing content

Everything on the site comes from typed files in `content/`. Edit those, not the components.

| File | What it holds |
|---|---|
| `content/profile.ts` | Name, headline, intro, links, `availableForWork` flag |
| `content/experience.ts` | Roles, newest first |
| `content/projects.ts` | All projects. `featured: true` puts one in "Selected work"; `details` gives it a case-study page. Never set `repo` for a private repository. |
| `content/education.ts` | Degrees, certifications, honors, toolbox |
| `content/resources.ts` | Videos, courses, papers |

LinkedIn is not synced automatically (its API doesn't expose positions or projects). Treat these files as the source of truth and mirror changes to LinkedIn.

## Contact details

Email and phone are shown only on `/card`, which is excluded from search engines. They're never committed: the build reads `CARD_EMAIL` and `CARD_PHONE` from the environment and inlines them encoded, and the page decodes them in the browser.

- Locally: put them in `.env.local`.
- CI: set them as repository secrets (`gh secret set CARD_EMAIL`, `gh secret set CARD_PHONE`).

## Scripts

```bash
pnpm dev          # local dev server
pnpm build        # static export to dist/
pnpm check        # typecheck + lint
pnpm screenshots  # refresh project screenshots from live sites (uses local Chrome)
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, typechecks, builds into `dist/`, and publishes to GitHub Pages. Pull requests run the same checks without deploying.
