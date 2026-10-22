<!--
  Crossword — ported from crossword.html (CS5610 Project 1).
  Pure-CSS reveal kept intact: native checkboxes + :has().
  Reveal anchor changed from `main` to `.crossword-body` (the wrapper this
  component owns) so Svelte's scoped styles apply correctly.
-->

<h1>Mini Crossword</h1>
<p class="puzzle-intro">
  A little six-by-six with a Seattle streak, where the Across and Down
  answers are all different. Click a square and type a letter. Stuck on
  one word? Tap its <em>hint</em> to reveal just that answer, or flip
  <em>Reveal all answers</em> to show the whole grid. No scripts here,
  just HTML and CSS.
</p>

<div class="crossword-body">
  <!-- ================= PUZZLE ================= -->
  <section class="puzzle" aria-label="Crossword puzzle">
    <h2 class="sr-only">Puzzle grid</h2>

    <!-- global reveal: label WRAPS the checkbox, so no id/for needed -->
    <label class="reveal-all-label">
      <input type="checkbox" class="reveal-all" /> Reveal all answers
    </label>

    <div class="board">
      <!-- Row 1 -->
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell"><span class="num">1</span><input maxlength="1" aria-label="Row 1, column 2" /><span class="answer a1">C</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 1, column 3" /><span class="answer a1">L</span></div>
      <div class="cell"><span class="num">2</span><input maxlength="1" aria-label="Row 1, column 4" /><span class="answer a1 d2">O</span></div>
      <div class="cell"><span class="num">3</span><input maxlength="1" aria-label="Row 1, column 5" /><span class="answer a1 d3">T</span></div>
      <div class="cell"><span class="num">4</span><input maxlength="1" aria-label="Row 1, column 6" /><span class="answer a1 d4">H</span></div>
      <!-- Row 2 -->
      <div class="cell"><span class="num">5</span><input maxlength="1" aria-label="Row 2, column 1" /><span class="answer d5">E</span></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell"><span class="num">6</span><input maxlength="1" aria-label="Row 2, column 4" /><span class="answer a6 d2">B</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 2, column 5" /><span class="answer a6 d3">A</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 2, column 6" /><span class="answer a6 d4">Y</span></div>
      <!-- Row 3 -->
      <div class="cell"><input maxlength="1" aria-label="Row 3, column 1" /><span class="answer d5">A</span></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell"><span class="num">7</span><input maxlength="1" aria-label="Row 3, column 3" /><span class="answer a7 d7">M</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 3, column 4" /><span class="answer a7 d2">E</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 3, column 5" /><span class="answer a7 d3">R</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 3, column 6" /><span class="answer a7 d4">E</span></div>
      <!-- Row 4 -->
      <div class="cell"><span class="num">8</span><input maxlength="1" aria-label="Row 4, column 1" /><span class="answer a8 d5">G</span></div>
      <div class="cell"><span class="num">9</span><input maxlength="1" aria-label="Row 4, column 2" /><span class="answer a8 d9">R</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 4, column 3" /><span class="answer a8 d7">A</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 4, column 4" /><span class="answer a8 d2">Y</span></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell"><input maxlength="1" aria-label="Row 4, column 6" /><span class="answer d4">N</span></div>
      <!-- Row 5 -->
      <div class="cell"><span class="num">10</span><input maxlength="1" aria-label="Row 5, column 1" /><span class="answer a10 d5">L</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 5, column 2" /><span class="answer a10 d9">A</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 5, column 3" /><span class="answer a10 d7">D</span></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell block" aria-hidden="true"></div>
      <div class="cell"><input maxlength="1" aria-label="Row 5, column 6" /><span class="answer d4">A</span></div>
      <!-- Row 6 -->
      <div class="cell"><span class="num">11</span><input maxlength="1" aria-label="Row 6, column 1" /><span class="answer a11 d5">E</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 6, column 2" /><span class="answer a11 d9">N</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 6, column 3" /><span class="answer a11 d7">E</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 6, column 4" /><span class="answer a11">M</span></div>
      <div class="cell"><input maxlength="1" aria-label="Row 6, column 5" /><span class="answer a11">Y</span></div>
      <div class="cell block" aria-hidden="true"></div>
    </div>
  </section>

  <!-- ================= CLUES ================= -->
  <section class="clues" aria-label="Clues">
    <div>
      <h2>Across</h2>
      <ul>
        <li><span class="cnum">1</span>What you'll keep handy to wipe drizzle off your glasses<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a1" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">6</span>Elliott ___, the water Seattle curls around<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a6" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">7</span>Nothing but; a ___ sprinkle, locals shrug<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a7" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">8</span>The sky's factory setting here, October through June<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a8" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">10</span>Young chap<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a10" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">11</span>Foe (or, to a local, a whole week of direct sun)<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-a11" /><span class="reveal-word-text">hint</span></label></li>
      </ul>
    </div>
    <div>
      <h2>Down</h2>
      <ul>
        <li><span class="cnum">2</span>Heed, as drivers do for jaywalkers downtown<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d2" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">3</span>Road-sealing black stuff<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d3" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">4</span>Cackling Woodland Park Zoo resident<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d4" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">5</span>Bald raptor riding thermals over Puget Sound<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d5" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">7</span>Manufactured; “___ in Washington”<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d7" /><span class="reveal-word-text">hint</span></label></li>
        <li><span class="cnum">9</span>Jogged the Burke-Gilman, say<label class="reveal-word"><input type="checkbox" class="reveal-mini toggle-d9" /><span class="reveal-word-text">hint</span></label></li>
      </ul>
    </div>
  </section>
