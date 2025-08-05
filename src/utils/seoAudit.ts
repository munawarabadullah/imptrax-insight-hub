/**
 * SEO Audit and Monitoring Utilities
 * Comprehensive SEO analysis and tracking system
 */

// SEO audit configuration
export const SEO_AUDIT_CONFIG = {
  // Core Web Vitals thresholds
  coreWebVitals: {
    lcp: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint (ms)
    fid: { good: 100, needsImprovement: 300 },   // First Input Delay (ms)
    cls: { good: 0.1, needsImprovement: 0.25 },  // Cumulative Layout Shift
    fcp: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint (ms)
    ttfb: { good: 800, needsImprovement: 1800 }  // Time to First Byte (ms)
  },

  // SEO scoring weights
  scoringWeights: {
    technical: 0.3,
    content: 0.25,
    performance: 0.25,
    accessibility: 0.1,
    mobile: 0.1
  },

  // Required meta tags
  requiredMetaTags: [
    'title',
    'description',
    'viewport',
    'og:title',
    'og:description',
    'og:image',
    'og:url',
    'twitter:card',
    'twitter:title',
    'twitter:description'
  ]
};

// SEO audit interface
export interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  technicalSEO: TechnicalSEOAudit;
  contentSEO: ContentSEOAudit;
  performanceSEO: PerformanceSEOAudit;
  timestamp: string;
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'technical' | 'content' | 'performance' | 'accessibility' | 'mobile';
  message: string;
  element?: string;
  impact: 'high' | 'medium' | 'low';
}

export interface TechnicalSEOAudit {
  metaTags: { [key: string]: string | null };
  headingStructure: HeadingAnalysis;
  internalLinks: number;
  externalLinks: number;
  images: ImageAnalysis;
  structuredData: StructuredDataAnalysis;
  canonicalUrl: string | null;
  robotsDirectives: string[];
}

export interface ContentSEOAudit {
  wordCount: number;
  readabilityScore: number;
  keywordDensity: { [keyword: string]: number };
  duplicateContent: boolean;
  contentQuality: number;
}

export interface PerformanceSEOAudit {
  coreWebVitals: { [metric: string]: number };
  pageSize: number;
  loadTime: number;
  resourceCount: number;
  compressionEnabled: boolean;
}

export interface HeadingAnalysis {
  h1Count: number;
  h1Text: string[];
  headingHierarchy: boolean;
  missingHeadings: string[];
}

export interface ImageAnalysis {
  totalImages: number;
  imagesWithoutAlt: number;
  largeImages: number;
  unoptimizedFormats: number;
}

export interface StructuredDataAnalysis {
  hasStructuredData: boolean;
  schemas: string[];
  errors: string[];
}

// Main SEO audit function
export const performSEOAudit = async (): Promise<SEOAuditResult> => {
  const issues: SEOIssue[] = [];
  const recommendations: string[] = [];

  // Technical SEO audit
  const technicalSEO = await auditTechnicalSEO(issues, recommendations);
  
  // Content SEO audit
  const contentSEO = await auditContentSEO(issues, recommendations);
  
  // Performance SEO audit
  const performanceSEO = await auditPerformanceSEO(issues, recommendations);

  // Calculate overall score
  const score = calculateSEOScore(technicalSEO, contentSEO, performanceSEO, issues);

  return {
    score,
    issues,
    recommendations,
    technicalSEO,
    contentSEO,
    performanceSEO,
    timestamp: new Date().toISOString()
  };
};

// Technical SEO audit
const auditTechnicalSEO = async (issues: SEOIssue[], recommendations: string[]): Promise<TechnicalSEOAudit> => {
  // Meta tags analysis
  const metaTags: { [key: string]: string | null } = {};
  SEO_AUDIT_CONFIG.requiredMetaTags.forEach(tag => {
    const element = document.querySelector(`meta[name="${tag}"], meta[property="${tag}"]`);
    metaTags[tag] = element?.getAttribute('content') || null;
    
    if (!metaTags[tag]) {
      issues.push({
        type: 'error',
        category: 'technical',
        message: `Missing required meta tag: ${tag}`,
        impact: 'high'
      });
    }
  });

  // Title tag analysis
  const titleElement = document.querySelector('title');
  const title = titleElement?.textContent || '';
  metaTags.title = title;
  
  if (!title) {
    issues.push({
      type: 'error',
      category: 'technical',
      message: 'Missing title tag',
      impact: 'high'
    });
  } else if (title.length < 30 || title.length > 60) {
    issues.push({
      type: 'warning',
      category: 'technical',
      message: `Title length (${title.length}) should be between 30-60 characters`,
      impact: 'medium'
    });
  }

  // Heading structure analysis
  const headingStructure = analyzeHeadingStructure(issues);
  
  // Links analysis
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]').length;
  const externalLinks = document.querySelectorAll('a[href^="http"]').length;
  
  // Images analysis
  const images = analyzeImages(issues, recommendations);
  
  // Structured data analysis
  const structuredData = analyzeStructuredData(issues);
  
  // Canonical URL
  const canonicalElement = document.querySelector('link[rel="canonical"]');
  const canonicalUrl = canonicalElement?.getAttribute('href') || null;
  
  // Robots directives
  const robotsElement = document.querySelector('meta[name="robots"]');
  const robotsDirectives = robotsElement?.getAttribute('content')?.split(',').map(d => d.trim()) || [];

  return {
    metaTags,
    headingStructure,
    internalLinks,
    externalLinks,
    images,
    structuredData,
    canonicalUrl,
    robotsDirectives
  };
};

