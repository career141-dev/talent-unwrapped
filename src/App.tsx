import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { LandingPage } from "./pages/LandingPage";

/**
 * Helper component to scroll to top on every route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
import { EpisodesPage } from "./pages/Episodes";
import { PodcastEditionWrapper } from "./pages/PodcastEditions/PodcastEditionWrapper";
import { FullEpisode } from "./pages/FullEpisode";
import { Schedule } from "./pages/Schedule";
import { NotFound } from "./pages/NotFound/NotFound";
import { ErrorBoundary } from "./components/Common";

export const App = (): JSX.Element => {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen w-full relative bg-white">
          <Routes>
            {/* Landing Page - Root (Default Initial View) */}
            <Route path="/" element={<LandingPage />} />

            {/* Episodes Page - List of all episodes */}
            <Route path="/episodes" element={<EpisodesPage />} />

            {/* Single route for both Singapore & Dubai editions - NO remount on switch */}
            <Route path="/edition/:edition" element={<PodcastEditionWrapper />} />

            {/* Legacy routes - redirect for backward compatibility */}
            <Route
              path="/singapore"
              element={<Navigate to="/edition/singapore" replace />}
            />
            <Route
              path="/dubai"
              element={<Navigate to="/edition/dubai" replace />}
            />

            {/* Schedule Page - Accessible from edition pages */}
            <Route path="/schedule" element={<Schedule />} />

            {/* Full Episode Details Page - Accessible only through navigation */}
            <Route path="/episode/:episodeId" element={<FullEpisode />} />

            {/* Catch-all route - Show custom 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};
