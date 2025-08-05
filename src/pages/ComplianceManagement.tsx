import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Shield, AlertTriangle, FileText, Users, TrendingUp, Lock, Cloud, Smartphone, BarChart3, Database, Settings, Workflow, Brain, Target, Award, Clock, DollarSign, Eye, Search, Gavel, BookOpen, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComplianceManagement = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const solutions = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Regulatory Compliance Management",
      description: "Comprehensive frameworks for managing complex regulatory requirements across jurisdictions",
      features: ["Multi-jurisdictional Compliance", "Regulatory Change Management", "Policy Automation", "Compliance Monitoring"]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "AML & KYC Solutions",
      description: "Advanced anti-money laundering and know-your-customer compliance systems",
      features: ["Real-time Transaction Monitoring", "Customer Due Diligence", "Sanctions Screening", "Suspicious Activity Reporting"]
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Risk Assessment & Management",
      description: "Comprehensive risk identification, assessment, and mitigation frameworks",
      features: ["Risk Scoring Models", "Operational Risk Management", "Credit Risk Assessment", "Market Risk Analytics"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Compliance Reporting & Analytics",
      description: "Automated reporting and advanced analytics for regulatory submissions",
      features: ["Regulatory Reporting", "Audit Trail Management", "Performance Dashboards", "Compliance Metrics"]
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-600" />,
      title: "Data Privacy & Protection",
      description: "GDPR, CCPA, and global data privacy compliance solutions",
      features: ["Data Mapping", "Consent Management", "Privacy Impact Assessments", "Data Subject Rights"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-orange-600" />,
      title: "Governance & Controls",
      description: "Enterprise governance frameworks and internal control systems",
      features: ["Policy Management", "Control Testing", "Governance Frameworks", "Compliance Training"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Reduced Regulatory Risk",
      description: "Minimize exposure to regulatory penalties and reputational damage through proactive compliance"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Operational Efficiency",
      description: "Streamline compliance processes through automation and intelligent workflows"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Cost Optimization",
      description: "Reduce compliance costs through centralized management and automated processes"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Enhanced Transparency",
      description: "Improve stakeholder confidence through transparent compliance reporting and governance"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", description: "ML-powered risk scoring, anomaly detection, and predictive analytics" },
    { name: "Cloud Computing", description: "Scalable, secure cloud infrastructure for compliance data and processes" },
    { name: "Blockchain", description: "Immutable audit trails and transparent compliance documentation" },
    { name: "API Integration", description: "Seamless integration with existing banking and regulatory systems" },
    { name: "Advanced Analytics", description: "Real-time monitoring, reporting, and business intelligence" },
    { name: "Automation", description: "Workflow automation, policy enforcement, and regulatory reporting" }
  ];

  const regulations = [
    {
      category: "Banking Compliance",
      frameworks: [
        { name: "Basel III/IV", description: "International regulatory framework for bank capital adequacy and risk management" },
        { name: "Dodd-Frank Act", description: "US financial reform legislation for systemic risk and consumer protection" },
        { name: "PSD2", description: "European directive for payment services and open banking" },
        { name: "CRD V", description: "EU Capital Requirements Directive for banking supervision" }
      ]
    },
    {
      category: "Financial Crime Prevention",
      frameworks: [
        { name: "AML Directives (5AMLD/6AMLD)", description: "EU anti-money laundering regulations" },
        { name: "Bank Secrecy Act (BSA)", description: "US anti-money laundering and financial crime prevention" },
        { name: "FATF Recommendations", description: "Global standards for combating money laundering and terrorist financing" },
        { name: "OFAC Sanctions", description: "US economic sanctions and trade restrictions" }
      ]
    },
    {
      category: "Data Protection",
      frameworks: [
        { name: "GDPR", description: "EU General Data Protection Regulation for data privacy" },
        { name: "CCPA", description: "California Consumer Privacy Act for data protection" },
        { name: "DORA", description: "Digital Operational Resilience Act for ICT risk management" },
        { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" }
      ]
    }
  ];

  const useCases = [
    {
      title: "Global Bank AML Transformation",
      challenge: "Multinational bank struggling with fragmented AML systems across 15 jurisdictions",
      solution: "Unified AML platform with AI-powered transaction monitoring and centralized case management",
      results: ["75% reduction in false positives", "60% faster investigation times", "100% regulatory compliance across all jurisdictions"]
    },
    {
      title: "Investment Fund Compliance Automation",
      challenge: "Asset management firm facing increasing regulatory burden and manual compliance processes",
      solution: "Automated compliance management system with real-time monitoring and regulatory reporting",
      results: ["90% reduction in manual compliance tasks", "50% faster regulatory reporting", "Zero compliance violations in 2 years"]
    },
    {
      title: "Digital Bank GDPR Implementation",
      challenge: "Fintech startup requiring comprehensive data privacy compliance for European expansion",
      solution: "End-to-end data privacy management platform with consent management and automated compliance",
      results: ["100% GDPR compliance", "Successful EU market entry", "Enhanced customer trust and retention"]
    }
  ];

  const complianceAreas = [
    {
      title: "Banking Compliance",
      description: "Comprehensive regulatory compliance for traditional and digital banking institutions",
      features: [
        "Capital adequacy monitoring and reporting",
        "Liquidity risk management and stress testing",
        "Credit risk assessment and provisioning",
        "Operational risk management frameworks",
        "Consumer protection and fair lending compliance",
        "Open banking and PSD2 compliance"
      ],
      regulations: ["Basel III/IV", "Dodd-Frank", "CRD V", "PSD2", "GDPR"]
    },
    {
      title: "Fund Compliance",
      description: "Specialized compliance solutions for investment funds, asset managers, and institutional investors",
      features: [
        "Investment compliance monitoring",
        "Portfolio risk assessment and limits",
        "Regulatory reporting automation",
        "Investor protection and disclosure",
        "ESG compliance and reporting",
        "Alternative investment fund compliance"
      ],
      regulations: ["AIFMD", "UCITS", "MiFID II", "SFDR", "Investment Company Act"]
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
              Compliance Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-blue-300">Regulatory Compliance</span> with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Navigate complex regulatory landscapes with comprehensive compliance management solutions designed for banking, fund management, and financial services institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg">
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Compliance Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regulatory compliance management to advanced risk analytics, we provide end-to-end solutions that ensure your institution stays ahead of evolving regulatory requirements.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Compliance Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each compliance management category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
              <TabsTrigger value="aml-kyc">AML & KYC</TabsTrigger>
              <TabsTrigger value="risk">Risk Management</TabsTrigger>
              <TabsTrigger value="privacy">Data Privacy</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Compliance Excellence at Scale</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    COMPANY delivers comprehensive compliance management solutions that address the full spectrum of regulatory challenges facing financial institutions today.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Proactive Compliance</h4>
                        <p className="text-gray-600">Stay ahead of regulatory changes with predictive compliance intelligence</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Automated Workflows</h4>
                        <p className="text-gray-600">Streamline compliance processes with intelligent automation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
                        <p className="text-gray-600">Gain insights with AI-powered compliance analytics and reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className="mx-auto mb-3 p-3 bg-white rounded-full w-fit">
                          {benefit.icon}
                        </div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-2">{benefit.title}</h5>
                        <p className="text-xs text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="regulatory" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance Management</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Navigate complex regulatory landscapes with comprehensive frameworks designed for multi-jurisdictional compliance.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Regulatory Change Management</h4>
                      <p className="text-gray-600">Stay ahead of regulatory changes with automated monitoring and impact assessment tools.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Policy Automation</h4>
                      <p className="text-gray-600">Automate policy implementation and enforcement across your organization.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Compliance Monitoring</h4>
                      <p className="text-gray-600">Real-time monitoring and alerting for compliance violations and risks.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Supported Regulations</h4>
                  <div className="space-y-6">
                    {regulations.map((category, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-4">{category.category}</h5>
                        <div className="space-y-3">
                          {category.frameworks.map((framework, idx) => (
                            <div key={idx} className="border-l-2 border-blue-300 pl-4">
                              <h6 className="font-medium text-gray-900">{framework.name}</h6>
                              <p className="text-sm text-gray-600">{framework.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="aml-kyc" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AML & KYC Solutions</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced anti-money laundering and know-your-customer solutions powered by AI and machine learning.
                  </p>
                  <div className="space-y-4">
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Eye className="w-6 h-6 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Real-time Transaction Monitoring</h4>
                      </div>
                      <p className="text-gray-600 text-sm">AI-powered monitoring of millions of transactions per second with advanced pattern recognition and anomaly detection.</p>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Users className="w-6 h-6 text-green-600" />
                        <h4 className="font-semibold text-gray-900">Customer Due Diligence</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Comprehensive KYC processes with automated identity verification, risk scoring, and enhanced due diligence workflows.</p>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Search className="w-6 h-6 text-purple-600" />
                        <h4 className="font-semibold text-gray-900">Sanctions Screening</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Real-time screening against global sanctions lists, PEP databases, and adverse media sources.</p>
                    </Card>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">AML Compliance Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">75% reduction in false positives with AI-driven risk scoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Automated SAR generation and regulatory reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Behavioral analytics for sophisticated money laundering detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Case management with workflow automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Multi-jurisdictional compliance support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Cloud-native architecture for scalability</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="risk" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Risk Assessment & Management</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive risk management frameworks covering operational, credit, market, and liquidity risks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                      <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Operational Risk</h4>
                      <p className="text-sm text-gray-600">Process failures, system outages, fraud detection</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Credit Risk</h4>
                      <p className="text-sm text-gray-600">Default probability, loss given default, exposure assessment</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Market Risk</h4>
                      <p className="text-sm text-gray-600">Price volatility, interest rate, currency risk</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Liquidity Risk</h4>
                      <p className="text-sm text-gray-600">Cash flow analysis, funding risk, stress testing</p>
                    </Card>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Risk Management Capabilities</h4>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                      <h5 className="font-semibold text-gray-900 mb-2">Advanced Risk Modeling</h5>
                      <p className="text-gray-600 text-sm">Monte Carlo simulations, stress testing, scenario analysis, and predictive risk modeling.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <h5 className="font-semibold text-gray-900 mb-2">Real-time Risk Monitoring</h5>
                      <p className="text-gray-600 text-sm">Continuous monitoring of risk exposures with automated alerting and escalation procedures.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <h5 className="font-semibold text-gray-900 mb-2">Regulatory Capital Management</h5>
                      <p className="text-gray-600 text-sm">Basel III/IV compliance, capital adequacy calculations, and regulatory reporting automation.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                      <h5 className="font-semibold text-gray-900 mb-2">Risk Appetite Framework</h5>
                      <p className="text-gray-600 text-sm">Define, monitor, and manage risk appetite across business lines and risk categories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Data Privacy & Protection</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive data privacy compliance solutions for GDPR, CCPA, and emerging global privacy regulations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Database className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Mapping & Discovery</h4>
                        <p className="text-gray-600 text-sm">Automated discovery and classification of personal data across your organization.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Consent Management</h4>
                        <p className="text-gray-600 text-sm">Granular consent collection, management, and withdrawal capabilities.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Subject Rights</h4>
                        <p className="text-gray-600 text-sm">Automated handling of access, rectification, erasure, and portability requests.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Privacy Compliance Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">GDPR Article 30 record of processing activities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Privacy impact assessments (DPIA) automation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Breach notification and reporting workflows</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Cross-border data transfer compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Vendor and third-party privacy assessments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Privacy by design implementation</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="governance" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Governance & Controls</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Enterprise governance frameworks and internal control systems for comprehensive compliance management.
                  </p>
                  <div className="space-y-6">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Policy Management</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Centralized policy creation, distribution, and acknowledgment tracking.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Version Control</Badge>
                        <Badge variant="secondary">Approval Workflows</Badge>
                        <Badge variant="secondary">Distribution Tracking</Badge>
                      </div>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Target className="w-6 h-6 text-green-600" />
                        <h4 className="font-semibold text-gray-900">Control Testing</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Automated control testing and effectiveness monitoring.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">SOX Compliance</Badge>
                        <Badge variant="secondary">Risk Assessment</Badge>
                        <Badge variant="secondary">Remediation Tracking</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Governance Framework</h4>
                  <div className="space-y-4">
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Gavel className="w-6 h-6 text-purple-600" />
                        <h5 className="font-semibold text-gray-900">Board Governance</h5>
                      </div>
                      <p className="text-gray-600 text-sm">Board reporting, committee management, and governance documentation.</p>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-6 h-6 text-orange-600" />
                        <h5 className="font-semibold text-gray-900">Compliance Training</h5>
                      </div>
                      <p className="text-gray-600 text-sm">Role-based training programs with tracking and certification management.</p>
                    </Card>
                    <Card className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Settings className="w-6 h-6 text-red-600" />
                        <h5 className="font-semibold text-gray-900">Audit Management</h5>
                      </div>
                      <p className="text-gray-600 text-sm">Internal and external audit coordination, finding tracking, and remediation.</p>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Compliance Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored compliance solutions for specific financial services sectors and regulatory requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">{area.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Supported Regulations</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.regulations.map((regulation, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {regulation}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage advanced technologies to enhance compliance effectiveness and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our compliance solutions have transformed financial institutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</CardTitle>
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
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Compliance Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Partner with COMPANY to build a comprehensive compliance management framework that protects your institution and enables sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Your Compliance Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg">
              Download Compliance Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceManagement;