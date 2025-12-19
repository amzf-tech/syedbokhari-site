# syedbokhari.com.au (Astro)

Minimal, static Astro site (Home / Services / About / Contact) with your logo.

## Run locally
1. Install Node.js 20+
2. In this folder:
   - `npm install`
   - `npm run dev`
3. Open the URL shown in the terminal.

## Deploy with GitHub Pages
1. Push this repo to GitHub.
2. GitHub → Settings → Pages → Source = GitHub Actions.
3. Add custom domain: `syedbokhari.com.au`
4. Add DNS records for GitHub Pages:
   - A records for `@` to:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME `www` → `<your-github-username>.github.io`

## Notes
- Update email on Contact page.
- Keep wording compliant while registration is pending.
