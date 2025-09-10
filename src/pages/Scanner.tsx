import { useState, useRef } from "react";
import { Camera, X, Zap, ZapOff, RotateCcw, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  
  useKeyboardNavigation(() => navigate(-1));

  const startScanning = async () => {
    setIsScanning(true);
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera access denied:", error);
      setError("Camera access is required to scan food products. Please enable camera permissions.");
      setIsScanning(false);
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
      <div className="min-h-screen bg-background flex items-center justify-center p-4" role="main">
        <Card className="w-full max-w-md bg-gradient-card border-0 shadow-float">
          <CardContent className="p-8 text-center">
            <div className="animate-pulse-glow w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center" aria-hidden="true">
              <Camera className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-semibold text-foreground mb-2">
              Analyzing Your Food
            </h1>
            <p className="text-muted-foreground mb-4">
              Combining ancient Ayurvedic wisdom with modern AI analysis...
            </p>
            <div className="space-y-2 text-sm text-muted-foreground" role="status" aria-live="polite">
              <div className="flex items-center justify-between">
                <span>Scanning ingredients</span>
                <Badge variant="secondary" aria-label="Completed">✓</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Analyzing nutritional content</span>
                <Badge variant="secondary" aria-label="Completed">✓</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Applying Ayurvedic principles</span>
                <LoadingSpinner size="sm" aria-label="Processing" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" role="main">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12 bg-gradient-to-b from-background to-transparent relative z-10" role="banner">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Go back to previous page"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">Scan Food</h1>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setFlashOn(!flashOn)}
            className="rounded-full bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={flashOn ? "Turn off flash" : "Turn on flash"}
            disabled={!isScanning}
          >
            {flashOn ? <Zap className="w-5 h-5" aria-hidden="true" /> : <ZapOff className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>
      </header>

      {/* Camera View */}
      <section className="relative flex-1 mx-4 mb-4 rounded-3xl overflow-hidden bg-muted" aria-label="Camera viewfinder">
        {error ? (
          <div className="w-full h-96 bg-gradient-to-br from-destructive/10 to-destructive/5 flex items-center justify-center p-6">
            <div className="text-center">
              <Camera className="w-16 h-16 text-destructive mx-auto mb-4" aria-hidden="true" />
              <p className="text-destructive text-sm">{error}</p>
              <Button 
                onClick={startScanning} 
                className="mt-4"
                aria-label="Retry camera access"
              >
                Try Again
              </Button>
            </div>
          </div>
        ) : isScanning ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-96 object-cover"
            aria-label="Live camera feed for food scanning"
          />
        ) : (
          <div className="w-full h-96 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
              <p className="text-muted-foreground">Position food product in view</p>
            </div>
          </div>
        )}

        {/* Scanning Overlay */}
        {!error && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-64 h-64 border-2 border-primary/50 rounded-2xl relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
            </div>
          </div>
        )}

        {/* Instructions */}
        {!error && (
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="bg-background/90 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <p className="text-sm text-foreground text-center" role="status">
                  Hold your device steady and center the food product in the frame
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Controls */}
      <section className="p-6 space-y-4" aria-label="Camera controls">
        <div className="flex items-center justify-center gap-8">
          {/* Gallery */}
          <label className="cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-full">
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileUpload}
              aria-label="Upload image from gallery"
            />
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
              <ImageIcon className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
            </div>
          </label>

          {/* Capture Button */}
          <Button
            size="lg"
            onClick={isScanning ? capturePhoto : startScanning}
            disabled={error !== null}
            className="w-20 h-20 rounded-full bg-gradient-primary shadow-float border-4 border-background transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isScanning ? "Capture photo" : "Start camera"}
          >
            <Camera className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
          </Button>

          {/* Switch Camera */}
          <Button 
            variant="ghost" 
            size="icon"
            className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Switch camera"
            disabled={!isScanning}
          >
            <RotateCcw className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
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
      </section>
    </div>
  );
};

export default Scanner;