import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Episode, EditionType } from "../types";
import { getEpisodesByEdition } from "../data";



interface UseEpisodeEditionReturn {
  episodes: Episode[];
  editionName: string;
  handleViewEpisode: (episodeId: string | number) => void;
}

/**
 * Hook for managing episode data and navigation for a specific podcast edition
 * Encapsulates business logic for episode loading and navigation
 *
 * Features:
 * - Memoizes episodes to prevent unnecessary recalculations
 * - Memoizes edition name formatting
 * - Only recalculates when edition changes
 */
export const useEpisodeEdition = (
  edition: EditionType,
): UseEpisodeEditionReturn => {
  const navigate = useNavigate();

  // Memoize episodes - only recalculate if edition changes
  const episodes = useMemo(() => {
    return getEpisodesByEdition(edition);
  }, [edition]);

  // Memoize edition name formatting
  const editionName = useMemo(() => {
    return edition.charAt(0).toUpperCase() + edition.slice(1);
  }, [edition]);

  // Handle episode navigation with edition context
  const handleViewEpisode = (episodeId: string | number) => {
    navigate(`/episode/${episodeId}`, {
      state: { edition: editionName },
    });
  };

  return {
    episodes,
    editionName,
    handleViewEpisode,
  };
};