</div>

<style>
  .puzzle-intro {
    max-width: 60ch;
    margin-bottom: var(--sp-3);
  }

  /* ---- reveal controls ---- */
  .reveal-all-label {
    font-family: var(--font-head);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    min-height: 44px;
    padding: 0 0.7rem;
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    background: var(--cream);
    color: var(--ink);
  }
  .reveal-all {
    width: 22px;
    height: 22px;
    accent-color: var(--olive);
    cursor: pointer;
  }

  /* the grid — 6 x 6 */
  .board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    width: min(420px, 100%);
    margin-top: var(--sp-3);
    margin-bottom: var(--sp-4);
  }

  .cell {
    position: relative;
    aspect-ratio: 1;
    background: var(--white);
    border: 2px solid var(--olive);
    border-radius: 3px;
    transition: box-shadow 0.12s ease, transform 0.12s ease, background 0.12s ease;
  }

  .cell.block {
    background: var(--olive);
    border-color: var(--olive-deep);
  }

  .cell .num {
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 2;
    padding: 0 2px;
    border-radius: 2px;
    background: var(--cream);
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 0.6rem;
    line-height: 1.2;
    color: var(--olive-deep);
    pointer-events: none;
    transition: color 0.12s ease, transform 0.12s ease;
  }

  .cell input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    text-align: center;
    text-transform: uppercase;
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--ink);
    border-radius: 3px;
  }
  .cell input:focus {
    outline: none;
  }

  /* ACTIVE-CELL HIGHLIGHT */
  .cell:focus-within {
    background: #f6efcf;
    border-color: var(--olive-deep);
    box-shadow: 0 0 0 3px var(--gold), 0 4px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.06);
    z-index: 3;
  }
  .cell:focus-within .num {
    transform: scale(1.35);
    transform-origin: top left;
  }
  .cell input:focus-visible {
    outline: 3px solid var(--olive-deep);
    outline-offset: -3px;
  }

  /* answer overlay, hidden until revealed */
  .cell .answer {
    position: absolute;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--gold);
    background: var(--plaque);
    border-radius: 3px;
    pointer-events: none;
    z-index: 1;
  }

  /* GLOBAL reveal (anchor changed from main -> .crossword-body) */
  .crossword-body:has(.reveal-all:checked) .answer {
    display: flex;
  }

  /* PER-WORD reveal */
  .crossword-body:has(.toggle-a1:checked) .answer.a1 { display: flex; }
  .crossword-body:has(.toggle-a6:checked) .answer.a6 { display: flex; }
  .crossword-body:has(.toggle-a7:checked) .answer.a7 { display: flex; }
  .crossword-body:has(.toggle-a8:checked) .answer.a8 { display: flex; }
  .crossword-body:has(.toggle-a10:checked) .answer.a10 { display: flex; }
  .crossword-body:has(.toggle-a11:checked) .answer.a11 { display: flex; }
  .crossword-body:has(.toggle-d2:checked) .answer.d2 { display: flex; }
  .crossword-body:has(.toggle-d3:checked) .answer.d3 { display: flex; }
  .crossword-body:has(.toggle-d4:checked) .answer.d4 { display: flex; }
  .crossword-body:has(.toggle-d5:checked) .answer.d5 { display: flex; }
  .crossword-body:has(.toggle-d7:checked) .answer.d7 { display: flex; }
  .crossword-body:has(.toggle-d9:checked) .answer.d9 { display: flex; }

  /* clue lists */
  .clues {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-4);
  }
  .clues h2 {
    font-family: var(--font-head);
    font-size: 1.3rem;
    color: var(--ink);
    border-bottom: var(--line);
    padding-bottom: var(--sp-1);
    margin: 0 0 var(--sp-2);
  }
  .clues ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .clues li {
    margin-bottom: var(--sp-1);
    display: flex;
    align-items: baseline;
    gap: 0.15rem;
    flex-wrap: wrap;
  }
  .clues .cnum {
    font-family: var(--font-head);
    font-weight: 700;
    color: var(--olive-deep);
    margin-right: 0.3rem;
  }

  .reveal-word {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    min-height: 44px;
    padding: 0 0.5rem;
    cursor: pointer;
    font-family: var(--font-play);
    font-size: 0.9rem;
    color: var(--olive-deep);
  }
  .reveal-word:hover .reveal-word-text {
    text-decoration: underline;
  }
  .reveal-mini {
    width: 16px;
    height: 16px;
    accent-color: var(--olive);
    cursor: pointer;
  }
  .reveal-word-text {
    user-select: none;
  }

  @media (max-width: 560px) {
    .clues {
      grid-template-columns: 1fr;
    }
  }
</style>