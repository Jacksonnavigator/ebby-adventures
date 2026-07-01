import { Link } from "react-router-dom";
import { COMPANY } from "../data/siteData";
import PlanForm from "../components/PlanForm";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85" alt="Tanzania" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">Start planning</div>
          <h1>Let's plan your <em>Tanzania adventure</em>.</h1>
          <p>Get in touch and a specialist will respond personally - usually within a few hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* Left - info */}
          <div className="contact-info">
            <div className="eyebrow">Contact us</div>
            <h2>We'd love to <em>hear from you</em>.</h2>
            <p>Whether you have a full itinerary in mind or just a vague dream of safari dust and sunrise over the Serengeti - reach out. We'll help you figure out the rest.</p>

            <div className="contact-methods">
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="contact-method contact-method-wa">
                <div className="cm-icon">WA</div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Instant response during working hours</span>
                  <em>{COMPANY.phone}</em>
                </div>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="contact-method">
                <div className="cm-icon">Call</div>
                <div>
                  <strong>Phone</strong>
                  <span>Call us directly</span>
                  <em>{COMPANY.phone}</em>
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="contact-method">
                <div className="cm-icon">Email</div>
                <div>
                  <strong>Email</strong>
                  <span>We reply within a few hours</span>
                  <em>{COMPANY.email}</em>
                </div>
              </a>
              <div className="contact-method">
                <div className="cm-icon">Map</div>
                <div>
                  <strong>Location</strong>
                  <span>Based in Arusha, Tanzania</span>
                  <em>Gateway to the Northern Safari Circuit</em>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <div className="cs-label">Follow our adventures</div>
              <div className="cs-links">
                <a href={COMPANY.facebook}  target="_blank" rel="noreferrer" className="cs-link">Facebook</a>
                <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="cs-link">Instagram</a>
                <a href={COMPANY.youtube}   target="_blank" rel="noreferrer" className="cs-link">YouTube</a>
                <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer" className="cs-link">TripAdvisor</a>
              </div>
            </div>

            <div className="contact-promise">
              <h3>Our response promise</h3>
              <ul>
                <li>We reply to every enquiry personally - no bots, no templates</li>
                <li>Response within 2-4 hours during Tanzanian business hours</li>
                <li>WhatsApp replies are usually immediate</li>
                <li>No obligation - just a friendly, expert conversation</li>
              </ul>
            </div>
          </div>

          {/* Right - form */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <h3>Send us your enquiry</h3>
              <p>Tell us about your dream Tanzania trip and we'll get back to you with ideas and pricing.</p>
            </div>
            <PlanForm />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-sm section-light">
        <div className="container">
          <div className="contact-map">
            <div className="contact-map-inner">
              <div className="map-label">Arusha, Tanzania</div>
              <p>We operate throughout Tanzania - from the Serengeti to Zanzibar, Kilimanjaro to the Selous.</p>
              <a href="https://maps.google.com/?q=Arusha,Tanzania" target="_blank" rel="noreferrer" className="btn-outline-dark">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
