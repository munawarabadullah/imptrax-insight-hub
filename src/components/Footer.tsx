import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "AI Development Services", url: "/ai-development-services" },
    { name: "Machine Learning", url: "/machine-learning-development" },
    { name: "Process Automation", url: "/process-automation" },
    { name: "Data Analytics", url: "/data-analytics" },
    { name: "Business Intelligence", url: "/business-intelligence" },
    { name: "Predictive Analytics", url: "/predictive-analytics" }
  ];

  const industries = [
    { name: "Banking Solutions", url: "/banking-solutions" },
    { name: "Healthcare", url: "/revenue-cycle-management" },
    { name: "Real Estate", url: "/real-estate-software" },
    { name: "Investment Management", url: "/investment-management" },
    { name: "Risk Assessment", url: "/risk-assessment" },
    { name: "Compliance Management", url: "/compliance-management" }
  ];

  const companyLinks = [
    { name: "Knowledge Base", url: "/knowledge-base" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "Industry Trends", url: "/industry-trends" },
    { name: "AI Consulting", url: "/ai-consulting" },
    { name: "Schedule Consultation", url: "/schedule-consultation" },
    { name: "Contact", url: "/schedule-consultation" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Corporate gradient layers */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        
        {/* Elegant floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info - Enhanced Corporate Section */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <h2 className="text-5xl font-bold mb-2 text-primary-foreground tracking-tight">
                    ImpTrax
                  </h2>
                  <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-lg max-w-sm font-light">
                  Leading provider of AI, automation, and data analytics solutions for enterprise clients across America.
                </p>
              </div>
              
              {/* Executive Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-6 text-primary-foreground">Corporate Headquarters</h4>
                
                <div className="group">
                  <div className="flex items-start space-x-5 p-5 rounded-xl glass hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-elegant">
                    <div className="p-3 bg-primary-foreground/15 rounded-lg group-hover:bg-primary-foreground/25 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-sm text-primary-foreground/90 space-y-1">
                      <div className="font-semibold text-primary-foreground text-base">1180 Avenue of the Americas</div>
                      <div className="text-primary-foreground/80">8th Floor</div>
                      <div className="text-primary-foreground/80">New York, NY 10036</div>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center space-x-5 p-5 rounded-xl glass hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-elegant">
                    <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-all duration-300">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-base text-primary-foreground font-semibold">+1 212.233.0300</span>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center space-x-5 p-5 rounded-xl glass hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-elegant">
                    <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-all duration-300">
                      <Mail className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span className="text-base text-primary-foreground font-semibold">info@ImpTrax.com</span>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center space-x-5 p-5 rounded-xl glass hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-elegant">
                    <div className="p-3 bg-primary-foreground/15 rounded-lg group-hover:bg-primary-foreground/25 transition-all duration-300">
                      <Globe className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-base text-primary-foreground font-semibold">www.ImpTrax.com</span>
                  </div>
                </div>
              </div>
              
              {/* Professional Social Media */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold mb-6 text-primary-foreground">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-4 glass hover:bg-primary-foreground/20 rounded-xl transition-all duration-300 group hover:shadow-elegant transform hover:-translate-y-1">
                    <Linkedin className="w-7 h-7 text-primary-foreground group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  </a>
                  <a href="#" className="p-4 glass hover:bg-primary-foreground/20 rounded-xl transition-all duration-300 group hover:shadow-elegant transform hover:-translate-y-1">
                    <Twitter className="w-7 h-7 text-primary-foreground group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  </a>
                  <a href="#" className="p-4 glass hover:bg-primary-foreground/20 rounded-xl transition-all duration-300 group hover:shadow-elegant transform hover:-translate-y-1">
                    <Facebook className="w-7 h-7 text-primary-foreground group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services - Enhanced Corporate Styling */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
                  Services
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.url} className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 text-sm py-4 px-5 rounded-xl glass hover:bg-primary-foreground/10 hover:shadow-elegant transform hover:translate-x-2">
                      <ArrowRight className="w-4 h-4 mr-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <span className="font-medium text-base group-hover:font-semibold transition-all duration-300">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries - Enhanced Corporate Styling */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
                  Industries
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href={industry.url} className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 text-sm py-4 px-5 rounded-xl glass hover:bg-primary-foreground/10 hover:shadow-elegant transform hover:translate-x-2">
                      <ArrowRight className="w-4 h-4 mr-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <span className="font-medium text-base group-hover:font-semibold transition-all duration-300">{industry.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - Enhanced Corporate Styling */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2 text-primary-foreground">
                  Company
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-foreground to-primary-foreground/50 rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              </div>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 text-sm py-4 px-5 rounded-xl glass hover:bg-primary-foreground/10 hover:shadow-elegant transform hover:translate-x-2">
                      <ArrowRight className="w-4 h-4 mr-4 text-primary-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <span className="font-medium text-base group-hover:font-semibold transition-all duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"></div>

        {/* Premium Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-primary-foreground/90 font-medium">
              © 2024 <span className="text-primary-foreground font-bold text-base">ImpTrax Corporation</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-8">
              <a href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg glass hover:bg-primary-foreground/10 font-medium">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg glass hover:bg-primary-foreground/10 font-medium">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg glass hover:bg-primary-foreground/10 font-medium">
                Cookie Policy
              </a>
              <a href="/knowledge-base" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg glass hover:bg-primary-foreground/10 font-medium">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;