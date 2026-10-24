# GoWonder

GoWonder helps young people in India find interesting things to learn, make and do. Start with a subject or a question, read a guided discovery, meet real people and try something small if you want to. The original interactive map is available for the same selected content.

Live: https://gowonder.me · Source: https://github.com/Aadishsoni7/GoWonder

See [guided UX release and rollback](docs/guided-release.md) for retained features and validation. Shared question/field links open guided reading; #map/question/netflix opens the optional connected map. Existing notebook storage and the optional interest-check preview remain.

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

## Current restoration

The visual reference is Offbeat commit c9cb8cdebd0eb7a12bf84d1d9f834fdf102e02c6. The original homepage, star wordmark, purple palette, animated background, graph, practitioner cards and Try it / People / A little deeper tabs are restored. GoWonder is the visible name. Both entrances now open guided reading, with an optional switch to the original graph. Subjects have five or six question branches, including six for Mathematics. See docs/restoration-report.md.

## What ships

Two main entrances, 38 curated everyday questions, 150 published possibilities, 110 practitioners, 60 licensed portraits and three optional practice choices per published discovery. Netflix and Spotify reuse one Recommendation Systems node. Broader arts, games, nature, science, business and sports remain available through the map and search.

The original map shows three exploration layers for familiar starts, possibilities and expanded people/resources/activities. Practice choices are optional and are not educational grades. Internal numeric activity keys remain compatible with earlier saved progress.

Guest saving works in local browser storage and imports earlier Offbeat storage when available on the same origin. It includes questions, discoveries, people, routes and reflections. Notebook JSON can be downloaded. Cloud accounts and sync are not connected. Feedback is explicitly local and is included in the export.

Practitioner evidence, licensing and limits are recorded in docs/editorial-report.md and docs/recommendation-evidence.md. 83 candidate fields remain unpublished until a directly relevant practitioner relationship is evidenced. Portraits are never generated substitutes. People without reusable portraits have honest source cards; Justin Basilico has an official conference video preview.

## Personal discovery preview

A new optional homepage entrance offers 24 choices and a continuous 10 minute session. Results connect six existing questions to the original map, with an unexpected direction. Answers stay in memory for this visit only. No login, cloud assessment history or minor profiling service is enabled. Refresh clears the preview. Explicitly saved questions still use the existing device notebook.

See [scoring and content review](docs/discovery-scoring-review.md), [account stage and privacy requirements](docs/discovery-accounts-stage.md), and [release checks](docs/discovery-release.md). This original questionnaire has not been scientifically validated.

## Deployment

Live at https://gowonder.me. Source: https://github.com/Aadishsoni7/GoWonder. Vercel deploys main automatically. See [Vercel configuration](docs/VERCEL.md). No paid backend, analytics or new personal data collection is added by the assessment preview.

## Source and portable files

React, TypeScript, Vite and React Flow. `src/data` preserves earlier research and IDs. `pnpm check:data` validates raw activity coverage, practitioner evidence, graph targets and question entrances. `node scripts/export-standalone.mjs` creates GoWonder.html with styles and 60 portraits embedded. Offbeat.html is a compatibility copy with the same GoWonder content. External media needs internet. Photo attribution is in credits.html.
