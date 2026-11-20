<script>
  let { form } = $props();
</script>

<main>
  <h1>Log in</h1>
  {#if form?.error}<p class="error">{form.error}</p>{/if}

  <form method="POST">
    <label>Username
      <input name="username" autocomplete="username" required />
    </label>
    <label>Password
      <input name="password" type="password" autocomplete="current-password" required />
    </label>
    <button type="submit">Log in</button>
  </form>

  <p>No account? <a href="/register">Register</a></p>
</main>

<style>
  .error { color: #b00020; }
  form { display: flex; flex-direction: column; gap: 0.75rem; max-width: 320px; }
  label { display: flex; flex-direction: column; gap: 0.25rem; }
</style>