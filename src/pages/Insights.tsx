import { Calendar, TrendingUp, Target, Leaf, Brain, Heart, Clock, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Insights = () => {
  const weeklyStats = [
    { day: "Mon", scans: 3, compatibility: 85 },
    { day: "Tue", scans: 2, compatibility: 92 },
    { day: "Wed", scans: 4, compatibility: 78 },
    { day: "Thu", scans: 1, compatibility: 94 },
    { day: "Fri", scans: 3, compatibility: 81 },
    { day: "Sat", scans: 2, compatibility: 89 },
    { day: "Sun", scans: 1, compatibility: 95 }
  ];

  const doshaBalance = {
    current: { vata: 30, pitta: 45, kapha: 25 },
    target: { vata: 35, pitta: 40, kapha: 25 },
    recommendations: [
      { dosha: "Vata", action: "Increase warm, grounding foods", status: "needs-attention" },
      { dosha: "Pitta", action: "Reduce spicy, heating foods", status: "good" },
      { dosha: "Kapha", action: "Maintain current balance", status: "excellent" }
    ]
  };

  const nutritionalTrends = [
    { nutrient: "Protein", current: 18, target: 20, trend: "up", unit: "g/day" },
    { nutrient: "Fiber", current: 32, target: 25, trend: "up", unit: "g/day" },
    { nutrient: "Iron", current: 85, target: 100, trend: "down", unit: "% DV" },
    { nutrient: "Calcium", current: 92, target: 100, trend: "stable", unit: "% DV" }
  ];

  const ayurvedicInsights = [
    {
      title: "Optimal Eating Window",
      description: "Your strongest Agni (digestive fire) is between 12-2 PM",
      recommendation: "Schedule your largest meal during this time",
      icon: Clock,
      priority: "high"
    },
    {
      title: "Seasonal Alignment",
      description: "Winter season calls for warm, grounding foods",
      recommendation: "Focus on cooked grains, root vegetables, and warming spices",
      icon: Leaf,
      priority: "medium"
    },
    {
      title: "Mind-Body Connection",
      description: "Your current stress levels may affect digestion",
      recommendation: "Practice mindful eating and consider pranayama",
      icon: Brain,
      priority: "high"
    }
  ];

  const achievements = [
    { name: "Consistency Champion", progress: 80, target: 100, description: "Scan food 30 days in a row" },
    { name: "Balance Master", progress: 65, target: 100, description: "Maintain 85%+ compatibility for a week" },
    { name: "Wisdom Seeker", progress: 40, target: 100, description: "Read 50 Ayurvedic insights" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background p-4 pb-20">
      {/* Header */}
      <div className="pt-12 mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Your Wellness Journey</h1>
        <p className="text-muted-foreground">Insights powered by ancient wisdom and modern science</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dosha">Dosha</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="wisdom">Wisdom</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Weekly Summary */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                This Week's Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weeklyStats.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      day.scans > 0 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {day.scans}
                    </div>
                    {day.scans > 0 && (
                      <div className="text-xs text-primary mt-1">{day.compatibility}%</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">16</p>
                  <p className="text-xs text-muted-foreground">Total Scans</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">87%</p>
                  <p className="text-xs text-muted-foreground">Avg Compatibility</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">6</p>
                  <p className="text-xs text-muted-foreground">Active Days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-primary" />
                Achievement Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-foreground">{achievement.name}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.progress}%
                    </Badge>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dosha" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Leaf className="w-5 h-5 text-primary" />
                Dosha Balance Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current vs Target */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Current Balance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vata</span>
                      <span>{doshaBalance.current.vata}%</span>
                    </div>
                    <Progress value={doshaBalance.current.vata} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Pitta</span>
                      <span>{doshaBalance.current.pitta}%</span>
                    </div>
                    <Progress value={doshaBalance.current.pitta} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Kapha</span>
                      <span>{doshaBalance.current.kapha}%</span>
                    </div>
                    <Progress value={doshaBalance.current.kapha} className="h-2" />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Target Balance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vata</span>
                      <span>{doshaBalance.target.vata}%</span>
                    </div>
                    <Progress value={doshaBalance.target.vata} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Pitta</span>
                      <span>{doshaBalance.target.pitta}%</span>
                    </div>
                    <Progress value={doshaBalance.target.pitta} className="h-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span>Kapha</span>
                      <span>{doshaBalance.target.kapha}%</span>
                    </div>
                    <Progress value={doshaBalance.target.kapha} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Balancing Recommendations</h4>
                {doshaBalance.recommendations.map((rec, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    rec.status === 'excellent' ? 'bg-green-50 border border-green-200' :
                    rec.status === 'good' ? 'bg-blue-50 border border-blue-200' :
                    'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium text-foreground">{rec.dosha}</h5>
                        <p className="text-sm text-muted-foreground">{rec.action}</p>
                      </div>
                      <Badge className={
                        rec.status === 'excellent' ? 'bg-green-100 text-green-800' :
                        rec.status === 'good' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {rec.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Nutritional Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutritionalTrends.map((nutrient, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{nutrient.nutrient}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {nutrient.current} / {nutrient.target} {nutrient.unit}
                      </span>
                      <Badge className={
                        nutrient.trend === 'up' ? 'bg-green-100 text-green-800' :
                        nutrient.trend === 'down' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {nutrient.trend}
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={(nutrient.current / nutrient.target) * 100} 
                    className="h-2" 
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wisdom" className="space-y-4">
          {ayurvedicInsights.map((insight, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    insight.priority === 'high' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    <insight.icon className={`w-6 h-6 ${
                      insight.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{insight.title}</h3>
                      <Badge className={
                        insight.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }>
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-sm text-foreground font-medium">💡 Recommendation:</p>
                      <p className="text-sm text-muted-foreground">{insight.recommendation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Insights;