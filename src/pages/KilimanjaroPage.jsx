import { Link } from "react-router-dom";
import { KILI_ROUTES, ITINERARIES } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./DetailPage.css";
import "./KiliPage.css";

export default function KilimanjaroPage() {
  const kiliItins = ITINERARIES.filter(it => it.slug.includes("kilimanjaro") || it.region.includes("Kilimanjaro"));

  return (
    <div>
      {/* Hero */}
      <section className="detail-hero kili-hero">
        <div className="detail-hero-bg">
          <img src="https://images.unsplash.com/photo-1621414050946-1b8a6c7f3c52?w=1600&q=85" alt="Mount Kilimanjaro" />
          <div className="detail-hero-overlay" />
        </div>
        <div className="container detail-hero-content">
          <div className="breadcrumb breadcrumb-light">
            <Link to="/">Home</Link> <span className="bc-sep">/</span>
            <span>Kilimanjaro</span>
          </div>
          <div className="eyebrow eyebrow-light">Mount Kilimanjaro</div>
          <h1>Climb the <em>Roof of Africa</em>.</h1>
          <p>At 5,895m, Kilimanjaro is Africa's highest peak and one of the world's most remarkable trekking experiences. Our expert guides have led hundreds of climbers safely to Uhuru Peak.</p>
          <div className="detail-hero-btns">
            <Link to="/contact" className="btn-gold">Plan my climb</Link>
            <a href="#routes" className="btn-outline-white">See all routes down</a>
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="kili-facts section-sm">
        <div className="container kili-facts-grid">
          {[
            { label: "Summit Height", val: "5,895m / 19,341 ft" },
            { label: "Location",      val: "Northern Tanzania" },
            { label: "Difficulty",    val: "No technical climbing" },
            { label: "Best Routes",   val: "Machame / Lemosho / Marangu" },
            { label: "Trek Duration", val: "6-10 days" },
            { label: "Best Season",   val: "Jan-Mar & Jun-Oct" },
          ].map(f => (
            <div key={f.label} className="kili-fact">
              <strong>{f.val}</strong>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container kili-intro-layout">
          <div className="kili-intro-text">
            <div className="eyebrow">The mountain</div>
            <h2>Why climb <em>Kilimanjaro</em> with Ebby?</h2>
            <p>Kilimanjaro is Africa's ultimate bucket-list adventure. It requires no technical mountaineering skills - just strong will, correct pacing, and the right support team. That's where we come in.</p>
            <p>Our summit guides are KINAPA-licensed, trained in wilderness first aid, and have made the climb dozens of times. We run small, well-equipped expeditions with optimal crew ratios for your safety and success.</p>
            <div className="kili-why-list">
              {[
                "KINAPA-licensed, experienced summit guides",
                "High summit success rates - 85-95% by route",
                "Small groups for personal attention",
                "Full gear and safety equipment provided",
                "Acclimatisation-optimised itineraries",
                "High calorie, nutritious mountain meals",
                "Wilderness first aid trained crew",
                "Summit certificate upon completion",
              ].map(w => (
                <div key={w} className="kili-why-item">{w}</div>
              ))}
            </div>
          </div>
          <div className="kili-intro-img">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" alt="Kilimanjaro trekkers" />
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="section section-light" id="routes">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Climbing routes</div>
            <h2>Choose your <em>route</em> to the summit.</h2>
            <p>Each route up Kilimanjaro has its own character - from the scenic drama of Machame to the remote solitude of the Northern Circuit. We'll help you pick the right one for your fitness, time, and budget.</p>
          </div>
          <div className="route-grid">
            {KILI_ROUTES.map(r => (
              <div key={r.name} className="route-card">
                <div className="route-card-img">
                  <img src={r.img} alt={r.name} />
                  <div className="route-card-overlay" />
                  <div className="route-card-name">{r.name} Route</div>
                </div>
                <div className="route-card-body">
                  <div className="route-meta">
                    <span className="route-meta-item"><strong>{r.days}</strong><em>Duration</em></span>
                    <span className="route-meta-item"><strong>{r.difficulty}</strong><em>Difficulty</em></span>
                    <span className="route-meta-item route-success"><strong>{r.success}</strong><em>Success Rate</em></span>
                  </div>
                  <p>{r.desc}</p>
                  <Link to="/contact" className="route-cta">Book this route</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries */}
      {kiliItins.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Itineraries</div>
              <h2>Kilimanjaro <em>trip packages</em>.</h2>
            </div>
            <div className="more-grid">
              {kiliItins.map(it => (
                <Link to={`/itineraries/${it.slug}`} key={it.slug} className="more-card">
                  <div className="more-card-img">
                    <img src={it.thumb} alt={it.title} />
                    <div className="more-card-fade" />
                  </div>
                  <div className="more-card-body">
                    <div className="more-card-region">{it.days} days / {it.price}</div>
                    <h3>{it.title}</h3>
                    <span>View itinerary</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plan + FAQ */}
      <section className="section section-dark">
        <div className="container kili-plan-layout">
          <div className="kili-plan-left">
            <div className="eyebrow">Book your climb</div>
            <h2>Ready to reach <em>Uhuru Peak</em>?</h2>
            <p>Tell us your preferred dates, route, and group size and we'll put together a full climb package with everything included.</p>

            <div className="kili-faq">
              <h3>Frequently asked questions</h3>
              {[
                { q: "Do I need climbing experience?", a: "No. Kilimanjaro is a trekking peak - no ropes, axes, or technical skills required. A good level of fitness and the right mindset are all you need." },
                { q: "What is the best time to climb?", a: "January-March and June-October offer the best weather windows. We recommend avoiding the rainy seasons of April-May and November." },
                { q: "How do I train for Kilimanjaro?", a: "We recommend 3-4 months of regular hiking, stair climbing, and cardiovascular training. Altitude acclimatisation exercises are also helpful." },
                { q: "What gear do I need to bring?", a: "We provide a full kit list on booking. Key items include warm layers, waterproof jacket and trousers, good hiking boots, and a sleeping bag rated to -10C or lower." },
              ].map(f => (
                <div key={f.q} className="faq-item">
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="kili-plan-right">
            <PlanForm />
          </div>
        </div>
      </section>
    </div>
  );
}
