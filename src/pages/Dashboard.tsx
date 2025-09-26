import { useState } from "react";
import { Camera, Search, TrendingUp, Heart, Leaf, Star, Plus, Zap, Target, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Dashboard = () => {
  const [scannedToday] = useState(3);
  const [compatibilityScore] = useState(78);
  const [dailyStreak] = useState(12);
  const [aiScore] = useState(92);
  const [scanModalOpen, setScanModalOpen] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4 pb-20">
      {/* Modern Header */}
      <header className="flex items-center justify-between mb-8 pt-12" role="banner">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-elegant">
              <span className="text-primary-foreground font-bold text-lg" aria-hidden="true">AK</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Good morning, Arjun</h1>
            <p className="text-muted-foreground text-sm">Today's wellness score: 92% ✨</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => navigate('/profile')}
        >
          <Bell className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
        </Button>
      </header>

      {/* Today's Scores */}
      <section 
        ref={statsRef as any}
        className={`grid grid-cols-2 gap-4 mb-6 transition-all duration-700 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Today's wellness scores"
      >
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-elegant backdrop-blur-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md" aria-hidden="true">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1" aria-label={`${dailyStreak} day streak`}>
                  {dailyStreak}
                </p>
                <p className="text-sm text-muted-foreground">Day streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-0 shadow-elegant backdrop-blur-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-md" aria-hidden="true">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1" aria-label={`${aiScore}% AI nutrition score`}>
                  {aiScore}%
                </p>
                <p className="text-sm text-muted-foreground">AI Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Daily Nutrition AI Card */}
      <Card className="bg-gradient-to-r from-background to-secondary/10 border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Daily Nutrition AI</h3>
                <p className="text-sm text-muted-foreground">Personalized insights</p>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Protein intake</span>
              <span className="text-sm font-medium text-foreground">78% of goal</span>
            </div>
            <Progress value={78} className="h-2" />
            <p className="text-xs text-muted-foreground">Great progress! Add 15g more protein for optimal balance.</p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Floating Scan Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <Dialog open={scanModalOpen} onOpenChange={setScanModalOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg" 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-float hover:shadow-glow transition-all duration-300 hover:scale-110 border-0"
              aria-label="Scan food options"
            >
              <Plus className="w-8 h-8 text-white" aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-md border-0 shadow-elegant">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Choose Scan Method
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <Button 
                onClick={() => {
                  setScanModalOpen(false);
                  navigate('/scanner');
                }}
                className="h-16 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 text-foreground"
              >
                <Camera className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Camera Scan</div>
                  <div className="text-sm text-muted-foreground">Instant food analysis</div>
                </div>
              </Button>
              <Button 
                onClick={() => {
                  setScanModalOpen(false);
                  navigate('/scanner?mode=barcode');
                }}
                className="h-16 bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border border-accent/20 text-foreground"
              >
                <Search className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Barcode Scan</div>
                  <div className="text-sm text-muted-foreground">Quick product lookup</div>
                </div>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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