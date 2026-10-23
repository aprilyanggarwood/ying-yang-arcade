<script>
  import Tile from './Tile.svelte';
  let { tiles } = $props();
</script>

<div class="board">
  {#each tiles as tile (tile.id)}
    <Tile value={tile.value} row={ tile.r } column={ tile.c } /> 
  {/each}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2.5%;
    width: min(92vw, 420px);     /* fits a 320px phone, caps on desktop */
    aspect-ratio: 1;             /* keeps the board square */
    background: var(--olive);
    padding: 2.5%;
    border-radius: 8px;
    margin-top: var(--sp-3);
  }
</style>