import { Home, Camera, Search, User, Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Search, label: "Today", path: "/insights" },
    { icon: Camera, label: "Compare", path: "/explore" },
    { icon: User, label: "More", path: "/profile" }
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
            aria-label={`Navigate to ${item.label}`}
          >
            <item.icon className="w-5 h-5 mb-1" aria-hidden="true" />
            <span className="text-xs font-medium truncate">{item.label}</span>
          </NavLink>
        ))}
        
        {/* Central Scan Button */}
        <NavLink
          to="/scanner"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4"
          aria-label="Scan food"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-elegant hover:scale-105 transition-transform">
            <Camera className="w-6 h-6 text-white" />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavigation;