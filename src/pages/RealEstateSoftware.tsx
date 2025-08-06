import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Search, Users, BarChart3, Shield, Smartphone, Globe, MapPin, Calendar, DollarSign, FileText, Camera, MessageSquare, Zap, Target, CheckCircle, TrendingUp, Building2, Key, Database } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RealEstateSoftware = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Real Estate Software Development | ImpTrax - Custom Property Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your real estate business with ImpTrax custom software solutions. Property management, CRM, mobile apps, and digital platforms for modern real estate professionals.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your real estate business with ImpTrax custom software solutions. Property management, CRM, mobile apps, and digital platforms for modern real estate professionals.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleStartProjectClick = () => {
    navigate('/schedule-consultation?source=real-estate&button=start-project');
  };

  const handleConsultExpertsClick = () => {
    navigate('/schedule-consultation?source=real-estate&button=consult-experts');
  };

  const handleGetStartedTodayClick = () => {
    navigate('/schedule-consultation?source=real-estate&button=get-started-today');
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=real-estate&button=schedule-consultation');
  };

  const services = [
    {
      icon: Home,
      title: "Property Management Systems",
      description: "Comprehensive property management solutions that streamline operations, automate workflows, and enhance tenant relationships with integrated communication tools."
    },
    {
      icon: Smartphone,
      title: "Mobile Real Estate Apps",
      description: "Native and cross-platform mobile applications for property search, virtual tours, agent communication, and seamless property transactions on-the-go."
    },
    {
      icon: Search,
      title: "Property Search Platforms",
      description: "Advanced search engines with AI-powered recommendations, detailed filtering options, and intuitive user interfaces for enhanced property discovery."
    },
    {
      icon: Users,
      title: "CRM & Lead Management",
      description: "Specialized CRM systems designed for real estate professionals to manage leads, track interactions, and nurture client relationships effectively."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting tools to analyze market trends, property performance, and business metrics for informed decision-making."
    },
    {
      icon: Globe,
      title: "Real Estate Portals",
      description: "Feature-rich web portals connecting buyers, sellers, and agents with advanced listing management, communication tools, and transaction support."
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "GIS integration and mapping solutions providing detailed location analytics, neighborhood insights, and proximity-based property recommendations."
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Integrated financial tools for rent collection, expense tracking, investment analysis, and comprehensive financial reporting for property portfolios."
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Virtual Tours & 3D Visualization",
      description: "Immersive virtual property tours and 3D visualization tools that allow potential buyers to explore properties remotely."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Automated scheduling systems for property viewings, meetings, and consultations with integrated calendar management."
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Centralized communication platform for seamless interaction between agents, clients, and stakeholders throughout the transaction process."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure document storage and management system for contracts, agreements, and property documentation with e-signature capabilities."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance features ensuring data protection and regulatory adherence in real estate transactions."
    },
    {
      icon: Database,
      title: "MLS Integration",
      description: "Seamless integration with Multiple Listing Services (MLS) for real-time property data synchronization and comprehensive market coverage."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline operations and automate repetitive tasks to focus on high-value activities and client relationships."
    },
    {
      icon: Target,
      title: "Enhanced User Experience",
      description: "Deliver exceptional user experiences with intuitive interfaces and seamless property search and transaction processes."
    },
    {
      icon: Zap,
      title: "Faster Transactions",
      description: "Accelerate property transactions with automated workflows, digital documentation, and streamlined communication channels."
    },
    {
      icon: CheckCircle,
      title: "Improved Lead Conversion",
      description: "Convert more leads into clients with advanced CRM capabilities, automated follow-ups, and personalized engagement strategies."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed business decisions with comprehensive analytics, market intelligence, and performance tracking capabilities."
    },
    {
      icon: Building2,
      title: "Scalable Solutions",
      description: "Grow your real estate business with scalable software solutions that adapt to your expanding portfolio and client base."
    }
  ];

  const industries = [
    { name: "Residential Real Estate", icon: Home },
    { name: "Commercial Properties", icon: Building2 },
    { name: "Property Management", icon: Key }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-foreground/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary-foreground/5 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-foreground/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-foreground/5 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-8 w-2 h-16 bg-primary-foreground/10 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-12 w-2 h-12 bg-primary-foreground/10 rotate-12 animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/5 w-1 h-20 bg-primary-foreground/10 -rotate-45 animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Enhanced Title with Better Typography */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm mb-6">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium tracking-wide">Real Estate Technology Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block mb-2">Real Estate Software</span>
                <span className="bg-gradient-light bg-clip-text text-transparent block">Development Services</span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed font-light">
                ImpTrax delivers cutting-edge real estate software solutions that transform how property professionals operate. From property management systems to mobile applications, we create digital experiences that drive business growth and enhance client satisfaction.
              </p>
            </div>
            
            {/* Enhanced Stats/Features Row */}
            <div className="flex flex-wrap justify-center gap-8 py-6">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Custom Development</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Mobile & Web Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button 
                variant="accent" 
                size="xl" 
                className="group relative overflow-hidden bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                onClick={handleStartProjectClick}
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="group bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300" 
                onClick={handleConsultExpertsClick}
              >
                <span className="flex items-center">
                  Consult Our Experts
                  <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">Comprehensive Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="block mb-2">Our Real Estate</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Software Solutions</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                ImpTrax specializes in developing comprehensive real estate software solutions that streamline operations, enhance user experiences, and drive business success.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">8+ Core Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Custom Built</span>
              </div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 relative overflow-hidden transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced Icon */}
                  <div className="relative z-10">
                    <div className="w-18 h-18 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-9 h-9 text-primary-foreground" />
                    </div>
                    
                    {/* Enhanced Content */}
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center text-primary font-medium text-sm">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-primary rounded-full text-primary-foreground font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Zap className="w-5 h-5 mr-2" />
              <span>Explore All Solutions</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Advanced{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our real estate software solutions come equipped with cutting-edge features designed to meet the evolving needs of modern property professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Benefits of ImpTrax{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Real Estate Software</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your real estate business with our innovative software solutions that deliver measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Industries We{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our real estate software solutions cater to diverse segments of the property industry, delivering specialized functionality for each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{industry.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Partner with ImpTrax to develop cutting-edge real estate software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences. Let's build the future of your property business together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" className="group" onClick={handleGetStartedTodayClick}>
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={handleScheduleConsultationClick}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateSoftware;