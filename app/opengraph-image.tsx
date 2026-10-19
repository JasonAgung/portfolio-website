import { ImageResponse } from 'next/og';

// The preview card shown when the site is shared on LinkedIn, WhatsApp, etc.
export const alt = 'Jason Kelvin Agung, AI Implementation Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', gap: 64, padding: 72, background: '#17110F', color: '#EDE3D6' }}>
        <div
          style={{
            width: 420,
            height: 420,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 32,
            borderRadius: 4,
            color: '#F3E9DD',
            backgroundImage:
              'radial-gradient(circle at 32% 28%, rgba(224,169,106,0.9) 0%, rgba(224,169,106,0.2) 35%, rgba(110,31,42,0) 62%), linear-gradient(165deg, #6E1F2A 0%, #5f1b25 55%, #120c0a 100%)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 30, fontStyle: 'italic' }}>
            <span>jka</span>
            <span style={{ fontSize: 16, opacity: 0.8 }}>key of C</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, opacity: 0.8 }}>
            <span>ai, code & music</span>
            <span>bandung, 2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: -1 }}>jason kelvin agung</div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#AA9A8A', lineHeight: 1.35 }}>
            AI Implementation Specialist at DEUS Human Capital Services
          </div>
        </div>
      </div>
    ),
    size,
  );
}
