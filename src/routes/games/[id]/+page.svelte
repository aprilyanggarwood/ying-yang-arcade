<script>
  import { page } from '$app/state';
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
            {#each row as cell, c}
                <div class="cell {cell}" aria-label="your row {r + 1}, column {c + 1}: {cell}">
                {#if cell === 'hit'}●{:else if cell === 'miss'}✕{/if}
                </div>
            {/each}
        {/each}
      </div>
    </section>

    <section>
    <h2>Enemy waters</h2>
    <div class="grid">
        {#each oppBoard as row, r}
        {#each row as cell, c}
            {#if myTurn && game.status === 'active' && cell !== 'hit' && cell !== 'miss'}
            <!-- firable: a button that submits the shoot action -->
            <form method="POST" action="?/shoot" class="cell-form">
                <input type="hidden" name="row" value={r} />
                <input type="hidden" name="col" value={c} />
                <button
                type="submit"
                class="cell {cell}"
                aria-label="Fire at enemy row {r + 1}, column {c + 1}"
                ></button>
            </form>
            {:else}
            <!-- not firable: already shot, not your turn, or game over -->
            <div class="cell {cell}" aria-label="enemy row {r + 1}, column {c + 1}: {cell}">
                {#if cell === 'hit'}●{:else if cell === 'miss'}✕{/if}
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
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 28px);
    grid-template-rows: repeat(10, 28px);
    gap: 2px;
  }

  .cell {
  width: 28px;
  height: 28px;
  border: 1px solid var(--olive);
  background: #cfe0ec;            /* water */
  display: flex;                  /* center the symbol */
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  line-height: 1;
}
.cell.ship  { background: var(--olive); }
.cell.hit   { background: #b00020; color: #ffffff; }   /* red cell, white ● */
.cell.miss  { background: #5a6b7a; color: #ffffff; }   /* slate cell, white ✕ */

.cell-form { margin: 0; display: block; }

button.cell {
  padding: 0;
  cursor: pointer;
}
button.cell:hover {
  outline: 2px solid var(--gold);   /* highlight the target cell on hover */
}

.shot-result { font-weight: bold; font-size: 1.1rem; }
</style>