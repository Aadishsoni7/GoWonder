# Offbeat: implementation brief for Codex

Continue the existing Offbeat repository. Preserve the useful map, images, saved research and IDs. This pack is the working content source, not permission to fill gaps with fictional biographies. You may improve interaction and wording using judgement, but do not remove specific tasks or replace them with repeated generic advice.

## Read these files first

Read `content-pack.json`, `02-All-fields-and-levels.md`, `03-People-and-sources.md`, `source-register.json`, `specialist-research-queue.json` and `validation.json`. Use the report to distinguish authored content coverage from verified practitioner coverage. The activities are new editorial drafts, not professionally accredited instruction. External sources have different verification states, which must survive import.

## The result the visitor needs

The visitor can arrive without a goal, explore a possibility, understand it in ordinary language, try a specific small task, reflect, meet a relevant person and choose whether to practise further. The next step must remain available when a specialist profile or external video is incomplete. A map label by itself is not a finished discovery experience.

## Three levels in every field card

Import all 233 node IDs with their three distinct tasks. Display one stage at a time with visible buttons for Level 1, Level 2 and Level 3. Do not confuse graph depth with learning depth. Use the supplied task text rather than generating the same three steps for every field.

Each stage shows its task, approximate time, what is needed, an example of evidence to keep, its reflection question and optional completion. Preserve the existing interactive examples where they make sense. An activity outside the browser can be useful without pretending it is an interactive simulation. Completion means the visitor tried something; it must never imply competence or a professional certificate.

Use separate saved progress per field and stage. Retain existing saved fields and notes. Let visitors skip ahead, repeat an activity, choose an observation alternative or say “Not for me.” Do not lock Level 2 behind a login or claim that buying equipment unlocks Level 3. Keep personal notes local unless a separate backend and consent flow are explicitly implemented.

For sports, animals, laboratory work, workshops and other relevant fields, retain the supervised or observation alternatives in the content. Do not simplify an observation activity into an unsafe practical instruction. Costs are not researched price quotes: show what can be tried with existing or borrowed materials and leave specific purchase pricing out.

## People directory and story pages

Add People to navigation on desktop and phone. The homepage can show a small changing selection, but its “Meet everyone” link must open a real directory. Show the count matching the current filter, search by name and work, and offer field and location filters without classifying people by unsupported sensitive attributes.

The pack contains 60 saved profiles with licensed local portraits and 38 new source backed profiles. Keep these statuses separate. All 98 can have a readable story entry and source link. For the new entries, use a deliberate text based source card until an actual reusable portrait is obtained. Do not use AI faces, stock stand-ins, logos presented as faces or a broken image. Do not claim every profile has a portrait.

A person's entry should contain a factual introduction, documented journey points, concrete work links and a relevant beginner task. Where the supplied source does not establish the first discovery or daily routine, do not invent one. A brief factual profile is preferable to a false dramatic life story. Field advice belongs under a separately labelled example workflow, not in the biography.

The supplied direct matches cover 130 entries. The other 103 have explicitly labelled broader field stories and a research brief. Do not silently turn those broader matches into “this person does this exact niche.” Keep “documented field connection” and “broader field story” separate in the UI and in coverage reports. Category roots should show a collection of people rather than claim one person is a specialist in a whole world.

## Replace the incomplete states

Remove “A tailored experiment is still being edited” now that a task exists for every entry. Do not show a timed activity with no task. Remove the default empty People state as the first thing a visitor sees. Where an exact specialist is still absent, show the completed activity and an honestly labelled related story rather than a false exact match.

Replace repeated deeper descriptions with the supplied example workflow, skills to explore, later tools and relevant requirements. Keep deeper information collapsed until requested. Do not fill qualifications, salaries, internship availability, current job titles or regulatory requirements from memory. Verify these if you add them. Some existing sources are historical and must not be treated as current appointments.

## Links, videos and attribution

