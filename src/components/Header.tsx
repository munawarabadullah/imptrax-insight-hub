import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Search, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before hiding
  };

  const menuItems = [
    {
      title: "Consulting",
      items: [
        {
          category: "AI Solutions",
          services: [
            { name: "AI & Automation", url: "/ai-development-services" },
            { name: "Predictive Analytics", url: "/predictive-analytics" },
            { name: "Natural Language Processing", url: "/natural-language-processing" },
            { name: "Machine Learning Development", url: "/machine-learning-development" }
          ]
        },
        {
          category: "Automation",
          services: [
            { name: "Process Automation", url: "/process-automation" },
            { name: "Robotic Process Automation", url: "/robotic-process-automation" },
            { name: "Workflow Optimization", url: "/workflow-optimization" },
            { name: "Business Intelligence", url: "/business-intelligence" }
          ]
        },
        {
          category: "Data Services",
          services: [
            { name: "Real-time Analytics", url: "/real-time-analytics" },
            { name: "Data Analytics", url: "/data-analytics" },
            { name: "Data Migration", url: "/data-migration" },
            { name: "Data Warehousing", url: "/data-warehouse-services" }
          ]
        }
      ]
    },
    {
      title: "Industries",
      items: [
        {
          category: "Financial Services",
          services: [
            { name: "Banking Solutions", url: "/banking-solutions" },
            { name: "Investment Management", url: "/investment-management" },
            { name: "Risk Assessment", url: "/risk-assessment" },
            { name: "Compliance Management", url: "/compliance-management" }
          ]
        },
        {
          category: "Healthcare",
          services: [
            { name: "Revenue Cycle Management", url: "/revenue-cycle-management" },
            { name: "Healthcare Automation", url: "/healthcare-automation" },
            { name: "AI Driven Transformation", url: "/ai-driven-transformation" },
            { name: "HIPAA Compliance", url: "/hipaa-compliant" }
          ]
        },
        {
          category: "Real Estate",
          services: [
            { name: "Market Intelligence", url: "/real-estate-market-analysis" },
            { name: "Real Estate Software", url: "/real-estate-software" },
            { name: "Property Analytics", url: "/real-estate-software#analytics" },
            { name: "Investment Analysis", url: "/real-estate-investment-analysis" }
          ]
        }
      ]
    },
    {
      title: "Resources",
      items: [
        {
          category: "Information Center",
          services: [
            { name: "Knowledge Base", url: "/knowledge-base" },
            { name: "Case Studies", url: "/case-studies" }
          ]
        },
        {
          category: "AI Pulse",
          services: [
            { name: "AI Prompt Library", url: "/ai-pluse/ai-prompts-library" }
          ]
        },
        {
          category: "News & Media",
          services: [
            { name: "Industry Trends", url: "/industry-trends" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-card">
      {/* Top Utility Bar */}
      <div className="bg-gray-50 border-b border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 212.233.0300</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧 info@ImpTrax.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search services..."
                  className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all duration-200"
                />
              </div>
              <a href="/schedule-consultation" className="text-primary hover:text-primary/80 font-medium">
                Free Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">ImpTrax</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeDropdown === item.title && (
                  <div className={`absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-2xl overflow-hidden ${item.title === 'Resources' ? 'w-[630px]' : 'w-[800px]'}`}>
                    {/* Gradient Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-100">
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.title === 'Resources' ? 'Explore our knowledge center and insights' : 
                         item.title === 'Consulting' ? 'Comprehensive AI and automation solutions' :
                         'Industry-specific expertise and solutions'}
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <div className={`grid ${item.title === 'Resources' ? 'grid-cols-3 gap-6' : item.title === 'Industries' ? 'grid-cols-3 gap-6' : 'grid-cols-3 gap-8'}`}>
                        {item.items.map((category, categoryIndex) => (
                          <div key={category.category} className={`relative ${item.title === 'Resources' && categoryIndex > 0 ? 'border-l border-gray-200 pl-6' : ''} ${item.title === 'Industries' && categoryIndex > 0 ? 'border-l border-gray-200 pl-6' : ''} ${item.title !== 'Resources' && item.title !== 'Industries' && categoryIndex > 0 ? 'border-l border-gray-200 pl-8' : ''}`}>
                            <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-lg p-4 mb-4 border border-blue-100/30">
                              <h3 className="font-semibold text-blue-900 mb-1 text-sm uppercase tracking-wide">
                                {category.category}
                              </h3>
                              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </div>
                            <ul className="space-y-3">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <a
                                    href={service.url}
                                    className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm py-2 px-3 rounded-lg hover:bg-blue-50/50 hover:shadow-sm"
                                  >
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom CTA for Resources */}
                      {item.title === 'Resources' && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center">
                            <p className="text-white text-sm font-medium mb-2">Need Expert Guidance?</p>
                            <a href="/schedule-consultation" className="inline-flex items-center text-white/90 hover:text-white text-xs font-medium transition-colors">
                              Schedule a Free Consultation →
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="/schedule-consultation" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a href="/schedule-consultation?source=header&button=schedule-consultation">
              <Button variant="corporate" size="lg">
                Schedule Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            {/* Mobile Quick Access */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+1 212.233.0300</span>
                </div>
                <a href="/schedule-consultation" className="text-primary font-medium">
                  Free Consultation
                </a>
              </div>
            </div>
            
            <div className="py-4 space-y-4">
              <a href="/" className="block px-4 py-2 hover:text-primary font-medium">🏠 Home</a>
              
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className="flex items-center justify-between w-full px-4 py-2 text-left font-medium"
                  >
                    <span>
                      {item.title === 'Consulting' && '🤖 '}
                      {item.title === 'Industries' && '🏢 '}
                      {item.title === 'Resources' && '📚 '}
                      {item.title}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.title && (
                    <div className="px-4 pb-4 bg-gray-50/50">
                      {item.items.map((category) => (
                        <div key={category.category} className="mb-4">
                          <h4 className="font-medium text-primary mb-2 text-sm uppercase tracking-wide">{category.category}</h4>
                          <ul className="space-y-2 ml-4">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <a href={service.url} className="text-sm text-muted-foreground hover:text-primary block py-1 transition-colors">
                                  • {service.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4">
                <a href="/schedule-consultation" className="block px-4 py-2 hover:text-primary font-medium">📞 Contact</a>
                <div className="px-4 pt-4">
                  <a href="/schedule-consultation?source=header-mobile&button=schedule-consultation">
                    <Button variant="corporate" className="w-full">
                      🚀 Schedule Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;