import { useState } from "react";
import { ArrowLeft, Heart, AlertTriangle, TrendingUp, Leaf, Star, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const FoodAnalysis = () => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const foodData = {
    name: "Organic Quinoa",
    brand: "Nature's Choice",
    compatibilityScore: 92,
    dosha: "Vata-Balancing",
    category: "Ancient Grains",
    image: "/api/placeholder/300/200"
  };

  const nutritionalData = [
    { label: "Protein", value: 14.1, unit: "g", daily: 28 },
    { label: "Fiber", value: 4.4, unit: "g", daily: 18 },
    { label: "Iron", value: 4.6, unit: "mg", daily: 26 },
    { label: "Magnesium", value: 197, unit: "mg", daily: 49 }
  ];

  const ayurvedicInsights = [
    {
      aspect: "Rasa (Taste)",
      value: "Sweet, Astringent",
      impact: "Nourishing and grounding",
      icon: "🌿"
    },
    {
      aspect: "Virya (Energy)",
      value: "Slightly Cooling",
      impact: "Balances Pitta dosha",
      icon: "❄️"
    },
    {
      aspect: "Prabhava (Effect)",
      value: "Strengthening",
      impact: "Builds Ojas (vitality)",
      icon: "✨"
    }
  ];

  const healthBenefits = [
    "Complete protein source with all 9 essential amino acids",
    "Rich in antioxidants and flavonoids",
    "Supports digestive health with natural fiber",
    "Gluten-free and easily digestible"
  ];

  const warnings = [
    {
      type: "Kapha Excess",
      message: "Consume in moderation if you have Kapha imbalance",
      severity: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-background to-transparent relative z-10">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Food Analysis</h1>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSaved(!saved)}
            className="rounded-full"
          >
            <Bookmark className={`w-5 h-5 ${saved ? 'fill-current text-primary' : ''}`} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-20">
        {/* Food Header */}
        <Card className="bg-gradient-card border-0 shadow-card mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-1">{foodData.name}</h2>
                <p className="text-muted-foreground mb-2">{foodData.brand}</p>
                <div className="flex gap-2">
                  <Badge className="bg-primary/10 text-primary">{foodData.dosha}</Badge>
                  <Badge variant="secondary">{foodData.category}</Badge>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{foodData.compatibilityScore}%</div>
                <div className="text-xs text-muted-foreground">Compatibility</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compatibility Score */}
        <Card className="bg-gradient-primary border-0 shadow-float mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary-foreground">
                Ayurvedic Compatibility
              </h3>
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <Progress value={foodData.compatibilityScore} className="mb-4 h-3" />
            <p className="text-primary-foreground/90 text-sm">
              Excellent match for your constitution. This ancient grain aligns beautifully with Ayurvedic principles of balanced nutrition.
            </p>
          </CardContent>
        </Card>

        {/* Warnings */}
        {warnings.length > 0 && (
          <Card className="bg-warning/10 border-warning/20 mb-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-medium text-warning-foreground mb-1">
                    Gentle Reminder
                  </h4>
                  {warnings.map((warning, index) => (
                    <p key={index} className="text-sm text-warning-foreground/80">
                      {warning.message}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Detailed Analysis */}
        <Tabs defaultValue="nutrition" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="ayurvedic">Ayurvedic</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="nutrition" className="space-y-4">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Nutritional Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {nutritionalData.map((nutrient, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{nutrient.label}</span>
                      <span className="text-muted-foreground">
                        {nutrient.value}{nutrient.unit} ({nutrient.daily}% DV)
                      </span>
                    </div>
                    <Progress value={nutrient.daily} className="h-2" />
                  </div>
                ))}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    *Based on WHO/FAO daily value recommendations
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ayurvedic" className="space-y-4">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Leaf className="w-5 h-5 text-primary" />
                  Ancient Wisdom Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {ayurvedicInsights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                    <span className="text-2xl">{insight.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{insight.aspect}</h4>
                      <p className="text-sm text-primary font-medium mb-1">{insight.value}</p>
                      <p className="text-xs text-muted-foreground">{insight.impact}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-4">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Heart className="w-5 h-5 text-primary" />
                  Health Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {healthBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button 
            variant="outline" 
            className="bg-background"
            onClick={() => navigate('/scanner')}
          >
            Scan Another
          </Button>
          <Button 
            className="bg-gradient-primary"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodAnalysis;