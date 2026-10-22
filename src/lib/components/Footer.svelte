<footer class="site-footer">
  <div class="footer-inner">
    <p class="copyright">&copy; 2026 April Yang</p>
    <ul class="social">
      <li>
        <a href="https://github.com/aprilyanggarwood" target="_blank" rel="noopener">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ying-april-yang-a9bb8720/" target="_blank" rel="noopener">LinkedIn</a>
      </li>
    </ul>
  </div>
</footer>

<style>
  .site-footer {
    background-color: var(--olive);
    color: var(--white);
    margin-top: var(--sp-5);
  }
  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: var(--sp-3) var(--sp-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-2);
    flex-wrap: wrap;
  }
  .copyright {
    font-family: var(--font-head);
    margin: 0;
  }
  .social {
    list-style: none;
    display: flex;
    gap: var(--sp-1);
    margin: 0;
    padding: 0;
  }
  .social a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 44px;
    padding: 0.4rem 0.7rem;
    color: var(--white);
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.18s ease;
  }
  .social a:hover {
    background-color: var(--gold);
    color: var(--plaque);
  }
</style>