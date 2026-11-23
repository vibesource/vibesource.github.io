export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
  area: string;
  status: 'Exploring' | 'In development' | 'Public repository';
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: 'pc-prepper',
    name: 'PC Prepper',
    eyebrow: 'LOCAL-FIRST / RESILIENCE',
    summary: 'What does a genuinely useful offline-first AI workstation look like?',
    detail: 'An ongoing exploration of local inference, useful tools, knowledge access and recovery when the internet is unavailable. The work currently lives within a private homelab deployment repository; this page follows the ideas rather than exposing operational configuration.',
    area: 'Local-first computing',
    status: 'In development',
    accent: 'lime',
  },
  {
    slug: 'kidtube',
    name: 'KidTube',
    eyebrow: 'VIDEO / LOCAL AI',
    summary: 'A family video editing experiment with local processing and human-reviewed publishing.',
    detail: 'A browser-based video workflow exploring local transcription, sampled-frame review, suggested edits and parental approval. Experimental automated visual cut marking is under test; detection accuracy and safety are not yet established. Public examples will use fictional or synthetic media only.',
    area: 'Software and tools',
    status: 'In development',
    accent: 'rose',
  },
  {
    slug: 'local-agent-workflow',
    name: 'Local Agent Development Workflow',
    eyebrow: 'AI / DEVELOPMENT METHODS',
    summary: 'Can local coding agents complete bounded engineering tasks reliably, with human acceptance gates?',
    detail: 'A model-agnostic investigation into planning, handovers, verification, checkpoints and acceptance for local AI-assisted software development. Versioned methods and case studies are being refined privately before publication.',
    area: 'Artificial intelligence',
    status: 'Exploring',
    accent: 'lavender',
  },
  {
    slug: 'meshpulse',
    name: 'MeshPulse',
    eyebrow: 'RADIO / CONNECTED SYSTEMS',
    summary: 'Exploring what useful communication looks like when conventional connectivity is unreliable.',
    detail: 'An evolving playground for mesh networking, message delivery, maps, and useful tools at the edge of infrastructure.',
    area: 'Connected systems',
    status: 'In development',
    href: 'https://github.com/vibesource/meshpulse',
    accent: 'cyan',
  },
  {
    slug: 'cloud-friend',
    name: 'Cloud Friend',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    summary: 'Experimenting with an AI companion and the experience of interacting with one.',
    detail: 'An exploration of personal AI, interfaces, and how software can feel more approachable.',
    area: 'Artificial intelligence',
    status: 'Exploring',
    href: 'https://github.com/vibesource/cloud-friend',
    accent: 'lavender',
  },
  {
    slug: 'gshock-api',
    name: 'GShockAPI',
    eyebrow: 'HARDWARE / SOFTWARE',
    summary: 'Finding ways to talk to everyday hardware through code.',
    detail: 'Hardware integration and the satisfaction of making devices do something they were not designed to expose easily.',
    area: 'Connected systems',
    status: 'Public repository',
    href: 'https://github.com/vibesource/GShockAPI',
    accent: 'amber',
  },
  {
    slug: 'google-workspace-tools',
    name: 'Open WebUI Google Workspace Tools',
    eyebrow: 'AI / PRODUCTIVITY',
    summary: 'Connecting AI interfaces with practical tools and existing workflows.',
    detail: 'A public experiment in extending Open WebUI with Google Workspace capabilities.',
    area: 'Artificial intelligence',
    status: 'Public repository',
    href: 'https://github.com/vibesource/open-webui-google-workspace-tools',
    accent: 'lime',
  },
  {
    slug: 'gshock-smart-sync',
    name: 'Casio G-Shock Smart Sync',
    eyebrow: 'HARDWARE / INTEGRATION',
    summary: 'A second thread in the ongoing fascination with connected watches and practical integrations.',
    detail: 'An experiment at the intersection of physical devices and useful software.',
    area: 'Connected systems',
    status: 'Public repository',
    href: 'https://github.com/vibesource/CasioGShockSmartSync',
    accent: 'rose',
  },
];
