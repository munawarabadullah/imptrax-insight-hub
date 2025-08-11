import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample article data
const articles = [
  {
    id: 1,
    title: "Real-Time Eligibility & Authorization: AI-Powered Revenue Protection",
    category: "Revenue Cycle Management",
    excerpt: "Discover how AI-powered real-time verification systems are revolutionizing healthcare revenue protection, reducing claim denials, and improving patient access to care.",
    image: "/images/real-time-eligibility-authorization-verification.svg",
    slug: "real-time-eligibility-authorization-verification",
    readTime: "20 min read",
    publishDate: "2025-08-22"
  },
  {
    id: 2,
    title: "The Future of AI in Healthcare: Revolutionizing Diagnosis, RCM, and Patient Care",
    category: "Healthcare Technology",
    excerpt: "Explore how artificial intelligence is transforming healthcare delivery, from diagnostic accuracy to revenue cycle optimization, creating unprecedented opportunities for improved patient outcomes and operational efficiency.",
    image: "/images/ai-healthcare-future.svg",
    slug: "future-of-ai-in-healthcare",
    readTime: "25 min read",
    publishDate: "2025-08-10"
  },
  {
    id: 3,
    title: "Mid-Market Firms Can Punch Above Their Weight with AI - Our COO Explains How",
    category: "Software Development",
    excerpt: "Discover how mid-market companies can leverage AI technologies to compete with larger enterprises and drive significant business growth.",
    image: "/articles/mid-market-firms-ai-competitive-advantage.svg",
    slug: "mid-market-firms-ai-competitive-advantage",
    readTime: "5 min read",
    publishDate: "2024-01-15"
  },
  {
    id: 4,
    title: "Digital Transformation Strategies for Mid-Market Companies",
    category: "Digital Transformation",
    excerpt: "Learn proven strategies and frameworks that mid-market companies can use to successfully navigate their digital transformation journey.",
    image: "/articles/digital-transformation-mid-market-companies.svg",
    slug: "digital-transformation-mid-market-companies",
    readTime: "6 min read",
    publishDate: "2024-01-18"
  },
  {
    id: 3,
    title: "Data Analytics and Business Intelligence: Turning Data into Insights",
    category: "Data Analytics",
    excerpt: "Explore how modern data analytics and business intelligence tools are helping companies make data-driven decisions and gain competitive advantages.",
    image: "/articles/data-analytics-business-intelligence-insights.svg",
    slug: "data-analytics-business-intelligence-insights",
    readTime: "8 min read",
    publishDate: "2024-01-15"
  },
  {
    id: 4,
    title: "The Future of Cloud Computing: Trends and Predictions for 2024",
    category: "Software Development",
    excerpt: "As we advance through 2024, cloud computing continues to evolve at an unprecedented pace. From edge computing to serverless architectures, discover the trends shaping the future.",
    image: "/articles/future-cloud-computing-trends-predictions-2024.svg",
    slug: "future-cloud-computing-trends-predictions-2024",
    readTime: "8 min read",
    publishDate: "2024-01-18"
  },
  {
    id: 5,
    title: "Life at ImpTrax: Building Innovation Through Collaboration",
    category: "Life at ImpTrax",
    excerpt: "At ImpTrax, we believe that great technology solutions are born from great teams. Our culture of collaboration, innovation, and continuous learning creates an environment where both our people and our clients thrive.",
    image: "/articles/life-at-imptrax-building-innovation-through-collaboration.svg",
    slug: "life-at-imptrax-building-innovation-through-collaboration",
    readTime: "5 min read",
    publishDate: "2024-01-16"
  },
  {
    id: 6,
    title: "Modern Application Development: Best Practices and Methodologies",
    category: "Software Development",
    excerpt: "Modern application development has evolved significantly from traditional waterfall methodologies. Today's development landscape demands agility, scalability, and continuous delivery.",
    image: "/articles/modern-application-development-best-practices-methodologies.svg",
    slug: "modern-application-development-best-practices-methodologies",
    readTime: "9 min read",
    publishDate: "2024-01-14"
  },
  {
    id: 7,
    title: "The Future of AI in Healthcare: Revolutionizing Diagnosis, RCM, and Patient Care",
    category: "Healthcare AI",
    excerpt: "Explore how artificial intelligence is transforming healthcare through advanced diagnostics, revenue cycle management optimization, and enhanced patient care delivery systems.",
    image: "/images/ai-healthcare-future.svg",
    slug: "future-of-ai-in-healthcare",
    readTime: "12 min read",
    publishDate: "2025-08-10"
  },
  {    id: 8,    title: "AI in Healthcare RCM: How Intelligent Automation Revolutionizes Revenue Cycles",    category: "Healthcare Technology",    excerpt: "Discover how AI-powered automation is transforming healthcare revenue cycle management, reducing claim denials by 40% and accelerating payment cycles for medical practices nationwide.",    image: "/images/ai-healthcare-rcm-automation.svg",    slug: "ai-healthcare-revenue-cycle-management-automation",    readTime: "12 min read",    publishDate: "2025-08-09"  },  {    id: 9,    title: "AI Transforms Healthcare RCM: 2025 Revolution in Revenue Cycles",    category: "Healthcare Technology",    excerpt: "Discover how AI revolutionizes healthcare revenue cycle management in 2025, reducing errors by 85%, accelerating claims processing, and boosting financial performance through intelligent automation.",    image: "/images/ai-healthcare-rcm-2025-transformation.svg",    slug: "ai-transforming-healthcare-rcm-2025",    readTime: "30 min read",    publishDate: "2025-08-12"  },
  {
    id: 10,
    title: "AI & Automation in Healthcare RCM: Benefits, Challenges & Implementation",
    category: "Healthcare Technology",
    excerpt: "Explore the transformative benefits of AI in healthcare revenue cycle management, from faster claims processing to improved accuracy, while addressing key implementation challenges including compliance and workforce considerations.",
    image: "/articles/ai-automation-healthcare-rcm-benefits-challenges.svg",
    slug: "ai-automation-benefits-challenges-healthcare-revenue-cycle-management",
    readTime: "18 min read",
    publishDate: "2025-08-20"
  },
  {
    id: 11,
    title: "Predictive Analytics & AI: Reduce Revenue Cycle Denials & Improve Cash Flow",
    category: "Healthcare Technology",
    excerpt: "Discover how predictive analytics and AI technologies are revolutionizing healthcare revenue cycle management by reducing claim denials, accelerating payment cycles, and improving cash flow for medical practices.",
    image: "/images/ai-predictive-analytics-revenue-cycle.svg",
    slug: "predictive-analytics-ai-reduce-revenue-cycle-denials-improve-cash-flow",
    readTime: "15 min read",
    publishDate: "2025-08-18"
  },
  {
    id: 12,
    title: "Modern Application Development: Best Practices and Methodologies",
    category: "Software Development",
    excerpt: "Modern application development has evolved significantly from traditional waterfall methodologies. Today's development landscape demands agility, scalability, and continuous delivery.",
    image: "/articles/modern-application-development-best-practices-methodologies.svg",
    slug: "modern-application-development-best-practices-methodologies",
    readTime: "9 min read",
    publishDate: "2024-01-14"
  }
];

