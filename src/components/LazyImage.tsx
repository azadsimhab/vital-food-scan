import { useState, ImgHTMLAttributes } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  priority?: boolean;
}

const LazyImage = ({ 
  src, 
  alt, 
  fallback = "/placeholder.svg", 
  className, 
  priority = false,
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ triggerOnce: true });

  const shouldLoad = priority || isVisible;
  const imageSrc = hasError ? fallback : src;

  return (
    <div 
      ref={elementRef as any}
      className={cn("relative overflow-hidden", className)}
      role="img"
      aria-label={alt}
    >
      {shouldLoad && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
      
      {!isLoaded && shouldLoad && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            className
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LazyImage;