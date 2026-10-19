import { ImageResponse } from 'next/og';
import SleeveIcon from '@/components/SleeveIcon';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Home-screen icon: same sleeve on the late-night background
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#17110F' }}>
        <SleeveIcon size={132} />
      </div>
    ),
    size,
  );
}
