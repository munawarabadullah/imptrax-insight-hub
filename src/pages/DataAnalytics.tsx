import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BarChart3, 
  Brain, 
  Database, 
  TrendingUp, 
  Zap, 
  Target, 
  Shield, 
  Users, 
  Building2, 
  Heart, 
  Home,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataAnalytics = () => {
  const navigate = useNavigate();

  const handleConsultationClick = (source: string) => {
    navigate(`/schedule-consultation?source=data-analytics&button=${source}`);
  };

  const challenges = [
    {
      icon: Target,
      title: "Data-Driven Decision Making",
      description: "Transform raw data into actionable insights that drive strategic business decisions and competitive advantage."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Identify bottlenecks, optimize processes, and enhance operational efficiency through comprehensive data analysis."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactively identify and mitigate risks through predictive analytics and real-time monitoring systems."
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Data Warehousing & Integration",
      description: "Centralize your data from multiple sources into a unified, scalable data warehouse for comprehensive analysis.",
      features: ["Multi-source Data Integration", "Real-time Data Synchronization", "Scalable Architecture", "Data Quality Management"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Generate actionable insights with sophisticated analytics tools and customizable reporting dashboards.",
      features: ["Interactive Dashboards", "Automated Reporting", "Statistical Analysis", "Trend Identification"]
    },
    {
      icon: Brain,
      title: "Predictive Analytics & ML",
      description: "Leverage machine learning algorithms to forecast trends, predict outcomes, and optimize business strategies.",
      features: ["Forecasting Models", "Pattern Recognition", "Anomaly Detection", "Predictive Modeling"]
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Monitor business performance in real-time with instant alerts and dynamic data visualization.",
      features: ["Live Data Streaming", "Instant Alerts", "Dynamic Visualizations", "Performance Monitoring"]
    }
  ];

  const solutions = [
    {
      title: "Supply Chain Optimization",
      description: "Enhance supply chain efficiency with predictive analytics and real-time monitoring."
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns and preferences to improve engagement and retention."
    },
    {
      title: "Financial Performance Analytics",
      description: "Monitor financial metrics and identify opportunities for cost optimization and revenue growth."
    },
    {
      title: "Operational Intelligence",
      description: "Gain insights into operational processes to improve efficiency and reduce costs."
    },
    {
      title: "Market Intelligence",
      description: "Analyze market trends and competitive landscape to make informed strategic decisions."
    },
    {
      title: "Risk Assessment & Compliance",
      description: "Identify potential risks and ensure regulatory compliance through automated monitoring."
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Risk management, fraud detection, and regulatory compliance analytics."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient analytics, treatment optimization, and operational efficiency insights."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Market analysis, property valuation, and investment performance tracking."
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Enhanced Decision Making",
      description: "Make informed decisions based on comprehensive data analysis and insights."
    },
    {
      icon: TrendingUp,
      title: "Improved Performance",
      description: "Optimize operations and increase efficiency through data-driven process improvements."
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with advanced analytics and market intelligence."
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Streamline operations and reduce costs through intelligent automation and optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Data Analytics Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Transform Data into 
              <span className="text-primary"> Strategic Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock the power of your data with ImpTrax's advanced analytics solutions. 
              Drive informed decision-making, optimize performance, and gain competitive advantage 
              through comprehensive data intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="corporate" 
                size="xl"
                onClick={() => handleConsultationClick('hero-get-started')}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => handleConsultationClick('hero-learn-more')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Challenges We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with evidence-based insights and comprehensive data intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="relative mx-auto w-16 h-16 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary mb-4">
                      {challenge.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {challenge.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Data Analytics Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Data Analytics Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analytics solutions designed to unlock the full potential of your data assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="relative mx-auto w-16 h-16 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-6">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Analytics Solutions That Transform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized analytics solutions tailored to address your unique business challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized data analytics solutions tailored for industry-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="relative mx-auto w-16 h-16 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-4">
                      {industry.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Benefits of Our Data Analytics Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock measurable business value through advanced data analytics and intelligent insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="relative mx-auto w-16 h-16 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground mb-4">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose ImpTrax */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose ImpTrax for Data Analytics?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Partner with ImpTrax to transform your data into a strategic asset that drives business growth and innovation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground mb-6">
                  Our certified data scientists and analytics experts bring years of experience 
                  across multiple industries and technologies.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Proven Methodology</h3>
                <p className="text-muted-foreground">
                  We follow industry best practices and proven methodologies to ensure 
                  successful implementation and measurable results.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Our analytics solutions are designed to scale with your business, 
                  from startup to enterprise-level requirements.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive support and maintenance to ensure your 
                  analytics solutions continue to deliver value over time.
                </p>
              </div>
            </div>

            <Button 
              variant="corporate" 
              size="xl"
              onClick={() => handleConsultationClick('why-choose-cta')}
            >
              Start Your Analytics Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our data analytics solutions can drive your business forward. 
              Schedule a consultation with our experts today.
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => handleConsultationClick('final-cta')}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalytics;