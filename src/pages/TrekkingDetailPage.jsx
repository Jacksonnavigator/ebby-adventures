import { useParams, Link } from "react-router-dom";
import { TREKKING, ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function TrekkingDetailPage() {
  const { slug } = useParams();
  const trek = TREKKING.find(t => t.slug === slug);
  if (!trek) return <div className="not-found container"><h2>Trek not found.</h2><Link to="/trekking">Back to trekking</Link></div>;

  const related = ITINERARIES.filter(it =>
    it.region.toLowerCase().includes(trek.short.toLowerCase()) ||
    it.title.toLowerCase().includes(trek.short.toLowerCase())
  ).slice(0, 2);

  return (
    <div>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={trek.hero} alt={trek.name} />
          <div className="detail-hero-overlay" />
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <div className="detail-main">
            <div className="detail-stats-bar">
              <div className="stat-item"><strong>{trek.elevation}</strong><span>Elevation</span></div>
              <div className="stat-item"><strong>{trek.duration}</strong><span>Duration</span></div>
              <div className="stat-item"><strong>{trek.difficulty}</strong><span>Difficulty</span></div>
            </div>

            <p className="detail-lead">{trek.desc}</p>

            <div className="detail-block">
              <h2>Highlights</h2>
              <ul className="detail-list">
                {trek.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>

            <div className="detail-block">
              <h2>Why visit</h2>
              <p>{trek.whyVisit}</p>
            </div>

            <div className="detail-block">
              <h2>Ideal for</h2>
              <div className="detail-tags">
                {trek.idealFor.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>

            <div className="detail-block">
              <h2>Access</h2>
              <p>{trek.access}</p>
            </div>

            <div className="detail-block">
              <h2>Available Routes</h2>
              <div className="detail-tags">
                {trek.routes.map(r => <span key={r} className="tag">{r}</span>)}
              </div>
            </div>

            <div className="detail-block">
              <h2>What's Included</h2>
              <ul className="detail-list">
                {trek.included.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>

            <div className="detail-block detail-besttime">
              <div className="besttime-icon">Best</div>
              <div>
                <h3>Best time to trek</h3>
                <p>{trek.bestTime}</p>
              </div>
            </div>

            {related.length > 0 && (
              <div className="detail-block">
                <h2>Suggested itineraries for {trek.short}</h2>
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

          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h3>Plan your {trek.short} trek</h3>
              <p>Tell us when you'd like to go and we'll put together a tailored trekking package.</p>
              <PlanForm compact />
            </div>
            <div className="sidebar-contact">
              <p>Prefer to chat?</p>
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
              <h2>Other <em>treks</em>.</h2>
            </div>
            <Link to="/trekking" className="view-all">All treks</Link>
          </div>
          <div className="more-grid">
            {TREKKING.filter(t => t.slug !== slug).slice(0, 3).map(t => (
              <Link to={`/trekking/${t.slug}`} key={t.slug} className="more-card">
                <div className="more-card-img">
                  <img src={t.thumb} alt={t.name} />
                  <div className="more-card-fade" />
                </div>
                <div className="more-card-body">
                  <div className="more-card-region">{t.region}</div>
                  <h3>{t.short}</h3>
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
