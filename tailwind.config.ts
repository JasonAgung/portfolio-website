import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        raised: token('raised'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        sage: { DEFAULT: token('sage'), soft: token('sage-soft') },
        blush: { DEFAULT: token('blush'), soft: token('blush-soft') },
        sky: { DEFAULT: token('sky'), soft: token('sky-soft') },
        butter: { DEFAULT: token('butter'), soft: token('butter-soft') },
        term: { DEFAULT: token('term'), ink: token('term-ink'), dim: token('term-dim'), line: token('term-line') },
        // Pastels for text on the always-dark terminal surfaces.
        pastel: {
          sage: '#B8C5B3',
          blush: '#F0BFBF',
          sky: '#B8D0E8',
          butter: '#F5DE8A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-monospace', 'monospace'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        glyph: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0 0 rgb(var(--shadow))',
        'hard-sm': '2px 2px 0 0 rgb(var(--shadow))',
        key: '0 4px 0 0 rgb(var(--shadow))',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
