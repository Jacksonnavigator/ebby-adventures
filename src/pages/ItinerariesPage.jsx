import { Link } from "react-router-dom";
import { ITINERARIES } from "../data/siteData";
import "./ListingPage.css";

export default function ItinerariesPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=85" alt="Tanzania safari" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="bc-sep">/</span>
            <span>Itineraries</span>
          </div>
          <div className="eyebrow eyebrow-light">Our journeys</div>
          <h1>Tanzania <em>Itineraries</em>.</h1>
          <p>Carefully crafted journeys by specialists who live and breathe Tanzania. Ready to be tailored to your dates and group.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="itin-full-grid">
            {ITINERARIES.map(it => (
              <Link to={`/itineraries/${it.slug}`} key={it.slug} className="itin-full-card">
                <div className="itin-full-img">
                  <img src={it.thumb} alt={it.title} />
                  <div className="itin-full-days">{it.days} days</div>
                </div>
                <div className="itin-full-body">
                  <div className="itin-full-region">{it.region}</div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <div className="itin-full-tags">
                    {it.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="itin-full-footer">
                    <strong>{it.price}</strong>
                    <span className="listing-card-cta">View itinerary </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Don't see what you're <em>looking for</em>?</h2>
            <p>All our itineraries are fully customisable - or we can design something entirely bespoke, just for you.</p>
          </div>
          <Link to="/contact" className="btn-gold">Plan a custom trip </Link>
        </div>
      </section>
    </div>
  );
}
