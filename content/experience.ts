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
  /** A milestone rather than a job */
  milestone?: boolean;
  more?: { label: string; href: string };
}

// Titles, employers, dates and locations follow LinkedIn (linkedin.com/in/j-agung).
// Most recent activity first: ongoing roles, then the rest by end date.
export const experience: Entry[] = [
  {
    id: 'deus',
    lane: 'work',
    role: 'AI Implementation Specialist',
    org: 'DEUS Human Capital Services',
    orgLink: 'https://deushcs.com/',
    period: 'Jan 2026 – now',
    location: 'Tangerang',
    current: true,
    bullets: [
      'Led the move of a gamified personality assessment from fixed templates to reports written by generative AI.',
      'Built the pipeline that turns 32 personality subtraits into a report that reads like it was written for one person.',
      'Design the prompt frameworks that turn raw psychometric data into insights that feel human, not generic.',
      'Replaced generic template statements with personal narratives about each candidate’s strengths and development areas.',
    ],
  },
  {
    id: 'talentsource',
    lane: 'work',
    role: 'Applied AI & Research Team',
    org: 'Bandung TalentSource',
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
    period: '2023 – now',
    location: 'Bandung',
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
    id: 'porcafe',
    lane: 'work',
    role: 'Social Media Manager',
    org: 'Porcafe Bandung',
    orgLink: 'https://www.instagram.com/porcafe.bandung/',
    period: 'Dec 2020 – Jan 2026',
    location: 'Bandung',
    bullets: ['Designed Instagram feed posts, stories and promotional banners, keeping one consistent visual identity across the café’s social media for five years.'],
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
    role: 'Public Relations & Events',
    org: 'HMPSIF, UNPAR Informatics Student Association',
    orgLink: 'https://www.instagram.com/hmpsif_unpar/',
    period: 'Jan – Dec 2023',
    location: 'Bandung',
    bullets: [
      'Led the PR division’s peer tutoring program in programming for junior students: matching tutors, scheduling sessions and using feedback to improve them.',
      'Co-led I-CARE 2023 at Panti Asuhan Putera Maranatha: coding workshops that teach children computational thinking, plus charity and fundraising for the orphanage.',
      'Led the event team for WOMTICS 2023, a “Web Design Using Figma” workshop with a guest speaker from BTS.id.',
    ],
    initiatives: [
      { name: 'Peer tutoring 2023', role: 'Public Relations Coordinator' },
      { name: 'SIAP Informatika 2023', role: 'Vice Events Coordinator' },
      { name: 'I-CARE 2023', role: 'Events Vice Coordinator' },
      { name: 'THORMATICS 2023', role: 'Head of External Communication' },
      { name: 'WOMTICS 2023', role: 'Events Coordinator' },
    ],
  },
  {
    id: 'glamify',
    lane: 'work',
    role: 'Marketing Communications Intern',
    org: 'Glamify',
    orgLink: 'https://www.instagram.com/glamify.id/',
    period: 'Jul – Sep 2023',
    location: 'Jakarta',
    bullets: ['Supported digital marketing campaigns to grow brand awareness and audience engagement.'],
  },
  {
    id: 'delamibrands',
    lane: 'work',
    role: 'Marketing Communications Intern',
    org: 'Delamibrands (EXECUTIVE, Colorbox)',
    period: 'Jul – Sep 2022',
    location: 'Tangerang',
    bullets: [
      'Ran social media campaigns and content for Delamibrands’ fashion brands, including EXECUTIVE and Colorbox.',
      'Helped set up EXECUTIVE’s installation at the “Pop Art Jakarta” exhibition.',
      'Tracked social media metrics and engagement to evaluate campaigns.',
    ],
  },
];
