/**
 * Unsplash Image Utilities
 * For fetching and using Unsplash images
 */

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''

/**
 * Get Unsplash image URL by search query
 * Returns a high-quality image URL optimized for web
 */
export function getUnsplashImageUrl(
  query: string,
  width: number = 1920,
  height: number = 1080
): string {
  // Using Unsplash Source API (no key required for basic usage)
  // Format: https://source.unsplash.com/{width}x{height}/?{keywords}
  const encodedQuery = encodeURIComponent(query)
  return `https://source.unsplash.com/${width}x${height}/?${encodedQuery}&auto=format&fit=crop`
}

/**
 * Get Unsplash image URL with specific photo ID (more reliable)
 * You can find photo IDs from unsplash.com
 */
export function getUnsplashPhotoUrl(
  photoId: string,
  width: number = 1920,
  height: number = 1080
): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&auto=format`
}

/**
 * Predefined image queries for site work themes
 */
export const siteWorkImageQueries = {
  hero: 'excavator construction site work earthmoving',
  grading: 'land grading bulldozer construction site',
  excavation: 'excavation earthwork heavy machinery',
  drainage: 'drainage system construction site water',
  landClearing: 'land clearing vegetation removal construction',
  siteDevelopment: 'construction site development earthwork',
}

/**
 * Get hero image URL for homepage
 */
export function getHeroImageUrl(): string {
  return getUnsplashImageUrl(siteWorkImageQueries.hero, 1920, 1080)
}

/**
 * Get image URL for a specific service type
 */
export function getServiceImageUrl(serviceType: string): string {
  const queryMap: Record<string, string> = {
    'site-work': siteWorkImageQueries.siteDevelopment,
    'land-grading': siteWorkImageQueries.grading,
    'excavation': siteWorkImageQueries.excavation,
    'drainage': siteWorkImageQueries.drainage,
    'land-clearing': siteWorkImageQueries.landClearing,
  }

  const query = queryMap[serviceType] || siteWorkImageQueries.hero
  return getUnsplashImageUrl(query, 1920, 1080)
}

