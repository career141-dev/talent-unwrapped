import { PodcastEditionPage } from "../PodcastEditions/PodcastEditionPage";
import { useEpisodeEdition } from "../../hooks/useEpisodeEdition";

/**
 * Singapore Podcast Edition Page
 * Shows all podcast episodes from Singapore edition
 * Delegates layout and episode rendering to shared PodcastEditionPage component
 * Manages edition-specific logic via useEpisodeEdition hook
 */
export const SingaporePodcast = (): JSX.Element => {
  const { episodes, handleViewEpisode } = useEpisodeEdition("singapore");

  return (
    <PodcastEditionPage
      edition="singapore"
      episodes={episodes}
      onViewEpisode={handleViewEpisode}
    />
  );
};
