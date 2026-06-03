# Digital CV

A single-page React (Vite) CV/portfolio for a fullstack developer.

## Edit your content
Everything you change lives in **`src/data.js`** — name, bio, projects, skills,
experience, education. You don't need to touch any other file. Each project's
`live` field is the deployed link a recruiter clicks. Set `featured: true` to
show a project as a large card at the top.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite. Keep the defaults (build: `npm run build`, output: `dist`).
4. Deploy. You'll get a live URL like `your-name.vercel.app`.

Alternatively, with the Vercel CLI: `npm i -g vercel` then `vercel` in this folder.
