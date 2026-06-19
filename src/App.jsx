import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage             from "./pages/HomePage";
import DestinationsPage     from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import ExperiencesPage      from "./pages/ExperiencesPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import ItinerariesPage      from "./pages/ItinerariesPage";
import ItineraryDetailPage  from "./pages/ItineraryDetailPage";
import KilimanjaroPage      from "./pages/KilimanjaroPage";
import AboutPage            from "./pages/AboutPage";
import ContactPage          from "./pages/ContactPage";

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
          <Route path="/experiences"                 element={<ExperiencesPage />} />
          <Route path="/experiences/:slug"           element={<ExperienceDetailPage />} />
          <Route path="/itineraries"                 element={<ItinerariesPage />} />
          <Route path="/itineraries/:slug"           element={<ItineraryDetailPage />} />
          <Route path="/kilimanjaro"                 element={<KilimanjaroPage />} />
          <Route path="/about"                       element={<AboutPage />} />
          <Route path="/contact"                     element={<ContactPage />} />
          <Route path="*"                            element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
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
