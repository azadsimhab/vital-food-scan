import { useState, useRef } from "react";
import { Camera, X, Zap, ZapOff, RotateCcw, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const startScanning = async () => {
    setIsScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access denied:", error);
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const capturePhoto = () => {
    setHasScanned(true);
    stopScanning();
    // Simulate analysis delay
    setTimeout(() => {
      navigate('/food-analysis');
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHasScanned(true);
      setTimeout(() => {
        navigate('/food-analysis');
      }, 2000);
    }
  };

  if (hasScanned) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gradient-card border-0 shadow-float">
          <CardContent className="p-8 text-center">
            <div className="animate-pulse-glow w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Camera className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Analyzing Your Food
            </h2>
            <p className="text-muted-foreground mb-4">
              Combining ancient Ayurvedic wisdom with modern AI analysis...
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Scanning ingredients</span>
                <Badge variant="secondary">✓</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Analyzing nutritional content</span>
                <Badge variant="secondary">✓</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Applying Ayurvedic principles</span>
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-background to-transparent relative z-10">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Scan Food</h1>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setFlashOn(!flashOn)}
            className="rounded-full bg-background/80 backdrop-blur-sm"
          >
            {flashOn ? <Zap className="w-5 h-5" /> : <ZapOff className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Camera View */}
      <div className="relative flex-1 mx-4 mb-4 rounded-3xl overflow-hidden bg-muted">
        {isScanning ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-96 object-cover"
          />
        ) : (
          <div className="w-full h-96 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Position food product in view</p>
            </div>
          </div>
        )}

        {/* Scanning Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-primary/50 rounded-2xl relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="bg-background/90 backdrop-blur-sm border-0">
            <CardContent className="p-4">
              <p className="text-sm text-foreground text-center">
                Hold your device steady and center the food product in the frame
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-center gap-8">
          {/* Gallery */}
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-muted-foreground" />
            </div>
          </label>

          {/* Capture Button */}
          <Button
            size="lg"
            onClick={isScanning ? capturePhoto : startScanning}
            className="w-20 h-20 rounded-full bg-gradient-primary shadow-float border-4 border-background"
          >
            <Camera className="w-8 h-8 text-primary-foreground" />
          </Button>

          {/* Switch Camera */}
          <Button 
            variant="ghost" 
            size="icon"
            className="w-12 h-12 rounded-full bg-muted"
          >
            <RotateCcw className="w-6 h-6 text-muted-foreground" />
          </Button>
        </div>

        {/* Quick Tips */}
        <Card className="bg-secondary/50 border-0">
          <CardContent className="p-4">
            <h3 className="font-medium text-foreground mb-2">📸 Scanning Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ensure good lighting</li>
              <li>• Include ingredient labels</li>
              <li>• Keep camera steady</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scanner;