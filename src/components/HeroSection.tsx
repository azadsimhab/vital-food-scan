import { Button } from "@/components/ui/button";
import { Camera, Shield, BarChart3, Smartphone, Check } from "lucide-react";
import heroImage from "@/assets/hero-food-scan.jpg";

const HeroSection = () => {
  const features = [
    "Smart Food Scanning",
    "Allergen Detection",
    "Nutrition Analysis",
    "Daily Tracking"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Scan, Learn,
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Eat Wisely</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Transform your relationship with food. Scan any product to instantly discover allergens, 
              nutrition facts, and personalized health insights powered by AI.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center gap-2 text-sm font-medium animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              <Camera className="w-5 h-5" />
              Start Scanning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              <Smartphone className="w-5 h-5" />
              Download App
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Products Scanned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Allergens Detected</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-float animate-pulse-glow">
            <img 
              src={heroImage} 
              alt="Food scanning app demonstration showing a smartphone scanning a food package with nutritional data overlay"
              className="w-full h-auto object-cover"
            />
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 animate-bounce-in">
              <Shield className="w-6 h-6 text-destructive" />
              <div className="text-xs font-medium mt-1">Allergen Alert</div>
            </div>
            <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <BarChart3 className="w-6 h-6 text-primary" />
              <div className="text-xs font-medium mt-1">Nutrition Facts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;