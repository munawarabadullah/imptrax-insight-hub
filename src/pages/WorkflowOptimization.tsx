import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Workflow, Target, TrendingUp, Shield, Clock, DollarSign, Users, BarChart3, Zap, Settings, Sparkles, Star, Building, Calendar, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WorkflowOptimization = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
      }
      
      @keyframes gradient-x {
        0%, 100% {
          background-size: 200% 200%;
          background-position: left center;
        }
        50% {
          background-size: 200% 200%;
          background-position: right center;
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
      }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-500 { animation-delay: 500ms; }
      .delay-700 { animation-delay: 700ms; }
      .delay-1000 { animation-delay: 1000ms; }
      .delay-2000 { animation-delay: 2000ms; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=schedule-consultation");
  };

  const handleLearnMoreClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=learn-more");
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Streamline processes and reduce time taken for task completion by up to 70%"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduced Costs",
      description: "Lower operational costs by minimizing manual labor and eliminating process inefficiencies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Customer Satisfaction",
      description: "Deliver faster service times and improved experiences through optimized workflows"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Streamlined Compliance",
      description: "Ensure regulatory adherence with automated compliance workflows and audit trails"
    }
  ];

  const challenges = [
    {
      title: "Manual Process Inefficiencies",
      description: "Traditional manual operations lead to bottlenecks, errors, and reduced productivity",
      impact: "Diminished productivity and increased operational costs"
    },
    {
      title: "Compliance Complexity",
      description: "Manual compliance processes are time-consuming and prone to errors",
      impact: "Risk of regulatory fines and reputation damage"
    },
    {
      title: "Scalability Limitations",
      description: "Traditional processes cannot efficiently scale to meet growing demands",
      impact: "Hindered growth and reduced market responsiveness"
    }
  ];

  const solutions = [
    {
      title: "Intelligent Process Automation",
      description: "Leverage AI, RPA, and machine learning to address inefficiencies and integrate systems",
      features: ["AI-powered decision making", "Robotic process automation", "Machine learning optimization", "System integration"]
    },
    {
      title: "Workflow Management Systems",
      description: "Comprehensive workflow orchestration with real-time monitoring and optimization",
      features: ["Real-time process monitoring", "Automated task routing", "Performance analytics", "Resource optimization"]
    },
    {
      title: "Data-Driven Optimization",
      description: "Use advanced analytics to continuously improve workflow performance",
      features: ["Predictive analytics", "Performance metrics", "Bottleneck identification", "Continuous improvement"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      processes: ["Transaction processing", "Account management", "Risk assessment", "Compliance reporting"]
    },
    {
      name: "Healthcare",
      processes: ["Patient workflow", "Medical records", "Appointment scheduling", "Claims processing"]
    },
    {
      name: "Manufacturing",
      processes: ["Production planning", "Quality control", "Supply chain", "Inventory management"]
    },
    {
      name: "Retail & E-commerce",
      processes: ["Order fulfillment", "Customer service", "Inventory tracking", "Returns processing"]
    }
  ];

  const stats = [
    { number: "70%", label: "Efficiency Improvement" },
    { number: "50%", label: "Cost Reduction" },
    { number: "90%", label: "Error Reduction" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Workflow className="w-8 h-8 text-primary/30" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
              <Target className="w-6 h-6 text-accent/40" />
            </div>
            <div className="absolute top-1/2 right-1/3 animate-float delay-500">
              <TrendingUp className="w-7 h-7 text-primary/25" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float delay-700">
              <Zap className="w-5 h-5 text-accent/35" />
            </div>
          </div>
          
          <div className={`container mx-auto px-4 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2 backdrop-blur-sm bg-white/10 border-primary/20 hover:bg-white/20 transition-all duration-300">
                <Workflow className="w-4 h-4 mr-2 animate-pulse" />
                Workflow Optimization Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Optimize Your Business Workflows with Intelligent Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto opacity-90">
                Transform your operations with ImpTrax's comprehensive workflow optimization solutions. 
                Streamline processes, reduce costs, and enhance efficiency through intelligent automation and data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleScheduleConsultationClick}
                  className="text-lg px-8 py-6 font-semibold border-2 hover:bg-primary/10 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  Schedule Consultation
                  <Sparkles className="ml-2 w-4 h-4 opacity-70" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-accent text-white relative overflow-hidden">
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-green-500/20" />
            
            {/* Floating Geometric Shapes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 600}ms`
                }}
              >
                {i % 3 === 0 && (
                  <div className="w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                )}
                {i % 3 === 1 && (
                  <div className="w-12 h-12 bg-white/20 rotate-45 animate-pulse" style={{ animationDuration: '3s' }} />
                )}
                {i % 3 === 2 && (
                  <div className="w-20 h-1 bg-white/30 animate-pulse" style={{ animationDuration: '5s' }} />
                )}
              </div>
            ))}
            
            {/* Large Background Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 max-w-3xl mx-auto">
               {stats.map((stat, index) => (
                 <div key={index} className="text-center group relative">
                   {/* Card Background */}
                   <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl transform group-hover:scale-105 transition-all duration-500 group-hover:bg-white/20" />
                   
                   {/* Glowing Border Effect */}
                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   {/* Content */}
                   <div className="relative p-5 z-10">
                     {/* Icon Background */}
                     <div className="w-10 h-10 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                       {index === 0 && <TrendingUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />}
                       {index === 1 && <DollarSign className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />}
                       {index === 2 && <Shield className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />}
                     </div>
                     
                     {/* Animated Number */}
                     <div className="relative">
                       <div className="text-3xl sm:text-4xl font-bold mb-2 text-white group-hover:text-yellow-200 transition-all duration-500 transform group-hover:scale-105">
                         <span className="inline-block animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                           {stat.number}
                         </span>
                       </div>
                       
                       {/* Shimmer Effect */}
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000" />
                     </div>
                     
                     {/* Label */}
                     <div className="text-sm font-medium opacity-90 group-hover:opacity-100 group-hover:text-yellow-100 transition-all duration-300">
                       {stat.label}
                     </div>
                     
                     {/* Progress Bar */}
                     <div className="mt-3 h-0.5 bg-white/20 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-yellow-400 to-white rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                         style={{ transitionDelay: `${index * 200}ms` }}
                       />
                     </div>
                     
                     {/* Floating Particles */}
                     <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '300ms' }} />
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Why Traditional Operations Need Evolution */}
        <section className="py-20 relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">Why Traditional Operations Need Evolution</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <p className="text-xl leading-relaxed mb-6">
                  Traditional business operations rely heavily on manual processes that are fraught with inefficiencies and errors. 
                  These outdated methods lead to significant challenges including diminished productivity, increased operational costs, 
                  and reduced customer satisfaction.
                </p>
                <p className="text-lg leading-relaxed">
                  In today's competitive landscape, businesses need transformative workflow optimization to maintain efficiency, 
                  ensure compliance, and scale effectively to meet growing demands.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-400/50 hover:border-red-400 group animate-fade-in-up" style={{ animationDelay: `${400 + index * 150}ms` }}>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary group-hover:text-red-600 transition-colors duration-300">{challenge.title}</CardTitle>
                      <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 rounded-lg group-hover:from-red-100 group-hover:to-orange-100 transition-all duration-300">
                        <p className="text-sm text-red-700 font-medium flex items-center">
                          <Shield className="w-4 h-4 mr-2 text-red-500" />
                          Impact: {challenge.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-muted/20 via-muted/30 to-primary/5 relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Benefits of Workflow Optimization</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Transform your business operations with measurable benefits that drive growth and operational excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in-up" style={{ animationDelay: `${400 + index * 150}ms` }}>
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                    <div className="mt-4 w-8 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-20 relative">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Our Workflow Optimization Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Comprehensive solutions that leverage cutting-edge technology to transform your business processes.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-primary/30 hover:border-primary bg-gradient-to-br from-white to-primary/5 animate-fade-in-up" style={{ animationDelay: `${400 + index * 200}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300 flex items-center">
                      <Settings className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                          <span className="text-sm group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border border-primary/20 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 1000}ms`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Industry Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Our workflow optimization solutions are tailored for various industries and business processes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group bg-gradient-to-br from-white via-primary/5 to-accent/5 border-2 border-transparent hover:border-primary/30 animate-fade-in-up" style={{ animationDelay: `${400 + index * 150}ms` }}>
                  <CardHeader className="relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300 flex items-center relative z-10">
                      <BarChart3 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {industry.processes.map((process, idx) => (
                        <li key={idx} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                          <Target className="w-4 h-4 text-accent mr-3 flex-shrink-0 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                          <span className="text-sm group-hover:text-gray-800 transition-colors duration-300">{process}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Considerations */}
        <section className="py-20 relative">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-l from-green-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Implementation Considerations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Key factors to consider when implementing workflow optimization in your organization.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="bg-gradient-to-br from-white to-primary/5 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl group">
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center group-hover:text-accent transition-colors duration-300">
                    <Settings className="w-6 h-6 mr-3 group-hover:text-yellow-500 group-hover:rotate-12 transition-all duration-300" />
                    Planning Phase
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Current state assessment and process mapping",
                      "Stakeholder identification and buy-in",
                      "Technology requirements analysis",
                      "Resource allocation and timeline planning",
                      "Risk assessment and mitigation strategies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="bg-gradient-to-br from-white to-accent/5 p-8 rounded-2xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl group">
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center group-hover:text-accent transition-colors duration-300">
                    <Zap className="w-6 h-6 mr-3 group-hover:text-orange-500 group-hover:rotate-12 transition-all duration-300" />
                    Execution Phase
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Phased implementation approach",
                      "Employee training and change management",
                      "System integration and testing",
                      "Performance monitoring and optimization",
                      "Continuous improvement processes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-1 bg-gradient-to-r from-accent to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 500}ms`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <Sparkles className="w-8 h-8 mr-3 animate-pulse text-yellow-300" />
                Ready to Optimize Your Workflows?
                <Sparkles className="w-8 h-8 ml-3 animate-pulse text-yellow-300" />
              </h2>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform your business operations with ImpTrax's proven workflow optimization solutions. 
              Let's discuss how we can help you achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleGetStartedClick}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                Start Your Optimization Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleScheduleConsultationClick}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group bg-white/10 backdrop-blur-sm"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WorkflowOptimization;