<script>
  import { page } from '$app/state';
  let { data, form } = $props();

  let user = $derived(page.data.user);

  // split the games: ones I can join vs. ones I'm already in
  let myGames = $derived(
    data.games.filter(g =>
      String(g.player1) === String(user?._id) || String(g.player2) === String(user?._id)
    )
  );
  let openGames = $derived(
    data.games.filter(g =>
      g.status === 'waiting' && String(g.player1) !== String(user?._id)
    )
  );

  function gameLabel(game) {
    if (game.status === 'waiting') return 'waiting for an opponent';
    if (game.status === 'complete') {
      return String(game.winner) === String(user?._id) ? 'you won' : 'you lost';
    }
    // active: whose turn?
    return String(game.turn) === String(user?._id) ? 'your turn' : "opponent's turn";
  }
</script>

<main>
  <h1>Battleship</h1>

  {#if form?.error}<p class="error">{form.error}</p>{/if}

  <form method="POST" action="?/create">
    <button type="submit">New game</button>
  </form>

  <section>
    <h2>Open games to join</h2>
    {#if openGames.length === 0}
      <p>No open games right now. Create one above.</p>
    {:else}
      <ul>
        {#each openGames as game, i (game._id)}
            <li>
                Open game {i + 1}
                <form method="POST" action="?/join">
                <input type="hidden" name="id" value={game._id} />
                <button type="submit">Join</button>
                </form>
            </li>
        {/each}
      </ul>
    {/if}
  </section>

  <section>
    <h2>Your games</h2>
    {#if myGames.length === 0}
      <p>You're not in any games yet.</p>
    {:else}
      <ul>
        {#each myGames as game, i (game._id)}
            <li>
                <a href="/games/{game._id}">
                Your game {i + 1} — {gameLabel(game)}
                </a>
            </li>
        {/each}
      </ul>
    {/if}
  </section>
</main>

<style>
  .error { color: #b00020; }
  section { margin-top: var(--sp-3); }
  ul { list-style: none; padding: 0; }
  li { display: flex; align-items: center; gap: var(--sp-2); margin-bottom: var(--sp-1); }
</style>