// Tiny album sleeve with a record peeking out, drawn for next/og ImageResponse.
// Uses the default key (C) colours.
export default function SleeveIcon({ size, background }: { size: number; background?: string }) {
  const sleeve = Math.round(size * 0.64);
  const record = Math.round(size * 0.6);
  const label = Math.round(record * 0.32);
  const ring = Math.max(1, Math.round(size / 32));
  return (
    <div style={{ width: size, height: size, display: 'flex', position: 'relative', background: background ?? 'transparent' }}>
      {/* the record */}
      <div
        style={{
          position: 'absolute',
          left: Math.round(size * 0.38),
          top: Math.round((size - record) / 2),
          width: record,
          height: record,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #3a2925 0%, #1c1311 72%)',
          border: `${ring}px solid #6b4a40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: label, height: label, borderRadius: '50%', background: '#E0A96A' }} />
      </div>
      {/* the sleeve */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: Math.round((size - sleeve) / 2),
          width: sleeve,
          height: sleeve,
          borderRadius: Math.max(1, Math.round(size * 0.05)),
          backgroundImage:
            'radial-gradient(circle at 32% 28%, rgba(224,169,106,0.95) 0%, rgba(224,169,106,0.25) 40%, rgba(110,31,42,0) 70%), linear-gradient(165deg, #7A2430 0%, #5f1b25 60%, #1a0f0d 100%)',
        }}
      />
    </div>
  );
}
