import { useParams, Link } from "react-router-dom";
import { ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function ItineraryDetailPage() {
  const { slug } = useParams();
  const it = ITINERARIES.find(i => i.slug === slug);
  if (!it) return <div className="not-found container"><h2>Itinerary not found.</h2><Link to="/itineraries">Back to itineraries</Link></div>;

  const related = ITINERARIES.filter(i => i.slug !== slug).slice(0, 2);

  return (
    <div>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={it.hero} alt={it.title} />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="breadcrumb breadcrumb-light">
            <Link to="/">Home</Link> <span className="bc-sep">›</span>
            <Link to="/itineraries">Itineraries</Link> <span className="bc-sep">›</span>
            <span>{it.title}</span>
          </div>
          <div className="eyebrow eyebrow-light">{it.region} · {it.days} days</div>
          <h1>{it.title}</h1>
          <p className="detail-hero-tag">{it.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <div className="detail-main">
            <p className="detail-lead">{it.overview}</p>

            <div className="detail-block">
              <h2>Day-by-day <em>itinerary</em></h2>
              <div className="day-list">
                {it.itinerary.map(d => (
                  <div key={d.day} className="day-item">
                    <div className="day-num">{d.day}</div>
                    <div className="day-body">
                      <h4>Day {d.day} — {d.title}</h4>
                      <p>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>What's <em>included</em></h2>
              <div className="includes-grid">
                {it.includes.map(item => (
                  <div key={item} className="includes-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Other <em>itineraries</em> you might like</h2>
              <div className="detail-related">
                {related.map(r => (
                  <Link to={`/itineraries/${r.slug}`} key={r.slug} className="related-card">
                    <div className="related-card-img">
                      <img src={r.thumb} alt={r.title} />
                    </div>
                    <div className="related-card-body">
                      <div className="related-region">{r.region} · {r.days} days</div>
                      <h4>{r.title}</h4>
                      <p>{r.desc.slice(0, 90)}…</p>
                      <span className="related-cta">View itinerary →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h3>{it.price}</h3>
              <p>Prices are per person based on two people sharing. Contact us for solo, family, or group pricing.</p>
              <PlanForm compact />
            </div>
            <div className="sidebar-contact">
              <p>Questions? Chat with us instantly.</p>
              <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">💬 WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
