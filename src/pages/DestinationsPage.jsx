import { Link } from "react-router-dom";
import { DESTINATIONS } from "../data/siteData";
import "./ListingPage.css";

export default function DestinationsPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85" alt="Tanzania" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="bc-sep">›</span>
            <span>Destinations</span>
          </div>
          <div className="eyebrow eyebrow-light">Where to go</div>
          <h1>Tanzania <em>Destinations</em>.</h1>
          <p>From the endless Serengeti plains to Zanzibar's turquoise shores — every corner of Tanzania tells a story.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-grid">
            {DESTINATIONS.map(d => (
              <Link to={`/destinations/${d.slug}`} key={d.slug} className="listing-card">
                <div className="listing-card-img">
                  <img src={d.thumb} alt={d.name} />
                  <div className="listing-card-fade" />
                  <div className="listing-card-region">{d.region}</div>
                </div>
                <div className="listing-card-body">
                  <h3>{d.name}</h3>
                  <p className="listing-card-tagline">{d.tagline}</p>
                  <p className="listing-card-desc">{d.desc.slice(0, 120)}…</p>
                  <div className="listing-card-highlights">
                    {d.highlights.slice(0, 3).map(h => (
                      <span key={h} className="tag">{h}</span>
                    ))}
                  </div>
                  <span className="listing-card-cta">Explore {d.short} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Not sure where to go?</h2>
            <p>Tell us what you're hoping to experience and we'll build the perfect Tanzania itinerary for you.</p>
          </div>
          <Link to="/contact" className="btn-gold">Start planning →</Link>
        </div>
      </section>
    </div>
  );
}
