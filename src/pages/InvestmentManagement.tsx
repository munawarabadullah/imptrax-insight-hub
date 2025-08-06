import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  Shield, 
  Users, 
  FileText, 
  Globe, 
  Zap,
  Building,
  DollarSign,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Database,
  Lock,
  Smartphone,
  Cloud,
  Settings,
  LineChart,
  Calculator,
  UserCheck,
  Briefcase,
  Home,
  MapPin
} from 'lucide-react';

const InvestmentManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleScheduleDemo = () => {
    navigate('/schedule-consultation', { 
      state: { 
        source: 'Investment Management',
        button: 'Tell Us About Your Project'
      }
    });
  };

  const handleViewSolutions = () => {
    navigate('/ai-consulting-services');
  };

  const solutions = [
    {
      id: 'fund-administration',
      title: 'Fund Administration Suite',
      description: 'Comprehensive fund administration and accounting solutions',
      icon: <Calculator className="h-8 w-8" />,
      features: ['Automated Fund Accounting', 'Investor Reporting', 'Compliance Management', 'Performance Analytics']
    },
    {
      id: 'private-equity',
      title: 'Private Equity Management',
      description: 'End-to-end private equity fund management platform',
      icon: <TrendingUp className="h-8 w-8" />,
      features: ['Deal Pipeline Management', 'Portfolio Monitoring', 'LP Communications', 'Capital Call Management']
    },
    {
      id: 'real-estate',
      title: 'Real Estate Investment',
      description: 'Specialized real estate fund management solutions',
      icon: <Building className="h-8 w-8" />,
      features: ['Property Portfolio Management', 'Acquisition Tracking', 'Investor Relations', 'Performance Reporting']
    },
    {
      id: 'venture-capital',
      title: 'Venture Capital Platform',
      description: 'Complete VC fund management and portfolio tracking',
      icon: <Zap className="h-8 w-8" />,
      features: ['Startup Portfolio Management', 'Due Diligence Tools', 'Cap Table Management', 'Exit Planning']
    }
  ];

  const successStories = [
    {
      company: 'Global PE Fund',
      industry: 'Private Equity',
      result: '40% reduction in administrative overhead',
      description: 'Streamlined fund operations and improved investor reporting efficiency'
    },
    {
      company: 'Real Estate Partners',
      industry: 'Real Estate Investment',
      result: '60% faster deal processing',
      description: 'Accelerated acquisition workflows and enhanced portfolio visibility'
    },
    {
      company: 'Venture Capital Firm',
      industry: 'Venture Capital',
      result: '3x improvement in portfolio tracking',
      description: 'Enhanced startup monitoring and streamlined investor communications'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Investment Management Excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Investment Operations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive fund management solutions for private equity, real estate, and venture capital firms. 
            Streamline operations, enhance investor relations, and maximize returns with our integrated platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleScheduleDemo}>
              Tell Us About Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleViewSolutions}>
              View Solutions
            </Button>
          </div>
        </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Investment Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end solutions for alternative investment management, 
              from fund administration to investor relations and performance analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Fund Management Suites
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive solutions designed for different investment strategies
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Platform Overview</TabsTrigger>
              <TabsTrigger value="private-equity">Private Equity Suite</TabsTrigger>
              <TabsTrigger value="real-estate">Real Estate Suite</TabsTrigger>
              <TabsTrigger value="venture-capital">Venture Capital</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800">
                    Unified Platform
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Complete Investment Management Ecosystem
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our integrated platform connects all aspects of fund management, from fundraising and investor onboarding 
                    to portfolio monitoring and reporting. Built with event-based accounting at its core, ensuring accuracy 
                    and real-time visibility across all operations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Real-time Data</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Compliance Ready</span>
                    </div>
                    <div className="flex items-center">
                      <Cloud className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Cloud-based</span>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium">Configurable</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Key Platform Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Fund Administration</span>
                        <p className="text-sm text-gray-600">Automated accounting, reporting, and compliance management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Investor Relations</span>
                        <p className="text-sm text-gray-600">Streamlined communications and transparent reporting</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Portfolio Management</span>
                        <p className="text-sm text-gray-600">Real-time monitoring and performance analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Risk Management</span>
                        <p className="text-sm text-gray-600">Comprehensive risk assessment and mitigation tools</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="private-equity" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    Fund Manager Suite for Private Equity
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Complete Private Equity Fund Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Streamline your private equity operations with our comprehensive suite designed specifically for PE firms. 
                    From deal sourcing to exit planning, manage your entire investment lifecycle with precision and efficiency. 
                    Our platform supports complex fund structures and provides real-time insights for informed decision-making.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Deal Pipeline Management</span>
                        <p className="text-sm text-gray-600">Track opportunities from sourcing to closing with automated workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Portfolio Monitoring</span>
                        <p className="text-sm text-gray-600">Real-time performance tracking and valuation management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">LP Relations</span>
                        <p className="text-sm text-gray-600">Streamlined investor communications and reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Private Equity Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Capital Calls</span>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Due Diligence</span>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <LineChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Valuations</span>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <UserCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium">Compliance</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <h5 className="font-semibold mb-2">Advanced Analytics</h5>
                    <p className="text-sm text-gray-600">
                      Leverage AI-powered insights for portfolio optimization, risk assessment, and performance benchmarking 
                      against industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="real-estate" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-green-100 text-green-800">
                    Fund Manager Suite For Private Real Estate Investment
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Specialized Real Estate Investment Platform
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Optimize your real estate investment operations with our purpose-built platform for real estate funds. 
                    Manage property acquisitions, track development projects, and provide transparent reporting to investors. 
                    Our solution handles complex real estate structures and provides detailed property-level analytics.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Property Portfolio Management</span>
                        <p className="text-sm text-gray-600">Comprehensive tracking of all real estate assets and investments</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Acquisition Lifecycle</span>
                        <p className="text-sm text-gray-600">Streamlined processes from sourcing to closing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PieChart className="h-5 w-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Performance Analytics</span>
                        <p className="text-sm text-gray-600">Detailed property-level and portfolio-wide reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Real Estate Capabilities</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">Asset Management</span>
                      <Home className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">Development Tracking</span>
                      <Building className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">Lease Management</span>
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">Market Analysis</span>
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <h5 className="font-semibold mb-2">Investor Experience</h5>
                    <p className="text-sm text-gray-600">
                      Provide investors with detailed property reports, market insights, and transparent performance metrics 
                      through our dedicated investor portal.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="venture-capital" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800">
                    Venture Capital Excellence
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Advanced VC Fund Management Platform
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Empower your venture capital operations with our comprehensive platform designed for the unique needs of VC firms. 
                    From startup evaluation to exit management, track your portfolio companies with precision and provide 
                    exceptional service to your limited partners.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Startup Portfolio Tracking</span>
                        <p className="text-sm text-gray-600">Monitor portfolio company performance and milestones</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Briefcase className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Cap Table Management</span>
                        <p className="text-sm text-gray-600">Accurate equity tracking and scenario modeling</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Deal Flow Management</span>
                        <p className="text-sm text-gray-600">Streamlined evaluation and investment processes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">VC Platform Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Star className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">Due Diligence Tools</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Clock className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">Milestone Tracking</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <TrendingUp className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">Valuation Management</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Users className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">LP Communications</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <h5 className="font-semibold mb-2">Integration Ecosystem</h5>
                    <p className="text-sm text-gray-600">
                      Connect with leading tools and services including payment processors, KYC/AML providers, 
                      and document management systems for seamless operations.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how leading investment firms are transforming their operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{story.industry}</Badge>
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  <CardTitle className="text-lg">{story.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{story.result}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Investment Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of investment professionals who trust our platform to manage their funds efficiently and effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InvestmentManagement;