// Heading structure analysis
const analyzeHeadingStructure = (issues: SEOIssue[]): HeadingAnalysis => {
  const h1Elements = document.querySelectorAll('h1');
  const h1Count = h1Elements.length;
  const h1Text = Array.from(h1Elements).map(h => h.textContent || '');
  
  if (h1Count === 0) {
    issues.push({
      type: 'error',
      category: 'technical',
      message: 'Missing H1 tag',
      impact: 'high'
    });
  } else if (h1Count > 1) {
    issues.push({
      type: 'warning',
      category: 'technical',
      message: `Multiple H1 tags found (${h1Count}). Should have only one H1 per page`,
      impact: 'medium'
    });
  }

  // Check heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let headingHierarchy = true;
  let lastLevel = 0;
  
  Array.from(headings).forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      headingHierarchy = false;
      issues.push({
        type: 'warning',
        category: 'technical',
        message: `Heading hierarchy broken: ${heading.tagName} follows H${lastLevel}`,
        element: heading.textContent || '',
        impact: 'low'
      });
    }
    lastLevel = level;
  });

  return {
    h1Count,
    h1Text,
    headingHierarchy,
    missingHeadings: []
  };
};

// Images analysis
const analyzeImages = (issues: SEOIssue[], recommendations: string[]): ImageAnalysis => {
  const images = document.querySelectorAll('img');
  const totalImages = images.length;
  let imagesWithoutAlt = 0;
  let largeImages = 0;
  let unoptimizedFormats = 0;

  Array.from(images).forEach(img => {
    // Alt text check
    if (!img.getAttribute('alt')) {
      imagesWithoutAlt++;
      issues.push({
        type: 'warning',
        category: 'accessibility',
        message: 'Image missing alt attribute',
        element: img.src,
        impact: 'medium'
      });
    }

    // Image format check
    const src = img.src;
    if (src.includes('.jpg') || src.includes('.png')) {
      unoptimizedFormats++;
      recommendations.push(`Consider using WebP format for image: ${src}`);
    }

    // Image size check (if naturalWidth/Height available)
    if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
      largeImages++;
      recommendations.push(`Consider optimizing large image: ${src}`);
    }
  });

  return {
    totalImages,
    imagesWithoutAlt,
    largeImages,
    unoptimizedFormats
  };
};

// Structured data analysis
const analyzeStructuredData = (issues: SEOIssue[]): StructuredDataAnalysis => {
  const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
  const schemas: string[] = [];
  const errors: string[] = [];
  
  Array.from(jsonLdScripts).forEach(script => {
    try {
      const data = JSON.parse(script.textContent || '');
      if (data['@type']) {
        schemas.push(data['@type']);
      }
    } catch (error) {
      errors.push('Invalid JSON-LD syntax');
      issues.push({
        type: 'error',
        category: 'technical',
        message: 'Invalid JSON-LD structured data',
        impact: 'medium'
      });
    }
  });

  return {
    hasStructuredData: schemas.length > 0,
    schemas,
    errors
  };
};

// Content SEO audit
const auditContentSEO = async (issues: SEOIssue[], recommendations: string[]): Promise<ContentSEOAudit> => {
  const textContent = document.body.textContent || '';
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
  
  if (wordCount < 300) {
    issues.push({
      type: 'warning',
      category: 'content',
      message: `Low word count (${wordCount}). Consider adding more content`,
      impact: 'medium'
    });
  }

  // Basic readability score (simplified)
  const sentences = textContent.split(/[.!?]+/).length;
  const avgWordsPerSentence = wordCount / sentences;
  const readabilityScore = Math.max(0, 100 - (avgWordsPerSentence * 2));
  
  if (readabilityScore < 60) {
    recommendations.push('Consider improving content readability with shorter sentences');
  }

  // Keyword density analysis (simplified)
  const words = textContent.toLowerCase().split(/\s+/);
  const keywordDensity: { [keyword: string]: number } = {};
  
  // Count common business terms
  const businessKeywords = ['ai', 'automation', 'analytics', 'intelligence', 'process', 'data', 'machine learning'];
  businessKeywords.forEach(keyword => {
    const count = words.filter(word => word.includes(keyword)).length;
    keywordDensity[keyword] = (count / wordCount) * 100;
  });

  return {
    wordCount,
    readabilityScore,
    keywordDensity,
    duplicateContent: false, // Would need server-side check
    contentQuality: Math.min(100, (wordCount / 10) + readabilityScore)
  };
};

