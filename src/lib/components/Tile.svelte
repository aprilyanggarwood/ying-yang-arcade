<script>
  import { scale } from 'svelte/transition';
  let { value, row, column } = $props();
</script>

<div
  class="tile tile-{value}"
  style:grid-row={row + 1}
  style:grid-column={column + 1}
  in:scale={{ duration: 120, start: 0.6 }}
>
  {value}
</div>

<style>
  .tile {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-family: var(--font-head);
    font-weight: 700;
    font-size: clamp(1rem, 5vw, 1.6rem);
  }

  /* one hue (gold), varied by lightness — every number clears 4.5:1 contrast */
  .tile-2    { background: #f9ecd8; color: #2b2a13; } /* 12.48:1 */
  .tile-4    { background: #f4e0bd; color: #2b2a13; } /* 11.25:1 */
  .tile-8    { background: #f0d4a3; color: #2b2a13; } /* 10.15:1 */
  .tile-16   { background: #ecc789; color: #2b2a13; } /* 9.07:1 */
  .tile-32   { background: #e7bb6e; color: #2b2a13; } /* 8.13:1 */
  .tile-64   { background: #e3af54; color: #2b2a13; } /* 7.29:1 */
  .tile-128  { background: #e0a43e; color: #2b2a13; } /* 6.62:1 */
  .tile-256  { background: #916418; color: #fbf8f0; } /* 4.90:1 */
  .tile-512  { background: #7f5815; color: #fbf8f0; } /* 5.98:1 */
  .tile-1024 { background: #6e4c12; color: #fbf8f0; } /* 7.31:1 */
  .tile-2048 { background: #5c400f; color: #fbf8f0; } /* 9.01:1 */
  .tile-4096 { background: #4b340c; color: #fbf8f0; } /* 11.02:1 */
</style>