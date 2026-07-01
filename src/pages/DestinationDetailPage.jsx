import { useParams, Link } from "react-router-dom";
import { DESTINATIONS, ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const dest = DESTINATIONS.find(d => d.slug === slug);
  if (!dest) return <div className="not-found container"><h2>Destination not found.</h2><Link to="/destinations">Back to destinations</Link></div>;

  const related = ITINERARIES.filter(it =>
    it.region.toLowerCase().includes(dest.short.toLowerCase()) ||
    it.title.toLowerCase().includes(dest.short.toLowerCase())
  ).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={dest.hero} alt={dest.name} />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="eyebrow eyebrow-light">{dest.region}</div>
          <h1>{dest.name}</h1>
          <p className="detail-hero-tag">{dest.tagline}</p>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container detail-body">
          {/* Main content */}
          <div className="detail-main">
            <p className="detail-lead">{dest.desc}</p>

            <div className="detail-block">
              <h2>Why visit</h2>
              <p>{dest.whyVisit}</p>
            </div>

            <div className="detail-block">
              <h2>Ideal for</h2>
              <div className="detail-tags">
                {dest.idealFor.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>

            <div className="detail-block">
              <h2>Access</h2>
              <p>{dest.access}</p>
            </div>

            <div className="detail-block">
              <h2>Highlights</h2>
              <ul className="detail-list">
                {dest.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>

            <div className="detail-block">
              <h2>Wildlife</h2>
              <div className="detail-tags">
                {dest.wildlife.map(w => <span key={w} className="tag">{w}</span>)}
              </div>
            </div>

            <div className="detail-block">
              <h2>Activities</h2>
              <div className="detail-tags">
                {dest.activities.map(a => <span key={a} className="tag">{a}</span>)}
              </div>
            </div>

            <div className="detail-block detail-besttime">
              <div className="besttime-icon">Best</div>
              <div>
                <h3>Best time to visit</h3>
                <p>{dest.bestTime}</p>
              </div>
            </div>

            {related.length > 0 && (
              <div className="detail-block">
                <h2>Suggested itineraries for {dest.short}</h2>
                <div className="detail-related">
                  {related.map(it => (
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

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h3>Plan your visit to {dest.short}</h3>
              <p>Tell us when you'd like to go and we'll put together a tailored itinerary.</p>
              <PlanForm compact />
            </div>
            <div className="sidebar-contact">
              <p>Prefer to chat?</p>
              <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      {/* More destinations */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Explore more</div>
              <h2>Other <em>destinations</em>.</h2>
            </div>
            <Link to="/destinations" className="view-all">All destinations</Link>
          </div>
          <div className="more-grid">
            {DESTINATIONS.filter(d => d.slug !== slug).slice(0, 3).map(d => (
              <Link to={`/destinations/${d.slug}`} key={d.slug} className="more-card">
                <div className="more-card-img">
                  <img src={d.thumb} alt={d.name} />
                  <div className="more-card-fade" />
                </div>
                <div className="more-card-body">
                  <div className="more-card-region">{d.region}</div>
                  <h3>{d.short}</h3>
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
