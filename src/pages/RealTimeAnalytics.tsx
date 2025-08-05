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
  Globe,
  Award,
  Clock,
  AlertTriangle,
  Activity,
  Eye,
  Gauge,
  Layers,
  RefreshCw,
  Smartphone,
  Monitor
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RealTimeAnalytics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Real-time Analytics Services | ImpTrax - Live Data Insights";
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with ImpTrax real-time analytics. Live dashboards, instant alerts, and real-time decision-making for competitive advantage.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your business with ImpTrax real-time analytics. Live dashboards, instant alerts, and real-time decision-making for competitive advantage.';
      document.head.appendChild(meta);
    }

    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'real-time analytics, live data, instant insights, real-time dashboards, streaming analytics, business intelligence');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'real-time analytics, live data, instant insights, real-time dashboards, streaming analytics, business intelligence';
      document.head.appendChild(meta);
    }
  }, []);

  const handleConsultationClick = (source: string) => {
    navigate(`/schedule-consultation?source=real-time-analytics&button=${source}`);
  };

  const challenges = [
    {
      icon: Clock,
      title: "Instant Decision Making",
      description: "Make critical business decisions in real-time with live data streams and instant insights that drive immediate action."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Management",
      description: "Detect and respond to operational risks, market changes, and anomalies before they impact your business performance."
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with real-time market intelligence and instant performance optimization capabilities."
    }
  ];

  const services = [
    {
      icon: Activity,
      title: "Live Data Streaming",
      description: "Process and analyze data streams in real-time from multiple sources including IoT devices, applications, and external feeds.",
      features: ["Multi-source Integration", "Stream Processing", "Low-latency Analytics", "Scalable Architecture"]
    },
    {
      icon: Gauge,
      title: "Real-time Dashboards",
      description: "Monitor key performance indicators with live dashboards that update instantly and provide actionable insights.",
      features: ["Live Visualizations", "Custom KPI Tracking", "Interactive Charts", "Mobile Responsive"]
    },
    {
      icon: Shield,
      title: "Instant Alert Systems",
      description: "Receive immediate notifications when critical thresholds are breached or anomalies are detected in your data.",
      features: ["Smart Alerting", "Threshold Monitoring", "Anomaly Detection", "Multi-channel Notifications"]
    },
    {
      icon: Brain,
      title: "Predictive Real-time Analytics",
      description: "Combine real-time data with machine learning to predict future trends and automate decision-making processes.",
      features: ["Predictive Modeling", "Automated Insights", "Pattern Recognition", "Intelligent Automation"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Immediate Response",
      description: "React to business events as they happen with real-time data processing and instant notifications.",
      impact: "95% faster response times"
    },
    {
      icon: Target,
      title: "Enhanced Decision Quality",
      description: "Make better decisions with current, accurate data rather than relying on outdated historical information.",
      impact: "40% improvement in decision accuracy"
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Optimize operations continuously with real-time performance monitoring and automated adjustments.",
      impact: "30% increase in operational efficiency"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential issues before they escalate into costly problems or security breaches.",
      impact: "60% reduction in operational risks"
    }
  ];

  const useCases = [
    {
      title: "Financial Risk Management",
      description: "Monitor market conditions, detect fraud patterns, and manage portfolio risks in real-time for financial institutions.",
      icon: Building2
    },
    {
      title: "Supply Chain Optimization",
      description: "Track shipments, monitor inventory levels, and optimize logistics operations with live data from IoT sensors.",
      icon: Globe
    },
    {
      title: "Customer Experience Enhancement",
      description: "Analyze customer behavior in real-time to personalize experiences and improve satisfaction scores.",
      icon: Users
    },
    {
      title: "Healthcare Monitoring",
      description: "Monitor patient vitals, track treatment effectiveness, and ensure compliance with real-time healthcare analytics.",
      icon: Heart
    },
    {
      title: "Manufacturing Intelligence",
      description: "Monitor equipment performance, predict maintenance needs, and optimize production processes in real-time.",
      icon: Settings
    },
    {
      title: "Digital Marketing Optimization",
      description: "Track campaign performance, adjust ad spending, and optimize conversion rates with real-time marketing analytics.",
      icon: Monitor
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Real-time fraud detection, risk assessment, and regulatory compliance monitoring for banks and financial institutions."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient monitoring, treatment optimization, and operational efficiency with real-time healthcare analytics."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Market trend analysis, property performance tracking, and investment decision support with live market data."
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Customer behavior analysis, inventory optimization, and personalized recommendations with real-time data."
    }
  ];

  const features = [
    {
      icon: RefreshCw,
      title: "Continuous Data Processing",
      description: "Process millions of data points per second with our high-performance streaming analytics platform."
    },
    {
      icon: Eye,
      title: "Visual Analytics",
      description: "Transform complex data streams into intuitive visualizations that reveal insights at a glance."
    },
    {
      icon: Layers,
      title: "Multi-source Integration",
      description: "Combine data from databases, APIs, IoT devices, and external sources into unified real-time analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Access real-time insights anywhere with mobile-optimized dashboards and push notifications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-spin-slow opacity-40"></div>
          
          {/* Enhanced Floating Analytics Particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/25 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-primary/20 rounded-full animate-ping delay-1500"></div>
          <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-accent/25 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-primary/15 rounded-full animate-ping delay-2500"></div>
        </div>
        
        {/* Enhanced Floating Data Visualization Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-8 animate-float opacity-40 hover:opacity-70 transition-opacity duration-500">
            <div className="relative">
              <Activity className="w-10 h-10 text-primary/40 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-primary/5 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-float-delayed opacity-40 hover:opacity-70 transition-opacity duration-500">
            <div className="relative">
              <Gauge className="w-8 h-8 text-accent/40 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-accent/5 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="absolute bottom-32 left-16 animate-float opacity-40 hover:opacity-70 transition-opacity duration-500">
            <div className="relative">
              <Zap className="w-9 h-9 text-primary/35 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-primary/5 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="absolute bottom-16 right-8 animate-float-delayed opacity-40 hover:opacity-70 transition-opacity duration-500">
            <div className="relative">
              <Clock className="w-10 h-10 text-accent/35 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-accent/5 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-12 animate-float opacity-30 hover:opacity-60 transition-opacity duration-500">
            <div className="relative">
              <BarChart3 className="w-7 h-7 text-primary/30 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-primary/5 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="absolute top-1/3 right-12 animate-float-delayed opacity-30 hover:opacity-60 transition-opacity duration-500">
            <div className="relative">
              <TrendingUp className="w-8 h-8 text-accent/30 drop-shadow-lg" />
              <div className="absolute -inset-2 bg-accent/5 rounded-full blur-md"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Badge with Glow Effect */}
            <div className="inline-flex items-center justify-center mb-12 animate-fade-in">
              <Badge variant="outline" className="mb-0 px-8 py-4 text-base font-medium bg-background/90 backdrop-blur-md border-primary/30 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Activity className="w-5 h-5 mr-3 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Real-time Analytics Solutions</span>
              </Badge>
            </div>
            
            {/* Enhanced Heading with Better Typography */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-foreground mb-12 animate-fade-in-up tracking-tight leading-[0.9] relative">
              <span className="block mb-4">Harness the Power of</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl relative inline-block">
                Real-time Insights
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl opacity-30 animate-pulse"></div>
              </span>
            </h1>
            
            {/* Enhanced Description with Better Spacing */}
            <div className="mb-16 animate-fade-in-up delay-150">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 max-w-5xl mx-auto leading-relaxed font-light">
                Transform your business with instant data processing, live dashboards, and real-time decision-making capabilities.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
                <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">Make every moment count</span> with ImpTrax's cutting-edge real-time analytics platform.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons with Better Styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl hover:shadow-primary/30 transition-all duration-500 hover:scale-110 group relative overflow-hidden min-w-[280px]"
                onClick={() => handleConsultationClick('get-started')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center">
                  Start Real-time Analytics
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-10 py-5 text-xl font-bold backdrop-blur-md transition-all duration-500 hover:scale-110 hover:shadow-xl min-w-[200px] group relative overflow-hidden"
                onClick={() => handleConsultationClick('learn-more')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Learn More</span>
              </Button>
            </div>
            
            {/* Enhanced Stats Preview */}
             <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-500">
               <div className="text-center group">
                 <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">&lt;1 ms</div>
                 <div className="text-sm md:text-base text-muted-foreground font-medium">Response Time</div>
               </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Uptime Guarantee</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Real-time Analytics <span className="text-primary">Matters</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's fast-paced business environment, waiting for batch processing and historical reports 
              means missing critical opportunities and failing to respond to threats in time.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{challenge.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Real-time Analytics <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real-time analytics solutions designed to give you instant insights 
              and competitive advantage in your industry.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Transform Your Business with <span className="text-primary">Real-time Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience measurable improvements in decision-making speed, operational efficiency, 
              and competitive positioning with our real-time analytics solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {benefit.impact}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Real-world <span className="text-primary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading organizations across industries leverage real-time analytics 
              to drive innovation and maintain competitive advantage.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Advanced <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by cutting-edge technology and designed for enterprise-scale performance.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Industry <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored real-time analytics solutions for your specific industry needs and challenges.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business with <span className="text-primary">Real-time Analytics</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Don't let valuable insights slip away. Start leveraging real-time data to make faster, 
              smarter decisions and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                onClick={() => handleConsultationClick('schedule-consultation')}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">+1 212.233.0300</span> • Free 30-minute consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about our real-time analytics services
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is real-time analytics and how does it differ from traditional analytics?",
                  answer: "Real-time analytics processes and analyzes data as it's generated, providing instant insights within seconds or milliseconds. Unlike traditional analytics that works with historical data in batches, real-time analytics enables immediate decision-making, live monitoring, and instant responses to changing conditions."
                },
                {
                  question: "How quickly can ImpTrax implement a real-time analytics solution?",
                  answer: "Implementation timelines vary based on complexity and data sources, but typically range from 4-12 weeks. We start with a comprehensive assessment, followed by rapid prototyping, and iterative deployment. Our agile approach ensures you see value quickly with incremental rollouts."
                },
                {
                  question: "What types of data sources can be integrated with your real-time analytics platform?",
                  answer: "Our platform integrates with virtually any data source including databases, APIs, IoT sensors, web applications, social media feeds, transaction systems, log files, and cloud services. We support both structured and unstructured data from on-premise and cloud environments."
                },
                {
                  question: "How do you ensure data security and compliance in real-time analytics?",
                  answer: "We implement enterprise-grade security including end-to-end encryption, role-based access controls, audit trails, and compliance frameworks (GDPR, HIPAA, SOX). All data processing follows strict security protocols with real-time monitoring for anomalies and threats."
                },
                {
                  question: "Can real-time analytics scale with our business growth?",
                  answer: "Absolutely. Our solutions are built on scalable cloud architectures that automatically adjust to handle increasing data volumes and user loads. Whether you're processing thousands or millions of events per second, our platform scales seamlessly without performance degradation."
                },
                {
                  question: "What kind of ROI can we expect from implementing real-time analytics?",
                  answer: "Clients typically see 15-30% improvement in operational efficiency, 20-40% faster decision-making, and 10-25% cost reduction within the first year. ROI varies by industry and use case, but most organizations achieve payback within 6-12 months through improved processes and faster response times."
                },
                {
                  question: "Do you provide training and ongoing support for real-time analytics solutions?",
                  answer: "Yes, we provide comprehensive training programs for your team, including technical training for administrators and user training for business stakeholders. Our ongoing support includes 24/7 monitoring, regular system optimization, updates, and dedicated support channels."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300">
                  <button
                    className="w-full text-left"
                    onClick={() => {
                      const content = document.getElementById(`faq-content-${index}`);
                      const icon = document.getElementById(`faq-icon-${index}`);
                      if (content && icon) {
                        if (content.style.display === 'none' || content.style.display === '') {
                          content.style.display = 'block';
                          icon.style.transform = 'rotate(45deg)';
                        } else {
                          content.style.display = 'none';
                          icon.style.transform = 'rotate(0deg)';
                        }
                      }
                    }}
                  >
                    <CardHeader className="hover:bg-accent/5 transition-colors duration-200">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold text-foreground pr-4">{faq.question}</CardTitle>
                        <span 
                          id={`faq-icon-${index}`}
                          className="text-primary text-xl font-bold transition-transform duration-200 flex-shrink-0"
                        >
                          +
                        </span>
                      </div>
                    </CardHeader>
                  </button>
                  <div 
                    id={`faq-content-${index}`}
                    className="border-t border-border/50"
                    style={{ display: 'none' }}
                  >
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealTimeAnalytics;