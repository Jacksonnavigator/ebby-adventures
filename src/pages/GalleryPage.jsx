import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";
import imgLeopard from "../assets/gallery_leopard.jpg";
import imgElephants from "../assets/gallery_elephants.jpg";
import imgMaasaiDance from "../assets/gallery_maasai_dance.jpg";
import imgSerengetiGameDrive from "../assets/gallery_serengeti_game_drive.webp";
import imgKiliGroupTrekkers from "../assets/gallery_kili_group_trekkers.jpg";
import imgKiliSunset from "../assets/gallery_kili_sunset.jpg";
import imgLionessPlains from "../assets/gallery_lioness_plains.jpg";
import imgZanzibarShores from "../assets/gallery_zanzibar_shores.jpg";
import imgSafariTravelers from "../assets/gallery_safari_travelers.jpg";
import imgUhuruCelebration from "../assets/gallery_uhuru_celebration.jpg";
import imgNgorongoroSunset from "../assets/gallery_ngorongoro_sunset.jpg";
import imgLionsShade from "../assets/gallery_lions_shade.jpg";
import imgMaasaiBoma from "../assets/gallery_maasai_boma.jpg";

const GALLERY_IMAGES = [
  {
    id: 1,
    url: imgLeopard,
    title: "Leopard in Serengeti",
    category: "wildlife",
    tag: "Wildlife",
    desc: "A majestic leopard resting in the acacia branches of the Serengeti National Park."
  },
  {
    id: 2,
    url: imgElephants,
    title: "Elephants in Tarangire",
    category: "wildlife",
    tag: "Wildlife",
    desc: "A family of African elephants moving under the giant baobab trees of Tarangire."
  },
  {
    id: 3,
    url: imgMaasaiDance,
    title: "Maasai Jumping Dance",
    category: "culture",
    tag: "Culture",
    desc: "Traditional Adumu (jumping dance) performed by Maasai warriors during a cultural visit."
  },
  {
    id: 4,
    url: imgSerengetiGameDrive,
    title: "Safari Game Drive",
    category: "safari",
    tag: "Safari & Treks",
    desc: "A standard 4x4 safari cruiser watching a pride of lions in the Serengeti grassland."
  },
  {
    id: 5,
    url: imgKiliGroupTrekkers,
    title: "Kilimanjaro Expedition Group",
    category: "trekking",
    tag: "Safari & Treks",
    desc: "A group of successful trekkers posing with their guides on the ascent routes of Mount Kilimanjaro."
  },
  {
    id: 6,
    url: imgKiliSunset,
    title: "Roof of Africa Sunset",
    category: "landscape",
    tag: "Landscapes",
    desc: "A golden sunset above the clouds near Uhuru Peak, Mount Kilimanjaro."
  },
  {
    id: 7,
    url: imgLionessPlains,
    title: "Lioness Scanning the Plains",
    category: "wildlife",
    tag: "Wildlife",
    desc: "A focused lioness scouting for prey from a rocky kopje in Serengeti."
  },
  {
    id: 8,
    url: imgZanzibarShores,
    title: "Zanzibar Crystal Shores",
    category: "landscape",
    tag: "Landscapes",
    desc: "The pristine white sands and clear turquoise water of Zanzibar Island."
  },
  {
    id: 9,
    url: imgSafariTravelers,
    title: "Safari Happy Travelers",
    category: "safari",
    tag: "Safari & Treks",
    desc: "Travelers enjoying a scenic bush picnic in the heart of Ngorongoro."
  },
  {
    id: 10,
    url: imgUhuruCelebration,
    title: "Summit Group Celebration",
    category: "trekking",
    tag: "Safari & Treks",
    desc: "Trekking guests celebrating their successful arrival at Uhuru Peak."
  },
  {
    id: 11,
    url: imgNgorongoroSunset,
    title: "Sunset Over Ngorongoro",
    category: "landscape",
    tag: "Landscapes",
    desc: "A breathtaking overview of the Ngorongoro Crater during the golden hour."
  },
  {
    id: 12,
    url: imgLionsShade,
    title: "A Pride of Lions Resting",
    category: "wildlife",
    tag: "Wildlife",
    desc: "Lions seeking shade under the acacia trees during midday heat."
  },
  {
    id: 13,
    url: imgMaasaiBoma,
    title: "Maasai Village Tour",
    category: "culture",
    tag: "Culture",
    desc: "Exploring the traditional huts (bomas) and learning about the lifestyle of the Maasai people."
  }
];

const FILTER_CATEGORIES = [
  { value: "all", label: "All Photos" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscape", label: "Landscapes" },
  { value: "culture", label: "Culture" },
  { value: "safari", label: "Safaris" },
  { value: "trekking", label: "Trekking" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(GALLERY_IMAGES);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(GALLERY_IMAGES);
    } else {
      setFilteredImages(GALLERY_IMAGES.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  // Handle keyboard inputs for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-bg">
          <img src="https://ebbyadventuresandsafaris.co.tz/wp-content/uploads/2025/08/pexels-keeganjchecks-14524363-scaled.jpg" alt="Tanzania landscape" />
          <div className="home-hero-overlay" />
        </div>
        <div className="gallery-hero-content">
          <div className="home-hero-eyebrow">Our Safari Gallery</div>
          <h1>Experience Tanzania’s <em>Wild Beauty</em></h1>
          <p>
            Browse through real moments captured on our trips. From massive elephant herds and resting predators to rich Maasai heritage and Mount Kilimanjaro summit celebrations.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Filters */}
        <div className="gallery-filters">
          {FILTER_CATEGORIES.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn${activeFilter === cat.value ? " active" : ""}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={img.url} alt={img.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{img.tag}</span>
                <h3 className="gallery-item-title">{img.title}</h3>
                <p className="gallery-item-desc">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              &times;
            </button>

            <span className="lightbox-counter">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>

            <button className="lightbox-nav prev" onClick={prevSlide} aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="lightbox-main-img"
            />

            <button className="lightbox-nav next" onClick={nextSlide} aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="lightbox-caption">
              <h3>{filteredImages[lightboxIndex].title}</h3>
              <p>{filteredImages[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Bottom Banner */}
      <section className="section section-dark home-plan" style={{ marginTop: "40px" }}>
        <div className="container home-plan-inner">
          <div className="home-plan-left">
            <div className="eyebrow">Start Your Story</div>
            <h2>Ready to see it for <em>yourself</em>?</h2>
            <p>
              Every photo in this gallery was captured on a journey just like the one we can plan for you. Get in touch with us and let's craft your custom Tanzanian experience.
            </p>
            <a href="https://wa.me/255627619124" target="_blank" rel="noreferrer" className="btn-whatsapp">Chat on WhatsApp now</a>
          </div>
          <div className="home-plan-right">
            <Link to="/contact" className="btn-gold" style={{ display: "inline-block", textDecoration: "none", fontSize: "1.1rem", padding: "16px 40px" }}>
              Plan Your Adventure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
