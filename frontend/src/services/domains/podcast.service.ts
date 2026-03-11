/**
 * Podcast Service - Domain-specific API calls for podcast data
 * Uses the centralized HTTP client for all API requests
 */

import { apiClient, API_CONFIG } from "../api";
import { Podcast, Episode } from "../../types";

/**
 * Get all podcasts
 */
export const getAllPodcasts = async (): Promise<Podcast[]> => {
  try {
    const data = await apiClient.get<Podcast[]>(API_CONFIG.ENDPOINTS.PODCASTS);
    return data || [];
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return [];
  }
};

/**
 * Get a single podcast by ID
 */
export const getPodcastById = async (
  id: string | number,
): Promise<Podcast | null> => {
  try {
    const data = await apiClient.get<Podcast>(
      API_CONFIG.ENDPOINTS.PODCAST_DETAIL(id),
    );
    return data || null;
  } catch (error) {
    console.error(`Error fetching podcast ${id}:`, error);
    return null;
  }
};

/**
 * Search podcasts by query
 */
export const searchPodcasts = async (query: string): Promise<Podcast[]> => {
  try {
    const data = await apiClient.get<Podcast[]>(
      `${API_CONFIG.ENDPOINTS.PODCAST_SEARCH}?q=${encodeURIComponent(query)}`,
    );
    return data || [];
  } catch (error) {
    console.error(`Error searching podcasts for "${query}":`, error);
    return [];
  }
};

/**
 * Get all episodes (optionally filtered by edition)
 */
export const getEpisodes = async (
  edition?: "dubai" | "singapore",
): Promise<Episode[]> => {
  try {
    const endpoint = edition
      ? `${API_CONFIG.ENDPOINTS.EPISODES}?edition=${edition}`
      : API_CONFIG.ENDPOINTS.EPISODES;
    const data = await apiClient.get<Episode[]>(endpoint);
    return data || [];
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
};

/**
 * Get a single episode by ID
 */
export const getEpisodeById = async (
  id: string | number,
): Promise<Episode | null> => {
  try {
    const data = await apiClient.get<Episode>(
      API_CONFIG.ENDPOINTS.EPISODE_DETAIL(id),
    );
    return data || null;
  } catch (error) {
    console.error(`Error fetching episode ${id}:`, error);
    return null;
  }
};

/**
 * Podcast service object (for backward compatibility)
 */
export const podcastService = {
  getAllPodcasts,
  getPodcastById,
  searchPodcasts,
  getEpisodes,
  getEpisodeById,
};
