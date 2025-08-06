import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Users, Zap, Brain, Target, Globe, Building, Award, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const OurHistory = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Our History - Technology Innovation & Business Success | ImpTrax";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover ImpTrax\'s journey since 2003 in delivering AI-powered solutions, data-driven systems, and technology innovations that drive business success and top-line revenue growth for global clients.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover ImpTrax\'s journey since 2003 in delivering AI-powered solutions, data-driven systems, and technology innovations that drive business success and top-line revenue growth for global clients.';
      document.head.appendChild(meta);
    }
  }, []);

  const milestones = [
    {
      year: "2003",
      title: "Foundation in Innovation",
      description: "ImpTrax was born in the heart of New York City with a vision to revolutionize business through cutting-edge technology and AI-driven solutions.",
      icon: <Rocket className="w-6 h-6 text-blue-600" />
    },
    {
      year: "2005-2010",
      title: "Data-Driven Excellence",
      description: "Pioneered data analytics and business intelligence solutions, helping clients unlock actionable insights for strategic decision-making.",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />
    },
    {
      year: "2011-2015",
      title: "AI & Automation Era",
      description: "Embraced artificial intelligence and automation technologies, delivering intelligent systems that streamline operations and boost productivity.",
      icon: <Brain className="w-6 h-6 text-cyan-600" />
    },
    {
      year: "2016-2020",
      title: "Global Technology Partner",
      description: "Expanded globally, becoming a trusted technology partner for enterprises seeking digital transformation and competitive advantage.",
      icon: <Globe className="w-6 h-6 text-green-600" />
    },
    {
      year: "2021-Present",
      title: "Revenue-Driven Innovation",
      description: "Focus on delivering technology solutions that directly impact top-line revenue growth and create measurable business value for clients.",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />
    }
  ];

  const coreValues = [
    {
      title: "Technology Excellence",
      description: "Leveraging cutting-edge AI, machine learning, and data analytics to solve complex business challenges",
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Business Synergies",
      description: "Creating powerful synergies between technology innovation and business strategy for maximum impact",
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Client Partnership",
      description: "Acting as true partners in our clients' success, focusing on revenue growth and competitive advantage",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Creative Value",
      description: "Delivering innovative solutions that create unique value propositions and drive business transformation",
      icon: <Lightbulb className="w-8 h-8 text-green-600" />
    }
  ];

  const achievements = [
    "21+ Years of Technology Innovation",
    "Global 24/7 Support Network",
    "AI-Powered Business Solutions",
    "Data-Driven Decision Systems",
    "Revenue Growth Partnerships",
    "Digital Transformation Leadership"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm px-4 py-1 bg-white rounded-full shadow-sm">OUR JOURNEY</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                Pioneering <span className="text-blue-600">Technology</span> for Business Success
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Since 2003, ImpTrax has been at the forefront of technology innovation, delivering AI-powered solutions 
                and data-driven systems that create synergies, drive revenue growth, and transform businesses globally.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">21+ Years Innovation</span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">AI-Driven Solutions</span>
                <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">Revenue Growth Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Technology <span className="text-blue-600">Evolution</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A journey of continuous innovation, from data analytics pioneers to AI-powered business transformation leaders
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 hidden lg:block"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                      <div className="lg:w-1/2 w-full">
                        <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                {milestone.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm font-medium text-blue-600">{milestone.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="hidden lg:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                      
                      <div className="lg:w-1/2 w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Technology <span className="text-blue-600">Philosophy</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Driven by innovation, focused on results, committed to creating technology solutions that deliver measurable business value
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Building className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                To be the premier technology partner that transforms businesses through AI-driven innovation, 
                data-powered insights, and strategic solutions that create synergies between technology and business objectives. 
                We are committed to delivering creative value that drives top-line revenue growth and sustainable competitive advantage for our clients.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">24/7 Global Support</h3>
                <p className="text-lg opacity-90">
                  Like the city that never sleeps, our dedicated teams are available around the clock to ensure 
                  your technology solutions deliver continuous value and support your business success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Technology <span className="text-blue-600">Achievements</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Milestones that define our commitment to technology excellence and business success
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                    <CardContent className="p-6 text-center">
                      <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900">{achievement}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      As we continue our journey, we remain focused on pushing the boundaries of what's possible with technology. 
                      Our commitment to innovation, client partnership, and revenue-driven solutions positions us to lead 
                      the next wave of digital transformation and business success.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurHistory;