export type Lane = 'main' | 'org';

export interface Commit {
  hash: string;
  lane: Lane;
  type: string;
  scope: string;
  refs?: string[];
  role: string;
  org: string;
  orgLink?: string;
  period: string;
  location?: string;
  bullets: string[];
  initiatives?: { name: string; role: string }[];
  /** A milestone rather than a job: drawn as a hollow tag dot */
  milestone?: boolean;
  more?: { label: string; href: string };
}

// Most recent activity first, like `git log`: ongoing roles, then the rest by end date.
// main = work, org = organisations & community.
export const commits: Commit[] = [
  {
    hash: 'f19d2b4',
    lane: 'main',
    type: 'feat',
    scope: 'deus',
    refs: ['HEAD -> main'],
    role: 'AI Implementation Specialist',
    org: 'DEUS Human Capital Services',
    orgLink: 'https://deushcs.com/',
    period: 'Jan 2026 – now',
    location: 'Bandung',
    bullets: [
      'Moving a gamified personality assessment from fixed templates to reports written by generative AI.',
      'Built the pipeline that turns 32 personality subtraits into a report that reads like it was written for one person.',
      'Design the prompt frameworks that turn raw psychometric data into insights that feel human, not generic.',
    ],
  },
  {
    hash: '3e8a0c7',
    lane: 'main',
    type: 'feat',
    scope: 'talentsource',
    role: 'Applied AI & Research Intern',
    org: 'TalentSource Bandung',
    orgLink: 'https://www.bandungtalentsource.com/',
    period: 'Aug 2025 – now',
    location: 'Bandung',
    bullets: [
      'Researched machine learning for Black Soldier Fly farming, using ChatGPT and Google Vertex AI (AutoML) to generate synthetic data, train and deploy models.',
      'Rebuilt the company website much faster with AI tools like v0, Bolt.new and Gemini CLI.',
      'Created and taught “GenAI & Prompt Engineering” workshops for Telkom, TelkomMedika, TelkomMetra, Asosiasi Dana Pensiun Indonesia (ADPI) and KWI Komisi Komunikasi Sosial.',
    ],
  },
  {
    hash: 'c42f7d1',
    lane: 'org',
    type: 'feat',
    scope: 'youth',
    refs: ['org'],
    role: 'Church Youth Ministry Team',
    org: 'Departemen Remaja GII Hok Im Tong',
    orgLink: 'https://www.instagram.com/arisegeneration.gii/',
    period: '2024 – now',
    bullets: ['Organising events and worship for the church youth ministry.'],
    initiatives: [
      { name: 'Resfeber 2023', role: 'Event team' },
      { name: 'Jingle Wave 2023', role: 'Event team' },
      { name: 'Arise Teens Camp 2024', role: 'Event team' },
      { name: 'Retrouvailles 2024', role: 'Event and worship team' },
    ],
  },
  {
    hash: 'a7c3e91',
    lane: 'main',
    type: 'merge',
    scope: 'unpar',
    refs: ['tag: graduated'],
    role: 'Bachelor of Computer Science',
    org: 'Universitas Katolik Parahyangan (UNPAR)',
    period: 'Jul 2026',
    bullets: [
      'Four years of computer science, merged. GPA 3.67.',
      'Thesis: backtracking vs. simulated annealing on the Tango logic puzzle.',
    ],
    milestone: true,
    more: { label: 'cat education', href: '/about#education' },
  },
  {
    hash: '8b51e3a',
    lane: 'org',
    type: 'feat',
    scope: 'hmpsif',
    role: 'Academic Division Staff',
    org: 'HMPSIF, UNPAR Informatics Student Association',
    orgLink: 'https://www.instagram.com/hmpsif_unpar/',
    period: 'Aug 2023 – Aug 2024',
    location: 'Bandung',
    bullets: [
      'Ran tutorials and peer mentoring for core CS courses like Algorithms and Logic.',
      'Worked between students and faculty to improve academic resources.',
      'Organised charity events and IT classes for underprivileged people.',
    ],
    initiatives: [
      { name: 'I-CARE 2023', role: 'Vice Chief Executive' },
      { name: 'SIAP IF 2023', role: 'Vice Head of Event Team' },
      { name: 'THORMATICS 2023', role: 'Head of External Communication' },
      { name: 'WOMTICS 2023', role: 'Head of Event Team' },
    ],
  },
  {
    hash: '5d0e6f2',
    lane: 'main',
    type: 'style',
    scope: 'glamify',
    role: 'Marketing Communications Intern',
    org: 'Glamify',
    orgLink: 'https://www.instagram.com/glamify.id/',
    period: '2023',
    bullets: ['Marketing campaigns and communication strategy for beauty and fashion products.'],
  },
  {
    hash: '1a9c4e8',
    lane: 'main',
    type: 'style',
    scope: 'executive',
    role: 'Marketing Communications Intern',
    org: 'Executive',
    orgLink: 'https://www.instagram.com/id_executive/',
    period: '2022',
    bullets: ['Helped make marketing materials and manage brand communication for retail stores.'],
  },
  {
    hash: '0000001',
    lane: 'main',
    type: 'init',
    scope: 'porcafe',
    role: 'Social Media Management Team',
    org: 'Porcafe',
    orgLink: 'https://www.instagram.com/porcafe.bandung/',
    period: '2020',
    bullets: ['My first commit: designing Instagram posts, stories and banners for food and drink campaigns.'],
  },
];
