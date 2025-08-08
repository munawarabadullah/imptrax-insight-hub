import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Users, TrendingUp, Lock, Cloud, Smartphone, BarChart3, CreditCard, Database, Settings, Workflow, Brain, Target, Award, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BankingSolutions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Banking Solutions',
        button: buttonType
      }
    });
  };



  const solutions = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Open Banking Solutions",
      description: "Secure APIs and compliance frameworks for modern banking ecosystems",
      features: ["PSD2 Compliance", "API Management", "Third-Party Integration", "Data Security"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Core Banking Modernization",
      description: "Cloud-native platforms to replace legacy banking systems",
      features: ["Cloud Migration", "Real-time Processing", "Scalable Architecture", "Cost Optimization"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Payment Systems",
      description: "Advanced payment processing and digital wallet solutions",
      features: ["Real-time Payments", "Digital Wallets", "Cross-border Transfers", "Fraud Prevention"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Compliance & Security",
      description: "Regulatory compliance and cybersecurity frameworks",
      features: ["Risk Management", "AML/KYC", "Data Protection", "Audit Trails"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Digital Banking Platforms",
      description: "Mobile-first banking experiences and customer portals",
      features: ["Mobile Banking", "Customer Portals", "Self-Service", "Omnichannel"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Analytics & Intelligence",
      description: "AI-powered insights and business intelligence solutions",
      features: ["Predictive Analytics", "Customer Insights", "Risk Analytics", "Performance Metrics"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Increased Revenue",
      description: "Drive new revenue streams through innovative banking products and services"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Faster Time-to-Market",
      description: "Accelerate product launches with agile development and deployment"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Cost Reduction",
      description: "Reduce operational costs through automation and cloud optimization"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Enhanced Customer Experience",
      description: "Deliver personalized, seamless banking experiences across all channels"
    }
  ];

  const technologies = [
    { name: "Cloud Computing", description: "AWS, Azure, Google Cloud" },
    { name: "API Management", description: "RESTful APIs, GraphQL, Microservices" },
    { name: "Artificial Intelligence", description: "Machine Learning, NLP, Predictive Analytics" },
    { name: "Blockchain", description: "Distributed Ledger, Smart Contracts" },
    { name: "Mobile Development", description: "iOS, Android, React Native" },
    { name: "Security", description: "OAuth, JWT, Encryption, Biometrics" }
  ];

  const useCases = [
    {
      title: "Digital Transformation for Regional Bank",
      challenge: "Legacy core banking system limiting growth and customer experience",
      solution: "Cloud-native core banking platform with modern APIs and mobile banking",
      results: ["50% reduction in processing time", "300% increase in mobile adoption", "40% cost savings"]
    },
    {
      title: "Open Banking Implementation",
      challenge: "PSD2 compliance requirements and third-party integration needs",
      solution: "Comprehensive open banking platform with secure APIs and consent management",
      results: ["100% regulatory compliance", "25+ fintech partnerships", "35% revenue growth"]
    },
    {
      title: "Payment Modernization",
      challenge: "Outdated payment systems and limited real-time capabilities",
      solution: "Real-time payment processing with fraud detection and digital wallets",
      results: ["99.9% uptime", "60% faster transactions", "90% fraud reduction"]
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
              Banking Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-300">Financial Institution</span> for the Digital Era
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Modernize your banking operations with comprehensive solutions for open banking, core system transformation, payment processing, and digital customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => handleConsultationClick('explore-solutions')}>
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-consultation')}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Banking Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From legacy system modernization to cutting-edge fintech integration, we provide end-to-end solutions that drive digital transformation in banking.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each banking solution category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="open-banking">Open Banking</TabsTrigger>
              <TabsTrigger value="core-modernization">Core Systems</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="digital">Digital Banking</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Banking Transformation at Scale</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ImpTrax delivers comprehensive banking solutions that address the full spectrum of digital transformation challenges facing financial institutions today.
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
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Technologies</h4>
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

            <TabsContent value="open-banking" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Open Banking Excellence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Enable secure data sharing and third-party integrations with our comprehensive open banking platform that ensures regulatory compliance and drives innovation.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">API Management</h4>
                      <p className="text-gray-600">Secure, scalable APIs with comprehensive documentation, rate limiting, and monitoring capabilities.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Consent Management</h4>
                      <p className="text-gray-600">Robust consent frameworks ensuring customer data privacy and regulatory compliance.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Partner Ecosystem</h4>
                      <p className="text-gray-600">Streamlined onboarding and management of fintech partners and third-party providers.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Compliance Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">PSD2 & Open Banking Standards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lock className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">Strong Customer Authentication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Database className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">Data Protection & Privacy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">Regulatory Reporting</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="core-modernization" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Banking Modernization</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Transform legacy banking systems with cloud-native, microservices-based architectures that provide scalability, flexibility, and cost efficiency.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Cloud-Native Architecture</h4>
                      <p className="text-blue-700">Built for the cloud with containerization, auto-scaling, and high availability.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Microservices Design</h4>
                      <p className="text-purple-700">Modular architecture enabling independent deployment and scaling of services.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Real-Time Processing</h4>
                      <p className="text-green-700">Instant transaction processing and real-time account updates.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Migration Strategy</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Assessment & Planning</h5>
                        <p className="text-gray-600">Comprehensive analysis of existing systems and migration roadmap.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Phased Migration</h5>
                        <p className="text-gray-600">Gradual transition with minimal business disruption.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Testing & Validation</h5>
                        <p className="text-gray-600">Comprehensive testing and performance validation.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Go-Live & Support</h5>
                        <p className="text-gray-600">Smooth transition with ongoing support and optimization.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="payments" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Payment Systems</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Enable instant payments, digital wallets, and cross-border transactions with our comprehensive payment processing platform.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Real-Time</h4>
                      <p className="text-sm text-gray-600">Instant processing</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Secure</h4>
                      <p className="text-sm text-gray-600">Advanced fraud detection</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Global</h4>
                      <p className="text-sm text-gray-600">Cross-border support</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900">Mobile</h4>
                      <p className="text-sm text-gray-600">Digital wallets</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Payment Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">FedNow Integration</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">RTP Processing</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">SWIFT Integration</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Digital Wallets</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Fraud Detection</span>
                      <Badge className="bg-green-100 text-green-800">AI-Powered</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Digital Banking Platforms</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Create exceptional digital banking experiences with mobile-first platforms, customer portals, and omnichannel solutions.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Mobile Banking</h4>
                        <p className="text-gray-600">Native iOS and Android apps with biometric authentication and offline capabilities.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Customer Portals</h4>
                        <p className="text-gray-600">Self-service web portals with account management and financial planning tools.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Workflow className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Omnichannel Experience</h4>
                        <p className="text-gray-600">Seamless experience across mobile, web, and branch channels.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Platform Capabilities</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Account Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Transaction History</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Bill Pay & Transfers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Investment Tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Financial Planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Loan Applications</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">Customer Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Banking Analytics & Intelligence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Leverage AI-powered analytics to gain deep insights into customer behavior, risk management, and operational performance.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <Brain className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-blue-900">Predictive Analytics</h4>
                      <p className="text-blue-700">Forecast customer behavior and market trends with machine learning models.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Target className="w-6 h-6 text-purple-600 mb-2" />
                      <h4 className="font-semibold text-purple-900">Risk Analytics</h4>
                      <p className="text-purple-700">Advanced risk modeling and real-time fraud detection capabilities.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-semibold text-green-900">Performance Metrics</h4>
                      <p className="text-green-700">Comprehensive dashboards and KPI tracking for operational excellence.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Analytics Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">360°</div>
                      <div className="text-sm text-gray-600">Customer View</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">Real-time</div>
                      <div className="text-sm text-gray-600">Processing</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">AI-Powered</div>
                      <div className="text-sm text-gray-600">Insights</div>
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

      {/* Use Cases & Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations demonstrating the transformative impact of our banking solutions.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Banking Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Partner with ImpTrax to modernize your banking infrastructure, enhance customer experiences, and drive digital innovation in financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={() => handleConsultationClick('cta-schedule-consultation')}>
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg" onClick={() => navigate('/case-studies')}>
              Review Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BankingSolutions;