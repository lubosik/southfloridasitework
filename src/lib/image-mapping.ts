/**
 * Image Mapping
 * Maps service slugs and project types to local image paths
 */

export function getServiceImagePath(slug: string): string {
  const imageMap: Record<string, string> = {
    'site-work-site-development': '/images/services/site-work-development.png',
    'land-grading-site-grading': '/images/services/land-grading.png',
    'excavation-earthwork': '/images/services/excavation-earthwork.png',
    'drainage-stormwater-solutions': '/images/services/drainage-stormwater.png',
    'land-clearing-lot-preparation': '/images/services/land-clearing.png',
  }
  return imageMap[slug] || '/images/services/site-work-development.png'
}

export function getProjectImagePath(projectType: string): string {
  const imageMap: Record<string, string> = {
    'commercial-retail-pad': '/images/projects/commercial-retail-pad.png',
    'custom-home-pad': '/images/projects/custom-home-pad.png',
    'drainage-regrading': '/images/projects/drainage-regrading.png',
  }
  return imageMap[projectType] || '/images/projects/commercial-retail-pad.png'
}

export const heroBackgroundImage = '/images/hero/hero-background.png'

