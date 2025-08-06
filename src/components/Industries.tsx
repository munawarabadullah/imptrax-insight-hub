import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Industries = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = (industryTitle: string) => {
    if (industryTitle === "Financial Services") {
      navigate('/knowledge-base#financial-services');
    } else if (industryTitle === "Healthcare") {
      navigate('/knowledge-base#healthcare');
    } else if (industryTitle === "Real Estate") {
      navigate('/knowledge-base#real-estate');
    } else {
      navigate('/knowledge-base');
    }
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=industries&button=schedule-consultation');
  };
  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Empowering banks, investment firms, and fintech companies with AI-driven risk assessment, automated compliance, and intelligent trading systems.",
      solutions: [
        "Automated Risk Assessment",
        "Fraud Detection Systems",
        "Algorithmic Trading",
        "Compliance Automation",
        "Customer Analytics",
        "Portfolio Optimization"
      ],
      stats: { projects: "150+", efficiency: "65%" }
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Revolutionizing patient care with AI diagnostics, automated administrative processes, and data-driven medical insights.",
      solutions: [
        "AI Diagnostic Tools",
        "Patient Data Analytics",
        "Treatment Optimization",
        "Administrative Automation",
        "Medical Imaging AI",
        "Predictive Health Analytics"
      ],
      stats: { projects: "200+", efficiency: "45%" }
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Transforming property markets with intelligent valuation models, market analytics, and automated property management systems.",
      solutions: [
        "Property Valuation AI",
        "Market Intelligence",
        "Investment Analysis",
        "Portfolio Management",
        "Tenant Analytics",
        "Property Automation"
      ],
      stats: { projects: "180+", efficiency: "55%" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep domain expertise across key industries, delivering tailored AI and automation solutions 
            that address unique challenges and drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/30">
                <CardHeader className="text-center space-y-6 pb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-3">
                      {industry.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{industry.stats.projects}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">+{industry.stats.efficiency}</div>
                      <div className="text-sm text-muted-foreground">Efficiency</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Solutions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          <span className="leading-tight">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={() => handleExploreMoreClick(industry.title)}
                  >
                    Explore More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your industry with cutting-edge technology?
          </p>
          <Button 
            variant="corporate" 
            size="xl"
            onClick={handleScheduleConsultationClick}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;