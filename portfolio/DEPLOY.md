# Deployment Guide

## Option 1: Vercel (Recommended — 5 minutes)

1. Push to GitHub:
```bash
cd /path/to/your/repo
# If adding to existing repo at a subfolder:
cp -r /path/to/portfolio ./portfolio

git add portfolio/
git commit -m "feat: add premium portfolio app"
git push origin main
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo: `anthonyjosephd/josephanthonymd`
4. Set **Root Directory** to `portfolio` (if in a subfolder)
5. Add environment variable: `RESEND_API_KEY` = your key from resend.com
6. Click Deploy

## Option 2: Local Development First

```bash
cd portfolio
cp .env.example .env.local
# Edit .env.local with your values
npm install
npm run dev
# Open http://localhost:3000
```

## Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Create an API key in the dashboard
3. Add it to `.env.local` or Vercel environment variables
4. Update the "to" email in `app/api/contact/route.ts`

## Connecting to GitHub Repo

```bash
git clone https://github.com/anthonyjosephd/josephanthonymd.git
cd josephanthonymd

# Copy portfolio into repo
cp -r /path/to/portfolio ./portfolio

git add .
git commit -m "feat: add world-class interactive portfolio

- Cinematic hero with canvas particle system
- Animated skills, projects, experience sections
- Contact form with Resend email integration
- Premium glass UI with gold/blue color system
- Full TypeScript, Next.js 15, Framer Motion
- Vercel-ready with sitemap + robots.txt"

git push origin main
```
