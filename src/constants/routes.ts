/**
 * Route Constants
 * Central definition of all application routes
 * Imported from: src/constants/routes.ts
 */

export const ROUTES = {
  // Main pages
  HOME: "/",
  LANDING: "/talent-unwrapped/",

  // Podcast editions - NEW unified route with :edition param
  EDITION_BASE: "/edition",
  SINGAPORE: "/edition/singapore",
  DUBAI: "/edition/dubai",
  SRI_LANKA: "/edition/sri-lanka",
  EDITION: (edition: "singapore" | "dubai" | "sri-lanka") => `/edition/${edition}`,

  // Legacy routes (for backward compatibility - now redirect)
  SINGAPORE_LEGACY: "/singapore",
  DUBAI_LEGACY: "/dubai",

  // Episode pages
  FULL_EPISODE: "/episode",
  EPISODE: (episodeId: string | number) => `/episode/${episodeId}`,

  // Other pages
  SCHEDULE: "/schedule",

  // Admin routes (for future use)
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_EPISODES: "/admin/episodes",
  ADMIN_SPEAKERS: "/admin/speakers",
} as const;
