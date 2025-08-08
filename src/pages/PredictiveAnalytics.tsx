import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Target, Zap, Shield, CheckCircle, Brain, Database, LineChart, PieChart, Activity, Users, Settings } from "lucide-react";

const PredictiveAnalytics = () => {
  const navigate = useNavigate();

  const handleExploreCustomSolutionsClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Predictive Analytics',
        button: 'explore-custom-solutions'
      }
    });
  };

  const handleViewSuccessStoriesClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Predictive Analytics',
        button: 'view-success-stories'
      }
    });
  };

  const handleStartProjectClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Predictive Analytics',
        button: 'start-project'
      }
    });
  };

  const handleViewCaseStudiesClick = () => {
    navigate('/case-studies');
  };

  const handleGetAnalyticsConsultationClick = () => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Predictive Analytics',
        button: 'Tell Us About Your Project'
      }
    });
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Predictive Analytics Solutions | ImpTrax - Transform Data Into Insights";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your data into predictive insights with ImpTrax custom predictive analytics solutions. Expert development of forecasting models, risk assessment, and business intelligence systems.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your data into predictive insights with ImpTrax custom predictive analytics solutions. Expert development of forecasting models, risk assessment, and business intelligence systems.';
      document.head.appendChild(meta);
    }
  }, []);

  const stats = [
    { number: "95%", label: "Prediction Accuracy" },
    { number: "300+", label: "Models Deployed" },
    { number: "50+", label: "Industries Served" },
    { number: "40%", label: "Average ROI Increase" }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "Predict future demand patterns with advanced time series analysis and machine learning algorithms to optimize inventory and resource planning."
    },
    {
      icon: Target,
      title: "Risk Assessment Models",
      description: "Develop sophisticated risk prediction models to identify potential threats, fraud detection, and credit risk assessment for informed decision-making."
    },
    {
      icon: Database,
      title: "Customer Analytics",
      description: "Predict customer behavior, churn probability, and lifetime value using advanced analytics to enhance customer retention and acquisition strategies."
    },
    {
      icon: LineChart,
      title: "Financial Forecasting",
      description: "Create accurate financial prediction models for revenue forecasting, budget planning, and investment analysis to drive strategic business decisions."
    },
    {
      icon: Activity,
      title: "Operational Optimization",
      description: "Optimize business operations through predictive maintenance, supply chain forecasting, and resource allocation using data-driven insights."
    },
    {
      icon: Brain,
      title: "Market Intelligence",
      description: "Analyze market trends and predict future opportunities using competitive intelligence and market forecasting models for strategic advantage."
    }
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: "Time Series Analysis",
      description: "Advanced statistical methods for analyzing temporal data patterns and forecasting future trends with high accuracy."
    },
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML algorithms including regression, classification, and ensemble methods for complex predictive modeling."
    },
    {
      icon: PieChart,
      title: "Statistical Modeling",
      description: "Comprehensive statistical analysis using regression, clustering, and probability models for data-driven predictions."
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Scalable data processing pipelines for handling large datasets and real-time analytics for immediate insights."
    },
    {
      icon: Shield,
      title: "Model Validation",
      description: "Rigorous testing and validation processes to ensure model accuracy, reliability, and performance optimization."
    },
    {
      icon: Zap,
      title: "Real-time Predictions",
      description: "Deploy models for real-time prediction capabilities with automated monitoring and continuous learning systems."
    }
  ];

  const industries = [
    { name: "Finance & Banking", description: "Credit scoring, fraud detection, algorithmic trading" },
    { name: "Healthcare", description: "Patient outcome prediction, drug discovery, epidemic modeling" },
    { name: "Real Estate", description: "Property valuation, market trend analysis, investment risk assessment" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{backgroundColor: '#E0F3FF'}}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <BarChart3 className="w-4 h-4 mr-2" />
              Predictive Analytics Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Transform Your Data Into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Predictive Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Unlock the power of your data with our custom predictive analytics solutions. 
              ImpTrax develops sophisticated forecasting models and business intelligence systems 
              that transform raw data into actionable insights for strategic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300" onClick={handleGetAnalyticsConsultationClick}>
                Tell Us About Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Expertise in Developing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Predictive Analytics Software
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              With 23+ years of experience in data science and analytics, ImpTrax delivers 
              cutting-edge predictive solutions that drive business growth and operational efficiency.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#D6EFFF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Advanced Analytics{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our comprehensive suite of predictive analytics technologies and methodologies 
              ensures accurate, scalable, and actionable insights for your business.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-xl p-6 h-full hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 hover:border-blue-200/60 hover:bg-white/80 hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Transform
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our predictive analytics solutions are tailored to meet the unique challenges 
              and requirements of diverse industries worldwide.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Predictive Analytics Benefits Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{backgroundColor: '#56E4C8'}}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-28 h-28 bg-emerald-300/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-teal-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-emerald-200/25 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 animate-fade-in-up">
              Custom Predictive Analytics Software Can{" "}
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Support Your Business in Many Ways
              </span>
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Unlock the transformative power of data-driven insights with our tailored predictive analytics solutions. 
              Discover how custom software can revolutionize your business operations and drive unprecedented growth.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Enhanced Customer Targeting
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analyze customer data to identify and target ideal customers more effectively, increasing conversion rates and marketing ROI through precise audience segmentation.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Increased Customer Retention
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identify customers at risk of churning and implement proactive retention strategies, reducing customer acquisition costs and maximizing lifetime value.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Advanced Fraud Detection
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detect and prevent fraudulent activities in real-time using machine learning algorithms that identify suspicious patterns and anomalies before they impact your business.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Optimized Operations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Streamline supply chain management, inventory optimization, and resource allocation through predictive insights that reduce waste and improve efficiency.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Revenue Growth Opportunities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identify new revenue streams through cross-selling and up-selling opportunities, market trend analysis, and demand forecasting for strategic business expansion.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-200/60 hover:bg-white/90 hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Competitive Advantage
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gain strategic insights that competitors lack through advanced analytics, enabling data-driven decision making that positions your business ahead of the market.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Transform Your Business with Predictive Intelligence
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                 Our custom predictive analytics software doesn't just analyze data—it transforms it into actionable insights that drive measurable business outcomes. From reducing operational costs by up to 30% to increasing revenue through better customer targeting, our solutions deliver ROI that speaks for itself.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-slate-800 hover:bg-slate-700 text-white hover:scale-105 transition-all duration-300 group"
                  onClick={handleExploreCustomSolutionsClick}
                >
                  Explore Custom Solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-slate-700 hover:bg-slate-50 hover:scale-105 transition-all duration-300"
                  onClick={handleViewSuccessStoriesClick}
                >
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your business with powerful predictive analytics solutions. 
              Let ImpTrax help you turn data into competitive advantage and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={handleStartProjectClick}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                onClick={handleViewCaseStudiesClick}
              >
                Review Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PredictiveAnalytics;