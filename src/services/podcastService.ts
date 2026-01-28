// Podcast Service - API calls for podcast data
import { Podcast } from "../types";

const API_BASE = process.env.REACT_APP_API_BASE || "https://api.example.com";

export const podcastService = {
  // Get all podcasts
  getAllPodcasts: async (): Promise<Podcast[]> => {
    try {
      const response = await fetch(`${API_BASE}/podcasts`);
      if (!response.ok) throw new Error("Failed to fetch podcasts");
      return await response.json();
    } catch (error) {
      console.error("Error fetching podcasts:", error);
      return [];
    }
  },

  // Get podcast by ID
  getPodcastById: async (id: number): Promise<Podcast | null> => {
    try {
      const response = await fetch(`${API_BASE}/podcasts/${id}`);
      if (!response.ok) throw new Error("Failed to fetch podcast");
      return await response.json();
    } catch (error) {
      console.error("Error fetching podcast:", error);
      return null;
    }
  },

  // Search podcasts
  searchPodcasts: async (query: string): Promise<Podcast[]> => {
    try {
      const response = await fetch(`${API_BASE}/podcasts/search?q=${query}`);
      if (!response.ok) throw new Error("Failed to search podcasts");
      return await response.json();
    } catch (error) {
      console.error("Error searching podcasts:", error);
      return [];
    }
  },
};
