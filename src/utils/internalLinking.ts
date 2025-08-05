/**
 * Internal Linking Strategy for SEO Optimization
 * Provides utilities for contextual internal linking and link equity distribution
 */

// Define the site's page hierarchy and relationships
export const SITE_STRUCTURE = {
  // Main service categories
  consulting: {
    ai: {
      parent: '/ai-development-services',
      children: [
        '/machine-learning-development',
        '/natural-language-processing',
        '/predictive-analytics'
      ],
      related: ['/ai-consulting', '/business-intelligence']
    },
    automation: {
      parent: '/process-automation',
      children: [
        '/robotic-process-automation',
        '/workflow-optimization',
        '/what-is-process-automation'
      ],
      related: ['/business-intelligence', '/data-analytics']
    },
    data: {
      parent: '/data-analytics',
      children: [
        '/data-warehouse-services',
        '/data-migration',
        '/real-time-analytics'
      ],
      related: ['/business-intelligence', '/predictive-analytics']
    }
  },
  // Industry-specific pages
  industries: {
    healthcare: {
      main: '/hipaa-compliant',
      related: ['/ai-development-services', '/data-analytics', '/process-automation']
    },
    realEstate: {
      main: '/real-estate-software',
      related: ['/data-analytics', '/predictive-analytics', '/business-intelligence']
    },
    financial: {
      main: '/financial-workflow-process',
      related: ['/process-automation', '/data-analytics', '/ai-development-services']
    }
  },
  // Educational content
  resources: {
    main: '/ai-consulting-services',
    educational: [
      '/what-is-process-automation',
      '/why-to-predictive-analytics',
      '/financial-workflow-process'
    ]
  }
};

// Contextual keywords for automatic internal linking
export const CONTEXTUAL_LINKS = {
  'artificial intelligence': '/ai-development-services',
  'machine learning': '/machine-learning-development',
  'predictive analytics': '/predictive-analytics',
  'process automation': '/process-automation',
  'business intelligence': '/business-intelligence',
  'data analytics': '/data-analytics',
  'data warehouse': '/data-warehouse-services',
  'real-time analytics': '/real-time-analytics',
  'workflow optimization': '/workflow-optimization',
  'robotic process automation': '/robotic-process-automation',
  'natural language processing': '/natural-language-processing',
  'data migration': '/data-migration',
  'AI consulting': '/ai-consulting',
  'HIPAA compliant': '/hipaa-compliant',
  'real estate software': '/real-estate-software',
  'financial workflow': '/financial-workflow-process'
};

// Generate breadcrumb navigation
export const generateBreadcrumbs = (currentPath: string) => {
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  // Find the current page in the site structure
  for (const [category, structure] of Object.entries(SITE_STRUCTURE)) {
    if (category === 'consulting') {
      for (const [serviceType, config] of Object.entries(structure)) {
        if (config.parent === currentPath) {
          breadcrumbs.push({ name: 'Consulting', url: '/consulting' });
          breadcrumbs.push({ name: getPageTitle(currentPath), url: currentPath });
          return breadcrumbs;
        }
        if (config.children.includes(currentPath)) {
          breadcrumbs.push({ name: 'Consulting', url: '/consulting' });
          breadcrumbs.push({ name: getPageTitle(config.parent), url: config.parent });
          breadcrumbs.push({ name: getPageTitle(currentPath), url: currentPath });
          return breadcrumbs;
        }
      }
    }
  }
  
  return breadcrumbs;
};

// Get related pages for internal linking
export const getRelatedPages = (currentPath: string, limit: number = 3) => {
  const related: Array<{ title: string; url: string; description: string }> = [];
  
  // Find related pages based on site structure
  for (const [category, structure] of Object.entries(SITE_STRUCTURE)) {
    if (category === 'consulting') {
      for (const [serviceType, config] of Object.entries(structure)) {
        if (config.parent === currentPath || config.children.includes(currentPath)) {
          config.related.forEach(url => {
            if (url !== currentPath) {
              related.push({
                title: getPageTitle(url),
                url,
                description: getPageDescription(url)
              });
            }
          });
        }
      }
    }
  }
  
  return related.slice(0, limit);
};

// Generate contextual internal links within content
export const addContextualLinks = (content: string, currentPath: string) => {
  let linkedContent = content;
  
  Object.entries(CONTEXTUAL_LINKS).forEach(([keyword, url]) => {
    if (url !== currentPath) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const replacement = `<a href="${url}" class="text-primary hover:text-primary/80 underline" title="Learn more about ${keyword}">${keyword}</a>`;
      linkedContent = linkedContent.replace(regex, replacement);
    }
  });
  
  return linkedContent;
};

// Helper functions
const getPageTitle = (url: string): string => {
  const titles: Record<string, string> = {
    '/ai-development-services': 'AI Development Services',
    '/machine-learning-development': 'Machine Learning Development',
    '/natural-language-processing': 'Natural Language Processing',
    '/predictive-analytics': 'Predictive Analytics',
    '/process-automation': 'Process Automation',
    '/robotic-process-automation': 'Robotic Process Automation',
    '/workflow-optimization': 'Workflow Optimization',
    '/business-intelligence': 'Business Intelligence',
    '/data-analytics': 'Data Analytics',
    '/data-warehouse-services': 'Data Warehouse Services',
    '/real-time-analytics': 'Real-time Analytics',
    '/data-migration': 'Data Migration',
    '/ai-consulting': 'AI Consulting',
    '/hipaa-compliant': 'HIPAA Compliant Solutions',
    '/real-estate-software': 'Real Estate Software',
    '/financial-workflow-process': 'Financial Workflow Process',
    '/ai-consulting-services': 'AI Consulting Services'
  };
  
  return titles[url] || url.replace(/\//g, '').replace(/-/g, ' ');
};

const getPageDescription = (url: string): string => {
  const descriptions: Record<string, string> = {
    '/ai-development-services': 'Comprehensive AI and automation solutions for modern businesses',
    '/machine-learning-development': 'Custom machine learning models and AI solutions',
    '/natural-language-processing': 'Advanced NLP solutions for text analysis and automation',
    '/predictive-analytics': 'Data-driven insights and forecasting solutions',
    '/process-automation': 'Streamline operations with intelligent process automation',
    '/business-intelligence': 'Transform data into strategic business insights',
    '/data-analytics': 'Advanced data analysis and visualization solutions'
  };
  
  return descriptions[url] || 'Learn more about our comprehensive solutions';
};

// SEO-friendly anchor text generation
export const generateAnchorText = (targetPage: string, context: string = '') => {
  const baseTexts: Record<string, string[]> = {
    '/ai-development-services': ['AI development services', 'artificial intelligence solutions', 'AI automation services'],
    '/machine-learning-development': ['machine learning development', 'custom ML solutions', 'ML model development'],
    '/predictive-analytics': ['predictive analytics', 'data forecasting', 'predictive modeling'],
    '/process-automation': ['process automation', 'business process automation', 'workflow automation'],
    '/business-intelligence': ['business intelligence', 'BI solutions', 'data intelligence'],
    '/data-analytics': ['data analytics', 'data analysis services', 'analytics solutions']
  };
  
  const options = baseTexts[targetPage] || [getPageTitle(targetPage)];
  return options[Math.floor(Math.random() * options.length)];
};