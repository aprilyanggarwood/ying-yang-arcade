<script>
  // Contact page — ported from contact.html (CS5610 Project 1)
</script>

<svelte:head>
  <title>Contact — April's Game Parlor</title>
  <meta
    name="description"
    content="Get in touch with April Yang by email, phone, GitHub, or LinkedIn, or send a note straight from the contact form on this page."
  />
  <!-- Font Awesome only needed on this page -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  />
</svelte:head>

<main>
  <h1>Contact</h1>
  <p class="lead">
    Questions about the parlor, or just want to say hello? Reach me at any
    of the links below, or send a note straight from this page.
  </p>

  <div class="contact-layout">
    <!-- DIRECT LINKS (icon in front) -->
    <section class="contact-info" aria-label="Contact details">
      <h2>Reach me directly</h2>
      <ul class="contact-list">
        <li>
          <a href="mailto:aprilyanggarwood@gmail.com" aria-label="Email April at aprilyanggarwood at gmail dot com">
            <span class="contact-icon">
              <i class="fa-solid fa-envelope" aria-hidden="true"></i>
            </span>
            <span class="contact-text">aprilyanggarwood@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="tel:+14252097335" aria-label="Call April at 4 2 5, 2 0 9, 7 3 3 5">
            <span class="contact-icon">
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
            </span>
            <span class="contact-text">425-209-7335</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/aprilyanggarwood" target="_blank" rel="noopener" aria-label="April's GitHub profile">
            <span class="contact-icon">
              <i class="fa-brands fa-github" aria-hidden="true"></i>
            </span>
            <span class="contact-text">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ying-april-yang-a9bb8720/" target="_blank" rel="noopener" aria-label="April's LinkedIn profile">
            <span class="contact-icon">
              <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </span>
            <span class="contact-text">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- MESSAGE FORM -->
    <section class="contact-form-section" aria-label="Send a message">
      <h2>Send a message</h2>
      <form class="contact-form" action="mailto:aprilyanggarwood@gmail.com" method="post" enctype="text/plain">
        <label class="field">
          <span class="field-label">Your name</span>
          <input type="text" name="name" autocomplete="name" required />
        </label>
        <label class="field">
          <span class="field-label">Your email</span>
          <input type="email" name="email" autocomplete="email" required />
        </label>
        <label class="field">
          <span class="field-label">Message</span>
          <textarea name="message" required></textarea>
        </label>
        <button type="submit" class="cta">Send message</button>
        <p class="form-note">
          Submitting opens your own email app with the message ready to send
          to April.
        </p>
      </form>
    </section>
  </div>
</main>

<style>
  .lead {
    max-width: 60ch;
    font-size: 1.08rem;
    color: var(--ink);
    margin: 0 0 var(--sp-4);
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--sp-4);
    align-items: start;
  }

  .contact-info h2,
  .contact-form-section h2 {
    font-family: var(--font-head);
    font-size: 1.5rem;
    color: var(--ink);
    border-bottom: var(--line);
    padding-bottom: var(--sp-1);
    margin: 0 0 var(--sp-2);
  }

  .contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--sp-1);
  }
  .contact-list a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-height: 44px;
    padding: 0.5rem 0.7rem;
    border-radius: var(--radius);
    color: var(--ink);
    text-decoration: none;
    transition: background-color 0.15s ease, transform 0.15s ease;
  }
  .contact-list a:hover,
  .contact-list a:focus-visible {
    background: var(--cream);
    transform: translateX(3px);
  }
  .contact-icon {
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--olive);
    color: var(--white);
    border-radius: 50%;
  }
  .contact-icon i {
    font-size: 18px;
    line-height: 1;
  }
  .contact-text {
    font-family: var(--font-head);
    word-break: break-word;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
    background: var(--cream);
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    padding: var(--sp-3);
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .field-label {
    font-family: var(--font-head);
    font-weight: 700;
    color: var(--ink);
  }
  .field input,
  .field textarea {
    font-family: var(--font-head);
    font-size: 1rem;
    color: var(--ink);
    background: var(--white);
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    padding: 0.6rem 0.7rem;
    min-height: 44px;
    width: 100%;
  }
  .field textarea {
    min-height: 120px;
    resize: vertical;
  }
  .field input:focus-visible,
  .field textarea:focus-visible {
    outline: 3px solid var(--olive-deep);
    outline-offset: 1px;
    border-color: var(--olive-deep);
  }

  /* submit button reuses the .cta look; here it's a real <button> */
  .cta {
    display: inline-block;
    font-family: var(--font-head);
    font-weight: 600;
    background-color: var(--olive);
    color: var(--white);
    text-decoration: none;
    padding: 0.85rem 1.6rem;
    min-height: 44px;
    border-radius: var(--radius);
    border: 2px solid var(--olive);
    transition: transform 0.15s ease, background-color 0.15s ease;
  }
  .cta:hover {
    background-color: var(--gold);
    color: var(--plaque);
    border-color: var(--gold);
    transform: translateY(-2px);
  }
  .contact-form button.cta {
    cursor: pointer;
    align-self: flex-start;
    font-size: 1rem;
  }
  .form-note {
    font-size: 0.85rem;
    color: var(--ink);
    margin: 0;
  }

  @media (max-width: 720px) {
    .contact-layout {
      grid-template-columns: 1fr;
    }
  }
</style>