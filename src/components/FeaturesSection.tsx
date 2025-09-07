import { Camera, Shield, BarChart3, GitCompare, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import allergenImage from "@/assets/allergen-icons.jpg";
import nutritionImage from "@/assets/nutrition-dashboard.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Food Scanning",
      description: "Point your camera at any food product and get instant, detailed analysis powered by advanced AI technology.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Allergen Detection",
      description: "Comprehensive identification of 50+ allergens with personalized warnings based on your dietary restrictions.",
      color: "text-destructive"
    },
    {
      icon: BarChart3,
      title: "Nutritional Analysis",
      description: "Get detailed breakdown of calories, macros, vitamins, and minerals with easy-to-understand visualizations.",
      color: "text-accent"
    },
    {
      icon: GitCompare,
      title: "Product Comparison",
      description: "Compare multiple products side by side to make informed choices that align with your health goals.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Access",
      description: "Available on Android, iOS, and Web. Your data syncs seamlessly across all your devices.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Daily Nutrition Tracking",
      description: "Monitor your daily nutritional intake with personalized recommendations and progress tracking.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Eating</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you make informed food choices, 
            avoid allergens, and maintain a healthy lifestyle with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-gradient-card border-0 shadow-card hover:shadow-float transition-all duration-300 hover:scale-105 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-card mb-4 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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