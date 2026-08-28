import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { events, formatPrice } from '@/src/lib/site-data';

export const metadata = {
  title: 'Event Production by Event Type | Big Dunn Entertainment',
  description: 'Production solutions for weddings, concerts, festivals, corporate events, and private celebrations across The Bahamas.',
};

export default function EventsPage() {
  return (
    <>
      <section className="bd-page-hero min-h-[560px]">
        <Image src="/images/Bigdunn%20Photos/concert-1.jpeg" alt="Live event production in The Bahamas" fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="mb-5 flex items-center gap-3.5"><span className="bd-kline" /><span className="bd-kicker-light">What are you planning?</span></div>
          <h1 className="bd-display m-0 max-w-[950px] text-white" style={{ fontSize: 'clamp(34px,5vw,66px)' }}>Production shaped around the occasion.</h1>
          <p className="mb-0 mt-6 max-w-[660px] text-[17px] leading-[1.7] text-on-dark md:text-[20px]">The right technical plan should support the moment—not compete with it. Explore our starting points by event type.</p>
        </div>
      </section>

      <section className="bd-section bg-white">
        <div className="bd-container grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="bd-event-card group min-h-[460px]">
              <Image src={event.image} alt="" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div className="bd-image-card-overlay" />
              <div className="relative z-[2] mt-auto p-7 md:p-10">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.19em] text-purple-soft">Starting at {formatPrice(event.startingAt)}</div>
                <div className="flex items-end justify-between gap-5">
                  <div><h2 className="bd-display m-0 text-[22px] text-white md:text-[27px]">{event.name}</h2><p className="mb-0 mt-3 max-w-[520px] text-[14px] leading-[1.65] text-white/75">{event.description}</p></div>
                  <ArrowUpRight size={22} className="shrink-0 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-alt px-6 py-20">
        <div className="mx-auto flex max-w-[980px] flex-col items-center rounded-[22px] border border-line bg-white px-7 py-12 text-center shadow-[0_16px_44px_rgba(22,19,31,0.06)] md:px-12">
          <span className="bd-kicker">Not seeing your event?</span>
          <h2 className="bd-display mb-4 mt-4 text-ink" style={{ fontSize: 'clamp(24px,3vw,38px)' }}>Start with the plan, not a category.</h2>
          <p className="mb-7 mt-0 max-w-[620px] text-[15.5px] leading-[1.7] text-body">Tell us the venue, audience, programme, and outcome. The Quote Builder will organize the details for our production team.</p>
          <Link href="/quote" className="bd-btn bd-btn-primary">Build your quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
