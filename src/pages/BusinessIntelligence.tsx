import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Eye, Shield, Clock, Target, Database, FileText, Users, Zap, AlertTriangle, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessIntelligence = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=business-intelligence&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=business-intelligence&button=schedule-consultation");
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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                Business Intelligence Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transform Data into Strategic Advantage
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Make data your business driver with comprehensive business intelligence capabilities. 
                Collect, process, analyze, and visualize data across your organization for actionable insights that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your BI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleScheduleConsultationClick}
                  className="text-lg px-8 py-6 font-semibold border-2 hover:bg-primary/5 backdrop-blur-sm"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 py-10 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-4 px-4">
                  <div className="text-6xl sm:text-5xl font-bold text-accent mb-2 tracking-tight leading-none">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Challenges We Solve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your business operations with evidence-based insights and comprehensive data intelligence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {challenge.icon}
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Business Intelligence Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Business Intelligence Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unlock the full potential of business intelligence with our comprehensive suite of BI solutions and services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our BI Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our BI Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Partner with ImpTrax to tap into solid professional expertise in business intelligence engineering and consultancy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Benefits of Our BI Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience measurable improvements in operational efficiency, decision-making, and business performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Delivering tailored business intelligence solutions adapted to the requirements of key industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ImpTrax */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Why Choose ImpTrax for Business Intelligence?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  ImpTrax is your trusted partner for business analytics services, delivering tailored business intelligence 
                  solutions with over 20 years of industry expertise. We help you unlock new dimensions of operational 
                  efficiency, increase process visibility, and enhance user experience.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our BI experts help you define business goals achievable with BI solutions, create effective business 
                  intelligence strategies, and plan practical implementation steps. We ensure your data becomes a true 
                  business driver that maximizes organizational potential.
                </p>
                <p className="text-lg leading-relaxed">
                  From comprehensive data processing and analysis to actionable guidance for business decisions, 
                  we provide end-to-end business intelligence capabilities that transform how you operate and compete.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data into Strategic Advantage?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Partner with ImpTrax to unlock the full potential of your business data. Let's discuss how our 
              comprehensive business intelligence solutions can drive your organization's growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleGetStartedClick}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
              >
                Start Your BI Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleScheduleConsultationClick}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
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

export default BusinessIntelligence;