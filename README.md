# Jason Kelvin Agung - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- A small terminal on the home page that visitors can type into, with buttons for people who would rather click
- Experience as a two-line timeline (work and organisations), with filters
- About page with a profile summary, skills, interests and education
- Projects list with a details panel, direct links (`/projects#tango-solver`) and screenshot zoom
- Light and dark mode that follows the system setting, with no flash on load
- Respects reduced-motion settings, keyboard friendly, responsive down to phones

## Editing content

All text lives in `content/`: `profile.ts` (bio, skills, education, now), `projects.ts` and `experience.ts`.
To enable the CV download, put the PDF at `public/cv.pdf`; the buttons and the `open cv` command appear automatically.

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
├── components/          # Terminal, Nav, Footer, PageHeader
├── content/             # All site text and data
├── contexts/            # Theme provider
├── lib/                 # Server helpers (CV detection)
├── public/              # Screenshots and static files
└── tailwind.config.ts   # Colour tokens, fonts, shadows
```
