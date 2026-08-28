import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { formatPrice, services } from '@/src/lib/site-data';
import { notFound } from 'next/navigation';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in The Bahamas | Big Dunn Entertainment`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const quoteHref = `/quote?services=${encodeURIComponent(service.shortName)}${service.slug === 'generator-rentals' ? '&eventType=Generator%20Rental' : ''}`;

  return (
    <>
      <section className="bd-page-hero">
        <Image src={service.image} alt={`${service.name} by Big Dunn Entertainment`} fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="mb-5 flex items-center gap-3.5"><span className="bd-kline" /><span className="bd-kicker-light">{service.eyebrow}</span></div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[820px]">
              <h1 className="bd-display m-0 text-white" style={{ fontSize: 'clamp(34px,5vw,66px)' }}>{service.name}</h1>
              <p className="mb-0 mt-5 max-w-[680px] text-[17px] leading-[1.7] text-on-dark md:text-[20px]">{service.description}</p>
            </div>
            <div className="bd-price-lockup shrink-0"><small>Starting at</small><span className="bd-display text-[25px]">{formatPrice(service.startingAt)}</span><span className="text-[11px] text-white/60">{service.priceContext}</span></div>
          </div>
        </div>
      </section>

      <section className="bd-section bg-white">
        <div className="bd-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="bd-kicker">A considered setup</span>
            <h2 className="bd-display mb-5 mt-4 text-ink" style={{ fontSize: 'clamp(26px,3.4vw,44px)' }}>Built for the event you are actually producing.</h2>
            <p className="m-0 text-[17px] leading-[1.8] text-body">{service.longDescription}</p>
          </div>
          <div className="grid gap-3">
            {service.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3.5 rounded-[15px] border border-line bg-alt px-5 py-4 text-[14px] font-semibold leading-[1.55] text-body-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />{highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.slug === 'generator-rentals' && (
        <section className="bd-section bg-alt">
          <div className="bd-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[24px] border border-line bg-dark shadow-2xl">
              <Image src="/images/Bigdunn%20Photos/generator-rental.jpeg" alt="Big Dunn Generator Rentals pricing flyer" width={1080} height={1350} className="h-auto w-full" />
            </div>
            <div>
              <span className="bd-kicker">Published rental rates</span>
              <h2 className="bd-display mb-5 mt-4 text-ink" style={{ fontSize: 'clamp(27px,3.5vw,44px)' }}>Power from 6 kW to 100 kW.</h2>
              <p className="text-[16px] leading-[1.75] text-body">Eight-hour rates: 6 kW $200 · 30 kW $625 · 60 kW $825 · 100 kW $925. Delivery and fuel are included. Distribution rental is $150 and connection service is $100.</p>
              <p className="text-[13px] leading-[1.65] text-muted">Capacity must be confirmed against the connected load and venue conditions before booking.</p>
            </div>
          </div>
        </section>
      )}

      <section className="bd-section bg-dark">
        <div className="bd-container">
          <div className="mb-12 max-w-[720px]">
            <span className="bd-kicker-light">A simple production path</span>
            <h2 className="bd-display mb-0 mt-4 text-white" style={{ fontSize: 'clamp(26px,3.5vw,44px)' }}>Plan. Confirm. Deliver.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {service.process.map((item, index) => (
              <div key={item} className="rounded-[18px] border border-white/10 bg-white/[0.045] p-7">
                <span className="bd-display text-[12px] text-purple-soft">0{index + 1}</span>
                <p className="mb-0 mt-8 text-[15px] font-semibold leading-[1.65] text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <Link href={quoteHref} className="bd-btn bd-btn-primary">Build a {service.shortName.toLowerCase()} quote <ArrowRight size={16} /></Link>
            <a href="tel:+12424493010" className="bd-btn bd-btn-outline-light"><Phone size={16} /> Ask a specialist</a>
          </div>
        </div>
      </section>
    </>
  );
}
