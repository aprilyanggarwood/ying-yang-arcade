<script>
  import { page } from '$app/state';
  // user comes from +layout.server.js -> available on page.data
  let user = $derived(page.data.user);

  const links = [
    { href: '/',          label: 'Home' },
    { href: '/crossword', label: 'Crossword' },
    { href: '/2048',      label: '2048' },
    { href: '/about',     label: 'About' },
    { href: '/contact',   label: 'Contact' },
  ];
</script>

<header class="site-header">
  <nav class="nav-inner" aria-label="Main navigation">
    <a class="brand" href="/">April's Game Parlor</a>
    <ul class="nav-list">
      {#each links as link}
        <li>
          <a
            href={link.href}
            aria-current={page.url.pathname === link.href ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}

      {#if user}
      <li class="nav-user">
      <span class="username">{user.username}</span>
      <form method="POST" action="/logout">
        <button type="submit">Log out</button>
      </form>
      </li>
      {:else}
      <li class="nav-auth">
        <a
          class="auth-link"
          href="/login"
          aria-current={page.url.pathname === '/login' ? 'page' : undefined}
        >Log in</a>
        <a
          class="auth-link"
          href="/register"
          aria-current={page.url.pathname === '/register' ? 'page' : undefined}
        >Register</a>
      </li>
      {/if}

    </ul>


  </nav>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: var(--olive);
    border-bottom: 4px solid var(--gold);
  }
  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: var(--sp-1) var(--sp-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-2);
    flex-wrap: wrap;
  }
  .brand {
    font-family: var(--font-head);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gold);
    background: var(--plaque);
    border: 1px solid var(--gold);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .brand:hover {
    background: #1c1b0c;
  }
  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--sp-1);
    flex-wrap: wrap;
  }
  .nav-list a {
    position: relative;
    display: block;
    padding: 0.6rem 0.9rem;
    min-height: 44px;
    color: var(--white);
    font-family: var(--font-head);
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.18s ease, color 0.18s ease;
  }
  .nav-list a::after {
    content: "";
    position: absolute;
    left: 0.9rem;
    right: 0.9rem;
    bottom: 0.35rem;
    height: 2px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }
  .nav-list a:hover::after {
    transform: scaleX(1);
  }
  .nav-list a:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
  .nav-list a[aria-current="page"] {
    background-color: var(--gold);
    color: var(--plaque);
    font-weight: 600;
  }
  .nav-list a[aria-current="page"]::after {
    transform: scaleX(1);
    background: var(--plaque);
  }
  .site-header a:focus-visible {
    outline-color: var(--white);
  }

  @media (max-width: 720px) {
    .nav-inner {
      justify-content: center;
    }
  }


/* separate the auth buttons from the main nav links */
.nav-auth {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  border-left: 1px solid rgba(255, 255, 255, 0.35);
  padding-left: var(--sp-2);
  margin-left: var(--sp-1);
}

.auth-link {
  font-family: var(--font-head);
  color: var(--white);
  background: transparent;
  border: 1px solid var(--gold);
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.18s ease, color 0.18s ease;
}
.auth-link:hover {
  background: var(--gold);
  color: var(--plaque);
}

.auth-link[aria-current="page"] {
  background: var(--gold);
  color: var(--plaque);
}

  /* logged-in username + logout, styled to match the nav */
.nav-user {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-head);
  border-left: 1px solid rgba(255, 255, 255, 0.35);
  padding-left: var(--sp-2);
  margin-left: var(--sp-1);

}

.nav-user .username {
  color: var(--gold);
  font-weight: 700;
}

/* the logout form shouldn't add layout/margins */
.nav-user form {
  margin: 0;
  display: inline;
}

/* make the logout button look like a nav link */
.nav-user button {
  font-family: var(--font-head);
  font-size: 1rem;
  color: var(--white);
  background: transparent;
  border: 1px solid var(--gold);
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  min-height: 44px;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease;
}
.nav-user button:hover {
  background: var(--gold);
  color: var(--plaque);
}
</style>