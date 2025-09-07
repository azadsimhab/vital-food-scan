import { Button } from "@/components/ui/button";
import { Smartphone, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center text-white space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Eat Wisely?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of users who are already making smarter food choices. 
              Download EatWisely today and transform your relationship with food.
            </p>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-float hover:scale-105 transition-all duration-300"
            >
              <Smartphone className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 shadow-float hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download for Android
            </Button>
          </div>

          {/* Web App Access */}
          <div className="flex items-center justify-center gap-2 text-white/80">
            <span>Or</span>
            <Link to="/dashboard">
              <Button 
                variant="link" 
                className="text-white hover:text-white/80 p-0 h-auto underline-offset-4"
              >
                Try the Web App
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 pt-8 text-white/70">
            <div className="text-center">
              <div className="text-lg font-semibold text-white">4.9★</div>
              <div className="text-sm">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white">50K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white">1M+</div>
              <div className="text-sm">Products Scanned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;