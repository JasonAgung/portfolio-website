import Link from 'next/link';
import Cover from '@/components/Cover';
import KeyPicker, { KeyLabel } from '@/components/KeyPicker';
import TrackRow from '@/components/TrackRow';
import { hasCv } from '@/lib/cv';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';

export default function Home() {
  const cv = hasCv();
  const featured = projects.map((p, i) => ({ p, n: i + 1 })).filter(({ p }) => p.featured);

  return (
    <div className="container-page">
      {/* The sleeve — fills most of the first screen, content centred, so only the
          "tracklist" heading below peeks as a scroll cue (100svh − nav − peek). */}
      <section className="grid items-center gap-12 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:min-h-[calc(100svh-13rem)] lg:pt-0">
        <div className="mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none">
          <Cover title="jka" topRight={<KeyLabel />} bottomLeft="ai, code & music" bottomRight="bandung, 2026" intro interactive />
          <div className="enter" style={{ '--d': '470ms' } as React.CSSProperties}>
            <KeyPicker className="mt-5 flex justify-center lg:justify-start" />
            <p className="credit mt-1 text-center lg:text-left">change the key, change the colours</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h1 className="enter font-serif text-[clamp(2.4rem,13vw,3.4rem)] font-light italic leading-[0.95] tracking-tight lg:text-[clamp(3rem,6.2vw,5.4rem)]" style={{ '--d': '120ms' } as React.CSSProperties}>
            jason kelvin agung
          </h1>
          <p className="enter mt-7 max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.5rem)] leading-snug" style={{ '--d': '190ms' } as React.CSSProperties}>
            I turn generative AI into things people actually use, and make music for the hours in between.
          </p>
          <div className="enter mt-9 flex flex-wrap gap-3" style={{ '--d': '300ms' } as React.CSSProperties}>
            {cv ? (
              <a href={profile.cvPath} className="btn btn-solid" download>
                download cv
              </a>
            ) : (
              <a href={`mailto:${profile.email}`} className="btn btn-solid">
                email me
              </a>
            )}
            <Link href="/projects" className="btn">
              see projects
            </Link>
          </div>

          <p className="enter mt-10 flex items-center gap-3" style={{ '--d': '400ms' } as React.CSSProperties}>
            <span aria-hidden="true" className="flex h-3.5 items-end gap-[3px]">
              {[0, 0.3, 0.15].map((d) => (
                <span key={d} className="h-full w-[3px] origin-bottom animate-bar rounded-full bg-accent" style={{ animationDelay: `${d}s` }} />
              ))}
            </span>
            <span className="credit whitespace-nowrap">now playing</span>
            <span className="text-[17px]">AI Implementation Specialist, DEUS</span>
          </p>
        </div>
      </section>

      {/* Tracklist */}
      <section className="mt-20 scroll-mt-24 sm:mt-24 lg:mt-10" aria-labelledby="tracklist-heading">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
          <h2 id="tracklist-heading" className="font-serif text-[clamp(2rem,4vw,2.75rem)] italic leading-none">
            tracklist
          </h2>
          <Link href="/projects" className="credit link">
            all {projects.length} tracks
          </Link>
        </div>
        <ol>
          {featured.map(({ p, n }) => (
            <li key={p.slug} className="border-b border-line">
              <Link href={`/projects#${p.slug}`} className="group block py-6">
                <TrackRow project={p} number={n} showPeek />
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
