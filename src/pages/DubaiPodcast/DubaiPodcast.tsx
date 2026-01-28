import { PodcastEditionPage } from "../PodcastEditionPage";
import { useEpisodeEdition } from "../../hooks/useEpisodeEdition";

/**
 * Dubai Podcast Edition Page
 * Shows all podcast episodes from Dubai edition
 * Delegates layout and episode rendering to shared PodcastEditionPage component
 * Manages edition-specific logic via useEpisodeEdition hook
 */
export const DubaiPodcast = (): JSX.Element => {
  const { episodes, handleViewEpisode } = useEpisodeEdition("dubai");

  return (
    <PodcastEditionPage
      edition="dubai"
      episodes={episodes}
      onViewEpisode={handleViewEpisode}
    />
  );
};
