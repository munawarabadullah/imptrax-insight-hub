import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, ArrowRight, TrendingUp, BarChart3, Users, MapPin, DollarSign, Shield, Target, Building, Home, Calculator, PieChart, LineChart, AlertTriangle, Award, Clock, ChevronDown, ChevronUp, Brain, Database, Globe, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RealEstateInvestmentAnalysis = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleConsultationClick = (buttonType: string) => {
    navigate(`/schedule-consultation?source=real-estate-investment-analysis&button=${buttonType}`);
  };

  const solutions = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Comparable Market Analysis",
      description: "Advanced CMA tools with real-time market data and predictive analytics",
      features: ["Automated Valuation Models", "Market Trend Analysis", "Comparable Property Matching", "Price Prediction Algorithms"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Demographic Insights Data",
      description: "Comprehensive demographic analysis for informed investment decisions",
      features: ["Population Growth Trends", "Income Distribution Analysis", "Employment Statistics", "Migration Patterns"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Performance & Risk Analysis",
      description: "Sophisticated risk assessment and performance tracking tools",
      features: ["Risk Scoring Models", "ROI Calculations", "Cash Flow Analysis", "Market Volatility Assessment"]
    },
    {
      icon: <PieChart className="w-8 h-8 text-red-600" />,
      title: "Portfolio Analysis",
      description: "Comprehensive portfolio management and optimization solutions",
      features: ["Diversification Analysis", "Asset Allocation", "Performance Benchmarking", "Rebalancing Recommendations"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      title: "Location Intelligence",
      description: "Geographic analysis and location-based investment insights",
      features: ["Neighborhood Scoring", "Proximity Analysis", "Development Pipeline", "Infrastructure Assessment"]
    },
    {
      icon: <Calculator className="w-8 h-8 text-orange-600" />,
      title: "Financial Modeling",
      description: "Advanced financial models and investment calculators",
      features: ["DCF Analysis", "IRR Calculations", "NPV Modeling", "Sensitivity Analysis"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Maximize Returns",
      description: "Identify high-potential investment opportunities with data-driven insights"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Minimize Risk",
      description: "Comprehensive risk assessment to protect your investment capital"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Save Time",
      description: "Automated analysis and reporting to accelerate decision-making"
    },
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Make Informed Decisions",
      description: "Access to comprehensive market data and predictive analytics"
    }
  ];

  const technologies = [
    { name: "Machine Learning", description: "Predictive modeling and pattern recognition" },
    { name: "Big Data Analytics", description: "Processing vast datasets for insights" },
    { name: "GIS Mapping", description: "Geographic information systems" },
    { name: "API Integrations", description: "MLS, public records, market data" },
    { name: "Cloud Computing", description: "Scalable, secure data processing" },
    { name: "Real-Time Data", description: "Live market feeds and updates" }
  ];

  const useCases = [
    {
      title: "Multi-Family Investment Fund",
      challenge: "Needed to identify undervalued apartment complexes in emerging markets across 15 states",
      solution: "Deployed comprehensive market analysis platform with demographic insights and risk assessment",
      results: ["35% increase in portfolio returns", "50% reduction in due diligence time", "$2.3B in successful acquisitions"]
    },
    {
      title: "REIT Portfolio Optimization",
      challenge: "Required sophisticated analytics to optimize $500M commercial real estate portfolio",
      solution: "Implemented advanced portfolio analysis with performance tracking and rebalancing algorithms",
      results: ["22% improvement in risk-adjusted returns", "40% better diversification", "15% cost reduction"]
    },
    {
      title: "Single-Family Rental Platform",
      challenge: "Scaling SFR acquisitions while maintaining quality and profitability standards",
      solution: "Integrated CMA tools with demographic analysis and automated valuation models",
      results: ["300% increase in acquisition rate", "25% higher rental yields", "90% accuracy in value predictions"]
    }
  ];

  const faqs = [
    {
      question: "What types of real estate investments can your platform analyze?",
      answer: "Our platform supports analysis for all major real estate asset classes including single-family homes, multi-family properties, commercial real estate, industrial properties, retail spaces, and mixed-use developments. We provide specialized tools for each property type with relevant metrics and benchmarks."
    },
    {
      question: "How accurate are your property valuations and market predictions?",
      answer: "Our automated valuation models (AVMs) achieve 95%+ accuracy within 10% of actual sale prices. Our predictive analytics leverage machine learning algorithms trained on millions of transactions, demographic data, and market indicators to provide highly reliable forecasts with confidence intervals."
    },
    {
      question: "What data sources do you integrate for market analysis?",
      answer: "We integrate data from MLS systems, public records, census data, employment statistics, crime data, school ratings, transportation networks, development permits, and real-time market feeds. Our platform processes over 500 data points per property to provide comprehensive analysis."
    },
    {
      question: "Can I analyze markets outside my local area?",
      answer: "Yes, our platform provides nationwide coverage across all 50 states and major metropolitan areas. You can analyze markets anywhere in the US, compare cross-market opportunities, and identify emerging investment hotspots regardless of your location."
    },
    {
      question: "How does the risk assessment feature work?",
      answer: "Our risk assessment analyzes multiple factors including market volatility, liquidity risk, location risk, property-specific risks, financing risks, and economic indicators. We provide risk scores, stress testing scenarios, and recommendations for risk mitigation strategies."
    },
    {
      question: "What financial metrics and calculations are included?",
      answer: "We provide comprehensive financial analysis including cap rates, cash-on-cash returns, IRR, NPV, DSCR, LTV ratios, cash flow projections, break-even analysis, and sensitivity testing. All calculations are customizable based on your specific investment criteria and financing scenarios."
    },
    {
      question: "How often is the market data updated?",
      answer: "Market data is updated in real-time for active listings and daily for sold comparables, demographic data, and economic indicators. Our algorithms continuously process new information to ensure you're working with the most current market conditions."
    },
    {
      question: "Can I integrate this with my existing investment management tools?",
      answer: "Yes, we offer robust API integrations and can connect with popular CRM systems, property management software, accounting platforms, and portfolio management tools. We also provide data export capabilities in multiple formats."
    },
    {
      question: "What support is available for new users?",
      answer: "We provide comprehensive onboarding including platform training, best practices workshops, dedicated account management, and 24/7 technical support. Our team includes real estate investment professionals who can assist with strategy and analysis interpretation."
    },
    {
      question: "How does pricing work for different portfolio sizes?",
      answer: "We offer flexible pricing tiers based on portfolio size, analysis volume, and feature requirements. Options include per-property analysis, monthly subscriptions, and enterprise licenses. Contact us for a customized quote based on your specific needs and investment scale."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">
              Real Estate Investment Analysis
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Make Smarter <span className="text-blue-300">Real Estate Investments</span> with Data-Driven Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Leverage the world's largest asset class with comprehensive analysis tools, market intelligence, and predictive analytics to maximize returns and minimize risk in American real estate markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => handleConsultationClick('start-analysis')}>
                Start Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-demo')}>
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Investment Analysis Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From market analysis to portfolio optimization, our platform provides the tools and insights you need to succeed in real estate investing across all American markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Analysis Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed features and methodologies behind each analysis component.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="risk-performance">Risk & Performance</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="financial">Financial Models</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Investment Intelligence at Scale</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ImpTrax delivers comprehensive real estate investment analysis that transforms how investors identify, evaluate, and manage property investments across American markets.
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
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-900 mb-2">{tech.name}</h5>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market-analysis" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Comparable Market Analysis Excellence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced CMA tools that leverage machine learning and real-time data to provide accurate property valuations and market insights across all American real estate markets.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Automated Valuation Models</h4>
                      <p className="text-gray-600">AI-powered AVMs with 95%+ accuracy, processing millions of data points for precise property valuations.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Market Trend Analysis</h4>
                      <p className="text-gray-600">Comprehensive trend analysis with predictive modeling for price movements and market cycles.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Comparable Matching</h4>
                      <p className="text-gray-600">Intelligent algorithms that identify the most relevant comparable properties based on multiple criteria.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Analysis Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">Real-time Market Data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">Machine Learning Algorithms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Database className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">MLS Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">Nationwide Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Demographic Insights & Market Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive demographic analysis that reveals population trends, economic indicators, and social factors driving real estate demand and investment opportunities.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Population Dynamics</h4>
                      <p className="text-blue-700">Growth trends, age distribution, household formation, and migration patterns.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Economic Indicators</h4>
                      <p className="text-purple-700">Income levels, employment rates, job growth, and economic diversity analysis.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Lifestyle Factors</h4>
                      <p className="text-green-700">Education levels, crime rates, amenities, and quality of life metrics.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Data Sources</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">US Census Bureau</h5>
                        <p className="text-gray-600">Official population and demographic statistics.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Bureau of Labor Statistics</h5>
                        <p className="text-gray-600">Employment data and economic indicators.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Local Government Data</h5>
                        <p className="text-gray-600">Permits, zoning, infrastructure, and development plans.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Third-Party Providers</h5>
                        <p className="text-gray-600">Crime data, school ratings, and lifestyle metrics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="risk-performance" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Risk & Performance Analysis</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Sophisticated risk assessment models and performance tracking tools that help investors understand potential returns and mitigate investment risks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Risk Assessment</h4>
                      <p className="text-sm text-gray-600">Multi-factor analysis</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Performance</h4>
                      <p className="text-sm text-gray-600">ROI tracking</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Analytics</h4>
                      <p className="text-sm text-gray-600">Predictive models</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Alerts</h4>
                      <p className="text-sm text-gray-600">Risk monitoring</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Risk Factors</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Market Risk</span>
                      <Badge className="bg-red-100 text-red-800">High Impact</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Location Risk</span>
                      <Badge className="bg-orange-100 text-orange-800">Medium Impact</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Liquidity Risk</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Variable</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Financing Risk</span>
                      <Badge className="bg-blue-100 text-blue-800">Manageable</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Property Risk</span>
                      <Badge className="bg-green-100 text-green-800">Low Impact</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Analysis & Optimization</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive portfolio management tools that help investors optimize asset allocation, track performance, and make strategic decisions across their real estate holdings.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <PieChart className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Diversification Analysis</h4>
                        <p className="text-gray-600">Assess portfolio balance across property types, locations, and market segments.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Target className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Performance Benchmarking</h4>
                        <p className="text-gray-600">Compare portfolio performance against market indices and peer groups.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Optimization Recommendations</h4>
                        <p className="text-gray-600">AI-powered suggestions for portfolio rebalancing and new acquisitions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Total Return Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Risk-Adjusted Returns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Cash Flow Tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Appreciation Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Correlation Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Stress Testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Scenario Modeling</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Financial Modeling</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Sophisticated financial models and calculators that provide detailed investment analysis, cash flow projections, and scenario planning for informed decision-making.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Calculator className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-blue-900">DCF Analysis</h4>
                      <p className="text-blue-700">Discounted cash flow models with customizable assumptions and sensitivity analysis.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <LineChart className="w-6 h-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold text-purple-900">IRR Calculations</h4>
                      <p className="text-purple-700">Internal rate of return analysis with multiple scenarios and exit strategies.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-semibold text-green-900">NPV Modeling</h4>
                      <p className="text-green-700">Net present value calculations with risk-adjusted discount rates.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Financial Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">Cap Rate</div>
                      <div className="text-sm text-gray-600">Yield Analysis</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">Cash-on-Cash</div>
                      <div className="text-sm text-gray-600">Return Metrics</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">DSCR</div>
                      <div className="text-sm text-gray-600">Coverage Ratio</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">LTV</div>
                      <div className="text-sm text-gray-600">Loan-to-Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases & Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative impact of our real estate investment analysis platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <Award className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our real estate investment analysis platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="border-l border-r border-b border-gray-200 bg-white px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Real Estate Returns?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Partner with ImpTrax to leverage advanced analytics, market intelligence, and proven methodologies that drive superior investment performance in American real estate markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={() => handleConsultationClick('start-free-analysis')}>
              Start Free Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-consultation')}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateInvestmentAnalysis;