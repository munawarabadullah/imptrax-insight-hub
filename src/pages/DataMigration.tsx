import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Settings,
  Globe,
  Award,
  Building2,
  Heart,
  Home,
  TrendingUp,
  Lightbulb,
  Users,
  Lock,
  RefreshCw,
  ArrowUpDown,
  Server,
  HardDrive,
  AlertTriangle,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Factory,
  ShoppingCart,
  Briefcase,
  Monitor,
  Layers,
  BarChart3,
  Workflow,
  ChevronDown,
  ChevronUp,
  Calendar,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DataMigration = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Expert Data Migration Services | ImpTrax - Seamless Data Transfer Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with expert data migration services from ImpTrax. Seamlessly transfer your data with zero downtime, complete security, and full integrity preservation. Get started today.');
    }
  }, []);

  const handleConsultationClick = (source: string) => {
    navigate(`/schedule-consultation?source=data-migration&button=${source}`);
  };

  // Key Statistics
  const statistics = [
    {
      icon: CheckCircle,
      number: "99.9%",
      label: "Data Integrity Preserved",
      description: "Complete accuracy maintained throughout migration"
    },
    {
      icon: Clock,
      number: "Zero",
      label: "Downtime Migration",
      description: "Business continuity with parallel migration strategies"
    },
    {
      icon: TrendingUp,
      number: "50%",
      label: "Faster Implementation",
      description: "Accelerated migration with proven methodologies"
    },
    {
      icon: DollarSign,
      number: "40%",
      label: "Cost Reduction",
      description: "Optimized processes reduce migration expenses"
    }
  ];

  // When is Data Migration Necessary
  const migrationReasons = [
    {
      icon: Cloud,
      title: "Cloud Adoption",
      description: "Moving IT operations to cloud platforms for enhanced flexibility, scalability, and reduced hardware costs. By 2025, 85% of businesses will prioritize cloud adoption for competitive advantage."
    },
    {
      icon: Server,
      title: "Server Modernization",
      description: "Upgrading to new server infrastructure to improve performance, security, and reliability while reducing maintenance overhead and operational costs."
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description: "Transforming outdated systems to modern platforms that support current business needs, improve efficiency, and enable future growth opportunities."
    },
    {
      icon: Layers,
      title: "System Consolidation",
      description: "Merging multiple systems into unified platforms to reduce complexity, improve data consistency, and streamline operations across the organization."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensuring data storage and processing meet evolving regulatory requirements including GDPR, HIPAA, SOX, and industry-specific compliance standards."
    },
    {
      icon: TrendingUp,
      title: "Business Scaling",
      description: "Supporting rapid business growth with scalable infrastructure that can handle increased data volumes, user loads, and transaction processing requirements."
    }
  ];

  // Types of Data Migration
  const migrationTypes = [
    {
      icon: HardDrive,
      title: "Storage Migration",
      description: "Transfer data between different storage systems, from legacy storage arrays to modern cloud storage solutions, ensuring optimal performance and cost efficiency.",
      features: ["SAN to Cloud Migration", "NAS Modernization", "Tape to Disk Migration", "Storage Tiering"]
    },
    {
      icon: Database,
      title: "Database Migration",
      description: "Comprehensive database platform migrations including schema conversion, data transformation, and performance optimization for modern database systems.",
      features: ["Oracle to PostgreSQL", "SQL Server to Cloud", "MySQL Optimization", "NoSQL Migration"]
    },
    {
      icon: Monitor,
      title: "Application Migration",
      description: "Seamless migration of applications and their associated data to new platforms while maintaining functionality and improving performance.",
      features: ["Legacy App Modernization", "Platform Migration", "API Integration", "User Data Transfer"]
    },
    {
      icon: Building2,
      title: "Data Center Migration",
      description: "Complete data center relocations and consolidations with minimal downtime, ensuring business continuity throughout the transition process.",
      features: ["Physical Relocation", "Virtual Migration", "Hybrid Transitions", "Disaster Recovery"]
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Strategic migration to cloud platforms including AWS, Azure, and Google Cloud, optimizing for scalability, security, and cost-effectiveness.",
      features: ["Multi-Cloud Strategy", "Hybrid Cloud Setup", "Cloud Optimization", "Security Configuration"]
    },
    {
      icon: Workflow,
      title: "Business Process Migration",
      description: "Migration of business processes and workflows to new systems while maintaining operational efficiency and improving automation capabilities.",
      features: ["Workflow Automation", "Process Optimization", "Integration Setup", "User Training"]
    }
  ];

  // Migration Challenges
  const migrationChallenges = [
    {
      icon: AlertTriangle,
      title: "Security Vulnerabilities",
      description: "Protecting sensitive data during transfer with advanced encryption, secure channels, and comprehensive access controls to prevent data breaches and unauthorized access."
    },
    {
      icon: Database,
      title: "Data Structure Issues",
      description: "Resolving incompatibilities between source and target systems through careful schema mapping, data transformation, and structural optimization."
    },
    {
      icon: Shield,
      title: "Data Corruption Risks",
      description: "Preventing data corruption through rigorous validation processes, checksums, and comprehensive backup strategies throughout the migration process."
    },
    {
      icon: CheckCircle,
      title: "Data Integrity Concerns",
      description: "Maintaining data accuracy and consistency across systems through automated validation, reconciliation processes, and comprehensive testing protocols."
    },
    {
      icon: DollarSign,
      title: "Budget Overruns",
      description: "Controlling migration costs through detailed planning, accurate estimation, and efficient project management to stay within budget constraints."
    },
    {
      icon: Settings,
      title: "Integration Challenges",
      description: "Ensuring seamless integration with existing systems through API development, middleware configuration, and comprehensive compatibility testing."
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "How long does a typical data migration project take?",
      answer: "Data migration timelines vary significantly based on data volume, complexity, and system requirements. Simple migrations can be completed in 2-4 weeks, while complex enterprise migrations may take 3-6 months. Our team provides detailed project timelines during the initial assessment phase, considering factors like data volume, system complexity, testing requirements, and business constraints."
    },
    {
      question: "What measures do you take to ensure data security during migration?",
      answer: "We implement multiple layers of security including end-to-end encryption, secure transfer protocols (SFTP, HTTPS), access controls, and comprehensive audit logging. All data is encrypted both in transit and at rest. Our team follows industry best practices including GDPR, HIPAA, and SOX compliance requirements. We also conduct security assessments and provide detailed security reports throughout the migration process."
    },
    {
      question: "Can you guarantee zero data loss during migration?",
      answer: "Yes, we guarantee zero data loss through our proven methodologies including comprehensive data validation, checksums, backup strategies, and rollback procedures. We perform extensive pre-migration testing, implement parallel processing where possible, and conduct thorough post-migration validation to ensure 100% data integrity. Our track record shows 99.9% success rate with zero data loss."
    },
    {
      question: "How do you minimize downtime during migration?",
      answer: "We employ various strategies to minimize downtime including parallel migration processing, phased implementations, and real-time synchronization techniques. For critical systems, we can achieve near-zero downtime through live migration strategies, database replication, and careful timing of cutover processes. Most migrations are scheduled during off-peak hours to further reduce business impact."
    },
    {
      question: "What types of databases and systems can you migrate?",
      answer: "We support migration for all major database platforms including Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and cloud databases (AWS RDS, Azure SQL, Google Cloud SQL). We also handle application migrations, file systems, email systems, and complete data center relocations. Our expertise covers both on-premises to cloud and cloud-to-cloud migrations."
    },
    {
      question: "Do you provide post-migration support and optimization?",
      answer: "Absolutely. We provide comprehensive post-migration support including performance optimization, troubleshooting, user training, and ongoing maintenance. Our support packages include 24/7 monitoring, regular health checks, performance tuning, and assistance with any migration-related issues. We also offer long-term optimization services to ensure your new environment performs at peak efficiency."
    },
    {
      question: "How much does data migration cost?",
      answer: "Migration costs depend on factors like data volume, complexity, timeline, and specific requirements. We offer transparent pricing with detailed cost breakdowns during the assessment phase. Our pricing models include fixed-price projects for standard migrations and flexible pricing for complex custom requirements. We provide cost estimates within 48 hours of initial consultation and guarantee no hidden fees."
    },
    {
      question: "What happens if something goes wrong during migration?",
      answer: "We have comprehensive contingency plans including automated rollback procedures, real-time monitoring, and immediate response protocols. Our team maintains complete backups and can quickly restore systems to their original state if needed. We also provide 24/7 support during migration windows and have experienced engineers on standby to address any issues immediately."
    }
  ];

  const challenges = [
    {
      icon: Target,
      title: "Legacy System Modernization",
      description: "Transform outdated infrastructure and applications to modern, cloud-native environments that support current business needs and future growth opportunities while maintaining operational continuity."
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Ensure complete data protection throughout the migration process with enterprise-grade security measures, regulatory compliance, and comprehensive audit trails for sensitive information."
    },
    {
      icon: Zap,
      title: "Business Continuity",
      description: "Maintain uninterrupted business operations during migration through strategic planning, parallel processing, and phased implementation approaches that minimize disruption."
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration Strategy",
      description: "Develop comprehensive strategies for migrating your data infrastructure to cloud-native environments.",
      features: ["Cloud Platform Assessment", "Migration Roadmap", "Cost Optimization", "Security Planning"]
    },
    {
      icon: Database,
      title: "Database Migration",
      description: "Seamlessly migrate databases across platforms while maintaining performance and data integrity.",
      features: ["Schema Conversion", "Data Validation", "Performance Optimization", "Rollback Planning"]
    },
    {
      icon: ArrowUpDown,
      title: "Application Data Migration",
      description: "Migrate application data and configurations to new systems with zero business disruption.",
      features: ["Application Assessment", "Data Mapping", "Testing Protocols", "Go-Live Support"]
    },
    {
      icon: Server,
      title: "Infrastructure Migration",
      description: "Modernize your IT infrastructure with strategic migration to scalable, efficient platforms.",
      features: ["Infrastructure Assessment", "Capacity Planning", "Network Configuration", "Monitoring Setup"]
    }
  ];

  const migrationApproaches = [
    {
      title: "Lift and Shift",
      description: "Quick migration with minimal changes to existing applications and data structures."
    },
    {
      title: "Re-platform",
      description: "Optimize applications for cloud environments while maintaining core functionality."
    },
    {
      title: "Re-architect",
      description: "Complete transformation to leverage cloud-native features and modern architectures."
    },
    {
      title: "Hybrid Migration",
      description: "Strategic combination of on-premises and cloud solutions for optimal performance."
    },
    {
      title: "Phased Migration",
      description: "Gradual migration approach to minimize risk and ensure business continuity."
    },
    {
      title: "Big Bang Migration",
      description: "Complete migration in a single phase for maximum efficiency and minimal complexity."
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Secure, compliant data migration for banking, insurance, and investment platforms."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant migration of patient data and medical systems with zero downtime."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property data migration and MLS integration for enhanced market intelligence."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Performance",
      description: "Improve system performance and scalability with modern data infrastructure."
    },
    {
      icon: Shield,
      title: "Improved Security",
      description: "Strengthen data security with advanced encryption and access controls."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Enable worldwide access to your data with cloud-based solutions."
    },
    {
      icon: Settings,
      title: "Operational Efficiency",
      description: "Streamline operations and reduce maintenance costs with automated systems."
    }
  ];

  const migrationProcess = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of existing infrastructure and migration requirements.",
      icon: Target
    },
    {
      step: "02",
      title: "Strategy Design",
      description: "Development of detailed migration strategy and timeline with risk mitigation.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Environment Setup",
      description: "Preparation of target environment with security, networking, and monitoring.",
      icon: Settings
    },
    {
      step: "04",
      title: "Data Migration",
      description: "Secure transfer of data with validation, testing, and quality assurance.",
      icon: RefreshCw
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure data integrity and system functionality.",
      icon: CheckCircle
    },
    {
      step: "06",
      title: "Go-Live & Support",
      description: "Deployment with ongoing monitoring and support for optimal performance.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
          
          {/* Subtle Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-ping delay-1500"></div>
        </div>
        
        {/* Enhanced Floating Data Migration Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float group cursor-pointer">
            <Database className="w-8 h-8 text-primary/30 hover:text-primary/50 hover:scale-110 transition-all duration-300" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed group cursor-pointer">
            <Cloud className="w-6 h-6 text-accent/30 hover:text-accent/50 hover:scale-110 hover:rotate-12 transition-all duration-300" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float group cursor-pointer">
            <ArrowUpDown className="w-7 h-7 text-primary/20 hover:text-primary/40 hover:scale-110 transition-all duration-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed group cursor-pointer">
            <Server className="w-8 h-8 text-accent/25 hover:text-accent/45 hover:scale-110 hover:rotate-6 transition-all duration-300" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Badge with Subtle Glow */}
            <div className="inline-flex items-center justify-center mb-8">
              <Badge variant="outline" className="mb-0 px-6 py-3 text-sm font-medium bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in">
                <Database className="w-4 h-4 mr-2 text-primary" />
                Data Migration Solutions
              </Badge>
            </div>
            
            {/* Enhanced Heading with Gradient Text and Subtle Effects */}
            <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up tracking-wide leading-tight">
              Seamless Data<br/>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-sm animate-pulse-subtle">
                Migration Services
              </span>
            </h1>
            
            {/* Enhanced Description with Better Typography */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-loose animate-fade-in-up delay-150 tracking-wide">
              Transform your business with seamless data migration to modern platforms. Zero downtime, complete security, and proven methodologies ensure your critical data transitions smoothly to cloud-native environments.
            </p>
            
            {/* Enhanced CTA Buttons with Improved Styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                onClick={() => handleConsultationClick('hero-primary')}
              >
                Start Your Migration
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 group"
                onClick={() => handleConsultationClick('hero-secondary')}
              >
                Learn More
                <Lightbulb className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <BarChart3 className="w-4 h-4 mr-2 text-primary" />
              Proven Excellence
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Migration Success
              <span className="block text-primary">Statistics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. With hundreds of successful migrations, we deliver results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* When is Data Migration Necessary */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <HelpCircle className="w-4 h-4 mr-2 text-primary" />
              Migration Drivers
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              When is Data Migration
              <span className="block text-primary">Necessary?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data migration becomes essential when businesses need to modernize infrastructure, improve performance, or adapt to changing technological landscapes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {reason.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Data Migration */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Layers className="w-4 h-4 mr-2 text-primary" />
              Migration Types
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Comprehensive Migration
              <span className="block text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in all types of data migration, from simple storage transfers to complex enterprise-wide transformations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {type.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Challenges */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <AlertTriangle className="w-4 h-4 mr-2 text-primary" />
              Migration Challenges
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Overcoming Migration
              <span className="block text-primary">Challenges</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data migration projects face numerous challenges. Our expertise and proven methodologies ensure successful outcomes while mitigating risks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationChallenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/30 bg-background/50 backdrop-blur-sm border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {challenge.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/2 via-transparent to-accent/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Target className="w-4 h-4 mr-2 text-primary" />
              Migration Challenges
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Overcome Data Migration
              <span className="block text-primary">Complexities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navigate the complexities of data migration with our proven methodologies and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)] animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Settings className="w-4 h-4 mr-2 text-primary" />
              Migration Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Comprehensive Migration
              <span className="block text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From strategy to execution, we provide end-to-end data migration services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm overflow-hidden relative">
                  {/* Card Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <RefreshCw className="w-4 h-4 mr-2 text-primary" />
              Migration Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Our Proven Migration
              <span className="block text-primary">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A systematic approach ensuring successful data migration with minimal risk and maximum efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/50 backdrop-blur-sm relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-bold text-sm">{process.step}</span>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {process.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Approaches Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Lightbulb className="w-4 h-4 mr-2 text-primary" />
              Migration Strategies
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Flexible Migration
              <span className="block text-primary">Approaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the optimal migration strategy that aligns with your business objectives and technical requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationApproaches.map((approach, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              Industries We Serve
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Specialized Migration
              <span className="block text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Industry-specific migration solutions designed to meet unique compliance and operational requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/50 backdrop-blur-sm text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Award className="w-4 h-4 mr-2 text-primary" />
              Migration Benefits
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Transform Your
              <span className="block text-primary">Data Infrastructure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock the full potential of modern data infrastructure with our comprehensive migration services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm text-center relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose ImpTrax Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_70%)] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,107,0.1),transparent_70%)] animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <Award className="w-4 h-4 mr-2 text-primary" />
              Why Choose ImpTrax
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Your Trusted Migration
              <span className="block text-primary">Partner</span>
            </h2>
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partner with ImpTrax for seamless data migration that transforms your business infrastructure.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      Expert Team
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Certified migration specialists with extensive experience across multiple platforms and industries.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      Proven Methodology
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Time-tested migration processes that ensure data integrity and minimize business disruption.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      Scalable Solutions
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Future-ready migration solutions that scale with your business growth and evolving needs.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      Ongoing Support
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Comprehensive post-migration support and monitoring to ensure optimal performance and security.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
              onClick={() => handleConsultationClick('why-choose-cta')}
            >
              Start Your Migration Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20">
              <HelpCircle className="w-4 h-4 mr-2 text-primary" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Common Migration
              <span className="block text-primary">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our data migration services and processes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer p-6 hover:bg-primary/5 transition-colors duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-left">
                        {faq.question}
                      </CardTitle>
                      <div className="flex-shrink-0 ml-4">
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent className="px-6 pb-6 pt-0 animate-in slide-in-from-top-2 duration-300">
                      <div className="border-t border-border/30 pt-4">
                        <CardDescription className="text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </CardDescription>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Contact CTA within FAQ */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our migration experts are ready to discuss your specific requirements and provide personalized solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                      onClick={() => handleConsultationClick('faq-consultation')}
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="px-6 py-3 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('tel:+1-555-0123', '_self')}
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-wide">
            Ready to Migrate Your Data?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            Transform your data infrastructure with our expert migration services. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-medium bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => handleConsultationClick('cta-primary')}
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-medium border-2 border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/10 text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => handleConsultationClick('cta-secondary')}
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

export default DataMigration;