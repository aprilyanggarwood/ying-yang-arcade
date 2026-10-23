<script>
  import { move, spawn, hasMoves, score } from '@april-cs-npm/arcade-core';
  import { gameStats, recordScore, loadBest } from '$lib/game.svelte.js';
  import Score from '$lib/components/Score.svelte';
  import NewGameButton from '$lib/components/NewGameButton.svelte';
  import Board from '$lib/components/Board.svelte';
  import TouchControls from '$lib/components/TouchControls.svelte';
  import { onMount } from 'svelte';
  

  // a fresh board: all empty, then spawn two starting tiles
  function newBoard() {
    let b = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    b = spawn(b);
    b = spawn(b);
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
  

  // the core game loop: handle one move in a direction
  function handleMove(direction) {
    const moved = move(board, direction);

    // a move that changes nothing is NOT a move: do nothing
    if (JSON.stringify(moved) === JSON.stringify(board)) {
      return;
    }

    // it was a real move:
    currentScore += score(board, direction);
    recordScore(currentScore);   
    board = spawn(moved);   // add a new tile, and update the board state
  }

  // listen for arrow keys on the whole window
  function handleKey(event) {
    if (event.key === 'ArrowLeft')  handleMove('left');
    if (event.key === 'ArrowRight') handleMove('right');
    if (event.key === 'ArrowUp')    handleMove('up');
    if (event.key === 'ArrowDown')  handleMove('down');
  }

  function restart() {
    board = newBoard();
    currentScore = 0;
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
  {#if gameOver}
    <p>Game over!</p>
  {/if}
  <Board {tiles} />
  <TouchControls onMove={handleMove} />
</main>


