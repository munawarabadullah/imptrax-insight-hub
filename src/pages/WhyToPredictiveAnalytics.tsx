import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Shield, Zap, Users, BarChart3, CheckCircle, Brain, DollarSign, Clock, Award } from "lucide-react";

const WhyToPredictiveAnalytics = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Why Use Predictive Analytics | ImpTrax - Business Benefits & Advantages";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why businesses choose predictive analytics. Learn about competitive advantages, improved decision-making, risk reduction, and operational optimization with ImpTrax solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover why businesses choose predictive analytics. Learn about competitive advantages, improved decision-making, risk reduction, and operational optimization with ImpTrax solutions.';
      document.head.appendChild(meta);
    }
  }, []);

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Improved Decision Making",
      description: "Make data-driven decisions with confidence by leveraging historical patterns and predictive insights to forecast future outcomes and trends."
    },
    {
      icon: Target,
      title: "Enhanced Customer Targeting",
      description: "Identify and target your ideal customers more effectively by analyzing behavioral patterns and predicting customer preferences and needs."
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Minimize business risks by predicting potential threats, fraud detection, and identifying vulnerabilities before they impact your operations."
    },
    {
      icon: DollarSign,
      title: "Increased Revenue",
      description: "Boost your bottom line through optimized pricing strategies, improved customer retention, and identification of new revenue opportunities."
    },
    {
      icon: Users,
      title: "Better Customer Retention",
      description: "Predict customer churn and take proactive measures to retain valuable customers, increasing lifetime value and reducing acquisition costs."
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Optimize operations through predictive maintenance, inventory management, and resource allocation to reduce costs and improve performance."
    }
  ];

  const businessAdvantages = [
    {
      icon: BarChart3,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors by leveraging data insights they don't have access to, enabling strategic positioning and market leadership.",
      stats: "90% of leading companies use predictive analytics"
    },
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "React quickly to market changes and customer needs with real-time predictive insights that enable agile business responses.",
      stats: "50% faster decision-making process"
    },
    {
      icon: Award,
      title: "Quality Improvements",
      description: "Enhance product and service quality by predicting potential issues and implementing preventive measures before problems occur.",
      stats: "40% reduction in quality issues"
    }
  ];

  const industryApplications = [
    {
      industry: "Finance & Banking",
      applications: [
        "Credit risk assessment and loan approval optimization",
        "Fraud detection and prevention systems",
        "Investment portfolio optimization",
        "Customer lifetime value prediction"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient outcome prediction and treatment optimization",
        "Drug discovery and development acceleration",
        "Epidemic modeling and public health planning",
        "Resource allocation and capacity planning"
      ]
    },
    {
      industry: "Retail & E-commerce",
      applications: [
        "Demand forecasting and inventory optimization",
        "Personalized product recommendations",
        "Price optimization and dynamic pricing",
        "Customer segmentation and targeting"
      ]
    }
  ];

  const whyChooseAnalytics = [
    "Access to more data than ever before with growing volumes and types of information",
    "Faster, cheaper computing power enabling complex analytical processing",
    "Easier-to-use software making analytics accessible to business users",
    "Competitive economic conditions requiring data-driven differentiation",
    "AI and machine learning advancements improving prediction accuracy",
    "Real-time data processing capabilities for immediate insights"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{backgroundColor: '#E0F3FF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Strategic Business Intelligence
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Why Use{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Predictive Analytics
              </span>
              ?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how predictive analytics transforms businesses by providing actionable insights, 
              reducing risks, and creating competitive advantages that drive sustainable growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Analytics Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Key Benefits of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Predictive Analytics
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your business operations with data-driven insights that provide measurable 
              advantages across all aspects of your organization.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Advantages Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#D6EFFF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Strategic Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Advantages
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Gain measurable competitive advantages that position your business for long-term success 
              in today's data-driven marketplace.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {businessAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="text-primary font-semibold text-sm">
                    {advantage.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Predictive Analytics{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Now?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The convergence of technology, data availability, and business needs makes this 
                the perfect time to implement predictive analytics solutions.
              </p>
            </div>
            
            <div className="grid gap-4 lg:grid-cols-2">
              {whyChooseAnalytics.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#F8FCFF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industry{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how different industries leverage predictive analytics to solve specific 
              challenges and create value.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {industryApplications.map((industry, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {industry.industry}
                </h3>
                <ul className="space-y-3">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" style={{backgroundColor: '#E0F3FF'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Predictive Analytics?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses that have already discovered the power of predictive analytics. 
              Let ImpTrax help you unlock the insights hidden in your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyToPredictiveAnalytics;