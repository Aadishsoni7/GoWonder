# Original map restoration

Reference: c9cb8cdebd0eb7a12bf84d1d9f834fdf102e02c6, “Clarify discovery layers, improve readability and restore seven evidenced paths”. This is the last Offbeat commit immediately before the GoWonder redesign. Earlier local history (22d402c and 1723f4d) also confirmed the original map structure. Source was recovered through the connected GitHub repository. No reset or checkout overwrite was used.

Before edits, a complete source/content backup and the redesigned HTML were copied to backups/before-original-map-restoration. Seven reference files from c9cb8cd are saved in backups/original-reference-c9cb8cd. Both folders are beside work and outputs in this task workspace.

## Preserved and restored

- Restored the c9cb8cd homepage, HeroMap, star logo structure, header, familiar worlds, unexpected doors, human stories and footer. Only the visible wordmark text changed to GoWonder.
- Original style.css, creative.css and readability.css compare equal as text to the recovered reference. The newer forest green design stylesheet is no longer imported. A small restoration.css supports the permitted entrances, enlarged reading cards and retained activity/video controls.
- Restored the original DiscoveryCanvas branch/layout structure, rough connecting edges, world and pursuit nodes, selected-node controls, mystery intersections, trail, zoom, fit and pan.
- Restored the original FieldNotes component and its separate Try it, People and A little deeper sections. Existing practice data and numeric completion IDs remain compatible. Practice choices have descriptive labels and do not represent school grades.
- Kept 150 public possibilities, 17 world/group nodes, 110 sourced people, 60 licensed portraits, older field IDs, the recommendation simulator, official video support, other games, sources, and all guest storage migration paths. No login or onboarding was added.

## Permitted additions

- What are you learning? and Questions you've always had both open the existing React Flow canvas. There is no replacement subject or question directory in the active route.
- 13 subject nodes each have five or six question branches. Mathematics has exactly six. There are 38 reusable question entrances, each connected to an existing public discovery ID; Netflix and Spotify still reuse Recommendation Systems.
- New question copy uses existing validated discoveries and their saved evidence. No new practitioner biography, portrait or external video ID was invented.
- Expanded field cards are up to 680 pixels wide and practitioner cards 560 pixels on desktop. Phone widths adapt to the viewport. A small camera button locates the question branches on phones.
- Restored the three exploration layers: familiar starts, possibility exploration, and expanded practice/practitioner/resource content. These describe the map, not educational levels. The original deeper content remains in its own tab and practitioners remain separate connected cards.
- Added staggered entrances to subject/question branches; retained original edge drawing and smooth camera movement with reduced-motion support. Fixed practitioner text wrapping and horizontal clipping.

## Verification

Desktop 1440 x 900 and phone 390 x 844, using the local React app:

A. Homepage → What are you learning? → Mathematics → six connected question nodes → Netflix → explanation/possibility reveal → Recommendation Systems → original field-note tabs → Justin Basilico → Try it. Selected three fictional shows and verified individual reasons and uncertainty feedback on desktop. Mobile reached the same activity and practitioner card.

B. Homepage → Questions you've always had → movie footsteps → Foley art → A little deeper → original workflow and source links → People → Karan Arjun Singh → Try it. Confirmed distinct second and further practice choices and repeated the practitioner/activity route on mobile.

C. Homepage → Surprise me → original graph question → pursuit and branches. Desktop opened game economy design; mobile opened technical art. Back navigation returned to the originating question.

D. My curiosity map → an existing saved Recommendation Systems discovery → original graph context → field notes and activity. Saved state survived refresh. The same saved discovery and activity opened on mobile. Existing trail and saved person remained present; no notebook reset was performed.

Zoom In and Fit View controls were exercised. Dragging the blank canvas changed its viewport translation by 100 horizontal and 40 vertical pixels while keeping the same graph nodes. Phone document width measured 390 pixels at a 390 pixel viewport; expanded field card measured approximately 326 pixels after camera scaling. The official practitioner video image loaded. No console errors were captured in the final browser inspection.

pnpm check:data and pnpm build passed, including practitioner coverage, graph target validity, five-to-six unique questions per subject, and saved-state migration checks. Existing Vite bundle-size and React Flow use-client warnings remain nonfatal.

## Remaining limits

- Fifty practitioner profiles still lack reusable portraits, including the Foley artist. Their honest source cards are preserved. Justin has an authentic official video frame; it is not represented as a licensed standalone portrait.
- Eighty-three candidate fields remain unpublished until direct practitioner evidence is available. A full recheck of every historical external link and complete playback of each video remains pending.
- No deployment or DNS change was made. The restored source commit skips CI deployment. Existing gowonder.me preparation and manual instructions remain available.
- The HTML export embeds scripts, styles and all 60 licensed portraits. Videos and external sources need internet. Browser URL policy does not allow automated file:// opening, so browser acceptance used localhost; the recipient opens the exported HTML directly in a normal browser.

Screenshots in outputs: Restored-original-map.png, Restored-subject-map.png, Restored-practitioner.png, Restored-mobile.png, Restored-home.png.
