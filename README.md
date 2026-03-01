# SafeScribe Website

Website for SafeScribe — private meeting notes without subscriptions.

## Running locally

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The site is set up to deploy to **https://safescribe-ai.github.io** via GitHub Actions.

1. Push this project to the `safescribe-ai/safescribe-ai.github.io` repo (e.g. clone the repo, copy these files in, commit and push).
2. In the repo: **Settings → Pages** → set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the “Deploy to GitHub Pages” workflow manually). The workflow builds the app and deploys the `dist` folder to GitHub Pages.

SPA routing is supported: `404.html` is a copy of `index.html` so routes like `/get-started` work on refresh.
  