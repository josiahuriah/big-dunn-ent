import { Suspense } from 'react';
import Image from 'next/image';
import QuoteBuilder from '@/src/components/QuoteBuilder';

export const metadata = {
  title: 'Build an Event Quote | Big Dunn Entertainment',
  description: 'Share your event, package, services, venue, and contact details with Big Dunn Entertainment for a tailored production quote.',
};

export default function QuotePage() {
  return (
    <>
      <section className="bd-page-hero min-h-[510px]">
        <Image src="/images/Bigdunn%20Photos/concert-6.jpeg" alt="Big Dunn live event production" fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1] text-center">
          <div className="mb-5 flex items-center justify-center gap-3.5"><span className="h-0.5 w-10 bg-gradient-to-r from-transparent to-purple" /><span className="bd-kicker-light">Guided quote builder</span><span className="h-0.5 w-10 bg-gradient-to-r from-blue to-transparent" /></div>
          <h1 className="bd-display mx-auto m-0 max-w-[900px] text-white" style={{ fontSize: 'clamp(33px,5vw,64px)' }}>Turn your event brief into a clear starting point.</h1>
          <p className="mx-auto mb-0 mt-6 max-w-[650px] text-[16px] leading-[1.7] text-on-dark md:text-[19px]">Choose a package or build a custom scope. Every detail you provide stays attached to your request for our sales and production team.</p>
        </div>
      </section>
      <section className="bg-alt px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <Suspense fallback={<div className="min-h-[600px] rounded-[24px] border border-line bg-white" />}>
            <QuoteBuilder />
          </Suspense>
        </div>
      </section>
    </>
  );
}
