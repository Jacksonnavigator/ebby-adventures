import { Link } from "react-router-dom";
import { TESTIMONIALS, COMPANY } from "../data/siteData";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=85" alt="Ebby Adventures" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="bc-sep">›</span>
            <span>About Us</span>
          </div>
          <div className="eyebrow eyebrow-light">Who we are</div>
          <h1>Guiding you through Africa's <em>untamed beauty</em>.</h1>
          <p>Born in Tanzania, passionate about wildlife, committed to exceptional experiences.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-layout">
          <div className="about-text">
            <div className="eyebrow">Our story</div>
            <h2>We don't just guide tours. We share our <em>home</em>.</h2>
            <p>At Ebby Adventures & Safaris, we are fuelled by a genuine passion for wildlife, culture, and the extraordinary landscapes of Tanzania. Founded by Eben, a lifelong Tanzanian with deep roots in the safari world, our company was built on one simple belief: the best safari guide is someone who grew up in the bush.</p>
            <p>We've taken thousands of guests through Tanzania's most remarkable places — from the endless Serengeti plains to the summit of Kilimanjaro, from Ngorongoro's world-famous crater to the turquoise waters of Zanzibar. Every single trip is personal. Every itinerary is crafted around you.</p>
            <p>We are small by design. We believe in quality over volume, deep knowledge over scripted commentary, and genuine relationships over transactional bookings. When you travel with Ebby, you get a guide who truly cares — about the animals, the land, the people, and about making your trip the adventure of a lifetime.</p>
          </div>
          <div className="about-imgs-stack">
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80" alt="Safari guide" className="about-img-main" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Serengeti" className="about-img-secondary" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What we stand for</div>
            <h2>Our <em>values</em>.</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: "🦁", title: "Wildlife Conservation", desc: "We believe travel should benefit the places and animals that make it possible. A portion of every booking goes toward local conservation efforts." },
              { icon: "👥", title: "Community First", desc: "Our guides, porters, cooks, and drivers are all Tanzanian locals. We invest in training, fair wages, and career development for our team." },
              { icon: "🎯", title: "Expert Knowledge", desc: "Eben and his team know Tanzania's parks, seasons, and wildlife behaviour with an intimacy that only comes from a lifetime of guiding." },
              { icon: "🔒", title: "Safety First", desc: "All our guides hold current first aid certification. All vehicles are maintained to the highest standard. Your safety is never compromised." },
              { icon: "💚", title: "Sustainable Travel", desc: "We follow Leave No Trace principles, minimise single-use plastics on all our trips, and support local suppliers across the supply chain." },
              { icon: "🤝", title: "Genuine Partnership", desc: "We don't hand you off to a third party. Your guide is with you from first contact to final drop-off — no surprises, no strangers." },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-band">
        <div className="container about-stats-grid">
          {[
            { num: "1,000+", label: "Happy travellers" },
            { num: "98%",    label: "5-star TripAdvisor rating" },
            { num: "8",      label: "National parks covered" },
            { num: "5",      label: "Kilimanjaro routes guided" },
          ].map(s => (
            <div key={s.label} className="about-stat">
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="eyebrow">Reviews</div>
              <h2>What our guests <em>say</em>.</h2>
            </div>
            <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer" className="view-all">All TripAdvisor reviews →</a>
          </div>
          <div className="about-testi-grid">
            {TESTIMONIALS.map((t, i) => (
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

      {/* CTA */}
      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Ready to travel with <em>Ebby</em>?</h2>
            <p>Start a conversation. We'll listen, ask the right questions, and design your perfect Tanzania adventure.</p>
          </div>
          <Link to="/contact" className="btn-gold">Get in touch →</Link>
        </div>
      </section>
    </div>
  );
}
