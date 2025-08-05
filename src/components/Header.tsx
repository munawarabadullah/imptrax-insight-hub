import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

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
      title: "Services",
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
            { name: "Data Analytics", url: "/data-analytics" },
            { name: "Data Migration", url: "#" },
            { name: "Data Warehousing", url: "#" },
            { name: "Real Estate Software", url: "/real-estate-software" },
            { name: "Real-time Analytics", url: "#" }
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
            { name: "Banking Solutions", url: "#" },
            { name: "Investment Management", url: "#" },
            { name: "Risk Assessment", url: "#" },
            { name: "Compliance Automation", url: "#" }
          ]
        },
        {
          category: "Healthcare",
          services: [
            { name: "Medical Data Analytics", url: "#" },
            { name: "Patient Management", url: "#" },
            { name: "Diagnostic AI", url: "#" },
            { name: "Healthcare Automation", url: "#" },
            { name: "HIPAA Compliance", url: "/hipaa-compliant" }
          ]
        },
        {
          category: "Real Estate",
          services: [
            { name: "Property Analytics", url: "#" },
            { name: "Market Intelligence", url: "#" },
            { name: "Portfolio Management", url: "#" },
            { name: "Investment Analysis", url: "#" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-card">
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
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-elegant p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {item.items.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-semibold text-primary mb-4">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <a
                                  href={service.url}
                                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                  {service.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
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
            <div className="py-4 space-y-4">
              <a href="/" className="block px-4 py-2 hover:text-primary">Home</a>
              
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className="flex items-center justify-between w-full px-4 py-2 text-left"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.title && (
                    <div className="px-4 pb-4">
                      {item.items.map((category) => (
                        <div key={category.category} className="mb-4">
                          <h4 className="font-medium text-primary mb-2">{category.category}</h4>
                          <ul className="space-y-1 ml-4">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <a href={service.url} className="text-sm text-muted-foreground hover:text-primary">
                                  {service.name}
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
              <a href="#" className="block px-4 py-2 hover:text-primary">About</a>
              <a href="/schedule-consultation" className="block px-4 py-2 hover:text-primary">Contact</a>
              <div className="px-4 pt-4">
                <a href="/schedule-consultation?source=header-mobile&button=schedule-consultation">
                  <Button variant="corporate" className="w-full">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;