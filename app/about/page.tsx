import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { education, interests, profile, skills } from '@/content/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jason Kelvin Agung: computer science graduate from UNPAR and AI Implementation Specialist in Bandung. Skills, interests, education and how to get in touch.',
};

// "JKA" as pixel art, one pastel per row
const pixels = [
  '  ### #   #  ### ',
  '    # #  #  #   #',
  '    # ###   #   #',
  '#   # # #   #####',
  '#   # #  #  #   #',
  ' ###  #   # #   #',
];
const pixelRows = ['bg-pastel-sage', 'bg-pastel-sage', 'bg-pastel-sky', 'bg-pastel-sky', 'bg-pastel-blush', 'bg-pastel-butter'];

const glance: [string, string][] = [
  ['Role', profile.role],
  ['Company', profile.company],
  ['Based in', profile.location],
  ['Degree', 'Computer Science, UNPAR 2026'],
  ['Focus', 'AI, algorithms, software engineering'],
];

export default function AboutPage() {
  return (
    <div className="container-page">
      <PageHeader path="about" title="About">
        Who I am, what I know, and where I studied.
      </PageHeader>

      {/* Profile at a glance */}
      <section
        aria-label="Profile at a glance"
        className="rounded-xl border-2 border-[#11140F] bg-term p-6 text-term-ink shadow-hard sm:p-8"
      >
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <div
            aria-hidden="true"
            className="grid w-max gap-[3px] sm:gap-1"
            style={{ gridTemplateColumns: `repeat(${pixels[0].length}, minmax(0, 1fr))` }}
          >
            {pixels.flatMap((row, r) =>
              [...row].map((cell, c) => (
                <span key={`${r}-${c}`} className={`h-3 w-3 rounded-[2px] sm:h-4 sm:w-4 ${cell === '#' ? pixelRows[r] : ''}`} />
              )),
            )}
          </div>
          <dl className="grid gap-x-6 gap-y-1.5 text-[16px] sm:grid-cols-[auto_1fr]">
            {glance.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-mono text-[13px] leading-7 text-pastel-butter [font-stretch:87.5%]">{k}</dt>
                <dd className="mb-2 sm:mb-0">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mt-20 grid gap-14 lg:grid-cols-12">
        <section className="lg:col-span-7" aria-labelledby="about-me">
          <h2 id="about-me" className="font-mono text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight [font-stretch:112.5%]">
            Hi, I’m Jason<span className="text-blush">.</span>
          </h2>
          <div className="mt-5 max-w-[60ch] space-y-4 text-[18px] leading-relaxed">
            <p>
              I’m a computer science graduate from UNPAR who gets excited about artificial intelligence, making code
              fast, and building software properly. These days I’m putting generative AI to work at DEUS.
            </p>
            <p>
              I also like the people side of tech. I’ve organised workshops, mentored students, and I enjoy explaining
              complicated things until they make sense to anyone in the room.
            </p>
          </div>

          <h3 className="label mt-12">Contact</h3>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="link break-all">
                {profile.email}
              </a>
            </dd>
            <dt className="text-muted">Phone</dt>
            <dd>
              <a href={profile.phoneHref} className="link">
                {profile.phone}
              </a>
            </dd>
          </dl>
        </section>

        <section className="lg:col-span-5" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="label">
            Skills
          </h2>
          <div className="mt-4 space-y-6">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="text-[16px] font-bold">{s.group}</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="rounded-full bg-sage-soft/70 px-3 py-1 text-[14px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="label mt-10">Interests</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {interests.map((i) => (
              <li key={i.name}>
                {i.href ? (
                  <a
                    href={i.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-blush-soft px-3 py-1 text-[14px] underline decoration-blush/40 underline-offset-4 hover:decoration-blush"
                    title="Opens my Spotify"
                  >
                    {i.name}
                  </a>
                ) : (
                  <span className="inline-block rounded-full bg-sky-soft/80 px-3 py-1 text-[14px]">{i.name}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Education */}
      <section id="education" className="mt-24 scroll-mt-24" aria-labelledby="education-heading">
        <h2 id="education-heading" className="font-mono text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight [font-stretch:112.5%]">
          Education<span className="text-blush">.</span>
        </h2>

        <ol className="relative mt-10 border-l-2 border-sage/50 pl-8 sm:pl-10">
          {education.map((e, i) => (
            <li key={e.school} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(2rem+9px)] top-1.5 h-4 w-4 rounded-full border-2 border-ink sm:-left-[calc(2.5rem+9px)] ${
                  i === 0 ? 'bg-pastel-butter' : 'bg-paper'
                }`}
              />
              <p className="label">{e.period}</p>
              <h3 className="mt-1 text-[clamp(1.2rem,2.4vw,1.5rem)] font-bold leading-snug">{e.school}</h3>
              <p className="mt-0.5 text-sky">{e.degree}</p>
              {e.detail && <p className="mt-2 max-w-[62ch]">{e.detail}</p>}
              {e.thesis && (
                <p className="mt-2 max-w-[62ch] text-muted">
                  <span className="font-semibold text-ink">Thesis:</span> {e.thesis}
                </p>
              )}
              {e.focus && (
                <dl className="mt-6 grid max-w-3xl gap-5 sm:grid-cols-3">
                  {e.focus.map((f) => (
                    <div key={f.area}>
                      <dt className="text-[15px] font-bold">{f.area}</dt>
                      <dd className="mt-1 text-[15px] text-muted">{f.subjects}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
