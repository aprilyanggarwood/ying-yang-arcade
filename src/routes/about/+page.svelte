<script>
  // About page — ported from about.html (CS5610 Project 1)
</script>

<svelte:head>
  <title>About April — April's Game Parlor</title>
  <meta
    name="description"
    content="About April Yang, the maker behind the Game Parlor: a web developer and computer science graduate student working toward a Software Development Engineer role."
  />
</svelte:head>

<main class="about-main">
  <!-- INTRO: van background + bio card -->
  <section class="about-hero" aria-label="About April">
    <div class="bio-card">
      <p class="eyebrow">The person behind the parlor</p>
      <h1>About April</h1>

      <p>Hi, I'm April Yang, the person behind the Game Parlor.</p>

      <p>
        I earned my Bachelor's degree in Web Development at Bellevue
        University, and I'm now pursuing a Master's in Computer Science at
        Northeastern University. I like building things in tech that help
        people live better, with conveniences that are people-friendly to
        use and playful. This little parlor of browser games is one of them.
      </p>

      <p>
        Along the way I've sharpened my problem-solving and teamwork skills,
        both through my work experience and my studies. Curiosity and a love
        for learning are also among my strengths.
      </p>

      <p>
        My goal is to grow into a Software Development Engineer, writing
        software that's thoughtful, reliable, and genuinely enjoyable to use.
      </p>

      <p>
        I like flowers. Building a beautiful garden in the front yard of my
        home is my project when I'm away from the keyboard. Traveling to one
        new country every year is always part of my plan in life.
      </p>
    </div>
  </section>

  <!-- PHOTO STRIP -->
  <section class="gallery" aria-label="A few of my photos">
    <h2>Away from the keyboard</h2>
    <div class="photo-strip">
      <figure>
        <img
          src="/images/purple-flowers.jpg"
          width="640"
          height="480"
          loading="lazy"
          alt="A dense bed of purple-and-white petunias with dark violet veins"
        />
        <figcaption>Petunias along a garden edge.</figcaption>
      </figure>

      <figure>
        <img
          src="/images/yellow-tulips.jpg"
          width="1200"
          height="900"
          loading="lazy"
          alt="Six yellow tulips with dark centers blooming beside a blue house wall"
        />
        <figcaption>Spring tulips by the front steps.</figcaption>
      </figure>

      <figure>
        <img
          src="/images/mountains-from-plane.jpg"
          width="960"
          height="540"
          loading="lazy"
          alt="Snow-capped mountains and green valleys seen from an airplane window, with the wing in view"
        />
        <figcaption>Snowy peaks from a plane window.</figcaption>
      </figure>
    </div>
  </section>
</main>

<style>
  .about-main {
    max-width: none;
    padding: 0;
  }

  .about-hero {
    position: relative;
    background-image: url("/images/red-van-coast.jpg");
    background-size: cover;
    background-position: center 40%;
    background-attachment: fixed;
    padding: clamp(3rem, 10vh, 7rem) var(--sp-2);
    display: flex;
    justify-content: flex-end;
  }
  .about-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(43, 42, 19, 0.18);
  }
  .bio-card {
    position: relative;
    max-width: 600px;
    background: var(--cream);
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    padding: var(--sp-4) var(--sp-3);
    margin: 0 45vw 0 0;
  }
  .eyebrow {
    font-family: var(--font-play);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.8rem;
    color: var(--olive-deep);
    margin: 0 0 var(--sp-1);
  }
  .bio-card h1 {
    font-family: var(--font-head);
    font-size: clamp(2rem, 5vw, 2.8rem);
    line-height: 1.15;
    margin: 0 0 var(--sp-2);
    color: var(--ink);
  }
  .bio-card p {
    font-size: 1.05rem;
    color: var(--ink);
    max-width: 60ch;
    margin: 0 0 var(--sp-2);
  }
  .bio-card p:last-child {
    margin-bottom: 0;
  }

  .gallery {
    max-width: 1100px;
    margin: 0 auto;
    padding: var(--sp-4) var(--sp-2) var(--sp-5);
  }
  .gallery h2 {
    font-family: var(--font-head);
    font-size: 1.9rem;
    color: var(--ink);
    border-bottom: var(--line);
    padding-bottom: var(--sp-1);
    margin-bottom: var(--sp-3);
  }
  .photo-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--sp-3);
  }
  .photo-strip figure {
    margin: 0;
    background: var(--cream);
    border: 2px solid var(--olive);
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .photo-strip img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-bottom: 2px solid var(--olive);
  }
  .photo-strip figcaption {
    padding: var(--sp-1) var(--sp-2);
    font-family: var(--font-play);
    font-size: 0.9rem;
    color: var(--ink);
  }

  @media (max-width: 720px) {
    .about-hero {
      background-attachment: scroll;
      background-position: center;
      padding: var(--sp-4) var(--sp-2);
    }
    .bio-card {
      margin: 0 auto;
    }
  }
</style>