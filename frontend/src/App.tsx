/**
 * App.tsx — The main routing file.
 *
 * Think of this as the "switchboard" of the app. Every URL the user visits
 * gets matched to a Page component here. Pages live in src/pages/.
 *
 * All pages are lazy-loaded (loaded only when visited) to keep the
 * initial bundle small and the site fast.
 *
 * Global wrappers applied here:
 *   - ErrorBoundary: catches crashes so the whole app doesn't go blank
 *   - Suspense: shows a loading spinner while a page is loading
 *   - ScrollToTop: auto-scrolls to the top on every navigation
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const EpisodesPage = lazy(() => import("./pages/EpisodesPage").then(module => ({ default: module.EpisodesPage })));
const PodcastEditionWrapper = lazy(() => import("./pages/PodcastEditionWrapper").then(module => ({ default: module.PodcastEditionWrapper })));
const FullEpisodePage = lazy(() => import("./pages/FullEpisodePage").then(module => ({ default: module.FullEpisodePage })));
const SchedulePage = lazy(() => import("./pages/SchedulePage").then(module => ({ default: module.SchedulePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(module => ({ default: module.NotFoundPage })));
import { ErrorBoundary, LoadingIndicator, ScrollToTopButton } from "./components/common";

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

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("preloader-hidden");
    // Remove from DOM after transition completes to save resources
    setTimeout(() => {
      preloader.remove();
    }, 600);
  }
};

export const App = (): JSX.Element => {
  useEffect(() => {
    removePreloader();
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingIndicator />}>
          <ScrollToTop />
          <div className="min-h-screen w-full relative bg-white">
            <Routes>
              {/* Landing Page - Root (Default Initial View) */}
              <Route path="/" element={<HomePage />} />

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
              <Route path="/schedule" element={<SchedulePage />} />

              {/* Full Episode Details Page - Accessible only through navigation */}
              <Route path="/episode/:episodeId" element={<FullEpisodePage />} />

              {/* Catch-all route - Show custom 404 page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ScrollToTopButton />
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};
