export const profile = {
  name: 'Jason Kelvin Agung',
  role: 'AI Implementation Specialist',
  company: 'DEUS Human Capital Services',
  companyShort: 'DEUS',
  location: 'Bandung, Indonesia',
  email: 'jason.kelvin.agung@gmail.com',
  phone: '+62 895-0615-2580',
  phoneHref: 'tel:+6289506152580',
  // Drop a PDF at public/cv.pdf and every CV button and command lights up.
  cvPath: '/cv.pdf',
};

export const socials = [
  { name: 'Email', handle: 'email', href: `mailto:${profile.email}` },
  { name: 'LinkedIn', handle: 'linkedin', href: 'https://www.linkedin.com/in/j-agung' },
  { name: 'GitHub', handle: 'github', href: 'https://github.com/JasonAgung' },
  { name: 'Instagram', handle: 'instagram', href: 'https://www.instagram.com/jason_kelvin/' },
  { name: 'Spotify', handle: 'spotify', href: 'https://open.spotify.com/user/jason.kelvin.agung' },
];

export const now = [
  { label: 'Working on', text: 'Personality reports written by generative AI at DEUS, built from 32 personality subtraits.' },
  { label: 'Teaching', text: 'Generative AI and prompt engineering workshops in Bahasa Indonesia, through TalentSource.' },
  { label: 'Recently', text: 'Graduated in computer science from UNPAR in July 2026.' },
];

export const skills = [
  {
    group: 'AI & data science',
    items: ['Python', 'scikit-learn', 'NumPy', 'pandas', 'Vertex AI', 'Generative AI frameworks'],
  },
  {
    group: 'Software engineering',
    items: ['Go', 'C / C++', 'JavaScript', 'SQL', 'Java', 'Next.js / React'],
  },
  {
    group: 'Communication',
    items: ['Technical communication', 'Public speaking', 'Academic mentoring', 'Project leadership'],
  },
];

export const interests = [
  { name: 'Artificial intelligence' },
  { name: 'Performance optimisation' },
  { name: 'Software engineering' },
  { name: 'Music', href: 'https://open.spotify.com/user/jason.kelvin.agung' },
  { name: 'Technology & gadgets' },
  { name: 'Logic puzzles' },
];

export const education = [
  {
    school: 'Universitas Katolik Parahyangan (UNPAR)',
    degree: 'Bachelor of Computer Science (Sarjana Komputer)',
    period: 'Aug 2022 – Jul 2026',
    detail: 'Graduated with a GPA of 3.67.',
    thesis:
      'Comparative Analysis of Backtracking and Simulated Annealing Algorithms for Solving the Tango Logic Puzzle',
    focus: [
      { area: 'AI & data science', subjects: 'Machine learning, fuzzy systems, information retrieval, optimisation' },
      { area: 'Software engineering', subjects: 'Advanced data structures, object-oriented programming, algorithm design' },
      { area: 'Computational maths', subjects: 'Discrete maths, statistics for computing, matrices & vector spaces, logic' },
    ],
  },
  {
    school: 'SMA Santo Aloysius',
    degree: 'High school diploma',
    period: '2019 – 2022',
  },
  {
    school: 'SD–SMP Yos Sudarso',
    degree: 'Elementary and middle school',
    period: '2011 – 2019',
  },
];
