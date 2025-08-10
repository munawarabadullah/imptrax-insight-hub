import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ArrowRight, Brain, Zap, BarChart3, Eye, MessageSquare, Database, Cloud, Cpu, RefreshCw, Target, Shield, TrendingUp, Clock, DollarSign, Users, Settings, Activity, Gauge, Bot, Lightbulb, Award, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ImpTraxTechnology = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleConsultationClick = (buttonType: string) => {
    navigate('/schedule-consultation', {
      state: {
        source: 'ImpTrax Technology',
        button: buttonType
      }
    });
  };

  const technologySolutions = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced AI/ML solutions including deep learning, neural networks, and intelligent automation",
      features: ["Generative AI", "Machine Learning Models", "Deep Learning", "MLOps & AIOps"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Predictive Analytics & Intelligence",
      description: "Transform data into actionable insights with advanced forecasting and business intelligence",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Analytics", "Market Intelligence"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Natural Language Processing",
      description: "Comprehensive NLP solutions for text analysis, language understanding, and conversational AI",
      features: ["Sentiment Analysis", "Text Summarization", "Language Translation", "Speech Recognition"]
    },
    {
      icon: <Bot className="w-8 h-8 text-red-600" />,
      title: "Process Automation & RPA",
      description: "Intelligent automation solutions to streamline operations and eliminate manual processes",
      features: ["Business Process Automation", "Robotic Process Automation", "Workflow Optimization", "Intelligent Automation"]
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      title: "Real-time Analytics & Monitoring",
      description: "Live data processing and instant insights for immediate decision-making capabilities",
      features: ["Live Data Streaming", "Real-time Dashboards", "Instant Alerts", "Predictive Monitoring"]
    },
    {
      icon: <Eye className="w-8 h-8 text-orange-600" />,
      title: "Computer Vision & Cognitive Services",
      description: "Advanced visual intelligence and cognitive computing for enhanced user experiences",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Visual Inspection"]
    }
  ];

  const keyBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Accelerated Innovation",
      description: "Drive innovation cycles faster with cutting-edge technology solutions and AI-powered development"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Operational Efficiency",
      description: "Streamline operations and eliminate bottlenecks through intelligent automation and optimization"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Cost Optimization",
      description: "Reduce operational costs through automation, predictive maintenance, and resource optimization"
    },
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Competitive Advantage",
      description: "Stay ahead with advanced technology solutions that transform how you operate and engage customers"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", description: "TensorFlow, PyTorch, OpenAI, Hugging Face" },
    { name: "Machine Learning", description: "Scikit-learn, XGBoost, MLflow, Kubeflow" },
    { name: "Cloud Platforms", description: "AWS, Azure, Google Cloud, Kubernetes" },
    { name: "Data Processing", description: "Apache Spark, Kafka, Elasticsearch, MongoDB" },
    { name: "Analytics Tools", description: "Tableau, Power BI, Apache Superset, Grafana" },
    { name: "Automation", description: "UiPath, Automation Anywhere, Blue Prism, Zapier" }
  ];

  const successStories = [
    {
      title: "Healthcare AI Transformation",
      challenge: "Large healthcare system needed predictive analytics for patient outcomes and operational efficiency",
      solution: "Implemented comprehensive AI/ML platform with real-time monitoring and predictive models",
      results: ["40% improvement in patient outcome predictions", "60% reduction in operational costs", "95% accuracy in risk assessment"]
    },
    {
      title: "Financial Services Automation",
      challenge: "Investment firm required automated trading systems and real-time risk management",
      solution: "Developed intelligent automation platform with ML-powered decision making and real-time analytics",
      results: ["300% faster trade execution", "50% reduction in operational risks", "80% improvement in portfolio performance"]
    },
    {
      title: "Real Estate Intelligence Platform",
      challenge: "Property management company needed predictive analytics for market trends and investment decisions",
      solution: "Built comprehensive analytics platform with NLP for market sentiment and predictive modeling",
      results: ["70% more accurate market predictions", "45% increase in investment ROI", "90% faster decision-making"]
    }
  ];

  const capabilities = [
    {
      category: "AI & Machine Learning",
      items: [
        "Custom ML model development and training",
        "Deep learning and neural network architectures",
        "Generative AI and large language models",
        "Computer vision and image processing",
        "Natural language processing and understanding",
        "MLOps and model lifecycle management"
      ]
    },
    {
      category: "Analytics & Intelligence",
      items: [
        "Predictive analytics and forecasting",
        "Real-time data processing and streaming",
        "Business intelligence and reporting",
        "Statistical modeling and analysis",
        "Data visualization and dashboards",
        "Advanced analytics and insights"
      ]
    },
    {
      category: "Automation & Integration",
      items: [
        "Robotic process automation (RPA)",
        "Workflow automation and optimization",
        "System integration and API development",
        "Cloud migration and modernization",
        "DevOps and continuous deployment",
        "Legacy system transformation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">
              Technology Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced <span className="text-blue-300">Technology Solutions</span> for Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Harness the power of AI, machine learning, automation, and advanced analytics to transform your business operations and drive unprecedented growth in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={() => handleConsultationClick('explore-technology')}>>
                Explore Technology Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-consultation')}>>
                Schedule Technology Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Technology Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From artificial intelligence and machine learning to process automation and real-time analytics, we deliver cutting-edge technology solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySolutions.map((solution, index) => (
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

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Business with Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology solutions deliver measurable business value through innovation, efficiency, and competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technology Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Technology Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed capabilities and features of each technology solution category.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="technologies">Technologies</TabsTrigger>
              <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">{capability.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {capability.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-ml" className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Artificial Intelligence & Machine Learning Solutions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Core AI/ML Services</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <Brain className="w-5 h-5 text-blue-600 mr-3" />
                        Generative AI and Large Language Models
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Cpu className="w-5 h-5 text-purple-600 mr-3" />
                        Deep Learning and Neural Networks
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Eye className="w-5 h-5 text-green-600 mr-3" />
                        Computer Vision and Image Processing
                      </li>
                      <li className="flex items-center text-gray-700">
                        <MessageSquare className="w-5 h-5 text-orange-600 mr-3" />
                        Natural Language Processing
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Advanced Capabilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <Settings className="w-5 h-5 text-red-600 mr-3" />
                        MLOps and Model Lifecycle Management
                      </li>
                      <li className="flex items-center text-gray-700">
                        <RefreshCw className="w-5 h-5 text-indigo-600 mr-3" />
                        Continuous Learning and Adaptation
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Cloud className="w-5 h-5 text-blue-600 mr-3" />
                        Cloud-native AI/ML Deployment
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Shield className="w-5 h-5 text-green-600 mr-3" />
                        AI Ethics and Responsible AI
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Analytics & Intelligence</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Predictive Analytics</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                        Demand Forecasting and Planning
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Target className="w-5 h-5 text-purple-600 mr-3" />
                        Risk Assessment and Management
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Users className="w-5 h-5 text-green-600 mr-3" />
                        Customer Analytics and Segmentation
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Globe className="w-5 h-5 text-orange-600 mr-3" />
                        Market Intelligence and Trends
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Real-time Analytics</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <Activity className="w-5 h-5 text-red-600 mr-3" />
                        Live Data Streaming and Processing
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Gauge className="w-5 h-5 text-indigo-600 mr-3" />
                        Real-time Dashboards and Monitoring
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Zap className="w-5 h-5 text-yellow-600 mr-3" />
                        Instant Alerts and Notifications
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Database className="w-5 h-5 text-blue-600 mr-3" />
                        Big Data Processing and Analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Automation & RPA Solutions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Automation Types</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <Bot className="w-5 h-5 text-blue-600 mr-3" />
                        Robotic Process Automation (RPA)
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Settings className="w-5 h-5 text-purple-600 mr-3" />
                        Business Process Automation
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Brain className="w-5 h-5 text-green-600 mr-3" />
                        Intelligent Process Automation
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Zap className="w-5 h-5 text-orange-600 mr-3" />
                        Workflow Optimization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 text-red-600 mr-3" />
                        80% Faster Process Execution
                      </li>
                      <li className="flex items-center text-gray-700">
                        <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                        60% Reduction in Operational Costs
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Shield className="w-5 h-5 text-blue-600 mr-3" />
                        95% Error Reduction
                      </li>
                      <li className="flex items-center text-gray-700">
                        <TrendingUp className="w-5 h-5 text-purple-600 mr-3" />
                        Improved Quality and Consistency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technologies" className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack & Platforms</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-600">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-gray-900">{tech.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="success-stories" className="space-y-8">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Award className="w-6 h-6 text-yellow-600 mr-2" />
                        <Badge variant="secondary">Success Story</Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{story.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        <strong>Challenge:</strong> {story.challenge}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 mb-3">
                          <strong>Solution:</strong> {story.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Results:</p>
                        <ul className="space-y-1">
                          {story.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with Technology?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with ImpTrax to leverage cutting-edge technology solutions that drive innovation, efficiency, and growth. Our expert team is ready to help you navigate the digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg" onClick={() => handleConsultationClick('start-transformation')}>>
              Start Your Digital Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg" onClick={() => handleConsultationClick('schedule-consultation')}>>
              Schedule Technology Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpTraxTechnology;