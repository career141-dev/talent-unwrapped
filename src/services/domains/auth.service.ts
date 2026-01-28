/**
 * Auth Service - Domain-specific API calls for authentication
 * Prepared for future admin panel integration
 * Uses the centralized HTTP client for all API requests
 */

import { apiClient, API_CONFIG } from "../api";

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Auth response with token
 */
export interface AuthResponse {
  token: string;
  refreshToken?: string;
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

/**
 * User profile
 */
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
}

/**
 * Login user
 */
export const login = async (
  credentials: LoginCredentials
): Promise<{ success: boolean; data?: AuthResponse; message?: string }> => {
  try {
    const response = await apiClient.post<AuthResponse>(
      API_CONFIG.ENDPOINTS.AUTH_LOGIN,
      credentials
    );

    if (response?.token) {
      // Store token in localStorage for future use
      localStorage.setItem("authToken", response.token);
      if (response.refreshToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
      }
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Login failed",
    };
  }
};

/**
 * Logout user
 */
export const logout = async (): Promise<boolean> => {
  try {
    await apiClient.post(API_CONFIG.ENDPOINTS.AUTH_LOGOUT);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    return false;
  }
};

/**
 * Refresh authentication token
 */
export const refreshToken = async (): Promise<{
  success: boolean;
  data?: AuthResponse;
  message?: string;
}> => {
  try {
    const currentRefreshToken = localStorage.getItem("refreshToken");
    if (!currentRefreshToken) {
      return { success: false, message: "No refresh token available" };
    }

    const response = await apiClient.post<AuthResponse>(
      API_CONFIG.ENDPOINTS.AUTH_REFRESH,
      { refreshToken: currentRefreshToken }
    );

    if (response?.token) {
      localStorage.setItem("authToken", response.token);
      if (response.refreshToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
      }
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Token refresh error:", error);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    return {
      success: false,
      message: error instanceof Error ? error.message : "Token refresh failed",
    };
  }
};

/**
 * Get current user profile
 */
export const getUserProfile = async (): Promise<{
  success: boolean;
  data?: UserProfile;
  message?: string;
}> => {
  try {
    const response = await apiClient.get<UserProfile>(
      API_CONFIG.ENDPOINTS.AUTH_PROFILE
    );
    return { success: true, data: response };
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch profile",
    };
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken");
};

/**
 * Get stored auth token
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};

/**
 * Auth service object
 */
export const authService = {
  login,
  logout,
  refreshToken,
  getUserProfile,
  isAuthenticated,
  getAuthToken,
};
