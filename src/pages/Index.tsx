import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckSquare, Users, Settings, Package, Palette, Code, Database, Cloud, Smartphone, Globe, Cpu } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "ImpTrax - AI, Automation & Data Solutions for Enterprise";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading provider of AI, automation, and data analytics solutions for Financial Services, Healthcare, and Real Estate industries. Transform your business with cutting-edge technology.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading provider of AI, automation, and data analytics solutions for Financial Services, Healthcare, and Real Estate industries. Transform your business with cutting-edge technology.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        
        {/* Trusted by Leading Companies Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-6">
                <span className="text-purple-600 font-semibold text-sm px-4 py-1 bg-white rounded-full shadow-sm">TRUSTED WORLDWIDE</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
                Trusted by the World's
                <br className="hidden md:block" />
                <span className="text-purple-600">Leading Companies</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Join the ranks of industry leaders who trust ImpTrax to deliver exceptional digital solutions 
                <span className="text-purple-600 font-medium">that drive growth and innovation</span> across the globe.
              </p>
            </div>
            
            {/* Enhanced Scrolling Logos */}
            <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10"></div>
              <div className="flex animate-scroll space-x-16 items-center">
                {/* First set of logos */}
                <div className="flex space-x-16 items-center min-w-max">
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkpQTW9yZ2FuIENoYXNlPC90ZXh0Pgo8L3N2Zz4K" alt="JPMorgan Chase" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhbmsgb2YgQW1lcmljYTwvdGV4dD4KPC9zdmc+Cg==" alt="Bank of America" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNpdGlncm91cDwvdGV4dD4KPC9zdmc+Cg==" alt="Citigroup" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFtZXJpY2FuIEV4cHJlc3M8L3RleHQ+Cjwvc3ZnPgo=" alt="American Express" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNpZW1lbnMgSGVhbHRoaW5lZXJzPC90ZXh0Pgo8L3N2Zz4K" alt="Siemens Healthineers" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJheWVyIEhlYWx0aGNhcmU8L3RleHQ+Cjwvc3ZnPgo=" alt="Bayer Healthcare" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvbmRhPC90ZXh0Pgo8L3N2Zz4K" alt="Honda" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRveW90YTwvdGV4dD4KPC9zdmc+Cg==" alt="Toyota" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkh5dW5kYWk8L3RleHQ+Cjwvc3ZnPgo=" alt="Hyundai" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklISCBIZWFsdGhjYXJlPC90ZXh0Pgo8L3N2Zz4K" alt="IHH Healthcare" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Duplicate set for seamless scrolling */}
                <div className="flex space-x-16 items-center min-w-max">
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkpQTW9yZ2FuIENoYXNlPC90ZXh0Pgo8L3N2Zz4K" alt="JPMorgan Chase" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhbmsgb2YgQW1lcmljYTwvdGV4dD4KPC9zdmc+Cg==" alt="Bank of America" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNpdGlncm91cDwvdGV4dD4KPC9zdmc+Cg==" alt="Citigroup" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFtZXJpY2FuIEV4cHJlc3M8L3RleHQ+Cjwvc3ZnPgo=" alt="American Express" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNpZW1lbnMgSGVhbHRoaW5lZXJzPC90ZXh0Pgo8L3N2Zz4K" alt="Siemens Healthineers" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJheWVyIEhlYWx0aGNhcmU8L3RleHQ+Cjwvc3ZnPgo=" alt="Bayer Healthcare" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvbmRhPC90ZXh0Pgo8L3N2Zz4K" alt="Honda" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRveW90YTwvdGV4dD4KPC9zdmc+Cg==" alt="Toyota" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkh5dW5kYWk8L3RleHQ+Cjwvc3ZnPgo=" alt="Hyundai" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                  <div className="group relative">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM2MzY2RjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklISCBIZWFsdGhjYXJlPC90ZXh0Pgo8L3N2Zz4K" alt="IHH Healthcare" className="h-10 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="/clients" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-blue-700">
                <span className="mr-2">View All Our Clients</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </section>
        
        {/* What Makes Us the Top Choice Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 font-medium text-sm mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Why Choose Us
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                What Makes Us the Top Choice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine deep technical expertise with proven methodologies to deliver exceptional results that drive your business forward.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Precision-Built for Product Success
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Every solution is meticulously crafted with your specific business goals in mind, ensuring maximum impact and ROI.
                  </p>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <CheckSquare className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Dedicated CoEs for Scalable Delivery
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Our Centers of Excellence ensure consistent quality and accelerated delivery through specialized expertise and proven frameworks.
                  </p>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Cross-Functional, Outcome-Focused Teams
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Diverse teams with complementary skills work collaboratively to deliver measurable business outcomes, not just technical deliverables.
                  </p>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Robust Architecture, Built to Scale
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Future-proof solutions designed with scalability, security, and performance at their core, ready to grow with your business.
                  </p>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Impeccable Quality, On-Time Delivery
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous quality assurance processes and agile methodologies ensure we deliver exceptional results within agreed timelines.
                  </p>
                </CardHeader>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    Human-Centric Design & UX Excellence
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    User experience is at the heart of everything we create, ensuring intuitive, accessible, and delightful digital experiences.
                  </p>
                </CardHeader>
              </Card>
            </div>
           </div>
         </section>
         
         {/* Technologies and Platforms We Use Section */}
         <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
           {/* Background Elements */}
           <div className="absolute inset-0">
             <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-300/5 to-blue-300/5 rounded-full blur-3xl"></div>
           </div>
           
           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-20">
               <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                 <span className="text-sm font-semibold text-purple-700">🚀 Tech Stack Excellence</span>
               </div>
               <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
                 Technologies and Platforms We Use
               </h2>
               <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                 We leverage cutting-edge technologies and industry-leading platforms to deliver robust, scalable solutions that drive business transformation and innovation.
               </p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Code className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                     Development Frameworks
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       Modern, scalable frameworks for robust application development
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['React', 'Angular', 'Vue.js', 'Node.js', '.NET Core', 'Spring Boot'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Database className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                     Database Technologies
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       High-performance databases for reliable data management
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Cloud className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                     Cloud Platforms
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       Enterprise-grade cloud infrastructure for scalable solutions
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Smartphone className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                     Mobile Development
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       Cross-platform mobile solutions for seamless user experiences
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'PWA'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Globe className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                     Integration & APIs
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       Seamless connectivity and data exchange solutions
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['REST APIs', 'GraphQL', 'Microservices', 'Kafka', 'RabbitMQ', 'Gateway'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
               
               <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <CardHeader className="pb-6 relative z-10">
                   <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                       <Cpu className="w-8 h-8 text-white" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                     AI & Machine Learning
                   </CardTitle>
                   <div className="space-y-3">
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                       Intelligent solutions powered by advanced AI and ML technologies
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Spark', 'MLflow'].map((tech, index) => (
                         <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CardHeader>
               </Card>
             </div>
           </div>
         </section>
       </main>
       <FooterCTA />
       <Footer />
    </div>
  );
};

export default Index;
