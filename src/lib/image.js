import { dev } from '$app/environment';

/**
 * Optimizes image URLs for production with Vercel's Image Optimization
 * @param {string} src - The image source URL
 * @param {number[]} widths - Array of widths to generate
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized srcset string for production or original src for development
 */
export function optimizeImage(src, widths = [640, 828, 1080, 1920], quality = 90) {
  // In dev mode, just return the source
  if (dev) return src;

  // For production, generate optimized srcset
  return widths
    .slice()
    .sort((a, b) => a - b)
    .map((width, i) => {
      const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
      const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
      return url + descriptor;
    })
    .join(', ');
} 