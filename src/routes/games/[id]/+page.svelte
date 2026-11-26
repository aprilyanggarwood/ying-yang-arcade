<script>
  import { page } from '$app/state';
  import { scale } from 'svelte/transition';
  import { enhance } from '$app/forms';

  let { data, form } = $props();

  let user = $derived(page.data.user);
  let game = $derived(data.game);

  // am I player 1 or player 2?
  let iAmP1 = $derived(String(game.player1) === String(user?._id));

  // my own board vs. the opponent's board (the one I attack)
  let myBoard = $derived(iAmP1 ? game.board1 : game.board2);
  let oppBoard = $derived(iAmP1 ? game.board2 : game.board1);

  // whose turn, and is it mine?
  let myTurn = $derived(String(game.turn) === String(user?._id));

  // a readable status line
  let statusText = $derived(
    game.status === 'waiting' ? 'Waiting for an opponent to join…'
    : game.status === 'complete'
      ? (String(game.winner) === String(user?._id) ? 'You win! 🎉' : 'You lost.')
    : myTurn ? 'Your turn — fire at the enemy board.'
    : "Opponent's turn…"
  );

  // after a shot, form holds { ok, row, col }; look up what that cell became
  let lastShot = $derived(
    form?.ok && oppBoard
      ? oppBoard[form.row][form.col]   // 'hit' or 'miss'
      : null
  );
  let lastShotText = $derived(
    lastShot === 'hit' ? 'Hit! 🎯'
    : lastShot === 'miss' ? 'Miss. 🌊'
    : null
  );
</script>

<main>
  <h1>Battleship</h1>
  {#if lastShotText}<p class="shot-result">{lastShotText}</p>{/if}
  <p class="status">{statusText}</p>
  {#if form?.error}<p class="error">{form.error}</p>{/if}

  <div class="boards">
    <section>
      <h2>Your fleet</h2>
      <div class="grid">
        {#each myBoard as row, r}
          {#each row as cell, c (r + '-' + c + '-' + cell)}
            <div class="cell {cell}" aria-label="your row {r + 1}, column {c + 1}: {cell}">
              {#if cell === 'hit'}<span in:scale={{ duration: 500 }}>●</span>
              {:else if cell === 'miss'}<span in:scale={{ duration: 500 }}>✕</span>{/if}
            </div>
          {/each}
        {/each}
      </div>
    </section>

    <section>
    <h2>Enemy waters</h2>
    <div class="grid">
        {#each oppBoard as row, r}
          {#each row as cell, c (r + '-' + c + '-' + cell)}
            {#if myTurn && game.status === 'active' && cell !== 'hit' && cell !== 'miss'}
              <!-- firable button — no symbol, no change needed here -->
              <form method="POST" action="?/shoot" class="cell-form" use:enhance> 
                <input type="hidden" name="row" value={r} />
                <input type="hidden" name="col" value={c} />
                <button type="submit" class="cell {cell}"
                  aria-label="Fire at enemy row {r + 1}, column {c + 1}"
                  onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.form.requestSubmit(); } }}
                ></button>
              </form>
            {:else}
              <!-- non-firable: this is where hit/miss symbols show -->
              <div class="cell {cell}" aria-label="enemy row {r + 1}, column {c + 1}: {cell}">
                {#if cell === 'hit'}<span in:scale={{ duration: 500 }}>●</span>
                {:else if cell === 'miss'}<span in:scale={{ duration: 500 }}>✕</span>{/if}
              </div>
            {/if}
          {/each}
        {/each}
    </div>
    </section>
    </div>

  <p><a href="/games">← Back to lobby</a></p>
</main>

<style>
  .boards { display: flex; gap: var(--sp-4); flex-wrap: wrap; }

  @media (max-width: 640px) {
    .boards {
        flex-direction: column;
    }
  }
.grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);   
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;
  width: min(90vw, 320px);                  /* fits a phone, caps on desktop */
  aspect-ratio: 1;                          /* keep it square */
}

.cell {
  border: 1px solid var(--olive);
  background: #cfe0ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.6rem, 2.5vw, 0.9rem);
  line-height: 1;
  width: 100%;         /* fill the grid track */
  height: 100%;
  box-sizing: border-box;   /* border doesn't overflow the cell */
}

.cell.ship  { background: var(--olive); }
.cell.hit   { background: #b00020; color: #ffffff; }   /* red cell, white ● */
.cell.miss  { background: #5a6b7a; color: #ffffff; }   /* slate cell, white ✕ */

.cell-form {
  margin: 0;
  display: block;
  aspect-ratio: 1;     /* match the cell square */
}

.cell-form button.cell {
  width: 100%;
  height: 100%;        /* button fills the form, which fills the grid cell */
}

button.cell {
  padding: 0;
  cursor: pointer;
}
button.cell:hover {
  outline: 2px solid var(--gold);   /* highlight the target cell on hover */
}

button.cell:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: -3px;    /* keep the ring inside the small cell */
  z-index: 1;
}

.shot-result { font-weight: bold; font-size: 1.1rem; }
</style>