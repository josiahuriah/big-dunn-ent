import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import Carousel from '@/src/components/Carousel';
import EmailSubscriptionModal from '@/src/components/EmailSubscriptionModal';
import ReviewForm from '@/src/components/ReviewForm';
import VideoShowcase from '@/src/components/VideoShowcase';
import { events, formatPrice, services } from '@/src/lib/site-data';

const promises = [
  'One accountable production team',
  'Professional delivery, setup, and breakdown',
  'Clear scope before your event date',
];

export default function HomePage() {
  const slides = [
    {
      image: '/images/Bigdunn%20Photos/concert-2.jpeg',
    },
    {
      image: '/images/Bigdunn%20Photos/wedding-decor-2.jpeg',
    },
    {
      image: '/images/Bigdunn%20Photos/concert-5.jpeg',
    },
    {
      image: '/images/Bigdunn%20Photos/exlusive-setup.jpeg',
    },
  ];

  return (
    <>
      <EmailSubscriptionModal />
      <Carousel slides={slides} />

      <section className="bd-section bg-white">
        <div className="bd-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3.5">
              <span className="bd-kline" />
              <span className="bd-kicker">One production partner</span>
            </div>
            <h2 className="bd-display m-0 text-ink" style={{ fontSize: 'clamp(28px,4vw,52px)', lineHeight: 1.12 }}>
              From first idea to final cue.
            </h2>
          </div>
          <div>
            <p className="m-0 max-w-[650px] text-[17px] leading-[1.75] text-body md:text-[19px]">
              Big Dunn Entertainment brings the technical pieces of an event together—audio, lighting, staging, video, power, and rentals—so your team has fewer handoffs and a production built around the actual venue.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {promises.map((promise) => (
                <div key={promise} className="flex items-start gap-2.5 text-[13px] font-semibold leading-[1.5] text-body-3">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue" />
                  {promise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoShowcase />

      <section className="bd-section bg-alt" id="services">
        <div className="bd-container">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[720px]">
              <span className="bd-kicker">Core services</span>
              <h2 className="bd-display mb-0 mt-4 text-ink" style={{ fontSize: 'clamp(28px,3.6vw,46px)' }}>
                The technical foundation for a better event.
              </h2>
            </div>
            <Link href="/services" className="bd-text-link">
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bd-image-card group min-h-[430px]"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="bd-image-card-index">0{index + 1}</span>
                <div className="bd-image-card-overlay" />
                <div className="relative z-[2] mt-auto p-7">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-soft">
                    Starting at {formatPrice(service.startingAt)}
                  </div>
                  <h3 className="bd-display m-0 text-[19px] text-white">{service.name}</h3>
                  <p className="mb-0 mt-3 text-[14px] leading-[1.65] text-white/75">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-white">
                    Explore <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mb-0 mt-5 text-[12px] leading-[1.6] text-muted">
            Starting prices reflect the entry package or rental shown. Final pricing depends on venue, duration, quantities, delivery, setup, and technical requirements.
          </p>
        </div>
      </section>

      <section className="bd-section bg-white" id="events">
        <div className="bd-container">
          <div className="mb-12 text-center">
            <span className="bd-kicker">Built around the occasion</span>
            <h2 className="bd-display mx-auto mb-0 mt-4 max-w-[780px] text-ink" style={{ fontSize: 'clamp(28px,3.6vw,46px)' }}>
              Different events. One production standard.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`} className="bd-event-card group">
                <Image
                  src={event.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="bd-image-card-overlay" />
                <div className="relative z-[2] mt-auto flex items-end justify-between gap-5 p-7 md:p-9">
                  <div>
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-soft">
                      Starting at {formatPrice(event.startingAt)}
                    </div>
                    <h3 className="bd-display m-0 text-[20px] text-white md:text-[24px]">{event.name}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewForm />

      <section className="bd-section bg-white">
        <div className="bd-container">
          <div className="bd-cta-band grid gap-8 px-7 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-14 md:py-16">
            <div className="relative">
              <div className="mb-4 flex items-center gap-3 text-purple-soft">
                <Sparkles size={18} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Your event starts here</span>
              </div>
              <h2 className="bd-display m-0 max-w-[760px] text-white" style={{ fontSize: 'clamp(25px,3.2vw,42px)' }}>
                Tell us what you’re building. We’ll help shape the production.
              </h2>
            </div>
            <div className="relative flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link href="/quote" className="bd-btn bd-btn-white">Get a quote <ArrowRight size={16} /></Link>
              <a href="tel:+12424493010" className="bd-btn bd-btn-glass"><Phone size={16} /> 1-242-449-3010</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
