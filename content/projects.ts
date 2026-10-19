export interface Project {
  slug: string;
  /** Side A: work and research. Side B: personal and class projects. */
  side: 'a' | 'b';
  title: string;
  /** One line for lists and the home page */
  summary: string;
  description: string;
  technologies: string[];
  status: 'done' | 'ongoing';
  kind: string;
  context?: string;
  link?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'ai-report-engine',
    side: 'a',
    title: 'AI-Driven Personalized Reporting Engine',
    summary: 'Personality reports written by generative AI instead of templates.',
    description:
      'Developed an AI-driven reporting engine for DEUS Human Capital to make personality assessment reports more personal and engaging. Instead of using generic templates, I connected psychometrics with Generative AI to analyze 32 traits. I designed prompts and reliable workflows so the AI produces accurate, easy-to-read behavioral reports that truly help individuals understand their strengths.',
    technologies: ['Generative AI', 'Prompt Engineering', 'Python', 'Pipeline Automation', 'Psychometric Analytics'],
    status: 'done',
    kind: 'AI & ML',
    context: 'DEUS, 2026',
    image: '/AIreport1.png',
    imageAlt: 'A generated personality report showing an executive summary',
    featured: true,
  },
  {
    slug: 'tango-solver',
    side: 'a',
    title: 'Tango Puzzle: Backtracking & Simulated Annealing Solver',
    summary: 'My thesis: comparing two algorithms that solve a logic puzzle.',
    description:
      "As someone who loves logic puzzles, I chose the puzzle game 'Tango' for my Bachelor Thesis. I wanted to see how different computer algorithms solve grid-based puzzles, so I built and compared two methods: Backtracking and Simulated Annealing. To make the concepts accessible, I also created an interactive web solver where users can play, test algorithms, and see how the computer finds solutions step by step.",
    technologies: ['Python', 'CSP', 'Simulated Annealing', 'Backtracking', 'PyGame'],
    status: 'done',
    kind: 'Algorithms',
    context: 'Thesis, 2026',
    link: 'https://tangogame.vercel.app/',
    image: '/tango-puzzle.png',
    imageAlt: 'The Tango solver web app with a partly solved puzzle grid',
    featured: true,
  },
  {
    slug: 'bsf-predictor',
    side: 'a',
    title: 'GenAI-Accelerated Machine Learning for BSF Farming',
    summary: 'Predicting Black Soldier Fly farming outcomes, with a live dashboard.',
    description:
      'Interested in using technology for sustainability, I worked on machine learning models to help optimize Black Soldier Fly (BSF) farming for organic waste processing. Curious about modern AI tools, I experimented with ChatGPT and Google Vertex AI to prepare synthetic data and train predictive models. I also built a live web dashboard so users can easily test farming variables and see predicted outcomes.',
    technologies: ['Google Vertex AI', 'ChatGPT', 'Machine Learning', 'Data Analysis', 'GenAI Platforms'],
    status: 'done',
    kind: 'AI & ML',
    context: 'TalentSource, 2025',
    link: 'https://huggingface.co/spaces/jasonagung/bsf-predictor',
    image: '/BSF-Predictor.png',
    imageAlt: 'The BSF predictor dashboard with input sliders and a table of predictions',
    featured: true,
  },
  {
    slug: 'genai-workshops',
    side: 'a',
    title: 'Generative AI & Prompt Engineering Workshop',
    summary: 'Teaching companies to use AI tools well, in Bahasa Indonesia.',
    description:
      'Designing and delivering technical workshops in Bahasa Indonesia to democratize access to AI tools. Teaching Prompt Engineering techniques to corporate clients and institutions including Telkom, TelkomMedika, TelkomMetra, ADPI, and KWI.',
    technologies: ['GenAI Tools', 'Prompt Engineering', 'Education', 'Technical Communication'],
    status: 'ongoing',
    kind: 'Teaching',
    context: 'TalentSource, 2025 – now',
    featured: true,
  },
  {
    slug: 'talentsource-website',
    side: 'a',
    title: 'Overhauling and Updating TalentSource Website',
    summary: 'A full company website refresh, built fast with AI tools.',
    description:
      'Accelerated web development lifecycle by leveraging Generative AI tools (v0, Bolt.new, Gemini CLI) to overhaul and modernize the company website and digital presence.',
    technologies: ['v0', 'Bolt.new', 'Gemini CLI', 'GenAI Design Tools'],
    status: 'done',
    kind: 'Web',
    context: 'TalentSource, 2025',
  },
  {
    slug: 'chord-transposer',
    side: 'b',
    title: 'Chord Chart Maker & Transposer',
    summary: 'Change a song’s key mid-rehearsal without rewriting every chord.',
    description:
      'As a musician, I often experienced how inconvenient it is to change song keys on the fly during band rehearsals. To solve this, I built a web tool that automatically transposes chord charts and detects musical keys. I combined music theory, like the circle of fifths, with code to handle sharps and flats properly. It also supports multiple notation formats such as Roman numerals and Nashville numbers.',
    technologies: ['Python', 'Tkinter', 'Flask', 'HTML/CSS', 'TypeScript'],
    status: 'done',
    kind: 'Tool',
    context: 'Side project',
    link: 'https://chord-transposer-web.vercel.app/',
    image: '/chord-transposer.png',
    imageAlt: 'The chord chart maker with transpose, notation and export controls',
    featured: true,
  },
  {
    slug: 'wine-quality',
    side: 'b',
    title: 'Machine Learning Wine Quality Analysis',
    summary: 'End-to-end ML on the UCI wine quality dataset.',
    description:
      'An end-to-end implementation of machine learning using the Wine Quality dataset from UCI ML Repository. Performed exploratory data analysis, preprocessing, and model evaluation.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas', 'NumPy'],
    status: 'done',
    kind: 'Data',
    link: 'https://colab.research.google.com/drive/1cxumsTr8CsfzBDncoAzBVc03C334vAdU?usp=sharing',
    image: '/wine-quality.png',
    imageAlt: 'Histograms of wine features from the exploratory data analysis',
  },
  {
    slug: 'information-retrieval',
    side: 'b',
    title: 'Information Retrieval',
    summary: 'A search engine that ranks documents with TF-IDF.',
    description:
      'A web-based Information Retrieval system demonstrating TF-IDF (Term Frequency-Inverse Document Frequency) algorithm for document ranking and search.',
    technologies: ['JavaScript', 'HTML/CSS', 'TF-IDF', 'Search Algorithms'],
    status: 'done',
    kind: 'Web',
    link: 'https://github.com/JasonAgung/information-retrieval',
    image: '/information-retrieval.png',
    imageAlt: 'The redesigned TF-IDF search app, a paper-toned reading room with ranked results',
  },
  {
    slug: 'rainbow-attack',
    side: 'b',
    title: 'Rainbow Attack',
    summary: 'Showing how rainbow tables crack password hashes.',
    description:
      'An educational web application demonstrating rainbow table attacks on password hashes for learning cryptographic vulnerabilities and password security.',
    technologies: ['JavaScript', 'HTML/CSS', 'Cryptography'],
    status: 'done',
    kind: 'Security',
    link: 'https://github.com/JasonAgung/rainbow-attack',
    image: '/rainbow-table.png',
    imageAlt: 'The redesigned rainbow table lab, a dark crypto page with a hash-chain diagram',
  },
  {
    slug: 'portfolio-website',
    side: 'b',
    title: 'Portfolio Website',
    summary: 'The website you’re on right now.',
    description:
      'The website you’re on right now, designed like a record sleeve. Pick a key in the footer to recolour it. Built with Next.js, TypeScript and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    status: 'ongoing',
    kind: 'Web',
    link: 'https://github.com/JasonAgung/portfolio-website',
  },
];

export const linkLabel = (link: string) =>
  link.includes('github.com') ? 'View on GitHub' : link.includes('colab.research') ? 'Open notebook' : 'Visit project';
