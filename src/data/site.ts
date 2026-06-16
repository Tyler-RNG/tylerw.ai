// ============================================================
//  SITE CONTENT — edit everything here. One file, plain text.
// ============================================================

export const site = {
  // — Identity ————————————————————————————————————————————————
  name: 'Tyler Warburton',
  domain: 'tylerw.ai',
  eyebrow: 'AI productivity coaching',
  // One-line value prop. Plain, direct, sentence case, no hype.
  tagline:
    'I help motivated people use AI to get more done — close 1:1 work, backed by a group that keeps you moving.',

  // — Primary call to action (book a 1:1, scrolls to the embed) ——
  cta: {
    label: 'Book a 1:1',
    href: '#book',
  },

  // — The private group ————————————————————————————————————————
  group: {
    name: 'Token Maxers',
    label: 'Join Token Maxers',
    href: 'https://whop.com/token-maxers',
    blurb:
      'A small, private room of motivated people using AI to do more — real workflows, shared wins, and people who keep you honest.',
  },

  // — Cal.com booking link (used by the inline embed) ——————————————
  cal: {
    link: 'tyler-warburton/token-max',
    namespace: 'token-max',
  },

  // — Terminal: the `coach --help` listing in the hero ————————————
  terminal: {
    user: 'you',
    host: 'signal',
    command: 'coach --help',
    intro: 'for motivated people who want to do more with AI:',
    entries: [
      { key: '1:1', desc: 'work through your real workflow, live' },
      { key: 'ai', desc: 'use AI to ship, not to dabble' },
      { key: 'group', desc: 'token maxers — a room that pushes you' },
      { key: 'momentum', desc: 'accountability that compounds' },
    ],
  },

  // — "What I do" cards ————————————————————————————————————————
  services: [
    {
      icon: 'compass',
      title: '1:1 coaching',
      body: 'We work through your real projects together — your tools, your workflow, live.',
    },
    {
      icon: 'terminal',
      title: 'AI that ships',
      body: 'Use AI to actually produce, not just chat. Concrete systems you keep.',
    },
    {
      icon: 'users',
      title: 'The group',
      body: 'Token Maxers: a small, private room of motivated people pushing each other forward.',
    },
    {
      icon: 'trending-up',
      title: 'Momentum',
      body: 'Support and accountability that compound week over week.',
    },
  ],

  // — About ————————————————————————————————————————————————————
  about: {
    body: [
      'I build with AI every day, and I help others do the same.',
      'I started Token Maxers to put motivated people in one room — close 1:1 work plus a group that keeps you honest. Less theory, more shipped.',
    ],
    status: { live: true, label: 'Open to new members' },
  },

  // — Proof / testimonials (optional). Empty array hides the section. —
  testimonials: [],

  // — Contact / links ——————————————————————————————————————————
  email: 'tylerw9954@gmail.com',
  socials: [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Tyler-RNG' },
    // Add LinkedIn / X here when you want them shown:
    // { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/...' },
    // { icon: 'x', label: 'X', href: 'https://x.com/...' },
  ],
} as const;

export type Site = typeof site;
