/**
 * Resolves the public URL for the live site.
 * 
 * Priority:
 * 1. VITE_LIVE_SITE_URL environment variable (if set)
 * 2. window.location.origin (runtime)
 * 
 * Safeguards:
 * - Returns empty string if window is undefined (SSR safety)
 * - Filters out localhost URLs in production builds
 */
export function getPublicSiteUrl(): string {
  // Check for explicit override from environment
  const envUrl = import.meta.env.VITE_LIVE_SITE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim();
  }

  // Fallback to runtime origin
  if (typeof window === 'undefined') {
    return '';
  }

  const origin = window.location.origin;

  // Filter out localhost in production
  if (import.meta.env.PROD && origin.includes('localhost')) {
    return '';
  }

  return origin;
}
