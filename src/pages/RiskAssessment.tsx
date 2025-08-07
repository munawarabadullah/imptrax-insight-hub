import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Shield, AlertTriangle, TrendingUp, BarChart3, Target, Brain, Zap, Globe, Users, Lock, Database, Settings, Workflow, Award, Clock, DollarSign, Activity, FileText, Search, Calculator, Eye, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleConsultationClick = (buttonText: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Risk Assessment',
        button: buttonText
      }
    });
  };

  const riskCategories = [
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Market Risk Assessment",
      description: "Comprehensive analysis of market volatility, price fluctuations, and economic exposure",
      features: ["Value-at-Risk (VaR) Modeling", "Stress Testing", "Scenario Analysis", "Market Volatility Tracking"]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Credit Risk Evaluation",
      description: "Advanced credit risk modeling and borrower assessment frameworks",
      features: ["Credit Scoring Models", "Default Probability Analysis", "Portfolio Risk Assessment", "Counterparty Risk Management"]
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      title: "Operational Risk Management",
      description: "Identification and mitigation of operational failures and process risks",
      features: ["Process Risk Analysis", "Fraud Detection", "System Failure Assessment", "Human Error Mitigation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Liquidity Risk Analysis",
      description: "Cash flow analysis and funding liquidity assessment tools",
      features: ["Cash Flow Forecasting", "Funding Gap Analysis", "Stress Liquidity Testing", "Asset Liquidity Assessment"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Regulatory Compliance Risk",
      description: "Comprehensive compliance monitoring and regulatory risk assessment",
      features: ["Regulatory Change Tracking", "Compliance Gap Analysis", "AML/KYC Risk Assessment", "Audit Trail Management"]
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "ESG Risk Assessment",
      description: "Environmental, Social, and Governance risk evaluation and reporting",
      features: ["ESG Scoring Models", "Climate Risk Analysis", "Social Impact Assessment", "Governance Risk Evaluation"]
    }
  ];

  const assessmentTools = [
    {
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      title: "Advanced Risk Modeling",
      description: "Sophisticated mathematical models for comprehensive risk quantification"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive risk assessment and pattern recognition"
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "Real-Time Monitoring",
      description: "Continuous risk surveillance with automated alerts and threshold management"
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      title: "Regulatory Reporting",
      description: "Automated compliance reporting and regulatory submission management"
    }
  ];

  const methodologies = [
    { name: "Monte Carlo Simulation", description: "Probabilistic risk modeling and scenario generation" },
    { name: "Value-at-Risk (VaR)", description: "Statistical risk measurement and capital allocation" },
    { name: "Stress Testing", description: "Adverse scenario analysis and resilience testing" },
    { name: "RAROC Analysis", description: "Risk-adjusted return on capital optimization" },
    { name: "Basel III Framework", description: "International regulatory capital and liquidity standards" },
    { name: "COSO Framework", description: "Enterprise risk management and internal controls" }
  ];

  const complianceFrameworks = [
    {
      title: "Asset Management Compliance",
      challenge: "Complex regulatory landscape with multiple overlapping requirements",
      solution: "Integrated compliance management system with automated monitoring and reporting",
      results: ["100% regulatory compliance", "50% reduction in compliance costs", "Real-time risk monitoring"]
    },
    {
      title: "Financial Risk Analytics Implementation",
      challenge: "Legacy risk systems unable to handle complex portfolio analytics",
      solution: "Advanced risk analytics platform with real-time processing capabilities",
      results: ["99.9% system uptime", "75% faster risk calculations", "Enhanced decision-making"]
    },
    {
      title: "Operational Risk Framework",
      challenge: "Inadequate operational risk identification and measurement processes",
      solution: "Comprehensive operational risk management framework with automated controls",
      results: ["60% reduction in operational losses", "Improved process efficiency", "Enhanced risk culture"]
    }
  ];

  const riskMetrics = [
    { metric: "Value-at-Risk (VaR)", description: "Maximum potential loss over a specific time period" },
    { metric: "Expected Shortfall (ES)", description: "Average loss beyond the VaR threshold" },
    { metric: "Risk-Adjusted Return", description: "Performance measurement considering risk exposure" },
    { metric: "Sharpe Ratio", description: "Risk-adjusted return per unit of volatility" },
    { metric: "Maximum Drawdown", description: "Largest peak-to-trough decline in portfolio value" },
    { metric: "Beta Coefficient", description: "Systematic risk relative to market movements" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600/20 text-red-200 border-red-400/30">
              Risk Assessment Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive <span className="text-orange-300">Risk Assessment</span> for Financial Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Advanced risk management solutions combining regulatory compliance, sophisticated analytics, and real-time monitoring to protect your financial institution from emerging threats and ensure sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleConsultationClick('Explore Risk Solutions')}
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              >
                Explore Risk Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => handleConsultationClick('Schedule Risk Assessment')}
                size="lg" 
                variant="outline" 
                className="border-red-300 text-red-300 hover:bg-red-300 hover:text-red-900 px-8 py-4 text-lg"
              >
                Schedule Risk Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Risk Assessment Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our risk assessment framework covers all critical areas of financial risk, ensuring comprehensive protection and regulatory compliance across your entire organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
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

      {/* Detailed Risk Assessment Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Risk Assessment Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive risk assessment methodologies and tools designed to identify, measure, and mitigate financial risks across all business operations.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="market-risk">Market Risk</TabsTrigger>
              <TabsTrigger value="credit-risk">Credit Risk</TabsTrigger>
              <TabsTrigger value="operational">Operational</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Enterprise Risk Assessment Framework</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    COMPANY delivers comprehensive risk assessment solutions that address the full spectrum of financial risks facing modern institutions. Our framework combines regulatory compliance with advanced analytics to provide actionable insights.
                  </p>
                  <div className="space-y-4">
                    {assessmentTools.map((tool, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{tool.title}</h4>
                          <p className="text-gray-600">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment Methodologies</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {methodologies.map((methodology, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-gray-900 mb-2">{methodology.name}</h5>
                        <p className="text-sm text-gray-600">{methodology.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market-risk" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Risk Assessment Excellence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced market risk assessment tools that provide comprehensive analysis of market volatility, price fluctuations, and economic exposure across all asset classes and trading positions.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Value-at-Risk Modeling</h4>
                      <p className="text-gray-600">Sophisticated VaR calculations using historical simulation, parametric, and Monte Carlo methods for accurate risk quantification.</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Stress Testing Framework</h4>
                      <p className="text-gray-600">Comprehensive stress testing scenarios including historical events, hypothetical scenarios, and regulatory-prescribed tests.</p>
                    </div>
                    <div className="border-l-4 border-yellow-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Scenario Analysis</h4>
                      <p className="text-gray-600">Forward-looking scenario analysis incorporating macroeconomic factors and market correlations for strategic planning.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Market Risk Metrics</h4>
                  <div className="space-y-4">
                    {riskMetrics.map((metric, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">{metric.metric}</h5>
                        <p className="text-sm text-gray-600">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credit-risk" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Credit Risk Assessment & Management</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive credit risk evaluation framework that combines traditional credit analysis with advanced modeling techniques to assess borrower creditworthiness and portfolio risk.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Credit Scoring Models</h4>
                      <p className="text-blue-700">Advanced statistical models for credit scoring, probability of default estimation, and loss given default calculations.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Portfolio Risk Analysis</h4>
                      <p className="text-purple-700">Comprehensive portfolio-level credit risk assessment including concentration risk and correlation analysis.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Counterparty Risk Management</h4>
                      <p className="text-green-700">Advanced counterparty risk assessment for derivatives and securities financing transactions.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Credit Risk Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Data Collection & Analysis</h5>
                        <p className="text-gray-600">Comprehensive borrower data gathering and financial statement analysis.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Risk Modeling & Scoring</h5>
                        <p className="text-gray-600">Application of statistical models and machine learning algorithms for risk assessment.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Portfolio Monitoring</h5>
                        <p className="text-gray-600">Continuous monitoring of credit exposures and early warning systems.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Risk Mitigation</h5>
                        <p className="text-gray-600">Implementation of risk mitigation strategies and portfolio optimization.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operational" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Operational Risk Management</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive operational risk assessment framework that identifies, measures, and mitigates risks arising from inadequate or failed internal processes, people, systems, or external events.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Process Risk</h4>
                      <p className="text-sm text-gray-600">Workflow analysis</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">People Risk</h4>
                      <p className="text-sm text-gray-600">Human error mitigation</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">System Risk</h4>
                      <p className="text-sm text-gray-600">Technology failures</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">External Risk</h4>
                      <p className="text-sm text-gray-600">External events</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Operational Risk Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Risk & Control Self-Assessment</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Key Risk Indicators</span>
                      <Badge className="bg-green-100 text-green-800">Monitoring</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Loss Event Database</span>
                      <Badge className="bg-green-100 text-green-800">Tracking</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Scenario Analysis</span>
                      <Badge className="bg-green-100 text-green-800">Predictive</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Business Continuity Planning</span>
                      <Badge className="bg-green-100 text-green-800">Resilience</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance & Risk Assessment</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive compliance risk assessment framework ensuring adherence to regulatory requirements while maintaining operational efficiency and competitive advantage.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Shield className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Regulatory Monitoring</h4>
                        <p className="text-gray-600">Continuous monitoring of regulatory changes and impact assessment on business operations.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <FileText className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Compliance Reporting</h4>
                        <p className="text-gray-600">Automated regulatory reporting with real-time data validation and submission management.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Search className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Gap Analysis</h4>
                        <p className="text-gray-600">Comprehensive compliance gap analysis and remediation planning for regulatory requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Compliance Frameworks</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Basel III Capital Requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">COSO Enterprise Risk Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">SOX Compliance & Controls</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">AML/KYC Requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">GDPR Data Protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">ESG Disclosure Requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Stress Testing Regulations</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Risk Analytics & Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Leverage cutting-edge analytics and artificial intelligence to transform risk data into actionable insights, enabling proactive risk management and strategic decision-making.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Brain className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-blue-900">Machine Learning Models</h4>
                      <p className="text-blue-700">Advanced ML algorithms for pattern recognition, anomaly detection, and predictive risk modeling.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Real-Time Analytics</h4>
                      <p className="text-purple-700">Continuous risk monitoring with real-time data processing and instant alert generation.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Predictive Modeling</h4>
                      <p className="text-green-700">Forward-looking risk models that anticipate potential threats and opportunities.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Analytics Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">Real-time</div>
                      <div className="text-sm text-gray-600">Risk Monitoring</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">AI-Powered</div>
                      <div className="text-sm text-gray-600">Insights</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">Predictive</div>
                      <div className="text-sm text-gray-600">Analytics</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">Automated</div>
                      <div className="text-sm text-gray-600">Reporting</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Implementation Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Risk Assessment Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative impact of our comprehensive risk assessment solutions across diverse financial institutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{framework.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{framework.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{framework.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {framework.results.map((result, idx) => (
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

      {/* Risk Assessment Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Risk Assessment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive risk assessment framework delivers measurable benefits that protect your institution while enabling sustainable growth and competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Protection</h3>
              <p className="text-gray-600">Comprehensive risk identification and mitigation strategies that protect against financial losses and regulatory penalties.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Performance</h3>
              <p className="text-gray-600">Risk-adjusted decision making that optimizes returns while maintaining appropriate risk levels across all business lines.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Automated compliance monitoring and reporting that ensures adherence to all applicable regulatory requirements.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Insights</h3>
              <p className="text-gray-600">Advanced analytics and AI-powered insights that transform risk data into strategic competitive advantages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Risk Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
            Partner with COMPANY to implement comprehensive risk assessment solutions that protect your institution, ensure regulatory compliance, and drive sustainable growth in today's complex financial landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleConsultationClick('Schedule Risk Assessment')}
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg"
            >
              Schedule Risk Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => handleConsultationClick('Download Risk Framework')}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
            >
              Download Risk Framework
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RiskAssessment;