import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { EpisodesPage } from "./pages/Episodes";
import { PodcastEditionWrapper } from "./pages/PodcastEditions/PodcastEditionWrapper";
import { FullEpisode } from "./pages/FullEpisode";
import { Schedule } from "./pages/Schedule";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryTest = () => {
  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dvhxc6y0z' } });

  // Use this sample image or upload your own via the Media Library
  const img = cld
    .image('cld-sample-5')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Cloudinary Integration Test</h1>
      <div className="rounded-xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
        <AdvancedImage cldImg={img} />
      </div>
      <p className="mt-4 text-zinc-400">Sample image (cld-sample-5) with auto-optimization</p>
    </div>
  );
};

export const App = (): JSX.Element => {
  return (
    <Router>
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

        {/* Cloudinary Integration Test Route */}
        <Route path="/cloudinary-test" element={<CloudinaryTest />} />

        {/* Catch-all route - Redirect any unknown routes to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
