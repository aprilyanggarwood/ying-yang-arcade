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
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(4, 60px);
    gap: 4px;
    margin-top: 12px;
    background: #eee;
    padding: 4px;
    width: max-content;
  }
</style>