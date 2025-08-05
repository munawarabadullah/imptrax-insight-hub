import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const KnowledgeBase = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Knowledge Base | ImpTrax - Resources & Information Hub";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Access our comprehensive knowledge base with consulting services, solutions, industry insights, and knowledge sharing resources from ImpTrax.');
    }

    // Set Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Knowledge Base | ImpTrax - Resources & Information Hub');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Access our comprehensive knowledge base with consulting services, solutions, industry insights, and knowledge sharing resources from ImpTrax.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Knowledge Base
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive resources, insights, and expertise across consulting services, solutions, industries, and knowledge sharing.
            </p>
          </div>

          {/* Consulting Services Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mr-4">
                Consulting Services
              </h2>
              <div className="flex-1 h-0.5 bg-blue-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/ai-consulting" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Consulting</h3>
                <p className="text-gray-600">Strategic AI implementation and optimization guidance</p>
              </Link>
              <Link to="/ai-development-services" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Development</h3>
                <p className="text-gray-600">Custom AI and automation solutions</p>
              </Link>
              <Link to="/business-intelligence" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Intelligence</h3>
                <p className="text-gray-600">Data-driven insights and analytics</p>
              </Link>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mr-4">
                Solutions
              </h2>
              <div className="flex-1 h-0.5 bg-blue-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/process-automation" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Process Automation</h3>
                <p className="text-gray-600">Streamline operations with intelligent automation</p>
              </Link>
              <Link to="/data-analytics" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-gray-600">Advanced data analysis and visualization</p>
              </Link>
              <Link to="/machine-learning-development" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">Custom ML models and predictive analytics</p>
              </Link>
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mr-4">
                Industries
              </h2>
              <div className="flex-1 h-0.5 bg-blue-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/hipaa-compliant" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600">HIPAA-compliant solutions and healthcare technology</p>
              </Link>
              <Link to="/real-estate-software" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate</h3>
                <p className="text-gray-600">Property management and real estate software</p>
              </Link>
              <Link to="/financial-workflow-process" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600">Financial workflow optimization and automation</p>
              </Link>
            </div>
          </section>

          {/* Knowledge Sharing Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mr-4">
                Knowledge Sharing
              </h2>
              <div className="flex-1 h-0.5 bg-blue-300"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/case-studies" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world success stories and implementations</p>
              </Link>
              <Link to="/industry-trends" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Trends</h3>
                <p className="text-gray-600">Latest insights and market developments</p>
              </Link>
              <Link to="/what-is-process-automation" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational Resources</h3>
                <p className="text-gray-600">Learn about automation and AI technologies</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;