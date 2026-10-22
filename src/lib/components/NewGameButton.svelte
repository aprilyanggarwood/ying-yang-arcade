<script>
// The whole principle: children report events, parents own and change state. 
// “data down, events up”, so the parent owns the state and passes it down to children, and children report events up to the parent.
// the page passes down a function to call when the button is clicked
  let { onNewGame } = $props();
</script>
 <!-- the button calls the function when clicked -->
<button class="new-game" onclick={ onNewGame }> 
  New Game
</button>

<style>
  .new-game {
    font-size: 16px;
    padding: 8px 14px;
    cursor: pointer;
  }
</style>