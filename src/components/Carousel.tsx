'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: {
    text: string;
    href: string;
  };
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full">
            <div className="container-custom h-full flex items-center">
              <div className="max-w-2xl space-y-6 text-white">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.cta.href}
                  className="inline-block bg-secondary-green hover:bg-primary-purple text-neutral-dark hover:text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  {slide.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide()
          setIsAutoPlaying(false)
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          nextSlide()
          setIsAutoPlaying(false)
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide
                ? "bg-secondary-green w-8"
                : "bg-white/50 hover:bg-white/70 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}