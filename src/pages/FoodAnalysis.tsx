import { useState } from "react";
import { ArrowLeft, Heart, Share, Camera, Home, AlertTriangle, CheckCircle, XCircle, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const FoodAnalysis = () => {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  
  useKeyboardNavigation(() => navigate(-1));

  const compatibilityScore = 89;
  const allergenWarnings = [
    { name: "Gluten", severity: "high", message: "Contains wheat-based ingredients" },
    { name: "Dairy", severity: "medium", message: "May contain trace amounts" }
  ];

  const healthConcerns = [
    { type: "High Sodium", level: "warning", description: "Above recommended daily intake" },
    { type: "Added Sugars", level: "caution", description: "Contains 8g added sugars" }
  ];

  const alternatives = [
    { name: "Organic Quinoa Bowl", score: 95, reason: "Higher protein, gluten-free" },
    { name: "Brown Rice Salad", score: 87, reason: "Lower sodium, more fiber" },
    { name: "Lentil Curry", score: 92, reason: "Plant-based protein, ayurvedic spices" }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4 pb-20">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 pt-12">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Scan Results</h1>
        <Button variant="ghost" size="icon">
          <Share className="w-5 h-5" />
        </Button>
      </header>

      {/* Enhanced Food Item Header with Circular Score */}
      <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-xs text-muted-foreground font-medium">IMG</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-1">Organic Quinoa Bowl</h2>
              <p className="text-muted-foreground text-sm mb-3">Ancient Grains Co.</p>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-green-100 text-green-800 border-green-200">Vata-friendly</Badge>
                <Badge variant="secondary" className="text-xs">Organic</Badge>
              </div>
            </div>
            
            {/* Circular Score Display */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-secondary/30"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${compatibilityScore}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">{compatibilityScore}</span>
                </div>
              </div>
              <Button
                variant={isSaved ? "default" : "outline"}
                size="sm"
                onClick={() => setIsSaved(!isSaved)}
                className="w-10 h-10 rounded-full p-0"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allergen Warnings */}
      {allergenWarnings.length > 0 && (
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-elegant mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              Allergen Warnings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {allergenWarnings.map((warning, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  warning.severity === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                }`}>
                  <XCircle className={`w-4 h-4 ${
                    warning.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-red-900">{warning.name}</p>
                  <p className="text-sm text-red-700">{warning.message}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Health Concerns */}
      {healthConcerns.length > 0 && (
        <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200 shadow-elegant mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <AlertTriangle className="w-5 h-5" />
              Health Considerations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {healthConcerns.map((concern, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-yellow-900">{concern.type}</p>
                  <p className="text-sm text-yellow-700">{concern.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Alternatives Card */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-elegant mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Lightbulb className="w-5 h-5" />
            Better Alternatives
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {alternatives.map((alt, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-green-900">{alt.name}</h4>
                <p className="text-sm text-green-700">{alt.reason}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-green-600" />
                    <span className="text-sm font-bold text-green-800">{alt.score}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="nutrition" className="space-y-4 mb-6">
        <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="ayurvedic">Ayurvedic</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="nutrition" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-primary" />
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ayurvedic" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-primary" />
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
          <Card className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Heart className="w-5 h-5 text-primary" />
                Health Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <p className="text-sm text-foreground">Complete protein source with all 9 essential amino acids</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <p className="text-sm text-foreground">Rich in antioxidants and flavonoids</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <p className="text-sm text-foreground">Supports digestive health with natural fiber</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <p className="text-sm text-foreground">Gluten-free and easily digestible</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="h-12 font-semibold"
          onClick={() => navigate('/scanner')}
        >
          <Camera className="w-4 h-4 mr-2" />
          Scan Another
        </Button>
        <Button 
          className="h-12 bg-gradient-to-r from-primary to-accent text-white font-semibold"
          onClick={() => navigate('/dashboard')}
        >
          <Home className="w-4 h-4 mr-2" />
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default FoodAnalysis;