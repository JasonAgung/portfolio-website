// The record sleeve: a colour field lit by a warm lamp, with small type in the corners.
// Its colours follow the musical key the visitor picks.
export default function Cover({
  title,
  topRight,
  bottomLeft,
  bottomRight,
  className = '',
}: {
  title: string;
  topRight?: React.ReactNode;
  bottomLeft?: string;
  bottomRight?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-[3px] text-[#F3E9DD] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ${className}`}
      style={{
        background:
          'radial-gradient(120% 90% at 28% 22%, rgb(var(--cover-b) / 0.85) 0%, rgb(var(--cover-b) / 0.25) 32%, transparent 60%),' +
          'radial-gradient(90% 70% at 85% 95%, rgba(10, 6, 5, 0.75) 0%, transparent 70%),' +
          'linear-gradient(165deg, rgb(var(--cover-a)) 0%, rgb(var(--cover-a) / 0.92) 55%, #120c0a 100%)',
        transition: 'background 0.6s ease',
      }}
    >
      {/* grain on the sleeve itself */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
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
