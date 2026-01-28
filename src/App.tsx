import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { PodcastEditionWrapper } from "./pages/PodcastEditions/PodcastEditionWrapper";
import { FullEpisode } from "./pages/FullEpisode";
import { Schedule } from "./pages/Schedule";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Root (Default Initial View) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Single route for both Singapore & Dubai editions - NO remount on switch */}
        <Route path="/edition/:edition" element={<PodcastEditionWrapper />} />
        
        {/* Legacy routes - redirect for backward compatibility */}
        <Route path="/singapore" element={<Navigate to="/edition/singapore" replace />} />
        <Route path="/dubai" element={<Navigate to="/edition/dubai" replace />} />
        
        {/* Schedule Page - Accessible from edition pages */}
        <Route path="/schedule" element={<Schedule />} />
        
        {/* Full Episode Details Page - Accessible only through navigation */}
        <Route path="/episode/:episodeId" element={<FullEpisode />} />
        
        {/* Catch-all route - Redirect any unknown routes to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