Use `source-register.json` as the source inventory. A saved link is not the same as a freshly tested link. Check links in the implemented routes, record failures and show a useful alternative. A video identified from an organiser page still needs playback and embedding checks. Do not guess a YouTube ID or make a search results URL look like a verified interview.

Load videos only after the visitor presses Play. Keep an Open on YouTube alternative. A portfolio, article or institutional page is a valid useful source; do not call it a tutorial or a video when it is not one. Resources from an adjacent field must remain labelled as broader context.

Keep all original portrait source, author and licence information, including licence version and any share alike terms. A public profile photo is not automatically reusable. New portraits need a suitable licence or permission. Never scrape private contact information or send outreach without explicit user authorisation.

## Optional curiosity check

Add a small optional entry called Help me choose a first thread. The original Show me what exists action remains dominant. Use concrete preference questions about observing, making, explaining, organising, solving or playing. Allow Not sure and Skip. This is a custom preference feature, not a validated psychological or aptitude assessment.

Return several possibilities with a clear “because you chose…” explanation and at least one deliberately different option. Include hobbies and play as well as professional fields. Do not label the visitor a personality type, calculate fake match percentages or say they should become a particular professional. Let the visitor revise answers and explore the entire map.

After an activity, use the visitor's own reflection to suggest related fields, but keep the route reversible. Do not infer mental health, ability or identity. If a validated assessment is later desired, review the instrument, licensing and suitability for young people in India before making psychometric claims. Reference: https://www.onetcenter.org/reports/IP_Manual.html

## Navigation and practical access

Add stable hash routes or equivalent routes compatible with the standalone export for home, a field, a person, People, the notebook and the curiosity check. Browser Back and Forward should restore the selected destination. A copied field or person route should open that destination. Note that local file URLs only work on a machine with the file; a shareable public address requires actual hosting.

Keep the visual map organic and focused. Preserve pan, zoom, keyboard access, visible focus, reduced motion and a readable phone layout. Make People reachable on phones even if the full desktop navigation is hidden. Preserve the user's trail and level progress across reloads. Provide a small export and explicit reset option for saved progress, with a confirmation for clearing it.

## Definition of done

1. Every one of the 233 IDs resolves to three distinct, nonempty tasks. Test field content, not only graph references.
2. All 98 supplied person records are reachable through the directory or clearly labelled source story collection. All 60 licensed existing portraits load. New portrait work is separately counted, not hidden by substitute images.
3. Wildlife photography has three stages and its own people; Bird photography has a tailored task and a bird photography practitioner.
4. Foley, thumbnail design, sales engineering, forensic accounting, sports analysis, museum design and actuarial science expose their new source backed connections.
5. A visitor can finish a stage, reload, revisit it in the notebook and keep the correct completion state. Marking a second stage must not overwrite the first.
6. No field opens to an empty activity promise. No broader person connection is labelled exact. No deeper panel merely repeats its introduction.
7. Test desktop and a phone viewport, keyboard navigation, long cards, empty search, filters, video fallback, image failure, Back, Forward and copied routes.
8. Verify TypeScript, production build, all content IDs, all internal links, every level and visible source links. Report pending professional review, portrait permissions and dedicated specialist work honestly.
9. Regenerate the standalone HTML and source package from the same final build. Keep their content in sync with GitHub. Report the actual runnable URL or file and do not call a repository page the hosted website.

## Copy and paste prompt

Implement the attached Offbeat content pack in the existing repository. Read 01-Implementation-brief.md and content-pack.json first. Replace the incomplete Try it experience with all 233 field pathways and their 699 distinct tasks. Add the full People directory, readable source backed stories, stable routes, stage progress and an optional curiosity check. Preserve the organic in-map experience, existing IDs, licensed images and saved user data. Use judgement to improve usability, but preserve evidence states: a broader field example is not an exact practitioner match, and a new profile without portrait rights must not receive a fabricated face. Finish the app, validate the specified routes and content, regenerate the export, and report the runnable result and any remaining editorial work with exact counts.
