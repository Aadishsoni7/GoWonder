# Account stage: not enabled in the public preview

20 October 2026. This is a separate implementation and review boundary, not a claim of a functioning account service. No fake Google button, email collection, auth token, assessment upload endpoint or database has been deployed. The current app is a Vite static build on Vercel with an optional device notebook. Its hosting can support server functions in a later release, but it currently has no identity provider, database, consent service or deletion endpoint.

## Proposed provider and cost boundary

Use Supabase Auth and Postgres, with Google OAuth and passwordless email links or OTP. Email access also provides account recovery without retaining a user password. Configure a production SMTP provider; Supabase's built-in mail service is not a production delivery solution. Owner configuration is required for a Supabase project, Google OAuth client, verified sender domain and delivery provider. Do not add billing, create accounts under unreviewed terms or assume credentials exist.

Official pricing checked 20 October 2026: Supabase Free lists 50,000 monthly active users, 500 MB database and 5 GB egress, with pausing after a week of inactivity and a two-active-project limit. Pro starts at $25/month. SMTP has separate provider limits and potential charges. No new service or spending was enabled in this release. Recheck limits before account launch.

Sources: https://supabase.com/pricing ; https://supabase.com/docs/guides/auth/auth-smtp ; https://supabase.com/docs/guides/auth/auth-email-passwordless ; https://supabase.com/docs/guides/auth/social-login/auth-google

## Age and consent review before any linked profile

The DPDP Act defines a child as under 18 and section 9 addresses children's data. The notified 2025 Rules include phased commencement and verifiable parental consent provisions. The preview does not claim legal compliance certification or treat an age checkbox as verified consent. Obtain a qualified India privacy review of the law and notifications actually in force at account launch, the assessment's profiling implications, parental verification, notice, withdrawal, rights, retention, cross-border processing and whether the intended use is permissible. A guardian checkbox alone is not an acceptable implementation of this review.

Primary sources reviewed: https://www.indiacode.nic.in/bitstream/123456789/22037/1/a2023-22.pdf (definitions and section 9); https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf (rule 1 commencement and rule 10 parental consent). Substantive provisions are phased; do not describe the whole framework as already in force solely because the Rules were notified.

Until reviewed controls are ready, keep everyone on the current unlinked memory-only assessment. Do not start collecting email before eligibility/consent decisions. Do not request full name, school, gender, date of birth or phone just to take an assessment. Adult accounts also need a clear purpose-specific notice and optional consent to save responses. Prefer keeping scores ephemeral and saving only result directions and recommended IDs; save full responses only with a separate, informed opt in.

## Implementation contract for the next stage

1. Add real provider authentication in a separate branch and private staging environment. Restrict OAuth callbacks to exact production/staging origins, use PKCE/state protections, rate limits and abuse protection. Test login, logout, expiry, email verification and recovery with real provider credentials. Do not use a simulated success response as proof.
2. Keep service-role keys server-only in Vercel environment variables. A public Supabase client key is not authorization. Enforce row-level security and deny anonymous access on every personal table. Scope every read/write by the authenticated server-verified user ID. Test user B cannot access user A even with a guessed result ID.
3. Define profiles only after reviewed eligibility: user ID, eligibility state, consent version and minimal consent evidence reference. Never store identity documents in this app. Consent assertions are server-controlled, not writable through a public client. Under-18 users remain unlinked until the reviewed guardian flow is implemented and tested.
4. Version assessment records: result ID, owner ID, assessment version, completion date, completion status, directions, recommended question IDs; nullable responses with explicit save-response consent. Recompute scores on the server from a validated versioned answer schema. Maintain separate saved discoveries/activities tables. Never upload the existing guest notebook automatically.
5. Require explicit confirmation to import selected device discoveries after login. Offer device-only exploration throughout. Do not put answers, email, auth tokens or profiles in routes or logs. Review hosting/provider log retention and processor agreements.
6. Add authenticated delete-history and delete-account server endpoints. Verify identity, support recent reauthentication for account deletion, delete owned profile/results/discoveries and provider user, revoke sessions, clear device tokens and document any backup expiry. Test deletion end to end, not merely hiding rows in the UI. Offer consent withdrawal as easily as saving consent.
7. Establish a real privacy contact, retention policy, breach response, deletion procedure and provider budget alert. Run a privacy/security review before enabling persistence. No public environment flag can bypass these requirements in the present preview.

## Acceptance gates before production accounts

Real Google and email login/logout/recovery pass; authorization isolation and expired-token tests pass; profile and account deletion pass; optional answer consent/withdrawal pass; permitted age/guardian cases and denied cases pass; callbacks and rate limits pass; no answer telemetry; guest exploration and device notebook remain intact; costs and legal review signed off by the owner and appropriate reviewers. These checks are NOT completed by the current memory-only preview and must not be reported as passed.
