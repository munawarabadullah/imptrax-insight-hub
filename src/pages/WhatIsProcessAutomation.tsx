import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, DollarSign, Shield, TrendingUp, Target, CheckCircle, ArrowRight, Cog, Users, BarChart3, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WhatIsProcessAutomation = () => {
  const navigate = useNavigate();

  const handleConsultation = (buttonType: string) => {
    if (buttonType === 'get-started') {
      navigate('/schedule-consultation', {
        state: {
          source: 'What Is Process Automation',
          button: 'Tell Us About Your Project'
        }
      });
    } else {
      navigate('/schedule-consultation', {
      state: {
        source: 'What Is Process Automation',
        button: buttonType
      }
    });
    }
  };

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Increased Speed",
      description: "Accelerate task completion by up to 80% through intelligent automation",
      stat: "80% Faster"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Cost Reduction",
      description: "Significantly reduce operational costs and resource requirements",
      stat: "60% Savings"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Error Reduction",
      description: "Minimize human errors and ensure consistent, reliable outcomes",
      stat: "95% Accuracy"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Quality Improvement",
      description: "Standardize processes for enhanced quality and compliance",
      stat: "100% Consistent"
    }
  ];

  const automationTypes = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Business Process Automation (BPA)",
      description: "End-to-end workflow automation that orchestrates complex business processes across multiple systems and departments."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Robotic Process Automation (RPA)",
      description: "Software robots that emulate human interactions with applications to automate repetitive, rule-based tasks."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Intelligent Automation",
      description: "AI-powered automation that combines machine learning, natural language processing, and cognitive capabilities."
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Identify",
      description: "Analyze current processes to identify automation opportunities and pain points"
    },
    {
      step: "2",
      title: "Design",
      description: "Create detailed automation workflows and process maps"
    },
    {
      step: "3",
      title: "Develop",
      description: "Build and configure automation solutions using best-fit technologies"
    },
    {
      step: "4",
      title: "Test",
      description: "Thoroughly test automation workflows to ensure reliability and performance"
    },
    {
      step: "5",
      title: "Deploy",
      description: "Implement automation solutions with minimal business disruption"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Knowledge Base
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What is{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Process Automation?
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how process automation transforms businesses by eliminating manual tasks, 
            reducing errors, and accelerating operations through intelligent technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => handleConsultation('get-started')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Tell Us About Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => handleConsultation('schedule-consultation')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Process Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Process automation is the use of technology to automate repetitive and manual tasks within business processes. It encompasses various technologies including robotic process automation (RPA), intelligent document processing (IDP), workflow orchestration, artificial intelligence (AI), system integrations, and business rules.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The primary goal is to reduce human intervention in time-consuming, routine tasks, creating more efficient and effective processes. Think of it like a car wash: instead of manually washing each car, an automated system handles the entire process from start to finish, ensuring consistency, speed, and quality.
              </p>
              <p className="text-lg text-gray-600">
                At ImpTrax, we help organizations implement comprehensive process automation strategies that transform operations and drive competitive advantage.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Components</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Workflow Orchestration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AI & Machine Learning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />System Integrations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Business Rules Engine</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Document Processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Process Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Process automation delivers measurable benefits that transform business operations and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{benefit.stat}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Automation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ImpTrax offers comprehensive automation technologies to address diverse business needs and challenges.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 text-white">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ImpTrax follows a proven methodology to ensure successful automation implementation with minimal disruption.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < implementationSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Example Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Real-World Example: Employee Onboarding
                </h2>
                <p className="text-lg mb-6 text-blue-100">
                  Consider a new employee onboarding process. When HR enters a start date, automation triggers multiple coordinated actions:
                </p>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />Creates personalized employee portal and sends automated welcome email</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />Configures IT equipment based on role and department requirements</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />Assigns workspace and updates facility management systems</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />Processes tax and banking information through AI-powered document processing</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Result</h3>
                  <p className="text-blue-100">
                    What once took days of manual coordination now happens automatically in hours, ensuring consistent experiences and freeing HR to focus on strategic initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Process automation creates operational excellence that drives competitive advantage and fuels innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Achieve consistent, standardized processes that eliminate variability and ensure predictable outcomes across your organization.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Competitive Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Respond faster to market changes, deliver superior customer experiences, and outpace competitors through automated efficiency.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Innovation Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Free your workforce from routine tasks to focus on strategic initiatives, creative problem-solving, and value-added activities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Processes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how ImpTrax can help you implement intelligent process automation 
            that drives efficiency, reduces costs, and accelerates growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => handleConsultation('schedule-consultation')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => handleConsultation('learn-more')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsProcessAutomation;