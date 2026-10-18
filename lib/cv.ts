import fs from 'node:fs';
import path from 'node:path';
import { profile } from '@/content/profile';

/** True when the CV PDF exists in public/, so we never show a dead download link. */
export function hasCv() {
  return fs.existsSync(path.join(process.cwd(), 'public', profile.cvPath));
}
