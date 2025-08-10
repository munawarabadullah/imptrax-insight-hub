import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample article data
const articles = [
  {
    id: 1,
    title: "Mid-Market Firms Can Punch Above Their Weight with AI - Our COO Explains How",
    category: "Software Development",
    excerpt: "Discover how mid-market companies can leverage AI technologies to compete with larger enterprises and drive significant business growth.",
    image: "/articles/mid-market-firms-ai-competitive-advantage.svg",
    slug: "mid-market-firms-ai-competitive-advantage",
    readTime: "5 min read",
    publishDate: "2024-01-15"
  },
  {
    id: 2,
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
  }
];

const Insight = () => {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insights & Analysis
              </h1>
              <p className="text-xl text-gray-600 mb-8">
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
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Article Image */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">
                          {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-sm text-gray-500">
                          {article.readTime}
                        </span>
                      </div>
                      
                      {/* Read More Button */}
                      <Link 
                        to={`/insight/articles/${article.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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