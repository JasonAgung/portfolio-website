'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { experience, type Entry, type Lane } from '@/content/experience';

type Filter = 'all' | Lane;

const filters: { id: Filter; label: string; dot?: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work', dot: 'bg-sage' },
  { id: 'org', label: 'Organisations', dot: 'bg-blush' },
];

// Lane centres inside the gutter
const X = { work: 12, org: 34 };
const DOT_TOP = 30;

export default function ExperienceClient() {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = filter === 'all' ? experience : experience.filter((e) => e.lane === filter);
  const twoLanes = filter === 'all';
  const lastOrg = twoLanes ? shown.map((e) => e.lane).lastIndexOf('org') : -1;

  return (
    <div className="container-page">
      <PageHeader path="experience" title="Experience">
        Where I’ve worked, and the communities I’ve been part of.
      </PageHeader>

      <div role="group" aria-label="Show" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-4 text-[15px] transition-colors ${
              filter === f.id ? 'border-ink bg-ink text-paper' : 'border-line bg-raised hover:border-ink'
            }`}
          >
            {f.dot && <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${f.dot}`} />}
            {f.label}
          </button>
        ))}
      </div>

      <ol aria-label="Experience, most recent first">
        {shown.map((e, i) => (
          <li key={e.id}>
            <div className="flex">
              <Rail
                first={i === 0}
                last={i === shown.length - 1}
                lane={twoLanes ? e.lane : 'work'}
                color={e.lane}
                twoLanes={twoLanes}
                orgLine={twoLanes && i <= lastOrg}
                orgEnds={i === lastOrg}
                milestone={e.milestone}
              />
              <EntryBody entry={e} />
            </div>
            {i === lastOrg && <Fork />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Rail({
  first,
  last,
  lane,
  color,
  twoLanes,
  orgLine,
  orgEnds,
  milestone,
}: {
  first: boolean;
  last: boolean;
  lane: Lane;
  color: Lane;
  twoLanes: boolean;
  orgLine: boolean;
  orgEnds: boolean;
  milestone?: boolean;
}) {
  const dot = milestone ? 'bg-pastel-butter' : color === 'org' ? 'bg-blush' : 'bg-sage';
  return (
    <div aria-hidden="true" className={`relative shrink-0 ${twoLanes ? 'w-14' : 'w-9'}`}>
      <span
        className="absolute w-[2px] bg-sage/60"
        style={{ left: X.work - 1, top: first ? DOT_TOP : 0, ...(last ? { height: DOT_TOP } : { bottom: 0 }) }}
      />
      {orgLine && (
        <span
          className="absolute w-[2px] bg-blush/60"
          style={{ left: X.org - 1, top: 0, ...(orgEnds ? { height: DOT_TOP } : { bottom: 0 }) }}
        />
      )}
      <span
        className={`absolute h-3.5 w-3.5 rounded-full border-2 border-paper ring-2 ring-ink ${dot}`}
        style={{ left: X[lane] - 7, top: DOT_TOP - 7 }}
      />
    </div>
  );
}

// The organisations line joining the work line below its oldest entry.
function Fork() {
  return (
    <div aria-hidden="true" className="relative h-10 w-14">
      <span className="absolute inset-y-0 w-[2px] bg-sage/60" style={{ left: X.work - 1 }} />
      <svg className="absolute inset-0" width="56" height="40" viewBox="0 0 56 40" fill="none">
        <path d={`M${X.org} 0 C${X.org} 22, ${X.work} 18, ${X.work} 40`} stroke="rgb(var(--blush) / 0.6)" strokeWidth="2" />
      </svg>
    </div>
  );
}

function EntryBody({ entry: e }: { entry: Entry }) {
  return (
    <article className="min-w-0 flex-1 pb-12 pt-5">
      <p className="label flex flex-wrap items-center gap-2">
        <span>
          {e.period}
          {e.location && `, ${e.location}`}
        </span>
        {e.current && <span className="rounded-full bg-sage-soft px-2 py-0.5 text-sage">Current</span>}
      </p>
      <h2 className="mt-1.5 text-[clamp(1.2rem,2.4vw,1.45rem)] font-bold leading-snug">{e.role}</h2>
      <p className="mt-0.5 text-[16px]">
        {e.orgLink ? (
          <a href={e.orgLink} target="_blank" rel="noopener noreferrer" className="link">
            {e.org}
          </a>
        ) : (
          <span className="text-muted">{e.org}</span>
        )}
      </p>

      <ul className="mt-4 max-w-[68ch] space-y-2">
        {e.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[16px] leading-relaxed">
            <span aria-hidden="true" className={`mt-[0.7em] h-[2px] w-2.5 shrink-0 ${e.lane === 'org' ? 'bg-blush' : 'bg-sage'}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {e.initiatives && (
        <div className="mt-5">
          <p className="label">Key roles</p>
          <dl className="mt-2 grid max-w-xl grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-[15px]">
            {e.initiatives.map((it) => (
              <div key={it.name} className="contents">
                <dt className="font-semibold">{it.name}</dt>
                <dd className="text-muted">{it.role}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {e.more && (
        <p className="mt-4 text-[16px]">
          <Link href={e.more.href} className="link">
            {e.more.label}
          </Link>
        </p>
      )}
    </article>
  );
}
