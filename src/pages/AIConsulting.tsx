import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Award, Shield, CheckCircle, Star, TrendingUp, Zap, Target, Clock, BarChart3, Heart, Building2, Home, Sparkles, MessageSquare, Bot, Eye, Cog, FileText } from "lucide-react";

const AIConsulting = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "AI Consulting Services | ImpTrax - Expert Artificial Intelligence Guidance";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert AI consulting services from ImpTrax. Get strategic guidance on AI implementation, model design, and digital transformation with 23+ years of experience.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert AI consulting services from ImpTrax. Get strategic guidance on AI implementation, model design, and digital transformation with 23+ years of experience.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleGetAIConsultationClick = () => {
    navigate('/schedule-consultation?source=ai-consulting&button=get-ai-consultation');
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=ai-consulting&button=schedule-consultation');
  };

  const handleDownloadAIGuideClick = () => {
    navigate('/schedule-consultation?source=ai-consulting&button=download-ai-guide');
  };

  const stats = [
    { number: "23+", label: "Years of Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "150+", label: "AI Specialists" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "We deliver tailored AI launch strategies, define scalable architectures, and assess economic viability. Our services include expert guidance on model selection, security, compliance, and cost optimization."
    },
    {
      icon: Target,
      title: "Proof of Concept Development",
      description: "We develop and train modular AI components as proof of concept to validate technical feasibility and mitigate implementation risks early in the development process."
    },
    {
      icon: Zap,
      title: "MVP Development",
      description: "An AI MVP enables faster rollout and early ROI with reduced risk. We deliver functional MVPs covering full-cycle development, AI model design, and comprehensive quality assurance."
    },
    {
      icon: TrendingUp,
      title: "AI Model Design & Training",
      description: "We design and train proprietary AI/ML models including CNNs, RNNs, and GANs for tasks such as NLP, image recognition, and content generation with >95% accuracy."
    },
    {
      icon: Shield,
      title: "AI Support & Optimization",
      description: "We ensure continuous AI performance through real-time monitoring, model tuning, and integration of new data sources to maximize business value."
    },
    {
      icon: BarChart3,
      title: "AI Audit & Assessment",
      description: "Our experts conduct in-depth audits to diagnose issues, optimize model performance, and upgrade AI components for enhanced business outcomes."
    }
  ];

  const capabilities = [
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Solutions that produce new forms of creative content including text, images, 3D models, audio, video, and computer code based on specified parameters."
    },
    {
      icon: FileText,
      title: "Natural Language Processing",
      description: "AI systems that understand, interpret, and generate human language for text classification, sentiment analysis, entity recognition, and translation."
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Chatbots and virtual assistants that rely on NLP and machine learning to understand and respond in natural, contextually relevant ways."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Software designed to handle data aggregation, processing, and analysis tasks to produce accurate forecasts and intelligent prescriptions."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Software that automatically captures and interprets information from image and video data with user-defined actions for visual recognition."
    },
    {
      icon: Cog,
      title: "Business Automation",
      description: "Software employing machine learning and deep learning techniques to automate complex business workflows from data intake to decision making."
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
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{backgroundColor: '#E0F3FF'}}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-cyan-300/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Brain className="w-4 h-4 mr-2 animate-pulse" />
              Expert AI Consulting Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
              Artificial Intelligence{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
                Consulting Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed hover:text-foreground/80 transition-colors duration-300">
              Leverage expert guidance on AI technologies and effective integration into business operations. 
              ImpTrax designs state-of-the-art solutions tailored to your unique needs, ensuring optimal project cost and minimized risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg" onClick={handleGetAIConsultationClick}>
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center group hover:scale-110 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 100}ms`}}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
              How We Help
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground/80 transition-colors duration-300">
              With 23+ years of experience in artificial intelligence and 150+ IT professionals on board, 
              ImpTrax provides comprehensive assistance across AI implementation to help businesses design, 
              develop, and seamlessly maintain cutting-edge AI solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${400 + index * 150}ms`}}>
                  <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:scale-105">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{backgroundColor: '#D6EFFF'}}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-300/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-blue-400/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
              AI Software and Capabilities We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Specialize In
              </span>
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground/80 transition-colors duration-300">
              With practical experience across multiple industries, ImpTrax tailors AI solutions 
              to the specific needs of each domain, delivering cutting-edge capabilities.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${500 + index * 100}ms`}}>
                  <div className="bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-xl p-6 h-full hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 hover:border-blue-300/60 hover:bg-white/90 hover:-translate-y-3 hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
              Industries We{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
                Transform
              </span>
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground/80 transition-colors duration-300">
              ImpTrax delivers specialized AI solutions across key industries, 
              understanding unique challenges and regulatory requirements.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${600 + index * 200}ms`}}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '500ms'}}>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 hover:scale-105 transition-transform duration-300">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 hover:text-primary-foreground transition-colors duration-300">
              Get expert AI consulting from ImpTrax and unlock the full potential of artificial intelligence 
              for your organization. Let's discuss your AI strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90 hover:scale-105 hover:shadow-xl transition-all duration-300" onClick={handleScheduleConsultationClick}>
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300" onClick={handleDownloadAIGuideClick}>
                Download AI Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsulting;