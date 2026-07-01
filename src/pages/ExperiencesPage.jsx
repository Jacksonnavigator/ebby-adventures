import { Link } from "react-router-dom";
import { EXPERIENCES } from "../data/siteData";
import "./ListingPage.css";

const experienceHighlights = [
  {
    title: "Community-led",
    text: "Our experiences are shaped with local hosts, guides, and cultural partners who welcome you into real places and everyday life.",
    stat: "Meaningful connections",
  },
  {
    title: "Flexible by design",
    text: "Choose a half-day visit, a full-day encounter, or a multi-day journey that pairs culture, wildlife, and scenery in one itinerary.",
    stat: "From short add-ons to full itineraries",
  },
  {
    title: "Built around impact",
    text: "Every experience is designed to support local communities, conservation efforts, and a richer understanding of Tanzania.",
    stat: "Responsible travel at the core",
  },
];

export default function ExperiencesPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1500463959177-e0869687df26?w=1600&q=85" alt="Wildlife safari" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">By type of trip</div>
          <h1>Tanzania <em>Experiences</em>.</h1>
          <p>Wildlife safaris, mountain treks, coastal escapes, and cultural journeys — every kind of Tanzania adventure, led by specialists.</p>
        </div>
      </section>

      <section className="section page-intro-section">
        <div className="container">
          <div className="page-intro">
            <div className="page-intro-content">
              <div className="eyebrow">Cultural & adventure travel</div>
              <h2>Beyond what you can see — what you can understand.</h2>
              <p>We design experiences that bring you closer to local people, landscapes, and traditions, whether you are visiting a village, tracing history, or shifting from safari to beach.</p>
            </div>
            <div className="page-intro-stats">
              <div className="page-intro-stat"><strong>6+</strong><span>signature experience styles</span></div>
              <div className="page-intro-stat"><strong>Local</strong><span>hosts, guides, and community partners</span></div>
            </div>
          </div>

          <div className="page-feature-grid">
            {experienceHighlights.map((item) => (
              <div className="page-feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Featured experiences</div>
            <h2>Choose an experience that matches your travel style.</h2>
          </div>
          <div className="listing-grid">
            {EXPERIENCES.map((e) => (
              <Link to={`/experiences/${e.slug}`} key={e.slug} className="listing-card">
                <div className="listing-card-img">
                  <img src={e.thumb} alt={e.name} />
                  <div className="listing-card-fade" />
                  <div className="listing-card-icon">{e.icon}</div>
                </div>
                <div className="listing-card-body">
                  <h3>{e.name}</h3>
                  <p className="listing-card-tagline">{e.tagline}</p>
                  <p className="listing-card-desc">{e.desc.slice(0, 120)}...</p>
                  <div className="listing-card-count">{e.count}</div>
                  <span className="listing-card-cta">Learn more</span>
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
          <Link to="/contact" className="btn-gold">Start planning</Link>
        </div>
      </section>
    </div>
  );
}
