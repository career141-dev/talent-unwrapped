import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PodcastEditionPage } from "./PodcastEditionPage";
import { useEpisodeEdition } from "../../hooks/useEpisodeEdition";

type EditionType = "singapore" | "dubai";

/**
 * PodcastEditionWrapper - Smooth Edition Switching Handler
 *
 * This wrapper component enables seamless switching between Singapore and Dubai editions
 * without page remount or white flash. Key features:
 *
 * - Single component instance (no unmount/remount on edition change)
 * - Validates edition param and redirects invalid values
 * - Smooth scroll to top when edition changes
 * - Data remains cached in useMemo (no API refetch)
 * - Minimal re-renders on edition switch
 */
export const PodcastEditionWrapper = (): JSX.Element | null => {
  const { edition } = useParams<{ edition: string }>();
  const navigate = useNavigate();

  // Validate edition is one of the allowed values
  const validEdition = useMemo(() => {
    const isValid = edition === "singapore" || edition === "dubai";

    if (!isValid && edition) {
      // Invalid edition - redirect to singapore
      navigate("/edition/singapore", { replace: true });
      return null;
    }

    return isValid ? (edition as EditionType) : null;
  }, [edition, navigate]);

  // Load data for current edition (hook handles caching internally)
  const { episodes, handleViewEpisode } = useEpisodeEdition(
    validEdition || "singapore",
  );

  // Smooth scroll to top when edition changes
  useEffect(() => {
    if (validEdition) {
      const editionTitle = validEdition.charAt(0).toUpperCase() + validEdition.slice(1);
      document.title = `Talent Unwrapped - ${editionTitle} Edition`;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [validEdition]);

  // Prevent flash by not rendering until edition is validated
  if (!validEdition) {
    return null;
  }

  return (
    <PodcastEditionPage
      edition={validEdition}
      episodes={episodes}
      onViewEpisode={handleViewEpisode}
    />
  );
};
