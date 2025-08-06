import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Brain, Target, Globe, Building, DollarSign, Heart, Shield, Cpu, Database, BarChart3, Lightbulb, Rocket, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KnowledgeBase: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  useEffect(() => {
    setIsVisible(true);
    
    // SEO Meta Tags
    document.title = "AI Consulting Services | Expert AI Strategy & Implementation | ImpTrax";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with expert AI consulting services. Strategic AI implementation, custom solutions, and comprehensive support from ImpTrax AI specialists.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your business with expert AI consulting services. Strategic AI implementation, custom solutions, and comprehensive support from ImpTrax AI specialists.';
      document.head.appendChild(meta);
    }
  }, []);

  const stats = [
    { number: "500+", label: "AI Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
    { number: "98%", label: "Client Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "15+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: "AI Strategy & Roadmap",
      description: "Develop comprehensive AI strategies aligned with your business objectives and market opportunities.",
      icon: <Target className="w-8 h-8" />,
      features: ["Strategic Planning", "ROI Analysis", "Implementation Timeline", "Risk Assessment"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms designed to solve your specific business challenges.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Predictive Analytics", "Classification Models", "Recommendation Systems", "Anomaly Detection"]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline operations and reduce manual workload.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Workflow Automation", "RPA Implementation", "Decision Engines", "Integration Services"]
    },
    {
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Business Intelligence", "Real-time Dashboards", "Data Warehousing", "Performance Metrics"]
    }
  ];

  const capabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis, sentiment analysis, and language understanding capabilities.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis for various applications.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Predictive Modeling",
      description: "Forecast trends, behaviors, and outcomes with sophisticated predictive algorithms.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Deep Learning",
      description: "Neural networks and deep learning solutions for complex pattern recognition.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Data Engineering",
      description: "Robust data pipelines, ETL processes, and data infrastructure solutions.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "AI Ethics & Governance",
      description: "Responsible AI implementation with proper governance and ethical considerations.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient care optimization, and medical research acceleration.",
      icon: <Heart className="w-8 h-8" />,
      applications: ["Medical Imaging", "Drug Discovery", "Patient Monitoring", "Clinical Decision Support"]
    },
    {
      name: "Financial Services",
      description: "Risk assessment, fraud detection, algorithmic trading, and customer insights.",
      icon: <DollarSign className="w-8 h-8" />,
      applications: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Regulatory Compliance"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, supply chain optimization, and smart factories.",
      icon: <Building className="w-8 h-8" />,
      applications: ["Predictive Maintenance", "Quality Assurance", "Supply Chain", "Production Optimization"]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 leading-tight px-4">
                AI Consulting Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
                Transform your business with strategic AI implementation. Our expert consultants deliver 
                cutting-edge solutions that drive innovation, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleScheduleConsultation}
                  size="lg" 
                  className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center group hover:scale-110 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4 text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground hover:scale-105 transition-transform duration-300 hover:text-primary">
                Featured Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
                Explore our comprehensive AI consulting services and expert guidance.
              </p>
            </div>
            
            {/* AI Consulting Featured Tile */}
            <div className="mb-16">
              <Card className={`group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/20 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Brain className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                          AI Consulting Services
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">Featured Resource</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-lg leading-relaxed">
                    Expert AI consulting services with 23+ years of experience. Get strategic guidance on AI implementation, 
                    model design, and digital transformation tailored to your unique business needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Strategy & Planning</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            AI Strategy Consulting
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            AI Audit & Assessment
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Development</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            Proof of Concept Development
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            AI Model Design & Training
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Support</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            AI Support & Optimization
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            MVP Development
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => navigate('/ai-consulting')}
                      variant="corporate" 
                      className="group"
                    >
                      Learn More About AI Consulting
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      onClick={handleScheduleConsultation}
                      variant="outline"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How We Help Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground hover:scale-105 transition-transform duration-300 hover:text-primary">
                How We Help
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
                Comprehensive AI solutions tailored to your business needs and industry requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 bg-muted/30 relative">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/5 rounded-full blur-md animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="container mx-auto relative">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground hover:scale-105 transition-transform duration-300 hover:text-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Capabilities & Technologies
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                Leveraging cutting-edge AI technologies to deliver innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group hover:scale-105 hover:rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110">
                      {capability.icon}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground hover:scale-105 transition-transform duration-300 hover:text-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Industry Expertise
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                Specialized AI solutions across diverse industries with deep domain knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className={`group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-primary group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {industry.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {industry.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {app}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 relative">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground hover:scale-105 transition-transform duration-300 hover:text-primary ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Ready to Transform Your Business with AI?
              </h2>
              <p className={`text-xl text-muted-foreground mb-8 hover:text-foreground transition-colors duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                Let's discuss how our AI consulting services can drive innovation and growth for your organization.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-blue-600"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/case-studies')}
                  className="hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  Review Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default KnowledgeBase;