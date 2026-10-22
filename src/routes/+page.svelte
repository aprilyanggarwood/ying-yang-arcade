<script>
  // Home page — ported from index.html (CS5610 Project 1)
</script>

<svelte:head>
  <title>April's Game Parlor</title>
  <meta
    name="description"
    content="April's Game Parlor is a small collection of hand-made browser games, including a pure HTML and CSS mini crossword and a Svelte version of 2048."
  />
</svelte:head>

<main>
  <!-- ================= HERO ================= -->
  <section class="hero" aria-label="Introduction">
    <div>
      <p class="eyebrow">Games for the table</p>
      <h1>Four games.<br />One parlor.</h1>
      <p>
        A quiet parlor of hand-made browser games for a slow afternoon.
        It opens with a crossword you can play using nothing but your
        keyboard. No scripts, just HTML and CSS.
      </p>
      <!-- link changed from ./crossword.html to the route /crossword -->
      <a class="cta" href="/crossword">Start with the crossword</a>
    </div>

    <!-- four game "screens", one per cabinet — decorative -->
    <div class="hero-screens" aria-hidden="true">
      <!-- crossword: mini 3x3 grid -->
      <div class="screen">
        <svg viewBox="0 0 48 48">
          <g stroke="currentColor" stroke-width="2" fill="none">
            <rect x="4" y="4" width="12" height="12" />
            <rect x="16" y="4" width="12" height="12" />
            <rect x="28" y="4" width="12" height="12" />
            <rect x="4" y="16" width="12" height="12" />
            <rect x="16" y="16" width="12" height="12" />
            <rect x="28" y="16" width="12" height="12" />
            <rect x="4" y="28" width="12" height="12" />
            <rect x="16" y="28" width="12" height="12" />
            <rect x="28" y="28" width="12" height="12" />
          </g>
          <rect x="4" y="4" width="12" height="12" fill="currentColor" />
          <rect x="28" y="28" width="12" height="12" fill="currentColor" />
          <rect x="16" y="16" width="12" height="12" fill="#e19d29" />
        </svg>
      </div>

      <!-- 2048: sliding number tiles -->
      <div class="screen">
        <svg viewBox="0 0 48 48">
          <rect x="3" y="3" width="24" height="24" rx="5" fill="currentColor" />
          <text x="15" y="20" text-anchor="middle" font-size="12"
                font-weight="700" fill="#fff" font-family="sans-serif">2</text>
          <rect x="21" y="21" width="24" height="24" rx="5" fill="#e19d29" />
          <text x="33" y="38" text-anchor="middle" font-size="12"
                font-weight="700" fill="#fff" font-family="sans-serif">4</text>
        </svg>
      </div>

      <!-- battleship: grid, ship, and a hit marker -->
      <div class="screen">
        <svg viewBox="0 0 48 48">
          <rect x="4" y="4" width="40" height="40" rx="2"
                fill="none" stroke="currentColor" stroke-width="2" />
          <g stroke="currentColor" stroke-width="1" opacity="0.45">
            <line x1="4" y1="17.3" x2="44" y2="17.3" />
            <line x1="4" y1="30.6" x2="44" y2="30.6" />
            <line x1="17.3" y1="4" x2="17.3" y2="44" />
            <line x1="30.6" y1="4" x2="30.6" y2="44" />
          </g>
          <rect x="7" y="32" width="22" height="8" rx="4" fill="currentColor" />
          <g stroke="#e19d29" stroke-width="2.5" stroke-linecap="round">
            <line x1="33" y1="9" x2="41" y2="17" />
            <line x1="41" y1="9" x2="33" y2="17" />
          </g>
        </svg>
      </div>

      <!-- liar's dice: two dice -->
      <div class="screen">
        <svg viewBox="0 0 48 48">
          <rect x="4" y="15" width="21" height="21" rx="5"
                fill="none" stroke="currentColor" stroke-width="2" />
          <g fill="currentColor">
            <circle cx="10.5" cy="21.5" r="1.7" />
            <circle cx="18.5" cy="21.5" r="1.7" />
            <circle cx="10.5" cy="29.5" r="1.7" />
            <circle cx="18.5" cy="29.5" r="1.7" />
          </g>
          <rect x="24" y="8" width="21" height="21" rx="5" fill="#e19d29" />
          <g fill="#fff">
            <circle cx="29" cy="13" r="1.8" />
            <circle cx="34.5" cy="18.5" r="1.8" />
            <circle cx="40" cy="24" r="1.8" />
          </g>
        </svg>
      </div>
    </div>
  </section>

  <!-- ================= GAMES ================= -->
  <section class="games" aria-label="Games">
    <h2>The project cabinets</h2>
    <div class="cabinet-grid">
      <!-- live game: a real link -->
      <a class="cabinet" href="/crossword">
        <span class="tag live">Playable</span>
        <h3>Mini Crossword</h3>
        <p>A 6&times;6 Seattle-themed grid you fill in from the keyboard,
          with per-word hints and a reveal-all switch. Built with pure CSS.</p>
        <span class="play-label">Play now &rsaquo;</span>
      </a>

      <!-- 2048 is now live: changed from a "Coming soon" card to a real link -->
      <a class="cabinet" href="/2048">
        <span class="tag live">Playable</span>
        <h3>2048</h3>
        <p>The sliding-tile classic, now built in Svelte. Use the arrow keys
          to slide and merge tiles up to 2048.</p>
        <span class="play-label">Play now &rsaquo;</span>
      </a>

      <!-- upcoming games: static, not links -->
      <article class="cabinet locked">
        <span class="tag soon">Coming soon</span>
        <h3>Battleship</h3>
        <p>Turn-based naval guessing, with your opponent's board kept
          honest by a server.</p>
      </article>

      <article class="cabinet locked">
        <span class="tag soon">Coming soon</span>
        <h3>Liar's Dice</h3>
        <p>A bluffing game for a whole table, played together in real
          time.</p>
      </article>
    </div>
  </section>
