import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { formatPrice, services } from '@/src/lib/site-data';

export const metadata = {
  title: 'Event Production Services | Big Dunn Entertainment',
  description: 'Explore professional audio, lighting, staging, video, generator power, and event rental services in The Bahamas.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bd-page-hero min-h-[560px]">
        <Image src="/images/Bigdunn%20Photos/concert-5.jpeg" alt="Big Dunn concert production" fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="mb-5 flex items-center gap-3.5"><span className="bd-kline" /><span className="bd-kicker-light">What we do</span></div>
          <h1 className="bd-display m-0 max-w-[900px] text-white" style={{ fontSize: 'clamp(34px,5vw,66px)' }}>Production services that work as one.</h1>
          <p className="mb-0 mt-6 max-w-[660px] text-[17px] leading-[1.7] text-on-dark md:text-[20px]">Choose a focused rental or bring us in for the complete technical production—from power-on to final strike.</p>
        </div>
      </section>

      <section className="bd-section bg-alt">
        <div className="bd-container">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group grid overflow-hidden rounded-[22px] border border-line bg-white text-ink no-underline shadow-[0_16px_42px_rgba(22,19,31,0.07)] transition-all hover:-translate-y-1 hover:text-ink md:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[280px] overflow-hidden">
                  <Image src={service.image} alt="" fill sizes="(max-width: 767px) 100vw, 42vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-dark/65 px-3 py-1.5 font-michroma text-[10px] text-white backdrop-blur-md">0{index + 1}</span>
                </div>
                <div className="flex flex-col justify-center p-7 md:p-9">
                  <div className="mb-3 text-[10.5px] font-extrabold uppercase tracking-[0.19em] text-purple">Starting at {formatPrice(service.startingAt)}</div>
                  <h2 className="bd-display m-0 text-[20px] leading-[1.3]">{service.name}</h2>
                  <p className="mb-5 mt-3 text-[14px] leading-[1.65] text-body">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.05em] text-purple">Service details <ArrowUpRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mb-0 mt-5 text-[12px] leading-[1.6] text-muted">Starting prices are entry package or published rental rates. Your quote will reflect venue, duration, quantities, transport, setup, and operating requirements.</p>
        </div>
      </section>

      <section className="bd-section bg-white">
        <div className="bd-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="bd-kicker">How we work</span>
            <h2 className="bd-display mb-0 mt-4 text-ink" style={{ fontSize: 'clamp(27px,3.5vw,44px)' }}>The right gear starts with the right questions.</h2>
          </div>
          <div className="grid gap-3">
            {['Tell us about the event, venue, audience, and programme.', 'We shape the technical scope and flag the decisions that affect cost.', 'You receive a clear starting quote for review and refinement.'].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[16px] border border-line bg-alt px-5 py-5">
                <span className="bd-display text-[13px] text-purple">0{index + 1}</span>
                <span className="text-[14.5px] font-semibold leading-[1.6] text-body-3">{item}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-start-2">
            <Link href="/quote" className="bd-btn bd-btn-primary">Build your quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
