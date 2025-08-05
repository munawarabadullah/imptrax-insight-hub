import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, TrendingUp, Brain, Zap, Globe, Shield, BarChart3, Cpu, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndustryTrends = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/schedule-consultation');
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  useEffect(() => {
    // SEO meta tags
    document.title = 'AI Industry Trends & Insights 2024 | ImpTrax';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay ahead with the latest AI industry trends, emerging technologies, and market insights. Expert analysis on artificial intelligence, automation, and digital transformation.');
    }
  }, []);

  const trendCategories = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Latest developments in AI technology and applications",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automation trends transforming business operations",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence trends",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Shield,
      title: "AI Ethics & Security",
      description: "Responsible AI development and security considerations",
      color: "bg-red-500/10 text-red-600"
    }
  ];

  const featuredTrends = [
    {
      id: 1,
      title: "Generative AI Transforms Enterprise Operations",
      category: "Artificial Intelligence",
      date: "December 2024",
      readTime: "5 min read",
      excerpt: "Generative AI is revolutionizing how enterprises approach content creation, code development, and decision-making processes, with 73% of organizations planning significant investments in 2024.",
      insights: [
        "Enterprise adoption of generative AI increased by 180% in 2024",
        "Cost reduction of up to 40% in content creation workflows",
        "New job roles emerging in AI prompt engineering and oversight",
        "Integration challenges driving demand for specialized consulting"
      ],
      impact: "High",
      trend: "Rising"
    },
    {
      id: 2,
      title: "Hyperautomation Reaches Mainstream Adoption",
      category: "Process Automation",
      date: "December 2024",
      readTime: "4 min read",
      excerpt: "Organizations are moving beyond simple RPA to comprehensive hyperautomation strategies, combining AI, ML, and process mining to achieve end-to-end automation.",
      insights: [
        "85% of enterprises have hyperautomation initiatives underway",
        "Average ROI of 300% within 18 months of implementation",
        "Process mining adoption grew 150% year-over-year",
        "Integration with AI driving next-generation automation"
      ],
      impact: "High",
      trend: "Rising"
    },
    {
      id: 3,
      title: "Real-Time Analytics Becomes Business Critical",
      category: "Data Analytics",
      date: "November 2024",
      readTime: "6 min read",
      excerpt: "The shift to real-time decision making is driving massive investments in streaming analytics, edge computing, and AI-powered insights platforms.",
      insights: [
        "Real-time analytics market expected to reach $15.8B by 2025",
        "Edge computing adoption accelerating for faster processing",
        "AI-driven predictive analytics becoming standard",
        "Integration challenges creating opportunities for specialists"
      ],
      impact: "Medium",
      trend: "Rising"
    },
    {
      id: 4,
      title: "AI Governance and Ethical Frameworks Mature",
      category: "AI Ethics & Security",
      date: "November 2024",
      readTime: "7 min read",
      excerpt: "As AI becomes more pervasive, organizations are implementing comprehensive governance frameworks to ensure responsible AI development and deployment.",
      insights: [
        "90% of Fortune 500 companies establishing AI ethics committees",
        "New regulations driving compliance requirements",
        "Explainable AI becoming mandatory for critical applications",
        "Investment in AI auditing and monitoring tools increasing"
      ],
      impact: "High",
      trend: "Stable"
    },
    {
      id: 5,
      title: "Industry-Specific AI Solutions Gain Traction",
      category: "Artificial Intelligence",
      date: "October 2024",
      readTime: "5 min read",
      excerpt: "Vertical AI solutions tailored for specific industries are showing higher adoption rates and better ROI compared to generic AI platforms.",
      insights: [
        "Healthcare AI market growing at 45% CAGR",
        "Financial services leading in AI investment per employee",
        "Manufacturing AI adoption focused on quality control",
        "Retail AI driving personalization and inventory optimization"
      ],
      impact: "Medium",
      trend: "Rising"
    },
    {
      id: 6,
      title: "Low-Code/No-Code AI Platforms Democratize Development",
      category: "Process Automation",
      date: "October 2024",
      readTime: "4 min read",
      excerpt: "The rise of low-code and no-code AI platforms is enabling business users to create AI solutions without extensive technical expertise.",
      insights: [
        "Low-code AI platform market growing 25% annually",
        "Citizen developers creating 60% of new AI applications",
        "Reduced development time by up to 70%",
        "Governance challenges emerging with democratized development"
      ],
      impact: "Medium",
      trend: "Rising"
    }
  ];

  const marketStats = [
    {
      icon: Globe,
      value: "$1.8T",
      label: "Global AI Market",
      description: "Expected by 2030",
      growth: "+42% CAGR"
    },
    {
      icon: Cpu,
      value: "75%",
      label: "Enterprise Adoption",
      description: "Using AI in some capacity",
      growth: "+28% YoY"
    },
    {
      icon: Database,
      value: "$13.2B",
      label: "Automation Market",
      description: "Process automation spending",
      growth: "+31% CAGR"
    },
    {
      icon: TrendingUp,
      value: "320%",
      label: "Average ROI",
      description: "From AI implementations",
      growth: "Industry average"
    }
  ];

  const getTrendBadgeColor = (trend: string) => {
    switch (trend) {
      case 'Rising': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'Stable': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'Declining': return 'bg-red-500/10 text-red-600 border-red-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  const getImpactBadgeColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'Low': return 'bg-green-500/10 text-green-600 border-green-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

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
            AI Industry Trends & Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert analysis on emerging AI technologies, 
            market trends, and industry transformations shaping the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              variant="corporate" 
              size="lg" 
              className="group"
            >
              Get Expert Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/ai-consulting-services')}
              variant="outline" 
              size="lg"
            >
              Explore Knowledge Base
            </Button>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Market Overview
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key statistics driving the AI and automation industry forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.description}</div>
                  <Badge variant="outline" className="text-xs">{stat.growth}</Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trend Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trending Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the key areas driving innovation and transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${category.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Trends */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Industry Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth analysis of the most significant trends shaping the AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTrends.map((trend) => (
              <Card key={trend.id} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {trend.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Badge className={getTrendBadgeColor(trend.trend)}>
                        {trend.trend}
                      </Badge>
                      <Badge className={getImpactBadgeColor(trend.impact)}>
                        {trend.impact} Impact
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {trend.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {trend.date}
                    </div>
                    <div>{trend.readTime}</div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {trend.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Insights</h4>
                    <ul className="space-y-2">
                      {trend.insights.map((insight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Ahead of Industry Trends
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized insights and strategic guidance to leverage the latest AI trends for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              variant="corporate" 
              size="lg" 
              className="group"
            >
              Schedule Strategy Session
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => navigate('/case-studies')}
              variant="outline" 
              size="lg"
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryTrends;