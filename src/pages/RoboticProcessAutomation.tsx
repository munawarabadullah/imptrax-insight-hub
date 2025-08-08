import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp, Shield, Users, Clock, Plus, Minus } from 'lucide-react';
import { trackEvent } from '@/utils/tracking';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RoboticProcessAutomation = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleCTAClick = (source: string, button: string) => {
    trackEvent('cta_click', {
      source: 'robotic-process-automation',
      button: button,
      page: 'robotic-process-automation'
    });
    
    if (button === 'get-started') {
      navigate('/schedule-consultation', {
        state: {
          source: 'Robotic Process Automation',
          button: 'Tell Us About Your Project'
        }
      });
    } else {
      // Navigate to contact page with parameters
      navigate('/schedule-consultation', {
      state: {
        source: 'Robotic Process Automation',
        button: button,
        section: source
      }
    });
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Greater Productivity",
      description: "Eliminate human errors and achieve high efficiency in business operations. RPA performs tasks easily while avoiding mistakes that humans make during repetitive activities."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Greater Accuracy",
      description: "Advanced scheduling capabilities enable operations beyond traditional scope. RPA systems automatically trigger processes from emails, documents, or other signals without human intervention."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Cost Savings & Fast ROI",
      description: "Reduce operational costs by up to 30% through code-free automation environments. RPA tools provide cost-effective solutions with rapid return on investment."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Enhanced Customer Experience",
      description: "Enable agents to interact more effectively with customers while eliminating costly mistakes that lead to poor analytics and decision-making."
    }
  ];

  const capabilities = [
    {
      title: "AI-Powered RPA",
      description: "Combine artificial intelligence with RPA for advanced automation capabilities including automatic invoice processing and intelligent decision-making.",
      features: ["Machine Learning Integration", "Intelligent Document Processing", "Predictive Analytics"]
    },
    {
      title: "Scalable Solutions",
      description: "Handle high-volume business processes that adapt to uncertain times and changing environments with flexible digital workforce expansion.",
      features: ["Dynamic Scaling", "Load Balancing", "Cloud Integration"]
    },
    {
      title: "Security & Compliance",
      description: "Minimize unauthorized access risks through inherited security infrastructure with robust authorization and compliance frameworks.",
      features: ["Role-Based Access", "Audit Trails", "Compliance Reporting"]
    }
  ];

  const useCases = [
    "Invoice Processing & Accounts Payable",
    "Employee Onboarding & HR Processes",
    "Customer Service & Support Automation",
    "Data Entry & Migration",
    "Report Generation & Analytics",
    "Compliance & Regulatory Reporting"
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Process Assessment",
      description: "Analyze current workflows and identify automation opportunities"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Create customized RPA architecture aligned with business objectives"
    },
    {
      step: "3",
      title: "Bot Development",
      description: "Build and configure intelligent automation bots"
    },
    {
      step: "4",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure accuracy and reliability"
    },
    {
      step: "5",
      title: "Deployment & Support",
      description: "Launch automation with ongoing monitoring and optimization"
    }
  ];

  const faqs = [
    {
      question: "What is Robotic Process Automation (RPA)?",
      answer: "RPA is a technology that uses software robots or 'bots' to automate repetitive, rule-based tasks typically performed by humans. These bots can interact with applications, process data, and complete transactions just like human workers, but with greater speed, accuracy, and consistency."
    },
    {
      question: "How long does it take to implement RPA solutions?",
      answer: "Implementation timelines vary depending on the complexity and scope of automation. Simple processes can be automated in 2-4 weeks, while complex enterprise-wide implementations may take 3-6 months. Our team provides detailed project timelines during the initial assessment phase."
    },
    {
      question: "What types of processes are best suited for RPA?",
      answer: "RPA works best for high-volume, repetitive tasks with clear rules and structured data. Ideal processes include data entry, invoice processing, report generation, customer onboarding, and compliance reporting. Tasks that require human judgment or creativity are less suitable for basic RPA."
    },
    {
      question: "How much can we save with RPA implementation?",
      answer: "Organizations typically see cost reductions of 25-50% for automated processes, with some achieving up to 80% savings. ROI is usually realized within 6-12 months. Savings come from reduced labor costs, improved accuracy, faster processing times, and 24/7 operation capabilities."
    },
    {
      question: "Is RPA secure and compliant?",
      answer: "Yes, enterprise RPA solutions include robust security features such as encryption, access controls, audit trails, and compliance frameworks. Bots operate within existing security infrastructure and can actually improve compliance by ensuring consistent adherence to rules and maintaining detailed logs of all activities."
    },
    {
      question: "Will RPA replace human workers?",
      answer: "RPA is designed to augment human capabilities, not replace workers. While bots handle repetitive tasks, humans are freed to focus on higher-value activities like strategy, creativity, and customer relationships. Many organizations retrain employees for more strategic roles as part of their automation journey."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/30 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-500/30 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-400/30 rounded-full animate-float-delayed"></div>
          
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium backdrop-blur-sm bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Enterprise Automation Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Robotic Process
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"> Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Speed up business operations with ImpTrax's best-in-class RPA solutions. Our streamlined and personalized automation processes transform repetitive tasks into intelligent, efficient workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                onClick={() => handleCTAClick('hero', 'get-started')}
              >
                Tell Us About Your Project
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="backdrop-blur-sm bg-white/80 border-white/20 hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => handleCTAClick('hero', 'schedule-consultation')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              How RPA Can Be Advantageous to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Robotic Process Automation technology has gained significant attention in organizations, enabling robots to work on enterprise software just like humans do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center glass hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border-0 animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.3}s`}}>
                <CardHeader>
                  <div className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/30 rounded-full blur-xl animate-float delay-1000"></div>
          
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Advanced RPA Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              ImpTrax delivers end-to-end business solutions that have driven success across hundreds of enterprises globally.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="glass-dark hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 group border-0 animate-fade-in-up" style={{animationDelay: `${index * 0.15 + 0.4}s`}}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{capability.title}</CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.15 + featureIndex * 0.05 + 0.6}s`}}>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 group-hover:text-green-600 transition-colors duration-300" />
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

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common RPA Use Cases
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your business operations with intelligent automation across various departments and processes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable & Secure</h3>
                <p className="text-gray-600 mb-6">
                  Handle any workload with flexible digital workforce expansion while maintaining enterprise-grade security and compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our RPA Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful automation deployment and maximum ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let ImpTrax help you implement intelligent automation solutions that drive efficiency, reduce costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => handleCTAClick('bottom', 'schedule-consultation')}
            >
              <Clock className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button 
                size="lg" 
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                onClick={() => window.open('/contact', '_blank')}
              >
              Learn More About RPA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 animate-fade-in-up delay-200">
                Get answers to the most common questions about Robotic Process Automation
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.3}s`}}>
                  <button
                    className="w-full px-6 py-4 text-left hover:bg-white/30 transition-all duration-300 flex justify-between items-center group"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5 text-blue-600 transform transition-transform duration-300" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transform transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white/20 backdrop-blur-sm border-t border-white/30 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up delay-200">
              Start your RPA journey today and join thousands of businesses already benefiting from intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-x"
                onClick={() => handleCTAClick('final', 'get-started')}
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => handleCTAClick('final', 'contact-expert')}
              >
                <Users className="mr-2 h-5 w-5" />
                Contact Our Experts
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RoboticProcessAutomation;

// SEO Metadata
export const metadata = {
  title: "Robotic Process Automation Services | ImpTrax RPA Solutions",
  description: "Transform your business with ImpTrax's advanced RPA solutions. Automate repetitive tasks, reduce costs by 30%, and achieve 24/7 operations with our intelligent automation services.",
  brief: "Comprehensive RPA services for business process automation and digital transformation"
};