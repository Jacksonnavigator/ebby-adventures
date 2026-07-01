import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ITINERARIES } from "../data/siteData";
import { buildFilterOptions, filterItineraries } from "../data/itineraryFilters";
import "./ListingPage.css";

const initialFilters = {
  price: "all",
  length: "all",
  tripType: "all",
  safariStyle: "all",
  startFrom: "all",
  standardLevel: "all",
  specialization: "all",
};

export default function ItinerariesPage() {
  const [filters, setFilters] = useState(initialFilters);
  const filterGroups = useMemo(() => buildFilterOptions(ITINERARIES), []);
  const filteredItineraries = useMemo(() => filterItineraries(ITINERARIES, filters), [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const resetFilters = () => setFilters(initialFilters);

  return (
    <div>
      <section className="listing-hero">
        <div className="listing-hero-bg">
          <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=85" alt="Tanzania safari" />
          <div className="listing-hero-overlay" />
        </div>
        <div className="container listing-hero-content">
          <div className="eyebrow eyebrow-light">Our journeys</div>
          <h1>Tanzania <em>Itineraries</em>.</h1>
          <p>Carefully crafted journeys by specialists who live and breathe Tanzania. Ready to be tailored to your dates and group.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="itinerary-shell">
            <aside className="itinerary-filters">
              <div className="itinerary-filters-head">
                <h2>Refine your trip</h2>
                <button type="button" className="filter-reset" onClick={resetFilters}>Reset</button>
              </div>
              <p className="itinerary-filters-copy">Narrow by travel style, pace, and experience so the best-fitting journey rises to the top.</p>

              {filterGroups.map((group) => (
                <div key={group.key} className="filter-group">
                  <label htmlFor={group.key}>{group.label}</label>
                  <select
                    id={group.key}
                    value={filters[group.key]}
                    onChange={(event) => handleFilterChange(group.key, event.target.value)}
                  >
                    {group.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </aside>

            <div className="itinerary-results">
              <div className="itinerary-results-head">
                <div>
                  <p className="eyebrow eyebrow-dark">Safari packages</p>
                  <h2>Browse our best-loved journeys</h2>
                </div>
                <span className="itinerary-count">{filteredItineraries.length} of {ITINERARIES.length} itineraries</span>
              </div>

              {filteredItineraries.length > 0 ? (
                <div className="itin-full-grid">
                  {filteredItineraries.map((it) => (
                    <Link to={`/itineraries/${it.slug}`} key={it.slug} className="itin-full-card">
                      <div className="itin-full-img">
                        <img src={it.thumb} alt={it.title} />
                        <div className="itin-full-days">{it.days} days</div>
                      </div>
                      <div className="itin-full-body">
                        <div className="itin-full-region">{it.region}</div>
                        <h3>{it.title}</h3>
                        <p>{it.desc}</p>
                        <div className="itin-full-tags">
                          {it.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                        <div className="itin-full-footer">
                          <strong>{it.price}</strong>
                          <span className="listing-card-cta">View itinerary</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="itinerary-empty">
                  <h3>No itineraries match those filters yet.</h3>
                  <p>Try widening one of the selections or reset the filters to view the full collection.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="listing-cta-band">
        <div className="container listing-cta-inner">
          <div>
            <h2>Don't see what you're <em>looking for</em>?</h2>
            <p>All our itineraries are fully customisable - or we can design something entirely bespoke, just for you.</p>
          </div>
          <Link to="/contact" className="btn-gold">Plan a custom trip</Link>
        </div>
      </section>
    </div>
  );
}
