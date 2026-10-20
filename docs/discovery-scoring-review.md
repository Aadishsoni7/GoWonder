# Discovery preview: content and mapping review

Version: discovery-1, 20 October 2026. Editorial and implementation review by Codex, not a psychometric or independent expert validation. Prepared before scoring implementation.

The original draft overrepresented making, creating and connecting. The revised choices provide exactly 16 opportunities for each dimension across 96 answers. Each answer has one primary tag and earns one point. No secondary tags, speed points, aptitude scores, percentages or confidence claims. This is an original exploration questionnaire inspired by six broad interest dimensions, not the validated O*NET Interest Profiler.

R = Make; I = Figure out; A = Create; S = Connect; E = Make it happen; C = Find the pattern (organising and checking details as well as patterns).

| Question | Context | A | B | C | D |
| --- | --- | --- | --- | --- | --- |
| 1 | Film set | R | A | S | C |
| 2 | ₹1,000 project | R | A | C | E |
| 3 | Unfamiliar game | C | A | S | E |
| 4 | Small business | S | I | A | E |
| 5 | Science museum | R | I | C | S |
| 6 | Empty room | R | A | C | E |
| 7 | Sports match | R | I | S | C |
| 8 | New city | I | S | A | C |
| 9 | Product problem | A | S | E | C |
| 10 | Shadow someone | R | I | A | E |
| 11 | Successful video | I | A | S | E |
| 12 | Broken gadget | R | I | A | S |
| 13 | Festival | E | A | S | C |
| 14 | Letters and photos | S | I | A | C |
| 15 | Improve an app | S | A | E | I |
| 16 | Weekend learning | R | I | C | E |
| 17 | Friend's idea | R | I | E | C |
| 18 | Café queue | S | R | E | C |
| 19 | Behind the internet | R | I | A | E |
| 20 | Board game | R | A | S | C |
| 21 | Wildlife team | R | I | E | S |
| 22 | Tomorrow's challenge | R | I | C | E |
| 23 | Improve classes | R | I | S | C |
| 24 | Satisfying day | R | I | A | E |

Changes preserve the situations, but broaden choices where needed: event details (2, 6), method and records (5, 22), investigating a city's development (8), coordinating a stage team (13), gaining support for an app feature (15), event planning (16), supporting conservation work (21), leading a project (24). College-only wording becomes student/community wording. The internet question no longer implies unsafe hidden sites. Broken equipment is only a hypothetical observation, with no instruction to open powered equipment. Choices describe actions rather than prestigious careers or childish rewards.

## Scoring and ties

Full answers: rank selected counts, with equal opportunity counts of 16. Partial answers: divide each selected count by its opportunities among answered questions. At least 18 valid answers and at least 8 opportunities per dimension are required for a provisional result. These are editorial coverage thresholds, not validated reliability thresholds. Invalid and missing answers contribute nothing. Equal scores have equal standing; a fixed display order only makes rendering reproducible. Broadly equal choices receive a mixed-interests explanation. Show three directions, or four when the fourth ties the third, without claiming the other directions are unsuitable.

## Recommendations

The versioned source table in src/data/assessment.ts maps dimension pairs to canonical existing entry-question IDs. Rank relevant questions, keep five unique underlying fields and at least three categories, then add a sixth question whose tags exclude the first two displayed directions. Mark this as an unexpected direction. For broad ties, these first two are display choices, not a statistically stronger pair. No new graph, field, practitioner or disconnected career page is created. Results navigate to #question/{existingId}. A reproducible answer hash varies tied suggestions without randomness. An explanation accompanies each choice.

## Privacy boundary

This release is a clearly labelled preview. Answers, derived directions, timer and result IDs stay in React memory for the visit. No assessment localStorage/sessionStorage, cookies, URL answers, analytics, cloud writes, login or age field. Refresh clears the assessment. Navigating within the app retains it and the continuous timer runs in the background. Clear preview and retake erase its answers. Existing guest notebook storage remains separate and optional; explicitly saving a recommended question stores its ID only, never the result, score, assessment date or responses. No automatic import of assessment data into a notebook.
