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
      description: "Ensuring data storage and processing meet evolving regulatory requirements, including GDPR, HIPAA, SOX, and industry-specific compliance standards."
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
      answer: "Data migration timelines vary significantly based on data volume, complexity, and system requirements. Simple migrations can be completed in 2-4 weeks, while complex enterprise migrations may take 3-6 months. Our team provides detailed project timelines during the initial assessment phase, considering factors such as data volume, system complexity, testing requirements, and business constraints."
    },
    {
      question: "What measures do you take to ensure data security during migration?",
      answer: "We implement multiple layers of security, including end-to-end encryption, secure transfer protocols (SFTP, HTTPS), access controls, and comprehensive audit logging. All data is encrypted both in transit and at rest. Our team follows industry best practices, including GDPR, HIPAA, and SOX compliance requirements. We also conduct security assessments and provide detailed security reports throughout the migration process."
    },
    {
      question: "Can you guarantee zero data loss during migration?",
      answer: "Yes, we guarantee zero data loss through our proven methodologies, including comprehensive data validation, checksums, backup strategies, and rollback procedures. We perform extensive pre-migration testing, implement parallel processing where possible, and conduct thorough post-migration validation to ensure 100% data integrity. Our track record shows a 99.9% success rate with zero data loss."
    },
    {
      question: "How do you minimize downtime during migration?",
      answer: "We employ various strategies to minimize downtime, including parallel migration processing, phased implementations, and real-time synchronization techniques. For critical systems, we can achieve near-zero downtime through live migration strategies, database replication, and careful timing of cutover processes. Most migrations are scheduled during off-peak hours to further reduce business impact."
    },
    {
      question: "What types of databases and systems can you migrate?",
      answer: "We support migration for all major database platforms, including Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and cloud databases (AWS RDS, Azure SQL, Google Cloud SQL). We also handle application migrations, file systems, email systems, and complete data center relocations. Our expertise covers both on-premises to cloud and cloud-to-cloud migrations."
    },
    {
      question: "Do you provide post-migration support and optimization?",
      answer: "Absolutely. We provide comprehensive post-migration support, including performance optimization, troubleshooting, user training, and ongoing maintenance. Our support packages include 24/7 monitoring, regular health checks, performance tuning, and assistance with any migration-related issues. We also offer long-term optimization services to ensure your new environment performs at peak efficiency."
    },
    {
      question: "How much does data migration cost?",
      answer: "Migration costs depend on factors such as data volume, complexity, timeline, and specific requirements. We offer transparent pricing with detailed cost breakdowns during the assessment phase. Our pricing models include fixed-price projects for standard migrations and flexible pricing for complex custom requirements. We provide cost estimates within 48 hours of initial consultation and guarantee no hidden fees."
    },
    {
      question: "What happens if something goes wrong during migration?",
      answer: "We have comprehensive contingency plans, including automated rollback procedures, real-time monitoring, and immediate response protocols. Our team maintains complete backups and can quickly restore systems to their original state if needed. We also provide 24/7 support during migration windows and have experienced engineers on standby to address any issues immediately."
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
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of existing infrastructure and migration requirements.",
      icon: Target
    },
    {
      title: "Strategy Design",
      description: "Development of detailed migration strategy and timeline with risk mitigation.",
      icon: Lightbulb
    },
    {
      title: "Environment Setup",
      description: "Preparation of target environment with security, networking, and monitoring.",
      icon: Settings
    },
    {
      title: "Data Migration",
      description: "Secure transfer of data with validation, testing, and quality assurance.",
      icon: RefreshCw
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure data integrity and system functionality.",
      icon: CheckCircle
    },
    {
      title: "Go-Live & Support",
      description: "Deployment with ongoing monitoring and support for optimal performance.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* Subtle Gradient Orbs */}
          <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] opacity-30">
            <div className="animate-float">
              <Database className="w-8 h-8 text-blue-600 drop-shadow-sm" />
            </div>
          </div>
          <div className="absolute top-32 right-[15%] opacity-25">
            <div className="animate-float animation-delay-1000">
              <Cloud className="w-6 h-6 text-purple-600 drop-shadow-sm" />
            </div>
          </div>
          <div className="absolute bottom-32 left-[20%] opacity-20">
            <div className="animate-float animation-delay-2000">
              <ArrowUpDown className="w-7 h-7 text-green-600 drop-shadow-sm" />
            </div>
          </div>
          <div className="absolute bottom-20 right-[10%] opacity-30">
            <div className="animate-float animation-delay-3000">
              <Server className="w-8 h-8 text-indigo-600 drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Modern Badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <Badge className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm">
                <Database className="w-4 h-4 mr-2" />
                Enterprise Data Migration
              </Badge>
            </div>
            
            {/* Modern Heading */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
              Seamless Data
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Migration
              </span>
            </h1>
            
            {/* Modern Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your business with enterprise-grade data migration solutions.{' '}
              <span className="font-medium text-slate-700 dark:text-slate-200">Zero downtime</span>, {' '}
              <span className="font-medium text-slate-700 dark:text-slate-200">complete security</span>, and {' '}
              <span className="font-medium text-slate-700 dark:text-slate-200">proven methodologies</span> {' '}
              ensure seamless transitions to modern platforms.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 rounded-xl"
                onClick={() => handleConsultationClick('hero-primary')}
              >
                Start Migration Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:scale-[1.02] rounded-xl"
                onClick={() => handleConsultationClick('hero-secondary')}
              >
                View Case Studies
                <FileText className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">99.9% Success Rate</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2"></div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500/20 rounded-full animate-float animation-delay-2"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyan-500/20 rounded-full animate-float animation-delay-3"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Modern Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-slate-600/50 rounded-full mb-8 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Proven Excellence</span>
            </div>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Migration Success
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                Statistics
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Our track record speaks for itself. With{' '}
              <span className="font-semibold text-blue-700 dark:text-blue-300">hundreds of successful migrations</span>, 
              we deliver results that exceed expectations.
            </p>
          </div>
          
          {/* Enhanced Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card with enhanced styling */}
                  <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 group-hover:border-blue-300/50 dark:group-hover:border-blue-500/50">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon container with enhanced styling */}
                    <div className="relative z-10 mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    
                    {/* Enhanced number display */}
                    <div className="relative z-10 text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Enhanced label */}
                    <h3 className="relative z-10 text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    {/* Enhanced description */}
                    <p className="relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                      {stat.description}
                    </p>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When is Data Migration Necessary */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-blue-200/50 dark:border-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <HelpCircle className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Migration Drivers</span>
            </Badge>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                When is Data Migration
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
                Necessary?
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Data migration becomes essential when businesses need to modernize infrastructure, improve performance, or adapt to changing technological landscapes.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md overflow-hidden relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700/30 dark:to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 rounded-lg"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start gap-4 mb-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Enhanced Title */}
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-normal">
                          {reason.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Description */}
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                      {reason.description}
                    </CardDescription>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Expert Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Strategic Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Data Migration */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-blue-200/50 dark:border-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Layers className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Migration Types</span>
            </Badge>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Comprehensive Migration
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
                Solutions
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in all types of data migration, from simple storage transfers to complex enterprise-wide transformations.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md overflow-hidden relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700/30 dark:to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 rounded-lg"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center gap-4 mb-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Enhanced Title */}
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-normal">
                        {type.title}
                      </CardTitle>
                    </div>
                    
                    {/* Enhanced Description */}
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 mb-6">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Features List */}
                    <ul className="space-y-3">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                          <div className="relative">
                            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0" />
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">All Migration Types</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Zero Downtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Challenges */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/15 to-red-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-orange-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-yellow-500/30 rounded-full animate-pulse"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-red-200/50 dark:border-red-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <AlertTriangle className="w-5 h-5 mr-3 text-red-600 dark:text-red-400" />
              <span className="text-red-700 dark:text-red-300 font-medium">Migration Challenges</span>
            </Badge>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Overcoming Migration
              </span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                Challenges
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Data migration projects face numerous challenges. Our expertise and proven methodologies ensure successful outcomes while mitigating risks.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationChallenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md overflow-hidden relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30 dark:from-slate-800 dark:via-slate-700/30 dark:to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 rounded-lg"></div>
                  
                  <CardHeader className="relative z-10 text-center pb-4">
                    {/* Enhanced Icon Container */}
                    <div className="relative mx-auto mb-6">
                      <div className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 rounded-xl group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300 group-hover:scale-110 w-fit mx-auto">
                        <IconComponent className="w-8 h-8 text-red-600 dark:text-red-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Enhanced Title */}
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 leading-normal">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center pt-0">
                    {/* Enhanced Description */}
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                      {challenge.description}
                    </CardDescription>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Risk Mitigation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">Expert Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Proven Methods</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Migration Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-blue-200/50 dark:border-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Settings className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Migration Services</span>
            </Badge>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Comprehensive Migration
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
                Solutions
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From strategy to execution, we provide end-to-end data migration services tailored to your business needs and technical requirements.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md overflow-hidden relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700/30 dark:to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 rounded-lg"></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start gap-4 mb-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Enhanced Title */}
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-normal mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Features List */}
                    <div className="bg-slate-50/50 dark:bg-slate-700/30 rounded-xl p-4 group-hover:bg-slate-100/50 dark:group-hover:bg-slate-600/30 transition-colors duration-300">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">End-to-End Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Tailored Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced Badge */}
            <Badge variant="outline" className="mb-8 px-6 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-blue-200/50 dark:border-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <RefreshCw className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Migration Process</span>
            </Badge>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Our Proven Migration
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
                Methodology
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A systematic approach ensuring successful data migration with minimal risk and maximum efficiency through proven methodologies.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md overflow-hidden relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-700/30 dark:to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-600/20 rounded-lg"></div>
                  

                  
                  <CardHeader className="relative z-10 pb-4">
                    {/* Enhanced Icon Container */}
                    <div className="relative mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110 w-fit">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                      </div>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Enhanced Title */}
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-normal mb-3">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    {/* Enhanced Description */}
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                      {process.description}
                    </CardDescription>
                    
                    {/* Process Flow Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Card>
              );
            })}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 shadow-lg">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Systematic Approach</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1"></div>
                <span className="text-sm font-medium">Risk Mitigation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-2"></div>
                <span className="text-sm font-medium">Proven Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Approaches Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_70%)] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced Glass Morphism Badge */}
            <Badge variant="outline" className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Lightbulb className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Migration Strategies</span>
            </Badge>
            
            {/* Enhanced Heading with Gradient */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Flexible Migration
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Approaches
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Choose the optimal migration strategy that aligns with your business objectives and technical requirements.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationApproaches.map((approach, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-blue-500/30 bg-background/80 backdrop-blur-md relative overflow-hidden">
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-normal">
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Flexible Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1"></div>
              <span className="font-medium">Business Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-2"></div>
              <span className="font-medium">Technical Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">Industries We Serve</span>
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Specialized Migration
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Industry-specific migration solutions designed to meet unique compliance and operational requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 bg-background/80 backdrop-blur-sm text-center relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-normal">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
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
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <Award className="w-4 h-4 mr-2 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">Migration Benefits</span>
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Transform Your
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Data Infrastructure</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
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
                    <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-normal">
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
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_70%)] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,107,0.1),transparent_70%)] animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <Award className="w-4 h-4 mr-2 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">Why Choose ImpTrax</span>
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-wide">
              Your Trusted Migration
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Partner</span>
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
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-normal">
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
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300 leading-normal">
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
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-normal">
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
                    <CardTitle className="text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300 leading-normal">
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
              Common Migration <span className="text-primary">Questions</span>
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
                      <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-left leading-normal">
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