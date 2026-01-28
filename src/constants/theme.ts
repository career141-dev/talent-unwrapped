/**
 * Theme Constants
 * Design tokens: colors, spacing, typography, breakpoints
 * Imported from: src/constants/theme.ts
 */

export const COLORS = {
  // Primary colors
  PRIMARY_GREEN: "#7cb403",
  PRIMARY_RED: "#ed2939",

  // Text colors
  TEXT_DARK: "#222223",
  TEXT_LIGHT: "#939393",
  TEXT_MUTED: "#666666",
  TEXT_PLACEHOLDER: "#999999",

  // Background colors
  BG_LIGHT: "#f8f8f8",
  BG_WHITE: "#ffffff",
  BG_DARK: "#2d2d2d",

  // Border colors
  BORDER_LIGHT: "#eeeeee",
  BORDER_MEDIUM: "#e5e5e5",

  // Semantic colors
  SUCCESS: "#7c3",
  ERROR: "#ff4444",
  WARNING: "#ffa500",
  INFO: "#0066cc",
};

export const SPACING = {
  XS: "4px",
  SM: "8px",
  MD: "12px",
  LG: "16px",
  XL: "24px",
  XXL: "32px",
  XXXL: "40px",
};

export const TYPOGRAPHY = {
  // Font family
  FONT_PRIMARY: "'Geist', Helvetica",

  // Font sizes (in pixels)
  SIZE_XS: "11px",
  SIZE_SM: "12px",
  SIZE_MD: "13px",
  SIZE_LG: "14px",
  SIZE_XL: "16px",
  SIZE_2XL: "20px",
  SIZE_3XL: "24px",
  SIZE_4XL: "32px",
  SIZE_5XL: "52px",

  // Font weights
  WEIGHT_NORMAL: 400,
  WEIGHT_MEDIUM: 500,
  WEIGHT_SEMIBOLD: 600,
  WEIGHT_BOLD: 700,

  // Line heights
  LINE_HEIGHT_TIGHT: "1.3",
  LINE_HEIGHT_NORMAL: "1.5",
  LINE_HEIGHT_RELAXED: "1.6",
};

export const BREAKPOINTS = {
  XS: "320px",
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  XXL: "1440px",
};

export const TRANSITIONS = {
  FAST: "200ms",
  NORMAL: "300ms",
  SLOW: "500ms",
  DEFAULT_TIMING: "ease-in-out",
};

export const SHADOWS = {
  SM: "0px 4px 16px rgba(0, 0, 0, 0.08)",
  MD: "0px 8px 24px rgba(0, 0, 0, 0.12)",
  LG: "0px 12px 32px rgba(0, 0, 0, 0.16)",
};

export const BORDER_RADIUS = {
  SM: "8px",
  MD: "12px",
  LG: "16px",
  FULL: "9999px",
};
