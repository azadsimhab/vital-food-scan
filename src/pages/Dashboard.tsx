import { useState } from "react";
import { Camera, Search, TrendingUp, Heart, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Dashboard = () => {
  const [scannedToday] = useState(3);
  const [compatibilityScore] = useState(78);
  const navigate = useNavigate();
  const { elementRef: statsRef, isVisible: statsVisible } = useIntersectionObserver();
  const { elementRef: insightsRef, isVisible: insightsVisible } = useIntersectionObserver();

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
      <header className="flex items-center justify-between mb-6 pt-12" role="banner">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Namaste 🙏</h1>
          <p className="text-muted-foreground">Your wellness journey continues</p>
        </div>
        <button 
          className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-200 hover:scale-105"
          aria-label="User profile"
          onClick={() => navigate('/profile')}
        >
          <span className="text-primary-foreground font-semibold" aria-hidden="true">AK</span>
        </button>
      </header>

      {/* Quick Stats */}
      <section 
        ref={statsRef as any}
        className={`grid grid-cols-2 gap-4 mb-6 transition-all duration-700 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Daily statistics"
      >
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground" aria-label={`${scannedToday} scans completed today`}>
                  {scannedToday}
                </p>
                <p className="text-sm text-muted-foreground">Scans today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground" aria-label={`${compatibilityScore}% food compatibility score`}>
                  {compatibilityScore}%
                </p>
                <p className="text-sm text-muted-foreground">Compatibility</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Scan Button */}
      <Card className="bg-gradient-primary border-0 shadow-float mb-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" aria-hidden="true" />
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-primary-foreground mb-1">
                Scan Your Food
              </h2>
              <p className="text-primary-foreground/80 text-sm">
                Discover ancient wisdom for modern nutrition
              </p>
            </div>
            <Button 
              size="lg" 
              onClick={() => navigate('/scanner')}
              className="bg-white/20 hover:bg-white/30 text-primary-foreground border-white/30 rounded-full w-16 h-16 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Start scanning food products"
            >
              <Camera className="w-8 h-8" aria-hidden="true" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Ayurvedic Insights */}
      <section 
        ref={insightsRef as any}
        className={`transition-all duration-700 ${
          insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Daily Ayurvedic insights"
      >
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
      </section>

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