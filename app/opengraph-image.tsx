import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// The preview card shown when the site is shared on LinkedIn, WhatsApp, iMessage, etc.
export const alt = 'Jason Kelvin Agung — AI, code & music';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const fontDir = join(process.cwd(), 'assets', 'fonts');

export default async function OpengraphImage() {
  const [serif, mono] = await Promise.all([
    readFile(join(fontDir, 'newsreader-italic.woff')),
    readFile(join(fontDir, 'dmmono.woff')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#141010',
          color: '#EDE3D6',
          overflow: 'hidden',
        }}
      >
        {/* warm late-night glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(60% 80% at 78% 18%, rgba(224,169,106,0.18) 0%, rgba(110,31,42,0.10) 32%, rgba(20,16,16,0) 60%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 72, padding: '0 84px', width: '100%' }}>
          {/* the record: a disc peeking from behind the sleeve */}
          <div style={{ position: 'relative', display: 'flex', width: 404, height: 404 }}>
            <div
              style={{
                position: 'absolute',
                right: -58,
                top: 22,
                width: 360,
                height: 360,
                borderRadius: 360,
                background: 'radial-gradient(circle, #2a1d1a 0%, #140d0c 64%, #0c0807 100%)',
                border: '1px solid #3a2a26',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 92, height: 92, borderRadius: 92, background: '#E0A96A' }} />
            </div>
            {/* the sleeve */}
            <div
              style={{
                width: 404,
                height: 404,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 30,
                borderRadius: 6,
                color: '#F3E9DD',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7)',
                backgroundImage:
                  'radial-gradient(closest-side at 34% 30%, rgba(224,169,106,0.95) 0%, rgba(224,169,106,0.28) 42%, rgba(110,31,42,0) 74%), linear-gradient(162deg, #7A2430 0%, #5f1b25 52%, #16100e 100%)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Serif', fontStyle: 'italic', fontSize: 34 }}>jka</span>
                <span style={{ fontFamily: 'Mono', fontSize: 15, opacity: 0.85, letterSpacing: 1 }}>key of C</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Mono', fontSize: 15, opacity: 0.85, letterSpacing: 1 }}>
                <span>ai, code & music</span>
                <span>bandung, 2026</span>
              </div>
            </div>
          </div>

          {/* the text */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ fontFamily: 'Mono', fontSize: 18, letterSpacing: 3, textTransform: 'uppercase', color: '#9A8577' }}>
              vol. 1
            </div>
            <div style={{ fontFamily: 'Serif', fontStyle: 'italic', fontSize: 92, lineHeight: 1.0, marginTop: 14, letterSpacing: -1 }}>
              jason kelvin agung
            </div>
            <div style={{ fontFamily: 'Mono', fontSize: 23, lineHeight: 1.5, marginTop: 30, color: '#B6A697', maxWidth: 560 }}>
              AI Implementation Specialist. I turn generative AI into things people use — and make music.
            </div>
            <div style={{ fontFamily: 'Mono', fontSize: 18, marginTop: 34, color: '#E59A8E', letterSpacing: 1 }}>jasonagung.site</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Serif', data: serif, style: 'italic', weight: 500 },
        { name: 'Mono', data: mono, style: 'normal', weight: 400 },
      ],
    },
  );
}
