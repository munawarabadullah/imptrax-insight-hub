import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Building, Award, Users, Globe, ChevronRight } from "lucide-react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState("munawar-abadullah");

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Our Team - Leadership & Expertise | ImpTrax";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the ImpTrax team of experts in AI, automation, and digital transformation. Our leadership brings decades of experience across technology, healthcare, and finance.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet the ImpTrax team of experts in AI, automation, and digital transformation. Our leadership brings decades of experience across technology, healthcare, and finance.';
      document.head.appendChild(meta);
    }
  }, []);

  const teamMembers = {
    "munawar-abadullah": {
      name: "Munawar Abadullah",
      title: "Chief Executive Officer",
      subtitle: "GLOBAL BUSINESS DEVELOPMENT",
      image: "/resources/Munawar-Abadullah.jpg",
      description: "Munawar Abadullah leads the Global Business Development Division. He is overseeing various corporate functions as well as having P&L responsibility for international businesses. He brings considerable depth and a range of experience from his roles in technology-driven ventures. He has held previous positions as Executive Vice President of Technology.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Chief Executive Officer",
          period: "Present",
          description: "Leading strategic direction and growth of AI and automation solutions"
        },
        {
          company: "JPMorgan Chase",
          role: "Senior Executive",
          period: "Previous",
          description: "Financial services technology and risk management"
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
        }
      ],
      education: [
        "Columbia Business School",
        "Stanford University",
        "Stanford Business School",
        "Harvard Business School"
      ],
      globalExperience: [
        "United States", "UAE", "Qatar", "Singapore", 
        "Malaysia", "United Kingdom", "Estonia", "Canada"
      ],
      specialties: [
        "Global Leadership",
        "Pre-revenue to Market Leadership",
        "Venture Capital Raising ($100M+)",
        "Building Global Sales Teams",
        "Overseas Subsidiaries & Joint Ventures",
        "Mergers & Acquisitions",
        "Strategic Partnerships",
        "Sales & Business Development"
      ]
    },
    "mubasher-abadullah": {
      name: "Mubasher Abadullah",
      title: "Executive Vice President",
      subtitle: "GLOBAL BUSINESS DEVELOPMENT",
      image: "/placeholder.svg",
      description: "Mubasher Abadullah leads the Global Business Development Division. He is overseeing various corporate functions as well as having P&L responsibility for international businesses. He brings considerable depth and a range of experience from his roles in technology-driven ventures.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Executive Vice President",
          period: "Present",
          description: "Global Business Development and Technology Leadership"
        }
      ],
      education: [
        "London Metropolitan University, UK",
        "Harvard Business School of Executive Leadership"
      ],
      globalExperience: [
        "United Kingdom", "United States", "UAE", "Singapore"
      ],
      specialties: [
        "Technology Leadership",
        "Business Development",
        "International Markets",
        "Strategic Planning"
      ]
    },
    "kristina-palvin": {
      name: "Kristina Palvin",
      title: "Marketing Director",
      subtitle: "MARKETING & COMMUNICATIONS",
      image: "/placeholder.svg",
      description: "Kristina Palvin leads our marketing and communications efforts, developing strategies to showcase ImpTrax's innovative solutions to global markets. With her expertise in digital marketing and brand management, she ensures ImpTrax's message reaches the right audiences across multiple channels and markets.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Marketing Director",
          period: "Present",
          description: "Leading comprehensive marketing strategies and brand communications for AI and automation solutions across global markets."
        }
      ],
      education: [
        "University of California, Berkeley - Master of Marketing",
        "Google Digital Marketing Certification",
        "HubSpot Content Marketing Certification"
      ],
      globalExperience: [
        "United States", "United Kingdom", "Germany", "Singapore", "Australia"
      ],
      specialties: [
        "Digital Marketing Strategy",
        "Brand Management",
        "Content Marketing",
        "Market Research & Analytics",
        "B2B Lead Generation",
        "Social Media Marketing",
        "Campaign Management",
        "Marketing Automation"
      ]
    },
    "maria-svirin": {
      name: "Maria Svirin",
      title: "Operations Director",
      subtitle: "OPERATIONS & STRATEGY",
      image: "/placeholder.svg",
      description: "Maria Svirin oversees operational excellence and strategic initiatives at ImpTrax, ensuring efficient delivery of our AI and automation solutions to clients worldwide.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Operations Director",
          period: "Present",
          description: "Operations management and strategic planning"
        }
      ],
      education: [
        "Business Administration",
        "Operations Management Certification"
      ],
      globalExperience: [
        "United States", "Canada", "European Markets"
      ],
      specialties: [
        "Operations Management",
        "Strategic Planning",
        "Process Optimization",
        "Team Leadership"
      ]
    },
    "aleksander-rozov": {
      name: "Aleksander Rozov",
      title: "Senior Technology Advisor",
      subtitle: "TECHNOLOGY & INNOVATION",
      image: "/placeholder.svg",
      description: "Aleksander Rozov brings extensive experience in technology innovation and strategic advisory roles, helping guide ImpTrax's technological direction and innovation initiatives.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Senior Technology Advisor",
          period: "Present",
          description: "Technology strategy and innovation leadership"
        }
      ],
      education: [
        "Technical University",
        "Advanced Technology Certification"
      ],
      globalExperience: [
        "Estonia", "United States", "European Union"
      ],
      specialties: [
        "Technology Innovation",
        "Strategic Advisory",
        "System Architecture",
        "Digital Transformation"
      ]
    },
    "michael-robinson": {
      name: "Michael Robinson",
      title: "Technology Lead",
      subtitle: "SOFTWARE DEVELOPMENT",
      image: "/placeholder.svg",
      description: "Michael Robinson leads our software development initiatives, focusing on cutting-edge AI and machine learning solutions that drive innovation for our clients.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Technology Lead",
          period: "Present",
          description: "Leading software development initiatives and AI implementation projects for enterprise clients."
        }
      ],
      education: [
        "Stanford University - Master of Computer Science",
        "Specialized in Artificial Intelligence and Machine Learning"
      ],
      globalExperience: ["United States", "Canada", "United Kingdom"],
      specialties: ["Full-Stack Development", "AI/ML Solutions", "Cloud Architecture", "Team Leadership"]
    },

    "kevin-lee": {
      name: "Kevin Lee",
      title: "Business Analyst",
      subtitle: "BUSINESS INTELLIGENCE",
      image: "/placeholder.svg",
      description: "Kevin Lee specializes in business intelligence and analytics, helping clients transform data into actionable insights for strategic decision-making.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Business Analyst",
          period: "Present",
          description: "Analyzing business requirements and developing data-driven solutions for enterprise clients."
        }
      ],
      education: [
        "University of Chicago - Master of Business Administration",
        "Specialized in Business Analytics and Strategic Management"
      ],
      globalExperience: ["United States", "Canada", "Australia"],
      specialties: ["Business Intelligence", "Data Analytics", "Strategic Analysis", "Process Improvement"]
    },
    "jessica-allen": {
      name: "Jessica Allen",
      title: "Project Manager",
      subtitle: "PROJECT MANAGEMENT",
      image: "/placeholder.svg",
      description: "Jessica Allen manages complex AI and automation projects, ensuring timely delivery and client satisfaction across our global portfolio.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Project Manager",
          period: "Present",
          description: "Managing complex AI and automation projects, ensuring timely delivery and client satisfaction."
        }
      ],
      education: [
        "Northwestern University - Master of Project Management",
        "Focus on Agile Methodologies and Digital Transformation"
      ],
      globalExperience: ["United States", "United Kingdom", "Netherlands"],
      specialties: ["Project Management", "Client Relations", "Team Coordination", "Delivery Excellence"]
    },
    "steven-miller": {
      name: "Steven Miller",
      title: "Client Relations",
      subtitle: "CLIENT RELATIONS & BUSINESS DEVELOPMENT",
      image: "/placeholder.svg",
      description: "Steven Miller leads our client relations and business development initiatives, serving as the primary liaison between ImpTrax and our valued clients. With his unique combination of technical expertise and exceptional interpersonal skills, Steven ensures seamless communication and builds lasting partnerships that drive mutual success. His deep understanding of both technology and business needs allows him to translate complex AI and automation solutions into clear value propositions for clients across various industries. Steven's commitment to client satisfaction and his ability to identify growth opportunities have been instrumental in expanding ImpTrax's client portfolio and maintaining long-term strategic relationships.",
      experiences: [
        {
          company: "ImpTrax",
          role: "Client Relations Manager",
          period: "Present",
          description: "Leading client relationship management and business development initiatives, ensuring exceptional client satisfaction and identifying new growth opportunities across healthcare and finance sectors."
        }
      ],
      education: [
        "MIT - Bachelor of Computer Science",
        "Harvard Business School - Certificate in Business Development",
        "Specialized training in Client Relationship Management and Strategic Communications"
      ],
      globalExperience: ["United States", "Germany", "Singapore", "United Kingdom", "Canada"],
      specialties: ["Client Relationship Management", "Business Development", "Strategic Communications", "Technical Consulting", "Account Management", "Partnership Development", "Cross-Cultural Communication", "Solution Architecture"]
    }
  };

  const currentMember = teamMembers[selectedMember];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm px-4 py-1 bg-white rounded-full shadow-sm">OUR TEAM</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                Meet Our <span className="text-blue-600">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Our diverse team of technology leaders, business experts, and innovation specialists 
                drive ImpTrax's mission to transform businesses through AI and automation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar - Team Members List */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership</h2>
                    <div className="space-y-2">
                      {Object.entries(teamMembers).map(([key, member]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedMember(key)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                            selectedMember === key
                              ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-900'
                              : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-sm">{member.name}</h3>
                              <p className="text-xs opacity-75 mt-1">{member.title}</p>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${
                              selectedMember === key ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1'
                            }`} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content - Selected Member Details */}
                <div className="lg:col-span-3">
                  {currentMember && (
                    <div className="space-y-8">
                      {/* Member Profile Header */}
                      <div className={`${selectedMember === 'munawar-abadullah' ? 'grid lg:grid-cols-2 gap-8 items-center' : 'block'}`}>
                        <div>
                          <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentMember.name}</h1>
                          <h2 className="text-xl font-semibold text-blue-600 mb-2">{currentMember.title}</h2>
                          <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">{currentMember.subtitle}</p>
                          <p className="text-gray-600 leading-relaxed">{currentMember.description}</p>
                        </div>
                        
                        {selectedMember === 'munawar-abadullah' && (
                          <div className="relative">
                            <div className="w-full max-w-sm mx-auto">
                              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 shadow-xl">
                                <div className="w-full h-80 rounded-xl overflow-hidden">
                                  <img 
                                    src={currentMember.image} 
                                    alt={`${currentMember.name} - ${currentMember.title}`} 
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full"></div>
                                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-500 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Professional Experience */}
                      {currentMember.experiences && currentMember.experiences.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {currentMember.experiences.map((exp, index) => (
                              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-3 mb-4">
                                    <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <h4 className="font-bold text-gray-900 mb-1">{exp.company}</h4>
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
                      )}

                      {/* Education */}
                      {currentMember.education && currentMember.education.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {currentMember.education.map((school, index) => (
                              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                                <CardContent className="p-6 text-center">
                                  <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                  <h4 className="font-bold text-gray-900">{school}</h4>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Global Experience */}
                      {currentMember.globalExperience && currentMember.globalExperience.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Experience</h3>
                          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <Globe className="w-6 h-6 text-blue-600" />
                                <h4 className="text-lg font-bold text-gray-900">International Markets</h4>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {currentMember.globalExperience.map((country, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                    <span className="text-gray-700 font-medium text-sm">{country}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}

                      {/* Specialties */}
                      {currentMember.specialties && currentMember.specialties.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Specialties</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {currentMember.specialties.map((specialty, index) => (
                              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                  <span className="font-semibold text-gray-900">{specialty}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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

export default Team;