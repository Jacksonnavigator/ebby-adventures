import { Link } from "react-router-dom";
import { DESTINATIONS, EXPERIENCES, ITINERARIES, TESTIMONIALS } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=85" alt="Tanzania safari" />
          <div className="home-hero-overlay" />
        </div>
        <div className="home-hero-content container">
          <div className="home-hero-eyebrow">Tanzania's Tailor-Made Safari Specialists</div>
          <h1>Where <em>wild</em> stories begin.</h1>
          <p>From the thundering Serengeti to the summit of Kilimanjaro — we craft journeys to Tanzania's most extraordinary places with guides who live them.</p>
          <div className="home-hero-btns">
            <Link to="/contact" className="btn-gold">Start planning</Link>
            <Link to="/itineraries" className="btn-outline-white">See our itineraries →</Link>
          </div>
        </div>
        <div className="home-hero-stats container">
          <div className="hero-stat"><strong>Expert Local Guides</strong><span>Born & raised in Tanzania</span></div>
          <div className="hero-stat-div" />
          <div className="hero-stat"><strong>8 National Parks</strong><span>All of Tanzania covered</span></div>
          <div className="hero-stat-div" />
          <div className="hero-stat"><strong>Tailor-Made</strong><span>Every trip designed for you</span></div>
          <div className="hero-stat-div" />
          <div className="hero-stat"><strong>WhatsApp Support</strong><span>Always reachable throughout</span></div>
        </div>
      </section>

      {/* ── Where to go ── */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Most popular</div>
              <h2>Where to <em>go</em>.</h2>
            </div>
            <Link to="/destinations" className="view-all">All destinations →</Link>
          </div>
          <div className="dest-grid">
            {DESTINATIONS.slice(0,4).map(d => (
              <Link to={`/destinations/${d.slug}`} key={d.slug} className="dest-card">
                <div className="dest-card-img card-img-wrap">
                  <img src={d.thumb} alt={d.name} />
                  <div className="dest-card-fade" />
                  <div className="dest-card-region">{d.region}</div>
                </div>
                <div className="dest-card-body">
                  <h3>{d.short}</h3>
                  <p>{d.tagline}</p>
                  <span className="dest-card-cta">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experiences ── */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Experiences</div>
              <h2>By the kind of <em>adventure</em>.</h2>
            </div>
            <Link to="/experiences" className="view-all">All experiences →</Link>
          </div>
          <div className="exp-grid">
            {EXPERIENCES.map(e => (
              <Link to={`/experiences/${e.slug}`} key={e.slug} className="exp-card">
                <div className="exp-card-img card-img-wrap">
                  <img src={e.thumb} alt={e.name} />
                  <div className="exp-card-overlay" />
                </div>
                <div className="exp-card-body">
                  <div className="exp-icon">{e.icon}</div>
                  <h3>{e.name}</h3>
                  <span>{e.count} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Ebby banner ── */}
      <section className="home-why">
        <div className="container home-why-inner">
          <div className="home-why-text">
            <div className="eyebrow eyebrow-light">Why Ebby Adventures</div>
            <h2>Specialists in <em>Tanzania</em>. Nothing else.</h2>
            <p>We don't do generic tours. We do deep, personal Tanzania experiences — led by guides who grew up in these landscapes, who know the secret spots, the right seasons, and when to stay still and let the bush come to you.</p>
            <div className="home-why-list">
              <div className="why-item">✓ Expert local guides — not contractors</div>
              <div className="why-item">✓ Private vehicles for your group only</div>
              <div className="why-item">✓ Flexible, fully tailor-made itineraries</div>
              <div className="why-item">✓ Same rate as booking direct</div>
              <div className="why-item">✓ WhatsApp support in the field</div>
              <div className="why-item">✓ Responsible, community-led travel</div>
            </div>
            <Link to="/about" className="btn-outline-white">Our story →</Link>
          </div>
          <div className="home-why-img">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" alt="Safari guide" />
          </div>
        </div>
      </section>

      {/* ── Itineraries ── */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Itineraries</div>
              <h2>Our most considered <em>journeys</em>.</h2>
            </div>
            <Link to="/itineraries" className="view-all">All itineraries →</Link>
          </div>
          <div className="itin-grid">
            {ITINERARIES.slice(0,4).map(it => (
              <Link to={`/itineraries/${it.slug}`} key={it.slug} className="itin-card">
                <div className="itin-card-img card-img-wrap">
                  <img src={it.thumb} alt={it.title} />
                  <div className="itin-card-days">{it.days} days</div>
                </div>
                <div className="itin-card-body">
                  <div className="itin-card-region">{it.region}</div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <div className="itin-card-tags">
                    {it.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="itin-card-footer">
                    <strong>{it.price}</strong>
                    <span className="itin-cta">View itinerary →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kilimanjaro banner ── */}
      <section className="home-kili">
        <div className="home-kili-bg">
          <img src="https://images.unsplash.com/photo-1621414050946-1b8a6c7f3c52?w=1600&q=80" alt="Kilimanjaro" />
          <div className="home-kili-overlay" />
        </div>
        <div className="container home-kili-content">
          <div className="eyebrow eyebrow-light">Trekking</div>
          <h2>Climb the <em>Roof of Africa</em>.</h2>
          <p>Mount Kilimanjaro — 5,895m. Africa's highest peak. No technical climbing. Just determination and the right team. We have guided hundreds of climbers to Uhuru Peak.</p>
          <div className="kili-routes">
            {["Machame", "Marangu", "Lemosho", "Rongai", "Northern Circuit"].map(r => (
              <span key={r} className="kili-route-tag">{r}</span>
            ))}
          </div>
          <Link to="/kilimanjaro" className="btn-outline-white">Explore all routes →</Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Testimonials</div>
              <h2>Word from people who just <em>came back</em>.</h2>
            </div>
            <a href="https://www.tripadvisor.com/Attraction_Review-g297913-d23848796-Reviews-EBBY_ADVENTURES_AND_SAFARIS-Arusha_Arusha_Region.html" target="_blank" rel="noreferrer" className="view-all">See all reviews →</a>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.slice(0,4).map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p>"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.country} · {t.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plan form ── */}
      <section className="section section-dark home-plan" id="plan">
        <div className="container home-plan-inner">
          <div className="home-plan-left">
            <div className="eyebrow">Plan a trip</div>
            <h2>Begin your <em>Tanzania adventure</em>.</h2>
            <p>Tell us when, who's coming, and what you dream of. A specialist gets back to you personally — usually within a few hours.</p>
            <div className="plan-promises">
              <div className="plan-promise">⚡ Reply within hours</div>
              <div className="plan-promise">💬 WhatsApp support throughout</div>
              <div className="plan-promise">🌍 Expert local knowledge</div>
              <div className="plan-promise">✅ No booking fees</div>
            </div>
            <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">💬 Chat on WhatsApp now</a>
          </div>
          <div className="home-plan-right">
            <PlanForm />
          </div>
        </div>
      </section>
    </div>
  );
}
