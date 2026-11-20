<script>
  let { form } = $props();   // holds error info if the action fails
</script>

<main>
  <h1>Create an account</h1>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form method="POST">
    <label>
      Username
      <input name="username" autocomplete="username" required />
    </label>
    <label>
      Password
      <input name="password" type="password" autocomplete="new-password" required />
    </label>
    <button type="submit">Register</button>
  </form>

  <p>Already have an account? <a href="/login">Log in</a></p>
</main>

<style>
  .error { color: #b00020; }
  form { display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px; }
  label { display: flex; flex-direction: column; gap: 0.25rem; }
</style>