'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

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
      <button
        onClick={previousSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
} 