import { TrendingUp, Award, Target, Calendar, Flame, Heart, Brain, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Insights = () => {
  const { elementRef: weeklyRef, isVisible: weeklyVisible } = useIntersectionObserver();
  const { elementRef: goalsRef, isVisible: goalsVisible } = useIntersectionObserver();
  const { elementRef: trendsRef, isVisible: trendsVisible } = useIntersectionObserver();

  const journeyMetrics = [
    { label: "Total Scans", value: "234", icon: Target, color: "from-primary to-primary/80", growth: "+12%" },
    { label: "Wellness Score", value: "92%", icon: Heart, color: "from-green-500 to-green-600", growth: "+5%" },
    { label: "Streak Days", value: "18", icon: Flame, color: "from-orange-500 to-red-500", growth: "+3 days" },
    { label: "Mindful Meals", value: "156", icon: Brain, color: "from-purple-500 to-purple-600", growth: "+8%" }
  ];

  const recentScans = [
    { name: "Organic Quinoa Bowl", time: "2 hours ago", score: 94, category: "Vata Balance", color: "bg-green-100 text-green-800" },
    { name: "Greek Yogurt", time: "5 hours ago", score: 78, category: "Kapha Moderate", color: "bg-yellow-100 text-yellow-800" },
    { name: "Spiced Almonds", time: "Yesterday", score: 89, category: "Pitta Harmony", color: "bg-blue-100 text-blue-800" },
    { name: "Turmeric Latte", time: "Yesterday", score: 96, category: "Tri-Dosha", color: "bg-purple-100 text-purple-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-primary/5 p-4 pb-20">
      {/* Header */}
      <header className="mb-8 pt-12">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Your Wellness Journey
          </h1>
          <p className="text-muted-foreground">Tracking your path to optimal health</p>
        </div>
      </header>

      {/* Journey Metrics Cards */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        {journeyMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-elegant backdrop-blur-sm overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs font-medium text-green-600 bg-green-50">
                  {metric.growth}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Enhanced Scan History */}
      <Card 
        ref={weeklyRef as any}
        className={`bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm transition-all duration-700 ${
          weeklyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            Recent Scan History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentScans.map((scan, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{scan.name}</h4>
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs ${scan.color} border-0`}>
                    {scan.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{scan.time}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-secondary/30"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className={scan.score >= 90 ? "text-green-500" : scan.score >= 70 ? "text-yellow-500" : "text-red-500"}
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${scan.score}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">{scan.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Goals & Progress */}
      <Card 
        ref={goalsRef as any}
        className={`bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm transition-all duration-700 ${
          goalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Award className="w-5 h-5 text-primary" />
            Wellness Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">Weekly Scan Target</h4>
                <p className="text-sm text-muted-foreground">21 of 25 scans completed</p>
              </div>
              <Badge className="bg-primary/10 text-primary">84%</Badge>
            </div>
            <Progress value={84} className="h-3" />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">Ayurvedic Balance</h4>
                <p className="text-sm text-muted-foreground">Maintain 85%+ compatibility</p>
              </div>
              <Badge className="bg-green-100 text-green-800">92%</Badge>
            </div>
            <Progress value={92} className="h-3" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">Mindful Eating</h4>
                <p className="text-sm text-muted-foreground">Daily meditation before meals</p>
              </div>
              <Badge className="bg-purple-100 text-purple-800">67%</Badge>
            </div>
            <Progress value={67} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Trends & Insights */}
      <Card 
        ref={trendsRef as any}
        className={`bg-gradient-card border-0 shadow-elegant backdrop-blur-sm transition-all duration-700 ${
          trendsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="w-5 h-5 text-primary" />
            Weekly Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const scans = [3, 2, 4, 1, 3, 2, 1][index];
              const compatibility = [85, 92, 78, 94, 81, 89, 95][index];
              return (
                <div key={day} className="text-center">
                  <div className="text-xs text-muted-foreground mb-2">{day}</div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${
                    scans > 0 
                      ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {scans}
                  </div>
                  {scans > 0 && (
                    <div className="text-xs text-primary mt-1 font-medium">{compatibility}%</div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">16</p>
              <p className="text-xs text-muted-foreground">Total Scans</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">87%</p>
              <p className="text-xs text-muted-foreground">Avg Score</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">6</p>
              <p className="text-xs text-muted-foreground">Active Days</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;