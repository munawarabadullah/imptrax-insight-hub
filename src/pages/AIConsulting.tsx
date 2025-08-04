import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Award, Shield, CheckCircle, Star, TrendingUp, Zap, Target, Clock, BarChart3, Heart, Building2, Home } from "lucide-react";

const AIConsulting = () => {
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
      title: "Generative AI",
      description: "Solutions that produce new forms of creative content including text, images, 3D models, audio, video, and computer code based on specified parameters."
    },
    {
      title: "Natural Language Processing",
      description: "AI systems that understand, interpret, and generate human language for text classification, sentiment analysis, entity recognition, and translation."
    },
    {
      title: "Conversational AI",
      description: "Chatbots and virtual assistants that rely on NLP and machine learning to understand and respond in natural, contextually relevant ways."
    },
    {
      title: "Predictive Analytics",
      description: "Software designed to handle data aggregation, processing, and analysis tasks to produce accurate forecasts and intelligent prescriptions."
    },
    {
      title: "Computer Vision",
      description: "Software that automatically captures and interprets information from image and video data with user-defined actions for visual recognition."
    },
    {
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Expert AI Consulting Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Artificial Intelligence{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Consulting Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leverage expert guidance on AI technologies and effective integration into business operations. 
              ImpTrax designs state-of-the-art solutions tailored to your unique needs, ensuring optimal project cost and minimized risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Portfolio
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

      {/* How We Help Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              How We Help
            </h2>
            <p className="text-xl text-muted-foreground">
              With 23+ years of experience in artificial intelligence and 150+ IT professionals on board, 
              ImpTrax provides comprehensive assistance across AI implementation to help businesses design, 
              develop, and seamlessly maintain cutting-edge AI solutions.
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

      {/* AI Capabilities Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              AI Software and Capabilities We{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Specialize In
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              With practical experience across multiple industries, ImpTrax tailors AI solutions 
              to the specific needs of each domain, delivering cutting-edge capabilities.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              ImpTrax delivers specialized AI solutions across key industries, 
              understanding unique challenges and regulatory requirements.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get expert AI consulting from ImpTrax and unlock the full potential of artificial intelligence 
              for your organization. Let's discuss your AI strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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