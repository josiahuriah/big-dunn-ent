import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { events, formatPrice } from '@/src/lib/site-data';
import { notFound } from 'next/navigation';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return {};
  return { title: `${event.name} Production | Big Dunn Entertainment`, description: event.description };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();
  const eventType = event.slug === 'weddings' ? 'Wedding' : event.slug === 'concerts-festivals' ? 'Concert' : event.slug === 'corporate-events' ? 'Corporate Event' : 'Private Party';

  return (
    <>
      <section className="bd-page-hero">
        <Image src={event.image} alt={`${event.name} production by Big Dunn Entertainment`} fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="mb-5 flex items-center gap-3.5"><span className="bd-kline" /><span className="bd-kicker-light">{event.eyebrow}</span></div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[820px]"><h1 className="bd-display m-0 text-white" style={{ fontSize: 'clamp(34px,5vw,66px)' }}>{event.name}</h1><p className="mb-0 mt-5 max-w-[680px] text-[17px] leading-[1.7] text-on-dark md:text-[20px]">{event.description}</p></div>
            <div className="bd-price-lockup shrink-0"><small>Starting at</small><span className="bd-display text-[25px]">{formatPrice(event.startingAt)}</span><span className="text-[11px] text-white/60">{event.priceContext}</span></div>
          </div>
        </div>
      </section>

      <section className="bd-section bg-white">
        <div className="bd-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="bd-kicker">Production possibilities</span>
            <h2 className="bd-display mb-5 mt-4 text-ink" style={{ fontSize: 'clamp(26px,3.5vw,44px)' }}>One coordinated plan for the moments that matter.</h2>
            <p className="mb-0 text-[16px] leading-[1.8] text-body">Select a proven package or use the Quote Builder to combine the services your venue and programme need.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {event.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[15px] border border-line bg-alt px-5 py-5 text-[14px] font-semibold leading-[1.55] text-body-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue" />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bd-section bg-alt">
        <div className="bd-container">
          <div className="mb-10"><span className="bd-kicker">Recent work</span><h2 className="bd-display mb-0 mt-4 text-ink" style={{ fontSize: 'clamp(25px,3vw,38px)' }}>See the production in context.</h2></div>
          <div className="grid auto-rows-[240px] gap-5 md:grid-cols-3 md:auto-rows-[340px]">
            {event.gallery.map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[20px] ${index === 0 ? 'md:col-span-2' : ''}`}><Image src={image} alt={`${event.name} production example ${index + 1}`} fill sizes={index === 0 ? '(max-width: 767px) 100vw, 66vw' : '(max-width: 767px) 100vw, 33vw'} className="object-cover" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bd-section bg-dark">
        <div className="bd-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[760px]"><span className="bd-kicker-light">Ready when you are</span><h2 className="bd-display mb-0 mt-4 text-white" style={{ fontSize: 'clamp(26px,3.4vw,44px)' }}>Turn the event brief into a production plan.</h2></div>
          <Link href={`/quote?eventType=${encodeURIComponent(eventType)}`} className="bd-btn bd-btn-primary shrink-0">Build your quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
