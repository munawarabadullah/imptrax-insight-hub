import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  CreditCard,
  Database,
  Zap,
  Target,
  RefreshCw,
  PieChart,
  Calculator,
  Settings,
  ArrowRight,
  Star
} from 'lucide-react';

const RevenueCycleManagement = () => {
  const coreServices = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Revenue Optimization",
      description: "Maximize revenue capture through intelligent pricing strategies, charge optimization, and comprehensive revenue integrity monitoring.",
      features: ["Dynamic Pricing Models", "Revenue Leakage Detection", "Charge Capture Optimization", "Contract Management"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Revenue Recovery",
      description: "Advanced denial management and appeals processing to recover lost revenue and reduce write-offs through systematic recovery strategies.",
      features: ["Denial Management", "Appeals Processing", "Write-off Recovery", "Bad Debt Management"]
    },
    {
      icon: <Search className="w-8 h-8 text-purple-600" />,
      title: "Demographic Information Discovery",
      description: "Comprehensive patient demographic verification and data enrichment to ensure accurate billing and reduce claim denials.",
      features: ["Patient Verification", "Address Validation", "Contact Information Updates", "Demographic Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Insurance Discovery",
      description: "Automated insurance verification and discovery services to identify all available coverage and maximize reimbursement opportunities.",
      features: ["Coverage Discovery", "Benefit Verification", "Prior Authorization", "Secondary Insurance Identification"]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Eligibility Automation",
      description: "Real-time eligibility verification and automated benefit checks to prevent claim denials and ensure accurate patient responsibility estimates.",
      features: ["Real-time Verification", "Benefit Estimation", "Copay Calculation", "Deductible Tracking"]
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Claims Management and Denial Resolution",
      description: "Comprehensive claims processing, denial management, and resolution workflows to optimize reimbursement and reduce administrative burden.",
      features: ["Claims Processing", "Denial Analytics", "Root Cause Analysis", "Workflow Automation"]
    }
  ];

  const additionalServices = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Payment Posting Automation",
      description: "Automated payment posting with intelligent matching algorithms to reduce manual effort and improve cash flow."
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Revenue Discovery",
      description: "Advanced analytics to identify missed revenue opportunities and optimize financial performance."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "Analytics & Reporting",
      description: "Comprehensive financial analytics and reporting tools for data-driven decision making."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Increased Revenue",
      description: "Optimize revenue capture and reduce leakage through comprehensive cycle management."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Faster Collections",
      description: "Accelerate payment cycles and improve cash flow with automated processes."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-orange-600" />,
      title: "Reduced Denials",
      description: "Minimize claim denials through proactive eligibility verification and accurate coding."
    },
    {
      icon: <Calculator className="w-6 h-6 text-purple-600" />,
      title: "Cost Reduction",
      description: "Lower administrative costs through automation and streamlined workflows."
    }
  ];

  const technologies = [
    {
      name: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive analytics and revenue optimization."
    },
    {
      name: "Robotic Process Automation",
      description: "Automated workflows for claims processing and payment posting."
    },
    {
      name: "Real-time Integration",
      description: "Seamless integration with EHR systems and payer networks."
    },
    {
      name: "Cloud-Native Platform",
      description: "Scalable, secure cloud infrastructure for optimal performance."
    }
  ];

  const metrics = [
    { label: "Revenue Increase", value: "15-25%", icon: <TrendingUp className="w-5 h-5 text-green-600" /> },
    { label: "Denial Rate Reduction", value: "30-40%", icon: <AlertCircle className="w-5 h-5 text-red-600" /> },
    { label: "Collection Time", value: "50% Faster", icon: <Clock className="w-5 h-5 text-blue-600" /> },
    { label: "Cost Savings", value: "20-30%", icon: <Calculator className="w-5 h-5 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                23 Years of Healthcare Financial Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Revenue Cycle
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Management</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive healthcare revenue cycle management solutions that optimize financial performance, 
                reduce administrative burden, and maximize revenue capture through advanced automation and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Revenue Cycle Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions covering every aspect of healthcare revenue cycle management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Revenue Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized services to enhance your revenue cycle performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Solutions Tabs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Revenue Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our detailed revenue cycle management capabilities
              </p>
            </div>

            <Tabs defaultValue="optimization" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="optimization">Revenue Optimization</TabsTrigger>
                <TabsTrigger value="claims">Claims Management</TabsTrigger>
                <TabsTrigger value="automation">Process Automation</TabsTrigger>
                <TabsTrigger value="analytics">Analytics & Reporting</TabsTrigger>
              </TabsList>

              <TabsContent value="optimization" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Revenue Optimization Excellence</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Maximize revenue capture through intelligent strategies, comprehensive charge optimization, 
                      and systematic revenue integrity monitoring across all service lines.
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
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Optimization Features</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Charge Capture Optimization</span>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Revenue Leakage Detection</span>
                        <Badge className="bg-green-100 text-green-800">AI-Powered</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Dynamic Pricing Models</span>
                        <Badge className="bg-blue-100 text-blue-800">Advanced</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Contract Management</span>
                        <Badge className="bg-purple-100 text-purple-800">Automated</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="claims" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Claims Management & Denial Resolution</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Comprehensive claims processing with advanced denial management and systematic resolution 
                      workflows to maximize reimbursement and reduce administrative overhead.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-600 pl-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Claims Processing</h4>
                        <p className="text-gray-600">Automated claims submission with real-time validation and error checking.</p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Denial Management</h4>
                        <p className="text-gray-600">Systematic denial analysis and resolution with automated appeals processing.</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Root Cause Analysis</h4>
                        <p className="text-gray-600">Advanced analytics to identify and eliminate denial patterns.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Claims Features</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-900">Electronic Claims Submission</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        <span className="text-gray-900">Denial Analytics & Tracking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RefreshCw className="w-6 h-6 text-green-600" />
                        <span className="text-gray-900">Automated Appeals Processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                        <span className="text-gray-900">Performance Reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automation" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Process Automation & Workflow</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Streamline revenue cycle operations with intelligent automation, reducing manual effort 
                      and improving accuracy across all financial processes.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Eligibility Automation</h4>
                        <p className="text-blue-700">Real-time eligibility verification and benefit estimation.</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Payment Posting</h4>
                        <p className="text-purple-700">Automated payment posting with intelligent matching algorithms.</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Workflow Management</h4>
                        <p className="text-green-700">Intelligent task routing and priority management.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Automation Benefits</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Reduced Manual Work</h5>
                          <p className="text-gray-600">Eliminate repetitive tasks and focus on high-value activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Improved Accuracy</h5>
                          <p className="text-gray-600">Reduce errors and improve data quality through automation.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Faster Processing</h5>
                          <p className="text-gray-600">Accelerate cycle times and improve cash flow.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Cost Savings</h5>
                          <p className="text-gray-600">Reduce operational costs and improve efficiency.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Analytics & Reporting</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Comprehensive financial analytics and reporting tools that provide actionable insights 
                      for data-driven decision making and performance optimization.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <PieChart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Revenue Analytics</h4>
                        <p className="text-sm text-gray-600">Performance insights</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">KPI Dashboards</h4>
                        <p className="text-sm text-gray-600">Real-time metrics</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Trend Analysis</h4>
                        <p className="text-sm text-gray-600">Predictive insights</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Benchmarking</h4>
                        <p className="text-sm text-gray-600">Industry comparisons</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Reporting Features</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Financial Dashboards</span>
                        <Badge className="bg-green-100 text-green-800">Real-time</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Revenue Analytics</span>
                        <Badge className="bg-blue-100 text-blue-800">Advanced</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Denial Analytics</span>
                        <Badge className="bg-purple-100 text-purple-800">Predictive</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Custom Reports</span>
                        <Badge className="bg-orange-100 text-orange-800">Flexible</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">Automated Alerts</span>
                        <Badge className="bg-red-100 text-red-800">Proactive</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Technology Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by cutting-edge technology for optimal performance and scalability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Revenue Cycle Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us to optimize your healthcare revenue cycle and achieve sustainable financial growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RevenueCycleManagement;