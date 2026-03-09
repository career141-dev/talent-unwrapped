import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PodcastEditionPage } from "./PodcastEditionPage";
import { useEpisodeEdition } from "../hooks/useEpisodeEdition";

type EditionType = "singapore" | "dubai" | "sri-lanka";

/**
 * PodcastEditionWrapper
 *
 * This is a "smart" wrapper that sits between the router and the actual
 * PodcastEditionPage. It handles two things:
 *
 *   1. Validates the :edition URL param — only "singapore", "dubai", and
 *      "sri-lanka" are valid. Anything else redirects to /edition/singapore.
 *
 *   2. Loads the episode list for the current edition using the
 *      `useEpisodeEdition` hook, which caches the data so switching
 *      editions is instant (no flash, no refetch).
 *
 * Why a wrapper instead of doing this in PodcastEditionPage directly?
 * Because it lets the page component stay simple and "dumb" — it just
 * receives data as props and renders it.
 */
export const PodcastEditionWrapper = (): JSX.Element | null => {
  const { edition } = useParams<{ edition: string }>();
  const navigate = useNavigate();

  // Validate edition is one of the allowed values
  const validEdition = useMemo(() => {
    const isValid = edition === "singapore" || edition === "dubai" || edition === "sri-lanka";

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
