<script>
  let { value, row, column } = $props();
</script>

<div
  class="tile"
  style:grid-row={row + 1}
  style:grid-column={column + 1}
>
  {value}
</div>

<style>
  .tile {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 20px;
  }
</style>