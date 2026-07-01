import { Link } from "react-router-dom";
import { TREKKING } from "../data/siteData";
import "./ListingPage.css";

const trekHighlights = [
  {
    title: "Summit adventures",
    text: "From Kilimanjaro's iconic routes to the dramatic climb of Ol Doinyo Lengai, Tanzania offers some of Africa's most rewarding high-altitude experiences.",
    stat: "High-altitude summit treks",
  },
  {
    title: "Acclimatisation climbs",
    text: "Meru is a favourite for those preparing for Kilimanjaro, combining breathtaking scenery with a more compact and immersive mountain experience.",
    stat: "Perfect warm-up for big summits",
  },
  {
    title: "Forest & culture",
    text: "The Usambara and other highland routes reveal hidden forests, waterfall hikes, biodiversity, and cultural encounters with local communities.",
    stat: "Nature, villages & viewpoints",
  },
];

export default function TrekkingPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1621414050946-1b8a6c7f3c52?w=1600&q=85" alt="Trekking Tanzania" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">Mountain Treks</div>
          <h1>Tanzania <em>Trekking</em>.</h1>
          <p>From Africa's highest peak to ancient volcanic craters and lush mountain forests, Tanzania's mountains offer treks for every adventurer.</p>
        </div>
      </section>

      <section className="section page-intro-section">
        <div className="container">
          <div className="page-intro">
            <div className="page-intro-content">
              <div className="eyebrow">Mountain adventures</div>
              <h2>Climb Tanzania's legendary peaks with expert local guides.</h2>
              <p>Whether you want a classic summit push, a scenic acclimatisation climb, or a quieter mountain hike through forests and villages, our treks are designed around your pace and goals.</p>
            </div>
            <div className="page-intro-stats">
              <div className="page-intro-stat"><strong>4+</strong><span>distinct mountain trekking experiences</span></div>
              <div className="page-intro-stat"><strong>Guided</strong><span>by certified leaders with full support</span></div>
            </div>
          </div>

          <div className="page-feature-grid">
            {trekHighlights.map((item) => (
              <div className="page-feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Featured treks</div>
            <h2>Choose your next mountain journey.</h2>
          </div>
          <div className="listing-grid">
            {TREKKING.map((t) => (
              <Link to={`/trekking/${t.slug}`} key={t.slug} className="listing-card">
                <div className="listing-card-img">
                  <img src={t.thumb} alt={t.name} />
                  <div className="listing-card-fade" />
                  <div className="listing-card-region">{t.region}</div>
                </div>
                <div className="listing-card-body">
                  <h3>{t.name}</h3>
                  <p className="listing-card-tagline">{t.tagline}</p>
                  <p className="listing-card-desc">{t.desc.slice(0, 120)}...</p>
                  <div className="listing-card-highlights">
                    <span className="tag">{t.elevation}</span>
                    <span className="tag">{t.duration}</span>
                    <span className="tag">{t.difficulty}</span>
                  </div>
                  <span className="listing-card-cta">Explore {t.short}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Ready to tackle a Tanzania peak?</h2>
            <p>Tell us your preferred mountain, dates, and group size — we'll arrange everything from guides to gear.</p>
          </div>
          <Link to="/contact" className="btn-gold">Start planning</Link>
        </div>
      </section>
    </div>
  );
}
