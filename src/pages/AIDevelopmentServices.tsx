import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Eye, MessageSquare, BarChart3, Heart, Building2, Home, Users } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIDevelopmentServices = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "AI Development Services | ImpTrax - Artificial Intelligence Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with ImpTrax AI development services. Expert solutions in machine learning, computer vision, NLP, and data analytics for enterprise success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your business with ImpTrax AI development services. Expert solutions in machine learning, computer vision, NLP, and data analytics for enterprise success.';
      document.head.appendChild(meta);
    }
  }, []);

  const services = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Building advanced vision systems for image recognition, object detection, and visual search applications. Our expertise spans across Video Analytics, Image Processing & OCR, Medical Imaging, and Human Action Recognition."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Developing AI-powered language understanding systems to revolutionize customer interactions and content comprehension. Our solutions encompass LLM-based Solutions, Machine Translation & Speech Recognition."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Harnessing the power of AI & analytics to solve complex problems and extract valuable insights from data. Our capabilities extend to Sales Forecasting, Waste Reduction, Resource Optimization & Time Series Analysis."
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Experience the future of customer interaction with our AI-powered chatbots. From personalized assistance to seamless communication, ImpTrax develops interactive RAG chatbots using LLMs like ChatGPT, Gemini etc., to help you become an industry leader."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Unlock the potential of data with our machine learning solutions. From predictive analytics to pattern recognition, our machine learning algorithms empower businesses to make informed decisions and drive innovation."
    },
    {
      icon: Users,
      title: "AI/ML Strategy Consulting",
      description: "Navigate the complexities of AI and machine learning with our expert consulting services. From strategy formulation to implementation, we help businesses leverage AI to achieve their goals and stay ahead in the digital landscape."
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
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Artificial Intelligence 
              <span className="bg-gradient-light bg-clip-text text-transparent"> Development Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              ImpTrax AI experts specialize in utilizing the potential of artificial intelligence to solve complex business challenges and drive transformative outcomes. Our AI development services are tailored to meet your unique needs, whether optimizing operations, personalizing customer experiences, or unlocking valuable insights from data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" className="group">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Consult Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Embrace the Future with our Next-Gen 
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI Development Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With cutting-edge algorithms and advanced machine learning techniques, we bring your business up to speed with today's AI-driven world.
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

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with ImpTrax to unlock the full potential of artificial intelligence for your organization. Our expert team is ready to guide you through your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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