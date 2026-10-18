import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { education, interests, profile, skills } from '@/content/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jason Kelvin Agung: computer science graduate from UNPAR and AI Implementation Specialist in Bandung. Skills, interests, education and how to get in touch.',
};

// "JKA" as pixel art, one pastel per row like `neofetch | lolcat`
const pixels = [
  '  ### #   #  ### ',
  '    # #  #  #   #',
  '    # ###   #   #',
  '#   # # #   #####',
  '#   # #  #  #   #',
  ' ###  #   # #   #',
];
const pixelRows = ['bg-pastel-sage', 'bg-pastel-sage', 'bg-pastel-sky', 'bg-pastel-sky', 'bg-pastel-blush', 'bg-pastel-butter'];

const packageCount = skills.reduce((n, s) => n + s.items.length, 0);

const readout: [string, string][] = [
  ['Name', profile.name],
  ['Role', `${profile.role} @ ${profile.companyShort}`],
  ['Host', `${profile.location} (UTC+7)`],
  ['Degree', 'B.Sc. Computer Science, UNPAR ’26'],
  ['GPA', '3.67'],
  ['Thesis', 'Backtracking vs. simulated annealing on Tango'],
  ['Shell', 'python, go, javascript'],
  ['Packages', `${packageCount} (ai, software, people)`],
  ['Hobbies', 'music, logic puzzles, gadgets'],
  ['Font', 'Martian Mono, Victor Mono'],
];

const palette = ['bg-[#1F241D]', 'bg-[#586753]', 'bg-pastel-sage', 'bg-pastel-sky', 'bg-pastel-blush', 'bg-pastel-butter', 'bg-[#FDF6EC]'];

export default function AboutPage() {
  return (
    <div className="container-page">
      <PageHeader path="~/about" command="neofetch" title="About">
        The short version of who I am, what I know and where I studied.
      </PageHeader>

      {/* neofetch */}
      <section
        aria-label="Profile summary"
        className="overflow-hidden rounded-lg border-2 border-[#11140F] bg-term p-6 text-[15px] text-term-ink shadow-hard sm:p-8"
      >
        <div className="grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div
            aria-hidden="true"
            className="grid w-max gap-[3px] sm:gap-1"
            style={{ gridTemplateColumns: `repeat(${pixels[0].length}, minmax(0, 1fr))` }}
          >
            {pixels.flatMap((row, r) =>
              [...row].map((cell, c) => (
                <span
                  key={`${r}-${c}`}
                  className={`h-3 w-3 rounded-[2px] sm:h-4 sm:w-4 ${cell === '#' ? pixelRows[r] : ''}`}
                />
              )),
            )}
          </div>
          <div className="min-w-0">
            <p className="font-semibold">
              <span className="text-pastel-sage">jason</span>
              <span className="text-term-dim">@</span>
              <span className="text-pastel-sage">bandung</span>
            </p>
            <p aria-hidden="true" className="text-term-dim">
              -------------
            </p>
            <dl className="mt-1 space-y-0.5">
              {readout.map(([k, v]) => (
                <div key={k} className="flex flex-wrap gap-x-2">
                  <dt className="font-semibold text-pastel-butter">{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div aria-hidden="true" className="mt-4 flex">
              {palette.map((c) => (
                <span key={c} className={`h-5 w-7 ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 grid gap-14 lg:grid-cols-12">
        {/* about.md */}
        <section className="lg:col-span-7" aria-labelledby="about-me">
          <p className="text-[15px] text-muted">
            <span className="text-sage">~$</span> cat about.md
          </p>
          <h2 id="about-me" className="mt-2 font-display text-2xl font-extrabold [font-stretch:112.5%] sm:text-3xl">
            Hi, I’m Jason.
          </h2>
          <div className="mt-5 max-w-[62ch] space-y-4 text-[17px]">
            <p>
              I’m a computer science graduate from UNPAR who gets excited about artificial intelligence, making code
              fast, and building software properly. These days I’m putting generative AI to work at DEUS.
            </p>
            <p>
              I also like the people side of tech. I’ve organised workshops, mentored students, and I enjoy explaining
              complicated things until they make sense to anyone in the room.
            </p>
          </div>

          <h3 className="mt-12 font-display text-lg font-bold [font-stretch:112.5%]">Get in touch</h3>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[16px]">
            <dt className="text-muted">where</dt>
            <dd>{profile.location}</dd>
            <dt className="text-muted">email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="link break-all">
                {profile.email}
              </a>
            </dd>
            <dt className="text-muted">phone</dt>
            <dd>
              <a href={profile.phoneHref} className="link">
                {profile.phone}
              </a>
            </dd>
          </dl>
        </section>

        {/* skills + interests */}
        <section className="lg:col-span-5" aria-labelledby="skills-heading">
          <p className="text-[15px] text-muted">
            <span className="text-sage">~$</span> cat skills/*
          </p>
          <h2 id="skills-heading" className="sr-only">
            Skills
          </h2>
          <div className="mt-4 space-y-5">
            {skills.map((s) => (
              <div key={s.file} className="rounded-lg border-2 border-ink bg-raised shadow-hard-sm">
                <p className="flex justify-between border-b-2 border-ink px-4 py-1.5 text-[13px]">
                  <span className="font-semibold">{s.file}</span>
                  <span className="text-muted">{s.group}</span>
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 px-4 py-3 text-[15px]">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[15px] text-muted">
            <span className="text-sage">~$</span> ls ~/interests
          </p>
          <h2 className="sr-only">Interests</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[16px]">
            {interests.map((i) => (
              <li key={i.name}>
                {i.href ? (
                  <a href={i.href} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                    {i.name}/
                  </a>
                ) : (
                  <span className="font-semibold text-sky">{i.name}/</span>
                )}
              </li>
            ))}
          </ul>
          <p className="comment mt-2 text-sm">{'// '}music/ opens my spotify</p>
        </section>
      </div>

      {/* Education */}
      <section id="education" className="mt-24 scroll-mt-10" aria-labelledby="education-heading">
        <h2 id="education-heading" className="font-display text-3xl font-extrabold tracking-tight [font-stretch:112.5%] sm:text-4xl">
          Education
        </h2>
        <p className="comment mt-1">{'// '}history | grep school</p>

        <ol className="relative mt-10 border-l-2 border-dashed border-sage pl-8 sm:pl-10">
          {education.map((e, i) => (
            <li key={e.school} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(2rem+9px)] top-1.5 h-4 w-4 rounded-full border-2 border-ink sm:-left-[calc(2.5rem+9px)] ${
                  i === 0 ? 'bg-pastel-butter' : 'bg-paper'
                }`}
              />
              <p className="text-[15px] text-muted">{e.period}</p>
              <h3 className="mt-1 font-display text-xl font-bold leading-snug [font-stretch:112.5%] sm:text-2xl">{e.school}</h3>
              <p className="mt-1 font-semibold text-sky">{e.degree}</p>
              <p className="mt-2 max-w-[62ch]">{e.detail}</p>
              {e.thesis && (
                <p className="mt-3 max-w-[62ch]">
                  <span className="rounded bg-butter-soft px-1.5 py-0.5 text-[14px] font-semibold">thesis</span> {e.thesis}
                </p>
              )}
              {e.focus && (
                <dl className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
                  {e.focus.map((f) => (
                    <div key={f.area} className="rounded-lg border-2 border-dashed border-line p-4">
                      <dt className="text-[14px] font-semibold text-sage">{f.area}</dt>
                      <dd className="mt-1 text-[14px] text-muted">{f.subjects}</dd>
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
