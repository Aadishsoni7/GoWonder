# GoWonder

A discovery app for young people in India. Begin with one of 13 familiar subjects or browse everyday questions. Follow a question into a connected map, meet real practitioners and try a small activity.

## Run locally

Requires Node 24 and pnpm 11.25.0.

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:5173. To validate and build:

```powershell
pnpm check:data
pnpm build
node scripts/export-standalone.mjs
```

## What ships

Two main entrances, 25 curated everyday questions, 150 published possibilities, 110 practitioners, 60 licensed portraits and three optional practice choices per published discovery. Netflix and Spotify reuse one Recommendation Systems node. Broader arts, games, nature, science, business and sports remain available through the map and search.

The content layers connect familiar starts, discoveries and deeper people/resources/activities. Numbered educational stages are not shown. Internal numeric activity keys remain compatible with earlier saved progress.

Guest saving works in local browser storage and imports earlier Offbeat storage when available on the same origin. It includes questions, discoveries, people, routes and reflections. Notebook JSON can be downloaded. Cloud accounts and sync are not connected. Feedback is explicitly local and is included in the export.

Practitioner evidence, licensing and limits are recorded in docs/editorial-report.md and docs/recommendation-evidence.md. 83 candidate fields remain unpublished until a directly relevant practitioner relationship is evidenced. Portraits are never generated substitutes. People without reusable portraits have honest source cards; Justin Basilico has an official conference video preview.

## Deployment

See [the complete GitHub Pages and Namecheap guide](docs/DEPLOYMENT.md). Canonical URL: https://gowonder.me. Domain setup and successful deployment must still be verified; the canonical tag is not proof of a live website. No paid backend, analytics, login or automatic data collection is added.

## Source and portable files

React, TypeScript, Vite and React Flow. `src/data` preserves earlier research and IDs. `pnpm check:data` validates raw activity coverage, practitioner evidence, graph targets and question entrances. `node scripts/export-standalone.mjs` creates GoWonder.html with styles and 60 portraits embedded. Offbeat.html is a compatibility copy with the same GoWonder content. External media needs internet. Photo attribution is in credits.html.
