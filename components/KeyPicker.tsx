'use client';

import { useEffect, useState } from 'react';
import { KEYS, useTheme } from '@/contexts/ThemeContext';

const SIZE = 36; // button size in px
const GAP = 4;

// Transposes the whole site's colours, a nod to the chord transposer project.
// The filled circle slides to the chosen key.
export default function KeyPicker({ className = '' }: { className?: string }) {
  const { musicalKey, setMusicalKey } = useTheme();
  const index = KEYS.indexOf(musicalKey);
  // Only animate after the saved key has been applied, so the circle doesn't slide on page load
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={className}>
      <div className="flex items-center">
        <span className="credit mr-3">key</span>
        <div role="group" aria-label="Change the colour key" className="relative flex" style={{ gap: GAP }}>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 rounded-full bg-accent"
            style={{
              width: SIZE,
              height: SIZE,
              transform: `translateX(${index * (SIZE + GAP)}px)`,
              transition: ready ? 'transform 0.25s var(--ease-in-out)' : 'none',
            }}
          />
          {KEYS.map((k) => {
            const active = k === musicalKey;
            return (
              <button
                key={k}
                type="button"
                aria-pressed={active}
                aria-label={`Key of ${k}`}
                onClick={() => setMusicalKey(k)}
                className={`relative rounded-full font-mono text-[13px] transition-[color,transform] duration-150 active:scale-[0.95] ${
                  active ? 'text-bg' : 'text-muted hover:text-ink'
                }`}
                style={{ width: SIZE, height: SIZE }}
              >
                {k}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Small label that follows the current key, e.g. on the album sleeve.
export function KeyLabel() {
  const { musicalKey } = useTheme();
  return (
    <span aria-live="polite">
      key of <span className="normal-case">{musicalKey}</span>
    </span>
  );
}
