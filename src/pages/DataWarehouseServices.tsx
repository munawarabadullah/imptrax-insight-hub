import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cloud, Server, HardDrive, Shield, Clock, CheckCircle, Users, Building2, ShoppingCart, Factory, Lock, RefreshCw, Headphones, TrendingUp, BarChart3, Zap, Target, Settings, Globe, ArrowUpDown, Plus, Minus } from "lucide-react";

const DataWarehouseServices = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Data Warehouse Services | ImpTrax - Enterprise Data Warehousing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional data warehouse services from ImpTrax. 23+ years of expertise in data warehousing, ETL processes, cloud migration, and business intelligence solutions for enterprise clients.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional data warehouse services from ImpTrax. 23+ years of expertise in data warehousing, ETL processes, cloud migration, and business intelligence solutions for enterprise clients.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleGetConsultationClick = () => {
    navigate('/schedule-consultation?source=data-warehouse&button=get-consultation');
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=data-warehouse&button=schedule-consultation');
  };

  const handleDownloadGuideClick = () => {
    navigate('/schedule-consultation?source=data-warehouse&button=download-guide');
  };

  const stats = [
    { number: "23+", label: "Years of Experience" },
    { number: "300+", label: "Data Warehouses Built" },
    { number: "50TB+", label: "Data Processed Daily" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const services = [
    {
      icon: Database,
      title: "Data Warehouse Consulting",
      description: "We deliver comprehensive data warehouse consulting services to help you leverage enterprise data for sustainable business growth, reduced costs, and enhanced operational efficiency."
    },
    {
      icon: Settings,
      title: "DWH Solutions Development",
      description: "Our data warehousing specialists rapidly identify applicable data sources for your unique requirements and build warehouses that power accurate business intelligence and analytics."
    },
    {
      icon: ArrowUpDown,
      title: "Data Warehouse Integration",
      description: "If you're struggling to combine data from disparate sources, we implement advanced API technologies and deliver a unified view of all valuable data across your organization."
    },
    {
      icon: Cloud,
      title: "Data Warehouse Migration",
      description: "Our experienced team helps migrate your data warehouse from on-premises to cloud or across various platforms with minimal operational disruptions and zero data loss."
    },
    {
      icon: Headphones,
      title: "Data Warehouse Support",
      description: "We provide extensive ongoing support to help clients identify and resolve data warehousing issues, optimize storage costs, and ensure enterprise-grade security."
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Implement robust security protocols to safeguard sensitive data and ensure your data warehouse solutions comply with industry regulations and standards."
    }
  ];

  const deploymentOptions = [
    {
      icon: Server,
      title: "On-Premises",
      description: "Maintain complete control over your hardware and software, ensure data governance and regulatory compliance, and reduce network latency with on-premises deployment.",
      features: ["Complete data control", "Enhanced security", "Regulatory compliance", "Low latency access"]
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Minimize upfront expenses with cloud-based data warehouse solutions. We specialize in Amazon Redshift, Google BigQuery, Microsoft Azure, and other leading platforms.",
      features: ["Scalable infrastructure", "Cost-effective", "Global accessibility", "Automatic updates"]
    },
    {
      icon: Globe,
      title: "Hybrid Solutions",
      description: "Combine the best of both worlds with hybrid data warehouse solutions that merge cloud services with on-premises deployment for optimal flexibility.",
      features: ["Flexible architecture", "Scalable on demand", "Data governance", "Cost optimization"]
    }
  ];

  const implementationSteps = [
    {
      icon: BarChart3,
      title: "Analysis & Design",
      description: "We analyze your data sources and IT infrastructure to design a data warehouse solution that perfectly fits your business requirements and growth plans."
    },
    {
      icon: ArrowUpDown,
      title: "Data Integration",
      description: "Our team integrates your new data warehouse with existing enterprise software to ensure maximum connectivity and provide a comprehensive 360-degree view."
    },
    {
      icon: RefreshCw,
      title: "Migration & Cleaning",
      description: "We ensure that data migrated to your warehouse is accurate, clean, and properly structured for error-free analysis and enhanced decision-making capabilities."
    },
    {
      icon: Settings,
      title: "Administration & Optimization",
      description: "Continuous support for your data warehouse environment, integrating new data sources, and ongoing performance improvements to maximize data quality."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Users, description: "HIPAA-compliant data warehousing for patient records and medical analytics" },
    { name: "Financial Services", icon: Building2, description: "Secure financial data warehousing with regulatory compliance and risk analytics" },
    { name: "Retail & E-commerce", icon: ShoppingCart, description: "Customer behavior analytics and inventory management data solutions" },
    { name: "Manufacturing", icon: Factory, description: "Supply chain optimization and production analytics data warehousing" }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Business Intelligence",
      description: "Transform raw data into actionable insights with powerful analytics and reporting capabilities."
    },
    {
      icon: Clock,
      title: "Faster Decision Making",
      description: "Access real-time data and historical trends to make informed business decisions quickly."
    },
    {
      icon: Shield,
      title: "Improved Data Quality",
      description: "Ensure data consistency, accuracy, and reliability across all business operations."
    },
    {
      icon: Zap,
      title: "Increased ROI",
      description: "Maximize return on investment through optimized data storage and processing efficiency."
    }
  ];

  const faqs = [
    {
      question: "What is a data warehouse and how does it differ from a database?",
      answer: "A data warehouse is a centralized repository that stores integrated data from multiple sources, optimized for analysis and reporting. Unlike operational databases that handle day-to-day transactions, data warehouses are designed for complex queries, historical data analysis, and business intelligence. They use a different architecture (often star or snowflake schema) and are optimized for read-heavy operations rather than frequent updates."
    },
    {
      question: "How long does it typically take to implement a data warehouse?",
      answer: "Implementation timelines vary based on project complexity, data volume, and business requirements. A basic data warehouse can take 3-6 months, while enterprise-level implementations may require 6-18 months. Our phased approach allows you to see value early, with initial data marts delivered in 6-12 weeks, followed by iterative expansions based on your priorities and feedback."
    },
    {
      question: "What are the costs involved in building and maintaining a data warehouse?",
      answer: "Costs depend on factors like data volume, complexity, deployment model (cloud vs. on-premises), and ongoing support needs. Cloud-based solutions typically have lower upfront costs but ongoing operational expenses, while on-premises solutions require higher initial investment but may be more cost-effective long-term. We provide detailed cost analysis and ROI projections tailored to your specific requirements during our consultation process."
    },
    {
      question: "Can you migrate our existing data warehouse to the cloud?",
      answer: "Yes, we specialize in data warehouse migrations with zero data loss and minimal downtime. Our migration process includes thorough assessment, data mapping, performance optimization, and comprehensive testing. We support migrations to major cloud platforms including AWS Redshift, Google BigQuery, Microsoft Azure Synapse, and Snowflake, ensuring your new environment meets or exceeds current performance standards."
    },
    {
      question: "How do you ensure data security and compliance in the data warehouse?",
      answer: "We implement multi-layered security including encryption at rest and in transit, role-based access controls, audit logging, and compliance frameworks (GDPR, HIPAA, SOX, etc.). Our security measures include data masking, tokenization, network security, and regular security assessments. We also provide compliance documentation and support for regulatory audits to ensure your data warehouse meets industry standards."
    },
    {
      question: "What happens if our data sources change or we need to add new data sources?",
      answer: "Our data warehouse architectures are designed for flexibility and scalability. We build robust ETL/ELT pipelines that can easily accommodate new data sources, schema changes, and evolving business requirements. Our ongoing support includes data source integration, pipeline modifications, and performance optimization to ensure your warehouse continues to meet your growing needs."
    },
    {
      question: "How do you handle data quality and ensure accuracy in the warehouse?",
      answer: "We implement comprehensive data quality frameworks including data profiling, validation rules, cleansing procedures, and monitoring systems. Our process includes automated data quality checks, exception handling, data lineage tracking, and regular quality assessments. We also establish data governance policies and provide training to ensure consistent data quality standards across your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{backgroundColor: '#E0F3FF'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-20 animate-float">
            <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float-delayed">
            <div className="w-12 h-12 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
              <Cloud className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
          <div className="absolute bottom-40 left-32 animate-float-slow">
            <div className="w-14 h-14 bg-white/55 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
              <Server className="w-7 h-7 text-blue-700" />
            </div>
          </div>
          <div className="absolute bottom-32 right-20 animate-float">
            <div className="w-10 h-10 bg-white/45 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-cyan-700" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-blue-200/50 hover:bg-white/90 transition-all duration-300">
              <Database className="w-5 h-5 mr-3 text-blue-600" />
              Enterprise Data Warehousing Solutions
              <div className="ml-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              <span className="block mb-2">Data Warehouse</span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent relative">
                Services
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-700 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
              Transform your business with comprehensive data warehousing solutions. ImpTrax delivers 
              state-of-the-art data management strategies that enable powerful analytics, streamline operations, 
              and drive measurable business growth with{" "}
              <span className="text-blue-700 font-semibold whitespace-nowrap">23+ years of proven expertise</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0" 
                onClick={handleGetConsultationClick}
              >
                Get Data Warehouse Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm" 
                onClick={handleDownloadGuideClick}
              >
                <HardDrive className="w-5 h-5 mr-3" />
                Download Implementation Guide
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium">300+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-cyan-200/30 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our proven track record speaks for itself with measurable results across enterprise clients
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 hover:scale-105 hover:bg-white/90 relative overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Icon Background */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300">
                        {stat.number}
                      </div>
                      <div className="text-slate-600 font-semibold text-sm lg:text-base leading-tight">
                        {stat.label}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 h-1 bg-blue-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                          style={{ animationDelay: `${index * 200}ms` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-6 left-6 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-12 right-12 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Accent */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
                <span className="font-medium">Delivering Excellence Since 2001</span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-100/40 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Comprehensive Solutions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Data Warehousing Services
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                We Provide
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From strategic consulting to complete implementation, ImpTrax offers comprehensive 
              data warehousing services tailored to your unique business requirements and growth objectives.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-px bg-blue-300"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-300"></div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm border border-blue-100/60 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 hover:border-blue-200/80 hover:bg-white relative overflow-hidden hover:scale-105">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 rounded-bl-3xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="inline-flex items-center text-blue-600 font-medium text-sm">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-16 left-20 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full px-8 py-4 hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300 cursor-pointer group">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <span className="text-slate-700 font-medium">Need a custom solution? Let's discuss your requirements</span>
              <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{backgroundColor: '#D6EFFF'}}>
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-16 left-16 w-48 h-48 bg-white/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-16 right-16 w-36 h-36 bg-blue-200/40 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-cyan-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-blue-300/20 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-300 rounded-lg rotate-45 animate-float"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border border-cyan-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-full px-6 py-3 mb-8 shadow-lg shadow-blue-100/30">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-800">Flexible Infrastructure</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Data Warehouse{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Deployment Options
              </span>
            </h2>
            
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Choose the deployment strategy that best fits your infrastructure, security requirements, 
              and business objectives with our flexible data warehousing solutions.
            </p>
            
            {/* Enhanced Decorative Elements */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-blue-300"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>
                <div className="w-12 h-px bg-blue-300"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-12 h-px bg-cyan-300"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-cyan-400 to-cyan-300"></div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-3 max-w-7xl mx-auto">
            {deploymentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm border border-blue-200/60 rounded-3xl p-10 h-full hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:border-blue-300/80 hover:bg-white relative overflow-hidden hover:scale-105">
                    {/* Enhanced Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Premium Background Pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-blue-300 to-cyan-300 rounded-bl-3xl"></div>
                    </div>
                    
                    {/* Floating Ring */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 border-2 border-blue-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-100/50">
                        <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-blue-800 transition-colors duration-300">
                        {option.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                        {option.description}
                      </p>
                      
                      <ul className="space-y-4">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 group-hover:bg-green-200 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Enhanced Hover CTA */}
                      <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="inline-flex items-center text-blue-600 font-semibold text-sm bg-blue-50 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors duration-200">
                          <span>Explore {option.title}</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-16 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-20 left-24 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                      <div className="absolute bottom-24 right-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-float"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Bottom Section */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-blue-200/60 rounded-full px-10 py-5 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-300 cursor-pointer group">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
              <span className="text-slate-800 font-semibold text-lg">Not sure which option fits? Get personalized recommendations</span>
              <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-44 h-44 bg-blue-100/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-cyan-100/40 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        </div>
        
        {/* Process Flow Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 transform -translate-y-1/2 hidden lg:block"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">Proven Methodology</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Our Data Warehouse{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Implementation Process
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our proven methodology ensures successful data warehouse implementation with minimal 
              disruption to your business operations and maximum value delivery.
            </p>
            
            {/* Process Timeline Indicator */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-2">
                <div className="w-14 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                <div className="w-8 h-px bg-blue-300"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-8 h-px bg-cyan-300"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
                <div className="w-14 h-px bg-gradient-to-l from-transparent to-cyan-300"></div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group text-center relative">
                  {/* Connection Line */}
                  {index < implementationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-8 h-px bg-gradient-to-r from-blue-300 to-cyan-300 transform translate-x-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  )}
                  
                  <div className="bg-white/90 backdrop-blur-sm border border-blue-100/60 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 hover:border-blue-200/80 hover:bg-white relative overflow-hidden hover:scale-105">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Step Number Background */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-blue-100/50">
                        <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      
                      <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-bold text-blue-700">Step {index + 1}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-blue-800 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-6 h-1 bg-blue-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                          style={{ animationDelay: `${index * 150}ms` }}
                        ></div>
                      </div>
                      
                      {/* Hover Details */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="text-xs text-blue-600 font-medium bg-blue-50 rounded-lg px-3 py-2">
                          Duration: {index === 0 ? '1-2 weeks' : index === 1 ? '2-4 weeks' : index === 2 ? '4-8 weeks' : '1-2 weeks'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-16 left-16 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Process Summary */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full px-10 py-5 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 cursor-pointer group">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
              <span className="text-slate-800 font-semibold text-lg">Typical implementation: 8-16 weeks from start to production</span>
              <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/40 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-cyan-100/40 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* Industry Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M25,25 Q50,15 75,33" stroke="rgb(59 130 246 / 0.2)" strokeWidth="0.1" fill="none" />
            <path d="M75,33 Q85,50 75,67" stroke="rgb(6 182 212 / 0.2)" strokeWidth="0.1" fill="none" />
            <path d="M75,67 Q50,85 25,67" stroke="rgb(59 130 246 / 0.2)" strokeWidth="0.1" fill="none" />
            <path d="M25,67 Q15,50 25,25" stroke="rgb(6 182 212 / 0.2)" strokeWidth="0.1" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg shadow-blue-100/30">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">Cross-Industry Expertise</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Industries We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              With 23+ years of cross-industry expertise, ImpTrax delivers specialized data warehousing 
              solutions tailored to the unique requirements of various business sectors.
            </p>
            
            {/* Industry Stats */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">23+</div>
                  <div className="text-sm text-slate-600">Years</div>
                </div>
                <div className="w-px h-8 bg-blue-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">8</div>
                  <div className="text-sm text-slate-600">Industries</div>
                </div>
                <div className="w-px h-8 bg-cyan-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm border border-blue-100/60 rounded-2xl p-8 text-center h-full hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 hover:border-blue-200/80 hover:bg-white relative overflow-hidden hover:scale-105">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-blue-100/50">
                        <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                        {industry.name}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {industry.description}
                      </p>
                      
                      {/* Expertise Indicator */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-xs font-medium text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Specialized Solutions</span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 h-1 bg-blue-100 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                          style={{ animationDelay: `${index * 100}ms` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-16 left-16 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Industry Expertise CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-blue-200/60 rounded-full px-10 py-5 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-300 cursor-pointer group">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
              <span className="text-slate-800 font-semibold text-lg">Don't see your industry? We adapt to any sector's requirements</span>
              <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-32 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-32 right-32 w-40 h-40 bg-cyan-100/50 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200/40 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-cyan-200/40 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* Benefits Network Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-cyan-600 rounded-full"></div>
          {/* Benefit connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M20,25 Q40,10 60,25 Q80,40 60,55 Q40,70 20,55 Q10,40 20,25" stroke="rgb(59 130 246 / 0.15)" strokeWidth="0.2" fill="none" strokeDasharray="2,2" />
            <circle cx="20" cy="25" r="0.5" fill="rgb(59 130 246 / 0.3)" />
            <circle cx="60" cy="25" r="0.5" fill="rgb(6 182 212 / 0.3)" />
            <circle cx="60" cy="55" r="0.5" fill="rgb(59 130 246 / 0.3)" />
            <circle cx="20" cy="55" r="0.5" fill="rgb(6 182 212 / 0.3)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg shadow-blue-100/30">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">Measurable Business Impact</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Benefits of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Data Warehousing
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Transform your business operations with measurable benefits that drive growth, 
              improve decision-making, and enhance operational excellence.
            </p>
            
            {/* Value Metrics */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10x</div>
                  <div className="text-sm text-slate-600">Faster Queries</div>
                </div>
                <div className="w-px h-8 bg-blue-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">85%</div>
                  <div className="text-sm text-slate-600">Better Decisions</div>
                </div>
                <div className="w-px h-8 bg-cyan-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-slate-600">Time Savings</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-white/95 backdrop-blur-sm border border-blue-100/60 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 hover:border-blue-200/80 hover:bg-white relative overflow-hidden hover:scale-105">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                    
                    {/* Benefit Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Background Glow */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-100/50">
                        <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                      
                      {/* Value Indicator */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-xs font-medium text-blue-700">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Proven Results</span>
                        </div>
                      </div>
                      
                      {/* Impact Meter */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>Impact:</span>
                          <div className="flex-1 h-1 bg-blue-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                              style={{ animationDelay: `${index * 150}ms` }}
                            ></div>
                          </div>
                          <span className="text-blue-600 font-medium">High</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-6 right-6 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                      <div className="absolute top-12 left-12 w-1 h-1 bg-blue-500 rounded-full animate-float-slow"></div>
                      <div className="absolute bottom-16 right-16 w-1 h-1 bg-cyan-500 rounded-full animate-float"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Benefits Summary CTA */}
          <div className="text-center mt-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-200/50 shadow-xl shadow-blue-100/30">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Ready to Unlock These Benefits?</h3>
              </div>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have transformed their operations with data warehousing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Your Transformation
                </button>
                <button className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/15 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-cyan-200/25 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ctaGrid)" />
          </svg>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center animate-float">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-cyan-300/30 rounded-full flex items-center justify-center animate-float-delayed">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-7 h-7 bg-white/15 rounded-lg flex items-center justify-center animate-float-slow">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-cyan-200/40 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-4 mb-10 shadow-xl">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-white font-semibold text-lg">Trusted by 500+ Companies Worldwide</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-white/30 rounded-full border-2 border-white/50"></div>
                <div className="w-8 h-8 bg-cyan-300/40 rounded-full border-2 border-white/50"></div>
                <div className="w-8 h-8 bg-blue-300/40 rounded-full border-2 border-white/50"></div>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Data Infrastructure?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Partner with ImpTrax to build a robust, scalable data warehouse that drives business intelligence 
              and accelerates your digital transformation journey. Our experts are ready to help you unlock 
              the full potential of your data.
            </p>
            
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Quick Implementation</h3>
                <p className="text-blue-100 text-sm">Get started in weeks, not months</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-blue-100 text-sm">99.9% uptime guarantee</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-5.385-4.365-9.75-9.75-9.75z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-blue-100 text-sm">Expert assistance when you need it</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 border-0" 
                onClick={handleScheduleConsultationClick}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105" 
                onClick={handleDownloadGuideClick}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Data Warehouse Guide
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-100 text-lg mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+1-555-0123" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg">Call: +1 212.233.0300</span>
                </a>
                
                <a href="mailto:info@imptrax.com" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg">Email: info@imptrax.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-cyan-100/40 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* FAQ Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
          {/* Question mark pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <text x="20" y="30" fontSize="8" fill="rgb(59 130 246 / 0.1)" fontFamily="serif">?</text>
            <text x="70" y="50" fontSize="6" fill="rgb(6 182 212 / 0.1)" fontFamily="serif">?</text>
            <text x="40" y="70" fontSize="7" fill="rgb(59 130 246 / 0.1)" fontFamily="serif">?</text>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8 shadow-lg shadow-blue-100/30">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Expert Answers</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Get answers to the most common questions about data warehouse services and implementation.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm border border-blue-100/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300 group-hover:bg-blue-50/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 pr-4 group-hover:text-blue-800 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300">
                        {openFAQ === index ? (
                          <Minus className="w-4 h-4 text-blue-600 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-4 h-4 text-blue-600 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-8 pb-6 animate-fade-in-up">
                      <div className="border-t border-blue-100 pt-6">
                        <div className="bg-blue-50/50 rounded-xl p-6">
                          <p className="text-slate-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          
                          {/* Answer indicator */}
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-blue-100">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-slate-600 font-medium">Answered by our experts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-200/50 shadow-xl shadow-blue-100/30">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Still Have Questions?</h3>
                </div>
                
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Our data warehouse experts are here to help. Get personalized answers to your specific questions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleScheduleConsultationClick} 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <button className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold border border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </button>
                </div>
                
                {/* Quick contact */}
                <div className="mt-8 pt-6 border-t border-blue-200">
                  <p className="text-sm text-slate-600 mb-3">Or reach out directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                    <a href="tel:+1-555-0123" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-medium">+1 212.233.0300</span>
                    </a>
                    <div className="hidden sm:block w-px h-4 bg-blue-200"></div>
                    <a href="mailto:info@imptrax.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">info@imptrax.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataWarehouseServices;