import { useState } from "react";
import { Camera, Search, TrendingUp, Heart, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [scannedToday] = useState(3);
  const [compatibilityScore] = useState(78);

  const recentScans = [
    { name: "Organic Quinoa", compatibility: 92, time: "2 hours ago", type: "Vata-friendly" },
    { name: "Greek Yogurt", compatibility: 65, time: "4 hours ago", type: "Kapha-cautious" },
    { name: "Almonds", compatibility: 88, time: "Yesterday", type: "Pitta-balance" }
  ];

  const insights = [
    { title: "Morning Metabolism", desc: "Your Agni (digestive fire) is strongest now", icon: TrendingUp },
    { title: "Seasonal Harmony", desc: "Favor warm, grounding foods this season", icon: Leaf },
    { title: "Mind-Body Balance", desc: "87% alignment with your dosha today", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Namaste 🙏</h1>
          <p className="text-muted-foreground">Your wellness journey continues</p>
        </div>
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-semibold">AK</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{scannedToday}</p>
                <p className="text-sm text-muted-foreground">Scans today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{compatibilityScore}%</p>
                <p className="text-sm text-muted-foreground">Compatibility</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scan Button */}
      <Card className="bg-gradient-primary border-0 shadow-float mb-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                Scan Your Food
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Discover ancient wisdom for modern nutrition
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-primary-foreground border-white/30 rounded-full w-16 h-16"
            >
              <Camera className="w-8 h-8" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ayurvedic Insights */}
      <Card className="bg-gradient-card border-0 shadow-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Leaf className="w-5 h-5 text-primary" />
            Today's Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                <insight.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Scans */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-foreground">
            <span>Recent Scans</span>
            <Button variant="ghost" size="sm">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentScans.map((scan, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{scan.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">{scan.type}</Badge>
                  <span className="text-xs text-muted-foreground">{scan.time}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Progress value={scan.compatibility} className="w-16 h-2" />
                  <span className="text-sm font-medium text-foreground">{scan.compatibility}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;