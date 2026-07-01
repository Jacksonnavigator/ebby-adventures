import { Link } from "react-router-dom";
import { COASTS } from "../data/siteData";
import "./ListingPage.css";

const coastHighlights = [
  {
    title: "Island culture",
    text: "From Stone Town and Swahili heritage to the spice farms and dhow traditions of the coast, Tanzania's islands are as culturally rich as they are scenic.",
    stat: "History, beaches & cuisine",
  },
  {
    title: "Marine adventures",
    text: "Snorkel, dive, cruise and explore coral reefs, sandbanks and marine parks with some of the best coastal experiences in East Africa.",
    stat: "Reefs, whalesharks & turtles",
  },
  {
    title: "Easy add-ons",
    text: "Each coast destination pairs beautifully with safari, trekking or island hopping, making them ideal for a relaxed finale to a bigger Tanzanian journey.",
    stat: "Perfect for a final stop",
  },
];

export default function CoastsPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85" alt="Tanzania coasts" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">Coasts & islands</div>
          <h1>Tanzania <em>Coasts</em>.</h1>
          <p>From Zanzibar's spice-scented shores to the quieter reefs of Pemba, Mafia and the southern coast, Tanzania's shoreline is rich with beauty and culture.</p>
        </div>
      </section>

      <section className="section page-intro-section">
        <div className="container">
          <div className="page-intro">
            <div className="page-intro-content">
              <div className="eyebrow">Tanzania's coastal world</div>
              <h2>Beach escapes, heritage towns, coral reefs and Swahili culture.</h2>
              <p>These coastlines are perfect for travellers who want to slow down after safari or trekking, while still enjoying marine life, local history and extraordinary scenery.</p>
            </div>
            <div className="page-intro-stats">
              <div className="page-intro-stat"><strong>5</strong><span>signature coastal destinations</span></div>
              <div className="page-intro-stat"><strong>All year</strong><span>great for beach, diving and culture</span></div>
            </div>
          </div>

          <div className="page-feature-grid">
            {coastHighlights.map((item) => (
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
            <div className="eyebrow">Coastal destinations</div>
            <h2>Choose a shoreline that fits your travel style.</h2>
          </div>
          <div className="listing-grid">
            {COASTS.map((coast) => (
              <Link to={`/coasts/${coast.slug}`} key={coast.slug} className="listing-card">
                <div className="listing-card-img">
                  <img src={coast.thumb || coast.hero} alt={coast.name} />
                  <div className="listing-card-fade" />
                  <div className="listing-card-region">{coast.region}</div>
                </div>
                <div className="listing-card-body">
                  <h3>{coast.name}</h3>
                  <p className="listing-card-tagline">{coast.tagline}</p>
                  <p className="listing-card-desc">{coast.desc.slice(0, 120)}...</p>
                  <div className="listing-card-highlights">
                    {coast.highlights.slice(0, 3).map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                  <span className="listing-card-cta">Explore {coast.short}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Ready to add the coast to your Tanzania trip?</h2>
            <p>We can combine beach time, spice heritage and marine activities into one smooth itinerary.</p>
          </div>
          <Link to="/contact" className="btn-gold">Start planning</Link>
        </div>
      </section>
    </div>
  );
}
