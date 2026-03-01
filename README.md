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

## Waitlist form (Formspree)

The Get Started page submits to [Formspree](https://formspree.io). To receive submissions:

1. Create a form at https://formspree.io and copy the form ID from the endpoint (e.g. `https://formspree.io/f/xyzabcde` → `xyzabcde`).
2. **Local:** Copy `.env.example` to `.env` and set `VITE_FORMSPREE_FORM_ID=your_form_id`.
3. **GitHub Pages:** In the repo go to **Settings → Secrets and variables → Actions**. Under **Variables** add `VITE_FORMSPREE_FORM_ID` with your form ID. The deploy workflow will use it when building.

## Deploy to GitHub Pages

The site is set up to deploy to **https://safescribe-ai.github.io** via GitHub Actions.

1. Push this project to the `safescribe-ai/safescribe-ai.github.io` repo (e.g. clone the repo, copy these files in, commit and push).
2. In the repo: **Settings → Pages** → set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the “Deploy to GitHub Pages” workflow manually). The workflow builds the app and deploys the `dist` folder to GitHub Pages.

SPA routing is supported: `404.html` is a copy of `index.html` so routes like `/get-started` work on refresh.
