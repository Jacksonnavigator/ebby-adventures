import { Link } from "react-router-dom";
import { EXPERIENCES } from "../data/siteData";
import "./ListingPage.css";

export default function ExperiencesPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1500463959177-e0869687df26?w=1600&q=85" alt="Wildlife safari" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="bc-sep">›</span>
            <span>Experiences</span>
          </div>
          <div className="eyebrow eyebrow-light">By type of trip</div>
          <h1>Tanzania <em>Experiences</em>.</h1>
          <p>Wildlife safaris, mountain treks, beach escapes, cultural journeys — every kind of Tanzania adventure, led by specialists.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="listing-grid">
            {EXPERIENCES.map(e => (
              <Link to={`/experiences/${e.slug}`} key={e.slug} className="listing-card">
                <div className="listing-card-img">
                  <img src={e.thumb} alt={e.name} />
                  <div className="listing-card-fade" />
                  <div className="listing-card-icon">{e.icon}</div>
                </div>
                <div className="listing-card-body">
                  <h3>{e.name}</h3>
                  <p className="listing-card-tagline">{e.tagline}</p>
                  <p className="listing-card-desc">{e.desc.slice(0, 120)}…</p>
                  <div className="listing-card-count">{e.count}</div>
                  <span className="listing-card-cta">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Can't decide? We'll help.</h2>
            <p>Every trip we design starts with a conversation. Tell us your dream and we'll make it happen.</p>
          </div>
          <Link to="/contact" className="btn-gold">Start planning →</Link>
        </div>
      </section>
    </div>
  );
}