</main>

<style>
  /* ---- HERO (scoped, from style.css) ---- */
  .hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--sp-4);
    align-items: center;
    margin-bottom: var(--sp-5);
  }

  .eyebrow {
    font-family: var(--font-play);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.8rem;
    color: var(--olive-deep);
    margin: 0 0 var(--sp-1);
  }

  .hero h1 {
    font-family: var(--font-head);
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    line-height: 1.1;
    margin: 0 0 var(--sp-2);
    color: var(--ink);
  }

  .hero p {
    font-size: 1.1rem;
    color: var(--ink);
    max-width: 46ch;
    margin: 0 0 var(--sp-3);
  }

  .cta {
    display: inline-block;
    font-family: var(--font-head);
    font-weight: 600;
    background-color: var(--olive);
    color: var(--white);
    text-decoration: none;
    padding: 0.85rem 1.6rem;
    min-height: 44px;
    border-radius: var(--radius);
    border: 2px solid var(--olive);
    transition: transform 0.15s ease, background-color 0.15s ease;
  }
  .cta:hover {
    background-color: var(--gold);
    color: var(--plaque);
    border-color: var(--gold);
    transform: translateY(-2px);
  }
  .cta:active {
    transform: translateY(0);
  }

  /* four mini game "screens" — decorative */
  .hero-screens {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-2);
    width: min(340px, 100%);
    margin-left: auto;
  }
  .screen {
    aspect-ratio: 1;
    background: var(--white);
    border: 3px solid var(--olive);
    border-radius: 12px;
    padding: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--olive);
  }
  .screen svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* ---- GAMES (scoped, from style.css) ---- */
  .games h2 {
    font-family: var(--font-head);
    font-size: 1.9rem;
    color: var(--ink);
    border-bottom: var(--line);
    padding-bottom: var(--sp-1);
    margin-bottom: var(--sp-3);
  }

  .cabinet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--sp-3);
  }

  .cabinet {
    background-color: var(--cream);
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    box-shadow: inset 0 0 0 1px var(--olive);
    padding: var(--sp-3);
    display: flex;
    flex-direction: column;
    gap: var(--sp-1);
    min-height: 220px;
  }

  .cabinet h3 {
    font-family: var(--font-head);
    font-size: 1.35rem;
    margin: 0;
    color: var(--ink);
  }

  .cabinet p {
    margin: 0;
    color: var(--ink);
    flex-grow: 1;
  }

  .tag {
    align-self: flex-start;
    font-family: var(--font-head);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
  }
  .tag.live {
    background: var(--olive-deep);
    color: var(--cream);
  }
  .tag.soon {
    background: transparent;
    color: var(--olive-deep);
    border: 1px solid var(--olive-deep);
  }

  a.cabinet {
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  a.cabinet:hover,
  a.cabinet:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 8px 0 var(--olive-deep);
  }

  .cabinet.locked {
    background: var(--paper);
    border-style: dashed;
  }

  .play-label {
    align-self: flex-start;
    font-family: var(--font-play);
    font-weight: 600;
    color: var(--gold);
    background: var(--plaque);
    padding: 0.3rem 0.75rem;
    border-radius: 6px;
  }

  /* responsive — hero stacks (from the style.css @media block) */
  @media (max-width: 720px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .hero-screens {
      margin: 0 auto;
    }
  }
</style>