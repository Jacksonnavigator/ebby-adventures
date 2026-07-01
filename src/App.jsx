import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { COMPANY } from "./data/siteData";
import HomePage             from "./pages/HomePage";
import DestinationsPage     from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import CoastsPage           from "./pages/CoastsPage";
import CoastDetailPage      from "./pages/CoastDetailPage";
import ExperiencesPage      from "./pages/ExperiencesPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import ItinerariesPage      from "./pages/ItinerariesPage";
import ItineraryDetailPage  from "./pages/ItineraryDetailPage";
import KilimanjaroPage      from "./pages/KilimanjaroPage";
import KiliRouteDetailPage  from "./pages/KiliRouteDetailPage";
import TrekkingPage         from "./pages/TrekkingPage";
import TrekkingDetailPage   from "./pages/TrekkingDetailPage";
import AboutPage            from "./pages/AboutPage";
import ContactPage          from "./pages/ContactPage";
import GalleryPage          from "./pages/GalleryPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                            element={<HomePage />} />
          <Route path="/destinations"                element={<DestinationsPage />} />
          <Route path="/destinations/:slug"          element={<DestinationDetailPage />} />
          <Route path="/coasts"                      element={<CoastsPage />} />
          <Route path="/coasts/:slug"                element={<CoastDetailPage />} />
          <Route path="/experiences"                 element={<ExperiencesPage />} />
          <Route path="/experiences/:slug"           element={<ExperienceDetailPage />} />
          <Route path="/itineraries"                 element={<ItinerariesPage />} />
          <Route path="/itineraries/:slug"           element={<ItineraryDetailPage />} />
          <Route path="/kilimanjaro"                 element={<Navigate to="/trekking/kilimanjaro" replace />} />
          <Route path="/trekking"                    element={<TrekkingPage />} />
          <Route path="/trekking/kilimanjaro"        element={<KilimanjaroPage />} />
          <Route path="/trekking/kilimanjaro/:routeSlug" element={<KiliRouteDetailPage />} />
          <Route path="/trekking/:slug"             element={<TrekkingDetailPage />} />
          <Route path="/about"                       element={<AboutPage />} />
          <Route path="/gallery"                     element={<GalleryPage />} />
          <Route path="/contact"                     element={<ContactPage />} />
          <Route path="*"                            element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-float-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="70" height="70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.001 3.2a12.8 12.8 0 1 0 8.885 3.716A12.8 12.8 0 0 0 16.001 3.2Zm0 23.654a10.786 10.786 0 0 1-5.718-1.57l-.407-.242-3.26.967.87-3.175-.264-.413A10.8 10.8 0 1 1 26.8 16.001a10.757 10.757 0 0 1-10.8 10.853Zm5.874-7.805c-.319-.16-1.887-.936-2.182-1.039-.295-.106-.51-.159-.726.16-.215.319-.834 1.039-1.021 1.249-.188.21-.377.236-.695.08-.319-.159-1.347-.497-2.565-1.585-.949-.847-1.59-1.894-1.775-2.214-.186-.319-.02-.49.14-.648.144-.145.319-.378.478-.568.157-.19.21-.319.319-.53.107-.21.053-.397-.026-.557-.08-.159-.726-1.754-.995-2.409-.26-.64-.525-.555-.726-.565-.19-.008-.41-.009-.626-.009-.21 0-.55.078-.84.37-.296.319-1.13 1.104-1.13 2.694s1.157 3.121 1.319 3.337c.16.21 2.28 3.48 5.522 4.868.773.333 1.375.533 1.844.683.775.268 1.479.23 2.035.14.62-.104 1.887-.772 2.156-1.519.27-.746.27-1.387.189-1.52-.075-.135-.282-.21-.601-.37Z" />
          </svg>
        </span>
      </a>
    </>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "120px 40px", textAlign: "center", minHeight: "60vh" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: "3rem", marginBottom: "16px" }}>404</h1>
      <p style={{ color: "var(--muted)", marginBottom: "28px" }}>Sorry, that page doesn't exist.</p>
      <a href="/" className="btn-gold" style={{ textDecoration: "none" }}>Back to home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
