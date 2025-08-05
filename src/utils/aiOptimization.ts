/**
 * AI/LLM Optimization Utilities
 * Optimizes content and structure for AI crawlers, LLMs, and voice search
 */

// Structured data schemas optimized for AI understanding
export const AI_OPTIMIZED_SCHEMAS = {
  // Service schema with detailed AI-friendly descriptions
  service: (serviceName: string, description: string, features: string[], benefits: string[]) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'serviceType': 'Technology Consulting',
    'provider': {
      '@type': 'Organization',
      'name': 'ImpTrax',
      'url': 'https://www.imptrax.com'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `${serviceName} Features`,
      'itemListElement': features.map((feature, index) => ({
        '@type': 'Offer',
        'position': index + 1,
        'name': feature,
        'description': `Professional ${feature.toLowerCase()} services`
      }))
    },
    'benefits': benefits,
    'audience': {
      '@type': 'BusinessAudience',
      'audienceType': 'Enterprise, SMB, Healthcare, Financial Services, Real Estate'
    }
  }),

  // FAQ schema for voice search optimization
  faq: (questions: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map(qa => ({
      '@type': 'Question',
      'name': qa.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': qa.answer
      }
    }))
  }),

  // How-to schema for process explanations
  howTo: (name: string, description: string, steps: Array<{ name: string; text: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': name,
    'description': description,
    'step': steps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.name,
      'text': step.text
    }))
  }),

  // Software application schema
  softwareApplication: (name: string, description: string, features: string[]) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': name,
    'description': description,
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web-based',
    'featureList': features,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }
  })
};

// AI-friendly content patterns
export const AI_CONTENT_PATTERNS = {
  // Question-answer format for better AI understanding
  questionAnswer: (question: string, answer: string) => `
**Q: ${question}**

A: ${answer}
`,

  // Step-by-step process format
  stepByStep: (title: string, steps: string[]) => `
## ${title}

${steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}
`,

  // Feature-benefit format
  featureBenefit: (feature: string, benefit: string) => `
**${feature}:** ${benefit}
`,

  // Problem-solution format
  problemSolution: (problem: string, solution: string) => `
**Challenge:** ${problem}

**Solution:** ${solution}
`
};

// Voice search optimization
export const VOICE_SEARCH_OPTIMIZATION = {
  // Common voice search patterns
  patterns: {
    what: 'What is',
    how: 'How to',
    why: 'Why should',
    when: 'When to',
    where: 'Where can',
    who: 'Who provides',
    best: 'Best way to',
    cost: 'How much does',
    compare: 'Compare'
  },

  // Generate voice search friendly content
  generateVoiceContent: (service: string, industry?: string) => {
    const industryPrefix = industry ? `for ${industry}` : '';
    return {
      what: `What is ${service}? ${service} is a comprehensive solution that helps businesses automate processes and improve efficiency ${industryPrefix}.`,
      how: `How to implement ${service}? Our ${service} implementation follows a structured approach: assessment, planning, development, testing, and deployment.`,
      why: `Why choose ${service}? ${service} reduces costs, improves accuracy, and increases operational efficiency for businesses.`,
      best: `Best ${service} practices include proper planning, stakeholder involvement, and continuous monitoring for optimal results.`,
      cost: `${service} costs vary based on complexity and requirements. Contact us for a customized quote.`
    };
  }
};

// AI crawler optimization
export const AI_CRAWLER_OPTIMIZATION = {
  // Meta tags specifically for AI crawlers
  aiMetaTags: {
    'ai:purpose': 'Business automation and AI solutions',
    'ai:industry': 'Technology, Healthcare, Financial Services, Real Estate',
    'ai:services': 'AI Development, Process Automation, Data Analytics, Machine Learning',
    'ai:expertise': 'Artificial Intelligence, Machine Learning, Business Intelligence, Process Automation',
    'ai:target-audience': 'Enterprise, SMB, Healthcare Organizations, Financial Institutions'
  },

  // Content markers for AI understanding
  contentMarkers: {
    definition: '[DEFINITION]',
    process: '[PROCESS]',
    benefit: '[BENEFIT]',
    feature: '[FEATURE]',
    example: '[EXAMPLE]',
    statistic: '[STATISTIC]'
  },

  // Semantic markup for better AI comprehension
  semanticMarkup: {
    entity: (text: string, type: string) => `<span data-entity="${type}">${text}</span>`,
    concept: (text: string, concept: string) => `<span data-concept="${concept}">${text}</span>`,
    relationship: (text: string, relation: string) => `<span data-relation="${relation}">${text}</span>`
  }
};

