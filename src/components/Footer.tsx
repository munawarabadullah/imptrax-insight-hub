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
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ImpTrax
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Leading provider of AI, automation, and data analytics solutions for enterprise clients across America.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-sm text-white/90">
                    <div className="font-medium">1180 Avenue of the Americas</div>
                    <div>8th Floor</div>
                    <div>New York, NY 10036</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">+1 212.233.0300</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">info@ImpTrax.com</span>
                </div>
                <div className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">www.ImpTrax.com</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/10 hover:bg-blue-600 rounded-lg transition-all duration-300 group">
                    <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 hover:bg-blue-400 rounded-lg transition-all duration-300 group">
                    <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 hover:bg-blue-800 rounded-lg transition-all duration-300 group">
                    <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/5">
                      <ArrowRight className="w-3 h-3 mr-3 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Industries</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a href={industry.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/5">
                      <ArrowRight className="w-3 h-3 mr-3 text-green-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{industry.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white relative">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Company</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="group flex items-center text-white/80 hover:text-white transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/5">
                      <ArrowRight className="w-3 h-3 mr-3 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/80 mb-4 md:mb-0 font-medium">
              © 2024 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">ImpTrax</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="/privacy-policy" className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
                Cookie Policy
              </a>
              <a href="/knowledge-base" className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:scale-105 px-3 py-1 rounded-lg hover:bg-white/10">
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