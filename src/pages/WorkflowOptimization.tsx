import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Workflow, Target, TrendingUp, Shield, Clock, DollarSign, Users, BarChart3, Zap, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WorkflowOptimization = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=schedule-consultation");
  };

  const handleLearnMoreClick = () => {
    navigate("/schedule-consultation?source=workflow-optimization&button=learn-more");
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Streamline processes and reduce time taken for task completion by up to 70%"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduced Costs",
      description: "Lower operational costs by minimizing manual labor and eliminating process inefficiencies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Customer Satisfaction",
      description: "Deliver faster service times and improved experiences through optimized workflows"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Streamlined Compliance",
      description: "Ensure regulatory adherence with automated compliance workflows and audit trails"
    }
  ];

  const challenges = [
    {
      title: "Manual Process Inefficiencies",
      description: "Traditional manual operations lead to bottlenecks, errors, and reduced productivity",
      impact: "Diminished productivity and increased operational costs"
    },
    {
      title: "Compliance Complexity",
      description: "Manual compliance processes are time-consuming and prone to errors",
      impact: "Risk of regulatory fines and reputation damage"
    },
    {
      title: "Scalability Limitations",
      description: "Traditional processes cannot efficiently scale to meet growing demands",
      impact: "Hindered growth and reduced market responsiveness"
    }
  ];

  const solutions = [
    {
      title: "Intelligent Process Automation",
      description: "Leverage AI, RPA, and machine learning to address inefficiencies and integrate systems",
      features: ["AI-powered decision making", "Robotic process automation", "Machine learning optimization", "System integration"]
    },
    {
      title: "Workflow Management Systems",
      description: "Comprehensive workflow orchestration with real-time monitoring and optimization",
      features: ["Real-time process monitoring", "Automated task routing", "Performance analytics", "Resource optimization"]
    },
    {
      title: "Data-Driven Optimization",
      description: "Use advanced analytics to continuously improve workflow performance",
      features: ["Predictive analytics", "Performance metrics", "Bottleneck identification", "Continuous improvement"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      processes: ["Transaction processing", "Account management", "Risk assessment", "Compliance reporting"]
    },
    {
      name: "Healthcare",
      processes: ["Patient workflow", "Medical records", "Appointment scheduling", "Claims processing"]
    },
    {
      name: "Manufacturing",
      processes: ["Production planning", "Quality control", "Supply chain", "Inventory management"]
    },
    {
      name: "Retail & E-commerce",
      processes: ["Order fulfillment", "Customer service", "Inventory tracking", "Returns processing"]
    }
  ];

  const stats = [
    { number: "70%", label: "Efficiency Improvement" },
    { number: "50%", label: "Cost Reduction" },
    { number: "90%", label: "Error Reduction" }
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
                <Workflow className="w-4 h-4 mr-2" />
                Workflow Optimization Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Optimize Your Business Workflows with Intelligent Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your operations with ImpTrax's comprehensive workflow optimization solutions. 
                Streamline processes, reduce costs, and enhance efficiency through intelligent automation and data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
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
                  <div className="text-6xl sm:text-5xl font-bold text-yellow-300 mb-2 tracking-tight leading-none">
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

        {/* Why Traditional Operations Need Evolution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Why Traditional Operations Need Evolution</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  Traditional business operations rely heavily on manual processes that are fraught with inefficiencies and errors. 
                  These outdated methods lead to significant challenges including diminished productivity, increased operational costs, 
                  and reduced customer satisfaction.
                </p>
                <p className="text-lg leading-relaxed">
                  In today's competitive landscape, businesses need transformative workflow optimization to maintain efficiency, 
                  ensure compliance, and scale effectively to meet growing demands.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{challenge.title}</CardTitle>
                      <CardDescription className="text-base">{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                        <p className="text-sm text-red-700 font-medium">Impact: {challenge.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Benefits of Workflow Optimization</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your business operations with measurable benefits that drive growth and operational excellence.
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

        {/* Our Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Workflow Optimization Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions that leverage cutting-edge technology to transform your business processes.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
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

        {/* Industry Applications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our workflow optimization solutions are tailored for various industries and business processes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.processes.map((process, idx) => (
                        <li key={idx} className="flex items-center">
                          <Target className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
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

        {/* Implementation Considerations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Implementation Considerations</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Implementing workflow optimization may present challenges including technological integration complexities, 
                  employee adaptation to new systems, and significant upfront investments. However, these challenges can be 
                  effectively overcome with a strategic approach.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Success requires focusing on seamless technology integration, comprehensive training programs for staff, 
                  and a clear understanding of the investment's long-term ROI.
                </p>
                <p className="text-lg leading-relaxed">
                  Partnering with ImpTrax offers a smart solution to navigate these challenges effectively. Our expertise 
                  across multiple industries allows for smoother technological integration and minimizes disruptions, while 
                  our cost-effective optimization solutions present compelling value propositions for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Workflows?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your business operations with ImpTrax's proven workflow optimization solutions. 
              Let's discuss how we can help you achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleGetStartedClick}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
              >
                Start Your Optimization Journey
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

export default WorkflowOptimization;