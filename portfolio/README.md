# Joseph Anthony Duran — Portfolio

A world-class interactive portfolio built with Next.js 15, Framer Motion, and a premium design system.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Email**: Resend API
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your Resend.com API key for contact form emails |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |

## Deployment on Vercel

1. Push this code to your GitHub repo
2. Import the project in [Vercel](https://vercel.com/new)
3. Set environment variables in Vercel dashboard
4. Deploy

## Sections

1. **Hero** — Cinematic landing with canvas particle animation
2. **Marquee** — Scrolling skills ticker
3. **About** — Story + stats + philosophy
4. **Skills** — Interactive visual skill grid
5. **Projects** — Featured work gallery with metrics
6. **Experience** — Animated timeline
7. **Services** — Premium service cards
8. **Testimonials** — Interactive testimonial carousel
9. **Contact** — Form with Resend email integration

## Customization

Update content in each component file:
- `components/sections/Hero.tsx` — Name, roles, bio
- `components/sections/Projects.tsx` — Your actual projects
- `components/sections/Experience.tsx` — Your work history
- `components/sections/Testimonials.tsx` — Real testimonials
- `components/sections/Contact.tsx` — Your contact details
- `app/layout.tsx` — SEO metadata
