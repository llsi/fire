export type Tone = 'ember' | 'indigo' | 'glow';

export const site = {
  name: 'lonefox',
  wordmark: 'lonefox',
  motto: 'a quiet place on the web.',
  description: 'A minimal Astro blog theme.',
  url: 'https://example.com',
  lang: 'en',
  author: 'your name',
  email: 'you@example.com',
  github: 'https://github.com/hipness/fire',
  ogImage: '/images/share.png',
  favicon: '/favicon.svg',
  themeKey: 'lonefox-theme',
  rssTitle: '',
};

export const nav = [
  { href: '/', label: 'home' },
  { href: '/study/', label: 'study' },
  { href: '/scraps/', label: 'scraps' },
  { href: '/about/', label: 'about' },
  { href: '/rss.xml', label: 'rss' },
];

export const home = {
  door: 'come in. the kettle is on.',
  hearth: {
    motto: 'a quiet place on the web.',
    soft: 'one column, white paper, one ember. slow is fine; stopped is not.',
    stamp: '— still here · ',
  },
  identity: {
    rows: [
      { mark: '◆', text: 'one, still going' },
      { mark: '±', text: 'systems by day' },
      { mark: '≈', text: 'words by night' },
    ],
    note: 'lonefox · somewhere',
  },
  portrait: { src: '', alt: '' },
  themes: {
    label: 'traces along the road',
    tags: [
      { name: 'systems', tone: 'ember' as Tone, ico: '⌗' },
      { name: 'words', tone: 'indigo' as Tone, ico: '§' },
      { name: 'walks', tone: 'glow' as Tone, ico: '⌖' },
    ],
  },
  shelf: {
    label: 'on the shelves',
    hint: 'things kept close',
    items: [
      { text: 'quiet tools', mark: '♡' },
      { text: 'notes that stayed', mark: '✎' },
    ],
  },
  corner: {
    label: 'in the corner',
    hint: 'still taking shape',
    items: [{ text: 'the next step', mark: '▲' }],
    note: '+ a few shelves still empty',
  },
  rooms: {
    label: 'sounds from other rooms',
    bots: [] as { name: string; status: string }[],
  },
  table: { label: 'on the table', hint: 'recently brought home' },
  study: { label: 'the study', note: 'every step filed so far' },
};

export const about = {
  meta: 'about this road',
  headline: 'who keeps going',
  accent: 'going',
  lede: 'one column. a few rooms. writing that earns its place.',
  ledeSoft: '',
  quote: 'if a thing is worth carrying, it earns its place along the road.',
  photo: { src: '', alt: '' },
  skills: [] as { label: string; tone: Tone; tags: string[] }[],
};

export const archive = {
  meta: 'the study / archive',
  headline: 'everything filed so far',
  accent: 'filed',
  lede: 'the workbench. systems and tooling.',
  photo: { src: '', alt: '' },
  drawers: [
    { key: 'tech', shelf: 'the workbench shelf', hint: 'systems & tooling', mark: '◇' },
  ],
};

export const scraps = {
  meta: 'scraps',
  headline: 'the rest of the paper',
  accent: 'rest',
  lede: 'poems, walks, and notes that are not tooling.',
  photo: { src: '', alt: '' },
  drawers: [
    { key: 'notes', shelf: 'the paper', hint: 'notes that stayed', mark: '♡' },
    { key: 'poem', shelf: 'the poems', hint: 'lines that stayed', mark: '✎' },
    { key: 'travel', shelf: 'the maps', hint: 'gone somewhere', mark: '⌖' },
  ],
};

export const notFound = {
  meta: '404 / trail gone cold',
  headline: 'no path leads here',
  lede: 'the trail goes cold here — the page may have moved into the study, or this path was never walked at all.',
};

export function withAccent(text: string, accent?: string) {
  if (!accent || !text.includes(accent)) return { before: text, accent: '', after: '' };
  const i = text.indexOf(accent);
  return { before: text.slice(0, i), accent, after: text.slice(i + accent.length) };
}
