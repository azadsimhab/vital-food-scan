import { Camera, Shield, BarChart3, GitCompare, Smartphone, TrendingUp, Leaf, Heart, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import allergenImage from "@/assets/allergen-icons.jpg";
import nutritionImage from "@/assets/nutrition-dashboard.jpg";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const FeaturesSection = () => {
  const { elementRef: ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const features = [
    {
      icon: Camera,
      title: "AI-Powered Scanning",
      description: "Instantly analyze any food product with our advanced computer vision technology that recognizes thousands of items.",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
      badge: "AI-Powered"
    },
    {
      icon: Leaf,
      title: "Ayurvedic Wisdom",
      description: "5,000 years of traditional knowledge meets modern science to provide personalized dosha-based recommendations.",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
      badge: "Traditional"
    },
    {
      icon: Shield,
      title: "Allergen Guardian",
      description: "Comprehensive protection with real-time alerts for 50+ allergens based on your personal health profile.",
      color: "text-destructive",
      gradient: "from-destructive/20 to-destructive/5",
      badge: "Health Shield"
    },
    {
      icon: Brain,
      title: "Smart Recommendations",
      description: "Personalized suggestions based on your constitution, health goals, and dietary preferences using WHO/FAO standards.",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
      badge: "Personalized"
    },
    {
      icon: Heart,
      title: "Holistic Health",
      description: "Track not just nutrition but overall well-being with mind-body balance insights from Ayurvedic principles.",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
      badge: "Wellness"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Beautiful visualizations of your health journey with actionable insights and milestone celebrations.",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
      badge: "Analytics"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
            ✨ Award-Winning Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Where Ancient Wisdom Meets
            <span className="block bg-gradient-hero bg-clip-text text-transparent"> Modern Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the perfect fusion of 5,000-year-old Ayurvedic knowledge and cutting-edge AI technology. 
            Our intelligent platform doesn't just analyze food—it understands your unique constitution and guides you toward optimal health.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="relative p-8 text-center">
                {/* Feature badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 text-xs font-medium bg-background/80 backdrop-blur-sm"
                >
                  {feature.badge}
                </Badge>
                
                {/* Icon with gradient background */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-background to-secondary/50 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-10 h-10" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                
                {/* Bottom decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Features Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Allergen Detection */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">Advanced Allergen Detection</h3>
              <p className="text-muted-foreground text-lg">
                Our AI instantly identifies and warns you about allergens that could affect your health. 
                Set up your profile once and get personalized alerts every time you scan.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Real-time allergen identification</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Customizable allergen profiles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Severity level indicators</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-float">
            <img 
              src={allergenImage} 
              alt="Allergen detection interface showing various allergen warning icons in a clean, organized layout"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Nutrition Dashboard */}
          <div className="rounded-2xl overflow-hidden shadow-float lg:order-first">
            <img 
              src={nutritionImage} 
              alt="Nutrition tracking dashboard displaying colorful charts, daily progress rings, and detailed nutritional analysis"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">Comprehensive Nutrition Tracking</h3>
              <p className="text-muted-foreground text-lg">
                Get detailed insights into your nutritional intake with beautiful visualizations. 
                Track macros, calories, vitamins, and minerals to optimize your health.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm font-medium">Interactive nutrition charts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm font-medium">Daily goal tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm font-medium">Personalized recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;