/**
 * Image Optimization Utilities for SEO and Performance
 * Provides functions for lazy loading, WebP conversion, and SEO-friendly image handling
 */

// Lazy loading observer for images
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
          }
        }
      });
    });
  }
  return null;
};

// Generate responsive image srcset
export const generateSrcSet = (baseUrl: string, sizes: number[] = [400, 800, 1200]) => {
  return sizes.map(size => `${baseUrl}?w=${size} ${size}w`).join(', ');
};

// Generate SEO-friendly alt text
export const generateAltText = (context: string, keywords: string[] = []) => {
  const keywordString = keywords.length > 0 ? ` - ${keywords.join(', ')}` : '';
  return `${context}${keywordString}`;
};

// WebP support detection
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Image preloading for critical images
export const preloadImage = (src: string, priority: 'high' | 'low' = 'low') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority === 'high') {
    link.setAttribute('fetchpriority', 'high');
  }
  document.head.appendChild(link);
};

// Generate structured data for images
export const generateImageStructuredData = (imageUrl: string, caption: string, width: number, height: number) => {
  return {
    '@type': 'ImageObject',
    'url': imageUrl,
    'width': width,
    'height': height,
    'caption': caption,
    'encodingFormat': imageUrl.includes('.webp') ? 'image/webp' : 'image/jpeg'
  };
};

// Image optimization recommendations
export const IMAGE_OPTIMIZATION_GUIDELINES = {
  formats: {
    preferred: 'WebP',
    fallback: 'JPEG',
    vector: 'SVG'
  },
  sizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 400, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
    hero: { width: 1920, height: 1080 }
  },
  compression: {
    webp: { quality: 85 },
    jpeg: { quality: 80 },
    png: { compression: 6 }
  },
  seo: {
    altTextMaxLength: 125,
    filenameConvention: 'descriptive-kebab-case',
    structuredDataRequired: true
  }
};