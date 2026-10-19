'use client';

import { useEffect, useRef, useState } from 'react';

// Lines light up like synced lyrics as you scroll: the line at the reading
// position is bright, lines already read stay softly lit, lines ahead are dim.
export default function Lyrics({ lines }: { lines: string[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(lines.length - 1);
        return;
      }
      // The last line whose top has passed the reading line
      let current = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= readingLine) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [lines.length]);

  return (
    <div className="space-y-3">
      {lines.map((line, i) => (
        <p
          key={line}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="max-w-[30ch] font-serif text-[clamp(1.45rem,2.9vw,2.05rem)] leading-[1.3] transition-opacity duration-500 ease-out"
          style={{ opacity: i === active ? 1 : i < active ? 0.55 : 0.28 }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
