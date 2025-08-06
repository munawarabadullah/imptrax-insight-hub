import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <img 
                  src="/ImpTrax-Footer-Logo.png" 
                  alt="ImpTrax" 
                  className="h-8 w-auto mb-2"
                />
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                  Leading provider of AI, automation, and data analytics solutions for enterprise clients across America.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <div>1180 Avenue of the Americas, 8th Floor</div>
                    <div>New York, NY 10036</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-foreground/60" />
                  <span className="text-sm text-primary-foreground/80">+1 212.233.0300</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-foreground/60" />
                  <span className="text-sm text-primary-foreground/80">info@ImpTrax.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-primary-foreground/60" />
                  <span className="text-sm text-primary-foreground/80">www.ImpTrax.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <div className="flex space-x-3">
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground">
                Services
              </h3>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.url} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground">
                Industries
              </h3>
              <ul className="space-y-1">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href={industry.url} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-foreground">
                Company
              </h3>
              <ul className="space-y-1">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 ImpTrax Corporation. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
              <a href="/knowledge-base" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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