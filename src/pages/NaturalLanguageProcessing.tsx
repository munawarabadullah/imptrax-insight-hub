import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Brain, FileText, Globe, BarChart3, Users, Mic, Tag } from 'lucide-react';

const NaturalLanguageProcessing: React.FC = () => {
  const navigate = useNavigate();

  const handleStartNLPProjectClick = () => {
    navigate('/schedule-consultation?source=nlp&button=start-nlp-project');
  };

  const handleConsultExpertsClick = () => {
    navigate('/schedule-consultation?source=nlp&button=consult-experts');
  };

  const handleGetStartedTodayClick = () => {
    navigate('/schedule-consultation?source=nlp&button=get-started-today');
  };

  const handleScheduleConsultationClick = () => {
    navigate('/schedule-consultation?source=nlp&button=schedule-consultation');
  };

  useEffect(() => {
    // SEO optimization
    document.title = "Natural Language Processing Services | ImpTrax - NLP Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform text data into actionable insights with ImpTrax NLP services. Sentiment analysis, language translation, chatbots, and text processing solutions for enterprise success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform text data into actionable insights with ImpTrax NLP services. Sentiment analysis, language translation, chatbots, and text processing solutions for enterprise success.';
      document.head.appendChild(meta);
    }
  }, []);

  const nlpServices = [
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Analyze customer emotions and opinions from text data to improve products, services, and customer satisfaction through data-driven insights."
    },
    {
      icon: FileText,
      title: "Text Summarization",
      description: "Automatically condense lengthy documents and content into concise summaries, enabling faster comprehension and efficient decision-making processes."
    },
    {
      icon: Globe,
      title: "Language Translation",
      description: "Break language barriers with accurate, AI-powered translation services that enable global reach and multilingual communication capabilities."
    },
    {
      icon: Tag,
      title: "Text Classification",
      description: "Efficiently categorize and organize large volumes of text data using advanced machine learning algorithms for improved content management."
    },
    {
      icon: Mic,
      title: "Speech Recognition",
      description: "Convert spoken language into written text with high accuracy, enabling analysis of audio content and voice-driven applications."
    },
    {
      icon: Users,
      title: "Named Entity Recognition",
      description: "Identify and classify key entities such as people, organizations, locations, and dates within text data for enhanced information extraction."
    }
  ];

  const features = [
    {
      title: "High Accuracy",
      description: "Advanced machine learning algorithms and modern NLP techniques ensure precise analysis and reliable results for your text data processing needs."
    },
    {
      title: "Customization",
      description: "Tailored NLP solutions designed to meet your specific business requirements, including custom models, languages, and specialized domain expertise."
    },
    {
      title: "Efficiency",
      description: "Streamlined processing of vast amounts of textual data with automated workflows that deliver valuable insights and improve operational efficiency."
    },
    {
      title: "Integration",
      description: "Seamless integration with existing systems, chatbots, virtual assistants, and business applications for enhanced user experiences and workflows."
    }
  ];

  const benefits = [
    {
      title: "Enhanced Decision Making",
      description: "Transform unstructured text data into actionable insights that drive informed business decisions and strategic planning."
    },
    {
      title: "Improved Customer Experience",
      description: "Better understand customer sentiment and feedback to enhance products, services, and overall customer satisfaction."
    },
    {
      title: "Operational Efficiency",
      description: "Automate text processing tasks, reduce manual effort, and accelerate information extraction from documents and communications."
    },
    {
      title: "Global Reach",
      description: "Break language barriers with translation services and multilingual support to expand your business internationally."
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through automation of text analysis, content moderation, and document processing workflows."
    },
    {
      title: "Competitive Advantage",
      description: "Leverage advanced NLP capabilities to stay ahead of competitors and unlock new business opportunities from text data."
    }
  ];

  const industries = [
    { name: "Healthcare", description: "Medical record analysis and patient feedback processing" },
    { name: "Financial Services", description: "Document analysis and compliance monitoring" },
    { name: "E-commerce", description: "Product review analysis and customer support automation" },
    { name: "Media & Publishing", description: "Content categorization and automated summarization" },
    { name: "Legal Services", description: "Contract analysis and legal document processing" },
    { name: "Education", description: "Automated grading and content analysis" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 pb-32 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Premium corporate background */}
        <div className="absolute inset-0">
          {/* Primary gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/90 to-indigo-100/80" />
          
          {/* Corporate radial highlights */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-radial from-indigo-100/35 via-purple-50/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/30 to-transparent rounded-full blur-3xl" />
          
          {/* Sophisticated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Premium floating elements */}
          <div className="absolute top-32 left-16 w-3 h-3 bg-gradient-to-r from-blue-300/60 to-indigo-300/40 rounded-full animate-float" />
          <div className="absolute top-48 right-24 w-2 h-2 bg-gradient-to-r from-indigo-300/50 to-purple-300/30 rounded-full animate-float animation-delay-1000" />
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-200/40 to-indigo-200/20 rounded-full animate-float animation-delay-2000" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-purple-300/60 to-blue-300/40 rounded-full animate-pulse-subtle animation-delay-3000" />
          
          {/* Corporate accent lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/40 to-transparent" />
        </div>
        
        <div className="relative max-w-8xl mx-auto text-center">
          {/* Corporate badge */}
          <div className="animate-fade-in-up mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-blue-100/50 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Enterprise NLP Solutions</span>
            </div>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Natural Language
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                Processing
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-700 mt-2 block">
                Excellence
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 max-w-6xl mx-auto leading-relaxed font-light">
               Transform your enterprise with ImpTrax's cutting-edge Natural Language Processing solutions.{' '}
               <span className="font-medium text-gray-700">Unlock actionable insights</span> from unstructured text data and{' '}
               <span className="font-medium text-gray-700">enable intelligent automation</span> that drives measurable business outcomes.
             </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-12 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                onClick={handleStartNLPProjectClick}
              >
                <span className="relative z-10">Start Your NLP Journey</span>
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500 relative z-10">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white/90 backdrop-blur-md hover:bg-white group"
                onClick={handleConsultExpertsClick}
              >
                <span className="group-hover:text-blue-700 transition-colors duration-300">Consult Our Experts</span>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Natural Language Processing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive NLP solutions designed to extract meaning, insights, and value from your text data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nlpServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features & Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced NLP features that deliver exceptional performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ImpTrax NLP Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with the power of natural language understanding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering specialized NLP solutions across diverse industry sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of Natural Language Processing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with ImpTrax to transform your text data into actionable insights and intelligent solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={handleGetStartedTodayClick}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={handleScheduleConsultationClick}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaturalLanguageProcessing;