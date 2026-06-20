import { Link } from "react-router-dom";
import { COMPANY } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">E</div>
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
            <Link to="/destinations/serengeti"   className="footer-link">Serengeti</Link>
            <Link to="/destinations/ngorongoro"  className="footer-link">Ngorongoro Crater</Link>
            <Link to="/destinations/tarangire"   className="footer-link">Tarangire</Link>
            <Link to="/destinations/lake-manyara" className="footer-link">Lake Manyara</Link>
            <Link to="/destinations/zanzibar"    className="footer-link">Zanzibar</Link>
            <Link to="/destinations/selous"      className="footer-link">Selous</Link>
            <Link to="/destinations"             className="footer-link footer-link-gold">All destinations</Link>
          </div>

          {/* Experiences */}
          <div className="footer-col">
            <div className="footer-col-title">Experiences</div>
            <Link to="/experiences/wildlife-safari"  className="footer-link">Wildlife Safaris</Link>
            <Link to="/experiences/kilimanjaro"       className="footer-link">Kilimanjaro Trek</Link>
            <Link to="/experiences/zanzibar-beach"   className="footer-link">Zanzibar Beach</Link>
            <Link to="/experiences/cultural-tours"   className="footer-link">Cultural Tours</Link>
            <Link to="/experiences/family-safari"    className="footer-link">Family Safaris</Link>
            <Link to="/experiences/honeymoon"        className="footer-link">Honeymoon Safaris</Link>
            <Link to="/experiences"                  className="footer-link footer-link-gold">All experiences</Link>
          </div>

          {/* Company */}
          <div className="footer-col">
            <div className="footer-col-title">Itineraries</div>
            <Link to="/itineraries/northern-circuit-classic"  className="footer-link">Northern Circuit Classic</Link>
            <Link to="/itineraries/safari-and-zanzibar"        className="footer-link">Safari & Zanzibar</Link>
            <Link to="/itineraries/kilimanjaro-machame"        className="footer-link">Kilimanjaro Machame</Link>
            <Link to="/itineraries/southern-escape"            className="footer-link">Southern Escape</Link>
            <Link to="/itineraries/family-adventure"           className="footer-link">Family Adventure</Link>
            <Link to="/itineraries"                            className="footer-link footer-link-gold">All itineraries</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <Link to="/about"          className="footer-link">About Us</Link>
            <Link to="/kilimanjaro"    className="footer-link">Kilimanjaro</Link>
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
