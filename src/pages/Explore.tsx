import { useState } from "react";
import { Search, Filter, Star, Leaf, Heart, Thermometer, Droplets, Wind } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Explore = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedTemperature, setSelectedTemperature] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { elementRef: categoriesRef, isVisible: categoriesVisible } = useIntersectionObserver();
  const { elementRef: trendsRef, isVisible: trendsVisible } = useIntersectionObserver();

  const temperatures = [
    { name: "Hot", icon: Thermometer, color: "from-red-500 to-orange-500", description: "Warming foods" },
    { name: "Cold", icon: Droplets, color: "from-blue-500 to-cyan-500", description: "Cooling foods" },
    { name: "Neutral", icon: Wind, color: "from-gray-500 to-slate-500", description: "Balanced foods" }
  ];

  const handleCompatibilityCheck = () => {
    if (selectedFood && selectedTemperature) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-background to-purple-50 p-4 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mb-6 mt-4">
        <div className="flex items-center gap-4 text-white">
          <Button variant="ghost" size="sm" className="h-10 w-10 text-white hover:bg-white/20">
            <span className="text-xl">←</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">EatWisely Bro - Ayurvedic Food Compatibility</h1>
            <p className="text-sm text-orange-100">Traditional dietary wisdom with temperature analysis</p>
          </div>
          <Button variant="ghost" size="sm" className="h-10 w-10 text-white hover:bg-white/20">
            <span className="text-xl">↓</span>
          </Button>
        </div>
      </header>

      {/* Main Compatibility Card */}
      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-elegant mb-6">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">↓</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">🔮</span>
            </div>
            <h2 className="text-xl font-bold text-orange-800">Ayurvedic Food Compatibility</h2>
          </div>
          <p className="text-orange-700 text-sm">
            Analyze food combinations with temperature consideration using traditional Indian dietary wisdom
          </p>
        </CardContent>
      </Card>

      {/* Food Comparison Interface */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* First Food Card */}
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="font-bold text-orange-800">First Food</h3>
            </div>
            <Input 
              placeholder="Enter food name..."
              className="mb-4 bg-white border-orange-200 focus:border-orange-400"
              value={selectedFood}
              onChange={(e) => setSelectedFood(e.target.value)}
            />
            <div>
              <p className="text-sm font-medium text-orange-700 mb-2">Temperature:</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={selectedTemperature === "Hot" ? "default" : "outline"}
                  className={selectedTemperature === "Hot" 
                    ? "bg-orange-500 text-white border-0" 
                    : "border-orange-200 text-orange-600"
                  }
                  onClick={() => setSelectedTemperature("Hot")}
                >
                  🔥 Hot
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-orange-200 text-orange-600 opacity-50"
                >
                  ❄️ Cold
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Food Card */}
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="font-bold text-gray-800">Second Food</h3>
            </div>
            <Input 
              placeholder="Enter food name..."
              className="mb-4 bg-white border-gray-200 focus:border-gray-400"
            />
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Temperature:</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="default"
                  className="bg-orange-500 text-white border-0"
                >
                  🔥 Hot
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-200 text-gray-600 opacity-50"
                >
                  ❄️ Cold
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analyze Button */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">↓</span>
        </div>
        <Button 
          onClick={handleCompatibilityCheck}
          disabled={!selectedFood}
          className="w-full h-14 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg"
        >
          ↓ Analyze Compatibility
        </Button>
      </div>

      {/* Results Modal */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-md border-0 shadow-elegant">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Compatibility Results
            </DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">89%</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Excellent Compatibility!</h3>
              <p className="text-muted-foreground text-sm">
                {selectedFood} with {selectedTemperature.toLowerCase()} nature creates harmony for your dosha type.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-foreground">Supports digestive fire (Agni)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-foreground">Balances your dominant dosha</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm text-foreground">Enhances overall vitality</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Featured Foods Section */}
      <section 
        ref={categoriesRef as any}
        className={`transition-all duration-700 ${
          categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Star className="w-5 h-5 text-primary" />
              Featured Ayurvedic Foods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Golden Turmeric", score: 96, dosha: "Tri-Dosha", color: "from-yellow-400 to-orange-500" },
                { name: "Sacred Ghee", score: 94, dosha: "Vata Balance", color: "from-yellow-300 to-yellow-500" },
                { name: "Holy Basil", score: 92, dosha: "Kapha Support", color: "from-green-400 to-green-600" },
                { name: "Ginger Root", score: 90, dosha: "Pitta Harmony", color: "from-orange-400 to-red-500" }
              ].map((food, index) => (
                <div key={index} className="p-4 rounded-xl bg-background/50 border border-border/50">
                  <div className={`w-full h-20 bg-gradient-to-br ${food.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{food.score}%</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{food.name}</h4>
                  <Badge className="text-xs" variant="secondary">{food.dosha}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ayurvedic Wisdom Tips */}
      <section 
        ref={trendsRef as any}
        className={`transition-all duration-700 ${
          trendsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Card className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              Ancient Wisdom
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: "🌅", title: "Morning Rituals", tip: "Begin with warm water and lemon to awaken Agni" },
              { icon: "🍂", title: "Seasonal Harmony", tip: "Eat foods that balance the current season's influence" },
              { icon: "🧘‍♀️", title: "Mindful Eating", tip: "Chew slowly and eat in a peaceful environment" }
            ].map((wisdom, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/30">
                <span className="text-2xl">{wisdom.icon}</span>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{wisdom.title}</h4>
                  <p className="text-sm text-muted-foreground">{wisdom.tip}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Explore;