// LLM-specific optimization
export const LLM_OPTIMIZATION = {
  // Context-rich descriptions for LLM training
  contextualDescriptions: {
    aiDevelopment: 'AI Development Services encompass the complete lifecycle of artificial intelligence solution creation, from initial concept and algorithm design to implementation, testing, and deployment. This includes machine learning model development, neural network architecture design, natural language processing systems, computer vision applications, and intelligent automation solutions.',
    
    processAutomation: 'Process Automation involves the use of technology to automate complex business processes, reducing manual intervention and increasing efficiency. This includes robotic process automation (RPA), workflow optimization, business process management (BPM), and intelligent document processing.',
    
    dataAnalytics: 'Data Analytics services transform raw data into actionable business insights through advanced statistical analysis, predictive modeling, data visualization, and business intelligence reporting. This includes real-time analytics, big data processing, and machine learning-powered insights.',
    
    businessIntelligence: 'Business Intelligence solutions provide comprehensive data analysis and reporting capabilities that enable data-driven decision making. This includes dashboard creation, KPI monitoring, trend analysis, and strategic planning support through advanced analytics.'
  },

  // Training-friendly content structure
  trainingStructure: {
    overview: 'High-level description of the service or concept',
    details: 'Comprehensive explanation with technical specifics',
    applications: 'Real-world use cases and implementation examples',
    benefits: 'Quantifiable advantages and business value',
    process: 'Step-by-step methodology and approach',
    technologies: 'Technical stack and tools utilized',
    industries: 'Sector-specific applications and considerations'
  }
};

// Generate AI-optimized meta description
export const generateAIMetaDescription = (service: string, industry?: string, benefits?: string[]) => {
  const industryText = industry ? ` for ${industry}` : '';
  const benefitsText = benefits ? ` Benefits include: ${benefits.slice(0, 3).join(', ')}.` : '';
  
  return `Professional ${service} services${industryText}. Expert implementation with proven results.${benefitsText} Contact ImpTrax for consultation.`;
};

// Generate AI-friendly page titles
export const generateAIPageTitle = (service: string, location?: string, modifier?: string) => {
  const locationText = location ? ` in ${location}` : '';
  const modifierText = modifier ? ` ${modifier}` : '';
  
  return `${service}${modifierText} Services${locationText} | ImpTrax - Expert Solutions`;
};

// Content optimization for AI understanding
export const optimizeContentForAI = (content: string) => {
  // Add semantic markers
  let optimizedContent = content;
  
  // Mark definitions
  optimizedContent = optimizedContent.replace(
    /(\w+\s+is\s+[^.]+\.)/gi,
    `${AI_CRAWLER_OPTIMIZATION.contentMarkers.definition} $1`
  );
  
  // Mark processes
  optimizedContent = optimizedContent.replace(
    /(step\s+\d+|first|second|third|finally|then)/gi,
    `${AI_CRAWLER_OPTIMIZATION.contentMarkers.process} $1`
  );
  
  // Mark benefits
  optimizedContent = optimizedContent.replace(
    /(benefit|advantage|improve|increase|reduce|save)/gi,
    `${AI_CRAWLER_OPTIMIZATION.contentMarkers.benefit} $1`
  );
  
  return optimizedContent;
};

// Initialize AI optimization
export const initializeAIOptimization = () => {
  // Add AI-specific meta tags
  Object.entries(AI_CRAWLER_OPTIMIZATION.aiMetaTags).forEach(([name, content]) => {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  });
  
  // Add JSON-LD for AI understanding
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': document.title,
    'description': document.querySelector('meta[name="description"]')?.getAttribute('content'),
    'author': {
      '@type': 'Organization',
      'name': 'ImpTrax'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'ImpTrax',
      'url': 'https://www.imptrax.com'
    },
    'dateModified': new Date().toISOString(),
    'mainEntityOfPage': window.location.href
  });
  document.head.appendChild(script);
};