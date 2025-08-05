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
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Sophisticated background */}
        <div className="absolute inset-0">
          {/* Premium gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/60" />
          
          {/* Corporate geometric patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
          
          {/* Elegant floating elements */}
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-radial from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-purple-100/25 via-blue-50/15 to-transparent rounded-full blur-3xl animate-float animation-delay-2000" />
          
          {/* Premium accent lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent" />
        </div>
        
        <div className="relative max-w-8xl mx-auto">
          {/* Section header with corporate elegance */}
          <div className="text-center mb-20">
            {/* Corporate badge */}
            <div className="animate-fade-in-up mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-blue-100/60 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Comprehensive Solutions</span>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  Enterprise-Grade
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  NLP Services
                </span>
              </h2>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Comprehensive natural language processing solutions designed to 
                <span className="font-medium text-gray-700"> extract meaning, insights, and value</span> from your enterprise text data
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="animate-fade-in-up animation-delay-600 mt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span>Enterprise SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span>24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced services grid */}
          <div className="animate-fade-in-up animation-delay-800">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {nlpServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/60 transform hover:-translate-y-2 hover:scale-[1.02]"
                  >
                    {/* Premium card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/30 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Enhanced icon */}
                      <div className="relative mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Enhanced typography */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-900 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg font-light group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Subtle accent line */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Premium corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Corporate call-to-action */}
          <div className="animate-fade-in-up animation-delay-1000 text-center mt-20">
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 backdrop-blur-md border border-blue-200/30">
              <span className="text-lg font-medium text-gray-700 mr-4">Ready to transform your text data?</span>
              <Button 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleStartNLPProjectClick}
              >
                Explore Solutions
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Elegant section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
      </section>

      {/* Enhanced Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-cyan-100/40 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl opacity-50" />
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Premium header section */}
          <div className="text-center mb-20">
            {/* Corporate badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 backdrop-blur-md border border-blue-200/30 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Enterprise-Grade Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Key Features &{' '}
              </span>
              <span className="relative text-gray-900">
                Capabilities
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-30" />
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Advanced NLP features engineered for{' '}
              <span className="font-medium text-gray-700">exceptional performance, reliability, and scalability</span>{' '}
              in enterprise environments
            </p>
            
            {/* Performance metrics */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Sub-100ms Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Multi-Language Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span>Real-time Processing</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 hover:border-blue-200/60 transform hover:-translate-y-3 hover:scale-[1.05]"
              >
                {/* Premium card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/40 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-indigo-400/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float animation-delay-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Enhanced icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Accent ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-blue-200/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  </div>
                  
                  {/* Enhanced typography */}
                  <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-100 rounded-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full w-0" />
                  </div>
                </div>
                
                {/* Premium corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            ))}
          </div>
          
          {/* Corporate trust section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 backdrop-blur-md border border-emerald-200/30">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">Trusted by Fortune 500</span>
                </div>
                <div className="w-px h-6 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">Enterprise Security</span>
                </div>
                <div className="w-px h-6 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Elegant section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
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
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
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