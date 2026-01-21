import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DubaiPodcast } from "./pages/DubaiPodcast";
import { SingaporePodcast } from "./pages/SingaporePodcast";
import { FullEpisode } from "./pages/FullEpisode";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Root (Default Initial View) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Edition Pages - Accessible only through navigation */}
        <Route path="/singapore" element={<SingaporePodcast />} />
        <Route path="/dubai" element={<DubaiPodcast />} />
        
        {/* Full Episode Details Page - Accessible only through navigation */}
        <Route path="/episode/:episodeId" element={<FullEpisode />} />
        
        {/* Catch-all route - Redirect any unknown routes to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
