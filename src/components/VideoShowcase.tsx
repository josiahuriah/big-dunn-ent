'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileViewport = window.matchMedia('(max-width: 767px)');

    const playVideo = () => {
      video.defaultMuted = true;
      video.muted = true;
      void video.play().catch(() => {
        // Some device settings, including iOS Low Power Mode, can still block autoplay.
      });
    };

    const loadVideo = () => {
      const source = mobileViewport.matches
        ? '/images/Bigdunn%20Photos/vertical-homepage.mp4'
        : '/images/Bigdunn%20Photos/horizontal-homepage.mp4';

      if (video.getAttribute('src') !== source) {
        video.src = source;
        video.load();
      }

      playVideo();
    };

    const resumeWhenVisible = () => {
      if (document.visibilityState === 'visible') playVideo();
    };

    loadVideo();
    video.addEventListener('canplay', playVideo);
    document.addEventListener('visibilitychange', resumeWhenVisible);
    mobileViewport.addEventListener('change', loadVideo);

    return () => {
      video.removeEventListener('canplay', playVideo);
      document.removeEventListener('visibilitychange', resumeWhenVisible);
      mobileViewport.removeEventListener('change', loadVideo);
    };
  }, []);

  return (
    <section className="bd-section overflow-hidden bg-dark">
      <div className="bd-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3.5"><span className="bd-kline" /><span className="bd-kicker-light">Big Dunn in motion</span></div>
          <h2 className="bd-display m-0 text-white" style={{ fontSize: 'clamp(28px,3.7vw,48px)', lineHeight: 1.12 }}>See what it takes to build the moment.</h2>
          <p className="mb-7 mt-5 text-[16px] leading-[1.75] text-on-dark">From the first case off the truck to the final cue, every detail is part of one coordinated production.</p>
          <Link href="/events" className="bd-text-link !text-purple-soft">Explore our work <ArrowRight size={16} /></Link>
        </div>
        <div className="bd-video-showcase-frame">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/Bigdunn%20Photos/concert-2.jpeg"
            aria-label="Big Dunn Entertainment production highlights"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15" />
        </div>
      </div>
    </section>
  );
}
