import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Music, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Concert & Event Packages - Big Dunn Entertainment | Nassau Event Production',
  description:
    'Professional concert and event production packages for festivals, corporate events, and large-scale celebrations in Nassau, Bahamas.',
};

const packages = [
  { id: 'core-package', name: 'Core Package', price: '$5,170', image: '/images/event-core.jpeg', description: 'Essential package for small to medium events and outdoor concerts.', idealFor: 'Corporate events, festivals, community gatherings (up to 500 guests)', features: ['3 Stage Monitors', '6 Line Arrays', '4 Double 18 Subs', 'DJ Controller', '12x12 Stage', '15x15 Trussing Rig', 'Basic Lighting', 'Generator', '2 Wireless Mics', 'Professional Engineer'] },
  { id: 'prime-package', name: 'Prime Package', price: '$6,780', image: '/images/event-prime.jpeg', description: 'Enhanced setup with covered staging and advanced lighting effects.', idealFor: 'Outdoor festivals, concerts, large private events (500–1,000 guests)', popular: true, features: ['4 Stage Monitors', '8 Line Arrays', '6 Double 18 Subs', 'DJ Controller', '2 Wireless Mics', '20x16 Stage', '20x20 Trussing Rig', '20x20 Tent Cover', 'Advanced Lighting', 'Generator'] },
  { id: 'premium-package', name: 'Premium Package', price: '$9,095', image: '/images/event-premium.jpeg', description: 'Professional-grade production with LED video wall for maximum impact.', idealFor: 'Major concerts, corporate galas, high-profile events (1,000–2,000 guests)', features: ['5 Stage Monitors', '12 Line Arrays', '8 Double 18 Subs', 'DJ Controller', '20x20 Stage', '20x20 Trussing Rig', 'Advanced Lighting', '8x6 LED Wall', 'Generator', '2 Wireless Mics', 'Professional Engineer'] },
  { id: 'elite-package', name: 'Elite Package', price: '$16,000', image: '/images/event-elite.jpeg', description: 'Our flagship concert package with full production capabilities.', idealFor: 'Large-scale concerts, festivals, major sporting events (2,000+ guests)', features: ['5 Stage Monitors', '16 Line Arrays', '12 Double 18 Subs', 'DJ Controller', '2 Wireless Mics', '28x28 Stage', '30x30 Trussing Rig', '30x30 Roof', 'Speaker Wings', 'Advanced Lighting', '16x9 LED Wall', 'Generator'] },
];

const services = [
  { title: 'Expert Setup', desc: 'Professional installation and sound check by experienced technicians.' },
  { title: 'On-Site Support', desc: 'Dedicated engineer throughout your event to ensure perfect audio.' },
  { title: 'Maintained Inventory', desc: 'Professional equipment prepared and tested for the confirmed production scope.' },
];

export default function EventPackagesPage() {
  const compare = packages.map((p) => ({ name: p.name.replace(' Package', ''), price: p.price, ideal: p.idealFor.split('(')[0].trim(), href: `#${p.id}` }));

  return (
    <>
      {/* HERO */}
      <section className="bd-page-hero">
        <Image src="/images/Bigdunn%20Photos/concert-2.jpeg" alt="Big Dunn concert stage production" fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="flex items-center gap-3.5 mb-[22px]">
            <span style={{ display: 'block', height: '2px', width: '44px', borderRadius: '2px', background: 'linear-gradient(90deg,#2f39e8,#6a26c9)' }} />
            <span className="bd-kicker-light">Concerts &amp; Events</span>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><h1 className="bd-display text-white m-0 mb-5 flex items-center gap-4 flex-wrap" style={{ fontSize: 'clamp(30px,4.6vw,60px)', lineHeight: 1.08 }}><Music size={40} className="text-purple-soft" />Concert &amp; Event Packages</h1><p className="font-light m-0" style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.7, color: '#c4bed5', maxWidth: '670px' }}>Scalable audio, lighting, staging, video, power, and technical support for live audiences across The Bahamas.</p></div><div className="bd-price-lockup shrink-0"><small>Starting at</small><span className="bd-display text-[25px]">$5,170</span><span className="text-[11px] text-white/60">Core package</span></div></div>
        </div>
      </section>

      {/* OVERVIEW + COMPARISON */}
      <section className="bg-white px-6 pt-[88px] pb-10">
        <div className="max-w-[820px] mx-auto mb-[52px] text-center">
          <h2 className="bd-display text-ink m-0 mb-4" style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.25 }}>World-Class Production for Every Scale</h2>
          <p className="text-[16.5px] leading-[1.7] text-body m-0">
            From intimate gatherings to massive festivals, our concert packages deliver professional-grade audio, lighting, and staging that rivals international productions.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {compare.map((c, i) => (
            <a key={i} href={c.href} className="rounded-[16px] px-6 py-[30px] text-center no-underline block transition-all hover:-translate-y-1 hover:!border-purple" style={{ background: '#f6f5fa', border: '1px solid #ece9f3' }}>
              <h3 className="bd-display text-ink text-[15px] m-0 mb-3">{c.name}</h3>
              <div className="bd-display text-[26px] text-purple mb-2.5">{c.price}</div>
              <p className="text-[13px] leading-[1.5] text-body m-0">{c.ideal}</p>
            </a>
          ))}
        </div>
      </section>

      {/* PACKAGE DETAILS */}
      {packages.map((pkg, i) => {
        const imgRight = i % 2 === 1;
        return (
          <section key={pkg.id} id={pkg.id} className="px-6 py-16" style={{ background: i % 2 === 0 ? '#f6f5fa' : '#ffffff' }}>
            <div className="max-w-[1140px] mx-auto">
              <div className="bg-white rounded-[22px] overflow-hidden grid md:grid-cols-2" style={{ border: `1px solid ${pkg.popular ? '#6a26c9' : '#ece9f3'}`, boxShadow: pkg.popular ? '0 26px 60px rgba(106,38,201,0.2)' : '0 16px 40px rgba(22,19,31,0.08)' }}>
                <div className={`relative min-h-[320px] md:min-h-[420px] ${imgRight ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0" style={{ backgroundImage: `url('${pkg.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(61,26,122,0.25),rgba(16,12,28,0.55))' }} />
                  {pkg.popular && (
                    <div className="absolute top-[22px] left-[22px] text-white font-bold text-[11px] tracking-[0.1em] uppercase px-4 py-2 rounded-full" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 8px 20px rgba(106,38,201,0.4)' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-[22px] right-[22px] text-white px-5 py-3.5 rounded-xl" style={{ background: 'rgba(16,12,28,0.8)', backdropFilter: 'blur(4px)' }}>
                    <div className="text-[11.5px] tracking-[0.05em]" style={{ color: '#c9b8f2' }}>Starting at</div>
                    <div className="bd-display text-[22px]">{pkg.price}</div>
                  </div>
                </div>
                <div className={`p-11 flex flex-col justify-between ${imgRight ? 'md:order-1' : ''}`}>
                  <div>
                    <h3 className="bd-display text-ink m-0 mb-3.5" style={{ fontSize: 'clamp(24px,2.6vw,32px)' }}>{pkg.name}</h3>
                    <p className="text-[16px] leading-[1.6] m-0 mb-[18px]" style={{ color: '#4a4557' }}>{pkg.description}</p>
                    <div className="mb-[26px] px-[18px] py-3.5" style={{ background: 'rgba(106,38,201,0.07)', borderLeft: '3px solid #6a26c9', borderRadius: '0 8px 8px 0' }}>
                      <p className="text-[12px] font-bold text-purple uppercase tracking-[0.05em] m-0 mb-1">Ideal For</p>
                      <p className="text-[14px] m-0" style={{ color: '#3a3646' }}>{pkg.idealFor}</p>
                    </div>
                    <h4 className="font-bold text-[14px] text-ink m-0 mb-4 flex items-center gap-2">
                      <CheckCircle size={18} className="text-blue" />
                      Complete Package Includes
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {pkg.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)' }} />
                          <span className="text-[13.5px] leading-[1.5] text-body-3">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-[30px] pt-6 flex flex-col gap-3" style={{ borderTop: '1px solid #f0eef6' }}>
                    <Link href={`/quote?eventType=Concert&package=${encodeURIComponent(pkg.name)}`} className="bd-btn bd-btn-gradient bd-btn-block !py-[15px] text-[13.5px]">
                      Book {pkg.name}
                      <ArrowRight size={17} />
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      <Link href={`/quote?eventType=Concert&package=${encodeURIComponent(pkg.name)}`} className="bd-btn bd-btn-outline !py-3 text-[13px]">Get Quote</Link>
                      <Link href="/services/equipment" className="text-center font-bold text-[13px] no-underline py-3 rounded-[10px] transition-all hover:!border-purple hover:!text-purple" style={{ color: '#5b566b', border: '1px solid #dcd8e6' }}>View Equipment</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-white px-6 py-[88px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-10"><span className="bd-kicker">Recent production</span><h2 className="bd-display mb-0 mt-4 text-ink" style={{ fontSize: 'clamp(25px,3vw,40px)' }}>See the system working as one.</h2></div>
          <div className="grid auto-rows-[230px] gap-5 md:grid-cols-3 md:auto-rows-[330px]">
            {['concert-1.jpeg', 'concert-4.jpeg', 'concert-5.jpeg'].map((photo, index) => <div key={photo} className={`relative overflow-hidden rounded-[20px] ${index === 0 ? 'md:col-span-2' : ''}`}><Image src={`/images/Bigdunn%20Photos/${photo}`} alt={`Big Dunn concert production example ${index + 1}`} fill sizes={index === 0 ? '(max-width: 767px) 100vw, 66vw' : '(max-width: 767px) 100vw, 33vw'} className="object-cover" /></div>)}
          </div>
        </div>
      </section>

      {/* SERVICE INCLUDED */}
      <section className="relative overflow-hidden px-6 py-[88px]" style={{ background: '#100c1c' }}>
        <div className="absolute pointer-events-none" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.16),transparent 70%)' }} />
        <div className="relative max-w-[1000px] mx-auto text-center">
          <h2 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.25 }}>Professional Service Included</h2>
          <p className="text-[16px] m-0 mb-10" style={{ color: '#b6afc9' }}>Every package comes with comprehensive support.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="rounded-[16px] px-[26px] py-8 text-left" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                <CheckCircle size={30} style={{ color: '#8b7fd6' }} />
                <h3 className="font-bold text-[17px] text-white m-0 mt-3.5 mb-2">{s.title}</h3>
                <p className="text-[14px] leading-[1.6] m-0" style={{ color: '#b6afc9' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTIONS */}
      <section className="bg-white px-6 py-[88px]">
        <div className="max-w-[1000px] mx-auto bd-cta-band px-11 py-14 text-center">
          <div className="relative">
            <h3 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: 1.25 }}>Need a Custom Production Solution?</h3>
            <p className="text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-7" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Planning a unique event or need specialized equipment? We create custom packages tailored to your requirements, venue, and budget — from multi-day festivals to corporate product launches.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/quote?eventType=Concert" className="bd-btn bd-btn-white bd-btn-sm">Request Custom Quote</Link>
              <Link href="/services/equipment" className="bd-btn bd-btn-glass bd-btn-sm">Browse Equipment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20" style={{ background: '#100c1c' }}>
        <div className="max-w-[1100px] min-w-0 mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <h3 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.25 }}>Let&apos;s Make Your Event Legendary</h3>
            <p className="text-[17px] leading-[1.6] m-0" style={{ color: '#b6afc9' }}>Our production team is ready to bring your concert or event vision to life.</p>
          </div>
          <div className="flex min-w-0 flex-col gap-3.5">
            <a href="tel:+12424493010" className="flex items-center gap-4 px-6 py-5 rounded-[14px] no-underline transition-all hover:!border-purple" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <Phone size={26} style={{ color: '#8b7fd6' }} />
              <div>
                <div className="text-[12.5px]" style={{ color: '#b6afc9' }}>Call us now</div>
                <div className="text-[18px] font-bold text-white">1-242-449-3010</div>
              </div>
            </a>
            <a href="mailto:info@bigdunnentertainment.com" className="flex items-center gap-4 px-6 py-5 rounded-[14px] no-underline transition-all hover:!border-purple" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <Mail size={26} style={{ color: '#8b7fd6' }} />
              <div>
                <div className="text-[12.5px]" style={{ color: '#b6afc9' }}>Email us</div>
                <div className="break-all text-[15px] font-bold text-white">info@bigdunnentertainment.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