// Performance SEO audit
const auditPerformanceSEO = async (issues: SEOIssue[], recommendations: string[]): Promise<PerformanceSEOAudit> => {
  const coreWebVitals: { [metric: string]: number } = {};
  
  // Get performance metrics if available
  if ('performance' in window && 'getEntriesByType' in performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      coreWebVitals.ttfb = navigation.responseStart - navigation.requestStart;
      coreWebVitals.loadTime = navigation.loadEventEnd - navigation.navigationStart;
    }
  }

  // Check resource count
  const resourceCount = document.querySelectorAll('script, link[rel="stylesheet"], img').length;
  
  if (resourceCount > 50) {
    recommendations.push('Consider reducing the number of resources to improve load time');
  }

  // Estimate page size
  const pageSize = new Blob([document.documentElement.outerHTML]).size;
  
  if (pageSize > 500000) { // 500KB
    issues.push({
      type: 'warning',
      category: 'performance',
      message: `Large page size (${Math.round(pageSize / 1024)}KB). Consider optimization`,
      impact: 'medium'
    });
  }

  return {
    coreWebVitals,
    pageSize,
    loadTime: coreWebVitals.loadTime || 0,
    resourceCount,
    compressionEnabled: false // Would need server-side check
  };
};

// Calculate overall SEO score
const calculateSEOScore = (
  technical: TechnicalSEOAudit,
  content: ContentSEOAudit,
  performance: PerformanceSEOAudit,
  issues: SEOIssue[]
): number => {
  let score = 100;
  
  // Deduct points for issues
  issues.forEach(issue => {
    switch (issue.impact) {
      case 'high':
        score -= 15;
        break;
      case 'medium':
        score -= 8;
        break;
      case 'low':
        score -= 3;
        break;
    }
  });
  
  // Bonus points for good practices
  if (technical.structuredData.hasStructuredData) score += 5;
  if (technical.canonicalUrl) score += 3;
  if (content.wordCount > 500) score += 5;
  if (technical.images.imagesWithoutAlt === 0) score += 5;
  
  return Math.max(0, Math.min(100, score));
};

// Generate SEO report
export const generateSEOReport = async (): Promise<string> => {
  const audit = await performSEOAudit();
  
  let report = `# SEO Audit Report\n\n`;
  report += `**Overall Score: ${audit.score}/100**\n\n`;
  report += `**Generated: ${new Date(audit.timestamp).toLocaleString()}**\n\n`;
  
  // Issues summary
  if (audit.issues.length > 0) {
    report += `## Issues Found (${audit.issues.length})\n\n`;
    audit.issues.forEach(issue => {
      const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️';
      report += `${icon} **${issue.impact.toUpperCase()}**: ${issue.message}\n`;
      if (issue.element) report += `   Element: ${issue.element}\n`;
      report += `\n`;
    });
  }
  
  // Recommendations
  if (audit.recommendations.length > 0) {
    report += `## Recommendations\n\n`;
    audit.recommendations.forEach(rec => {
      report += `- ${rec}\n`;
    });
    report += `\n`;
  }
  
  // Technical details
  report += `## Technical SEO\n\n`;
  report += `- Internal Links: ${audit.technicalSEO.internalLinks}\n`;
  report += `- External Links: ${audit.technicalSEO.externalLinks}\n`;
  report += `- Images: ${audit.technicalSEO.images.totalImages} (${audit.technicalSEO.images.imagesWithoutAlt} missing alt)\n`;
  report += `- Structured Data: ${audit.technicalSEO.structuredData.schemas.join(', ') || 'None'}\n\n`;
  
  // Content details
  report += `## Content SEO\n\n`;
  report += `- Word Count: ${audit.contentSEO.wordCount}\n`;
  report += `- Readability Score: ${audit.contentSEO.readabilityScore.toFixed(1)}\n`;
  report += `- Content Quality: ${audit.contentSEO.contentQuality.toFixed(1)}\n\n`;
  
  return report;
};

// Initialize SEO monitoring
export const initializeSEOMonitoring = () => {
  // Run initial audit
  performSEOAudit().then(result => {
    console.log('SEO Audit completed:', result);
    
    // Store results for tracking
    localStorage.setItem('seo_audit_latest', JSON.stringify(result));
  });
  
  // Set up periodic monitoring
  setInterval(async () => {
    const result = await performSEOAudit();
    const previous = localStorage.getItem('seo_audit_latest');
    
    if (previous) {
      const prevResult = JSON.parse(previous);
      if (result.score !== prevResult.score) {
        console.log(`SEO Score changed: ${prevResult.score} → ${result.score}`);
      }
    }
    
    localStorage.setItem('seo_audit_latest', JSON.stringify(result));
  }, 300000); // Check every 5 minutes
};