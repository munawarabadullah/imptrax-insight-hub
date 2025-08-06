import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Users, Brain, Zap, BarChart3, Building2, FileText, Newspaper, GraduationCap } from 'lucide-react';

const KnowledgeBase = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/schedule-consultation');
  };

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

  const knowledgeCategories = [
    {
      icon: Brain,
      title: "Consulting Services",
      description: "Expert guidance and strategic consulting",
      color: "bg-blue-500/10 text-blue-600",
      items: [
        { name: "AI Consulting", url: "/ai-consulting", description: "Strategic AI implementation and optimization guidance" },
        { name: "AI Development", url: "/ai-development-services", description: "Custom AI and automation solutions" },
        { name: "AI Consulting Services", url: "/ai-consulting-services", description: "Comprehensive AI consulting and strategy services" },
        { name: "AI-Driven Transformation", url: "/ai-driven-transformation", description: "Transform your business with AI-powered solutions" },
        { name: "Software Development", url: "/software-development-services", description: "Custom software development and engineering services" },
        { name: "Business Intelligence", url: "/business-intelligence", description: "Data-driven insights and analytics" }
      ]
    },
    {
      icon: Zap,
      title: "Solutions",
      description: "Innovative technology solutions",
      color: "bg-yellow-500/10 text-yellow-600",
      items: [
        { name: "Process Automation", url: "/process-automation", description: "Streamline operations with intelligent automation" },
        { name: "Robotic Process Automation", url: "/robotic-process-automation", description: "Automate repetitive tasks with RPA technology" },
        { name: "Workflow Optimization", url: "/workflow-optimization", description: "Optimize business workflows for maximum efficiency" },
        { name: "Data Analytics", url: "/data-analytics", description: "Advanced data analysis and visualization" },
        { name: "Data Migration", url: "/data-migration", description: "Seamless data migration and integration services" },
        { name: "Data Warehouse Services", url: "/data-warehouse-services", description: "Enterprise data warehousing solutions" },
        { name: "Machine Learning", url: "/machine-learning-development", description: "Custom ML models and predictive analytics" },
        { name: "Natural Language Processing", url: "/natural-language-processing", description: "NLP solutions for text analysis and understanding" },
        { name: "Predictive Analytics", url: "/predictive-analytics", description: "Forecast trends and outcomes with advanced analytics" },
        { name: "Real-Time Analytics", url: "/real-time-analytics", description: "Live data processing and real-time insights" },
        { name: "Risk Assessment", url: "/risk-assessment", description: "Comprehensive risk analysis and management solutions" }
      ]
    },
    {
      icon: Building2,
      title: "Industries",
      description: "Industry-specific expertise",
      color: "bg-green-500/10 text-green-600",
      items: [
        { name: "Healthcare", url: "/hipaa-compliant", description: "HIPAA-compliant solutions and healthcare technology" },
        { name: "Healthcare Automation", url: "/healthcare-automation", description: "Automated healthcare workflows and processes" },
        { name: "Real Estate", url: "/real-estate-software", description: "Property management and real estate software" },
        { name: "Real Estate Market Analysis", url: "/real-estate-market-analysis", description: "Advanced market analysis for real estate professionals" },
        { name: "Real Estate Investment Analysis", url: "/real-estate-investment-analysis", description: "Comprehensive investment analysis and portfolio management for real estate" },
        { name: "Financial Services", url: "/financial-workflow-process", description: "Financial workflow optimization and automation" },
        { name: "Banking Solutions", url: "/banking-solutions", description: "Comprehensive banking technology solutions" },
        { name: "Investment Management", url: "/investment-management", description: "Investment portfolio management and analytics" },
        { name: "Revenue Cycle Management", url: "/revenue-cycle-management", description: "Optimize revenue cycles and financial processes" },
        { name: "Compliance Management", url: "/compliance-management", description: "Regulatory compliance and risk management solutions" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Knowledge Sharing",
      description: "Educational resources and insights",
      color: "bg-purple-500/10 text-purple-600",
      items: [
        { name: "Case Studies", url: "/case-studies", description: "Real-world success stories and implementations" },
        { name: "Industry Trends", url: "/industry-trends", description: "Latest insights and market developments" },
        { name: "Educational Resources", url: "/what-is-process-automation", description: "Learn about automation and AI technologies" },
        { name: "Why Predictive Analytics", url: "/why-to-predictive-analytics", description: "Understanding the value of predictive analytics" },
        { name: "AI Prompt Library", url: "/ai-pluse/ai-prompts-library", description: "Collection of AI prompts for business development" }
      ]
    },
    {
      icon: FileText,
      title: "Misc.",
      description: "Additional resources and services",
      color: "bg-gray-500/10 text-gray-600",
      items: [
        { name: "Schedule Consultation", url: "/schedule-consultation", description: "Book a consultation with our experts" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <Header />
      
      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Knowledge Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Knowledge <span className="text-blue-600">Base</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of resources, insights, and expertise across AI consulting, 
              innovative solutions, industry knowledge, and educational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScheduleConsultation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Expert Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Resources
              </Button>
            </div>
          </div>

          {/* Knowledge Categories */}
          <div id="categories" className="space-y-12 mb-16">
            {knowledgeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Horizontal Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Link 
                        key={itemIndex}
                        to={item.url}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50/30">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                                {item.name}
                              </h3>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Resources */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Featured Content
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead with AI Insights
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Access our latest industry trends, case studies, and expert analysis to drive your business forward with cutting-edge AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  <Link to="/industry-trends">
                    <TrendingUp className="mr-2 w-5 h-5" />
                    View Trends
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <Link to="/case-studies">
                    <FileText className="mr-2 w-5 h-5" />
                    Read Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;