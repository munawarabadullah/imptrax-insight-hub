import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Users, TrendingUp, Lock, Cloud, Smartphone, BarChart3, CreditCard, Database, Settings, Workflow, Brain, Target, Award, Clock, DollarSign, Heart, Stethoscope, FileText, RefreshCw, Search, AlertCircle, Calculator, PieChart, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ImpTraxHealth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'ImpTrax Health',
        button: buttonType
      }
    });
  };

  const healthcareSolutions = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "AI Revenue Cycle Management",
      description: "Intelligent automation for claims processing, denial prediction, and payment optimization that reduces administrative costs by up to 30%",
      features: ["Automated Coding & Billing", "Predictive Denial Management", "Real-time Eligibility Verification", "Intelligent Prior Authorization"]
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "AI Clinical Decision Support",
      description: "Advanced CDSS powered by machine learning that enhances diagnostic accuracy and patient safety through evidence-based insights",
      features: ["Predictive Risk Stratification", "Personalized Treatment Plans", "Drug Interaction Alerts", "Clinical Pathway Optimization"]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Value-Based Care Analytics",
      description: "AI-powered population health management and quality metrics optimization that drives better outcomes while reducing costs",
      features: ["Population Health Insights", "Quality Measure Tracking", "Risk Adjustment Optimization", "Outcome Prediction Models"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-orange-600" />,
      title: "Healthcare Process Automation",
      description: "Comprehensive automation solutions that streamline workflows and eliminate manual bottlenecks across healthcare operations",
      features: ["Workflow Orchestration", "Human-AI Collaboration", "Cross-departmental Automation", "Predictive Task Routing"]
    },
    {
      icon: <Brain className="w-8 h-8 text-red-600" />,
      title: "Predictive Analytics",
      description: "Advanced machine learning models that predict patient outcomes and enable proactive interventions for improved care delivery",
      features: ["Readmission Prediction", "Disease Progression Modeling", "Resource Utilization Forecasting", "Early Warning Systems"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-600" />,
      title: "Digital Health Platforms",
      description: "Comprehensive digital transformation solutions that integrate AI across all healthcare touchpoints and operational excellence",
      features: ["Patient Portal Integration", "Telehealth Optimization", "Workflow Automation", "Data Interoperability"]
    }
  ];

  const coreServices = [
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
      title: "Revenue Recovery",
      description: "Advanced denial management and appeals processing to recover lost revenue and reduce write-offs through systematic recovery strategies."
    },
    {
      icon: <Search className="w-6 h-6 text-purple-600" />,
      title: "Insurance Discovery",
      description: "Automated insurance verification and discovery services to identify all available coverage and maximize reimbursement opportunities."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Eligibility Automation",
      description: "Real-time eligibility verification and automated benefit checks to prevent claim denials and ensure accurate patient responsibility estimates."
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      title: "Claims Management",
      description: "Comprehensive claims processing, denial management, and resolution workflows to optimize reimbursement and reduce administrative burden."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Revenue Optimization",
      description: "Maximize revenue capture through intelligent automation and predictive analytics",
      metrics: ["15-30% revenue increase", "70% reduction in denials", "50% faster collections"]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Operational Efficiency",
      description: "Streamline workflows and eliminate manual bottlenecks",
      metrics: ["40% reduction in manual work", "30% faster processing", "5,000 FTE equivalent"]
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Compliance & Security",
      description: "Ensure HIPAA compliance and maintain the highest security standards",
      metrics: ["100% HIPAA compliance", "Advanced encryption", "Audit trail tracking"]
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Enhanced Patient Experience",
      description: "Improve patient satisfaction through transparent and efficient processes",
      metrics: ["95% patient satisfaction", "Real-time cost estimates", "Simplified billing"]
    }
  ];

  const technologies = [
    { name: "Generative AI", description: "Advanced language models for documentation, appeals, and communication" },
    { name: "Machine Learning", description: "Predictive analytics for denial management and revenue optimization" },
    { name: "Natural Language Processing", description: "Intelligent document processing and clinical data extraction" },
    { name: "Robotic Process Automation", description: "Automated execution of repetitive administrative tasks" },
    { name: "Cloud Computing", description: "Scalable, secure cloud infrastructure for optimal performance" },
    { name: "Real-time Integration", description: "Seamless integration with EHR systems and payer networks" }
  ];

  const useCases = [
    {
      title: "Auburn Community Hospital",
      challenge: "Manual revenue cycle processes causing delays and errors",
      solution: "Implemented comprehensive AI-driven RCM automation",
      results: ["50% reduction in discharged-not-final-billed cases", "40% increase in coder productivity", "4.6% rise in case mix index", "Significant cost savings"]
    },
    {
      title: "Banner Health System",
      challenge: "Complex insurance coverage discovery across multiple systems",
      solution: "Deployed AI bots for coverage identification and integration",
      results: ["Automated insurance coverage discovery", "Seamless system integration", "Automated appeal letter generation", "Predictive write-off modeling"]
    },
    {
      title: "Fresno Community Health Network",
      challenge: "High denial rates affecting cash flow",
      solution: "AI-powered claims review and denial prevention",
      results: ["22% decrease in prior-authorization denials", "18% reduction in coverage denials", "Proactive denial prevention", "Improved cash flow"]
    }
  ];

  const keyMetrics = [
    { label: "Revenue Increase", value: "15-30%", icon: <TrendingUp className="w-5 h-5 text-green-600" /> },
    { label: "Denial Rate Reduction", value: "30-40%", icon: <AlertCircle className="w-5 h-5 text-red-600" /> },
    { label: "Collection Time", value: "50% Faster", icon: <Clock className="w-5 h-5 text-blue-600" /> },
    { label: "Cost Savings", value: "20-30%", icon: <Calculator className="w-5 h-5 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">
              23 Years of Healthcare Excellence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-300">Healthcare Operations</span> with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Revolutionize healthcare delivery with intelligent automation, predictive analytics, and AI-powered solutions that optimize revenue cycles, enhance patient care, and drive value-based outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => handleConsultationClick('explore-solutions')}>
                Explore Healthcare Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-consultation')}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Healthcare AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From revenue cycle optimization to clinical decision support, we provide end-to-end AI solutions that transform healthcare delivery and operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Healthcare Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services designed to address the unique challenges of healthcare revenue cycle management and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each healthcare AI solution category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue-cycle">Revenue Cycle</TabsTrigger>
              <TabsTrigger value="clinical-ai">Clinical AI</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Transformation at Scale</h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  ImpTrax delivers comprehensive healthcare AI solutions that address the full spectrum of challenges facing healthcare providers today, from revenue optimization to clinical excellence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                      <ul className="space-y-1">
                        {benefit.metrics.map((metric, idx) => (
                          <li key={idx} className="text-xs text-blue-600 font-medium">{metric}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="revenue-cycle" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Revenue Cycle Excellence</h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Transform your revenue cycle with intelligent automation that reduces costs, accelerates payments, and improves accuracy across all RCM processes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Intelligent Claims Processing</h4>
                  <p className="text-gray-600 mb-4">
                    AI-powered natural language processing automatically assigns accurate billing codes from clinical documentation, reducing manual effort by 70% and improving coding accuracy to 98%.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Automated coding & documentation
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      98% coding accuracy rate
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      70% reduction in manual effort
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Predictive Denial Management</h4>
                  <p className="text-gray-600 mb-4">
                    Machine learning algorithms analyze historical denial patterns to predict and prevent claim denials before submission, reducing denial rates by up to 40%.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      40% reduction in denials
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Accelerated payment cycles
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Proactive denial prevention
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="clinical-ai" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Clinical Decision Support</h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Enhance clinical decision-making with intelligent systems that provide evidence-based recommendations, risk stratification, and personalized treatment pathways.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Risk Stratification</h4>
                  <p className="text-gray-600 mb-4">
                    AI algorithms analyze patient data to identify high-risk individuals and predict potential complications.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Sepsis prediction models</li>
                    <li>• Readmission risk scoring</li>
                    <li>• Mortality prediction</li>
                    <li>• Chronic disease progression</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Evidence-Based Recommendations</h4>
                  <p className="text-gray-600 mb-4">
                    Intelligent systems that integrate clinical guidelines and patient-specific data for personalized care.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Treatment protocol optimization</li>
                    <li>• Drug dosing recommendations</li>
                    <li>• Diagnostic support</li>
                    <li>• Care plan personalization</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Real-Time Alerts</h4>
                  <p className="text-gray-600 mb-4">
                    Intelligent monitoring systems that provide real-time alerts for critical conditions and care gaps.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Drug interaction warnings</li>
                    <li>• Allergy alerts</li>
                    <li>• Critical value notifications</li>
                    <li>• Care gap identification</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Process Automation</h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Streamline healthcare operations with intelligent automation that eliminates manual bottlenecks and optimizes workflow efficiency.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">ImpTrax FlowMaster™ Engine</h4>
                  <p className="text-gray-600 mb-4">
                    Revolutionary workflow orchestration system that acts as the central nervous system for healthcare operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      5,000 FTE equivalent capacity
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      40% reduction in manual work
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Seamless workflow integration
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Intelligent Process Optimization</h4>
                  <p className="text-gray-600 mb-4">
                    AI-driven optimization of healthcare processes that adapts and learns from operational patterns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Predictive task routing
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Cross-departmental automation
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Real-time performance analytics
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Healthcare Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge artificial intelligence and machine learning technologies that deliver unprecedented accuracy and efficiency in healthcare operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-World Healthcare Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading healthcare organizations are transforming their operations with ImpTrax AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{useCase.challenge}</p>
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm mb-4">{useCase.solution}</p>
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {useCase.results.map((result, idx) => (
                      <li key={idx} className="text-green-600 text-sm font-medium">• {result}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with ImpTrax to revolutionize your healthcare delivery, optimize revenue cycles, and enhance patient outcomes through intelligent AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg" onClick={() => handleConsultationClick('get-started')}>
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-demo')}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpTraxHealth;