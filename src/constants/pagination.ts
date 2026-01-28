/**
 * Pagination Constants
 * Page sizes, limits, and pagination-related configuration
 * Imported from: src/constants/pagination.ts
 */

export const PAGINATION = {
  // Episode listing
  EPISODES_PER_PAGE: 12,
  EPISODES_LOAD_MORE: 6,

  // Podcast listing
  PODCASTS_PER_PAGE: 9,
  PODCASTS_LOAD_MORE: 6,

  // Speaker listing
  SPEAKERS_PER_PAGE: 8,
  SPEAKERS_LOAD_MORE: 4,

  // Search results
  SEARCH_RESULTS_PER_PAGE: 10,

  // Admin pages
  ADMIN_ITEMS_PER_PAGE: 25,
};

export const LIMITS = {
  // Form field limits
  NAME_MAX_LENGTH: 50,
  EMAIL_MAX_LENGTH: 100,
  COMPANY_MAX_LENGTH: 100,
  MESSAGE_MAX_LENGTH: 500,
  PHONE_MAX_LENGTH: 20,

  // Content limits
  TITLE_MAX_LENGTH: 200,
  DESCRIPTION_MAX_LENGTH: 1000,
  BIO_MAX_LENGTH: 500,

  // File uploads (for future use)
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_IMAGE_WIDTH: 1920,
  MAX_IMAGE_HEIGHT: 1440,
};

export const TIMEOUTS = {
  // Toast/notification timeout in milliseconds
  TOAST_DURATION: 5000,

  // Animation duration
  FADE_DURATION: 300,
  SLIDE_DURATION: 300,

  // Auto-close modal
  AUTO_CLOSE_MODAL: 3000,

  // Video player auto-advance
  VIDEO_AUTO_ADVANCE: 5000,
};

export const DEBOUNCE_DELAYS = {
  // Search debounce in milliseconds
  SEARCH: 300,

  // Window resize debounce
  RESIZE: 250,

  // Scroll debounce
  SCROLL: 150,
};
