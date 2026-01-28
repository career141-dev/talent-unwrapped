/**
 * API Constants
 * API endpoints, configuration, and related constants
 * Imported from: src/constants/api.ts
 */

export const API_ENDPOINTS = {
  // Podcast endpoints
  PODCASTS: "/api/podcasts",
  PODCAST_DETAIL: (id: string | number) => `/api/podcasts/${id}`,

  // Episode endpoints
  EPISODES: "/api/episodes",
  EPISODE_DETAIL: (id: string | number) => `/api/episodes/${id}`,

  // Speaker endpoints
  SPEAKERS: "/api/speakers",
  SPEAKER_DETAIL: (id: string | number) => `/api/speakers/${id}`,

  // Contact endpoints
  CONTACT: "/api/contact",
  CONTACT_SUBMIT: "/api/contact/submit",

  // Admin endpoints (for future use)
  ADMIN_EPISODES: "/api/admin/episodes",
  ADMIN_SPEAKERS: "/api/admin/speakers",
  ADMIN_CONTACT_SUBMISSIONS: "/api/admin/contact-submissions",
};

export const API_CONFIG = {
  // Timeout in milliseconds
  TIMEOUT: 30000,

  // Retry configuration
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  RETRY_BACKOFF: 2,

  // Headers
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
};
