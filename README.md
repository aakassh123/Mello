# MELLO — People. Experiences. Memories.

A premium, animated social-experience discovery platform built with Next.js
App Router, TypeScript, Tailwind CSS and Framer Motion. Discover meetups,
parties, trips and more; find people with shared interests; create your own
experience.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Tech stack

- **Next.js 14 (App Router)** — server components by default, client
  components only where interactivity/animation is needed
- **TypeScript** — typed data models in `types/index.ts`
- **Tailwind CSS** — custom design tokens (charcoal / ivory / beige / clay /
  moss) in `tailwind.config.ts`
- **Framer Motion** — hero text reveal, staggered card entrances, modals,
  hover states
- **Lucide React** — icon set

## Project structure

```
app/                 routes (App Router)
  experiences/        listing + /[slug] dynamic detail page
  people/ trips/ parties/ clubs/
  create/              experience creation form
  about/ contact/ safety/ privacy/ terms/
components/          reusable UI (Navbar, Footer, cards, modals, filters...)
components/home/     homepage-only sections
data/                mock data (experiences, trips, people, testimonials)
lib/                 filtering/sorting/formatting helpers
types/               shared TypeScript interfaces
```

## Dynamic functionality implemented

- Category filtering, search and sorting on `/experiences` via URL search
  params (`?category=party&q=goa&sort=price`)
- Dynamic route `/experiences/[slug]` driven by mock data, with
  `generateStaticParams` for static generation
- Client-side form validation on the Join modal and Create Experience form,
  with success/error states
- Loading skeletons, empty states and error states as separate components
  (`components/LoadingSkeleton.tsx`, `components/States.tsx`)
- `prefers-reduced-motion` respected globally in `app/globals.css`

## Replacing mock data with a real backend

All mock data lives in `data/*.ts` and is typed against `types/index.ts`.
To connect a real database (Supabase / Postgres / MongoDB):

1. Replace the array exports in `data/*.ts` with async fetch functions
   (e.g. `getExperiences()`, `getExperienceBySlug()`).
2. Update the pages that import them (`app/experiences/page.tsx`,
   `app/experiences/[slug]/page.tsx`, etc.) to `await` those calls — they're
   already server components, so no client-side rewiring is needed.
3. Point the Join and Create Experience form submissions
   (`components/JoinModal.tsx`, `components/CreateExperienceForm.tsx`) at
   real API routes instead of local `useState`.

## Notes

- Images are placeholder photography from Unsplash for demo purposes —
  swap in real MELLO photography before shipping.
- The Instagram section links out to `@mello.gkp` rather than pretending to
  fetch a live feed, since no Instagram API integration is wired up.
- Safety, Privacy and Terms pages contain demo copy, not legal text.
