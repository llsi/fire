# lonefox

A minimal Astro blog theme. Light and dark. One column, one accent.

[简体中文](README.zh-CN.md)

![Home](docs/screenshot.png)

Clone this repo as a starter, or add it as a dependency and keep your own `lonefox.config.ts` at the site root.

## Features

- Markdown posts in `src/content/blog/`
- Home, study, scraps, about, 404, RSS, sitemap
- Light and dark mode
- One config file: `lonefox.config.ts`
- Photos and fox marks via config. An empty photo path keeps a paper frame.

## Quick start

```bash
git clone https://github.com/hipness/fire.git
cd fire
npm install
npm run dev
```

Node 22+.

## As a dependency

```json
{
  "dependencies": {
    "lonefox": "github:hipness/fire"
  }
}
```

Import `lonefox` from `lonefox` (or `lonefox/src`) in `astro.config`. Put `lonefox.config.ts` at the site root — the theme reads it as `lonefox/config`. Write posts in the site's `src/content/blog/`. Put photos in the site's `public/`.

## Project structure

```text
/
├── lonefox.config.ts
├── src/
│   ├── content/blog/
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   ├── lib/
│   └── styles/global.css
└── public/
```

Post fields: `title`, `date`, `description`, `category` (`tech` | `notes` | `travel` | `poem`). Optional: `location`, `cover`, `images`.

`tech` posts go to `/study/`. Everything else goes to `/scraps/`. `/archive/` redirects to `/study/`.

## Configuration

Edit [`lonefox.config.ts`](lonefox.config.ts):

| Key | |
|---|---|
| `site` | name, motto, url, email, github, favicon, years |
| `site.marks` | optional `wordmark` / `sleeping` / `paw` image URLs (empty = built-in fox SVG) |
| `nav` | primary links |
| `home` | home copy |
| `home.portrait` | home photo (`src` empty = paper frame) |
| `about.photo` | about photo |
| `archive.photo` | study masthead photo |
| `scraps.photo` | scraps masthead photo |
| `archive` | study labels |
| `scraps` | poems, walks, and notes |

Put photos and custom marks in the site `public/` directory and point the config at those URLs. Do not edit theme source to restyle a site.

Colors live in `src/styles/global.css`.

## Commands

| Command | |
|---|---|
| `npm run dev` | local server |
| `npm run build` | production build |
| `npm run check` | type check |
| `npm run preview` | preview `dist/` |

## License

[MIT](LICENSE)
