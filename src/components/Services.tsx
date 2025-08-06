import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Cog, Database, TrendingUp, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = (serviceTitle: string) => {
    if (serviceTitle === "Artificial Intelligence") {
      navigate('/ai-consulting-services');
    } else if (serviceTitle === "Intelligent Automation") {
      navigate('/process-automation');
    } else if (serviceTitle === "Data Analytics & Insights") {
      navigate('/data-analytics');
    } else if (serviceTitle === "Business Intelligence") {
      navigate('/business-intelligence');
    } else if (serviceTitle === "Digital Transformation") {
      navigate('/ai-driven-transformation');
    } else if (serviceTitle === "Compliance & Security") {
      navigate('/compliance-management');
    } else {
      navigate(`/schedule-consultation?source=consulting&button=learn-more&service=${encodeURIComponent(serviceTitle)}`);
    }
  };

  const handleExploreAllClick = () => {
    navigate('/knowledge-base');
  };
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advanced machine learning algorithms, natural language processing, and computer vision solutions tailored for enterprise needs.",
      features: ["Machine Learning Models", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Cog,
      title: "Intelligent Automation",
      description: "Streamline operations with robotic process automation and intelligent workflow optimization across all business functions.",
      features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "Business Intelligence"]
    },
    {
      icon: Database,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights with advanced analytics, real-time dashboards, and comprehensive reporting.",
      features: ["Data Warehousing", "Real-time Analytics", "Custom Dashboards", "Data Migration"]
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive BI solutions, performance monitoring, and strategic analytics.",
      features: ["Performance Tracking", "Strategic Analytics", "Market Intelligence", "Competitive Analysis"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure regulatory compliance and data security with automated monitoring, risk assessment, and audit trails.",
      features: ["Regulatory Compliance", "Risk Assessment", "Security Monitoring", "Audit Automation"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your technology stack and optimize business processes.",
      features: ["Legacy Modernization", "Cloud Migration", "API Integration", "System Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for Modern Enterprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation, enhance efficiency, 
            and unlock new opportunities for businesses across Financial Services, Healthcare, and Real Estate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={() => handleLearnMoreClick(service.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="corporate" 
            size="xl"
            onClick={handleExploreAllClick}
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;