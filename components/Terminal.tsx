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
const COMMANDS = ['help', 'whoami', 'ls', 'cd', 'cat', 'open', 'contact', 'theme', 'date', 'echo', 'clear'];

const Prompt = () => (
  <span className="select-none">
    <span className="text-pastel-sage">jason</span>
    <span className="text-term-dim">{'@bandung:~$ '}</span>
  </span>
);

const linkClass = 'text-pastel-sky underline decoration-pastel-sky/40 underline-offset-4 hover:decoration-pastel-sky';

const Dir = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={linkClass}>
    {children}
  </Link>
);

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className={linkClass} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    {children}
  </a>
);

const Whoami = () => (
  <div>
    <p className="font-semibold text-pastel-blush">Jason Kelvin Agung</p>
    <p>AI Implementation Specialist at DEUS, Bandung</p>
    <p>Computer science graduate, UNPAR 2026</p>
    <p className="mt-2 text-term-dim">Type a command, or use the buttons below.</p>
  </div>
);

const Contact = () => (
  <div className="grid grid-cols-[auto_1fr] gap-x-5">
    {socials.map((s) => (
      <div key={s.name} className="contents">
        <span className="text-pastel-sage">{s.name}</span>
        <Ext href={s.href}>{s.href.replace(/^mailto:|^https:\/\/(www\.)?/, '')}</Ext>
      </div>
    ))}
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

  const buttons = [
    { label: 'Who is Jason?', cmd: 'whoami' },
    { label: 'What he’s doing now', cmd: 'cat now.txt' },
    { label: hasCv ? 'Get the CV' : 'Ask for the CV', cmd: 'open cv' },
    { label: 'Contact', cmd: 'contact' },
    { label: 'All commands', cmd: 'help' },
  ];

  const push = useCallback((kind: Line['kind'], content: React.ReactNode) => {
    setLines((prev) => [...prev, { id: nextId.current++, kind, content }]);
  }, []);

  // Boot: type `whoami` once, then hand the prompt to the visitor.
  useEffect(() => {
    const finish = () => {
      setTyping('');
      push('cmd', 'whoami');
      push('out', <Whoami />);
      setBooted(true);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }
    const word = 'whoami';
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const tick = () => {
      i++;
      setTyping(word.slice(0, i));
      timers.push(i < word.length ? setTimeout(tick, 90 + Math.random() * 60) : setTimeout(finish, 300));
    };
    timers.push(setTimeout(tick, 600));
    return () => timers.forEach(clearTimeout);
  }, [push]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, typing]);

  const go = useCallback(
    (href: string, label: string) => {
      push('out', <p className="text-term-dim">Opening {label}…</p>);
      setTimeout(() => router.push(href), 400);
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
            <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-0.5">
              {[
                ['whoami', 'A short introduction'],
                ['cat now.txt', 'What I’m working on'],
                ['ls', 'List the pages on this site'],
                ['cd projects', 'Go to a page (about, experience, projects)'],
                ['open cv', hasCv ? 'Download my CV' : 'How to get my CV'],
                ['contact', 'Email and social links'],
                ['theme dark', 'Switch to dark or light'],
                ['clear', 'Clear the screen'],
              ].map(([c, d]) => (
                <div key={c} className="contents">
                  <span className="text-pastel-butter">{c}</span>
                  <span className="text-term-dim">{d}</span>
                </div>
              ))}
            </div>,
          );
          break;

        case 'whoami':
          push('out', <Whoami />);
          break;

        case 'ls':
          if (arg === 'projects') {
            push(
              'out',
              <div className="flex flex-wrap gap-x-5">
                {projects.map((p) => (
                  <Dir key={p.slug} href={`/projects#${p.slug}`}>
                    {p.slug}
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
                    {p}
                  </Dir>
                ))}
                <span>now.txt</span>
                {hasCv && <span>cv.pdf</span>}
              </div>,
            );
          }
          break;

        case 'cd':
          if (!arg || arg === '..' || arg === '.') {
            push('out', <p className="text-term-dim">You’re already on the home page.</p>);
          } else if ((PAGES as readonly string[]).includes(arg)) {
            go(`/${arg}`, arg);
          } else if (projects.some((p) => p.slug === arg)) {
            go(`/projects#${arg}`, arg);
          } else {
            push('out', <p>No page called “{arg}”. Try about, experience or projects.</p>);
          }
          break;

        case 'about':
        case 'experience':
        case 'projects':
          go(`/${cmd.toLowerCase()}`, cmd.toLowerCase());
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
          } else {
            push('out', <p>Try <span className="text-pastel-butter">cat now.txt</span></p>);
          }
          break;

        case 'open':
          if (arg === 'cv' || arg === 'cv.pdf' || arg === 'resume') {
            if (hasCv) {
              window.open(profile.cvPath, '_blank', 'noopener');
              push('out', <p>Opening the CV in a new tab…</p>);
            } else {
              push('out', <p>Email me and I’ll send my CV: <Ext href={`mailto:${profile.email}`}>{profile.email}</Ext></p>);
            }
          } else {
            const project = projects.find((p) => p.slug === arg);
            if (project?.link) {
              window.open(project.link, '_blank', 'noopener');
              push('out', <p>Opening {project.title} in a new tab…</p>);
            } else if (project) {
              go(`/projects#${project.slug}`, project.title);
            } else {
              push('out', <p>Try <span className="text-pastel-butter">open cv</span></p>);
            }
          }
          break;

        case 'contact':
        case 'email':
          push('out', <Contact />);
          break;

        case 'theme':
          if (arg === 'dark' || arg === 'light') {
            setTheme(arg);
            push('out', <p>Switched to {arg} mode.</p>);
          } else {
            push('out', <p>Use <span className="text-pastel-butter">theme dark</span> or <span className="text-pastel-butter">theme light</span></p>);
          }
          break;

        case 'date':
          push(
            'out',
            <p>
              {new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', dateStyle: 'full', timeStyle: 'short' }).format(new Date())}{' '}
              <span className="text-term-dim">in Bandung</span>
            </p>,
          );
          break;

        case 'echo':
          push('out', <p>{args.join(' ')}</p>);
          break;

        case 'clear':
          setLines([]);
          break;

        case 'sudo':
          push(
            'out',
            /hire/.test(arg) ? (
              <p>Happy to talk. Email me at <Ext href={`mailto:${profile.email}`}>{profile.email}</Ext></p>
            ) : (
              <p>Permission denied.</p>
            ),
          );
          break;

        default:
          push(
            'out',
            <p>
              Command not found: {cmd}. Type <span className="text-pastel-butter">help</span> to see what you can do.
            </p>,
          );
      }
    },
    [go, hasCv, push, setTheme],
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
      cmd === 'cat' ? ['now.txt'] :
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
      setCursor(i >= past.length ? null : i);
      setInput(i >= past.length ? '' : past[i]);
    }
  };

  return (
    <div>
      <div
        className="overflow-hidden rounded-xl border-2 border-[#11140F] bg-term font-mono text-[13.5px] leading-relaxed text-term-ink shadow-hard [font-stretch:87.5%]"
        onMouseUp={() => {
          if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
        }}
      >
        <div className="flex items-center gap-2 border-b border-term-line px-4 py-2.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-pastel-blush" />
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-pastel-butter" />
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-pastel-sage" />
          <span className="ml-2 text-[12px] text-term-dim">Try typing here</span>
        </div>
        <div ref={scrollRef} className="h-[280px] overflow-y-auto px-4 py-4 sm:h-[300px] sm:px-5">
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
                className="min-w-0 flex-1 bg-transparent text-term-ink caret-pastel-blush outline-none placeholder:text-term-dim/60 focus-visible:outline-none"
                placeholder="type help"
              />
            </form>
          )}
        </div>
      </div>

      <div role="group" aria-label="Quick commands" className="mt-4 flex flex-wrap gap-2">
        {buttons.map((b) => (
          <button
            key={b.cmd}
            type="button"
            disabled={!booted}
            onClick={() => run(b.cmd)}
            className="min-h-[38px] rounded-full border border-line bg-raised px-3.5 text-[14px] text-ink transition-colors hover:border-ink disabled:opacity-50"
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
