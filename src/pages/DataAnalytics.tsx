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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        
        {/* Floating Data Visualization Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <BarChart3 className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <TrendingUp className="w-6 h-6 text-accent/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <Database className="w-7 h-7 text-primary/20" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <Brain className="w-8 h-8 text-accent/25" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Badge with Animation */}
            <div className="inline-flex items-center justify-center mb-8">
              <Badge variant="outline" className="mb-0 px-6 py-3 text-sm font-medium bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
                <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                Data Analytics Solutions
              </Badge>
            </div>
            
            {/* Enhanced Heading with Gradient Text */}
            <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up">
              Transform Data into{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Strategic Insights
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Unlock the power of your data with ImpTrax's{' '}
              <span className="text-primary font-semibold">advanced analytics solutions</span>. 
              Drive informed decision-making, optimize performance, and gain competitive advantage 
              through comprehensive data intelligence.
            </p>
            
            {/* Enhanced Statistics Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Data Sources Integrated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button 
                variant="corporate" 
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => handleConsultationClick('hero-get-started')}
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleConsultationClick('hero-learn-more')}
              >
                <span className="flex items-center">
                  Learn More
                  <Globe className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 animate-fade-in-up delay-500">
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="w-20 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Enterprise</span>
                </div>
                <div className="w-20 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Fortune 500</span>
                </div>
                <div className="w-20 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Startups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="relative py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-primary/15 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 border border-accent/15 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 animate-fade-in">
                <Target className="w-4 h-4 mr-2 text-primary" />
                Business Challenges
              </Badge>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Challenges We{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solve
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Transform your business operations with{' '}
              <span className="text-primary font-semibold">evidence-based insights</span>{' '}
              and comprehensive data intelligence.
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8 animate-fade-in-up delay-300">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Card Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon Background */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="text-center relative z-10 p-8">
                    {/* Enhanced Icon Container */}
                    <div className="relative mx-auto w-20 h-20 mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-pulse group-hover:border-accent/50 transition-colors duration-300"></div>
                    </div>
                    
                    <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                      {challenge.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                      {challenge.description}
                    </CardDescription>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-6 mx-auto w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-500"></div>
                  </CardHeader>
                  
                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <p className="text-muted-foreground mb-6">Ready to overcome these challenges?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => handleConsultationClick('challenges-cta')}
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Data Analytics Services */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-40 h-40 border border-primary/20 rounded-2xl rotate-45"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 border border-accent/20 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-12"></div>
          <div className="absolute top-1/3 right-10 w-36 h-36 border border-primary/15 rounded-2xl -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 animate-fade-in">
                <Settings className="w-4 h-4 mr-2 text-primary" />
                Our Services
              </Badge>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Our Data Analytics{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Comprehensive analytics solutions designed to{' '}
              <span className="text-primary font-semibold">unlock the full potential</span>{' '}
              of your data and drive business transformation.
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8 animate-fade-in-up delay-300">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Card Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Background Element */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="relative z-10 p-8">
                    <div className="flex items-start space-x-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-16 h-16">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
                          </div>
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 rounded-xl border-2 border-primary/20 animate-pulse group-hover:border-accent/40 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 px-8 pb-8">
                    {/* Features List with Enhanced Styling */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`flex items-center text-sm text-muted-foreground group-hover:text-foreground/90 transition-all duration-300 animate-fade-in-up`}
                          style={{ animationDelay: `${(index + 1) * 150 + (featureIndex + 1) * 100}ms` }}
                        >
                          <div className="relative mr-3 flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" />
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 w-4 h-4 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700"></div>
                  </CardContent>
                  
                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <p className="text-muted-foreground mb-6">Need a custom analytics solution?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => handleConsultationClick('services-cta')}
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Analytics Solutions */}
      <section className="relative py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-28 h-28 border border-primary/20 rounded-xl rotate-45"></div>
          <div className="absolute top-32 right-20 w-20 h-20 border border-accent/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 border border-primary/15 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 border border-accent/15 rounded-xl rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 animate-fade-in">
                <Lightbulb className="w-4 h-4 mr-2 text-primary" />
                Solutions Portfolio
              </Badge>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              Analytics{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Tailored analytics solutions designed to address your{' '}
              <span className="text-primary font-semibold">specific business challenges</span>{' '}
              and drive measurable outcomes.
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8 animate-fade-in-up delay-300">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Card Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Background Element */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                

                
                <CardHeader className="relative z-10 p-6">
                  {/* Solution Icon */}
                  <div className="mb-4">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative w-full h-full bg-background rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <TrendingUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-lg border border-primary/20 animate-pulse group-hover:border-accent/40 transition-colors duration-300"></div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg lg:text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {solution.description}
                  </CardDescription>
                  
                  {/* Bottom Accent Line */}
                  <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700"></div>
                </CardHeader>
                
                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <p className="text-muted-foreground mb-6">Looking for a custom solution?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => handleConsultationClick('solutions-cta')}
            >
              Explore Custom Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-6 animate-fade-in-up">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industry Expertise</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-in-up delay-100">
              Industries We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
              Specialized data analytics solutions tailored for <span className="text-primary font-medium">industry-specific challenges</span> and opportunities.
            </p>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-8 animate-fade-in-up delay-300">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
              <div className="mx-4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent w-32"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 text-center animate-fade-in-up`}
                  style={{animationDelay: `${(index + 1) * 100}ms`}}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="relative z-10 p-8">
                    {/* Enhanced Icon Container */}
                    <div className="relative mx-auto w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {/* Icon Background with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-2xl border border-primary/20 animate-pulse group-hover:border-accent/40 transition-colors duration-300"></div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {industry.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {industry.description}
                    </CardDescription>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 mx-auto"></div>
                  </CardHeader>
                  
                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <p className="text-muted-foreground mb-6">Don't see your industry? We adapt to any sector.</p>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => handleConsultationClick('industries-cta')}
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-28 h-28 bg-gradient-to-br from-green-500/30 to-blue-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-36 h-36 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-teal-600/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-red-600/30 rounded-full blur-2xl animate-float" style={{animationDelay: '4.5s'}}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background/20 to-muted/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-full border border-green-500/20 mb-6 animate-fade-in-up">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">Business Value</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-in-up delay-100">
              Benefits of Our Data Analytics <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
              Unlock <span className="text-green-600 font-medium">measurable business value</span> through advanced data analytics and intelligent insights.
            </p>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-8 animate-fade-in-up delay-300">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent w-32"></div>
              <div className="mx-4 w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-32"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-background/90 backdrop-blur-sm border border-border/50 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 text-center animate-fade-in-up`}
                  style={{animationDelay: `${(index + 1) * 150}ms`}}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="relative z-10 p-6">
                    {/* Enhanced Icon Container */}
                    <div className="relative mx-auto w-18 h-18 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {/* Icon Background with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="w-9 h-9 text-green-600 group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-110 transform" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-2xl border border-green-500/20 animate-pulse group-hover:border-blue-500/40 transition-colors duration-300"></div>
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-foreground mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {benefit.description}
                    </CardDescription>
                    
                    {/* Bottom Accent Line */}
                    <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-700 mx-auto"></div>
                  </CardHeader>
                  
                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-1200">
            <p className="text-muted-foreground mb-6">Ready to unlock these benefits for your business?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-green-500/30 hover:border-green-500 hover:bg-green-500/5 transition-all duration-300"
              onClick={() => handleConsultationClick('benefits-cta')}
            >
              Discover Your ROI Potential
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
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