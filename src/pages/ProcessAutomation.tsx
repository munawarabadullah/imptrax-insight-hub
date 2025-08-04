import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, Target, TrendingUp, Shield, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProcessAutomation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=schedule-consultation");
  };

  const handleLearnMoreClick = () => {
    navigate("/schedule-consultation?source=process-automation&button=learn-more");
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Increased Speed",
      description: "Eliminate manual bottlenecks and accelerate your business processes by up to 80%"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce operational costs through streamlined workflows and reduced human intervention"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Error Reduction",
      description: "Minimize human errors and ensure consistent, reliable process execution"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quality Improvement",
      description: "Enhance output quality through standardized, repeatable automated processes"
    }
  ];

  const automationTypes = [
    {
      title: "Business Process Automation",
      description: "Comprehensive automation covering end-to-end business workflows",
      features: ["Data management", "Workflow optimization", "System integration", "Reporting automation"]
    },
    {
      title: "Robotic Process Automation (RPA)",
      description: "Front-end automation that emulates human interactions with systems",
      features: ["Email processing", "Data extraction", "Form filling", "System queries"]
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered automation that learns and adapts to complex scenarios",
      features: ["Decision making", "Pattern recognition", "Predictive analysis", "Adaptive workflows"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      processes: ["Invoice processing", "Loan approvals", "Compliance reporting", "Customer onboarding"]
    },
    {
      industry: "Healthcare",
      processes: ["Patient registration", "Claims processing", "Appointment scheduling", "Medical records management"]
    },
    {
      industry: "Manufacturing",
      processes: ["Inventory management", "Quality control", "Supply chain optimization", "Production scheduling"]
    },
    {
      industry: "Retail",
      processes: ["Order processing", "Customer service", "Inventory tracking", "Price optimization"]
    }
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
                <Zap className="w-4 h-4 mr-2" />
                Process Automation Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transform Your Business with Intelligent Process Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline operations, reduce costs, and eliminate errors with ImpTrax's comprehensive process automation solutions. 
                From simple task automation to complex workflow orchestration, we help businesses achieve operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleScheduleConsultationClick}
                  className="text-lg px-8 py-6"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Process Automation */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">What is Process Automation?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Process automation streamlines business operations by removing manual inputs, which decreases errors, 
                  increases delivery speed, boosts quality, minimizes costs, and simplifies workflows. It incorporates 
                  software tools, people, and processes to create completely automated workflows.
                </p>
                <p className="text-lg leading-relaxed">
                  Think of it like a modern car wash system - from payment processing to the final rinse, every step 
                  is seamlessly automated using sensors, software, and mechanical systems. Similarly, ImpTrax helps 
                  businesses automate their complex processes, creating efficient, error-free operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Process Automation?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your business operations with measurable benefits that drive growth and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Types of Automation */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Automation Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From basic task automation to intelligent AI-powered workflows, we offer comprehensive solutions.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {automationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
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

        {/* Use Cases by Industry */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Process automation delivers value across every industry. See how ImpTrax can transform your sector.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{useCase.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.processes.map((process, idx) => (
                        <li key={idx} className="flex items-start">
                          <Target className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{process}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Implementation Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ImpTrax follows a proven methodology to ensure successful automation implementation.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  { step: "1", title: "Identify", desc: "Analyze current processes and identify automation opportunities" },
                  { step: "2", title: "Design", desc: "Create detailed automation workflows and system architecture" },
                  { step: "3", title: "Develop", desc: "Build and configure automation solutions using best practices" },
                  { step: "4", title: "Test", desc: "Thoroughly test all automated processes before deployment" },
                  { step: "5", title: "Deploy", desc: "Implement solutions with minimal disruption to operations" }
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Processes?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of businesses that have transformed their operations with ImpTrax process automation solutions. 
              Let's discuss how we can streamline your workflows and boost your efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleScheduleConsultationClick}
                className="text-lg px-8 py-6"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleLearnMoreClick}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProcessAutomation;