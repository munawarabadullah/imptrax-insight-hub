import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Eye, Shield, Clock, Target, Database, FileText, Users, Zap, AlertTriangle, Brain, Calendar, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessIntelligence = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Business Intelligence Services | Data Analytics & BI Solutions | ImpTrax";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform data into strategic advantage with ImpTrax Business Intelligence services. Expert BI solutions, data analytics, reporting, and visualization for enterprise growth.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform data into strategic advantage with ImpTrax Business Intelligence services. Expert BI solutions, data analytics, reporting, and visualization for enterprise growth.';
      document.head.appendChild(meta);
    }

    // Keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'business intelligence, data analytics, BI solutions, data visualization, reporting, dashboard, data warehouse, predictive analytics, enterprise analytics');
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'business intelligence, data analytics, BI solutions, data visualization, reporting, dashboard, data warehouse, predictive analytics, enterprise analytics';
      document.head.appendChild(keywordsMeta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Business Intelligence Services | Data Analytics & BI Solutions | ImpTrax');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Transform data into strategic advantage with ImpTrax Business Intelligence services. Expert BI solutions, data analytics, reporting, and visualization for enterprise growth.');
    }
  }, []);

  const handleGetStartedClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'business-intelligence',
        button: 'Tell Us About Your Project'
      }
    });
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'business-intelligence',
        button: 'Tell Us About Your Project'
      }
    });
  };

  const challenges = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Evidence-Based Decision Making",
      description: "Transform your business with accurate insights derived from comprehensive data processing and analysis"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Enhanced Business Process Transparency",
      description: "Get full visibility into your enterprise's financial health and performance with comprehensive reports"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preventive Issue Resolution",
      description: "Detect business issues early and take well-planned corrective actions with minimal consequences"
    }
  ];

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Report Design",
      description: "Custom reports using both off-the-shelf software and web-based solutions. Enable predefined reports or self-service reporting for custom insights.",
      features: ["Custom report creation", "Self-service reporting", "Web-based solutions", "Predefined templates"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytical Reporting",
      description: "Advanced analytical algorithms that identify patterns in historical data and calculate key business metrics with predictions.",
      features: ["Pattern identification", "Key metrics calculation", "Predictive analytics", "Process improvement recommendations"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Operational Reporting",
      description: "Continuous monitoring of system states, detecting issues and enabling proactive responses to changes in real-time.",
      features: ["System monitoring", "Issue detection", "Proactive responses", "Operational insights"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Reporting",
      description: "Process streaming data for real-time reporting, enabling quick decision-making and rapid response to changes.",
      features: ["Streaming data processing", "Real-time insights", "Quick decision support", "Instant notifications"]
    }
  ];

  const expertise = [
    {
      title: "Data Collection & Processing",
      description: "Comprehensive data gathering from multiple sources with advanced processing capabilities",
      technologies: ["ETL Pipelines", "Data Lakes", "Cloud Integration", "API Connections"]
    },
    {
      title: "Advanced Analytics",
      description: "Sophisticated analytical models and algorithms for deep business insights",
      technologies: ["Machine Learning", "Statistical Analysis", "Predictive Modeling", "Pattern Recognition"]
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards and visual representations for clear data interpretation",
      technologies: ["Interactive Dashboards", "Custom Charts", "Mobile Responsive", "Real-time Updates"]
    },
    {
      title: "Business Intelligence Strategy",
      description: "Strategic planning and implementation guidance for BI transformation",
      technologies: ["BI Roadmapping", "ROI Analysis", "Change Management", "Training Programs"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "Unlock new dimensions of operational efficiency through data-driven insights and process optimization"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Process Visibility",
      description: "Increase process visibility across your organization with comprehensive monitoring and reporting"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced User Experience",
      description: "Improve user experience through better understanding of customer behavior and preferences"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Decision Making",
      description: "Make informed strategic decisions based on accurate data analysis and business intelligence"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven Culture",
      description: "Foster a data-driven culture that maximizes the potential of your organizational data"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Actionable Insights",
      description: "Generate actionable insights that provide clear guidance for business decisions and growth"
    }
  ];

  const industries = [
    {
      name: "Automotive",
      description: "Supply chain optimization, quality control, and performance analytics"
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and regulatory compliance reporting"
    },
    {
      name: "Telecommunications",
      description: "Network performance monitoring, customer analytics, and service optimization"
    },
    {
      name: "Retail",
      description: "Customer behavior analysis, inventory management, and sales forecasting"
    },
    {
      name: "Healthcare",
      description: "Patient outcomes analysis, operational efficiency, and compliance monitoring"
    },
    {
      name: "Manufacturing",
      description: "Production optimization, quality metrics, and predictive maintenance"
    }
  ];

  const stats = [
    { number: "85%", label: "Decision Accuracy Improvement" },
    { number: "60%", label: "Faster Data Processing" },
    { number: "40%", label: "Cost Reduction" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Enhanced Background with Multiple Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/3 to-primary/8" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Enhanced Badge */}
              <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-medium border-primary/30 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Business Intelligence Services
              </Badge>
              
              {/* Enhanced Title with Better Typography */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-[1.2] pb-4">
                Business Intelligence Services
                <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Transform Data into Strategic Advantage
                </span>
              </h1>
              
              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto font-light">
                Make data your business driver with comprehensive business intelligence capabilities. 
                <span className="block mt-2 text-lg md:text-xl">
                  Collect, process, analyze, and visualize data across your organization for actionable insights that drive growth.
                </span>
              </p>
              
              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-10 py-7 font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your BI Journey</span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleScheduleConsultationClick}
                  className="text-lg px-10 py-7 font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-accent text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/15 rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Proven Results That Drive Success
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Our business intelligence solutions deliver measurable improvements across key performance metrics
              </p>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 py-12 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  {/* Stat Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-80 flex flex-col justify-center">
                    {/* Icon Background */}
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                      {index === 0 && <Target className="w-8 h-8 text-accent" />}
                      {index === 1 && <Zap className="w-8 h-8 text-accent" />}
                      {index === 2 && <TrendingUp className="w-8 h-8 text-accent" />}
                    </div>
                    
                    {/* Number */}
                    <div className="text-5xl md:text-6xl font-bold text-accent mb-4 tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-blue-100 font-medium text-base md:text-lg tracking-wide leading-tight min-h-[3rem] flex items-center justify-center px-2">
                      {stat.label}
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-blue-100 text-lg">
                Join hundreds of companies already transforming their business with our BI solutions
              </p>
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="py-24 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <AlertTriangle className="w-4 h-4 mr-2 text-primary" />
                Business Challenges
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Challenges We Solve
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transform your business operations with evidence-based insights and comprehensive data intelligence.
                <span className="block mt-2 text-lg text-muted-foreground/80">
                  Overcome common business intelligence obstacles with our proven solutions.
                </span>
              </p>
            </div>
            
            {/* Enhanced Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 relative overflow-hidden">
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    {/* Enhanced Icon */}
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {challenge.icon}
                      </div>
                    </div>
                    
                    {/* Enhanced Title */}
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                      {challenge.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300" />
                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
                </Card>
              ))}
            </div>
            
            {/* Bottom Section */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to overcome these challenges? Our expert team is here to guide you through every step of your BI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Business Intelligence Services */}
        <section className="py-24 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 to-accent/3" />
            <div className="absolute top-32 right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-32 left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-accent/30 bg-accent/5">
                <Database className="w-4 h-4 mr-2 text-accent" />
                BI Services Portfolio
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Business Intelligence Services
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Unlock the full potential of business intelligence with our comprehensive suite of BI solutions and services.
                <span className="block mt-2 text-lg text-muted-foreground/80">
                  From data collection to actionable insights, we cover every aspect of your BI journey.
                </span>
              </p>
            </div>
            
            {/* Enhanced Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-[1.02] relative overflow-hidden">
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 pb-6">
                    {/* Enhanced Header with Icon */}
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary mr-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg flex-shrink-0">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Features List */}
                    <div className="bg-muted/30 rounded-xl p-6 group-hover:bg-muted/20 transition-colors duration-300">
                      <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
                            <span className="text-sm md:text-base text-foreground/80 group-hover/item:text-foreground transition-colors duration-200 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    

                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
                </Card>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Need a custom BI solution? Our team can design and implement tailored business intelligence systems that perfectly match your unique requirements.
              </p>
              <Button variant="outline" className="px-6 py-3 border-primary/30 hover:bg-primary/5">
                Discuss Custom Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our BI Expertise */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <Brain className="w-4 h-4 mr-2 text-primary" />
                Technical Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our BI Expertise
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Partner with ImpTrax to tap into solid professional expertise in business intelligence engineering and consultancy.
                <span className="block mt-2 text-lg text-muted-foreground/80">
                  Deep technical knowledge across the entire business intelligence ecosystem.
                </span>
              </p>
            </div>
            
            {/* Enhanced Expertise Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {expertise.map((area, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-[1.02] relative overflow-hidden">
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 pb-6">
                    {/* Enhanced Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg">
                      <Database className="w-8 h-8" />
                    </div>
                    
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Technologies */}
                    <div className="bg-muted/30 rounded-xl p-6 group-hover:bg-muted/20 transition-colors duration-300">
                      <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs px-3 py-1 bg-white/80 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    

                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
                </Card>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Ready to leverage our expertise for your business intelligence transformation? Let's discuss how our technical capabilities can drive your success.
              </p>
              <Button variant="outline" className="px-6 py-3 border-primary/30 hover:bg-primary/5">
                Explore Our Technical Capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Business Value
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Benefits of Our BI Solutions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Experience measurable improvements in operational efficiency, decision-making, and business performance that delivers real results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group relative text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-lg group-hover:from-primary/20 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent rounded-bl-lg group-hover:from-accent/20 transition-all duration-300"></div>
                  
                  <CardHeader className="relative z-10">
                    {/* Enhanced Icon with Floating Effect */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-300"></div>
                      <div className="relative mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                      </div>
                      {/* Floating particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                    </div>
                    
                    <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                    </div>
                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
                </Card>
              ))}
            </div>
            
            {/* Enhanced Bottom Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have revolutionized their decision-making with our BI solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="corporate" 
                    onClick={handleGetStartedClick}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Start Your BI Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/schedule-consultation', {
                      state: {
                        source: 'business-intelligence',
                        button: 'Tell Us About Your Project'
                      }
                    })}
                    className="px-8 py-4 border-2 border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Tell Us About Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Industry Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Industries We Serve
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Delivering tailored business intelligence solutions adapted to the unique requirements and challenges of key industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="group relative hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-lg group-hover:from-primary/20 transition-all duration-300"></div>
                  
                  <CardHeader className="relative z-10">
                    {/* Enhanced Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20">
                      <Database className="w-6 h-6" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {industry.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                    </div>
                  </CardContent>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
                </Card>
              ))}
            </div>
            
            {/* Enhanced Bottom Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Don't See Your Industry?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We adapt our BI solutions to meet the unique challenges of any industry. Let's discuss your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="corporate" 
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Discuss Your Industry
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/case-studies')}
                    className="px-8 py-4 border-2 border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Review Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ImpTrax */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-green-200/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/30 bg-primary/5">
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                Why ImpTrax
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Why Choose ImpTrax for Business Intelligence?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Your trusted partner for comprehensive business intelligence transformation with proven expertise and unwavering commitment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Proven Track Record */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-lg group-hover:from-primary/20 transition-all duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                    Proven Track Record
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Successfully delivered 500+ BI projects across various industries with 98% client satisfaction rate.
                  </p>
                  
                  <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Rapid Implementation */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent rounded-tr-lg group-hover:from-accent/20 transition-all duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-gradient-to-br group-hover:from-accent/20 group-hover:to-primary/20">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                    Rapid Implementation
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Get your BI solution up and running in weeks, not months, with our streamlined implementation process.
                  </p>
                  
                  <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  </div>
                </CardContent>
              </Card>

              {/* 24/7 Support */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-lg group-hover:from-primary/20 transition-all duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                    24/7 Support
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    Round-the-clock technical support and maintenance to ensure your BI systems run smoothly.
                  </p>
                  
                  <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Content Section */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl leading-relaxed mb-6 text-foreground">
                    ImpTrax is your trusted partner for business analytics services, delivering tailored business intelligence 
                    solutions with over 20 years of industry expertise. We help you unlock new dimensions of operational 
                    efficiency, increase process visibility, and enhance user experience.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                    Our BI experts help you define business goals achievable with BI solutions, create effective business 
                    intelligence strategies, and plan practical implementation steps. We ensure your data becomes a true 
                    business driver that maximizes organizational potential.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    From comprehensive data processing and analysis to actionable guidance for business decisions, 
                    we provide end-to-end business intelligence capabilities that transform how you operate and compete.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button 
                    size="lg" 
                    variant="corporate" 
                    onClick={handleGetStartedClick}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Experience the Difference
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleScheduleConsultationClick}
                    className="px-8 py-4 border-2 border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '0.5s'}} />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Enhanced Header */}
            <div className="mb-12">
              <Badge variant="outline" className="mb-6 px-6 py-3 border-white/30 bg-white/10 text-white backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Transform Your Business Today
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                <span className="block mb-2">Ready to Transform Your Data</span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  into Strategic Advantage?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
                Partner with ImpTrax to unlock the full potential of your business data. Let's discuss how our 
                comprehensive business intelligence solutions can drive your organization's growth and success.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleGetStartedClick}
                className="group text-lg px-10 py-6 bg-white text-primary hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 font-semibold"
              >
                <Zap className="mr-3 w-5 h-5 group-hover:animate-pulse" />
                Start Your BI Transformation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleScheduleConsultationClick}
                className="group text-lg px-10 py-6 border-2 border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 backdrop-blur-sm font-semibold"
              >
                <Calendar className="mr-3 w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">Projects Delivered</div>
              </div>
              
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80 font-medium">Client Satisfaction</div>
              </div>
              
              <div className="group text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 font-medium">Expert Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BusinessIntelligence;