import { ImageResponse } from 'next/og';
import SleeveIcon from '@/components/SleeveIcon';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<SleeveIcon size={32} />, size);
}
