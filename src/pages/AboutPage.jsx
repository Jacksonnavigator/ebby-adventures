import { Link } from "react-router-dom";
import { TESTIMONIALS, COMPANY } from "../data/siteData";
import "./AboutPage.css";

// Local image imports
import aboutHeroImg from "../assets/downloaded_image_11.jpg";
import aboutGuideImg from "../assets/downloaded_image_14.jpg";
import serengetiImg from "../assets/gallery_leopard.jpg";

export default function AboutPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src={aboutHeroImg} alt="Ebby Adventures" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
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
            <p>Ebby Adventures & Safaris is an independently owned tour operator based in Arusha, Tanzania. We specialize in creating high-quality, tailor-made safari and trekking experiences that go beyond the ordinary. Our deep local knowledge and commitment to excellence ensure that every guest experiences the true heart of Africa.</p>
            <p>From the iconic Serengeti plains to the majestic peaks of Kilimanjaro, we offer a range of adventures including wildlife safaris, mountain trekking, cultural tours, and beach escapes. Our team is dedicated to providing personalized service, expert guidance, and unforgettable memories for every traveler.</p>
          </div>
          <div className="about-imgs-stack">
            <img src={aboutGuideImg} alt="Safari guide" className="about-img-main" />
            <img src={serengetiImg} alt="Serengeti" className="about-img-secondary" />
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
              { icon: "Safari", title: "Wildlife Conservation", desc: "We believe travel should benefit the places and animals that make it possible. A portion of every booking goes toward local conservation efforts." },
              { icon: "02", title: "Community First", desc: "Our guides, porters, cooks, and drivers are all Tanzanian locals. We invest in training, fair wages, and career development for our team." },
              { icon: "03", title: "Expert Knowledge", desc: "Eben and his team know Tanzania's parks, seasons, and wildlife behaviour with an intimacy that only comes from a lifetime of guiding." },
              { icon: "04", title: "Safety First", desc: "All our guides hold current first aid certification. All vehicles are maintained to the highest standard. Your safety is never compromised." },
              { icon: "05", title: "Sustainable Travel", desc: "We follow Leave No Trace principles, minimise single-use plastics on all our trips, and support local suppliers across the supply chain." },
              { icon: "06", title: "Genuine Partnership", desc: "We don't hand you off to a third party. Your guide is with you from first contact to final drop-off - no surprises, no strangers." },
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
            <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer" className="view-all">All TripAdvisor reviews</a>
          </div>
          <div className="about-testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">5-star review</div>
                <p>"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.country} / {t.source}</span>
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
          <Link to="/contact" className="btn-gold">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}
