<script>
  // receive the two numbers the page passes down
  let { current, best } = $props();
</script>

<div class="score">
  <p>Score: { current }</p>  
  <p>Best: { best }</p>  
</div>

<style>
  .score {
    display: flex;
    gap: 24px;
    font-size: 18px;
  }
  .score p {
    margin: 0;
  }
</style>