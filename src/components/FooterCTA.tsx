import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg animate-bounce-slow"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-1/4 opacity-20 animate-float">
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute bottom-32 left-1/3 opacity-20 animate-float-delayed">
          <Zap className="w-6 h-6 text-blue-300" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-20 animate-bounce-slow">
          <TrendingUp className="w-7 h-7 text-green-300" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Transform Your Business Today</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-fade-in-up animation-delay-200">
              Ready to Transform Your Business?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Let's discuss how our AI and automation solutions can drive innovation and growth for your organization.
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12 animate-fade-in-up animation-delay-600">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-white/90 font-medium">Fast Implementation</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-white/90 font-medium">Proven ROI</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-white/90 font-medium">Expert Support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
              <a href="/schedule-consultation?source=footer&button=get-free-consultation">
                <Button 
                  variant="accent" 
                  size="xl"
                  className="group bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
                >
                  <span className="flex items-center text-lg font-semibold">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="xl"
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 px-8 py-4"
              >
                <span className="flex items-center text-lg font-semibold">
                  View Case Studies
                  <TrendingUp className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;