import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, TrendingUp, Users, DollarSign, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/schedule-consultation');
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  useEffect(() => {
    // SEO meta tags
    document.title = 'Case Studies - Real-World AI Success Stories | ImpTrax';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore real-world case studies showcasing successful AI implementations, process automation, and digital transformation projects across various industries.');
    }
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare AI Diagnostic System",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes causing delays and inconsistencies in patient care",
      solution: "Implemented AI-powered diagnostic assistance system with machine learning algorithms",
      results: [
        "85% reduction in diagnostic time",
        "92% accuracy improvement",
        "$2.3M annual cost savings",
        "Enhanced patient satisfaction"
      ],
      technologies: ["Machine Learning", "Computer Vision", "Natural Language Processing"],
      duration: "8 months",
      roi: "340%",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Financial Process Automation",
      client: "Global Investment Firm",
      industry: "Financial Services",
      challenge: "Manual financial reporting and compliance processes consuming excessive resources",
      solution: "Deployed robotic process automation for financial workflows and compliance reporting",
      results: [
        "70% reduction in processing time",
        "99.8% accuracy in compliance reporting",
        "$1.8M operational cost reduction",
        "24/7 automated processing"
      ],
      technologies: ["RPA", "Business Intelligence", "Data Analytics"],
      duration: "6 months",
      roi: "280%",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Real Estate Market Intelligence",
      client: "National Property Group",
      industry: "Real Estate",
      challenge: "Lack of real-time market insights affecting investment decisions",
      solution: "Built predictive analytics platform for market trends and property valuation",
      results: [
        "45% improvement in investment accuracy",
        "Real-time market insights",
        "$5.2M increased portfolio value",
        "Competitive market advantage"
      ],
      technologies: ["Predictive Analytics", "Big Data", "Machine Learning"],
      duration: "10 months",
      roi: "420%",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Manufacturing Quality Control",
      client: "Automotive Parts Manufacturer",
      industry: "Manufacturing",
      challenge: "Quality control bottlenecks and inconsistent defect detection",
      solution: "Implemented computer vision-based quality inspection system",
      results: [
        "95% defect detection accuracy",
        "60% faster inspection process",
        "$900K annual savings",
        "Zero critical defects shipped"
      ],
      technologies: ["Computer Vision", "AI Automation", "IoT Integration"],
      duration: "5 months",
      roi: "250%",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Customer Service AI Assistant",
      client: "E-commerce Platform",
      industry: "Retail",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Developed intelligent chatbot with natural language processing capabilities",
      results: [
        "80% reduction in response time",
        "90% customer satisfaction rate",
        "$1.2M annual cost savings",
        "24/7 customer support availability"
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "API Integration"],
      duration: "4 months",
      roi: "310%",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      client: "Global Logistics Company",
      industry: "Logistics",
      challenge: "Inefficient route planning and inventory management",
      solution: "Built AI-powered supply chain optimization platform",
      results: [
        "35% reduction in delivery time",
        "25% cost savings in logistics",
        "$3.1M annual operational savings",
        "Improved customer satisfaction"
      ],
      technologies: ["Optimization Algorithms", "Predictive Analytics", "Real-time Tracking"],
      duration: "7 months",
      roi: "380%",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "350%",
      label: "Average ROI",
      description: "Across all implementations"
    },
    {
      icon: Users,
      value: "50+",
      label: "Successful Projects",
      description: "Delivered on time and budget"
    },
    {
      icon: DollarSign,
      value: "$25M+",
      label: "Client Savings",
      description: "Total cost reductions achieved"
    },
    {
      icon: Zap,
      value: "85%",
      label: "Efficiency Gain",
      description: "Average process improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-4">
            Real-World AI Success Stories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI solutions have transformed businesses across industries, 
            delivering measurable results and competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              variant="corporate" 
              size="lg" 
              className="group"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleGetStarted}
              variant="outline" 
              size="lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore detailed success stories from our AI implementations across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {study.industry}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {study.roi} ROI
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              variant="corporate" 
              size="lg" 
              className="group"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/knowledge-base')}
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;