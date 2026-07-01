import { useParams, Link } from "react-router-dom";
import { COASTS, ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function CoastDetailPage() {
  const { slug } = useParams();
  const coast = COASTS.find((entry) => entry.slug === slug);

  if (!coast) {
    return (
      <div className="not-found container">
        <h2>Coast destination not found.</h2>
        <Link to="/coasts">Back to coasts</Link>
      </div>
    );
  }

  const related = ITINERARIES.filter((it) =>
    it.region.toLowerCase().includes(coast.short.toLowerCase()) ||
    it.title.toLowerCase().includes(coast.short.toLowerCase())
  ).slice(0, 2);

  return (
    <div>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={coast.hero} alt={coast.name} />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="eyebrow eyebrow-light">{coast.region}</div>
          <h1>{coast.name}</h1>
          <p className="detail-hero-tag">{coast.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <div className="detail-main">
            <p className="detail-lead">{coast.desc}</p>

            <div className="detail-block">
              <h2>Why visit</h2>
              <p>{coast.whyVisit}</p>
            </div>

            <div className="detail-block">
              <h2>Ideal for</h2>
              <div className="detail-tags">
                {coast.idealFor.map((item) => (<span key={item} className="tag">{item}</span>))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Access</h2>
              <p>{coast.access}</p>
            </div>

            <div className="detail-block">
              <h2>Highlights</h2>
              <ul className="detail-list">
                {coast.highlights.map((item) => (<li key={item}>{item}</li>))}
              </ul>
            </div>

            <div className="detail-block">
              <h2>Wildlife</h2>
              <div className="detail-tags">
                {coast.wildlife.map((item) => (<span key={item} className="tag">{item}</span>))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Activities</h2>
              <div className="detail-tags">
                {coast.activities.map((item) => (<span key={item} className="tag">{item}</span>))}
              </div>
            </div>

            <div className="detail-block detail-besttime">
              <div className="besttime-icon">Best</div>
              <div>
                <h3>Best time to visit</h3>
                <p>{coast.bestTime}</p>
              </div>
            </div>

            {related.length > 0 && (
              <div className="detail-block">
                <h2>Suggested itineraries for {coast.short}</h2>
                <div className="detail-related">
                  {related.map((it) => (
                    <Link to={`/itineraries/${it.slug}`} key={it.slug} className="related-card">
                      <div className="related-card-img">
                        <img src={it.thumb} alt={it.title} />
                      </div>
                      <div className="related-card-body">
                        <div className="related-region">{it.region} / {it.days} days</div>
                        <h4>{it.title}</h4>
                        <p>{it.desc.slice(0, 90)}...</p>
                        <span className="related-cta">View itinerary</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h3>Plan your {coast.short} coast stay</h3>
              <p>Tell us when you'd like to travel and we'll shape a tailored beach, culture or marine itinerary around it.</p>
              <PlanForm compact />
            </div>
            <div className="sidebar-contact">
              <p>Prefer to chat first?</p>
              <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Explore more</div>
              <h2>Other <em>coasts</em>.</h2>
            </div>
            <Link to="/coasts" className="view-all">All coasts</Link>
          </div>
          <div className="more-grid">
            {COASTS.filter((entry) => entry.slug !== slug).slice(0, 3).map((entry) => (
              <Link to={`/coasts/${entry.slug}`} key={entry.slug} className="more-card">
                <div className="more-card-img">
                  <img src={entry.thumb || entry.hero} alt={entry.name} />
                  <div className="more-card-fade" />
                </div>
                <div className="more-card-body">
                  <div className="more-card-region">{entry.region}</div>
                  <h3>{entry.short}</h3>
                  <span>Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
