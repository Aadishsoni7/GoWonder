# Offbeat

A discovery app for curious young people in India. The map is the main experience: follow possibilities, open field notes, grow a person or video card, try a small activity and keep a reflection.

## Run and build

Use Node 22.12 or newer and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm check:data
pnpm build
```

This is a static React, TypeScript and Vite application. Content and saved progress stay local. No backend or sign in is needed. Production files build into `dist/`. Optional Google Fonts have system font fallbacks.

## What changed in this revision

The fixed columns and right drawer have been replaced with React Flow. Possibility cards, expanded notes, people, mystery connections and video resources are actual graph objects. The canvas pans and zooms, draws deterministic Rough.js edges, moves its camera as you explore and separates nearby cards when an object expands. Only the current neighbourhood and recent path are rendered.

Twelve visual worlds use distinct colours, gradients, silhouettes and typography. Phone layouts use a focused sequence below the selected node. Keyboard buttons, visible focus, accessible names and reduced motion are supported.

## Content structure

- `src/data/worlds/`: 233 possibilities across 12 world modules.
- `src/data/activities.ts`: 56 small experiments with specific reflection prompts.
- `src/data/resources.ts`: 44 sourced reading, portfolio and video resources.
- `src/data/relationships.ts`: 266 semantic connections, including 14 intersection destinations.
- `src/data/people-a.ts` and `people-b.ts`: 60 researched people with actual reusable photographs.
- `public/portraits/`: all 60 local image files.
- `public/credits.html`: source, author and licence attribution for the portraits.
- `docs/`: research ledgers and the data validation report.

People are matched through arrays of exact connected node IDs. One possibility can show several people. A missing specialist is clearly stated rather than replaced with someone from an adjacent field. At this stage 61 of the 233 possibilities have matched people, and 98 have direct resource links. More exact specialist profiles remain an editorial task.

The people collection includes practitioners, people who changed direction, accomplished figures and two clearly labelled diaspora examples. It does not claim everyone is unknown. Some historical portraits and event photographs are less polished than a commissioned portrait. Aditi Mittal uses a real but distant licensed performance still. No generated substitute faces or invented personal routines are included.

Five person profiles have verified YouTube videos. Other people link to work and written sources. Videos load only after a deliberate click; opening a video card initially shows a thumbnail. An external YouTube link is available when an embed cannot play.

## Interactions

- Progressive branches, alternate branch batches and mystery connections.
- Fuzzy search and aliases, including B2B, forensic accounts and youtube thumbnail.
- Expanded field notes with people, Try It and deeper information tabs.
- Connected people and video cards on the same canvas.
- Small demonstrations for sales questions, a fictional ledger, thumbnail choices, UX labels, sports tallying, a chess knight and a paper game rule.
- Specific reflections such as observing animals, taking photographs and telling a story, linked to further exploration.
- Saved curiosities, completed activities, surprises, people and trail in browser storage.
- Possible intersections appear in the notebook when two saved interests share an intersection.

Professional qualifications and regulated activities are kept in deeper notes. Activities are starter experiences, not professional training or eligibility advice. The app does not claim salaries or guaranteed outcomes.

## Verification

`pnpm check:data` validates unique IDs, every internal relation, activity/resource references, person matches, portrait files, reachability and the five required structural routes. It also regenerates the photo credits page.

Browser checks cover the full sales route to Sales Engineering, creator discovery to thumbnails on a 390px phone viewport, game making to narrative design, connected wildlife person cards, a developer story and deliberate video embedding. The ledger exercise, specific reflection and persistence after reload were checked. The graph kept a small neighbourhood in the DOM and did not create blocking dialogs. TypeScript and production build pass. Portrait binaries were decoded and the research contact sheets reviewed.

Browser testing covers the desktop in-app browser and an explicit phone viewport, not every physical device. There is no backend sync; clearing browser storage removes local progress. Current camera/page state restarts on reload, while saved discoveries and trail persist.

## Publishing

The existing Sites identity is retained in `.openai/hosting.json`; reuse it when publishing. Do not create a duplicate Site. GitHub is connected to Aadishsoni7/OFFBEAT. The supplied repository is public; its existing visibility is preserved. Source and licensed assets are saved there for future iterations.

Private Site publication was attempted on 18 October 2026. Automatic approval review rejected credential input to the official publishing helper because sandbox approval is disabled. No hosted deployment is claimed. The local app and source package are complete for review.

