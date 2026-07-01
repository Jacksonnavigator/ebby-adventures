import { useParams, Link } from "react-router-dom";
import { KILI_ROUTE_DETAILS } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";

export default function KiliRouteDetailPage() {
  const { routeSlug } = useParams();
  const r = KILI_ROUTE_DETAILS.find(x => x.slug === routeSlug);

  if (!r) {
    return (
      <div className="not-found container">
        <h2>Route not found.</h2>
        <Link to="/trekking/kilimanjaro">Back to Kilimanjaro</Link>
      </div>
    );
  }

  const related = KILI_ROUTE_DETAILS.filter(x => x.slug !== routeSlug).slice(0, 2);

  return (
    <div>
      <section className="detail-hero">
        <div className="detail-hero-bg">
          <img src={r.hero} alt={r.name} />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="eyebrow eyebrow-light">{r.nickname} / {r.days}</div>
          <h1>{r.name}</h1>
          <p className="detail-hero-tag">{r.tagline}</p>
        </div>
      </section>

      <section className="section-light" style={{ padding: "28px 0" }}>
        <div className="container">
          <div className="kili-facts-grid" style={{ background: "var(--dark)", borderRadius: "var(--radius)" }}>
            <div className="kili-fact"><strong>{r.days}</strong><span>Duration</span></div>
            <div className="kili-fact"><strong>{r.difficulty}</strong><span>Difficulty</span></div>
            <div className="kili-fact"><strong>{r.success}</strong><span>Success rate</span></div>
            <div className="kili-fact"><strong>{r.distance}</strong><span>Total distance</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-body">
          <div className="detail-main">
            <p className="detail-lead">{r.intro}</p>

            <div className="detail-block">
              <h2>Day-by-day <em>itinerary</em></h2>
              <div className="day-list">
                {r.itinerary.map((d, idx) => (
                  <div key={idx} className="day-item">
                    <div className="day-num">{typeof d.day === "number" ? d.day : "•"}</div>
                    <div className="day-body">
                      <h4>{typeof d.day === "number" ? `Day ${d.day}: ${d.title}` : d.title}</h4>
                      <p>{d.desc}</p>
                      {d.stats && <p style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, marginTop: "6px" }}>{d.stats}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>What's <em>included</em></h2>
              <div className="includes-grid">
                {r.includes.map(item => (
                  <div key={item} className="includes-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Not <em>included</em></h2>
              <div className="includes-grid">
                {r.excludes.map(item => (
                  <div key={item} className="includes-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Other <em>routes</em> to the summit</h2>
              <div className="detail-related">
                {related.map(rt => (
                  <Link to={`/trekking/kilimanjaro/${rt.slug}`} key={rt.slug} className="related-card">
                    <div className="related-card-img">
                      <img src={rt.thumb} alt={rt.name} />
                    </div>
                    <div className="related-card-body">
                      <div className="related-region">{rt.nickname} / {rt.days}</div>
                      <h4>{rt.name}</h4>
                      <p>{rt.tagline}</p>
                      <span className="related-cta">View itinerary</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h3>Custom Quote</h3>
              <p>Prices depend on group size, season, and accommodation before/after the climb. Tell us your dates and we'll send a tailored quote.</p>
              <PlanForm compact />
            </div>
            <div className="sidebar-contact">
              <p>Questions about this route? Chat with us instantly.</p>
              <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
