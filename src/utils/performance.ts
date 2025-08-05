/**
 * Core Web Vitals and Performance Monitoring
 * Tracks LCP, FID, CLS, and other performance metrics for SEO optimization
 */

// Core Web Vitals thresholds (Google's recommended values)
export const CORE_WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 },   // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint
  TTFB: { good: 800, needsImprovement: 1800 }  // Time to First Byte
};

// Performance observer for Core Web Vitals
export class WebVitalsMonitor {
  private metrics: Record<string, number> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
          this.metrics.LCP = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.FID = entry.processingStart - entry.startTime;
            this.reportMetric('FID', this.metrics.FID);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.CLS = clsValue;
          this.reportMetric('CLS', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }

      // First Contentful Paint (FCP)
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.FCP = entry.startTime;
              this.reportMetric('FCP', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn('FCP observer not supported');
      }
    }
  }

  private reportMetric(name: string, value: number) {
    const threshold = CORE_WEB_VITALS_THRESHOLDS[name as keyof typeof CORE_WEB_VITALS_THRESHOLDS];
    if (threshold) {
      const rating = value <= threshold.good ? 'good' : 
                    value <= threshold.needsImprovement ? 'needs-improvement' : 'poor';
      
      // Send to analytics (replace with your analytics service)
      if (typeof gtag !== 'undefined') {
        gtag('event', name, {
          event_category: 'Web Vitals',
          value: Math.round(value),
          custom_parameter_1: rating,
        });
      }
      
      console.log(`${name}: ${value.toFixed(2)}ms (${rating})`);
    }
  }

  public getMetrics() {
    return { ...this.metrics };
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Lazy loading utility for images and components
export class LazyLoader {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              this.loadElement(element);
              this.observer?.unobserve(element);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before element enters viewport
          threshold: 0.01
        }
      );
    }
  }

  private loadElement(element: HTMLElement) {
    // Handle images
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement;
      const src = img.dataset.src;
      if (src) {
        img.src = src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
      }
    }

    // Handle background images
    const bgSrc = element.dataset.bgSrc;
    if (bgSrc) {
      element.style.backgroundImage = `url(${bgSrc})`;
      element.classList.remove('lazy-bg');
      element.classList.add('loaded-bg');
    }

    // Handle components with data-lazy attribute
    if (element.dataset.lazy) {
      element.classList.remove('lazy-component');
      element.classList.add('loaded-component');
      // Trigger custom event for component loading
      element.dispatchEvent(new CustomEvent('lazyload'));
    }
  }

  public observe(element: HTMLElement) {
    if (this.observer) {
      this.observer.observe(element);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadElement(element);
    }
  }

  public disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Resource hints for critical resources
export const addResourceHints = () => {
  const head = document.head;

  // Preconnect to external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
  });

  // DNS prefetch for other domains
  const dnsPrefetchDomains = [
    'https://www.googletagmanager.com',
    'https://connect.facebook.net'
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    head.appendChild(link);
  });
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
};

// Performance budget monitoring
export const PERFORMANCE_BUDGET = {
  maxBundleSize: 250000, // 250KB
  maxImageSize: 100000,  // 100KB
  maxCSSSize: 50000,     // 50KB
  maxJSSize: 200000,     // 200KB
  maxFonts: 2,           // Maximum 2 font families
  maxRequests: 50        // Maximum 50 HTTP requests
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  // Initialize Web Vitals monitoring
  const vitalsMonitor = new WebVitalsMonitor();

  // Initialize lazy loading
  const lazyLoader = new LazyLoader();

  // Add resource hints
  addResourceHints();

  // Monitor page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          LoadComplete: navigation.loadEventEnd - navigation.navigationStart
        };
        
        console.log('Page Load Metrics:', metrics);
      }
    }, 0);
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    vitalsMonitor.disconnect();
    lazyLoader.disconnect();
  });

  return { vitalsMonitor, lazyLoader };
};