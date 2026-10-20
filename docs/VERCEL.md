# GoWonder on Vercel

Requested domain: gowonder.me. Repository: https://github.com/Aadishsoni7/OFFBEAT. Deploy the restored map, not a new template. Domain registration stays with Namecheap; it does not need to be transferred or purchased again.

## Prepared source

vercel.json selects Vite, builds the dist directory and runs the content/storage checks before the production build. It explicitly invokes pinned pnpm 11.25.0 through npm exec because the default Vercel pnpm selection may otherwise choose an older version from the lockfile. package.json selects Node 24.x. No secrets or backend services are required for this static app. Hash routes such as /#subject/mathematics need no server rewrite. GitHub Pages auto-deployment has been disabled; its workflow remains available manually.

## Connect the account and deploy

1. Install/connect the Vercel integration in this chat, or sign into your Vercel account and open Add New → Project.
2. Import Aadishsoni7/OFFBEAT. If GitHub authorization is requested, restrict repository access to OFFBEAT where available. Approve that account permission yourself.
3. Project name: gowonder, if available. Root directory: repository root (not work/offbeat; the GitHub repository already contains package.json at its root). Framework: Vite. Output: dist. The checked-in vercel.json supplies the install and build commands.
4. Use an existing eligible plan. Do not accept a paid upgrade or purchase as part of these steps without a separate decision.
5. Deploy and inspect the actual build result. Open the resulting vercel.app URL while signed out and confirm public access, the restored map, Mathematics branches, Foley, a portrait and the activity.

## Attach the domain

After a successful project deployment, open Project → Settings → Domains and add gowonder.me and www.gowonder.me. Keep gowonder.me as the primary domain and redirect www to it. Copy the exact A and CNAME values displayed for this project. Do not copy another project's DNS values or the older GitHub Pages values.

In Namecheap: Domain List → Manage → Advanced DNS → Host Records, if Namecheap is the authoritative DNS provider. If the domain uses other nameservers, edit DNS there instead.

- For @, use the exact A record value Vercel displays for gowonder.me.
- For www, use the exact CNAME value Vercel displays for www.gowonder.me.
- Replace only conflicting website records for these hosts. Keep email MX records, SPF/DKIM and other TXT verification records intact.
- If Vercel asks for ownership verification, add its exact TXT host and token. Never share account passwords or private tokens in chat.
- Keep the existing nameservers unless there is a concrete reason to move DNS. Changing only website A/CNAME records does not require moving email or other records.

Wait for Vercel to report valid configuration and a certificate, then verify https://gowonder.me and https://www.gowonder.me in a signed-out browser. DNS propagation may take time. A prepared config or an added domain is not proof the website is public.

## Future updates

Once Vercel is connected to the GitHub repository, pushes to its production branch can deploy future changes automatically. Make edits in this source project, validate with pnpm check:data and pnpm build, then push the reviewed source. No need to resend a portable HTML for every iteration.

Local browser saves belong to their origin. Export your notebook before switching from file:// or localhost to the public domain; cloud sync is not implemented.

## Status

Source configuration prepared. Deployment URL, Vercel project identity and DNS records must be recorded after account access and verified deployment; none are invented here.

Official sources checked 20 October 2026:
- https://vercel.com/docs/frameworks/frontend/vite
- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/package-managers
- https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- https://vercel.com/docs/domains/working-with-domains/add-a-domain
