import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
  className?: string;
  imageClassName?: string;
}

export function Carousel({ images, className = "", imageClassName = "" }: CarouselProps) {
  // ... existing carousel logic ...

  return (
    <div className={cn("relative w-full h-full", className)}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn(
            "absolute w-full h-full transition-opacity duration-500",
            currentIndex === index ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className={cn(
              "transition-transform duration-300",
              image.className,
              imageClassName
            )}
          />
        </div>
      ))}
      {/* ... existing navigation buttons ... */}
    </div>
  );
} 