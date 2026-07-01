import { useParams, Link } from "react-router-dom";
import { EXPERIENCES, ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const exp = EXPERIENCES.find(e => e.slug === slug);
  if (!exp) return <div className="not-found container"><h2>Experience not found.</h2><Link to="/experiences">Back to experiences</Link></div>;

  const related = ITINERARIES.filter(it =>
    it.tags.some(t => t.toLowerCase().includes(exp.name.split(" ")[0].toLowerCase())) ||
    it.title.toLowerCase().includes(exp.name.split(" ")[0].toLowerCase())
  ).slice(0, 2);

  return (
    <div>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={exp.hero} alt={exp.name} />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="eyebrow eyebrow-light">{exp.icon} Experience</div>
          <h1>{exp.name}</h1>
          <p className="detail-hero-tag">{exp.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <div className="detail-main">
            <p className="detail-lead">{exp.desc}</p>

            <div className="detail-block">
              <h2>Why choose this</h2>
              <p>{exp.whyChoose}</p>
            </div>

            <div className="detail-block">
              <h2>Best for</h2>
              <div className="detail-tags">
                {exp.bestFor.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>

            {exp.featuredCultures && (
              <div className="detail-block">
                <h2>Featured cultures</h2>
                <div className="detail-list">
                  {exp.featuredCultures.map(item => (
                    <div key={item.name} className="includes-item" style={{ marginBottom: "10px" }}>
                      <strong>{item.name}</strong>
                      <p style={{ marginTop: "6px", color: "var(--muted)" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-block">
              <h2>What's <em>included</em></h2>
              <div className="includes-grid">
                {exp.included.map(item => (
                  <div key={item} className="includes-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>How it <em>works</em></h2>
              <p>Every experience we offer is fully private, with no shared group tours. Your vehicle, your guide, your pace. We tailor every detail to your group size, fitness level, and what you want to get out of the trip.</p>
              <p>Before you travel, your dedicated specialist will reach out to confirm all details, share a full trip brief, and answer any last-minute questions. During the trip, we're always reachable on WhatsApp.</p>
            </div>

            {related.length > 0 && (
              <div className="detail-block">
                <h2>Suggested <em>itineraries</em></h2>
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
              <h3>Book this experience</h3>
              <p>Tell us your dates and we'll put together a tailored itinerary around this experience.</p>
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
              <h2>Other <em>experiences</em>.</h2>
            </div>
            <Link to="/experiences" className="view-all">All experiences</Link>
          </div>
          <div className="more-grid">
            {EXPERIENCES.filter(e => e.slug !== slug).slice(0, 3).map(e => (
              <Link to={`/experiences/${e.slug}`} key={e.slug} className="more-card">
                <div className="more-card-img">
                  <img src={e.thumb} alt={e.name} />
                  <div className="more-card-fade" />
                </div>
                <div className="more-card-body">
                  <div className="more-card-region">{e.icon} Experience</div>
                  <h3>{e.name}</h3>
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
