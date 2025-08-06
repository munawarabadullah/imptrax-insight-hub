import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
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

  // Company logos data with categories
  const companies = {
    finance: [
      { name: "JPMorgan Chase", category: "Investment Banking" },
      { name: "Bank of America", category: "Commercial Banking" },
      { name: "Wells Fargo", category: "Financial Services" },
      { name: "Citigroup", category: "Global Banking" },
      { name: "Goldman Sachs", category: "Investment Banking" },
      { name: "Morgan Stanley", category: "Investment Banking" },
      { name: "American Express", category: "Financial Services" },
      { name: "Capital One", category: "Banking" },
      { name: "Charles Schwab", category: "Investment Services" },
      { name: "Fidelity Investments", category: "Asset Management" },
      { name: "BlackRock", category: "Asset Management" },
      { name: "Vanguard", category: "Investment Management" },
      { name: "State Street", category: "Financial Services" },
      { name: "Northern Trust", category: "Wealth Management" },
      { name: "PNC Financial", category: "Banking" },
      { name: "U.S. Bancorp", category: "Banking" },
      { name: "Truist Financial", category: "Banking" },
      { name: "TD Bank", category: "Banking" }
    ],
    healthcare: [
      { name: "Siemens Healthineers", category: "Medical Technology" },
      { name: "Bayer Healthcare", category: "Pharmaceuticals" },
      { name: "Johnson & Johnson", category: "Healthcare" },
      { name: "Pfizer", category: "Pharmaceuticals" },
      { name: "Roche", category: "Pharmaceuticals" },
      { name: "Novartis", category: "Pharmaceuticals" },
      { name: "Merck & Co", category: "Pharmaceuticals" },
      { name: "AbbVie", category: "Biopharmaceuticals" },
      { name: "Bristol Myers Squibb", category: "Pharmaceuticals" },
      { name: "Eli Lilly", category: "Pharmaceuticals" },
      { name: "Amgen", category: "Biotechnology" },
      { name: "Gilead Sciences", category: "Biopharmaceuticals" },
      { name: "Biogen", category: "Biotechnology" },
      { name: "Regeneron", category: "Biotechnology" }
    ],
    asian: [
      { name: "Honda", category: "Automotive - Japan" },
      { name: "Toyota", category: "Automotive - Japan" },
      { name: "Sony", category: "Technology - Japan" },
      { name: "Samsung", category: "Technology - South Korea" },
      { name: "LG Electronics", category: "Electronics - South Korea" },
      { name: "Hyundai", category: "Automotive - South Korea" },
      { name: "Alibaba", category: "E-commerce - China" },
      { name: "Tencent", category: "Technology - China" },
      { name: "TSMC", category: "Semiconductors - Taiwan" },
      { name: "Infosys", category: "IT Services - India" },
      { name: "TCS", category: "IT Services - India" },
      { name: "Wipro", category: "IT Services - India" },
      { name: "Reliance Industries", category: "Conglomerate - India" },
      { name: "SoftBank", category: "Technology - Japan" },
      { name: "Rakuten", category: "E-commerce - Japan" },
      { name: "Baidu", category: "Technology - China" },
      { name: "JD.com", category: "E-commerce - China" },
      { name: "Xiaomi", category: "Technology - China" }
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
                Join 50+ world-class organizations who have transformed their operations with ImpTrax's AI and automation solutions
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <CardContent className="p-4 text-center">
                    <img 
                      src={generateLogoSVG(company.name)} 
                      alt={company.name} 
                      className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                  </CardContent>
                </Card>
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <CardContent className="p-4 text-center">
                    <img 
                      src={generateLogoSVG(company.name)} 
                      alt={company.name} 
                      className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Asian Markets Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Asian Market Leaders</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Major Asian corporations across automotive, technology, and manufacturing sectors rely on ImpTrax for digital transformation and operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {companies.asian.map((company, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <CardContent className="p-4 text-center">
                    <img 
                      src={generateLogoSVG(company.name)} 
                      alt={company.name} 
                      className="w-full h-16 object-contain mb-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-xs text-gray-500 font-medium">{company.category}</p>
                  </CardContent>
                </Card>
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
                <div className="text-4xl font-bold mb-2">50+</div>
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
                <div className="text-4xl font-bold mb-2">200+</div>
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
              <a 
                href="/schedule-consultation" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;