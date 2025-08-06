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
    <footer className="relative bg-gradient-to-br from-[#0033FF] via-[#0600AE] to-[#000000] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0033FF]/20 to-[#0600AE]/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <div className="text-4xl font-bold mb-4 text-white">
                  ImpTrax
                </div>
                <p className="text-white/90 leading-relaxed text-lg max-w-sm">
                  Leading provider of AI, automation, and data analytics solutions for enterprise clients across America.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-sm text-white/90">
                    <div className="font-semibold text-white">1180 Avenue of the Americas</div>
                    <div className="text-white/80">8th Floor</div>
                    <div className="text-white/80">New York, NY 10036</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm text-white font-semibold">+1 212.233.0300</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm text-white font-semibold">info@ImpTrax.com</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-white font-semibold">www.ImpTrax.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-4 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 group hover:shadow-lg">
                    <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="p-4 bg-white/10 hover:bg-blue-400 rounded-lg transition-all duration-300 group hover:shadow-lg">
                    <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="p-4 bg-white/10 hover:bg-blue-800 rounded-lg transition-all duration-300 group hover:shadow-lg">
                    <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white relative">
                <span className="text-white">Services</span>
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-white/10 hover:shadow-lg">
                      <ArrowRight className="w-4 h-4 mr-3 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white relative">
                <span className="text-white">Industries</span>
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href={industry.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-white/10 hover:shadow-lg">
                      <ArrowRight className="w-4 h-4 mr-3 text-green-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">{industry.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white relative">
                <span className="text-white">Company</span>
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-3 px-4 rounded-lg hover:bg-white/10 hover:shadow-lg">
                      <ArrowRight className="w-4 h-4 mr-3 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white mb-4 md:mb-0 font-medium">
              © 2024 <span className="text-white font-bold">ImpTrax</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="/privacy-policy" className="text-sm text-white hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-white hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-sm text-white hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Cookie Policy
              </a>
              <a href="/knowledge-base" className="text-sm text-white hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
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