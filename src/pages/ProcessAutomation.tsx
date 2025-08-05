import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Shield, Clock, DollarSign, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Custom CSS animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-400 {
    animation-delay: 0.4s;
  }
  
  .delay-700 {
    animation-delay: 0.7s;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
`;

const ProcessAutomation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=schedule-consultation");
  };

  const handleLearnMoreClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=learn-more");
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Increased Speed",
      description: "Eliminate manual bottlenecks and accelerate your business processes by up to 80%"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce operational costs through streamlined workflows and reduced human intervention"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Error Reduction",
      description: "Minimize human errors and ensure consistent, reliable process execution"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quality Improvement",
      description: "Enhance output quality through standardized, repeatable automated processes"
    }
  ];

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Comprehensive automation covering end-to-end business workflows",
      features: ["Data management", "Workflow optimization", "System integration", "Reporting automation"]
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "Front-end automation that emulates human interactions with systems",
      features: ["Email processing", "Data extraction", "Form filling", "System queries"]
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered automation that learns and adapts to complex scenarios",
      features: ["Decision making", "Pattern recognition", "Predictive analysis", "Adaptive workflows"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      processes: ["Invoice processing", "Loan approvals", "Compliance reporting", "Customer onboarding"]
    },
    {
      industry: "Healthcare",
      processes: ["Patient registration", "Claims processing", "Appointment scheduling", "Medical records management"]
    },
    {
      industry: "Manufacturing",
      processes: ["Inventory management", "Quality control", "Supply chain optimization", "Production scheduling"]
    },
    {
      industry: "Retail",
      processes: ["Order processing", "Customer service", "Inventory tracking", "Price optimization"]
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}} />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge variant="outline" className="mb-6 px-4 py-2 animate-bounce hover:animate-none transition-all duration-300 hover:scale-105">
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Process Automation Solutions
                <Sparkles className="w-4 h-4 ml-2 animate-spin" style={{animationDuration: '3s'}} />
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-x">
                Transform Your Business with Intelligent Process Automation
              </h1>
              <p className={`text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Streamline operations, reduce costs, and eliminate errors with ImpTrax's comprehensive process automation solutions. 
                From simple task automation to complex workflow orchestration, we help businesses achieve operational excellence.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleScheduleConsultationClick}
                  className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-primary/5"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Process Automation */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 w-20 h-20 bg-primary/10 rounded-full animate-float" />
          <div className="absolute bottom-10 right-5 w-16 h-16 bg-accent/10 rounded-full animate-float delay-1000" />
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float delay-500" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 hover:text-primary transition-colors duration-300">What is Process Automation?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-primary/10">
                  <p className="text-xl leading-relaxed mb-0">
                    Process automation streamlines business operations by removing manual inputs, which decreases errors, 
                    increases delivery speed, boosts quality, minimizes costs, and simplifies workflows. It incorporates 
                    software tools, people, and processes to create completely automated workflows.
                  </p>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-accent/10">
                  <p className="text-lg leading-relaxed mb-0">
                    Think of it like a modern car wash system - from payment processing to the final rinse, every step 
                    is seamlessly automated using sensors, software, and mechanical systems. Similarly, ImpTrax helps 
                    businesses automate their complex processes, creating efficient, error-free operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Why Choose Process Automation?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your business operations with measurable benefits that drive growth and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-0 bg-gradient-to-br from-white to-primary/5 hover:from-primary/5 hover:to-accent/5">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Automation */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full animate-pulse delay-700" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Our Automation Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From basic task automation to intelligent AI-powered workflows, we offer comprehensive solutions.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {automationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group border-0 bg-gradient-to-br from-white via-white to-primary/5 hover:from-primary/5 hover:to-accent/10 backdrop-blur-sm">
                  <CardHeader className="relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300 relative z-10">{type.title}</CardTitle>
                    <CardDescription className="text-base group-hover:text-foreground transition-colors duration-300 relative z-10">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 100}ms`}}>
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                          <span className="text-sm group-hover:text-foreground transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases by Industry */}
        <section className="py-20 relative">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-primary/5 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-accent/5 rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary/10 rounded-full animate-bounce" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Industry Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Process automation delivers value across every industry. See how ImpTrax can transform your sector.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-0 bg-gradient-to-br from-white to-accent/5 hover:from-accent/5 hover:to-primary/5 relative overflow-hidden">
                  {/* Card Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors duration-300">{useCase.industry}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {useCase.processes.map((process, idx) => (
                        <li key={idx} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${idx * 75}ms`}}>
                          <Target className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                          <span className="text-sm group-hover:text-foreground transition-colors duration-300">{process}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Animated Connection Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 400">
              <path d="M100 200 Q300 100 500 200 T900 200 L1100 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary animate-pulse" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 hover:text-primary transition-colors duration-300">Our Implementation Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ImpTrax follows a proven methodology to ensure successful automation implementation.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  { step: "1", title: "Identify", desc: "Analyze current processes and identify automation opportunities" },
                  { step: "2", title: "Design", desc: "Create detailed automation workflows and system architecture" },
                  { step: "3", title: "Develop", desc: "Build and configure automation solutions using best practices" },
                  { step: "4", title: "Test", desc: "Thoroughly test all automated processes before deployment" },
                  { step: "5", title: "Deploy", desc: "Implement solutions with minimal disruption to operations" }
                ].map((phase, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10">{phase.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Automate Your Processes?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
              Join hundreds of businesses that have transformed their operations with ImpTrax process automation solutions. 
              Let's discuss how we can streamline your workflows and boost your efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleScheduleConsultationClick}
                className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleLearnMoreClick}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProcessAutomation;