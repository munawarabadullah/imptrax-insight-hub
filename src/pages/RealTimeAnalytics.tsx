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
    navigate('/schedule-consultation', {
      state: {
        source: 'Real-time Analytics',
        button: source
      }
    });
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
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-foreground mb-12 animate-fade-in-up tracking-tight leading-normal relative overflow-visible">
              <span className="block mb-4">Harness the Power of</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl relative inline-block pb-4 pt-2 overflow-visible">
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

      {/* Enhanced Challenges Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Critical Business Challenges
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Why Real-time Analytics{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Matters
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              In today's fast-paced business environment, waiting for batch processing and historical reports{' '}
              <span className="text-primary font-semibold">means missing critical opportunities</span>{' '}
              and failing to respond to threats in time.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden backdrop-blur-sm bg-background/80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon Background */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {challenge.description}
                    </p>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-500"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA Element */}
          <div className="text-center mt-16 animate-fade-in-up delay-700">
            <p className="text-lg text-muted-foreground mb-4">
              Don't let delayed insights cost you opportunities
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              Real-time decisions drive real results
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-32 left-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              Premium Analytics Solutions
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Our Real-time Analytics{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Comprehensive real-time analytics solutions designed to give you{' '}
              <span className="text-primary font-semibold">instant insights</span>{' '}
              and competitive advantage in your industry.
            </p>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden backdrop-blur-sm bg-background/90 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="grid gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200 group/feature"
                        >
                          <CheckCircle className="w-5 h-5 text-primary group-hover/feature:scale-110 transition-transform duration-200" />
                          <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-200 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Service Number Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-700">
            {[
              { label: 'Data Sources', value: '500+' },
              { label: 'Processing Speed', value: '<1ms' },
              { label: 'Uptime SLA', value: '99.9%' },
              { label: 'Client Success', value: '100%' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-36 h-36 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Benefits Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              Measurable Business Impact
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Real-time Insights
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Experience{' '}
              <span className="text-primary font-semibold">measurable improvements</span>{' '}
              in decision-making speed, operational efficiency, and competitive positioning with our real-time analytics solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group text-center relative overflow-hidden backdrop-blur-sm bg-background/90 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Background Element */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 font-semibold px-3 py-1 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:scale-105 transition-all duration-300"
                    >
                      {benefit.impact}
                    </Badge>
                    
                    {/* Number Badge */}
                    <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {index + 1}
                    </div>
                    
                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-500"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom Impact Statement */}
          <div className="text-center mt-20 animate-fade-in-up delay-800">
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to see these results in your business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join industry leaders who have transformed their operations with real-time analytics
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-semibold">Faster Decisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
                  <span className="text-accent font-semibold">Better Outcomes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
                  <span className="text-primary font-semibold">Competitive Edge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-accent/5 rounded-full blur-2xl animate-float delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Use Cases Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              Industry Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Real-world{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Applications
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Discover how{' '}
              <span className="text-primary font-semibold">leading organizations</span>{' '}
              across industries leverage real-time analytics to drive innovation and maintain competitive advantage.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden backdrop-blur-sm bg-background/90 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Background Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Industry Icon Background */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-primary/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {useCase.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {useCase.description}
                    </CardDescription>
                    
                    {/* Use Case Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in-up delay-900">
            <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-3">
                See your industry's potential
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Every industry has unique real-time analytics opportunities
              </p>
              <div className="flex items-center justify-center gap-4 text-xs">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Custom Solutions</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Industry Expertise</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-36 h-36 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-44 h-44 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Features Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              Advanced Capabilities
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Advanced{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Features
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Powered by{' '}
              <span className="text-primary font-semibold">cutting-edge technology</span>{' '}
              and designed for enterprise-scale performance.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group relative p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm bg-background/90 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Floating Background Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Feature Icon Background */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Feature Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Feature Highlight */}
          <div className="text-center mt-20 animate-fade-in-up delay-900">
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Enterprise-Grade Performance
              </h3>
              <p className="text-muted-foreground mb-6">
                Built for scale with 99.9% uptime guarantee and sub-millisecond response times
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">&lt;1ms</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Events/sec</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-primary/5 rounded-full blur-2xl animate-float delay-700"></div>
          
          {/* Hexagon Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Industries Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-full text-accent font-semibold text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
              Industry Expertise
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 animate-fade-in-up delay-200 leading-tight">
              Industry{' '}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient-x">
                Solutions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Tailored{' '}
              <span className="text-accent font-semibold">real-time analytics solutions</span>{' '}
              for your specific industry needs and challenges.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 group text-center relative overflow-hidden backdrop-blur-sm bg-background/90 animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Card Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Background Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Industry Icon Background */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl w-fit group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <Icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors duration-300 mb-2">
                      {industry.title}
                    </CardTitle>
                    
                    {/* Industry Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-700 ease-out"></div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {industry.description}
                    </p>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out delay-200"></div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Bottom Industry Stats */}
          <div className="text-center mt-20 animate-fade-in-up delay-900">
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl border border-accent/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Proven Industry Success
              </h3>
              <p className="text-muted-foreground mb-6">
                Trusted by leading organizations across diverse industries worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
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