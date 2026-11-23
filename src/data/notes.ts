export type Note = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  project?: string;
};
export const notes: Note[] = [
  {
    slug: 'opening-the-workshop',
    date: '2026-11-23',
    category: 'Workshop',
    title: 'Opening the workshop',
    excerpt: 'A small corner of the internet for projects in progress, interesting questions, and ideas worth trying.',
    body: [
      'VibeSource is an independent home for curiosity-driven engineering. Not every idea needs a business case, a release date, or even a tidy ending.',
      'This workshop is designed to hold the work in between: prototypes, experiments, software that solves a particular annoyance, and the lessons picked up along the way.',
      'The first job is to give those projects somewhere to live. The rest will grow as the work does.'
    ]
  }
];
