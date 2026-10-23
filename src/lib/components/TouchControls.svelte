<script>
  // the page passes down the same handler the keyboard uses
  let { onMove } = $props();
</script>

<div class="touch-controls" aria-label="On-screen game controls">
  <button class="arrow up" onclick={() => onMove('up')} aria-label="Move up">↑</button>
  <div class="row">
    <button class="arrow" onclick={() => onMove('left')} aria-label="Move left">←</button>
    <button class="arrow" onclick={() => onMove('down')} aria-label="Move down">↓</button>
    <button class="arrow" onclick={() => onMove('right')} aria-label="Move right">→</button>
  </div>
</div>

<style>
  /* hidden on desktop; shown only on narrow (mobile) screens */
  .touch-controls {
    display: none;
  }
  .row {
    display: flex;
    gap: var(--sp-1);
    justify-content: center;
  }
  .arrow {
    min-width: 56px;
    min-height: 56px;          /* comfortable tap target */
    font-size: 1.4rem;
    font-family: var(--font-head);
    color: var(--white);
    background: var(--olive);
    border: 2px solid var(--olive-deep);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .arrow:active {
    background: var(--olive-deep);
  }
  .arrow.up {
    display: block;
    margin: var(--sp-3) auto var(--sp-1);
  }

  @media (max-width: 720px) {
    .touch-controls {
      display: block;
    }
  }
</style>