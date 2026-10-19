# Offbeat

A discovery app for curious young people in India. The map is the main experience: follow possibilities, try a small task, meet people through their work and keep a reflection.

## Run and check

Use Node 22.12 or newer and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm check:data
pnpm build
```

This is a static React, TypeScript and Vite app. There is no account or backend sync. Notes, saved discoveries and tried levels stay in this browser. Hash routes support fields, person stories, the directory and notebook, including the standalone export.

## Current revision: 19 October 2026

The homepage now starts with familiar worlds and curiosity questions. Surprise Me opens a question in the graph, with another question available without immediate repetition. In-map practitioner buttons, three levels, saving and existing mini games are preserved. Rhythm and scene ordering demonstrations are added. The questionnaire is not exposed.

There are 143 public possibilities, 17 world/group entrances and 108 practitioner records. Sixty portraits have licensed local assets; other profiles link to sourced work. Eighty-three candidate entries remain in the editorial registry until a directly relevant practitioner connection is established. Their existing IDs, level content and saved notes are preserved. Broader stories no longer qualify as exact evidence for publishing a possibility.

`pnpm check:data` checks both retained raw data and the public map. The publication audit writes `docs/editorial-report.json` and its readable Markdown counterpart. Earlier source research is reused rather than represented as freshly checked. See `docs/evidence-updates.md` for this revision's targeted source checks and `docs/upgrade-validation.md` for browser checks and limitations.

The animated colour backdrop uses vector drawings, CSS gradients and reduced motion support. No autoplay audio or video is introduced. No backend, authentication or payments are added.

## Readability and discovery layers

The map identifies each exploration layer and keeps labelled steps in its trail. Reading cards now use darker text, larger body copy and bold sans-serif headings. Decorative elements behind text are quieter. The original expressive homepage headline is retained.

Targeted research restored seven additional paths: YouTube creation, narrative design, game writing, screenwriting, revenue operations, sales operations and newsletters. New practitioner profiles are Meghna Jayanth, Jeff Ignacio and Varun Grover. Nikhil Malankar's own biography supports the YouTube connection. No new portrait or video ID was fabricated.

## Historical revision of 18 October 2026

The following describes the previous version; the current publication gate and deferred questionnaire supersede it.


All 233 existing map entries now have three distinct authored tasks: 699 level drafts in total. The levels move from a small starter through repeated practice to a deeper project or supervised learning plan. Materials, later tools, reflection and optional completion are included. The old empty activity message and repeated deeper description fallback have been replaced. The 56 original activity records remain for historical content and reflection choices; the three level pathways drive the current interface.

The People directory exposes all 98 records with name and field search, world and story context filters, a portrait filter and a result count. The homepage links to the full collection. Sixty existing profiles retain licensed local portraits. Thirty-eight newly sourced profiles use deliberate source story cards until portrait reuse rights are obtained. No substitute faces are used. Documented field connections cover 130 map entries. Another 103 entries use explicitly labelled broader stories; they are not presented as exact specialists.

The optional six question curiosity check suggests starting fields based on the visitor's choices and includes a deliberately different option. It permits skipping and changing answers. It is not a validated psychological, personality or aptitude assessment. Notebook progress is separate for each level and survives reload; export and explicit reset controls are available.

## Content and research

* `src/data/worlds/`: 233 entries across 12 worlds with stable IDs.
* `src/data/learning.ts`: all 699 authored tasks, materials, reflections, example workflows and related connections.
* `src/data/people-a.ts`, `people-b.ts`, `people-extra.ts`: 98 sourced profiles.
* `src/data/resources.ts`, `resources-extra.ts`: 82 resource records.
* `src/data/relationships.ts`: 266 graph relationships.
* `public/portraits/` and `public/credits.html`: 60 licensed portraits with attribution.
* `docs/handoff/`: the readable implementation brief, complete field handbook, People inventory, structured import pack, source register and remaining research briefs.

The source register contains 203 unique URLs. Some are from the saved research and have not been reopened in this pass. New source content supports the stated role or account, but self reported portfolios are not independent verification of marketing claims. Two additional video IDs were found on the International Actuarial Association organiser page; playback and embed availability are not claimed as verified. Keep an external link alternative.

Personal beginnings, habits and working days are only included when documented. General learning workflows are labelled separately from biographies. Many profiles still need richer first person journey material. There are also 113 entries without an assigned dedicated resource in the handoff; related sources are labelled, and the activity remains usable. This revision does not claim exact specialist and dedicated tutorial coverage everywhere.

## Verification and limits

Data checks validate all node IDs, graph references, all three levels for every entry, unique level IDs, person and resource references, and existing licensed portrait files. TypeScript and the production build pass. The build currently contains a large content bundle; the standalone export deliberately embeds it and the 60 portraits.

Fresh browser checks cover People search and a connected story, distinct wildlife tasks at all three levels, Level 2 completion after reload and in the notebook, and a 390px phone route for bird photography with its activity and person connection. The optional curiosity check was exercised through skipped questions to explained results. No browser console errors were observed in that check. A browser automation batch stalled once; individual step checks then completed. Not every one of the 699 tasks, external URL or video has been manually tested. Starter drafts are not professional training. Physical participation, workshops and specialised work retain appropriate observation or supervised alternatives.

## Publishing

GitHub repository: https://github.com/Aadishsoni7/OFFBEAT . Its existing public visibility is preserved. Keep the existing Sites identity in `.openai/hosting.json`; do not create a duplicate Site. Private Sites publication remains blocked by automatic approval review at the credential input step because sandbox approval is disabled. A GitHub source upload is not a hosted website deployment. The deliverables include a standalone HTML app and source package.
