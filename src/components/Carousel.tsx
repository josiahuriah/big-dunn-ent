'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CarouselSlide {
  image: string;
  kicker: string;
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

export default function Carousel({ slides, autoPlayInterval = 6000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const go = useCallback((i: number) => setCurrent(((i % slides.length) + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), autoPlayInterval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '640px', background: '#100c1c' }}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${s.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: i === current ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 6s ease',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg,rgba(16,12,28,0.92) 0%,rgba(16,12,28,0.72) 42%,rgba(16,12,28,0.25) 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg,rgba(16,12,28,0.55) 0%,transparent 30%,transparent 60%,rgba(16,12,28,0.6) 100%)' }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-[5] h-full max-w-[1240px] mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-[760px]" key={current}>
          <div className="flex items-center gap-3.5 mb-[22px] animate-fadeIn">
            <span className="bd-kline" />
            <span className="bd-kicker-light">{slide.kicker}</span>
          </div>
          <h1
            className="bd-display text-white m-0 mb-6 animate-fadeIn"
            style={{ fontSize: 'clamp(30px,4.4vw,58px)', lineHeight: 1.14, textWrap: 'balance' }}
          >
            {slide.title}
          </h1>
          <p
            className="font-light m-0 mb-9 animate-fadeIn"
            style={{ fontSize: 'clamp(16px,1.5vw,20px)', lineHeight: 1.6, color: '#d9d4e6', maxWidth: '560px' }}
          >
            {slide.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap animate-fadeIn">
            <Link href={slide.cta.href} className="bd-btn bd-btn-primary">
              {slide.cta.text}
              <ArrowRight size={16} />
            </Link>
            <Link href="/services/equipment" className="bd-btn bd-btn-outline-light">
              Explore Equipment
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-[38px] left-0 right-0 z-[6] max-w-[1240px] mx-auto px-6 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1 rounded-full border-none p-0 cursor-pointer transition-all"
            style={{
              width: i === current ? '38px' : '20px',
              background: i === current ? 'linear-gradient(90deg,#6a26c9,#2f39e8)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
