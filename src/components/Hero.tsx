import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleConsultNowClick = () => {
    navigate('/schedule-consultation?source=home&button=consult-now');
  };

  const handleStartTransformationClick = () => {
    navigate('/schedule-consultation?source=home&button=start-transformation');
  };

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-float-delayed"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">Transform Your Business with</span>
                <span className="bg-gradient-light bg-clip-text text-transparent animate-gradient-x"> AI & Automation</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                ImpTrax delivers cutting-edge AI solutions, intelligent automation, and data analytics to drive innovation across Financial Services, Healthcare, and Real Estate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-200">
              <Button 
                variant="accent" 
                size="xl" 
                className="group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                onClick={handleStartTransformationClick}
              >
                <span className="text-sm sm:text-base">Start Your Digital Transformation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={handleConsultNowClick}
              >
                <span className="text-sm sm:text-base">Consult Now!</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-primary-foreground/20 animate-fade-in-up delay-400">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent">23+</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Years of Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent">500+</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Projects Delivered</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent">98%</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Client Satisfaction</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-accent">24/7</div>
                <div className="text-xs sm:text-sm text-primary-foreground/80 leading-tight">Support</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0 animate-fade-in-up delay-400">
            <div className="relative bg-card/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-muted rounded-full animate-pulse delay-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 sm:h-4 bg-gradient-primary rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-3 sm:h-4 bg-secondary rounded-full w-1/2 animate-pulse delay-200"></div>
                  <div className="h-3 sm:h-4 bg-muted rounded-full w-2/3 animate-pulse delay-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <div className="bg-secondary/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-secondary/60 transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-medium text-card-foreground">AI Analytics</div>
                    <div className="text-xl sm:text-2xl font-bold text-primary">+156%</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-accent/20 transition-colors duration-300">
                    <div className="text-xs sm:text-sm font-medium text-card-foreground">Automation</div>
                    <div className="text-xl sm:text-2xl font-bold text-accent">87%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/30 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;