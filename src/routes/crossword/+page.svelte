<script>
  import Crossword from '$lib/components/Crossword.svelte';
</script>

<svelte:head>
  <title>Mini Crossword — April's Game Parlor</title>
  <meta
    name="description"
    content="Play a CSS-only 6x6 Seattle-themed mini crossword. Type answers from the keyboard, reveal a hint for any single word, or show the whole solution."
  />
</svelte:head>

<main>
  <Crossword />
</main>