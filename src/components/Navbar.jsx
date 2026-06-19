import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { COMPANY, DESTINATIONS, EXPERIENCES, ITINERARIES } from "../data/siteData";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [activeDestination, setActiveDestination] = useState(DESTINATIONS[0]);
  const [activeExperience, setActiveExperience] = useState(EXPERIENCES[0]);
  const [activeItinerary, setActiveItinerary] = useState(ITINERARIES[0]);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  const navClass = `navbar${scrolled || !isHome ? " scrolled" : ""}${menuOpen ? " open" : ""}`;

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner container">
          <div className="topbar-left">
            <span>📞 <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></span>
            <span>✉️ <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></span>
          </div>
          <div className="topbar-right">
            <a href={COMPANY.tripadvisor} target="_blank" rel="noreferrer">⭐ TripAdvisor Reviews</a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </div>

      <nav className={navClass}>
        <div className="nav-inner container">
          <Link to="/" className="nav-logo">
            <div className="logo-mark">E</div>
            <div className="logo-text">
              <span className="logo-main">Ebby Adventures</span>
              <span className="logo-sub">& Safaris · Arusha, Tanzania</span>
            </div>
          </Link>

          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>

            <div
              className={`nav-item${dropdown === "dest" ? " active" : ""}`}
              onMouseEnter={() => setDropdown("dest")}
              onMouseLeave={() => setDropdown(null)}
            >
              <NavLink to="/destinations" className="nav-link">Destinations <span className="chevron">▾</span></NavLink>
              {dropdown === "dest" && (
                <div className="dropdown mega">
                  <div className="mega-col">
                    <div className="mega-label">Parks & Islands</div>
                    {DESTINATIONS.map(destination => (
                      <Link
                        key={destination.slug}
                        to={`/destinations/${destination.slug}`}
                        className={`mega-item${activeDestination.slug === destination.slug ? " active" : ""}`}
                        onMouseEnter={() => setActiveDestination(destination)}
                      >
                        {destination.name}
                      </Link>
                    ))}
                    <Link to="/destinations" className="mega-all">All destinations →</Link>
                  </div>
                  <MegaPromo
                    image={activeDestination.thumb}
                    title={activeDestination.name}
                    description={activeDestination.tagline}
                    to={`/destinations/${activeDestination.slug}`}
                  />
                </div>
              )}
            </div>

            <div
              className={`nav-item${dropdown === "exp" ? " active" : ""}`}
              onMouseEnter={() => setDropdown("exp")}
              onMouseLeave={() => setDropdown(null)}
            >
              <NavLink to="/experiences" className="nav-link">Experiences <span className="chevron">▾</span></NavLink>
              {dropdown === "exp" && (
                <div className="dropdown mega">
                  <div className="mega-col">
                    <div className="mega-label">By Experience Type</div>
                    {EXPERIENCES.map(experience => (
                      <Link
                        key={experience.slug}
                        to={`/experiences/${experience.slug}`}
                        className={`mega-item${activeExperience.slug === experience.slug ? " active" : ""}`}
                        onMouseEnter={() => setActiveExperience(experience)}
                      >
                        {experience.name}
                      </Link>
                    ))}
                    <Link to="/experiences" className="mega-all">All experiences →</Link>
                  </div>
                  <MegaPromo
                    image={activeExperience.thumb}
                    title={activeExperience.name}
                    description={activeExperience.tagline}
                    to={`/experiences/${activeExperience.slug}`}
                  />
                </div>
              )}
            </div>

            <div
              className={`nav-item${dropdown === "itin" ? " active" : ""}`}
              onMouseEnter={() => setDropdown("itin")}
              onMouseLeave={() => setDropdown(null)}
            >
              <NavLink to="/itineraries" className="nav-link">Itineraries <span className="chevron">▾</span></NavLink>
              {dropdown === "itin" && (
                <div className="dropdown mega">
                  <div className="mega-col">
                    <div className="mega-label">Featured Journeys</div>
                    {ITINERARIES.map(itinerary => (
                      <Link
                        key={itinerary.slug}
                        to={`/itineraries/${itinerary.slug}`}
                        className={`mega-item${activeItinerary.slug === itinerary.slug ? " active" : ""}`}
                        onMouseEnter={() => setActiveItinerary(itinerary)}
                      >
                        {itinerary.title}
                      </Link>
                    ))}
                    <Link to="/itineraries" className="mega-all">All itineraries →</Link>
                  </div>
                  <MegaPromo
                    image={activeItinerary.thumb}
                    title={activeItinerary.title}
                    description={`${activeItinerary.days} days · ${activeItinerary.region}`}
                    to={`/itineraries/${activeItinerary.slug}`}
                  />
                </div>
              )}
            </div>

            <NavLink to="/kilimanjaro" className="nav-link">Kilimanjaro</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          <div className="nav-cta">
            <Link to="/contact" className="btn-gold">Start planning</Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-section">
              <Link to="/" className="mobile-link">Home</Link>
            </div>
            <div className="mobile-section">
              <div className="mobile-label">Destinations</div>
              {DESTINATIONS.map(destination => (
                <Link key={destination.slug} to={`/destinations/${destination.slug}`} className="mobile-link">{destination.name}</Link>
              ))}
            </div>
            <div className="mobile-section">
              <div className="mobile-label">Experiences</div>
              {EXPERIENCES.map(experience => (
                <Link key={experience.slug} to={`/experiences/${experience.slug}`} className="mobile-link">{experience.name}</Link>
              ))}
            </div>
            <div className="mobile-section">
              <div className="mobile-label">Itineraries</div>
              {ITINERARIES.map(itinerary => (
                <Link key={itinerary.slug} to={`/itineraries/${itinerary.slug}`} className="mobile-link">{itinerary.title}</Link>
              ))}
            </div>
            <div className="mobile-section">
              <Link to="/kilimanjaro" className="mobile-link">Kilimanjaro</Link>
              <Link to="/about" className="mobile-link">About Us</Link>
              <Link to="/contact" className="mobile-link">Contact</Link>
            </div>
            <div className="mobile-cta">
              <Link to="/contact" className="btn-gold">Start planning</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function MegaPromo({ image, title, description, to }) {
  return (
    <div className="mega-promo">
      <img src={image} alt={title} />
      <div className="mega-promo-body">
        <div className="mega-promo-title">{title}</div>
        <div className="mega-promo-desc">{description}</div>
        <Link to={to} className="mega-promo-link">Explore →</Link>
      </div>
    </div>
  );
}
