'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { now, profile, socials } from '@/content/profile';
import { projects } from '@/content/projects';

interface Line {
  id: number;
  kind: 'cmd' | 'out';
  content: React.ReactNode;
}

const PAGES = ['about', 'experience', 'projects'] as const;
const COMMANDS = [
  'help', 'whoami', 'ls', 'cd', 'cat', 'open', 'contact', 'theme',
  'date', 'echo', 'neofetch', 'history', 'clear', 'sudo', 'exit',
];
const CHIPS = ['help', 'ls', 'cat now.txt', 'cd projects', 'open cv', 'sudo hire jason'];

const Prompt = () => (
  <span className="select-none">
    <span className="text-pastel-sage">jason@bandung</span>
    <span className="text-term-dim">:</span>
    <span className="text-pastel-sky">~</span>
    <span className="text-term-dim">{'$\u00a0'}</span>
  </span>
);

const Dir = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-pastel-sky underline decoration-pastel-sky/40 underline-offset-4 hover:decoration-pastel-sky">
    {children}
  </Link>
);

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-pastel-sky underline decoration-pastel-sky/40 underline-offset-4 hover:decoration-pastel-sky"
    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
  </a>
);

const Whoami = () => (
  <div>
    <p className="font-semibold text-pastel-blush">{profile.name.toLowerCase()}</p>
    <p>{profile.role.toLowerCase()} @ {profile.companyShort.toLowerCase()}, bandung</p>
    <p>computer science graduate, unpar ’26</p>
    <p className="mt-2 italic text-term-dim">
      {'// '}hiii, welcome to my little digital museum. type <span className="not-italic text-pastel-butter">help</span>, or tap a
      command below.
    </p>
  </div>
);

