# Put GoWonder on gowonder.me

**Current hosting choice: Vercel. See [VERCEL.md](VERCEL.md).** The GitHub Pages instructions below are a historical alternative. Do not copy their DNS IP addresses when connecting Vercel. The Pages workflow is now manual only.


The build is static and uses hash routes. GitHub Pages can host this public repository without a hosting purchase. The custom domain is already owned by the user. Preparing files does not make the domain live.

## GitHub administrator steps

1. In Aadishsoni7/OFFBEAT, open Settings → Pages. Choose GitHub Actions as the build source.
2. In your account Settings → Pages, verify gowonder.me if available. GitHub gives you a unique TXT record; copy its exact host and value into the authoritative DNS provider. Never invent this token.
3. In repository Settings → Pages, set the custom domain to gowonder.me before pointing DNS at GitHub.
4. The workflow in .github/workflows/pages.yml builds and publishes on main updates. Run it manually from Actions → Publish GoWonder if needed. It may fail until Pages is enabled. Inspect Actions for the actual result.

## Namecheap DNS

Open Domain List → Manage → Advanced DNS → Host Records. If your domain uses external nameservers, edit records at that authoritative provider instead. Preserve email MX, TXT and unrelated records. Replace only conflicting parking or redirect records for @ and www.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | aadishsoni7.github.io |

Use Automatic TTL. The CNAME value contains no protocol and no repository name. Do not add a wildcard record. Add the separate verification TXT record exactly as GitHub supplies it.

Allow DNS and certificate provisioning time, potentially 24 hours. In GitHub Pages, enable Enforce HTTPS when available. Verify https://gowonder.me and https://www.gowonder.me, refresh a #question/netflix route, check a portrait and test guest saving. Do not consider deployment complete until these checks pass.

For Actions deployments, GitHub uses the custom domain configured in Settings; a CNAME source file is not required. The app assumes the custom domain root. If temporarily using the repository URL, build with `pnpm exec vite build --base=/OFFBEAT/` and keep this different base out of the custom domain release.

## Sources

- [GitHub custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Namecheap A record instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)

## Local development

Use Node 24 and pnpm 11.25.0. From this project directory:

```powershell
pnpm install --frozen-lockfile
pnpm dev
pnpm check:data
pnpm build
node scripts/export-standalone.mjs
```

Open http://127.0.0.1:5173 while the development server is running. The portable outputs/GoWonder.html works without a development server. External videos and source links require internet. Local browser storage is specific to the browser and origin; the portable file, localhost and hosted domain do not share saved progress. Download notebook JSON before switching origins.
