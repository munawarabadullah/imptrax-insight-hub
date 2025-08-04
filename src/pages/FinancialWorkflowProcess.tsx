import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, DollarSign, Target, TrendingUp, Shield, Clock, BarChart3, FileText, Users, Zap, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinancialWorkflowProcess = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleGetStartedClick = () => {
    navigate("/schedule-consultation?source=financial-workflow&button=get-started");
  };

  const handleScheduleConsultationClick = () => {
    navigate("/schedule-consultation?source=financial-workflow&button=schedule-consultation");
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Productivity",
      description: "Clear steps and roles mean less confusion and delays, allowing employees to focus on strategic work"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Enhanced Accuracy",
      description: "Defined workflows eliminate human errors and provide accurate financial information for decision-making"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Improved Efficiency",
      description: "Automating workflows frees up time and lets teams focus on important growth initiatives"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Better Compliance",
      description: "Clear steps ensure regulatory compliance and protect against potential fines and lawsuits"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Decision Making",
      description: "Quicker workflows and up-to-date financial data enable faster, more accurate business decisions"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Savings",
      description: "Less busywork, fewer errors, and better resource utilization leads to significant cost savings"
    }
  ];

  const commonProcesses = [
    {
      title: "Financial Reporting",
      description: "Preparation and presentation of financial information to stakeholders",
      processes: ["Recording transactions", "Preparing financial statements", "Stakeholder reporting", "Performance analysis"]
    },
    {
      title: "Tax Preparation",
      description: "Managing taxes and ensuring compliance with regulations",
      processes: ["Tax planning", "Filing returns", "Compliance monitoring", "Documentation management"]
    },
    {
      title: "Financial Forecasting",
      description: "Predicting future financial performance based on data and trends",
      processes: ["Budgeting", "Revenue projections", "Expense forecasts", "Market analysis"]
    },
    {
      title: "Expense Management",
      description: "Controlling and monitoring expenses to optimize resource utilization",
      processes: ["Expense tracking", "Invoice approval workflows", "Cost-reduction strategies", "Budget monitoring"]
    }
  ];

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "System Integration",
      description: "Connecting different accounting, invoicing, and payroll programs can be complex and costly"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customization Needs",
      description: "Pre-made workflow programs might not work perfectly for every unique business requirement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Financial workflows handle sensitive information requiring top-notch security measures"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Employee Training",
      description: "Implementation requires dedicated resources for training employees on new workflows and technology"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Budget Constraints",
      description: "Budget limitations and competing priorities can make workflow improvements challenging"
    }
  ];

  const streamlineSteps = [
    "Assess current processes and identify inefficiencies",
    "Map out existing financial workflows and responsibilities",
    "Identify automation opportunities and bottlenecks",
    "Design optimized workflow processes",
    "Select appropriate technology solutions",
    "Implement workflow automation tools",
    "Train employees on new processes",
    "Monitor and measure performance",
    "Continuously optimize and improve",
    "Ensure compliance and security",
    "Scale solutions across the organization"
  ];

  const stats = [
    { number: "60%", label: "Productivity Increase" },
    { number: "45%", label: "Error Reduction" },
    { number: "35%", label: "Cost Savings" }
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
                <FileText className="w-4 h-4 mr-2" />
                Financial Workflow Processes
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What is a Financial Workflow Process?
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover how organized financial workflow processes can transform your business operations, 
                enhance accuracy, ensure compliance, and drive strategic decision-making through streamlined automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="corporate" 
                  onClick={handleGetStartedClick}
                  className="text-lg px-8 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Optimize Your Workflows
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

        {/* What is Financial Workflow Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Understanding Financial Workflow Processes</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  A financial workflow process is the organized sequence of steps followed to handle financial tasks within a business. 
                  Think of common tasks like expense reimbursements or invoice payments - a financial workflow defines the steps needed, 
                  like submitting receipts, getting approvals, and issuing payments.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  It's like a roadmap for easily managing money, ensuring that every financial transaction follows a consistent, 
                  auditable path from initiation to completion. This systematic approach eliminates confusion, reduces errors, 
                  and ensures compliance with regulatory requirements.
                </p>
                <p className="text-lg leading-relaxed">
                  Financial workflows are essential for businesses to maintain financial health, comply with regulations, 
                  and make smart decisions that support the overall goals of an organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Financial Workflow Processes */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Common Financial Workflow Processes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Essential financial processes that form the backbone of organizational financial management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {commonProcesses.map((process, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{process.title}</CardTitle>
                    <CardDescription className="text-base">{process.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {process.processes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Benefits of Streamlined Financial Workflows</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your financial operations with measurable benefits that enhance organizational performance and drive excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Challenges Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Common Challenges in Financial Workflow Management</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding potential obstacles helps in planning effective solutions for workflow optimization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                      {challenge.icon}
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Streamline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">How to Streamline Financial Workflow Processes</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-xl leading-relaxed mb-6">
                  Streamlining financial workflow processes involves optimizing and automating tasks to improve efficiency, 
                  accuracy, and compliance. This process requires close collaboration across the organization to ensure 
                  successful implementation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">11-Step Guide to Streamlining Financial Workflows</h3>
                <div className="grid gap-4">
                  {streamlineSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Financial Workflow Management is Important */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Why Financial Workflow Management is Important</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Financial workflow management plays a crucial role in enhancing organizational performance, 
                  driving operational excellence, and supporting strategic objectives. By embracing automation, 
                  standardization, and optimization, organizations can unlock significant benefits.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  These benefits include improved productivity, enhanced accuracy, increased efficiency, and better compliance 
                  in financial management processes. The systematic approach ensures that financial operations align with 
                  business goals while maintaining regulatory compliance.
                </p>
                <p className="text-lg leading-relaxed">
                  In today's competitive business environment, organizations that implement effective financial workflow 
                  management gain a significant advantage through reduced costs, faster decision-making, and improved 
                  resource utilization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Financial Workflows?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your financial operations with ImpTrax's proven workflow optimization solutions. 
              Let's discuss how we can help you achieve operational excellence and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleGetStartedClick}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
              >
                Start Your Financial Transformation
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

export default FinancialWorkflowProcess;