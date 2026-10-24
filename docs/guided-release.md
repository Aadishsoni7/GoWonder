# GoWonder guided discovery release

24 October 2026. This release keeps the existing React/Vite product and changes its default presentation. Production uses the same GitHub main branch and Vercel project, with no DNS, account, secret or paid-service changes.

## Recovery point and scope

Previous live source: `967c70e2dfe48b25e94ea2009a1372e9b46f33c1` (includes the Microsoft Clarity addition). A remote branch, `recovery/before-guided-2026-10-24`, points to it. A local Git bundle is saved in `backups/gowonder-before-guided-2026-10-24.bundle`. Implementation uses `feature/guided-discovery` in a fresh `work/gowonder-guided` checkout. Existing work/offbeat and work/gowonder-2 working changes are untouched.

## What changed

The homepage now says "Discover things you never knew existed", explains the product plainly, presents Start with a subject and Start with a question, and demonstrates Mathematics → Netflix → recommendation systems → a real person → a way to begin. The previous working interest check remains secondary and optional. No new assessment or authentication was added.

Subjects and questions open a scrollable guided page by default. It reads the existing graph through src/data/guided.ts, without a second content database. Each field presents its question, plain explanation, field name, directly associated verified people, original media/source links, an optional starter and up to four related doors. Additional activities and connections open on request. Third-party videos load only after a click and never autoplay. Links retain source and photo credits; missing portraits have honest source cards. Duplicate work URLs are suppressed in presentation, not deleted from source records.

Saving uses the existing gowonder-v1/offbeat migration and notebook. Fields, questions, people and paths keep their IDs. An additive planned flag on the existing reflection record supports saving activities for later. Existing completion arrays and notes remain intact. Nothing requires finishing an activity before continuing.

## Original map preserved

React Flow, RoughEdge, existing canvas nodes, in-map field notes, practitioner/resource cards, three exploration layers, three practice records, cross-subject connections, collisions, panning, zooming, breadcrumb trail, search, Surprise Me and expandable branches remain. The default node cluster is smaller. Show more connections reveals a larger set; original branch paging remains available. Recenter map provides a direct return to the selected node. Question cards were widened and positioned to keep their actions reachable.

Guided routes retain #question/id, #field/id, #subject/id and #person/id. Optional map routes use #map/question/id and corresponding field/subject/person routes. Old links still resolve, now to guided presentation. Switching views retains the selection; map focus, trail, expansion and camera are retained during the visit. Browser back/forward and reading-position restoration are supported. No storage keys were changed.

All 150 public fields, 17 worlds/groups, 38 canonical questions, 110 people, 60 licensed portrait images and all existing media/practice data remain. The 83 unpublished candidates remain unpublished. No canonical files in src/data (except the new adapter), or portrait files, were edited. Assertions enforce direct practitioner relationships and actual graph targets.

## Verification

- pnpm check:data: existing raw content/reference checks, public evidence audit, old/current/malformed guest-storage migration, 507 assessment fixtures and new guided adapter checks.
- pnpm check:guided: 167 public node adapters, 38 canonical questions, 5–6 questions per subject, 110 person routes, 60 portraits, three practice records per field, valid related edges, duplicate-free media and map/guided route round trips.
- TypeScript and production build; no new dependencies. Existing React Flow directive and large JS chunk warnings remain nonfatal.
- Browser A: approved homepage copy and both entrances are visible and readable. This was an interface inspection, not a timed study with participants.
- Browser B: subject → Mathematics → six questions → Netflix guided page; recommendation explanation, Tony Jebara with original source, optional activity and real related questions.
- Browser C: movie-footsteps guided page → Foley art → Karan Arjun Singh → original Just Foley work link and ScreenSkills context.
- Browser D: guided → same question on map → reveal field → original layer 3 field notes and Try it/People/A little deeper tabs → return to selected guided field. Map zoom and pan tested; viewport transform before/after switching matched exactly in mobile viewport.
- Browser E: Netflix → Spotify related question → browser Back returns to Netflix. Existing same-field canonical relationship retained.
- Browser F: save field and activity, open notebook, reload and verify both remain. Migration tests confirm earlier offbeat and current storage are read. User-owned notebook on localhost:5173 was not modified during these tests.
- Browser G: 390 × 844 viewport, both homepage entrances, guided reading, sticky save/map controls and map zoom/pan. Document scroll width remained within viewport. No physical-device performance benchmark or actual multi-touch pinch test was available; those are not claimed.
- Reduced-motion styles disable the new transitions and reveals; content never waits for an animation to become available.

## Existing analytics and limitations

The owner's pre-existing Clarity tag remains. Notebook/assessment containers and guided notes are explicitly masked using Clarity's documented attribute. This is content masking, not a claim that all analytics or interaction metadata is disabled. Source: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking . No additional analytics service was introduced.

Accounts remain unavailable, and the retained interest check remains an unvalidated preview. Existing source evidence is reused rather than claimed as newly researched. Some people have no reusable portrait. External media availability and third-party playback restrictions can change. A complete live audit of every external source and physical-device testing remain outside this release's verification. The existing large initial bundle remains a performance improvement opportunity.

## Rollback

1. Open Vercel project gowonder → Deployments.
2. Select the prior successful production deployment from commit 967c70e2dfe48b25e94ea2009a1372e9b46f33c1 and use Rollback/Promote to Production. Inspect its status and verify gowonder.me.
3. For a source rollback, create a new revert commit for this guided release on the current main branch, review it and push normally. Do not reset or force-push over later changes. The recovery branch and Git bundle preserve the predecessor for comparison.
4. Keep Namecheap DNS unchanged. No local saved-note format is removed by this UI rollback; the optional planned flag can remain as unused data in older code.

Publication SHA, production status and direct live checks are recorded in the accompanying deployment artifact after the Vercel build succeeds.
