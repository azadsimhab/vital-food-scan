import { useState } from "react";
import { User, Settings, Heart, TrendingUp, Award, Calendar, Leaf, Bell, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const userStats = {
    scansThisMonth: 47,
    compatibilityAverage: 78,
    daysStreak: 12,
    level: "Ayurvedic Explorer"
  };

  const achievements = [
    { name: "First Scan", description: "Completed your first food analysis", completed: true, icon: "🎯" },
    { name: "Week Warrior", description: "Scanned food for 7 consecutive days", completed: true, icon: "🔥" },
    { name: "Dosha Master", description: "Achieved 90%+ compatibility 5 times", completed: false, icon: "⭐" },
    { name: "Ancient Wisdom", description: "Read 50 Ayurvedic insights", completed: false, icon: "📚" }
  ];

  const doshaResults = {
    vata: 35,
    pitta: 40,
    kapha: 25,
    primary: "Pitta",
    secondary: "Vata"
  };

  const menuItems = [
    { icon: Bell, label: "Notifications", action: "toggle", state: notifications, setter: setNotifications },
    { icon: Settings, label: "App Settings", action: "navigate" },
    { icon: Shield, label: "Privacy & Security", action: "navigate" },
    { icon: HelpCircle, label: "Help & Support", action: "navigate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background p-4 pb-20">
      {/* Header */}
      <div className="text-center mb-6 pt-12">
        <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-float">
          <span className="text-2xl font-bold text-primary-foreground">AK</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Asha Kumar</h1>
        <p className="text-muted-foreground">asha.kumar@email.com</p>
        <Badge className="mt-2 bg-primary/10 text-primary">{userStats.level}</Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{userStats.scansThisMonth}</p>
            <p className="text-xs text-muted-foreground">Scans</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{userStats.compatibilityAverage}%</p>
            <p className="text-xs text-muted-foreground">Avg Match</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{userStats.daysStreak}</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
      </div>

      {/* Dosha Analysis */}
      <Card className="bg-gradient-card border-0 shadow-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Leaf className="w-5 h-5 text-primary" />
            Your Dosha Constitution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-foreground">
              Primary: <span className="text-primary">{doshaResults.primary}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Secondary: {doshaResults.secondary}
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Vata (Air + Space)</span>
                <span className="text-muted-foreground">{doshaResults.vata}%</span>
              </div>
              <Progress value={doshaResults.vata} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Pitta (Fire + Water)</span>
                <span className="text-muted-foreground">{doshaResults.pitta}%</span>
              </div>
              <Progress value={doshaResults.pitta} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Kapha (Earth + Water)</span>
                <span className="text-muted-foreground">{doshaResults.kapha}%</span>
              </div>
              <Progress value={doshaResults.kapha} className="h-2" />
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4">
            Retake Dosha Quiz
          </Button>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-card border-0 shadow-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Award className="w-5 h-5 text-primary" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
              achievement.completed ? 'bg-primary/5' : 'bg-muted/30'
            }`}>
              <span className="text-2xl">{achievement.icon}</span>
              <div className="flex-1">
                <h4 className={`font-medium ${
                  achievement.completed ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {achievement.name}
                </h4>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
              {achievement.completed && (
                <Badge className="bg-primary/10 text-primary">Completed</Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Settings className="w-5 h-5 text-primary" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">{item.label}</span>
                </div>
                {item.action === "toggle" && (
                  <Switch 
                    checked={item.state} 
                    onCheckedChange={item.setter}
                  />
                )}
              </div>
              {index < menuItems.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sign Out */}
      <Button variant="destructive" className="w-full mt-6">
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;