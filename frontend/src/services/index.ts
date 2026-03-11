/**
 * Services Module
 * Centralized exports for all service layer modules
 */

// API client and configuration
export { apiClient, API_CONFIG, getApiUrl } from "./api";
export type {
  RequestInterceptor,
  ResponseInterceptor,
  ErrorInterceptor,
} from "./api";

// Domain-specific services
export {
  podcastService,
  getAllPodcasts,
  getPodcastById,
  searchPodcasts,
  getEpisodes,
  getEpisodeById,
} from "./domains/podcast.service";

export {
  contactService,
  submitContactForm,
  getContactSubmissions,
  deleteContactSubmission,
} from "./domains/contact.service";

export {
  authService,
  login,
  logout,
  refreshToken,
  getUserProfile,
  isAuthenticated,
  getAuthToken,
} from "./domains/auth.service";

export type {
  LoginCredentials,
  AuthResponse,
  UserProfile,
} from "./domains/auth.service";
