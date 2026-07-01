import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ITINERARIES } from "../data/siteData";
import "./ListingPage.css";

const initialFilters = {
  priceMax: 10000,
  tourMax: 21,
  tripType: [],
  safariType: [],
  startFrom: [],
  standardLevel: [],
  specializedTours: [],
};

const tripTypeOptions = ["Private", "Shared"];
const safariTypeOptions = ["Lodge", "Camping", "Fly-in"];
const startFromOptions = ["Arusha", "Dar es Salaam", "Moshi", "Nairobi", "Zanzibar"];
const standardLevelOptions = ["Budget", "Mid Range", "Luxury", "Luxury++"];
const specializedToursOptions = [
  "Fly-in safaris",
  "Beach time",
  "Mountain climbing",
  "Safari & Beach",
  "Safari & Kilimanjaro",
  "Chimp trekking",
  "Balloon Safari",
  "Night game drives",
  "Horseback Safaris",
  "Canoe safaris",
  "Biking/Cycling",
  "Safari & Cultural",
];

function toggleSelection(current, value) {
  if (current.includes(value)) return current.filter((item) => item !== value);
  return [...current, value];
}

function filterItineraries(itineraries, filters) {
  return itineraries.filter((itinerary) => {
    const matchesPrice = itinerary.priceValue <= filters.priceMax;
    const matchesTour = filters.tourMax === 21 || itinerary.days <= filters.tourMax;
    const matchesTripType = filters.tripType.length === 0 || filters.tripType.includes(itinerary.tripMode);
    const matchesSafariType = filters.safariType.length === 0 || filters.safariType.includes(itinerary.safariType);
    const matchesStart = filters.startFrom.length === 0 || filters.startFrom.includes(itinerary.startFrom);
    const matchesStandard = filters.standardLevel.length === 0 || filters.standardLevel.includes(itinerary.standardLevel);
    const matchesSpecialized =
      filters.specializedTours.length === 0 ||
      filters.specializedTours.some((tour) => itinerary.specializedTours?.includes(tour));

    return matchesPrice && matchesTour && matchesTripType && matchesSafariType && matchesStart && matchesStandard && matchesSpecialized;
  });
}

export default function ItinerariesPage() {
  const [filters, setFilters] = useState(initialFilters);
  const filteredItineraries = useMemo(() => filterItineraries(ITINERARIES, filters), [filters]);

  const toggleFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: toggleSelection(current[key], value),
    }));
  };

  const resetFilters = () => setFilters(initialFilters);

  const startFromCounts = useMemo(() => {
    return startFromOptions.reduce((acc, place) => {
      acc[place] = ITINERARIES.filter((item) => item.startFrom === place).length;
      return acc;
    }, {});
  }, []);

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
              <div className="filter-top-bar">
                <p className="filter-label">Filters</p>
                <div className="filter-tag-row">
                  <button type="button" className="filter-pill active">To: Tanzania</button>
                  <button type="button" className="filter-pill clear" onClick={resetFilters}>Clear all filters</button>
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Where you want to go?</div>
                <div className="filter-location-fields">
                  <div className="location-field">
                    <span className="location-label">Tanzania</span>
                  </div>
                  <div className="location-field">
                    <span className="location-label">When?</span>
                  </div>
                  <div className="location-field">
                    <span className="location-label">Travelers</span>
                  </div>
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Price</div>
                <div className="slider-track">
                  <input
                    type="range"
                    min="10"
                    max="10000"
                    value={filters.priceMax}
                    onChange={(event) => setFilters((current) => ({ ...current, priceMax: Number(event.target.value) }))}
                  />
                </div>
                <div className="slider-labels">
                  <span>$10</span>
                  <span>$10000+</span>
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Tour Length</div>
                <div className="slider-track">
                  <input
                    type="range"
                    min="1"
                    max="21"
                    value={filters.tourMax}
                    onChange={(event) => setFilters((current) => ({ ...current, tourMax: Number(event.target.value) }))}
                  />
                </div>
                <div className="slider-labels">
                  <span>1-Day</span>
                  <span>21+ Day</span>
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Trip Type</div>
                <div className="checkbox-group">
                  {tripTypeOptions.map((option) => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.tripType.includes(option)}
                        onChange={() => toggleFilter("tripType", option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Safari Type</div>
                <div className="checkbox-group">
                  {safariTypeOptions.map((option) => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.safariType.includes(option)}
                        onChange={() => toggleFilter("safariType", option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Starting From</div>
                <div className="checkbox-group">
                  {startFromOptions.map((option) => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.startFrom.includes(option)}
                        onChange={() => toggleFilter("startFrom", option)}
                      />
                      <span>{option} <small>({startFromCounts[option] || 0})</small></span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Standard Level</div>
                <div className="checkbox-group">
                  {standardLevelOptions.map((option) => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.standardLevel.includes(option)}
                        onChange={() => toggleFilter("standardLevel", option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-section-title">Specialized Tours</div>
                <div className="filter-pill-list">
                  {specializedToursOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`filter-pill ${filters.specializedTours.includes(option) ? "active" : ""}`}
                      onClick={() => toggleFilter("specializedTours", option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="itinerary-results">
              <div className="itinerary-results-head">
                <div>
                  <p className="eyebrow eyebrow-dark">Safari packages</p>
                  <h2>Showing {filteredItineraries.length} safari packages</h2>
                </div>
                <span className="itinerary-count">{filteredItineraries.length} / {ITINERARIES.length}</span>
              </div>

              {filteredItineraries.length > 0 ? (
                <div className="itinerary-card-grid">
                  {filteredItineraries.map((it) => (
                    <Link to={`/itineraries/${it.slug}`} key={it.slug} className="itinerary-card">
                      <div className="itinerary-card-image">
                        <img src={it.hero || it.thumb} alt={it.title} />
                        <div className="itinerary-card-header">
                          {it.specializedTours?.slice(0, 3).map((tag) => (
                            <span key={tag} className="result-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="itinerary-card-body">
                        <div className="itinerary-card-topline">{it.region}</div>
                        <h3>{it.title}</h3>
                        <div className="rating-row">
                          <span>★ ★ ★ ★ ★</span>
                          <small>5/5</small>
                        </div>
                        <div className="price-row">
                          <strong>{it.priceValue ? `$${it.priceValue.toLocaleString()} pp` : it.price}</strong>
                        </div>
                        <div className="itinerary-card-meta">
                          <span>{it.days} Days - {it.days - 1} Nights</span>
                          <span>You Visit: {it.startFrom}</span>
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
    </div>
  );
}
