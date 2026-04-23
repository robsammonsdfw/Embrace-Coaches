import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CoachHeader from './components/CoachHeader';
import CoachHero from './components/CoachHero';
import CoachAudienceGrid from './components/CoachAudienceGrid';
import FeaturePillars from './components/FeaturePillars';
import Footer from './components/Footer';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CoachPortal() {
  return (
    <div className="min-h-screen bg-white">
      <CoachHeader />
      <main className="pt-0">
        <CoachHero />
        <CoachAudienceGrid />
        <FeaturePillars />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CoachPortal />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
