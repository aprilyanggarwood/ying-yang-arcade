# April's Game Parlor (Arcade)

A SvelteKit arcade. It ports my CS5610 Project 1 site (home, crossword, about,
contact) into a Svelte app, adds a playable **2048** built on my own published
npm package, and adds a two-player **Battleship** game backed by a separate
Node/Hono API with user accounts.

**Live site:** https://ying-yang-arcade.onrender.com
**Game API:** https://ying-yang-arcade-api.onrender.com
**Game logic package:** [@april-cs-npm/arcade-core](https://www.npmjs.com/package/@april-cs-npm/arcade-core)

**Author:** April Yang

## Pages

- **Home** (`/`) — landing page with the game cabinets.
- **Crossword** (`/crossword`) — a CSS-only 6x6 Seattle-themed mini crossword
  ported from Project 1.
- **2048** (`/2048`) — the sliding-tile game, playable with arrow keys (and
  on-screen arrows on mobile).
- **Battleship** (`/games`) — a two-player game. The lobby lists open games to
  join and your own games; the board at `/games/[id]` is where you play.
- **Login / Register** (`/login`, `/register`) — account pages for Battleship.
- **About** (`/about`) and **Contact** (`/contact`).

## How the games are built

The game rules for both 2048 and Battleship live in a separate npm package,
`@april-cs-npm/arcade-core`, which is pure JavaScript with no Svelte and no DOM:

- **2048:** `move`, `spawn`, `hasMoves`, `canMove`, `score`
- **Battleship:** `createRandomBoard`, `isValidShot`, `updateBoard`, `isGameComplete`

This app installs that package from the npm registry and provides the UI.

**Battleship architecture:** the browser only talks to this SvelteKit server,
which talks to the Node/Hono API. The API owns all game state (ship placement,
turns, shots, winner) and the opponent's board is hidden before it ever reaches
the browser. Login uses a session cookie that SvelteKit forwards to the API.

### Features
- **2048:** persistent high score (localStorage), saved game on reload, seeded
  games, keyboard play, on-screen arrows on mobile, `aria-live` announcements.
- **Battleship:** accounts (register/login/logout), a game lobby, two 10x10
  boards, keyboard-playable firing with a visible focus ring, hit/miss shown
  with both color and symbols (not color alone), and a Svelte transition when a
  shot lands. The board is responsive down to 320px.

## Built with

- SvelteKit (Svelte 5, runes), `@sveltejs/adapter-node`
- [@april-cs-npm/arcade-core](https://www.npmjs.com/package/@april-cs-npm/arcade-core) for 2048 and Battleship logic
- Font Awesome icons (Contact page) and Google Fonts (Libre Baskerville, Edu SA Beginner)

## Run locally

This app needs the API running too (for Battleship). Start the API first (see
its repo), then:

```bash
git clone https://github.com/aprilyanggarwood/ying-yang-arcade.git
cd ying-yang-arcade
npm install
npm run dev
```

Open http://localhost:5173. By default the app calls the API at
`http://localhost:3000`; set `API_URL` in a `.env` file to point elsewhere.

## Build

```bash
npm run build
node build/index.js
```

## Deployment

Deployed on Render with `adapter-node`. Build: `npm install && npm run build`.
Start: `node build/index.js`. Two environment variables are required:

- `API_URL` — the live API's URL
- `ORIGIN` — this site's own live URL (needed by SvelteKit for form actions)

The free tier sleeps when idle, so the first request after inactivity may take
up to a minute.

## Project structure

```
src/
├── app.css                  # shared design tokens + reset
├── app.html
├── hooks.server.js          # resolves the logged-in user from the session cookie
├── lib/
│   ├── game.svelte.js        # 2048 shared state (high score, localStorage)
│   ├── server/
│   │   └── api.js            # API base URL + cookie-forwarding fetch helper
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
    ├── +layout.server.js     # passes the user to every page
    ├── +page.svelte          # home
    ├── 2048/+page.svelte
    ├── crossword/+page.svelte
    ├── about/+page.svelte
    ├── contact/+page.svelte
    ├── login/
    ├── register/
    ├── logout/
    └── games/                # Battleship lobby + [id] board
```