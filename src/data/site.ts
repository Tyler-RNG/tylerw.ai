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
      "I've used every AI tool under the sun since 2019 — I know what's good, what's bad, and how to actually get things done with it.",
      'Before going all-in on AI, I led software and cybersecurity work at Lockheed Martin and ran technical programs. Now I run my own startup and help motivated people move just as fast.',
    ],
    status: { live: true, label: 'Open to new members' },
  },

  // — Work history ————————————————————————————————————————————
  experienceIntro:
    "Hands-on with AI since 2019. Real software, security, and programs behind me — not theory.",
  experience: [
    {
      org: 'Founder',
      role: 'AI-native startup',
      note: 'Building and shipping with AI every day.',
    },
    {
      org: 'Lockheed Martin',
      role: 'Senior Software Engineer',
      note: 'Led cybersecurity efforts on critical programs.',
    },
    {
      org: 'Lockheed Martin',
      role: 'Program Management',
      note: 'Drove complex technical programs end to end.',
    },
  ],

  // — Contact / links ——————————————————————————————————————————
  email: 'tylerw9954@gmail.com',
  socials: [{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tyler-warburton/' }],
} as const;

export type Site = typeof site;
