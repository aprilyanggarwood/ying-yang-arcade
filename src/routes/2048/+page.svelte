<script>
  import { move, spawn, hasMoves, score } from '@april-cs-npm/arcade-core';
  import { gameStats, recordScore } from '$lib/game.svelte.js'; 
  import Score from '$lib/components/Score.svelte';
  import NewGameButton from '$lib/components/NewGameButton.svelte';
  import Board from '$lib/components/Board.svelte';

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
</script>

<svelte:window onkeydown={handleKey} />

<h1>2048</h1>
<Score current={currentScore} best={gameStats.best} />
{#if gameOver}
  <p>Game over!</p>
{/if}
 <!-- the button calls the function when clicked -->
<NewGameButton onNewGame={restart} /> 
<Board tiles={tiles} /> 


