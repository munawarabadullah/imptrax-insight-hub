/**
 * Sitemap Generator for SEO Optimization
 * Generates XML sitemaps for better search engine crawling
 */

// Site structure definition
export const SITE_STRUCTURE = {
  // Main pages
  main: [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/knowledge-base', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-consulting', priority: 0.8, changefreq: 'monthly' }
  ],

  // AI Solutions
  aiSolutions: [
    { url: '/ai-development', priority: 0.9, changefreq: 'weekly' },
    { url: '/machine-learning', priority: 0.9, changefreq: 'weekly' },
    { url: '/natural-language-processing', priority: 0.8, changefreq: 'weekly' },
    { url: '/computer-vision', priority: 0.8, changefreq: 'weekly' },
    { url: '/predictive-analytics', priority: 0.8, changefreq: 'weekly' }
  ],

  // Automation Services
  automation: [
    { url: '/process-automation', priority: 0.9, changefreq: 'weekly' },
    { url: '/workflow-optimization', priority: 0.8, changefreq: 'weekly' },
    { url: '/robotic-process-automation', priority: 0.8, changefreq: 'weekly' },
    { url: '/business-process-management', priority: 0.8, changefreq: 'weekly' }
  ],

  // Data Services
  dataServices: [
    { url: '/data-analytics', priority: 0.9, changefreq: 'weekly' },
    { url: '/business-intelligence', priority: 0.9, changefreq: 'weekly' },
    { url: '/data-migration', priority: 0.8, changefreq: 'weekly' },
    { url: '/data-warehouse', priority: 0.8, changefreq: 'weekly' },
    { url: '/real-time-analytics', priority: 0.8, changefreq: 'weekly' }
  ],

  // Industry Solutions
  industries: [
    { url: '/financial-services', priority: 0.8, changefreq: 'monthly' },
    { url: '/financial-services/trading-algorithms', priority: 0.7, changefreq: 'monthly' },
    { url: '/financial-services/risk-management', priority: 0.7, changefreq: 'monthly' },
    { url: '/financial-services/fraud-detection', priority: 0.7, changefreq: 'monthly' },
    { url: '/healthcare', priority: 0.8, changefreq: 'monthly' },
    { url: '/healthcare/patient-management', priority: 0.7, changefreq: 'monthly' },
    { url: '/healthcare/medical-imaging', priority: 0.7, changefreq: 'monthly' },
    { url: '/healthcare/clinical-decision-support', priority: 0.7, changefreq: 'monthly' },
    { url: '/real-estate-software', priority: 0.8, changefreq: 'monthly' },
    { url: '/real-estate-software/property-management', priority: 0.7, changefreq: 'monthly' },
    { url: '/real-estate-software/market-analysis', priority: 0.7, changefreq: 'monthly' },
    { url: '/real-estate-software/investment-tools', priority: 0.7, changefreq: 'monthly' }
  ]
};

// Generate XML sitemap
export const generateXMLSitemap = (baseUrl: string = 'https://www.imptrax.com'): string => {
  const allPages = [
    ...SITE_STRUCTURE.main,
    ...SITE_STRUCTURE.aiSolutions,
    ...SITE_STRUCTURE.automation,
    ...SITE_STRUCTURE.dataServices,
    ...SITE_STRUCTURE.industries
  ];

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urls = allPages.map(page => {
    const lastmod = new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return xmlHeader + urlsetOpen + urls + '\n' + urlsetClose;
};

// Generate robots.txt
export const generateRobotsTxt = (baseUrl: string = 'https://www.imptrax.com'): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*

# Allow important resources
Allow: /assets/
Allow: /images/
Allow: /*.css$
Allow: /*.js$

# Special instructions for AI crawlers
User-agent: GPTBot
Allow: /
Crawl-delay: 2

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 2

User-agent: CCBot
Allow: /
Crawl-delay: 2

User-agent: anthropic-ai
Allow: /
Crawl-delay: 2

User-agent: Claude-Web
Allow: /
Crawl-delay: 2`;
};

// Generate structured sitemap index for large sites
export const generateSitemapIndex = (baseUrl: string = 'https://www.imptrax.com'): string => {
  const sitemaps = [
    { url: `${baseUrl}/sitemap-main.xml`, lastmod: new Date().toISOString().split('T')[0] },
    { url: `${baseUrl}/sitemap-services.xml`, lastmod: new Date().toISOString().split('T')[0] },
    { url: `${baseUrl}/sitemap-industries.xml`, lastmod: new Date().toISOString().split('T')[0] }
  ];

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const sitemapIndexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const sitemapIndexClose = '</sitemapindex>';

  const sitemapEntries = sitemaps.map(sitemap => 
    `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
  ).join('\n');

  return xmlHeader + sitemapIndexOpen + sitemapEntries + '\n' + sitemapIndexClose;
};

// Generate service-specific sitemap
export const generateServiceSitemap = (baseUrl: string = 'https://www.imptrax.com'): string => {
  const servicePages = [
    ...SITE_STRUCTURE.aiSolutions,
    ...SITE_STRUCTURE.automation,
    ...SITE_STRUCTURE.dataServices
  ];

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urls = servicePages.map(page => {
    const lastmod = new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return xmlHeader + urlsetOpen + urls + '\n' + urlsetClose;
};

// Generate industry-specific sitemap
export const generateIndustrySitemap = (baseUrl: string = 'https://www.imptrax.com'): string => {
  const industryPages = SITE_STRUCTURE.industries;

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urls = industryPages.map(page => {
    const lastmod = new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return xmlHeader + urlsetOpen + urls + '\n' + urlsetClose;
};

// URL validation and canonicalization
export const validateAndCanonicalizeUrl = (url: string, baseUrl: string): string => {
  // Remove trailing slashes except for root
  if (url !== '/' && url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  // Ensure URL starts with /
  if (!url.startsWith('/')) {
    url = '/' + url;
  }
  
  // Convert to lowercase for consistency
  url = url.toLowerCase();
  
  // Remove duplicate slashes
  url = url.replace(/\/+/g, '/');
  
  return baseUrl + url;
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
};

// SEO-friendly URL generator
export const generateSEOFriendlyUrl = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

// Check if URL should be indexed
export const shouldIndexUrl = (url: string): boolean => {
  const noIndexPatterns = [
    '/admin',
    '/private',
    '/test',
    '/dev',
    '?',
    '#'
  ];
  
  return !noIndexPatterns.some(pattern => url.includes(pattern));
};

// Generate hreflang attributes for international SEO
export const generateHreflangAttributes = (currentUrl: string, languages: string[] = ['en']) => {
  return languages.map(lang => ({
    rel: 'alternate',
    hreflang: lang,
    href: `https://www.imptrax.com${lang === 'en' ? '' : '/' + lang}${currentUrl}`
  }));
};

// Initialize sitemap generation
export const initializeSitemapGeneration = async (baseUrl: string = 'https://www.imptrax.com') => {
  try {
    // Generate main sitemap
    const mainSitemap = generateXMLSitemap(baseUrl);
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt(baseUrl);
    
    // Log generation success
    console.log('Sitemap and robots.txt generated successfully');
    
    return {
      sitemap: mainSitemap,
      robotsTxt: robotsTxt,
      success: true
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return {
      success: false,
      error: error
    };
  }
};