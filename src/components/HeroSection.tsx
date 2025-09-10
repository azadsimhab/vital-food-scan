import { Button } from "@/components/ui/button";
import { Camera, Shield, BarChart3, Smartphone, Check, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-food-scan.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const features = [
    "Smart Food Scanning",
    "Allergen Detection", 
    "Nutrition Analysis",
    "Daily Tracking"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Star className="w-8 h-8 text-accent/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-4 h-4 text-primary/40" />
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary animate-bounce-in">
              <Sparkles className="w-4 h-4" />
              Award-Winning AI Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              Discover the
              <span className="block bg-gradient-hero bg-clip-text text-transparent"> Ancient Science</span>
              of Food Wisdom
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              EatWisely combines 5,000-year-old Ayurvedic principles with cutting-edge AI technology. 
              Simply scan food products to get personalized insights based on WHO/FAO standards and traditional wisdom.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className={`flex items-center gap-3 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-sm">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-primary hover:shadow-primary text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Camera className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Start Scanning</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/30 hover:border-primary text-lg px-8 py-6 h-auto backdrop-blur-sm bg-background/70 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Download App</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0">
            {[
              { number: "100K+", label: "Products Scanned" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "5000+", label: "Years of Wisdom" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image with Enhanced Mobile UI */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 scale-110 animate-pulse"></div>
          
          <div className="relative">
            {/* Phone mockup container */}
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-float">
                <div className="relative bg-black rounded-[2rem] overflow-hidden">
                  {/* Screen bezel */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                  
                  {/* App screen */}
                  <div className="relative aspect-[9/19.5] bg-gradient-to-br from-background to-secondary/20">
                    <img 
                      src={heroImage} 
                      alt="EatWisely app interface showing Ayurvedic food analysis with modern AI technology"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-6 left-4 right-4">
                      <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-3 shadow-lg border border-border/50 animate-bounce-in">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">Allergen Alert</div>
                            <div className="text-xs text-muted-foreground">Contains Gluten</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-4 right-4">
                      <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-border/50 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold">Ayurvedic Score</span>
                          </div>
                          <span className="text-sm font-bold text-primary">8.5/10</span>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full w-[85%] transition-all duration-1000" style={{ transitionDelay: '1s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Scanning animation overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/50 rounded-lg animate-pulse">
                        <div className="absolute inset-0 border border-primary animate-ping rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;