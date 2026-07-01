import { Link } from "react-router-dom";
import { COMPANY, TREKKING, DESTINATIONS, EXPERIENCES, ITINERARIES } from "../data/siteData";
import "./Footer.css";
import logoSrc from "../assets/favicon.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoSrc} alt="Ebby Adventures" className="footer-logo-img" />
              <div>
                <div className="footer-logo-name">Ebby Adventures & Safaris</div>
                <div className="footer-logo-loc">Arusha, Tanzania</div>
              </div>
            </div>
            <p>Tailor-made safari and adventure experiences across Tanzania. From the Serengeti to Kilimanjaro's summit - crafted by locals, designed for you.</p>
            <div className="footer-contact">
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <span>{COMPANY.address}</span>
            </div>
            <div className="footer-social">
              <a href={COMPANY.facebook}    target="_blank" rel="noreferrer">Facebook</a>
              <a href={COMPANY.instagram}   target="_blank" rel="noreferrer">Instagram</a>
              <a href={COMPANY.youtube}     target="_blank" rel="noreferrer">YouTube</a>
              <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer">TripAdvisor</a>
            </div>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <div className="footer-col-title">Destinations</div>
            {DESTINATIONS.slice(0, 6).map(d => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="footer-link">{d.short}</Link>
            ))}
            <Link to="/destinations" className="footer-link footer-link-gold">All destinations</Link>
          </div>

          {/* Experiences */}
          <div className="footer-col">
            <div className="footer-col-title">Experiences</div>
            {EXPERIENCES.slice(0, 5).map(e => (
              <Link key={e.slug} to={`/experiences/${e.slug}`} className="footer-link">{e.name}</Link>
            ))}
            <Link to="/trekking/kilimanjaro" className="footer-link">Kilimanjaro Trek</Link>
            <Link to="/experiences" className="footer-link footer-link-gold">All experiences</Link>
          </div>

          {/* Company */}
          <div className="footer-col">
            <div className="footer-col-title">Itineraries</div>
            {ITINERARIES.slice(0, 5).map(i => (
              <Link key={i.slug} to={`/itineraries/${i.slug}`} className="footer-link">{i.title}</Link>
            ))}
            <Link to="/itineraries" className="footer-link footer-link-gold">All itineraries</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Trekking</div>
            {TREKKING.map(t => (
              <Link key={t.slug} to={`/trekking/${t.slug}`} className="footer-link">{t.name}</Link>
            ))}
            <Link to="/trekking" className="footer-link footer-link-gold">All treks</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <Link to="/about"          className="footer-link">About Us</Link>
            <Link to="/gallery"        className="footer-link">Gallery</Link>
            <Link to="/contact"        className="footer-link">Contact</Link>
            <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer" className="footer-link">TripAdvisor Reviews</a>
            <a href={COMPANY.whatsapp}    target="_blank" rel="noreferrer" className="footer-link">WhatsApp Chat</a>
            <Link to="/contact"        className="footer-link footer-link-gold">Plan your safari</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>(c) {new Date().getFullYear()} Ebby Adventures & Safaris. All rights reserved.</span>
          <span>Arusha, Tanzania / <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></span>
        </div>
      </div>
    </footer>
  );
}
