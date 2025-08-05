import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Eye, MessageSquare, BarChart3, Heart, Building2, Home, Users, Zap, Cog, Shield, Target, Lightbulb, TrendingUp, CheckCircle, Settings, Bot, Database } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIDevelopmentServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO Meta Tags
    document.title = "AI & Automation Services | ImpTrax - Artificial Intelligence Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with ImpTrax AI and automation services. Expert solutions in generative AI, machine learning, MLOps, RPA, computer vision, and NLP for enterprise success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your business with ImpTrax AI and automation services. Expert solutions in generative AI, machine learning, MLOps, RPA, computer vision, and NLP for enterprise success.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleStartAIJourneyClick = () => {
    navigate('/schedule-consultation?source=ai-development&button=start-ai-journey');
  };

  const handleConsultExpertsClick = () => {
    navigate('/schedule-consultation?source=ai-development&button=consult-experts');
  };

  const handleGetStartedTodayClick = () => {
    navigate('/schedule-consultation?source=ai-development&button=get-started-today');
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=ai-development&button=schedule-consultation');
  };

  const services = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "We employ generative AI to develop technologically advanced automation solutions to meet the specific needs of businesses. We develop generative AI solutions that benefit businesses and consumers alike."
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "ImpTrax helps businesses adapt to transformative business practices to elevate products or services by identifying trends, detecting patterns, and decoding complex data to enhance efficiency and profitability."
    },
    {
      icon: Settings,
      title: "MLOps",
      description: "ImpTrax offers MLOps solutions to ensure businesses operationalize their machine learning models through pre-built accelerators, automated workflows, and best-in-class frameworks for greater operational efficiency."
    },
    {
      icon: Zap,
      title: "AIOps",
      description: "We at ImpTrax have developed expertise in combining natural language processing, machine learning, and data analytics to automate workflows in highly competitive IT environments to reduce downtime and costs."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Whether you need to analyze images, recognize video content, or identify objects, ImpTrax helps you gain meaningful information for data extraction, collection, analytics, or security reasons."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing (NLP)",
      description: "Develop chatbots, recognize speeches, evaluate texts, or translate with ImpTrax's Natural Language Processing (NLP) solutions to structure data for downstream applications to eliminate ambiguity and enhance creativity."
    },
    {
      icon: Brain,
      title: "Cognitive Services",
      description: "We ensure businesses have the latest functionalities to enhance customer experiences. We leverage cognitive AI to build virtual assistants to deliver personalized recommendations and enhance user experiences."
    },
    {
      icon: Bot,
      title: "RPA (Robotic Process Automation)",
      description: "Improve employee productivity and streamline business processes by automating repetitive tasks to reduce operational costs and improve revenue with ImpTrax's Robotic Process Automation (RPA) solutions."
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "We craft customized AI and automation solutions, aligning technology with your unique business needs to drive efficiency, innovation, and a competitive edge."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Expertise",
      description: "Our inclusive approach encompasses the entire project lifecycle, from discovery to development and beyond, ensuring flawless integration and lasting performance."
    },
    {
      icon: Database,
      title: "Diverse Technologies",
      description: "Ours is a versatile suite of technologies that cater to the broad spectrum of business services across industries to eliminate bottlenecks and improve efficiency."
    },
    {
      icon: Shield,
      title: "Proactive MLOps",
      description: "The best-in-class development practices ensure we deploy, manage, maintain, and secure the complete life-cycle of the solutions for concurrent improvement and reliability."
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "The user experience remains at the core of what we build. While developing automation solutions, we prioritize adaptability, customer experience, and intuitive interfaces."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Efficiency",
      description: "Streamline operations and eliminate bottlenecks with intelligent automation solutions that work around the clock."
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI technologies that transform how you operate and engage with customers."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with powerful analytics that reveal patterns and opportunities hidden in your data."
    },
    {
      icon: Cog,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation of repetitive tasks and optimized resource allocation."
    },
    {
      icon: Lightbulb,
      title: "Innovation Acceleration",
      description: "Accelerate innovation cycles and bring new products to market faster with AI-powered development processes."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Minimize risks through predictive analytics and intelligent monitoring systems that identify issues before they impact your business."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart },
    { name: "Financial Services", icon: Building2 },
    { name: "Real Estate", icon: Home }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-24 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed"></div>
             <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-1000"></div>
           <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Leading AI & Automation Solutions Provider
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-in-up animation-delay-200">
              <span className="block mb-2">Artificial Intelligence</span>
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-emerald-300 bg-clip-text text-transparent animate-gradient-x">
                Development Services
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              Transform your business with cutting-edge AI automation solutions. We help enterprises {' '}
              <span className="text-blue-300 font-semibold">reduce costs</span>, {' '}
              <span className="text-emerald-300 font-semibold">boost revenue</span>, and {' '}
               <span className="text-emerald-200 font-semibold">gain competitive advantage</span> {' '}
              through intelligent process automation.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 py-8 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-400">98%</div>
                 <div className="text-sm text-white/70">Client Satisfaction</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl lg:text-4xl font-bold text-emerald-300">24/7</div>
                <div className="text-sm text-white/70">Expert Support</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
              <Button 
                variant="accent" 
                size="xl" 
                className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300" 
                onClick={handleStartAIJourneyClick}
              >
                <span className="flex items-center">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white/10 backdrop-blur-sm border-emerald-300/30 text-white hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                onClick={handleConsultExpertsClick}
              >
                <span className="flex items-center">
                  Consult Our Experts
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-12 animate-fade-in-up animation-delay-1000">
              <p className="text-sm text-white/60 mb-6">Trusted by industry leaders worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-sm font-medium">Financial Service</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-sm font-medium">Banking</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-sm font-medium">Healthcare</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-sm font-medium">Real Estate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Our AI and 
              <span className="bg-gradient-primary bg-clip-text text-transparent">Automation Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ImpTrax offers comprehensive AI and automation solutions designed to transform your business operations and drive unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ImpTrax Differentiators Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              ImpTrax{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Differentiators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets ImpTrax apart in delivering exceptional AI and automation solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((differentiator, index) => {
              const IconComponent = differentiator.icon;
              return (
                <div key={index} className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{differentiator.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{differentiator.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of AI Automation Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Benefits of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-enabled machine learning, coupled with process automation, has taken center stage and is fueling incomparable growth. Discover the key benefits of AI automation for your business.
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ImpTrax is transforming industries with AI Innovation. Let's take your industry to the next level with our cutting-edge AI Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-6 text-center shadow-elegant hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{industry.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-12 lg:p-20 text-center text-primary-foreground">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI & Automation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with ImpTrax to unlock the full potential of artificial intelligence and automation for your organization. Our expert team has developed a technological knack for delivering quicker business outcomes and adding strategic value to your business.
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

export default AIDevelopmentServices;