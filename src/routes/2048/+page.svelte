<script>
  import { move, spawn, hasMoves, canMove, score } from '@april-cs-npm/arcade-core';
  import { gameStats, recordScore, loadBest } from '$lib/game.svelte.js';
  import Score from '$lib/components/Score.svelte';
  import NewGameButton from '$lib/components/NewGameButton.svelte';
  import Board from '$lib/components/Board.svelte';
  import TouchControls from '$lib/components/TouchControls.svelte';
  import { onMount } from 'svelte';
  

    // a tiny seedable PRNG (mulberry32): same seed -> same sequence in [0,1)
  function makeRng(seed) {
    let a = seed >>> 0;                 // force to an unsigned 32-bit integer
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  let rng = Math.random;      // default: unseeded (truly random)
  let seedInput = $state('');  // the number the user types


  // a fresh board: all empty, then spawn two starting tiles
  function newBoard() {
    let b = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    b = spawn(b, rng);   // was spawn(b)
    b = spawn(b, rng);   // was spawn(b)
    return b;
  }


// a counter so every tile we create gets a unique id
let nextId = 0;

// turn a number grid into a flat list of tiles for rendering
function boardToTiles(grid) {
  const tiles = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const value = grid[r][c];
      if (value !== 0) {     
        tiles.push({
          id: nextId++,        // unique id, increments each time
          value: value,        // the number on the tile
          r: r,                // which row
          c: c,                // which column
        });
      }
    }
  }
  return tiles;
}




  // STATE: the board and the current score are things that change -> $state
  let board = $state(newBoard());

  let tiles = $derived(boardToTiles(board));  



  let currentScore = $state(0);

  // DERIVED: "is the game over?" is calculated from the board -> $derived
  let gameOver = $derived( hasMoves(board) === false );  

  // a short message screen readers announce on score / game-over changes
  let status = $derived(
    gameOver
      ? `Game over. Final score ${currentScore}.`
      : `Score ${currentScore}.`
  );
  

  // handle a move in a given direction: if it changes the board, update the board and score
  // if the move doesn't change the board, do nothing
  // also record the score in localStorage if it changed
  // also spawn a new tile if the move was valid
  // also update the derived tiles list
  function handleMove(direction) {
  if (!canMove(board, direction)) {
    return;                       // nothing would change — not a move
  }
  currentScore += score(board, direction);
  recordScore(currentScore);   
  board = spawn(move(board, direction), rng);
}

  function startSeededGame() {
    const seed = Number(seedInput);
    if (seedInput === '' || seedInput == null || Number.isNaN(seed)) {
      return;                  // ignore empty / non-numeric input
    }
    rng = makeRng(seed);       // build a fresh deterministic generator
    board = newBoard();        // first two spawns now come from the seed
    currentScore = 0;
  }

  function restart() {
    rng = Math.random;         // a normal New Game is random again
    board = newBoard();
    currentScore = 0;
  }

  // listen for arrow keys on the whole window
  function handleKey(event) {
    if (event.key === 'ArrowLeft')  handleMove('left');
    if (event.key === 'ArrowRight') handleMove('right');
    if (event.key === 'ArrowUp')    handleMove('up');
    if (event.key === 'ArrowDown')  handleMove('down');
  }


  const SAVE_KEY = 'arcade2048-game';

  // 1. On mount (browser only), restore the saved best score and saved game
  onMount(() => {
    loadBest();

    const saved = localStorage.getItem(SAVE_KEY);
    if (saved !== null) {
      try {
        const data = JSON.parse(saved);
        board = data.board;
        currentScore = data.score;
      } catch {
        // ignore a corrupted save and just keep the fresh board
      }
    }
  });

  // 2. Whenever the board or score changes, save the game (effect = client-only)
  $effect(() => {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ board, score: currentScore }));
  });


</script>

<svelte:window onkeydown={handleKey} />

<main>
  <h1>2048</h1>
  <Score current={currentScore} best={gameStats.best} />
  <!-- visually hidden; screen readers announce it when `status` changes -->
  <p class="sr-only" aria-live="polite">{status}</p>
  <NewGameButton onNewGame={restart} />
  <div class="seed-controls">
  <label>
    Seed
    <input type="number" bind:value={seedInput} placeholder="e.g. 42" />
  </label>
  <button onclick={startSeededGame}>Start with seed</button>
</div>
  {#if gameOver}
    <p>Game over!</p>
  {/if}
  <Board {tiles} />
  <TouchControls onMove={handleMove} />
</main>


<style>
  .seed-controls {
    display: flex;
    align-items: center;
    gap: var(--sp-1);
    margin: var(--sp-2) 0;
  }
  .seed-controls input {
    width: 8ch;
    min-height: 44px;
    padding: 0 0.5rem;
    border: 2px solid var(--olive);
    border-radius: var(--radius);
  }
  .seed-controls button {
    min-height: 44px;
    cursor: pointer;
  }
</style>