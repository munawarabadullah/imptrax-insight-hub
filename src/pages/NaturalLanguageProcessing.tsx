import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageSquare, Brain, FileText, Globe, BarChart3, Users, Mic, Tag } from 'lucide-react';

const NaturalLanguageProcessing: React.FC = () => {
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Natural Language Processing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Unlock the power of human language with ImpTrax's advanced NLP solutions. Transform unstructured text data into valuable insights and enable intelligent communication between humans and machines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Your NLP Project
            </Button>
            <Button size="lg" variant="outline">
              Consult Our Experts
            </Button>
          </div>
        </div>
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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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