'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { linkLabel, projects, type Project } from '@/content/projects';

const posterColors = ['bg-pastel-sky', 'bg-pastel-butter', 'bg-pastel-blush', 'bg-pastel-sage'];

export default function ProjectsClient() {
  const [selected, setSelected] = useState(projects[0].slug);
  const [zoomed, setZoomed] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Deep links like /projects#tango-solver open that project.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (projects.some((p) => p.slug === slug)) {
        setSelected(slug);
        requestAnimationFrame(() => document.getElementById(`row-${slug}`)?.scrollIntoView({ block: 'center' }));
      }
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const select = useCallback((slug: string) => {
    setSelected(slug);
    history.replaceState(null, '', `#${slug}`);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (zoomed && !d.open) d.showModal();
    if (!zoomed && d.open) d.close();
  }, [zoomed]);

  const current = projects.find((p) => p.slug === selected) ?? projects[0];

  return (
    <div className="container-page">
      <PageHeader path="~/projects" command="ls -la" title="Projects">
        Things I’ve built, researched and taught. Pick one to open its README.
      </PageHeader>

      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-2 text-[14px] text-muted">total {projects.length}</p>
          <ul className="space-y-1.5">
            {projects.map((p) => {
              const active = p.slug === selected;
              return (
                <li key={p.slug} id={`row-${p.slug}`} className="scroll-mt-6">
                  <button
                    type="button"
                    onClick={() => select(p.slug)}
                    aria-expanded={active}
                    aria-controls={`readme-${p.slug}`}
                    className={`group w-full rounded-md border-2 px-3 py-2.5 text-left transition-colors ${
                      active ? 'border-ink bg-blush-soft shadow-hard-sm' : 'border-transparent hover:border-line hover:bg-raised'
                    }`}
                  >
                    <span className="flex items-baseline gap-3 text-[15px]">
                      <span className="hidden shrink-0 text-[13px] text-muted sm:inline">{p.link ? 'drwxr-xr-x' : 'drwx------'}</span>
                      <span
                        className={`shrink-0 ${p.status === 'done' ? 'text-sage' : 'text-butter'}`}
                        title={p.status === 'done' ? 'Done' : 'Ongoing'}
                      >
                        {p.status === 'done' ? '●' : '◐'}
                        <span className="sr-only">{p.status === 'done' ? ' done' : ' ongoing'}</span>
                      </span>
                      <span className="min-w-0 truncate font-semibold text-sky group-hover:underline">{p.slug}/</span>
                      <span className="ml-auto shrink-0 text-[13px] text-muted">{p.kind}</span>
                    </span>
                    <span className="mt-0.5 block pl-6 text-[14px] leading-snug text-muted sm:pl-[7.4rem]">{p.summary}</span>
                  </button>
                  {active && (
                    <div className="mt-3 mb-6 lg:hidden">
                      <Readme id={`readme-${p.slug}`} project={p} onZoom={setZoomed} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="comment mt-5 text-sm">
            {'// '}● done ◐ ongoing. <span className="hidden sm:inline">drwx------ means no public link yet.</span>
          </p>
        </div>

        <div className="sticky top-6 hidden lg:col-span-7 lg:block">
          <Readme project={current} onZoom={setZoomed} />
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setZoomed(null);
        }}
        aria-label={zoomed ? `Screenshot of ${zoomed.title}` : 'Screenshot'}
        className="m-auto w-[min(94vw,1200px)] overflow-hidden rounded-lg border-2 border-ink bg-raised p-0 text-ink shadow-hard backdrop:bg-[#11140F]/80"
      >
        {zoomed?.image && (
          <div>
            <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 text-[13px]">
              <span className="text-muted">{zoomed.image.slice(1)}</span>
              <button type="button" onClick={() => setZoomed(null)} className="rounded px-2 py-1 font-semibold hover:bg-blush-soft" autoFocus>
                close [esc]
              </button>
            </div>
            <div className="relative h-[78vh] bg-paper">
              <Image src={zoomed.image} alt={zoomed.imageAlt ?? ''} fill sizes="94vw" className="object-contain" />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

function Readme({ id, project: p, onZoom }: { id?: string; project: Project; onZoom: (p: Project) => void }) {
  const poster = posterColors[p.slug.length % posterColors.length];
  return (
    <article
      id={id}
      aria-live="polite"
      className="overflow-hidden rounded-lg border-2 border-ink bg-raised shadow-hard"
    >
      <p className="border-b-2 border-ink px-4 py-2 text-[13px] text-muted">
        <span className="text-sage">~$</span> cat {p.slug}/README.md
      </p>

      {p.image ? (
        <button
          type="button"
          onClick={() => onZoom(p)}
          className="group relative block aspect-[16/10] w-full border-b-2 border-ink bg-paper"
          aria-label={`Enlarge screenshot of ${p.title}`}
        >
          <Image
            src={p.image}
            alt={p.imageAlt ?? ''}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top"
          />
          <span className="absolute bottom-3 right-3 rounded border-2 border-[#22281F] bg-pastel-butter px-2 py-0.5 text-[12px] font-semibold text-[#22281F] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            click to zoom
          </span>
        </button>
      ) : (
        <div className={`flex aspect-[16/10] flex-col justify-end border-b-2 border-ink p-6 text-[#22281F] ${poster}`}>
          <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold leading-tight [font-stretch:112.5%]">
            {p.summary}
          </p>
          <p className="mt-3 text-[13px] italic opacity-80">{'// '}no screenshot for this one, so here’s the gist</p>
        </div>
      )}

      <div className="p-5 sm:p-6">
        <p className="flex flex-wrap items-center gap-2 text-[13px]">
          <span
            className={`rounded px-1.5 font-semibold ${p.status === 'done' ? 'bg-sage-soft text-sage' : 'bg-butter-soft text-butter'}`}
          >
            {p.status}
          </span>
          {p.context && <span className="text-muted">{p.context}</span>}
        </p>
        <h2 className="mt-2 font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-extrabold leading-tight [font-stretch:112.5%]">
          {p.title}
        </h2>
        <p className="mt-3 max-w-[65ch] text-[16px]">{p.description}</p>

        <p className="comment mt-5 text-sm">{'// '}dependencies</p>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {p.technologies.map((t) => (
            <li key={t} className="rounded bg-sage-soft/70 px-2 py-0.5 text-[13px]">
              {t}
            </li>
          ))}
        </ul>

        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="keycap keycap-primary mt-6">
            {linkLabel(p.link)}
          </a>
        )}
      </div>
    </article>
  );
}
