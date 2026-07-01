import { Link } from "react-router-dom";
import { DESTINATIONS, TREKKING, COASTS } from "../data/siteData";
import "./ListingPage.css";

const destinationHighlights = [
  {
    title: "Safari parks",
    text: "From the Serengeti and Ngorongoro to Ruaha and Katavi, Tanzania's best-known wildlife regions are rich with predator action, migration crossings, and iconic landscapes.",
    stat: "Big Five & migration routes",
  },
  {
    title: "Mountain escapes",
    text: "Pair your safari with Kilimanjaro, Meru, or the green highlands for a journey that shifts from plains to alpine air in one trip.",
    stat: "Volcanic peaks & forest hikes",
  },
  {
    title: "Island retreats",
    text: "End your adventure with Zanzibar, Mafia, or the coast where beaches, spice farms, dive sites, and Swahili culture invite you to slow down.",
    stat: "Beach, culture & marine life",
  },
];

const nationalParks = DESTINATIONS.filter((item) => !["zanzibar", "mafia-island", "pemba", "tanga-coast", "kilwa"].includes(item.slug));
const islands = COASTS;
const mountains = TREKKING.filter((item) => ["kilimanjaro", "mount-meru", "ol-doinyo-lengai", "usambara-mountains", "udzungwa-mountains", "uluguru-mountains", "mahale-mountains", "rungwe", "pare-mountains", "kitulo", "kipengere", "hanang"].includes(item.slug));

function renderCards(items, kind = "destination") {
  return items.map((item) => {
    const href = kind === "mountain" ? `/trekking/${item.slug}` : kind === "coast" ? `/coasts/${item.slug}` : `/destinations/${item.slug}`;
    const thumb = item.thumb || item.hero;

    return (
      <Link to={href} key={item.slug} className="listing-card">
        <div className="listing-card-img">
          <img src={thumb} alt={item.name} />
          <div className="listing-card-fade" />
          <div className="listing-card-region">{item.region}</div>
        </div>
        <div className="listing-card-body">
          <h3>{item.name}</h3>
          <p className="listing-card-tagline">{item.tagline}</p>
          <p className="listing-card-desc">{item.desc.slice(0, 120)}...</p>
          {kind === "mountain" ? (
            <div className="listing-card-highlights">
              <span className="tag">{item.elevation}</span>
              <span className="tag">{item.duration}</span>
              <span className="tag">{item.difficulty}</span>
            </div>
          ) : (
            <div className="listing-card-highlights">
              {item.highlights.slice(0, 3).map((h) => (
                <span key={h} className="tag">{h}</span>
              ))}
            </div>
          )}
          <span className="listing-card-cta">Explore {item.short}</span>
        </div>
      </Link>
    );
  });
}

export default function DestinationsPage() {
  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85" alt="Tanzania" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">Where to go</div>
          <h1>Tanzania <em>Destinations</em>.</h1>
          <p>From the endless Serengeti plains to Zanzibar's turquoise shores, every corner of Tanzania tells a story.</p>
        </div>
      </section>

      <section className="section page-intro-section">
        <div className="container">
          <div className="page-intro">
            <div className="page-intro-content">
              <div className="eyebrow">Destination guide</div>
              <h2>The shorelines, safari parks and mountains that make Tanzania unforgettable.</h2>
              <p>Whether you want to track the Great Migration, summit Africa's highest peak, or end with a beach stay on the coast, Tanzania offers a route for every pace and style of travel.</p>
            </div>
            <div className="page-intro-stats">
              <div className="page-intro-stat"><strong>12+</strong><span>signature regions to explore</span></div>
              <div className="page-intro-stat"><strong>4</strong><span>distinct travel styles: safari, trekking, coast, and culture</span></div>
            </div>
          </div>

          <div className="page-feature-grid">
            {destinationHighlights.map((item) => (
              <div className="page-feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.stat}</span>
              </div>
            ))}
            <Link to="/coasts" className="page-feature-card" style={{ textDecoration: "none" }}>
              <h3>Coastal destinations</h3>
              <p>Explore Zanzibar, Pemba, Mafia, Tanga and Kilwa with dedicated pages and practical travel details.</p>
              <span>Island escapes & heritage coast</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">All national parks</div>
            <h2>Explore the parks that define Tanzania's wildlife heritage.</h2>
          </div>
          <div className="listing-grid">{renderCards(nationalParks)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Mountains</div>
            <h2>Climb the peaks that shape Tanzania's adventure landscape.</h2>
          </div>
          <div className="listing-grid">{renderCards(mountains, "mountain")}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Islands</div>
            <h2>Unwind on Tanzania's island escapes and coastal retreats.</h2>
          </div>
          <div className="listing-grid">{renderCards(islands, "coast")}</div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Not sure where to go?</h2>
            <p>Tell us what you're hoping to experience and we'll build the perfect Tanzania itinerary for you.</p>
          </div>
          <Link to="/contact" className="btn-gold">Start planning</Link>
        </div>
      </section>
    </div>
  );
}
