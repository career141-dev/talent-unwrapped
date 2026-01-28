/**
 * API Configuration
 * Centralized configuration for API endpoints and environment variables
 */

export const API_CONFIG = {
  // Base URL for all API requests
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",

  // API Endpoints
  ENDPOINTS: {
    // Podcast endpoints
    PODCASTS: "/podcasts",
    PODCAST_DETAIL: (id: string | number) => `/podcasts/${id}`,
    PODCAST_SEARCH: "/podcasts/search",
    EPISODES: "/episodes",
    EPISODE_DETAIL: (id: string | number) => `/episodes/${id}`,

    // Contact endpoints
    CONTACT_SUBMIT: "/contact",
    CONTACT_LIST: "/contact/submissions", // For future admin panel

    // Auth endpoints (for future admin panel)
    AUTH_LOGIN: "/auth/login",
    AUTH_LOGOUT: "/auth/logout",
    AUTH_REFRESH: "/auth/refresh",
    AUTH_PROFILE: "/auth/profile",
  },

  // Request timeout in milliseconds
  TIMEOUT: 30000,

  // Retry configuration
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000, // milliseconds
    BACKOFF_MULTIPLIER: 2,
  },

  // HTTP status codes that should trigger retry
  RETRYABLE_STATUS_CODES: [408, 429, 500, 502, 503, 504],
};

/**
 * Get full API URL for an endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
