import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

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
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-16 border-b border-primary-foreground/20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how our AI and automation solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation?source=footer&button=get-free-consultation">
                <Button variant="accent" size="xl">
                  Get Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="text-3xl font-bold mb-4">ImpTrax</div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Leading provider of AI, automation, and data analytics solutions for enterprise clients across America.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <div>1180 Avenue of the Americas</div>
                    <div>8th Floor</div>
                    <div>New York, NY 10036</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+1 212.233.0300</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">info@ImpTrax.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">www.ImpTrax.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.url} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Industries</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href={industry.url} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 ImpTrax. All rights reserved.
            </div>
            <div className="flex space-x-6">
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
                SiteMap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;