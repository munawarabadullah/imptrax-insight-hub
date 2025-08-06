import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Building, Award, Users, Globe } from "lucide-react";

const Leadership = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Leadership - Meet Our CEO Munawar Abadullah | ImpTrax";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Munawar Abadullah, CEO of ImpTrax with 20+ years of Executive Management & Information Technology Experience. Global leader in AI, automation, and digital transformation.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet Munawar Abadullah, CEO of ImpTrax with 20+ years of Executive Management & Information Technology Experience. Global leader in AI, automation, and digital transformation.';
      document.head.appendChild(meta);
    }
  }, []);

  const experiences = [
    {
      company: "ImpTrax",
      role: "Chief Executive Officer",
      period: "Present",
      description: "Leading strategic direction and growth of AI and automation solutions"
    },
    {
      company: "RTech Healthcare Revenue, Inc.",
      role: "Chief Information Officer",
      period: "Until 2016",
      description: "Led technology initiatives before company acquisition by Transunion"
    },
    {
      company: "Siemens Healthcare",
      role: "Senior Executive",
      period: "Previous",
      description: "Healthcare technology leadership and innovation"
    },
    {
      company: "Bayer Healthcare",
      role: "Senior Executive",
      period: "Previous",
      description: "Pharmaceutical technology and digital transformation"
    },
    {
      company: "JPMorgan Chase",
      role: "Senior Executive",
      period: "Previous",
      description: "Financial services technology and risk management"
    }
  ];

  const education = [
    "Columbia Business School",
    "Stanford University",
    "Stanford Business School",
    "Lahore University of Management Services"
  ];

  const globalExperience = [
    "United States", "UAE", "Qatar", "Singapore", 
    "Malaysia", "United Kingdom", "Estonia", "Canada"
  ];

  const specialties = [
    "Global Leadership",
    "Pre-revenue to Market Leadership",
    "Venture Capital Raising ($100M+)",
    "Building Global Sales Teams",
    "Overseas Subsidiaries & Joint Ventures",
    "Mergers & Acquisitions",
    "Strategic Partnerships",
    "Sales & Business Development"
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
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div>
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                    <span className="text-blue-600 font-semibold text-sm px-4 py-1 bg-white rounded-full shadow-sm">LEADERSHIP</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                    Meet Our <span className="text-blue-600">CEO</span>
                  </h1>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Munawar Abadullah</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Visionary leader with 25+ years of executive management and information technology experience, 
                    driving strategic direction and growth at ImpTrax.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Global Leader</span>
                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Technology Visionary</span>
                    <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">Strategic Growth</span>
                  </div>
                </div>
                
                {/* Right Column - Profile Image Placeholder */}
                <div className="relative">
                  <div className="w-full max-w-md mx-auto">
                    <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                      <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <Users className="w-16 h-16 text-blue-600" />
                          </div>
                          <p className="text-gray-600 font-medium">Munawar Abadullah</p>
                          <p className="text-gray-500 text-sm">Chief Executive Officer</p>
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background & Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Professional <span className="text-blue-600">Journey</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Over two and a half decades of senior and executive management positions across healthcare, finance, and technology sectors
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{exp.company}</h3>
                          <p className="text-blue-600 font-medium text-sm">{exp.role}</p>
                          <p className="text-gray-500 text-xs">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Educational <span className="text-blue-600">Excellence</span>
                </h2>
                <p className="text-xl text-gray-600">
                  World-class education from prestigious institutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((school, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                    <CardContent className="p-6 text-center">
                      <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 text-lg">{school}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Special Recognition</h3>
                    <p className="text-gray-600">
                      Entrepreneur in Residence at IBA, one of the most prestigious universities in South Asia
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Global <span className="text-blue-600">Footprint</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Extensive international experience across multiple continents and markets
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">International Markets</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {globalExperience.map((country, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 font-medium">{country}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Core Specialties</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Proven expertise in driving organizational growth and digital transformation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialties.map((specialty, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                      <h3 className="font-semibold text-lg">{specialty}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Leadership Philosophy</h3>
                  <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
                    "I believe in the power of technology to transform businesses 
                    and drive sustainable growth. My focus is on building world-class teams, establishing strategic partnerships, 
                    and leveraging cutting-edge AI and automation solutions to create lasting value for our clients."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;