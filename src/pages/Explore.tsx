import { Search, Filter, TrendingUp, Star, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Explore = () => {
  const trendingFoods = [
    { name: "Golden Milk Powder", compatibility: 94, category: "Beverages", trending: "+12%" },
    { name: "Organic Ghee", compatibility: 89, category: "Dairy", trending: "+8%" },
    { name: "Turmeric Supplements", compatibility: 92, category: "Supplements", trending: "+15%" },
    { name: "Ashwagandha Tea", compatibility: 87, category: "Herbs", trending: "+22%" }
  ];

  const categories = [
    { name: "Grains & Cereals", count: 234, icon: "🌾", color: "bg-yellow-100 text-yellow-800" },
    { name: "Herbs & Spices", count: 189, icon: "🌿", color: "bg-green-100 text-green-800" },
    { name: "Dairy Products", count: 156, icon: "🥛", color: "bg-blue-100 text-blue-800" },
    { name: "Vegetables", count: 287, icon: "🥕", color: "bg-orange-100 text-orange-800" },
    { name: "Fruits", count: 203, icon: "🍎", color: "bg-red-100 text-red-800" },
    { name: "Legumes", count: 145, icon: "🫘", color: "bg-purple-100 text-purple-800" }
  ];

  const recentlyScanned = [
    { name: "Quinoa Pasta", time: "2 hours ago", compatibility: 85 },
    { name: "Coconut Oil", time: "1 day ago", compatibility: 91 },
    { name: "Himalayan Salt", time: "2 days ago", compatibility: 78 }
  ];

  const ayurvedicTips = [
    {
      title: "Morning Rituals",
      description: "Start your day with warm water and lemon to kindle Agni",
      icon: "🌅"
    },
    {
      title: "Seasonal Eating",
      description: "Align your diet with nature's cycles for optimal health",
      icon: "🍂"
    },
    {
      title: "Mindful Consumption",
      description: "Eat with awareness and gratitude for better digestion",
      icon: "🧘‍♀️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background p-4 pb-20">
      {/* Header */}
      <div className="pt-12 mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-4">Explore Food Wisdom</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search foods, ingredients, brands..." 
            className="pl-10 pr-12 bg-background border-border"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="trending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trending This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {trendingFoods.map((food, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{food.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{food.category}</Badge>
                      <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {food.trending}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{food.compatibility}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-float transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <span className="text-3xl mb-2 block">{category.icon}</span>
                  <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                  <Badge className={`text-xs ${category.color}`}>
                    {category.count} items
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                Recently Scanned
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentlyScanned.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <h4 className="font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary">
                    {item.compatibility}%
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All History
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-primary" />
                Ayurvedic Wisdom
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ayurvedicTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Explore More Wisdom
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Explore;