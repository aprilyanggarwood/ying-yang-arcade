# April's Game Parlor (Arcade)

A small SvelteKit arcade. It ports my CS5610 Project 1 site (home, crossword,
about, contact) into a Svelte app and adds a playable **2048** built on my own
published npm package.

**Live site:** https://ying-yang-arcade.vercel.app
**Game logic package:** [@april-cs-npm/arcade-core](https://www.npmjs.com/package/@april-cs-npm/arcade-core)

**Author:** April Yang

## Pages

- **Home** (`/`) — landing page with the game cabinets.
- **Crossword** (`/crossword`) — a CSS-only 6x6 Seattle-themed mini crossword
  ported from Project 1.
- **2048** (`/2048`) — the sliding-tile game, playable with arrow keys (and
  on-screen arrows on mobile).
- **About** (`/about`) and **Contact** (`/contact`).

## How 2048 is built

The game rules live in a separate npm package, `@april-cs-npm/arcade-core`
(`move`, `spawn`, `hasMoves`, `canMove`, `score`), which contains pure JavaScript with no
Svelte and no DOM. This app installs that package from the npm registry and
provides the UI: the board, tiles, score, animations, and input handling.

### Features
- Current score and a high score that persists across games (localStorage).
- Saved game: your board is restored when you reload the page.
- Seeded games: enter a number to replay a reproducible sequence of tiles.
- Keyboard play with a visible focus, on-screen arrow controls on mobile, and
  score/game-over announced through an `aria-live` region.

## Built with

- SvelteKit (Svelte 5, runes)
- [@april-cs-npm/arcade-core](https://www.npmjs.com/package/@april-cs-npm/arcade-core) for the 2048 logic
- Font Awesome icons (Contact page) and Google Fonts (Libre Baskerville, Edu SA Beginner)

## Run locally

```bash
git clone https://github.com/aprilyanggarwood/ying-yang-arcade.git
cd ying-yang-arcade
npm install
npm run dev
```

Then open the local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── app.css                 # shared design tokens + reset
├── app.html
├── lib/
│   ├── game.svelte.js       # shared state: high score (localStorage)
│   └── components/
│       ├── Nav.svelte
│       ├── Footer.svelte
│       ├── Crossword.svelte
│       ├── Board.svelte
│       ├── Tile.svelte
│       ├── Score.svelte
│       ├── NewGameButton.svelte
│       └── TouchControls.svelte
└── routes/
    ├── +layout.svelte
    ├── +page.svelte         # home
    ├── 2048/+page.svelte
    ├── crossword/+page.svelte
    ├── about/+page.svelte
    └── contact/+page.svelte
```