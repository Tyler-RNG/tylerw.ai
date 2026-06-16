// ============================================================
//  SITE CONTENT — edit everything here. One file, plain text.
//  Anything marked  // TODO  is a placeholder to confirm/replace.
// ============================================================

export const site = {
  // — Identity ————————————————————————————————————————————————
  name: 'Tyler W', // TODO: full name as you want it displayed
  domain: 'tylerw.ai',
  eyebrow: 'Coach & Mentor', // tiny uppercase label above the name
  // One-line value prop. Plain, direct, sentence case, no hype.
  tagline: 'I help ambitious people achieve more — career, growth, and shipping ideas.', // TODO

  // — Primary call to action ——————————————————————————————————
  cta: {
    label: 'Book a session',
    // TODO: your scheduler link (Cal.com / Calendly / etc.)
    href: 'https://cal.com/your-handle',
  },

  // — Terminal: the `coach --help` listing in the hero ————————————
  // key = short offering, desc = plain-language one-liner.
  terminal: {
    user: 'you',
    host: 'signal',
    command: 'coach --help',
    intro: 'for ambitious people who want more:',
    // TODO: replace these four with your real offerings
    entries: [
      { key: 'growth', desc: 'achieve more, faster' },
      { key: 'career', desc: 'level up your trajectory' },
      { key: 'building', desc: 'ship your ideas, AI-powered' },
      { key: 'mentoring', desc: '1:1s that compound' },
    ],
  },

  // — "What I do" cards (mirror the terminal entries, with detail) —
  services: [
    {
      icon: 'trending-up',
      title: 'Growth',
      body: 'Get unstuck and move faster. Clear next steps, real accountability.', // TODO
    },
    {
      icon: 'compass',
      title: 'Career',
      body: 'Level up your trajectory — positioning, decisions, and leverage.', // TODO
    },
    {
      icon: 'terminal',
      title: 'Building',
      body: 'Ship your ideas with AI as a force multiplier, not a gimmick.', // TODO
    },
    {
      icon: 'users',
      title: 'Mentoring',
      body: '1:1 sessions that compound — operator-to-operator, no fluff.', // TODO
    },
  ],

  // — About ————————————————————————————————————————————————————
  about: {
    // Short, direct bio. 2-3 sentences max. Brand voice.
    body: [
      'I build, and I help others build.', // TODO
      'Years of shipping real products taught me what actually moves the needle. I bring that to every session — concrete examples over abstractions, momentum over theory.', // TODO
    ],
    // Small status line under the bio. Set live:true for the green dot.
    status: { live: true, label: 'Open to new mentees' }, // TODO
  },

  // — Proof / testimonials (optional). Empty array hides the section. —
  testimonials: [
    // { quote: 'Tyler helped me ...', author: 'Name', role: 'Title, Company' }, // TODO
  ],

  // — Contact / links ——————————————————————————————————————————
  email: 'tylerw9954@gmail.com', // TODO: confirm public contact email
  socials: [
    // TODO: confirm/replace handles; remove any you don't want shown
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Tyler-RNG' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
    { icon: 'x', label: 'X', href: 'https://x.com/your-handle' },
  ],
} as const;

export type Site = typeof site;
