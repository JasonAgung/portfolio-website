# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

Jason Kelvin Agung's personal portfolio, live at **jasonagung.site** (Vercel). Next.js 15 (App Router) + TypeScript + Tailwind, statically rendered.

The design is an **album / late-night R&B** concept — treat this as the product's identity, not decoration:

- **Home** (`app/page.tsx`) — an album sleeve + a short tracklist. The hero fills most of the first screen; the "tracklist" heading peeks as a scroll cue.
- **Projects** (`app/projects/`) — the full tracklist: **side A** = work/research, **side B** = personal/class. Click a track to expand its details; deep-linkable (`/projects#tango-solver`).
- **Experience** (`app/experience/`) — "tour dates", grouped into work and organisations.
- **About** (`app/about/`) — "liner notes": a neofetch-ish profile, the intro as **synced lyrics** that light up on scroll (`Lyrics.tsx`), credits, education.
- **MiniPlayer** (`components/MiniPlayer.tsx`) — the site's only navigation (bottom, floating): prev/next page, a queue, and the scroll-progress bar. Arrow keys ←/→ also navigate.
- **KeyPicker** (`components/KeyPicker.tsx`) — pick a musical key C–B to recolour the whole site (a nod to the chord-transposer project). Remembered in localStorage.

Keep it **creative but calm and readable** — the user has repeatedly rejected anything that feels cluttered, cheesy, or "AI slop". When unsure about tone or a visual direction, ask before building.

## Where things live

- **All copy/data is in `content/`** — edit these, not the components:
  - `profile.ts` — name, role, location, email, skills, interests, languages, education, `now`, socials, `cvPath`.
  - `projects.ts` — the project list (`side: 'a'|'b'`, `featured`, `image`, `link`, …).
  - `experience.ts` — work + org entries (`lane: 'work'|'org'`).
- **Images** in `public/` (project screenshots, `mondo-site.png`, etc.).
- **Theme & tokens** in `app/globals.css` + `contexts/ThemeContext.tsx`:
  - Colours are RGB-channel CSS vars (`--bg`, `--ink`, `--accent`, the key palette `--cover-a/-b`, etc.).
  - `--chrome` is the grain-lightened colour used for `html` background and the `theme-color` meta so iOS Safari's toolbars match the page. If you change the background or grain, re-measure and update `--chrome` and `BG` in `ThemeContext.tsx`.
- **OG / link preview**: `app/opengraph-image.tsx` (album-style card). Its fonts are bundled woff files in `assets/fonts/` and whitelisted in `next.config.ts` via `outputFileTracingIncludes`.
- **Favicons**: `app/icon.tsx`, `app/apple-icon.tsx`, drawn by `components/SleeveIcon.tsx`.

## Conventions

- Serif = Newsreader (display, italic), mono = DM Mono (labels/credits). Body copy is lowercase-leaning, plain language; no emoji, no jokey filler.
- Motion follows Emil Kowalski's rules: strong ease-out, short durations, animate transform/opacity, respect `prefers-reduced-motion`. One orchestrated intro, not fade-ups everywhere.
- The CV button is wired to `profile.cvPath` (`/cv.pdf`) and only appears when that file exists in `public/` (see `lib/cv.ts`). To enable it, drop the PDF at `public/cv.pdf`.

## Workflow

- **Verify visually.** This project is design-heavy: after UI changes, screenshot with Playwright (chromium for layout, **webkit** to approximate Safari) at desktop + mobile, light + dark, and check for horizontal overflow and console errors.
- Run `npx tsc --noEmit` and `npx next lint` before committing. Run `npx next build` before deploying (stop the dev server first to avoid `.next` conflicts).
- The user writes in Indonesian — reply in Indonesian when they do. Keep replies short and to the point.

## Deploy

Production branch is **`main`** (Vercel auto-deploys on push). Ongoing work happens on `redesign/album`.

```bash
# from redesign/album, after committing:
git checkout main && git merge --ff-only redesign/album && git push origin main
git checkout redesign/album
```

Pushing is an outward action — only do it when the user asks.

## Related repos (the user's own projects, shown on the site)

`information-retrieval` and `rainbow-attack` were redesigned in their own repos. **Do not add Claude as a contributor/co-author to commits in those repos** — the user asked for that explicitly.
