# GoWonder personal discovery preview

## What changed

An optional homepage invitation and a compact hero link open #discovery. The original visual identity, map renderer, two existing entrances, Surprise Me, 150 published possibilities, 110 people, existing photographs, media, three exploration layers and device notebook remain. No old question or node was removed. Existing map questions were reviewed for relevance; the new questionnaire uses familiar situations with more mature, concrete wording. Ten original answer choices were broadened to balance interest coverage, and several ambiguous phrases were clarified.

## What the visitor gets

24 questions, four comfortable choices per screen, a visible continuous 10 minute timer and answered progress. Selection advances automatically with a short transition. Previous choice retains the answer and lets the visitor replace it. The timer stays visible while scrolling. In-app navigation retains the attempt and the timer continues. Reload starts a fresh preview, with that limitation explained before starting. Results remain available during the visit. Retake and clear erase the assessment from memory. The visitor can still use every original entrance without an assessment or account.

The result describes up to four current directions without percentages, confidence estimates, personality diagnoses or career predictions. Six distinct fields are suggested across at least three categories, including one outside the first two directions. Each suggestion opens a canonical #question route in the existing graph, followed by its possibility, people and activities. The same answers produce the same result. Equal scores have equal standing.

## Reviewed tables and model

- [Answer mapping and editorial rationale](discovery-scoring-review.md)
- [All questions and answer tags](discovery-questionnaire.md)
- Versioned mapping and deterministic recommendation logic: src/data/assessment.ts
- Session transitions, total deadline and clock handling: src/data/assessment-session.ts

Six broad dimensions are inspired by RIASEC. This original questionnaire is not the validated O*NET Interest Profiler. The original O*NET tool has its own research, formats and licensing: https://www.onetcenter.org/IP.html. No O*NET test questions, normative scores or scientific reliability claims are used here.

## Accounts and younger visitors

This release uses the brief's limited-preview fallback. It does not offer simulated sign in. No Google or email login, recovery, cloud history or account deletion service is represented as working. These require a separate real provider setup, security tests and reviewed age/consent approach. See [the account implementation stage](discovery-accounts-stage.md), including configuration, costs, data boundaries and launch gates.

The preview requests no identity or age data. Responses and scores exist only in browser memory for the visit; no assessment storage, URL payload, upload or analytics is added. The existing guest notebook remains separate. Saving a suggested question explicitly stores only its question ID through the existing notebook. Its Clear notebook and download features remain available. No assessment result is automatically attached to that notebook or an account.

## Verification completed before release

- pnpm check:data: existing raw content checks, public practitioner/activity coverage, graph targets and guest storage migration.
- pnpm check:discovery: 24 × 4 choices, exactly 16 opportunities per dimension, no duplicate tags within a question; malformed/missing answers; 18-answer threshold; balanced ties; 507 complete/partial recommendation fixtures; six unique questions and fields; category diversity; unexpected question outside first two directions; deterministic repetition; editing an earlier answer.
- Session tests with controlled clock readings: complete attempt; zero/insufficient answers; 18-answer provisional result at deadline; late answers rejected; wall-clock rollback; background/suspended-tab catch-up; back navigation retains choices; retake begins with no old answers and a fresh deadline. These are automated clock tests, not a claim of waiting ten minutes for every browser scenario.
- Browser: full 24-choice completion; back and replace; leave and return while timer continues; all six result buttons open the original graph; explicit question save survives reload and appears in the notebook; reload clears the assessment; clear attempt; original subject and question entrances; six Mathematics branches; Surprise Me; Foley question → possibility → layer 3 field notes → activity and people tabs.
- Mobile 390 × 844: readable question layout, one-column answers at least 78 CSS px high, visible sticky countdown, result layout without horizontal overflow. Desktop introduction and map/result journey inspected.
- Reduced motion: dedicated stylesheet rules disable new animation and transition effects; actual OS preference switching was not exercised. Existing reduced-motion map behavior remains.
- TypeScript and production build. Existing large-bundle and React Flow directive warnings are nonfatal and remain a performance limitation.

## Not completed or claimed

Scientific/psychometric validation, representative user trials, real provider authentication, login/logout/recovery tests, cloud persistence and account deletion tests, legal sign-off and guardian verification. The preview deliberately has none of those interfaces or data flows. No paid service was added. Hosting/provider operational logs remain subject to their existing policies.

## Working copy and rollback

Work was made in feature/personal-discovery, in a fresh checkout of the published repository. The previous working tree was preserved. A Git bundle of the preceding published history is kept locally at backups/gowonder-before-personal-discovery.bundle. The production predecessor is e925307a3853c9b841d71dc1470e8893eb52aec2. Restore it through Vercel rollback or a reviewed revert if needed; do not reset unrelated work.
