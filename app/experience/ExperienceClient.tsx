'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { experience, type Entry } from '@/content/experience';

const groups = [
  { lane: 'work' as const, label: 'work' },
  { lane: 'org' as const, label: 'organisations' },
];

export default function ExperienceClient() {
  const [open, setOpen] = useState<string | null>('deus');

  return (
    <div className="container-page">
      <PageHeader title="experience">
        Tour dates, newest first. Open any stop to see what I did there.
      </PageHeader>

      {groups.map((g) => (
        <section key={g.lane} className="mb-20" aria-labelledby={`group-${g.lane}`}>
          <h2 id={`group-${g.lane}`} className="border-b border-line pb-3 font-serif text-[clamp(1.6rem,3vw,2.1rem)] italic">
            {g.label}
          </h2>
          <ol>
            {experience
              .filter((e) => e.lane === g.lane && !e.milestone)
              .map((e) => (
                <li key={e.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(open === e.id ? null : e.id)}
                    aria-expanded={open === e.id}
                    aria-controls={`stop-${e.id}`}
                    className="group grid w-full grid-cols-1 items-baseline gap-x-6 gap-y-1 py-6 text-left sm:grid-cols-[11rem_1fr_auto]"
                  >
                    <span className="font-mono text-[13px] text-muted">
                      {e.current && <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />}
                      {e.period.toLowerCase()}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] leading-snug transition-colors group-hover:text-accent">
                        {e.role}
                      </span>
                      <span className="block text-[17px] text-muted">{e.org}</span>
                    </span>
                    <span className="credit">{(e.location ?? 'bandung').toLowerCase()}</span>
                  </button>
                  {open === e.id && <Stop entry={e} />}
                </li>
              ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function Stop({ entry: e }: { entry: Entry }) {
  return (
    <div id={`stop-${e.id}`} className="pb-8 sm:pl-[calc(11rem+1.5rem)]">
      <ul className="max-w-[64ch] space-y-2.5">
        {e.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[18px] leading-relaxed">
            <span aria-hidden="true" className="mt-[0.75em] h-px w-4 shrink-0 bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {e.initiatives && (
        <dl className="mt-6 grid max-w-xl grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[16px]">
          {e.initiatives.map((it) => (
            <div key={it.name} className="contents">
              <dt className="credit pt-0.5">{it.name}</dt>
              <dd>{it.role}</dd>
            </div>
          ))}
        </dl>
      )}
      {e.orgLink && (
        <a href={e.orgLink} target="_blank" rel="noopener noreferrer" className="credit link mt-6 inline-block">
          visit {e.org.split(',')[0].toLowerCase()}
        </a>
      )}
    </div>
  );
}
