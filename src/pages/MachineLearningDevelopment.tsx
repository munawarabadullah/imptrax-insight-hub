import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Brain, BarChart3, Eye, Mic, Zap, Cloud, Cpu, RefreshCw, Database, Target, CheckCircle, Users, Building2, TrendingUp, Shield, Plus, Minus } from 'lucide-react';

const MachineLearningDevelopment: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Machine learning as a service?",
      answer: "Machine Learning as a Service (MLaaS) is a cloud-based offering that provides pre-built ML tools, algorithms, and computing infrastructure. ImpTrax offers comprehensive MLaaS solutions that allow businesses to leverage advanced ML capabilities without the need for extensive in-house expertise or infrastructure investment. Our service includes data preprocessing, model training, deployment, and ongoing maintenance."
    },
    {
      question: "What are some practical applications of machine learning?",
      answer: "Machine learning has numerous practical applications across industries: predictive analytics for forecasting sales and demand, recommendation systems for e-commerce, fraud detection in financial services, medical diagnosis and drug discovery in healthcare, autonomous vehicles, natural language processing for chatbots, computer vision for quality control in manufacturing, and personalized marketing campaigns. ImpTrax specializes in developing custom ML solutions tailored to your specific business needs."
    },
    {
      question: "What are the types of machine learning?",
      answer: "There are three main types of machine learning: 1) Supervised Learning - uses labeled data to train models for classification and regression tasks, 2) Unsupervised Learning - finds patterns in unlabeled data through clustering and dimensionality reduction, and 3) Reinforcement Learning - learns through interaction with an environment using rewards and penalties. ImpTrax has expertise in all three types and can recommend the best approach for your specific use case."
    },
    {
      question: "How can I benefit from a machine learning service?",
      answer: "Machine learning services can transform your business by automating complex decision-making processes, improving operational efficiency, reducing costs, enhancing customer experiences through personalization, providing data-driven insights for strategic planning, detecting patterns and anomalies in real-time, and scaling operations intelligently. ImpTrax's ML services are designed to deliver measurable ROI and competitive advantages tailored to your industry and business objectives."
    },
    {
      question: "Can I integrate a machine learning service with my existing applications or systems?",
      answer: "Yes, absolutely! ImpTrax specializes in seamless integration of ML solutions with existing enterprise systems. We provide APIs, SDKs, and custom integration solutions that work with your current infrastructure, databases, and applications. Our team ensures minimal disruption to your operations while maximizing the value of your existing technology investments. We support various integration methods including REST APIs, real-time streaming, batch processing, and cloud-native deployments."
    }
  ];

  useEffect(() => {
    document.title = 'Machine Learning Development Services | Custom ML Solutions | ImpTrax';
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Elevate your enterprise with ImpTrax\'s custom machine learning development services. Expert ML solutions including predictive analytics, deep learning, NLP, computer vision, and more.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const mlCapabilities = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Predictive Analysis",
      description: "Advanced forecasting models that analyze historical data to predict future trends, customer behavior, and business outcomes with high accuracy."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Deep Learning",
      description: "Neural network architectures for complex pattern recognition, image classification, and sophisticated decision-making systems."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Natural Language Processing (NLP)",
      description: "Text analysis, sentiment analysis, language translation, and conversational AI systems that understand and process human language."
    },
    {
      icon: <Eye className="w-8 h-8 text-orange-600" />,
      title: "Computer Vision",
      description: "Image and video analysis, object detection, facial recognition, and automated visual inspection systems for various industries."
    },
    {
      icon: <Mic className="w-8 h-8 text-red-600" />,
      title: "Speech Recognition",
      description: "Voice-to-text conversion, voice commands, and audio processing solutions for hands-free applications and accessibility."
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: "Generative Models",
      description: "AI systems that create new content, generate synthetic data, and produce creative outputs for various business applications."
    }
  ];

  const mlAdvantages = [
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Open Source Libraries and Frameworks",
      description: "Leverage cutting-edge open-source ML libraries like TensorFlow, PyTorch, and scikit-learn for robust and scalable solutions."
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-600" />,
      title: "Cloud-Based Solutions",
      description: "Scalable cloud infrastructure deployment on AWS, Azure, and Google Cloud for enterprise-grade ML applications."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Transformer-Based Solutions",
      description: "State-of-the-art transformer architectures for advanced NLP, language models, and attention-based learning systems."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      title: "Continual Learning",
      description: "Adaptive ML systems that continuously learn and improve from new data without forgetting previous knowledge."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Data Preparation and Exploration",
      description: "Comprehensive data analysis, cleaning, preprocessing, and feature engineering to ensure high-quality training datasets.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      step: "02",
      title: "Model Building and Training",
      description: "Custom model architecture design, algorithm selection, hyperparameter tuning, and training optimization for optimal performance.",
      icon: <Brain className="w-8 h-8 text-purple-600" />
    },
    {
      step: "03",
      title: "Model Evaluation and Validation",
      description: "Rigorous testing, cross-validation, performance metrics analysis, and bias detection to ensure model reliability.",
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      step: "04",
      title: "Deployment and Maintenance",
      description: "Production deployment, monitoring, continuous integration, and ongoing maintenance for sustained performance.",
      icon: <Cloud className="w-8 h-8 text-orange-600" />
    }
  ];

  const benefits = [
    "Accelerate decision-making with data-driven insights",
    "Automate complex processes and reduce operational costs",
    "Improve customer experience through personalization",
    "Enhance product quality and reduce defects",
    "Gain competitive advantage through innovation",
    "Scale operations efficiently with intelligent automation"
  ];

  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Healthcare",
      description: "Medical imaging, drug discovery, patient monitoring, and diagnostic assistance systems."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Finance",
      description: "Fraud detection, algorithmic trading, risk assessment, and credit scoring solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Retail & E-commerce",
      description: "Recommendation engines, demand forecasting, inventory optimization, and customer analytics."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, supply chain optimization, and process automation."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elevating Your Enterprise with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ImpTrax's Custom ML Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Transform your business with cutting-edge machine learning solutions. From predictive analytics to deep learning, 
              we deliver custom ML services that drive innovation and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Start Your ML Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/ai-consulting"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore AI Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ML Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ImpTrax's Advanced Machine Learning Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ML solutions powered by the latest algorithms and technologies to solve your most complex business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The ImpTrax ML Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our competitive edge in machine learning development comes from our expertise in cutting-edge technologies and methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mlAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{advantage.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ImpTrax Machine Learning Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful ML project delivery from conception to production deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business with Machine Learning
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our custom ML solutions deliver measurable business value through intelligent automation, 
                data-driven insights, and innovative problem-solving approaches.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="mb-6">
                Let's discuss how our machine learning expertise can transform your business operations and drive growth.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our machine learning solutions are tailored to meet the unique challenges and requirements of various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 flex justify-center">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our machine learning development services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Harness the Power of Machine Learning?
          </h2>
          <p className="text-xl mb-8">
            Partner with ImpTrax to develop custom ML solutions that drive innovation, 
            efficiency, and competitive advantage for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/knowledge-base"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default MachineLearningDevelopment;