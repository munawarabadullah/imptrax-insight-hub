import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Brain, TrendingUp, BarChart3, Calculator, MapPin, DollarSign, Clock, Shield, Zap, Target, Database, Settings, Award, ChevronDown, ChevronUp, Home, Building, PieChart, LineChart, Activity, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RealEstatePropertyAnalysisWithAI = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Real Estate Property Analysis with AI',
        button: buttonType
      }
    });
  };

  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Driven Property Valuation",
      description: "Advanced machine learning algorithms for accurate property valuations and market predictions",
      features: ["Automated Valuation Models (AVM)", "Comparative Market Analysis", "Price Prediction Analytics", "Market Trend Forecasting"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Data-Driven Market Insights",
      description: "Comprehensive market analysis using big data and predictive analytics",
      features: ["Market Trend Analysis", "Demographic Insights", "Economic Indicators", "Investment Opportunity Mapping"]
    },
    {
      icon: <Calculator className="w-8 h-8 text-green-600" />,
      title: "Efficient Deal Analysis",
      description: "Streamlined investment analysis with automated calculations and scenario modeling",
      features: ["ROI Calculations", "Cash Flow Analysis", "Risk Assessment", "Scenario Planning"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      title: "Location Intelligence",
      description: "Geographic analysis and neighborhood scoring for optimal investment decisions",
      features: ["Neighborhood Scoring", "Proximity Analysis", "Growth Potential Mapping", "Infrastructure Assessment"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Predictive Analytics",
      description: "Future market predictions and investment performance forecasting",
      features: ["Price Appreciation Forecasts", "Rental Yield Predictions", "Market Cycle Analysis", "Risk Probability Models"]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Comprehensive Data Integration",
      description: "Unified platform integrating multiple data sources for complete property analysis",
      features: ["MLS Integration", "Public Records Access", "Market Data Aggregation", "Real-time Updates"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Faster Analysis",
      description: "Reduce property analysis time from hours to minutes with automated AI-powered tools"
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Higher Accuracy",
      description: "Achieve 95%+ accuracy in property valuations using advanced machine learning models"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Better ROI",
      description: "Identify high-performing investment opportunities with data-driven insights"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Risk Mitigation",
      description: "Minimize investment risks through comprehensive market analysis and predictive modeling"
    }
  ];

  const analysisTypes = [
    { name: "Cash Flow Analysis", description: "Monthly and annual cash flow projections" },
    { name: "Cap Rate Calculation", description: "Capitalization rate analysis for investment properties" },
    { name: "Internal Rate of Return", description: "IRR calculations for long-term investment planning" },
    { name: "Gross Rent Multiplier", description: "GRM analysis for quick property comparisons" },
    { name: "Cost Per Square Foot", description: "Price per square foot analysis and benchmarking" },
    { name: "Value Per Door", description: "Multi-unit property valuation analysis" }
  ];

  const useCases = [
    {
      title: "Multi-Family Investment Analysis",
      challenge: "Investor needed to analyze 50+ multi-family properties across different markets",
      solution: "AI-powered bulk analysis with automated valuation and cash flow projections",
      results: ["90% time reduction in analysis", "Identified 15% higher ROI opportunities", "$2M in additional investment value"]
    },
    {
      title: "Commercial Real Estate Valuation",
      challenge: "Complex commercial property requiring detailed market analysis and risk assessment",
      solution: "Comprehensive AI analysis including location intelligence and predictive modeling",
      results: ["25% more accurate valuations", "Reduced due diligence time by 60%", "Improved investment confidence"]
    },
    {
      title: "Real Estate Portfolio Optimization",
      challenge: "Large portfolio requiring ongoing performance monitoring and optimization",
      solution: "Continuous AI monitoring with automated alerts and performance recommendations",
      results: ["20% portfolio performance improvement", "Proactive risk identification", "Optimized asset allocation"]
    }
  ];

  const faqs = [
    {
      question: "How accurate are AI-powered property valuations compared to traditional appraisals?",
      answer: "Our AI-powered valuations achieve 95%+ accuracy by analyzing thousands of data points including recent sales, market trends, property characteristics, and economic indicators. While traditional appraisals remain important for lending purposes, AI valuations provide faster, more consistent results for investment analysis."
    },
    {
      question: "What data sources does the AI analysis platform integrate with?",
      answer: "Our platform integrates with MLS systems, public property records, tax assessments, demographic data, economic indicators, rental listings, and market trend databases. This comprehensive data integration ensures thorough and accurate property analysis."
    },
    {
      question: "Can the platform analyze different types of real estate investments?",
      answer: "Yes, our AI platform supports analysis of residential properties, multi-family buildings, commercial real estate, mixed-use properties, and land investments. Each property type has specialized analysis modules tailored to its unique characteristics and investment metrics."
    },
    {
      question: "How does the AI predict future property values and market trends?",
      answer: "Our predictive models use machine learning algorithms trained on historical market data, economic indicators, demographic trends, and local development patterns. The AI continuously learns from new data to improve prediction accuracy and identify emerging market opportunities."
    },
    {
      question: "What investment metrics and calculations are included in the analysis?",
      answer: "The platform calculates all key real estate investment metrics including cash flow, cap rates, IRR, ROI, GRM, cash-on-cash returns, DSCR, and break-even analysis. It also provides scenario modeling for different financing options and market conditions."
    },
    {
      question: "How quickly can I get a complete property analysis report?",
      answer: "Most property analyses are completed within 2-5 minutes. Complex commercial properties or portfolio analyses may take up to 15 minutes. The platform provides real-time updates during the analysis process and delivers comprehensive reports instantly upon completion."
    },
    {
      question: "Does the platform provide comparative market analysis (CMA)?",
      answer: "Yes, our AI automatically identifies and analyzes comparable properties based on location, size, age, condition, and other relevant factors. The CMA includes recent sales, active listings, and market trends to provide context for property valuations."
    },
    {
      question: "Can I customize the analysis parameters for my investment strategy?",
      answer: "Absolutely. The platform allows you to set custom parameters including target returns, financing terms, holding periods, and risk tolerance. You can also create investment profiles for different strategies like buy-and-hold, fix-and-flip, or commercial development."
    },
    {
      question: "How does the platform assess investment risks?",
      answer: "Our risk assessment module analyzes market volatility, economic indicators, neighborhood trends, property condition, and financing risks. It provides risk scores and identifies potential red flags while suggesting mitigation strategies for identified risks."
    },
    {
      question: "Is the platform suitable for both individual investors and institutional users?",
      answer: "Yes, our platform scales from individual property investors to large institutional portfolios. We offer different subscription tiers with features ranging from basic property analysis to enterprise-level portfolio management and team collaboration tools."
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
              Real Estate AI Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-300">AI-Powered</span> Real Estate Property Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your real estate investment decisions with advanced AI analytics, automated valuations, and data-driven market insights for maximum ROI and minimized risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => handleConsultationClick('start-analysis')}>
                Start Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('Tell Us About Your Project')}>
                Tell Us About Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive AI-Driven Property Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to analyze real estate investments with unprecedented speed, accuracy, and depth of insight.
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

      {/* Detailed Analysis Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Analysis Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered real estate analysis tools and methodologies.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="valuation">AI Valuation</TabsTrigger>
              <TabsTrigger value="market-insights">Market Insights</TabsTrigger>
              <TabsTrigger value="deal-analysis">Deal Analysis</TabsTrigger>
              <TabsTrigger value="location">Location Intel</TabsTrigger>
              <TabsTrigger value="predictive">Predictive</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI-Driven Real Estate Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ImpTrax delivers the most advanced AI-powered real estate analysis platform, combining machine learning, big data analytics, and predictive modeling to revolutionize property investment decisions.
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
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Analysis Methods</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {analysisTypes.map((type, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-900 mb-2">{type.name}</h5>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="valuation" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Property Valuation</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our advanced Automated Valuation Models (AVM) analyze thousands of data points to provide accurate, instant property valuations with confidence intervals and supporting evidence.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning Models</h4>
                      <p className="text-gray-600">Advanced algorithms trained on millions of property transactions for maximum accuracy.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Data Integration</h4>
                      <p className="text-gray-600">Continuous updates from MLS, public records, and market data sources.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Confidence Scoring</h4>
                      <p className="text-gray-600">Transparent confidence levels with detailed supporting evidence and comparable analysis.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Valuation Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">Automated Valuation Models (AVM)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">Comparative Market Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">Price Trend Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">Accuracy Confidence Intervals</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market-insights" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Data-Driven Market Insights</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive market analysis combining demographic data, economic indicators, and local market trends to identify investment opportunities and risks.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Market Trend Analysis</h4>
                      <p className="text-blue-700">Historical and current market trends with future projections and cycle analysis.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Demographic Intelligence</h4>
                      <p className="text-purple-700">Population growth, income trends, and demographic shifts affecting property demand.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Economic Indicators</h4>
                      <p className="text-green-700">Employment rates, GDP growth, and economic factors impacting real estate markets.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Market Analysis Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Data Collection</h5>
                        <p className="text-gray-600">Aggregate data from multiple sources including MLS, census, and economic databases.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Pattern Recognition</h5>
                        <p className="text-gray-600">AI identifies patterns and correlations in market data and trends.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Insight Generation</h5>
                        <p className="text-gray-600">Generate actionable insights and investment recommendations.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Continuous Monitoring</h5>
                        <p className="text-gray-600">Real-time updates and alerts for market changes and opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deal-analysis" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Efficient Deal Analysis</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Streamlined investment analysis with automated calculations, scenario modeling, and comprehensive financial projections for informed decision-making.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Automated</h4>
                      <p className="text-sm text-gray-600">Calculations</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <PieChart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Scenario</h4>
                      <p className="text-sm text-gray-600">Modeling</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <LineChart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Cash Flow</h4>
                      <p className="text-sm text-gray-600">Projections</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Activity className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Risk</h4>
                      <p className="text-sm text-gray-600">Assessment</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Analysis Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Cash Flow Analysis</span>
                      <Badge className="bg-green-100 text-green-800">Real-time</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Cap Rate Calculation</span>
                      <Badge className="bg-green-100 text-green-800">Automated</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">IRR & ROI Analysis</span>
                      <Badge className="bg-green-100 text-green-800">Advanced</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Risk Scoring</span>
                      <Badge className="bg-blue-100 text-blue-800">AI-Powered</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Scenario Planning</span>
                      <Badge className="bg-purple-100 text-purple-800">Dynamic</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="location" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Location Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced geographic analysis and neighborhood scoring to identify optimal investment locations with growth potential and strong fundamentals.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Neighborhood Scoring</h4>
                        <p className="text-gray-600">Comprehensive scoring based on amenities, schools, transportation, and growth indicators.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Building className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Infrastructure Analysis</h4>
                        <p className="text-gray-600">Assessment of transportation, utilities, and planned development projects.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Growth Potential</h4>
                        <p className="text-gray-600">Predictive analysis of area development and appreciation potential.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Location Factors</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">School District Quality</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Transportation Access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Employment Centers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Retail & Amenities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Crime & Safety Statistics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Future Development Plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Environmental Factors</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="predictive" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Predictive Analytics</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced machine learning models that forecast market trends, property appreciation, and investment performance to guide strategic decisions.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-blue-900">Price Forecasting</h4>
                      <p className="text-blue-700">Predict future property values with confidence intervals and timeline projections.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold text-purple-900">Market Cycle Analysis</h4>
                      <p className="text-purple-700">Identify market cycles and optimal timing for buying and selling decisions.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <Target className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-semibold text-green-900">Risk Probability</h4>
                      <p className="text-green-700">Calculate probability of various risk scenarios and their potential impact.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Prediction Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">5-10 Years</div>
                      <div className="text-sm text-gray-600">Forecast Range</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">95%+</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">Real-time</div>
                      <div className="text-sm text-gray-600">Updates</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">Multi-scenario</div>
                      <div className="text-sm text-gray-600">Modeling</div>
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
              Real-world implementations demonstrating the transformative impact of AI-powered real estate analysis.
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
              Get answers to common questions about AI-powered real estate property analysis.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900 text-left">
                      {faq.question}
                    </CardTitle>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Real Estate Analysis?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Partner with ImpTrax to leverage AI-powered property analysis, maximize your investment returns, and make data-driven real estate decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={() => handleConsultationClick('start-free-analysis')}>
              Start Free Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg" onClick={() => handleConsultationClick('Tell Us About Your Project')}>
              Tell Us About Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstatePropertyAnalysisWithAI;