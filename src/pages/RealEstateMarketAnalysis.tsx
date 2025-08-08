import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, TrendingUp, BarChart3, Brain, Target, Eye, Zap, Globe, Users, Shield, Database, Settings, Workflow, Award, Clock, DollarSign, Home, MapPin, LineChart, PieChart, Activity, Layers, Search, AlertTriangle, Plus, Minus, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RealEstateMarketAnalysis = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'real-estate-market-analysis',
        button: buttonType
      }
    });
  };

  const handleCaseStudiesClick = () => {
    navigate('/case-studies');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const coreServices = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Trends Intelligence",
      description: "Spot emerging trends before they become visible to competitors",
      features: ["Predictive Analytics", "Trend Forecasting", "Market Timing", "Competitive Intelligence"]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Real Customer Intelligence",
      description: "Deep insights into buyer behavior and preferences",
      features: ["Buyer Profiling", "Behavioral Analytics", "Preference Mapping", "Journey Analysis"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Market Dynamics Analysis",
      description: "Comprehensive analysis of supply, demand, and pricing dynamics",
      features: ["Supply Analysis", "Demand Forecasting", "Price Modeling", "Inventory Tracking"]
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Sector Intelligence",
      description: "Specialized insights across residential, commercial, and industrial sectors",
      features: ["Sector Analysis", "Performance Metrics", "Risk Assessment", "Growth Opportunities"]
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-600" />,
      title: "Market Opportunities",
      description: "Identify and capitalize on emerging market opportunities",
      features: ["Opportunity Mapping", "Investment Analysis", "ROI Forecasting", "Market Entry Strategy"]
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Market Drivers & Challenges",
      description: "Understand key factors driving market changes and potential obstacles",
      features: ["Driver Analysis", "Challenge Assessment", "Impact Modeling", "Mitigation Strategies"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Competitive Advantage",
      description: "Stay ahead of market trends and outperform competitors with data-driven insights"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Increased ROI",
      description: "Maximize investment returns through precise market timing and opportunity identification"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Risk Mitigation",
      description: "Reduce investment risks through comprehensive market analysis and forecasting"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Faster Decision Making",
      description: "Make informed decisions quickly with real-time market intelligence and analytics"
    }
  ];

  const technologies = [
    { name: "Machine Learning", description: "Advanced ML algorithms for pattern recognition" },
    { name: "Predictive Analytics", description: "Statistical models for trend forecasting" },
    { name: "Big Data Processing", description: "Real-time analysis of massive datasets" },
    { name: "AI-Powered Insights", description: "Artificial intelligence for market intelligence" },
    { name: "Geospatial Analytics", description: "Location-based market analysis" },
    { name: "Sentiment Analysis", description: "Social media and news sentiment tracking" }
  ];

  const useCases = [
    {
      title: "National Real Estate Investment Firm",
      challenge: "Needed to identify emerging markets before competitors",
      solution: "Implemented comprehensive market intelligence platform with predictive analytics",
      results: ["35% increase in profitable investments", "60% faster market entry", "25% reduction in investment risks"]
    },
    {
      title: "Regional Property Development Company",
      challenge: "Struggled with timing market cycles and identifying optimal development locations",
      solution: "Deployed AI-powered market analysis with real-time trend monitoring",
      results: ["40% improvement in project ROI", "50% reduction in market timing errors", "30% faster site selection"]
    },
    {
      title: "Commercial Real Estate Brokerage",
      challenge: "Lacked insights into client preferences and market demand patterns",
      solution: "Integrated customer intelligence platform with behavioral analytics",
      results: ["45% increase in client satisfaction", "55% improvement in deal closure rates", "35% growth in repeat business"]
    }
  ];

  const marketDrivers = [
    {
      category: "Economic Factors",
      drivers: ["Interest Rates", "Employment Levels", "GDP Growth", "Inflation Rates"],
      impact: "High",
      trend: "Variable"
    },
    {
      category: "Demographic Shifts",
      drivers: ["Population Growth", "Age Distribution", "Migration Patterns", "Household Formation"],
      impact: "Medium",
      trend: "Positive"
    },
    {
      category: "Technology Adoption",
      drivers: ["Remote Work", "PropTech Innovation", "Digital Transactions", "Virtual Tours"],
      impact: "High",
      trend: "Accelerating"
    },
    {
      category: "Regulatory Environment",
      drivers: ["Zoning Changes", "Tax Policies", "Environmental Regulations", "Housing Policies"],
      impact: "Medium",
      trend: "Evolving"
    }
  ];

  const faqs = [
    {
      question: "How does ImpTrax predict real estate market trends before they become visible?",
      answer: "Our platform uses advanced machine learning algorithms and big data analytics to analyze thousands of market indicators, including economic data, demographic shifts, social media sentiment, and transaction patterns. By processing this information in real-time, we can identify emerging trends 3-6 months before they become apparent to traditional market analysis methods."
    },
    {
      question: "What types of data sources does your market intelligence platform analyze?",
      answer: "We analyze over 200 different data sources including MLS data, economic indicators, demographic statistics, social media sentiment, news articles, satellite imagery, building permits, employment data, migration patterns, and proprietary transaction databases. This comprehensive approach ensures our insights are based on the most complete market picture available."
    },
    {
      question: "How accurate are your market forecasting models?",
      answer: "Our predictive models achieve 85-92% accuracy for short-term forecasts (3-6 months) and 75-85% accuracy for medium-term forecasts (6-18 months). We continuously validate and refine our models using historical data and real-world outcomes to maintain the highest possible accuracy levels."
    },
    {
      question: "Can your platform analyze specific geographic markets or property types?",
      answer: "Yes, our platform provides granular analysis down to the zip code level and covers all major property types including residential (single-family, condos, townhomes), commercial (office, retail, industrial), and multifamily properties. We can customize analysis for specific markets, submarkets, or property segments based on your needs."
    },
    {
      question: "How does customer intelligence help improve real estate business performance?",
      answer: "Our customer intelligence analyzes buyer behavior patterns, preferences, and decision-making processes to help you better understand your target market. This includes identifying high-value prospects, optimizing marketing strategies, improving customer experience, and increasing conversion rates by 30-50% on average."
    },
    {
      question: "What is the typical ROI for implementing your market analysis platform?",
      answer: "Our clients typically see ROI within 6-12 months, with average returns of 300-500% in the first year. Benefits include improved investment timing, reduced risks, faster deal identification, and enhanced competitive positioning. The exact ROI depends on your business size and how extensively you leverage our insights."
    },
    {
      question: "How often is your market data updated and how current are the insights?",
      answer: "Our platform updates continuously with real-time data feeds for critical indicators and daily updates for comprehensive market metrics. Most insights are current within 24-48 hours, ensuring you always have access to the latest market intelligence for timely decision-making."
    },
    {
      question: "Do you provide analysis for both residential and commercial real estate markets?",
      answer: "Absolutely. Our platform covers the entire real estate spectrum including residential sales and rentals, commercial office and retail, industrial properties, multifamily housing, and specialized sectors like healthcare and hospitality real estate. Each sector has customized analytics and benchmarks."
    },
    {
      question: "How does your platform help identify market opportunities before competitors?",
      answer: "We use proprietary algorithms that analyze leading indicators and weak signals in the market data. This includes tracking building permits, demographic shifts, infrastructure investments, employment changes, and other early-stage indicators that typically precede market movements by 6-18 months, giving you a significant competitive advantage."
    },
    {
      question: "What support and training do you provide for using the market analysis platform?",
      answer: "We provide comprehensive onboarding, training sessions, ongoing support, and regular market briefings. Our team includes dedicated market analysts who can help interpret insights and develop strategies. We also offer custom reporting and analysis services for complex market questions or special projects."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-300/10 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30 animate-fade-in">
              <TrendingUp className="w-4 h-4 mr-2" />
              Market Intelligence Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Dominate Your <span className="text-blue-300">Real Estate Market</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-100 animate-fade-in-up delay-200">
              Spot Trends Before They Explode
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-300">
              Transform raw data into essential intelligence. Leverage advanced analytics and AI-powered insights to identify market opportunities, predict trends, and make data-driven decisions that give you a competitive edge in the American real estate market.
            </p>
            
            {/* Feature Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-400">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Brain className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-sm font-medium">AI-Powered Analytics</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Eye className="w-5 h-5 mr-2 text-purple-300" />
                <span className="text-sm font-medium">Predictive Insights</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Target className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm font-medium">Market Opportunities</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300" onClick={() => handleConsultationClick('Tell Us About Your Project')}>
                  Tell Us About Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300" onClick={() => handleConsultationClick('Tell Us About Your Project')}>
                  Tell Us About Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <BarChart3 className="w-4 h-4 mr-2" />
              Comprehensive Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Turn Raw Data into Essential Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive market intelligence platform provides deep insights across all aspects of the American real estate market, from emerging trends to customer behavior analysis.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">6M</div>
                <div className="text-sm text-gray-600">Trend Lead Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Real-time Updates</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg backdrop-blur-sm bg-white/80 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300" onClick={() => navigate('/knowledge-base')}>
              Knowledge Base
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Market Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each market intelligence category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Market Trends</TabsTrigger>
              <TabsTrigger value="customer">Customer Intel</TabsTrigger>
              <TabsTrigger value="dynamics">Market Dynamics</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="drivers">Drivers & Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Intelligence at Scale</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ImpTrax delivers comprehensive market intelligence that transforms how real estate professionals understand and navigate the American market landscape.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h5 className="font-semibold text-gray-900 mb-2">{tech.name}</h5>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Trends Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Stay ahead of the competition by identifying and capitalizing on market trends before they become visible to others.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
                      <p className="text-gray-600">Advanced machine learning models that forecast market movements 3-6 months in advance with 85-92% accuracy.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Trend Identification</h4>
                      <p className="text-gray-600">Real-time analysis of market signals to identify emerging trends before they impact pricing and availability.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Competitive Intelligence</h4>
                      <p className="text-gray-600">Monitor competitor activities and market positioning to maintain strategic advantages.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Trend Analysis Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <LineChart className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">Price Movement Forecasting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Activity className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">Market Cycle Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">Opportunity Timing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">Risk Early Warning</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customer" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Real Customer Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Understand your customers like never before with deep behavioral analytics and preference mapping.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Buyer Behavior Analysis</h4>
                      <p className="text-blue-700">Track and analyze customer journey patterns, preferences, and decision-making processes.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Preference Mapping</h4>
                      <p className="text-purple-700">Identify customer preferences for locations, property types, amenities, and pricing.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Segmentation Analytics</h4>
                      <p className="text-green-700">Advanced customer segmentation based on behavior, demographics, and purchase patterns.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Intelligence Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Data Collection</h5>
                        <p className="text-gray-600">Gather customer interaction data from multiple touchpoints and sources.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Behavioral Analysis</h5>
                        <p className="text-gray-600">Apply AI algorithms to identify patterns and preferences in customer behavior.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Insight Generation</h5>
                        <p className="text-gray-600">Transform analysis into actionable insights and recommendations.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Strategy Implementation</h5>
                        <p className="text-gray-600">Apply insights to improve marketing, sales, and customer experience strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dynamics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Dynamics Analysis</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive analysis of supply, demand, and pricing dynamics across all market segments.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Supply Analysis</h4>
                      <p className="text-sm text-gray-600">Inventory tracking</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Demand Modeling</h4>
                      <p className="text-sm text-gray-600">Buyer demand forecasting</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Price Analytics</h4>
                      <p className="text-sm text-gray-600">Pricing optimization</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Location Intelligence</h4>
                      <p className="text-sm text-gray-600">Geographic analysis</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Market Drivers</h4>
                  <div className="space-y-4">
                    {marketDrivers.map((driver, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">{driver.category}</span>
                          <p className="text-sm text-gray-600">{driver.drivers.join(", ")}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`${driver.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {driver.impact}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Opportunities Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Identify and capitalize on emerging market opportunities before your competition.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Search className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Opportunity Discovery</h4>
                        <p className="text-gray-600">AI-powered algorithms scan market data to identify emerging opportunities across all segments.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Target className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Investment Analysis</h4>
                        <p className="text-gray-600">Comprehensive ROI analysis and risk assessment for identified opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timing Intelligence</h4>
                        <p className="text-gray-600">Optimal timing recommendations for market entry and investment decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Success Stories</h4>
                  <div className="space-y-4">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                        <h5 className="font-bold text-gray-900 mb-2">{useCase.title}</h5>
                        <p className="text-gray-600 mb-3">{useCase.challenge}</p>
                        <p className="text-gray-700 mb-3 font-medium">{useCase.solution}</p>
                        <div className="space-y-1">
                          {useCase.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-sm text-green-700">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="drivers" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Drivers & Challenges</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Understand the key factors driving market changes and potential challenges that could impact your investments.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-900 mb-2">Growth Drivers</h4>
                      <p className="text-green-700">Population growth, economic expansion, infrastructure development, and technology adoption.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-900 mb-2">Market Challenges</h4>
                      <p className="text-yellow-700">Regulatory changes, interest rate fluctuations, supply constraints, and economic uncertainties.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-2">Mitigation Strategies</h4>
                      <p className="text-blue-700">Data-driven approaches to minimize risks and capitalize on positive market drivers.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Impact Analysis</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Economic Indicators</span>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">High Impact</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Demographic Shifts</span>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">Medium Impact</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Technology Trends</span>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">High Impact</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Regulatory Changes</span>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">Medium Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our real estate market intelligence platform and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-6 h-6 text-blue-600 transform transition-transform duration-300" />
                      ) : (
                        <Plus className="w-6 h-6 text-blue-600 transform transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Still Have Questions CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our market intelligence experts are here to help you understand how our platform can transform your real estate business.
              </p>
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => handleConsultationClick('Schedule Expert Consultation')}
              >
                Schedule Expert Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your real estate business with AI-powered market intelligence. Start identifying opportunities before your competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => handleConsultationClick('Start Free Market Analysis')}
            >
              Start Free Market Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => handleConsultationClick('Tell Us About Your Project')}
            >
              Tell Us About Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateMarketAnalysis;