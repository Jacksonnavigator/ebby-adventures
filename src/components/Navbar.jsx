import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DESTINATIONS, EXPERIENCES, ITINERARIES, TREKKING } from "../data/siteData";
import "./Navbar.css";
import logoSrc from "../assets/favicon.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const dropdownTimer = useRef(null);
  const [activeDestination, setActiveDestination] = useState(DESTINATIONS[0]);
  const [activeExperience, setActiveExperience] = useState(EXPERIENCES[0]);
  const [activeItinerary, setActiveItinerary] = useState(ITINERARIES[0]);
  const [activeTrekking, setActiveTrekking] = useState(TREKKING[0]);
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

  const openDropdown = (name) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdown(name);
  };

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdown(null), 200);
  };

  const navClass = `navbar${scrolled || !isHome ? " scrolled" : ""}${menuOpen ? " open" : ""}`;

  return (
    <>
      <nav className={navClass}>
        <div className="nav-inner container">
          <Link to="/" className="nav-logo">
            <img src={logoSrc} alt="Ebby Adventures" className="nav-logo-img" />
            <div className="logo-text">
              <span className="logo-main">Ebby Adventures</span>
              <span className="logo-sub">& Safaris / Arusha, Tanzania</span>
            </div>
          </Link>

          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>

            <div
              className={`nav-item${dropdown === "dest" ? " active" : ""}`}
              onMouseEnter={() => openDropdown("dest")}
              onMouseLeave={closeDropdown}
            >
              <NavLink to="/destinations" className="nav-link">Destinations <span className="chevron">v</span></NavLink>
              {dropdown === "dest" && (
                <div className="dropdown mega" onMouseEnter={() => openDropdown("dest")} onMouseLeave={closeDropdown}>
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
                    <Link to="/destinations" className="mega-all">All destinations </Link>
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
              onMouseEnter={() => openDropdown("exp")}
              onMouseLeave={closeDropdown}
            >
              <NavLink to="/experiences" className="nav-link">Cultural Experiences <span className="chevron">v</span></NavLink>
              {dropdown === "exp" && (
                <div className="dropdown mega" onMouseEnter={() => openDropdown("exp")} onMouseLeave={closeDropdown}>
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
                    <Link to="/experiences" className="mega-all">All experiences </Link>
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
              onMouseEnter={() => openDropdown("itin")}
              onMouseLeave={closeDropdown}
            >
              <NavLink to="/itineraries" className="nav-link">Safaris <span className="chevron">v</span></NavLink>
              {dropdown === "itin" && (
                <div className="dropdown mega" onMouseEnter={() => openDropdown("itin")} onMouseLeave={closeDropdown}>
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
                    <Link to="/itineraries" className="mega-all">All Safaris </Link>
                  </div>
                  <MegaPromo
                    image={activeItinerary.thumb}
                    title={activeItinerary.title}
                    description={`${activeItinerary.days} days / ${activeItinerary.region}`}
                    to={`/itineraries/${activeItinerary.slug}`}
                  />
                </div>
              )}
            </div>

            <div
              className={`nav-item${dropdown === "trek" ? " active" : ""}`}
              onMouseEnter={() => openDropdown("trek")}
              onMouseLeave={closeDropdown}
            >
              <NavLink to="/trekking" className="nav-link">Trekking <span className="chevron">v</span></NavLink>
              {dropdown === "trek" && (
                <div className="dropdown mega" onMouseEnter={() => openDropdown("trek")} onMouseLeave={closeDropdown}>
                  <div className="mega-col">
                    <div className="mega-label">Mountains & Treks</div>
                    {TREKKING.map(trek => (
                      <Link
                        key={trek.slug}
                        to={`/trekking/${trek.slug}`}
                        className={`mega-item${activeTrekking.slug === trek.slug ? " active" : ""}`}
                        onMouseEnter={() => setActiveTrekking(trek)}
                      >
                        {trek.name}
                      </Link>
                    ))}
                    <Link to="/trekking" className="mega-all">All treks </Link>
                  </div>
                  <MegaPromo
                    image={activeTrekking.thumb}
                    title={activeTrekking.name}
                    description={activeTrekking.tagline}
                    to={`/trekking/${activeTrekking.slug}`}
                  />
                </div>
              )}
            </div>
            <NavLink to="/coasts" className="nav-link">Coasts</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
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
              <div className="mobile-label">Trekking</div>
              {TREKKING.map(trek => (
                <Link key={trek.slug} to={`/trekking/${trek.slug}`} className="mobile-link">{trek.name}</Link>
              ))}
            </div>
            <div className="mobile-section">
              <Link to="/coasts" className="mobile-link">Coasts</Link>
              <Link to="/about" className="mobile-link">About Us</Link>
              <Link to="/gallery" className="mobile-link">Gallery</Link>
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
        <Link to={to} className="mega-promo-link">Explore </Link>
      </div>
    </div>
  );
}
