import './App.css'

function App() {

  return (
    <div>

  <main>
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill">
            <span className="pill__dot"></span>
            Now in beta — joining is free
          </span>

          <h1 className="hero__title">A place where <span className="accent">weMeet</span></h1>

          <p className="hero__text">
            Meet people who share your energy — coffee, walks, study nights,
            good conversations. No endless swiping, just real plans with real people.
          </p>

          <div className="hero__actions">
            <a href="#login" className="btn btn--primary btn--lg">Login</a>
            <span className="hero__hint">New here? <a href="#login">Create an account</a></span>
          </div>

          <div className="proof">
            <div className="proof__faces" aria-hidden="true">
              <span className="face face--1">AM</span>
              <span className="face face--2">LK</span>
              <span className="face face--3">SR</span>
              <span className="face face--4">+</span>
            </div>
            <p className="proof__text"><strong>12,400+</strong> people already meeting nearby</p>
          </div>
        </div>

        <div className="hero__media">
          <figure className="hero__photo">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="A group of friends laughing together at a table"
              width="900"
              height="765"
              fetchpriority="high"
            />
          </figure>

          <div className="float float--match">
            <span className="float__icon" aria-hidden="true">✦</span>
            <div>
              <p className="float__title">New connection</p>
              <p className="float__sub">Mia &amp; you · 96% match</p>
            </div>
          </div>

          <div className="float float--plan">
            <p className="float__label">Saturday</p>
            <p className="float__title">Coffee at 11:00</p>
            <div className="float__faces" aria-hidden="true">
              <span className="face face--sm face--1">AM</span>
              <span className="face face--sm face--3">SR</span>
              <span className="face face--sm face--4">+3</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="why">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Why weMeet</span>
          <h2 className="section__title">Simple by design</h2>
          <p className="section__text">Three things, done well. Nothing to learn, nothing to scroll forever.</p>
        </div>

        <div className="cards">
          <article className="card">
            <span className="card__icon" aria-hidden="true">◎</span>
            <h3 className="card__title">Meet nearby</h3>
            <p className="card__text">See who is around you right now and start a plan within walking distance.</p>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">◇</span>
            <h3 className="card__title">Shared interests</h3>
            <p className="card__text">Pick a few things you love — books, running, music — and weMeet finds your people.</p>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">☺</span>
            <h3 className="card__title">Safe &amp; friendly</h3>
            <p className="card__text">Verified profiles and gentle reminders keep every meetup relaxed and respectful.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section section--soft" id="community">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Community</span>
          <h2 className="section__title">Real people, real plans</h2>
          <p className="section__text">From first coffees to weekend walks, this is an ordinary week on weMeet.</p>
        </div>

        <div className="gallery">
          <figure className="tile">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80" alt="Friends at a rooftop meetup" loading="lazy" />
            <figcaption>Rooftop meetup · Lisbon</figcaption>
          </figure>
          <figure className="tile">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80" alt="Group of friends laughing together outdoors" loading="lazy" />
            <figcaption>Sunday walk · Berlin</figcaption>
          </figure>
          <figure className="tile">
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=80" alt="People working together at a table" loading="lazy" />
            <figcaption>Study night · Belgrade</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="cta">
          <h2 className="cta__title">Your next friendship is one hello away</h2>
          <p className="cta__text">Join weMeet today — it takes a minute and costs nothing.</p>
          <a href="#login" className="btn btn--light btn--lg">Login</a>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer" id="about">
    <div className="container footer__inner">
      <div className="footer__brand">
        <a className="brand" href="#home">
          <span className="brand__mark brand__mark--sm" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 8.5a6.5 6.5 0 0 0-12 3.2c0 1.3.4 2.4 1 3.4L5 19l4-1.2a6.5 6.5 0 0 0 8-9.3Z" />
              <path d="M17.5 9.2A5 5 0 0 1 21 14a5 5 0 0 1-.9 2.8l.6 3-3-1a5 5 0 0 1-6.4-1.6" />
            </svg>
          </span>
          <span className="brand__name">we<span className="brand__accent">Meet</span></span>
        </a>
        <p className="footer__tag">A simpler way to meet people near you.</p>
      </div>

      <nav className="footer__cols" aria-label="Footer">
        <div>
          <h4>Product</h4>
          <a href="#home">Home</a>
          <a href="#why">Features</a>
          <a href="#community">Community</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#about">Careers</a>
          <a href="#about">Contact</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#about">Privacy</a>
          <a href="#about">Terms</a>
        </div>
      </nav>
    </div>

    <div className="container footer__bottom">
      <p>© 2026 weMeet. All rights reserved.</p>
      <p>Made for people, not algorithms.</p>
    </div>
  </footer>
  </div>
  );
}

export default App
