'use client';

import { useRef } from 'react';

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// The record sleeve: a colour field lit by a warm lamp, with small type in the corners.
// Its colours follow the musical key. `intro` plays the lamp-on entrance; `interactive`
// lets the lamp drift towards the pointer.
export default function Cover({
  title,
  topRight,
  bottomLeft,
  bottomRight,
  intro = false,
  interactive = false,
  className = '',
}: {
  title: string;
  topRight?: React.ReactNode;
  bottomLeft?: string;
  bottomRight?: string;
  intro?: boolean;
  interactive?: boolean;
  className?: string;
}) {
  const lampRef = useRef<HTMLDivElement>(null);

  const follow = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || e.pointerType !== 'mouse' || !lampRef.current) return;
    const box = e.currentTarget.getBoundingClientRect();
    // Pointer position relative to the lamp's resting spot (28%, 22%), damped
    const dx = ((e.clientX - box.left) / box.width - 0.28) * 0.35;
    const dy = ((e.clientY - box.top) / box.height - 0.22) * 0.35;
    lampRef.current.style.transform = `translate(${dx * 100}%, ${dy * 100}%)`;
  };

  const rest = () => {
    if (lampRef.current) lampRef.current.style.transform = '';
  };

  return (
    <div
      onPointerMove={follow}
      onPointerLeave={rest}
      className={`relative aspect-square w-full overflow-hidden rounded-[3px] text-[#F3E9DD] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ${className}`}
      style={{
        background:
          'radial-gradient(90% 70% at 85% 95%, rgba(10, 6, 5, 0.75) 0%, transparent 70%),' +
          'linear-gradient(165deg, rgb(var(--cover-a)) 0%, rgb(var(--cover-a) / 0.92) 55%, #120c0a 100%)',
        animation: intro ? 'sleeve 1s var(--ease-out) both' : undefined,
      }}
    >
      {/* The lamp */}
      <div aria-hidden="true" className="absolute inset-0" style={intro ? { animation: 'lamp 1.8s ease-out 0.35s both' } : undefined}>
        <div
          ref={lampRef}
          className="absolute -inset-[15%]"
          style={{
            background:
              'radial-gradient(60% 50% at 38% 34%, rgb(var(--cover-b) / 0.85) 0%, rgb(var(--cover-b) / 0.25) 45%, transparent 75%)',
            transition: 'transform 1.2s var(--ease-out)',
          }}
        />
      </div>
      {/* Grain on the sleeve itself */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.22] mix-blend-overlay" style={{ backgroundImage: grain }} />

      <div className="relative flex h-full flex-col justify-between p-[7%]">
        <div className="flex items-start justify-between gap-4">
          <p className="font-serif text-[clamp(1.1rem,2.6vw,1.6rem)] italic leading-tight">{title}</p>
          {topRight && <p className="font-mono text-[11px] lowercase tracking-wider opacity-80">{topRight}</p>}
        </div>
        <div className="flex items-end justify-between gap-4 font-mono text-[11px] lowercase tracking-wider opacity-80">
          <p>{bottomLeft}</p>
          <p className="text-right">{bottomRight}</p>
        </div>
      </div>
    </div>
  );
}
