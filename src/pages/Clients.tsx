import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Our Clients - ImpTrax | Trusted by Leading Global Companies";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the leading global companies that trust ImpTrax for their AI, automation, and digital transformation needs across finance, healthcare, and technology sectors.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover the leading global companies that trust ImpTrax for their AI, automation, and digital transformation needs across finance, healthcare, and technology sectors.';
      document.head.appendChild(meta);
    }
  }, []);

  // Company logos data with categories and website URLs
  const companies = {
    finance: [
      { name: "JPMorgan Chase", category: "Investment Banking", website: "https://www.jpmorganchase.com" },
      { name: "Bank of America", category: "Commercial Banking", website: "https://www.bankofamerica.com" },
      { name: "Citigroup", category: "Global Banking", website: "https://www.citigroup.com" },
      { name: "American Express", category: "Financial Services", website: "https://www.americanexpress.com" }
    ],
    healthcare: [
      { name: "Siemens Healthineers", category: "Medical Technology", website: "https://www.siemens-healthineers.com/en" },
      { name: "Bayer Healthcare", category: "Pharmaceuticals", website: "https://www.bayer.com/en" }
    ],
    asian: [
      { name: "Honda", category: "Automotive - Malaysia", website: "https://www.honda.com.my/en" },
      { name: "Toyota", category: "Automotive - Japan", website: "https://global.toyota/en" },
      { name: "Hyundai", category: "Automotive - South Korea", website: "https://www.hyundai.com/worldwide/en" },
      { name: "IHH Healthcare", category: "Healthcare Services - Malaysia", website: "https://www.ihhhealthcare.com" }
    ]
  };

  const generateLogoSVG = (companyName: string) => {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="80" y="35" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#6366F1" text-anchor="middle">${companyName}</text>
      </svg>
    `)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-purple-600">Global Leaders</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join world-class organizations who have transformed their operations with ImpTrax's AI and automation solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Fortune 500 Companies</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Global Financial Institutions</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Healthcare Leaders</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Technology Innovators</span>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Services & Banking</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leading financial institutions trust ImpTrax for risk management, fraud detection, algorithmic trading, and customer experience optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {companies.finance.map((company, index) => (
                <a 
                  key={index} 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <img 
                        src={generateLogoSVG(company.name)} 
                        alt={company.name} 
                        className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare & Life Sciences</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Healthcare leaders leverage our AI solutions for drug discovery, patient care optimization, medical imaging analysis, and clinical decision support.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {companies.healthcare.map((company, index) => (
                <a 
                  key={index} 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <img 
                        src={generateLogoSVG(company.name)} 
                        alt={company.name} 
                        className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Asian Markets Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">International Market Leaders</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Major international corporations across automotive, technology, and manufacturing sectors rely on ImpTrax for digital transformation and operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {companies.asian.map((company, index) => (
                <a 
                  key={index} 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <img 
                        src={generateLogoSVG(company.name)} 
                        alt={company.name} 
                        className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact Across Industries</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Delivering measurable results and driving digital transformation for organizations worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5B+</div>
                <div className="text-lg opacity-90">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Successful Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how ImpTrax can transform your organization with cutting-edge AI and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/schedule-consultation')}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => navigate('/case-studies')}
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Review Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;