# Jason Kelvin Agung - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Designed like a record: the home page is an album sleeve, projects are a tracklist (side A: work, side B: personal), experience reads like tour dates, and the about page is the liner notes
- Pick a musical key (C to B) to recolour the whole site, a nod to the chord transposer project; the choice is remembered
- Late-night dark mode by default, with a light "morning" mode, and no flash on load
- Direct links to any track (`/projects#tango-solver`) and screenshot zoom
- Respects reduced-motion settings, keyboard friendly, responsive down to phones

## Editing content

All text lives in `content/`: `profile.ts` (bio, skills, education, now), `projects.ts` and `experience.ts`.
To enable the CV download, put the PDF at `public/cv.pdf`; the "download cv" button appears automatically.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

### Environment Variables

No environment variables are required for this portfolio website.

## Project Structure

```
portfolio-website/
├── app/                 # Pages: home, about, experience, projects, 404
├── components/          # Cover, KeyPicker, TrackRow, Nav, Footer, PageHeader
├── content/             # All site text and data
├── contexts/            # Theme provider
├── lib/                 # Server helpers (CV detection)
├── public/              # Screenshots and static files
└── tailwind.config.ts   # Colour tokens, fonts, shadows
```
