export type Lane = 'work' | 'org';

export interface Entry {
  id: string;
  lane: Lane;
  role: string;
  org: string;
  orgLink?: string;
  period: string;
  location?: string;
  current?: boolean;
  bullets: string[];
  initiatives?: { name: string; role: string }[];
  /** A milestone rather than a job, drawn as a hollow dot */
  milestone?: boolean;
  more?: { label: string; href: string };
}

// Most recent activity first: ongoing roles, then the rest by end date.
export const experience: Entry[] = [
  {
    id: 'deus',
    lane: 'work',
    role: 'AI Implementation Specialist',
    org: 'DEUS Human Capital Services',
    orgLink: 'https://deushcs.com/',
    period: 'Jan 2026 – now',
    location: 'Bandung',
    current: true,
    bullets: [
      'Moving a gamified personality assessment from fixed templates to reports written by generative AI.',
      'Built the pipeline that turns 32 personality subtraits into a report that reads like it was written for one person.',
      'Design the prompts that turn raw psychometric data into insights that feel human, not generic.',
    ],
  },
  {
    id: 'talentsource',
    lane: 'work',
    role: 'Applied AI & Research Intern',
    org: 'TalentSource Bandung',
    orgLink: 'https://www.bandungtalentsource.com/',
    period: 'Aug 2025 – now',
    location: 'Bandung',
    current: true,
    bullets: [
      'Researched machine learning for Black Soldier Fly farming, using ChatGPT and Google Vertex AI (AutoML) to generate synthetic data, train and deploy models.',
      'Rebuilt the company website much faster with AI tools like v0, Bolt.new and Gemini CLI.',
      'Created and taught “GenAI & Prompt Engineering” workshops for Telkom, TelkomMedika, TelkomMetra, Asosiasi Dana Pensiun Indonesia (ADPI) and KWI Komisi Komunikasi Sosial.',
    ],
  },
  {
    id: 'youth',
    lane: 'org',
    role: 'Youth Ministry Team',
    org: 'Departemen Remaja GII Hok Im Tong',
    orgLink: 'https://www.instagram.com/arisegeneration.gii/',
    period: '2024 – now',
    current: true,
    bullets: ['Organising events and worship for the church youth ministry.'],
    initiatives: [
      { name: 'Resfeber 2023', role: 'Event team' },
      { name: 'Jingle Wave 2023', role: 'Event team' },
      { name: 'Arise Teens Camp 2024', role: 'Event team' },
      { name: 'Retrouvailles 2024', role: 'Event and worship team' },
    ],
  },
  {
    id: 'graduated',
    lane: 'work',
    role: 'Graduated: Bachelor of Computer Science',
    org: 'Universitas Katolik Parahyangan (UNPAR)',
    period: 'Jul 2026',
    bullets: ['GPA 3.67. Thesis on solving the Tango logic puzzle with backtracking and simulated annealing.'],
    milestone: true,
    more: { label: 'More about my education', href: '/about#education' },
  },
  {
    id: 'hmpsif',
    lane: 'org',
    role: 'Academic Division Staff',
    org: 'HMPSIF, UNPAR Informatics Student Association',
    orgLink: 'https://www.instagram.com/hmpsif_unpar/',
    period: 'Aug 2023 – Aug 2024',
    location: 'Bandung',
    bullets: [
      'Ran tutorials and peer mentoring for core computer science courses like Algorithms and Logic.',
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
    id: 'glamify',
    lane: 'work',
    role: 'Marketing Communications Intern',
    org: 'Glamify',
    orgLink: 'https://www.instagram.com/glamify.id/',
    period: '2023',
    bullets: ['Marketing campaigns and communication strategy for beauty and fashion products.'],
  },
  {
    id: 'executive',
    lane: 'work',
    role: 'Marketing Communications Intern',
    org: 'Executive',
    orgLink: 'https://www.instagram.com/id_executive/',
    period: '2022',
    bullets: ['Helped make marketing materials and manage brand communication for retail stores.'],
  },
  {
    id: 'porcafe',
    lane: 'work',
    role: 'Social Media Management Team',
    org: 'Porcafe',
    orgLink: 'https://www.instagram.com/porcafe.bandung/',
    period: '2020',
    bullets: ['Designed Instagram posts, stories and banners for food and drink campaigns.'],
  },
];