const Insight = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;
  
  // Sort articles by publish date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = sortedArticles.slice(startIndex, endIndex);
  
  // SEO Optimization
  useEffect(() => {
    // Set page title
    document.title = 'Insights & Analysis - AI, Automation & Digital Transformation | ImpTrax';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on AI, automation, and digital transformation. Stay ahead with strategic analysis from ImpTrax specialists on emerging technology trends and business solutions.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Expert insights on AI, automation, and digital transformation. Stay ahead with strategic analysis from ImpTrax specialists on emerging technology trends and business solutions.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Set meta keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', 'AI insights, automation trends, digital transformation, business intelligence, technology analysis, ImpTrax blog, enterprise solutions, machine learning, data analytics');
    } else {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'AI insights, automation trends, digital transformation, business intelligence, technology analysis, ImpTrax blog, enterprise solutions, machine learning, data analytics';
      document.head.appendChild(keywordsMeta);
    }
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/insight');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = window.location.origin + '/insight';
      document.head.appendChild(canonicalLink);
    }
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Insights & Analysis - AI, Automation & Digital Transformation | ImpTrax' },
      { property: 'og:description', content: 'Expert insights on AI, automation, and digital transformation. Stay ahead with strategic analysis from ImpTrax specialists on emerging technology trends and business solutions.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.origin + '/insight' },
      { property: 'og:site_name', content: 'ImpTrax' },
      { property: 'og:locale', content: 'en_US' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', tag.content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        ogTag.setAttribute('content', tag.content);
        document.head.appendChild(ogTag);
      }
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Insights & Analysis - AI, Automation & Digital Transformation | ImpTrax' },
      { name: 'twitter:description', content: 'Expert insights on AI, automation, and digital transformation. Stay ahead with strategic analysis from ImpTrax specialists.' },
      { name: 'twitter:site', content: '@ImpTrax' }
    ];
    
    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', tag.content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        twitterTag.setAttribute('content', tag.content);
        document.head.appendChild(twitterTag);
      }
    });
    
    // JSON-LD Structured Data for Blog/Website
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "ImpTrax Insights & Analysis",
      "description": "Expert insights on AI, automation, and digital transformation from ImpTrax specialists",
      "url": window.location.origin + '/insight',
      "publisher": {
        "@type": "Organization",
        "name": "ImpTrax",
        "url": window.location.origin,
        "logo": {
          "@type": "ImageObject",
          "url": window.location.origin + '/logo.png'
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.origin + '/insight'
      }
    };
    
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(structuredData);
    } else {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(jsonLdScript);
    }
  }, []);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="headline">
                Insights & Analysis
              </h1>
              <p className="text-xl text-gray-600 mb-8" itemProp="description">
                Stay ahead of the curve with expert insights, industry trends, and strategic analysis from our team of AI and automation specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article) => (
                  <article key={article.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/BlogPosting">
                    {/* Article Image */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={`${article.title} - ${article.category} insights from ImpTrax`}
                        className="w-full h-full object-contain"
                        itemProp="image"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <svg class="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                          ARTICLE
                        </span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="text-sm font-medium text-gray-600">
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2" itemProp="headline">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                        {article.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between mb-4">
                        <time className="text-sm text-gray-500" itemProp="datePublished" dateTime={article.publishDate}>
                          {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="text-sm text-gray-500">
                          {article.readTime}
                        </span>
                      </div>
                      
                      {/* Read More Button */}
                      <Link 
                        to={`/insight/articles/${article.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        itemProp="url"
                      >
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-blue-100 mb-8">
                Subscribe to receive the latest insights and analysis directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Insight;