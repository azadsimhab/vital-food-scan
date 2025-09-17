import { useState } from "react";
import { User, Settings, Bell, Shield, HelpCircle, LogOut, Camera, Star, Zap, Trophy, Edit, ChevronRight, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAllergens, setSelectedAllergens] = useState(["Gluten", "Dairy"]);
  const navigate = useNavigate();

  const allergens = [
    "Gluten", "Dairy", "Nuts", "Soy", "Eggs", "Fish", "Shellfish", "Sesame"
  ];

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4 pb-20">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 pt-12">
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <Button variant="ghost" size="icon" className="relative">
          <Edit className="w-5 h-5" />
        </Button>
      </header>

      {/* Enhanced User Info */}
      <Card className="bg-gradient-to-br from-background to-secondary/5 border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-2xl font-bold text-white">AK</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">Arjun Kumar</h2>
              <p className="text-muted-foreground mb-2">arjun.kumar@email.com</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                  Premium Member
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Level 5
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">234</p>
              <p className="text-xs text-muted-foreground">Scans</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">18</p>
              <p className="text-xs text-muted-foreground">Streak</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">92%</p>
              <p className="text-xs text-muted-foreground">Score</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allergen Preferences */}
      <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Shield className="w-5 h-5 text-primary" />
            Allergen Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allergens.map((allergen) => (
              <button
                key={allergen}
                onClick={() => toggleAllergen(allergen)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedAllergens.includes(allergen)
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {selectedAllergens.includes(allergen) && (
                  <X className="w-3 h-3 inline mr-1" />
                )}
                {allergen}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Tap to toggle allergens you want to avoid in food analysis
          </p>
        </CardContent>
      </Card>

      {/* Dosha Constitution */}
      <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Star className="w-5 h-5 text-primary" />
            Dosha Constitution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-foreground">
              Primary: <span className="text-primary">Pitta</span>
            </p>
            <p className="text-sm text-muted-foreground">Secondary: Vata</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Vata (Air + Space)</span>
                <span className="text-muted-foreground">35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Pitta (Fire + Water)</span>
                <span className="text-muted-foreground">40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">Kapha (Earth + Water)</span>
                <span className="text-muted-foreground">25%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4">
            Retake Dosha Assessment
          </Button>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Trophy className="w-5 h-5 text-primary" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Consistency Champion", desc: "7-day scan streak", progress: 100, completed: true },
            { name: "Balance Master", desc: "90%+ compatibility goal", progress: 75, completed: false },
            { name: "Wisdom Seeker", desc: "Read 25 insights", progress: 60, completed: false }
          ].map((achievement, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                achievement.completed ? 'bg-green-100' : 'bg-secondary'
              }`}>
                <Trophy className={`w-5 h-5 ${
                  achievement.completed ? 'text-green-600' : 'text-muted-foreground'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{achievement.name}</h4>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                <Progress value={achievement.progress} className="h-1 mt-2" />
              </div>
              {achievement.completed && (
                <Badge className="bg-green-100 text-green-800">Done</Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Enhanced Settings */}
      <Card className="bg-gradient-card border-0 shadow-elegant mb-6 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Settings className="w-5 h-5 text-primary" />
            Settings & Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Meal reminders & insights</p>
              </div>
            </div>
            <Switch 
              checked={notifications} 
              onCheckedChange={setNotifications}
              className="data-[state=checked]:bg-primary"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">App Preferences</p>
                <p className="text-sm text-muted-foreground">Customize your experience</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Privacy & Data</p>
                <p className="text-sm text-muted-foreground">Control your information</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Help & Support</p>
                <p className="text-sm text-muted-foreground">FAQs and contact support</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Sign Out Button */}
      <Button 
        variant="destructive" 
        className="w-full h-12 text-white font-semibold"
        onClick={() => {
          // Handle sign out
          navigate('/');
        }}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;