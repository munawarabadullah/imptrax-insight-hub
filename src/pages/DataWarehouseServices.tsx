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
              <span className="text-blue-700 font-semibold">23+ years of proven expertise</span>.
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Data Warehousing Services We Provide
            </h2>
            <p className="text-xl text-muted-foreground">
              From strategic consulting to complete implementation, ImpTrax offers comprehensive 
              data warehousing services tailored to your unique business requirements and growth objectives.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#D6EFFF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Data Warehouse{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Deployment Options
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the deployment strategy that best fits your infrastructure, security requirements, 
              and business objectives with our flexible data warehousing solutions.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {deploymentOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-xl p-8 h-full hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 hover:border-blue-200/60 hover:bg-white/80">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Data Warehouse{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Implementation Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our proven methodology ensures successful data warehouse implementation with minimal 
              disruption to your business operations and maximum value delivery.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              With 23+ years of cross-industry expertise, ImpTrax delivers specialized data warehousing 
              solutions tailored to the unique requirements of various business sectors.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-card border border-border rounded-lg p-6 text-center h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Benefits of Data Warehousing
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your business operations with measurable benefits that drive growth, 
              improve decision-making, and enhance operational excellence.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#E0F3FF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Data Infrastructure?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Partner with ImpTrax to build a robust, scalable data warehouse that drives business intelligence 
              and accelerates your digital transformation journey. Our experts are ready to help you unlock 
              the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleScheduleConsultationClick}>
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadGuideClick}>
                Download Data Warehouse Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to the most common questions about data warehouse services and implementation.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Have more questions? Our data warehouse experts are here to help.
              </p>
              <Button onClick={handleScheduleConsultationClick} className="bg-primary hover:bg-primary/90">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataWarehouseServices;