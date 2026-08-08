import Link from 'next/link';
import { Target, Eye, Heart, Medal, Users, Zap, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'About Us - Big Dunn Entertainment | Nassau Event Equipment Experts',
  description:
    "Learn about Big Dunn Entertainment, Nassau's premier event equipment rental company. Discover our story, mission, and commitment to creating unforgettable events.",
};

export default function AboutPage() {
  const values = [
    { Icon: Heart, title: 'Passion for Excellence', desc: 'We pour our heart into every event, treating each celebration as if it were our own.' },
    { Icon: Medal, title: 'Professional Quality', desc: 'Top-tier equipment and expert service that meets international standards.' },
    { Icon: Users, title: 'Client-Focused', desc: 'Your vision drives us. We listen, adapt, and deliver exactly what you need.' },
    { Icon: Zap, title: 'Innovation', desc: 'Staying ahead with the latest technology and creative event solutions.' },
    { Icon: ShieldCheck, title: 'Reliability', desc: 'Dependable service you can count on, every time, without exception.' },
    { Icon: Target, title: 'Attention to Detail', desc: 'Perfecting every element to ensure seamless, memorable experiences.' },
  ];

  const timeline = [
    { year: '2014', title: 'The Beginning', desc: 'Founded by Glenn Williams Jr. with a vision to revolutionize event entertainment in Nassau.' },
    { year: '2016', title: 'Major Expansion', desc: 'Invested in professional-grade RCF audio systems and intelligent lighting equipment.' },
    { year: '2019', title: 'Industry Leader', desc: "Became Nassau's go-to provider for large-scale concerts and corporate events." },
    { year: '2024', title: 'Today', desc: 'Serving 500+ events annually with cutting-edge equipment and exceptional service.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6" style={{ background: '#100c1c', paddingTop: '180px', paddingBottom: '96px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-140px', right: '-60px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.4),transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-160px', left: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(47,57,232,0.3),transparent 70%)' }} />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3.5 mb-[22px]">
            <span className="bd-kline" />
            <span className="bd-kicker-light">Our Story</span>
          </div>
          <h1 className="bd-display text-white m-0 mb-[22px]" style={{ fontSize: 'clamp(32px,4.6vw,60px)', lineHeight: 1.12 }}>
            About Big Dunn
          </h1>
          <p className="font-light m-0" style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.6, color: '#c4bed5', maxWidth: '620px' }}>
            Transforming visions into unforgettable experiences through professional audio-visual excellence.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-[72px] items-center">
          <div>
            <div className="flex items-center gap-3.5 mb-[18px]">
              <span className="bd-kline" />
              <span className="bd-kicker">Our Story</span>
            </div>
            <h2 className="bd-display text-ink m-0 mb-6" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
              Born From a Passion for Extraordinary Moments
            </h2>
            <div className="flex flex-col gap-[18px] text-[15.5px] leading-[1.75]" style={{ color: '#4a4557' }}>
              <p className="m-0">
                Big Dunn Entertainment was born from a passion for creating extraordinary moments. Founded by{' '}
                <strong className="text-ink">Glenn Williams Jr.</strong>, a visionary young Bahamian entrepreneur, our company has
                grown from humble beginnings to become Nassau&apos;s most trusted name in event equipment and entertainment.
              </p>
              <p className="m-0">
                What started as a dream to elevate the entertainment industry in The Bahamas has evolved into a full-service
                audio-visual company delivering world-class solutions. Every event — whether an intimate wedding or a large-scale
                concert — deserves the same dedication, precision, and professional excellence.
              </p>
              <p className="m-0">
                Today, we&apos;re proud to serve over 500 events annually, from elegant weddings at premier venues to high-energy
                concerts and corporate galas.
              </p>
            </div>
            <div className="mt-[26px] pl-5" style={{ borderLeft: '3px solid #6a26c9' }}>
              <p className="m-0 font-semibold text-[16px] leading-[1.6] italic" style={{ color: '#3d1a7a' }}>
                &ldquo;Ideas for Life&rdquo; isn&apos;t just our tagline — it&apos;s our promise to bring your vision to life with
                creativity, expertise, and unwavering dedication.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[20px] overflow-hidden aspect-square" style={{ boxShadow: '0 30px 70px rgba(22,19,31,0.16)' }}>
              <div className="absolute inset-0" style={{ backgroundImage: "url('/images/team.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,transparent 55%,rgba(61,26,122,0.5))' }} />
            </div>
            <div
              className="absolute text-white text-center px-[30px] py-6 rounded-[16px]"
              style={{ bottom: '-26px', right: '-26px', background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 20px 44px rgba(106,38,201,0.4)' }}
            >
              <div className="bd-display text-[34px] leading-none">10+</div>
              <div className="font-semibold text-[12px] tracking-[0.06em] mt-1.5 uppercase">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-24" style={{ background: '#f6f5fa' }}>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-7">
          <div className="relative text-white p-12 rounded-[20px] overflow-hidden" style={{ background: 'linear-gradient(135deg,#3d1a7a,#6a26c9 60%,#2f39e8)', boxShadow: '0 24px 55px rgba(106,38,201,0.28)' }}>
            <div className="absolute" style={{ top: '-60px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,0.16),transparent 70%)' }} />
            <div className="relative">
              <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center mb-6" style={{ background: 'rgba(255,255,255,0.16)' }}>
                <Target size={28} className="text-white" />
              </div>
              <h3 className="bd-display text-2xl m-0 mb-4">Our Mission</h3>
              <p className="text-[15.5px] leading-[1.75] m-0" style={{ color: 'rgba(255,255,255,0.88)' }}>
                To deliver top-quality, customizable audio-visual solutions using the latest technology — comprehensive, reliable
                services that transform events into unforgettable experiences through innovation, expertise, and exceptional
                customer service.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[20px]" style={{ border: '1px solid #ece9f3', boxShadow: '0 12px 30px rgba(22,19,31,0.05)' }}>
            <div className="w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-purple mb-6" style={{ background: 'linear-gradient(135deg,rgba(106,38,201,0.12),rgba(47,57,232,0.12))' }}>
              <Eye size={28} />
            </div>
            <h3 className="bd-display text-ink text-2xl m-0 mb-4">Our Vision</h3>
            <p className="text-[15.5px] leading-[1.75] m-0" style={{ color: '#4a4557' }}>
              To be the Caribbean&apos;s premier event equipment and entertainment company — recognized for setting industry
              standards in quality, innovation, and client satisfaction, where every event we touch becomes a masterpiece of
              creativity and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-3.5 mb-[18px]">
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,transparent,#6a26c9)' }} />
              <span className="bd-kicker">Core Values</span>
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,#2f39e8,transparent)' }} />
            </div>
            <h2 className="bd-display text-ink m-0" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
              What Guides Everything We Do
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bd-card bd-card-hover p-8">
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-white mb-[22px]" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)' }}>
                  <v.Icon size={26} />
                </div>
                <h3 className="font-bold text-[18px] text-ink m-0 mb-2.5">{v.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-body m-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="relative overflow-hidden px-6 py-24" style={{ background: '#100c1c' }}>
        <div className="absolute pointer-events-none" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.18),transparent 70%)' }} />
        <div className="relative max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3.5 mb-[18px]">
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,transparent,#8b7fd6)' }} />
              <span className="bd-kicker-light" style={{ letterSpacing: '0.3em' }}>Our Journey</span>
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,#8b7fd6,transparent)' }} />
            </div>
            <h2 className="bd-display text-white m-0" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
              A Decade of Growth
            </h2>
          </div>
          <div className="relative flex flex-col gap-[22px]">
            <div className="absolute hidden sm:block" style={{ left: '36px', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(180deg,#6a26c9,#2f39e8)' }} />
            {timeline.map((t, i) => (
              <div key={i} className="relative flex gap-7 items-start">
                <div
                  className="relative z-[2] flex-shrink-0 w-[74px] h-[74px] rounded-full flex items-center justify-center bd-display text-[14px]"
                  style={{ background: '#100c1c', border: '2px solid #6a26c9', color: '#c9b8f2' }}
                >
                  {t.year}
                </div>
                <div className="flex-1 rounded-[16px] px-[30px] py-[26px]" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                  <h3 className="font-bold text-[19px] text-white m-0 mb-2">{t.title}</h3>
                  <p className="text-[14.5px] leading-[1.65] m-0" style={{ color: '#b6afc9' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-24" style={{ background: '#f6f5fa' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="bd-kicker">Meet Our Founder</span>
            <h2 className="bd-display text-ink m-0 mt-3.5" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
              The Visionary Behind Big Dunn
            </h2>
          </div>
          <div className="bg-white rounded-[22px] overflow-hidden grid md:grid-cols-[0.9fr_1.1fr]" style={{ border: '1px solid #ece9f3', boxShadow: '0 24px 55px rgba(22,19,31,0.1)' }}>
            <div className="relative min-h-[420px]">
              <div className="absolute inset-0" style={{ backgroundImage: "url('/images/glenn.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,transparent 60%,rgba(61,26,122,0.4))' }} />
            </div>
            <div className="p-12 flex flex-col justify-center">
              <h3 className="bd-display text-ink text-2xl m-0 mb-2">Glenn Williams Jr.</h3>
              <p className="font-bold text-[13px] tracking-[0.08em] uppercase text-purple m-0 mb-[22px]">Founder &amp; CEO</p>
              <p className="text-[15px] leading-[1.75] m-0 mb-5" style={{ color: '#4a4557' }}>
                A youthful Bahamian entrepreneur with unmatched dedication and precision, Glenn consistently exceeds client
                expectations. With a commitment to innovation and excellence, he leads Big Dunn Entertainment in staying ahead of
                industry trends to offer cutting-edge solutions and exceptional service.
              </p>
              <p className="text-[15.5px] leading-[1.7] italic m-0" style={{ color: '#3d1a7a' }}>
                &ldquo;Every event is an opportunity to create something extraordinary. That&apos;s what drives me and our entire team
                every single day.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24" style={{ background: '#f6f5fa' }}>
        <div className="max-w-[1240px] mx-auto bd-cta-band px-12 py-[72px] text-center">
          <div className="relative">
            <h2 className="bd-display text-white m-0 mb-[18px]" style={{ fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.2 }}>
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-[18px] leading-[1.6] max-w-[520px] mx-auto mb-[34px]" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Experience the Big Dunn difference for your next event.
            </p>
            <Link href="/contact" className="bd-btn bd-btn-white">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