export default function Terminal({ hasCv }: { hasCv: boolean }) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState('');
  const [past, setPast] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const push = useCallback((kind: Line['kind'], content: React.ReactNode) => {
    setLines((prev) => [...prev, { id: nextId.current++, kind, content }]);
  }, []);

  // Boot: type `whoami` once, then hand the prompt to the visitor.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      push('cmd', 'whoami');
      push('out', <Whoami />);
      setBooted(true);
      return;
    }
    const word = 'whoami';
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const tick = () => {
      i++;
      setTyping(word.slice(0, i));
      if (i < word.length) {
        timers.push(setTimeout(tick, 90 + Math.random() * 70));
      } else {
        timers.push(
          setTimeout(() => {
            setTyping('');
            push('cmd', word);
            push('out', <Whoami />);
            setBooted(true);
          }, 350),
        );
      }
    };
    timers.push(setTimeout(tick, 700));
    return () => timers.forEach(clearTimeout);
  }, [push]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const go = useCallback(
    (page: string) => {
      push('out', <p className="text-term-dim">opening ~/{page} …</p>);
      setTimeout(() => router.push(`/${page}`), 450);
    },
    [push, router],
  );

  const run = useCallback(
    (raw: string) => {
      const cmdline = raw.trim();
      push('cmd', cmdline);
      if (!cmdline) return;
      setPast((p) => [...p, cmdline]);

      const [cmd, ...args] = cmdline.split(/\s+/);
      const arg = args.join(' ').toLowerCase().replace(/^~?\/?/, '').replace(/\/$/, '');

      switch (cmd.toLowerCase()) {
        case 'help':
          push(
            'out',
            <div className="grid grid-cols-[auto_1fr] gap-x-6">
              {[
                ['whoami', 'who is this guy'],
                ['ls [projects]', 'what’s in here'],
                ['cd <page>', 'go to about, experience or projects'],
                ['cat now.txt', 'what I’m doing right now'],
                ['cat contact.txt', 'how to reach me'],
                ['open cv', hasCv ? 'download my CV' : 'get my CV'],
                ['open <project>', 'open a project, e.g. open tango-solver'],
                ['theme dark|light', 'lights off, lights on'],
                ['neofetch', 'system info, but it’s me'],
                ['clear', 'clean the screen'],
              ].map(([c, d]) => (
                <div key={c} className="contents">
                  <span className="text-pastel-butter">{c}</span>
                  <span className="text-term-dim">{d}</span>
                </div>
              ))}
              <p className="col-span-2 mt-2 italic text-term-dim">{'// '}there are a few secret commands too.</p>
            </div>,
          );
          break;

        case 'whoami':
          push('out', <Whoami />);
          break;

        case 'ls':
        case 'dir':
          if (arg === 'projects') {
            push(
              'out',
              <div className="flex flex-wrap gap-x-5">
                {projects.map((p) => (
                  <Dir key={p.slug} href={`/projects#${p.slug}`}>
                    {p.slug}/
                  </Dir>
                ))}
              </div>,
            );
          } else {
            push(
              'out',
              <div className="flex flex-wrap gap-x-5">
                {PAGES.map((p) => (
                  <Dir key={p} href={`/${p}`}>
                    {p}/
                  </Dir>
                ))}
                <span>now.txt</span>
                <span>contact.txt</span>
                {hasCv && <span className="text-pastel-blush">cv.pdf</span>}
              </div>,
            );
          }
          break;

        case 'cd':
          if (!arg || arg === '..' || arg === '.') {
            push('out', <p className="text-term-dim">you’re already home.</p>);
          } else if ((PAGES as readonly string[]).includes(arg) || arg === 'work') {
            go(arg === 'work' ? 'experience' : arg);
          } else if (projects.some((p) => p.slug === arg)) {
            push('out', <p className="text-term-dim">opening ~/projects/{arg} …</p>);
            setTimeout(() => router.push(`/projects#${arg}`), 450);
          } else {
            push('out', <p>cd: no such file or directory: {arg}</p>);
          }
          break;

        case 'about':
        case 'experience':
        case 'projects':
          go(cmd.toLowerCase());
          break;

        case 'cat':
          if (arg === 'now.txt' || arg === 'now') {
            push(
              'out',
              <div className="space-y-1">
                {now.map((n) => (
                  <p key={n.label}>
                    <span className="text-pastel-butter">{n.label}:</span> {n.text}
                  </p>
                ))}
              </div>,
            );
          } else if (arg === 'contact.txt' || arg === 'contact') {
            push('out', <Contact />);
          } else if (arg === 'cv.pdf' || arg === 'cv') {
            push('out', <p>cat: cv.pdf is a binary file. try <span className="text-pastel-butter">open cv</span> instead.</p>);
          } else if (!arg) {
            push('out', <p>cat: which file? try <span className="text-pastel-butter">cat now.txt</span></p>);
          } else {
            push('out', <p>cat: {arg}: no such file or directory</p>);
          }
          break;

        case 'open':
        case 'xdg-open': {
          if (arg === 'cv' || arg === 'cv.pdf' || arg === 'resume') {
            if (hasCv) {
              window.open(profile.cvPath, '_blank', 'noopener');
              push('out', <p>opening cv.pdf in a new tab …</p>);
            } else {
              push(
                'out',
                <p>
                  the CV is getting a fresh coat of paint. ask for it at <Ext href={`mailto:${profile.email}`}>{profile.email}</Ext>
                </p>,
              );
            }
            break;
          }
          const project = projects.find((p) => p.slug === arg);
          if (project?.link) {
            window.open(project.link, '_blank', 'noopener');
            push('out', <p>opening {project.slug} in a new tab …</p>);
          } else if (project) {
            push('out', <p>{project.slug} has no public link, but here’s the write-up: <Dir href={`/projects#${project.slug}`}>~/projects/{project.slug}</Dir></p>);
          } else {
            push('out', <p>open: try <span className="text-pastel-butter">open cv</span> or <span className="text-pastel-butter">open tango-solver</span></p>);
          }
          break;
        }

        case 'contact':
        case 'email':
          push('out', <Contact />);
          break;

        case 'theme':
          if (arg === 'dark' || arg === 'light') {
            setTheme(arg);
            push('out', <p>theme set to {arg}.</p>);
          } else {
            push('out', <p>usage: theme dark | theme light</p>);
          }
          break;

        case 'date':
          push(
            'out',
            <p>
              {new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Asia/Jakarta',
                dateStyle: 'full',
                timeStyle: 'short',
              }).format(new Date())}{' '}
              <span className="text-term-dim">(bandung, WIB)</span>
            </p>,
          );
          break;

        case 'echo':
          push('out', <p>{args.join(' ')}</p>);
          break;

        case 'neofetch':
          push(
            'out',
            <div>
              <p><span className="text-pastel-sage">os:</span> human, bandung edition</p>
              <p><span className="text-pastel-sage">role:</span> {profile.role.toLowerCase()}</p>
              <p><span className="text-pastel-sage">shell:</span> python, go, javascript</p>
              <p><span className="text-pastel-sage">degree:</span> b.sc. computer science, unpar</p>
              <p className="mt-1">full readout: <Dir href="/about">~/about</Dir></p>
            </div>,
          );
          break;

        case 'history':
          push('out', <ol className="list-inside list-decimal">{[...past, cmdline].map((h, i) => <li key={i}>{h}</li>)}</ol>);
          break;

        case 'clear':
          setLines([]);
          break;

        case 'sudo':
          if (/hire/.test(arg)) {
            push(
              'out',
              <div>
                <p className="text-pastel-blush">[sudo] password for recruiter: ********</p>
                <p>access granted. jason is open to good conversations.</p>
                <p>
                  next step: <Ext href={`mailto:${profile.email}?subject=Let%E2%80%99s%20talk`}>{profile.email}</Ext>
                </p>
              </div>,
            );
          } else {
            push('out', <p>jason is not in the sudoers file. this incident will be reported (to nobody).</p>);
          }
          break;

        case 'rm':
          push('out', <p>rm: permission denied. the museum stays open.</p>);
          break;

        case 'exit':
        case 'logout':
          push('out', <p>there’s no escape. but the menu at the bottom works.</p>);
          break;

        case 'vim':
        case 'nano':
        case 'emacs':
          push('out', <p>{cmd}: let’s not start that debate here.</p>);
          break;

        case 'music':
        case 'spotify':
          push('out', <p>now playing: whatever’s on <Ext href={socials.find((s) => s.name === 'Spotify')!.href}>my spotify</Ext></p>);
          break;

        case 'ping':
          push('out', <p>pong. say hi at <Ext href={`mailto:${profile.email}`}>{profile.email}</Ext></p>);
          break;

        default:
          push(
            'out',
            <p>
              command not found: {cmd}. type <span className="text-pastel-butter">help</span> to see what works.
            </p>,
          );
      }
    },
    [go, hasCv, past, push, router, setTheme],
  );

  const complete = () => {
    const parts = input.split(/\s+/);
    if (parts.length === 1) {
      const hit = COMMANDS.filter((c) => c.startsWith(parts[0].toLowerCase()));
      if (hit.length === 1) setInput(hit[0] + ' ');
      return;
    }
    const [cmd, partial = ''] = parts;
    const pool =
      cmd === 'cd' ? [...PAGES] :
      cmd === 'cat' ? ['now.txt', 'contact.txt'] :
      cmd === 'open' ? ['cv', ...projects.map((p) => p.slug)] :
      cmd === 'theme' ? ['dark', 'light'] : [];
    const hit = pool.filter((o) => o.startsWith(partial.toLowerCase()));
    if (hit.length === 1) setInput(`${cmd} ${hit[0]}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && input) {
      e.preventDefault();
      complete();
    } else if (e.key === 'ArrowUp' && past.length) {
      e.preventDefault();
      const i = cursor === null ? past.length - 1 : Math.max(0, cursor - 1);
      setCursor(i);
      setInput(past[i]);
    } else if (e.key === 'ArrowDown' && cursor !== null) {
      e.preventDefault();
      const i = cursor + 1;
      if (i >= past.length) {
        setCursor(null);
        setInput('');
      } else {
        setCursor(i);
        setInput(past[i]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div>
      <div
        className="overflow-hidden rounded-lg border-2 border-[#11140F] bg-term text-[15px] leading-relaxed text-term-ink shadow-hard"
        onMouseUp={() => {
          if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
        }}
      >
        <div className="flex items-center gap-2 border-b border-term-line px-4 py-2.5">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pastel-blush" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pastel-butter" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pastel-sage" />
          <span className="ml-2 text-[13px] text-term-dim">jason@bandung: ~ (zsh)</span>
        </div>
        <div ref={scrollRef} className="h-[300px] overflow-y-auto px-4 py-4 sm:h-[320px] sm:px-5">
          <div role="log" aria-live="polite" aria-label="Terminal output" className="space-y-1.5">
            {lines.map((l) =>
              l.kind === 'cmd' ? (
                <p key={l.id} className="break-words">
                  <Prompt />
                  {l.content}
                </p>
              ) : (
                <div key={l.id} className="break-words pb-2 text-term-ink/90">
                  {l.content}
                </div>
              ),
            )}
          </div>
          {!booted ? (
            <p aria-hidden="true">
              <Prompt />
              {typing}
              <span className="cursor-block bg-pastel-blush" />
            </p>
          ) : (
            <form
              className="flex items-baseline"
              onSubmit={(e) => {
                e.preventDefault();
                run(input);
                setInput('');
                setCursor(null);
              }}
            >
              <label htmlFor="terminal-input">
                <Prompt />
                <span className="sr-only">Type a command</span>
              </label>
              <input
                id="terminal-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="send"
                className="min-w-0 flex-1 bg-transparent text-term-ink caret-pastel-blush outline-none placeholder:text-term-dim/70 focus-visible:outline-none"
                placeholder="type help"
              />
            </form>
          )}
        </div>
      </div>

      <div role="group" className="mt-5 flex flex-wrap items-center gap-2" aria-label="Try a command">
        <span className="comment mr-1 text-sm">{'// '}or tap:</span>
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            disabled={!booted}
            onClick={() => run(c)}
            className="min-h-[36px] rounded-md border-2 border-ink bg-raised px-3 text-[13px] font-semibold shadow-hard-sm transition-[transform,box-shadow] duration-100 hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-50"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5">
      {socials.map((s) => (
        <div key={s.name} className="contents">
          <span className="text-pastel-sage">{s.handle}</span>
          <Ext href={s.href}>{s.href.replace(/^mailto:|^https:\/\/(www\.)?/, '')}</Ext>
        </div>
      ))}
    </div>
  );
}
