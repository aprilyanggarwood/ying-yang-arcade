<script>
  import { move, spawn, hasMoves, score } from '@april-cs-npm/arcade-core';

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

  // STATE: the board and the current score are things that change -> $state
  let board = $state(newBoard());
  let currentScore = $state(0);

  // DERIVED: "is the game over?" is calculated from the board -> $derived
  let gameOver = $derived( hasMoves(board) === false );  /* blank A: how do you ask arcade-core if NO moves remain? */

  // the core game loop: handle one move in a direction
  function handleMove(direction) {
    const moved = move(board, direction);

    // a move that changes nothing is NOT a move: do nothing
    if (JSON.stringify(moved) === JSON.stringify(board)) {
      return;
    }

    // it was a real move:
    currentScore += score(board, direction)/* blank B: how many points did this move earn? */;
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
</script>

<svelte:window onkeydown={handleKey} />

<h1>2048</h1>
<p>Score: {currentScore}</p>
{#if gameOver}
  <p>Game over!</p>
{/if}
<button onclick={restart}>New Game</button>

<div class="board">
  {#each board as row}
    {#each row as cell}
      <div class="cell">{cell === 0 ? '' : cell}</div>
    {/each}
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    gap: 4px;
    margin-top: 12px;
  }
  .cell {
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
</style>

