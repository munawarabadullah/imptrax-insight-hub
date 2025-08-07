import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Brain, Workflow, DollarSign, Clock, Users, BarChart3, FileText, Settings, Target, Award, Lightbulb } from 'lucide-react';

const HealthcareAutomation = () => {
  const navigate = useNavigate();

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'Healthcare Automation',
        button: buttonType
      }
    });
  };
  const coreProcesses = [
    {
      title: "Eligibility Engine",
      description: "AI-powered real-time insurance verification and eligibility determination",
      icon: Shield,
      features: [
        "Real-time payer policy validation",
        "Automated benefit verification",
        "Prior authorization coordination",
        "Coverage gap identification",
        "Multi-payer integration"
      ],
      benefits: [
        "95% reduction in eligibility errors",
        "50% faster patient registration",
        "Automated duplicate record detection",
        "Real-time coverage updates"
      ]
    },
    {
      title: "Payment Processing Engine",
      description: "Intelligent automation for claims processing and payment reconciliation",
      icon: DollarSign,
      features: [
        "Automated claim scrubbing",
        "ERA parsing and posting",
        "Payment variance detection",
        "Underpayment identification",
        "Batch payment processing"
      ],
      benefits: [
        "30% faster payment processing",
        "70% reduction in payment errors",
        "Automated reconciliation",
        "Real-time payment tracking"
      ]
    },
    {
      title: "Insurance Rules Engine",
      description: "Advanced AI system for payer rule interpretation and compliance",
      icon: FileText,
      features: [
        "20,000+ payer rules automation",
        "Dynamic policy interpretation",
        "Compliance monitoring",
        "Denial pattern analysis",
        "Appeal letter generation"
      ],
      benefits: [
        "22% reduction in denials",
        "Automated appeal processes",
        "95% payer compliance rate",
        "Real-time rule updates"
      ]
    },
    {
      title: "ImpTrax FlowMaster™ Engine",
      description: "Revolutionary workflow orchestration system that acts as the central nervous system for healthcare operations",
      icon: Workflow,
      features: [
        "Intelligent workflow coordination",
        "Human-AI collaboration optimization",
        "Cross-departmental automation",
        "Predictive task routing",
        "Performance analytics"
      ],
      benefits: [
        "5,000 FTE equivalent capacity",
        "40% reduction in manual work",
        "Seamless workflow integration",
        "Real-time optimization"
      ]
    },
    {
      title: "Contract Pricing Engine",
      description: "AI-driven contract analysis and pricing optimization for maximum revenue",
      icon: BarChart3,
      features: [
        "Contract modeling and analysis",
        "Reimbursement accuracy validation",
        "Underpayment recovery",
        "Rate negotiation support",
        "Performance benchmarking"
      ],
      benefits: [
        "15% increase in contract value",
        "Automated underpayment detection",
        "Streamlined negotiations",
        "Revenue optimization"
      ]
    }
  ];

  const keyTechnologies = [
    {
      name: "Generative AI",
      description: "Advanced language models for documentation, appeals, and communication",
      applications: ["Appeal letter generation", "Clinical documentation", "Patient communication", "Payer correspondence"]
    },
    {
      name: "Machine Learning",
      description: "Predictive analytics for denial management and revenue optimization",
      applications: ["Denial prediction", "Payment forecasting", "Risk assessment", "Pattern recognition"]
    },
    {
      name: "Natural Language Processing",
      description: "Intelligent document processing and clinical data extraction",
      applications: ["Automated coding", "Document analysis", "Data extraction", "Compliance monitoring"]
    },
    {
      name: "Robotic Process Automation",
      description: "Automated execution of repetitive administrative tasks",
      applications: ["Claims processing", "Data entry", "Report generation", "System integration"]
    }
  ];

  const useCases = [
    {
      title: "Auburn Community Hospital",
      challenge: "Manual revenue cycle processes causing delays and errors",
      solution: "Implemented comprehensive AI-driven RCM automation",
      results: [
        "50% reduction in discharged-not-final-billed cases",
        "40% increase in coder productivity",
        "4.6% rise in case mix index",
        "Significant cost savings"
      ]
    },
    {
      title: "Banner Health System",
      challenge: "Complex insurance coverage discovery across multiple systems",
      solution: "Deployed AI bots for coverage identification and integration",
      results: [
        "Automated insurance coverage discovery",
        "Seamless system integration",
        "Automated appeal letter generation",
        "Predictive write-off modeling"
      ]
    },
    {
      title: "Fresno Community Health Network",
      challenge: "High denial rates affecting cash flow",
      solution: "AI-powered claims review and denial prevention",
      results: [
        "22% decrease in prior-authorization denials",
        "18% reduction in coverage denials",
        "Proactive denial prevention",
        "Improved cash flow"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Maximize revenue capture through intelligent automation and predictive analytics",
      metrics: ["15-30% revenue increase", "70% reduction in denials", "50% faster collections"]
    },
    {
      icon: Clock,
      title: "Operational Efficiency",
      description: "Streamline workflows and eliminate manual bottlenecks",
      metrics: ["40% reduction in manual work", "30% faster processing", "5,000 FTE equivalent"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure HIPAA compliance and maintain the highest security standards",
      metrics: ["100% HIPAA compliance", "Advanced encryption", "Audit trail tracking"]
    },
    {
      icon: Users,
      title: "Enhanced Patient Experience",
      description: "Improve patient satisfaction through transparent and efficient processes",
      metrics: ["95% patient satisfaction", "Real-time cost estimates", "Simplified billing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Healthcare Process Automation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Process Automation
              <span className="block text-blue-600">AI + Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform healthcare financial performance with intelligent technologies that revolutionize 
              healthcare systems through advanced AI and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/knowledge-base')}>
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleConsultationClick('Schedule Demo')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Processes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intelligent Automation Processes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered engines transforms every aspect of healthcare 
              revenue cycle management, from eligibility verification to contract optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {coreProcesses.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{process.title}</CardTitle>
                        {process.title === "ImpTrax FlowMaster™ Engine" && (
                          <Badge className="mt-1 bg-orange-100 text-orange-800 border-orange-200 text-xs">
                            TRADEMARK™
                        </Badge>
                      )}
                    </div>
                    </div>
                    <CardDescription className="text-gray-600">{process.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {process.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {process.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-blue-600 font-medium">
                            <TrendingUp className="h-4 w-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge artificial intelligence and machine learning technologies 
              that deliver unprecedented accuracy and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTechnologies.map((tech, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">{tech.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tech.applications.map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements across all aspects of your healthcare operations 
              with our intelligent automation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, idx) => (
                        <div key={idx} className="text-sm font-semibold text-blue-600">
                          {metric}
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

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading healthcare organizations are transforming their operations 
              with ImpTrax automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-600 font-medium">
                          <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures seamless integration and rapid value realization 
              across your healthcare organization.
            </p>
          </div>

          <Tabs defaultValue="assessment" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="assessment" className="mt-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">Comprehensive Assessment</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    We conduct a thorough analysis of your current revenue cycle processes, 
                    identifying automation opportunities and potential ROI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Current state process mapping
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Technology stack evaluation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      ROI analysis and business case development
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Risk assessment and mitigation planning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design" className="mt-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">Solution Design</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    Our experts design a customized automation solution tailored to your 
                    specific workflows and organizational requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Custom workflow design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Integration architecture planning
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Security and compliance framework
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Change management strategy
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="implementation" className="mt-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Settings className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">Phased Implementation</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    We deploy solutions in carefully planned phases to minimize disruption 
                    and ensure smooth transition to automated processes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Pilot deployment and testing
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Staff training and onboarding
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Gradual rollout across departments
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      24/7 support during transition
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="optimization" className="mt-8">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">Continuous Optimization</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    Our commitment extends beyond implementation with ongoing optimization 
                    and enhancement of your automation platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Performance monitoring and analytics
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Regular process refinement
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Technology updates and enhancements
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Ongoing training and support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare organizations that have revolutionized their revenue cycle 
            management with ImpTrax intelligent automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => handleConsultationClick('Schedule Consultation')}>
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => navigate('/case-studies')}>
              Review Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareAutomation;