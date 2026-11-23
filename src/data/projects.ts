export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
  area: string;
  status: 'Exploring' | 'In development' | 'Public repository';
  href: string;
  accent: string;
};

export const projects: Project[] = [
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
