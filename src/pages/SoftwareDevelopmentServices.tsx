import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Users, TrendingUp, Lock, Cloud, Smartphone, BarChart3, Code, Database, Settings, Workflow, Brain, Target, Award, Clock, DollarSign, Layers, Monitor, Cog, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const SoftwareDevelopmentServices = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const coreCapabilities = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Product Consulting and Strategy",
      description: "Through a comprehensive assessment of your business, we will design a development roadmap that lays out product trajectory, feature prioritization, go-to-market plan, and so on.",
      features: ["Business Analysis", "Technical Architecture", "Product Roadmap", "Market Strategy"]
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "Custom Web and Mobile App Development",
      description: "We build fully customized web and mobile apps for B2B and B2C enterprises. From architecture and UIs to tech stack and sprint workflows, you maintain full control over the project.",
      features: ["Full-Stack Development", "Mobile Applications", "Progressive Web Apps", "Cross-Platform Solutions"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      title: "SaaS Product Engineering",
      description: "Build secure and scalable products hosted on the cloud. Our focus includes designing multi-tenant architectures, subscription management, integrations with third-party services, and more.",
      features: ["Multi-Tenant Architecture", "Subscription Management", "API Development", "Cloud Infrastructure"]
    },
    {
      icon: <Cog className="w-8 h-8 text-red-600" />,
      title: "Legacy Modernization and API Integration",
      description: "Modernize outdated apps or improve system interoperability. We specialize in reengineering legacy systems, integrating modern APIs, and enabling cross-system communication.",
      features: ["System Modernization", "API Integration", "Data Migration", "Performance Optimization"]
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: "Cloud and DevOps Implementation",
      description: "Implementing cloud-agnostic and mature DevOps practices through infrastructure automation, CI/CD pipeline orchestration, containerization, and proactive monitoring across environments.",
      features: ["Infrastructure Automation", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Analytics"]
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "Data Intelligence and Analytics",
      description: "We build agile data pipelines, apply advanced analytics, and use ML models and visualization tools to process enterprise-scale data and deliver insights that drive strategic decision-making.",
      features: ["Data Pipeline Development", "Machine Learning Models", "Business Intelligence", "Predictive Analytics"]
    }
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Custom Software Development Services",
      description: "End-to-end custom software solutions tailored to your business needs"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Software Consulting Services",
      description: "Strategic guidance and technical expertise for your software initiatives"
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "Software Integration Services",
      description: "Seamless integration of disparate systems and applications"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-600" />,
      title: "Mobile App Development Services",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      title: "Enterprise Software Development Services",
      description: "Scalable enterprise solutions for large organizations"
    },
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Software Product Development Services",
      description: "Complete product development lifecycle from concept to market"
    },
    {
      icon: <Cloud className="w-6 h-6 text-teal-600" />,
      title: "SaaS Development Services",
      description: "Cloud-native SaaS platforms with multi-tenant architecture"
    },
    {
      icon: <Workflow className="w-6 h-6 text-pink-600" />,
      title: "Legacy Software Modernization Services",
      description: "Transform legacy systems into modern, efficient applications"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Accelerated Digital Transformation",
      description: "Drive innovation and competitive advantage through cutting-edge software solutions"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Faster Time-to-Market",
      description: "Agile development methodologies ensure rapid delivery and deployment"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Cost Optimization",
      description: "Reduce operational costs through automation and efficient architecture"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Enhanced Security & Compliance",
      description: "Enterprise-grade security and regulatory compliance built-in"
    }
  ];

  const technologies = [
    { name: "Cloud Platforms", description: "AWS, Azure, Google Cloud, Kubernetes" },
    { name: "Programming Languages", description: "Python, Java, .NET, Node.js, React" },
    { name: "AI & Machine Learning", description: "TensorFlow, PyTorch, Scikit-learn" },
    { name: "Databases", description: "PostgreSQL, MongoDB, Redis, Elasticsearch" },
    { name: "DevOps Tools", description: "Docker, Jenkins, GitLab CI/CD, Terraform" },
    { name: "Mobile Technologies", description: "React Native, Flutter, Swift, Kotlin" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "Comprehensive requirement gathering and technical feasibility analysis",
      deliverables: ["Requirements Document", "Technical Architecture", "Project Roadmap"]
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "UI/UX design, system architecture, and detailed project planning",
      deliverables: ["System Design", "UI/UX Mockups", "Development Plan"]
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      deliverables: ["Working Software", "Test Reports", "Documentation"]
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance and support",
      deliverables: ["Live Application", "Support Documentation", "Training"]
    }
  ];

  const faqs = [
    {
      question: "What types of software development services does ImpTrax offer?",
      answer: "ImpTrax offers comprehensive software development services including custom application development, SaaS product engineering, mobile app development, legacy system modernization, cloud migration, API integration, and enterprise software solutions. We serve businesses across all industries with 23 years of experience from our Manhattan headquarters."
    },
    {
      question: "How long does a typical software development project take?",
      answer: "Project timelines vary based on complexity and scope. Simple applications typically take 3-6 months, while enterprise-level solutions may require 6-18 months. We use agile methodologies to deliver working software incrementally, allowing you to see progress and provide feedback throughout the development process."
    },
    {
      question: "What technologies and programming languages do you use?",
      answer: "We work with modern technology stacks including Python, Java, .NET, Node.js, React, Angular, Vue.js for web development; React Native, Flutter, Swift, and Kotlin for mobile; AWS, Azure, and Google Cloud for cloud infrastructure; and various databases like PostgreSQL, MongoDB, and Redis."
    },
    {
      question: "Do you provide ongoing support and maintenance after development?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and technical support. Our support packages are tailored to your specific needs and can include 24/7 monitoring and rapid response times."
    },
    {
      question: "How do you ensure the security of software applications?",
      answer: "Security is built into every stage of our development process. We implement industry best practices including secure coding standards, regular security audits, penetration testing, data encryption, access controls, and compliance with regulations like GDPR, HIPAA, and SOC 2."
    },
    {
      question: "What is your pricing model for software development projects?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project complexity, timeline, and resource requirements. We provide detailed estimates after understanding your specific requirements during our consultation process."
    },
    {
      question: "Can you help modernize our existing legacy software systems?",
      answer: "Absolutely! Legacy modernization is one of our core specialties. We assess your current systems, develop migration strategies, and modernize applications using cloud-native architectures, modern APIs, and current technology stacks while ensuring minimal business disruption."
    },
    {
      question: "Do you develop mobile applications for both iOS and Android?",
      answer: "Yes, we develop native iOS and Android applications as well as cross-platform solutions using React Native and Flutter. Our mobile development services include UI/UX design, backend integration, app store optimization, and ongoing maintenance."
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We use agile project management methodologies with regular sprint reviews, daily standups, and transparent communication. You'll have access to project dashboards, regular progress reports, and dedicated project managers to ensure clear communication throughout the development process."
    },
    {
      question: "What makes ImpTrax different from other software development companies?",
      answer: "With 23 years of experience in Manhattan's competitive market, ImpTrax combines deep technical expertise with business acumen. We focus on delivering measurable business value, not just code. Our team understands enterprise requirements, regulatory compliance, and scalability challenges that come with serious business applications."
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
              Software Development Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with <span className="text-blue-300">Custom Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              23 years of software excellence from the heart of Manhattan. We deliver enterprise-grade custom software, SaaS platforms, mobile applications, and digital transformation solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Engineering Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic consulting to full-scale development, we provide comprehensive software engineering services that transform ideas into powerful digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{capability.title}</CardTitle>
                  <CardDescription className="text-gray-600">{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
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

      {/* Software Development Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Software Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end software development services covering every aspect of your digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each software development service category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="saas">SaaS Engineering</TabsTrigger>
              <TabsTrigger value="analytics">Data & Analytics</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
              <TabsTrigger value="ai">AI Platforms</TabsTrigger>
              <TabsTrigger value="process">Development Process</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Software Development Excellence</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    ImpTrax delivers comprehensive software development solutions that address the full spectrum of digital transformation challenges facing modern businesses.
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
                  <div className="grid grid-cols-1 gap-4">
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

            <TabsContent value="saas" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">SaaS Product Engineering</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Build secure and scalable SaaS products with multi-tenant architectures, subscription management, and seamless third-party integrations.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Multi-Tenant Architecture</h4>
                      <p className="text-gray-600">Scalable, secure architecture supporting multiple customers with data isolation and customization.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Subscription Management</h4>
                      <p className="text-gray-600">Comprehensive billing, subscription tiers, usage tracking, and payment processing integration.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">API-First Design</h4>
                      <p className="text-gray-600">RESTful APIs and webhooks enabling seamless integrations with third-party services.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">SaaS Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Cloud className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">Cloud-Native Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">Enterprise Security & Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">Analytics & Reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">User Management & SSO</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Data Intelligence and Analytics</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Transform raw data into actionable insights with advanced analytics, machine learning models, and intelligent data pipelines.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Data Pipeline Development</h4>
                      <p className="text-blue-700">Automated ETL processes, real-time data streaming, and data quality management.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Machine Learning Models</h4>
                      <p className="text-purple-700">Predictive analytics, recommendation engines, and intelligent automation.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Business Intelligence</h4>
                      <p className="text-green-700">Interactive dashboards, KPI tracking, and executive reporting.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Analytics Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-gray-900">Big Data</h5>
                      <p className="text-sm text-gray-600">Petabyte-scale processing</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Brain className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-gray-900">AI/ML</h5>
                      <p className="text-sm text-gray-600">Intelligent insights</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-gray-900">Visualization</h5>
                      <p className="text-sm text-gray-600">Interactive dashboards</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-gray-900">Real-Time</h5>
                      <p className="text-sm text-gray-600">Live data streaming</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Cloud and DevOps Implementation</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Accelerate deployment and improve reliability with cloud-native architectures, automated CI/CD pipelines, and comprehensive monitoring.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Cloud className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Cloud Migration</h4>
                        <p className="text-gray-600">Seamless migration to AWS, Azure, or Google Cloud with minimal downtime.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Workflow className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">CI/CD Automation</h4>
                        <p className="text-gray-600">Automated testing, deployment, and release management pipelines.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Settings className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Infrastructure as Code</h4>
                        <p className="text-gray-600">Terraform and CloudFormation for reproducible infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">DevOps Tools</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Docker & Kubernetes</span>
                      <Badge className="bg-green-100 text-green-800">Container Orchestration</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Jenkins & GitLab CI</span>
                      <Badge className="bg-blue-100 text-blue-800">CI/CD Pipelines</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Terraform</span>
                      <Badge className="bg-purple-100 text-purple-800">Infrastructure as Code</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Prometheus & Grafana</span>
                      <Badge className="bg-orange-100 text-orange-800">Monitoring</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI-Driven Platforms</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Leverage artificial intelligence and machine learning to create intelligent applications that automate processes and provide predictive insights.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
                      <p className="text-gray-600">Chatbots, document analysis, sentiment analysis, and language translation.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Computer Vision</h4>
                      <p className="text-gray-600">Image recognition, object detection, and automated visual inspection.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
                      <p className="text-gray-600">Forecasting, risk assessment, and intelligent decision support systems.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">AI Technologies</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-900">TensorFlow & PyTorch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-green-600" />
                      <span className="text-gray-900">OpenAI GPT Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-900">Scikit-learn & Pandas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="w-6 h-6 text-orange-600" />
                      <span className="text-gray-900">MLOps & Model Deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Software Development Process</h3>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                  Our proven development methodology ensures successful project delivery with transparency, quality, and on-time results.
                </p>
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                          {step.step}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-900 text-sm">Deliverables:</h5>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                          <ArrowRight className="w-8 h-8 text-blue-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">23 Years of Software Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of Manhattan, New York, ImpTrax has been delivering cutting-edge software solutions for over two decades. Our deep expertise in enterprise software development, combined with our understanding of complex business requirements, makes us the trusted partner for organizations seeking digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">23+</div>
                  <div className="text-gray-700">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-700">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-700">Expert Developers</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose ImpTrax?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-blue-100">Two decades of successful software delivery across industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-blue-100">Senior developers with deep technical and business expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Manhattan Location</h4>
                    <p className="text-blue-100">Right in the heart of New York's business district</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h4 className="font-semibold">Enterprise Security</h4>
                    <p className="text-blue-100">Bank-level security and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our software development services and process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {expandedFAQ === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentServices;