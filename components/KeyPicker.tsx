'use client';

import { KEYS, useTheme } from '@/contexts/ThemeContext';

// Transposes the whole site's colours, a nod to the chord transposer project.
export default function KeyPicker({ className = '' }: { className?: string }) {
  const { musicalKey, setMusicalKey } = useTheme();

  return (
    <div className={className}>
      <div role="group" aria-label="Change the colour key" className="flex items-center gap-1">
        <span className="credit mr-2">key</span>
        {KEYS.map((k) => {
          const active = k === musicalKey;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              aria-label={`Key of ${k}`}
              onClick={() => setMusicalKey(k)}
              className={`h-9 w-9 rounded-full font-mono text-[13px] transition-colors ${
                active ? 'bg-accent text-bg' : 'text-muted hover:bg-ink/10 hover:text-ink'
              }`}
            >
              {k}
            </button>
          );
        })}
      </div>
    </div>
  );
}
