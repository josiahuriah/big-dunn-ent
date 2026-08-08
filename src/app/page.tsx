import Link from 'next/link';
import { Mic, Lightbulb, Layers, Armchair, Medal, Clock, BadgeCheck, CheckCircle, Phone } from 'lucide-react';
import Carousel from '@/src/components/Carousel';
import EmailSubscriptionModal from '@/src/components/EmailSubscriptionModal';
import ReviewForm from '@/src/components/ReviewForm';

export default function HomePage() {
  const slides = [
    {
      image: '/images/carousel1.jpg',
      kicker: 'Nassau’s Premier Rentals',
      title: 'Premier Event Equipment Rental Company',
      subtitle: 'Professional audio, lighting, and staging solutions for unforgettable concerts and festivals.',
      cta: { text: 'Get Your Free Quote', href: '/contact' },
    },
    {
      image: '/images/carousel2.jpg',
      kicker: 'Weddings',
      title: 'Make Your Wedding Day Magical',
      subtitle: 'Transform your special day with stunning lighting, crystal-clear sound, and elegant décor.',
      cta: { text: 'Plan Your Wedding', href: '/contact' },
    },
    {
      image: '/images/carousel3.jpg',
      kicker: 'Celebrations',
      title: 'Celebrate Life’s Special Moments',
      subtitle: 'From baby showers to birthdays, we bring joy and energy to every celebration.',
      cta: { text: 'Book Your Event', href: '/contact' },
    },
    {
      image: '/images/carousel4.jpg',
      kicker: 'Corporate',
      title: 'Elevate Your Corporate Events',
      subtitle: 'Impress clients and inspire teams with world-class audio-visual production.',
      cta: { text: 'Discover Solutions', href: '/contact' },
    },
  ];

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Equipment Items' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const equipment = [
    { Icon: Mic, title: 'Professional Audio', description: 'RCF Line Arrays, Double 18" Subs, Stage Monitors, and Wireless Microphones.', image: '/images/speakers.jpg' },
    { Icon: Lightbulb, title: 'Premium Lighting', description: '50 Wireless Uplights, Intelligent Beam/Wash Lights, LED Panels, and Lasers.', image: '/images/lights.jpg' },
    { Icon: Layers, title: 'Staging & Truss', description: 'Professional staging up to 32x32, full truss rigging systems, and VIP sections.', image: '/images/truss.jpg' },
    { Icon: Armchair, title: 'Event Furniture', description: 'Tables, chairs, cocktail setups, linens, dance floors, and portable bars.', image: '/images/cocktail.jpg' },
  ];

  const benefits = [
    { Icon: Medal, title: 'Premium Quality', desc: 'Top-tier professional equipment from leading brands.' },
    { Icon: Clock, title: 'On-Time Setup', desc: 'Reliable delivery and professional installation.' },
    { Icon: BadgeCheck, title: 'Expert Support', desc: 'Experienced team ensuring flawless execution.' },
  ];

  const packages = [
    { name: 'Bronze', price: '$250', popular: false, features: ['8 Uplights or 1 Static Monogram'], headBg: 'linear-gradient(135deg,#2a2436,#3a3348)' },
    { name: 'Iron', price: '$500', popular: false, features: ['DJ Services – 4 hrs', 'Sound System Included'], headBg: 'linear-gradient(135deg,#3a3348,#4a4360)' },
    { name: 'Rhenium', price: '$650', popular: true, features: ['DJ Services', '8 Uplights', '1 Fog Machine', 'Sound System'], headBg: 'linear-gradient(135deg,#6a26c9,#2f39e8)' },
    { name: 'Gold', price: '$1,300', popular: false, features: ['DJ Services', 'Custom Gobo Heart/Rings', 'Fog Machine', 'Custom Monogram', '8 Aerial Lights', '8 Uplights', 'Gold Microphone'], headBg: 'linear-gradient(135deg,#b8860b,#e0b024)' },
  ];

  return (
    <>
      <EmailSubscriptionModal />

      {/* HERO */}
      <Carousel slides={slides} />

      {/* STATS + WHY CHOOSE (light ground) */}
      <section style={{ background: '#f6f5fa' }} className="px-6 pb-24">
        {/* Floating stats card */}
        <div
          className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-4 bg-white rounded-[20px] px-8 py-11"
          style={{ transform: 'translateY(-64px)', border: '1px solid #ece9f3', boxShadow: '0 30px 70px rgba(22,19,31,0.1)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center px-5 py-1.5" style={{ borderLeft: i === 0 ? '1px solid transparent' : '1px solid #ece9f3' }}>
              <div className="bd-display bd-gradient-text mb-3" style={{ fontSize: 'clamp(30px,3.2vw,44px)', lineHeight: 1 }}>
                {s.number}
              </div>
              <div className="font-semibold text-[13.5px] tracking-[0.03em]" style={{ color: '#5b566b' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mb-[52px]">
            <div className="flex items-center gap-3.5 mb-[18px]">
              <span className="bd-kline" />
              <span className="bd-kicker">Why Big Dunn</span>
            </div>
            <h2 className="bd-display text-ink m-0 mb-[18px]" style={{ fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.2 }}>
              Production-Grade Gear, Handled by Experts
            </h2>
            <p className="text-[17px] leading-[1.7] text-body m-0">
              We bring your vision to life with professional-grade equipment and a team that treats every event like the main event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-[26px]">
            {equipment.map((item, i) => (
              <div key={i} className="bd-card bd-card-hover grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] overflow-hidden">
                <div
                  className="relative min-h-[200px]"
                  style={{ backgroundImage: `url('${item.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(106,38,201,0.35),rgba(16,12,28,0.55))' }} />
                  <div
                    className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <item.Icon size={22} />
                  </div>
                </div>
                <div className="px-6 py-7 flex flex-col justify-center">
                  <h3 className="bd-display text-ink text-[16px] leading-[1.3] m-0 mb-3">{item.title}</h3>
                  <p className="text-[14.5px] leading-[1.65] text-body m-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[26px] bg-white rounded-[18px] p-10 grid md:grid-cols-3 gap-9" style={{ border: '1px solid #ece9f3' }}>
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-purple"
                  style={{ background: 'linear-gradient(135deg,rgba(106,38,201,0.12),rgba(47,57,232,0.12))' }}
                >
                  <b.Icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-ink m-0 mb-[7px]">{b.title}</h4>
                  <p className="text-sm leading-[1.6] text-body m-0">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-3.5 mb-[18px]">
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,transparent,#6a26c9)' }} />
              <span className="bd-kicker">Popular Packages</span>
              <span style={{ height: '2px', width: '40px', background: 'linear-gradient(90deg,#2f39e8,transparent)' }} />
            </div>
            <h2 className="bd-display text-ink m-0 mb-4" style={{ fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.2 }}>
              Event Packages
            </h2>
            <p className="text-[17px] leading-[1.7] text-body m-0">
              Choose a curated package or let us build a custom production for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="relative flex flex-col bg-white rounded-[18px] overflow-hidden transition-all duration-[250ms] hover:-translate-y-1.5"
                style={{
                  border: `1px solid ${pkg.popular ? '#6a26c9' : '#ece9f3'}`,
                  boxShadow: pkg.popular ? '0 24px 55px rgba(106,38,201,0.22)' : '0 12px 30px rgba(22,19,31,0.05)',
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute top-4 right-4 z-[2] text-white font-bold text-[10.5px] tracking-[0.12em] uppercase px-[13px] py-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="h-[104px] flex items-center justify-center relative overflow-hidden" style={{ background: pkg.headBg }}>
                  <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(circle at 70% 20%,rgba(255,255,255,0.22),transparent 60%)' }} />
                  <span className="bd-display text-[22px] text-white relative">{pkg.name}</span>
                </div>
                <div className="px-6 py-7 flex flex-col flex-1">
                  <div className="flex items-baseline gap-1.5 mb-[22px]">
                    <span className="bd-display text-[30px] text-purple">{pkg.price}</span>
                  </div>
                  <div className="flex flex-col gap-3 flex-1 mb-6">
                    {pkg.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle size={18} className="text-blue flex-shrink-0 mt-px" />
                        <span className="text-[13.5px] leading-[1.5] text-body-3">{f}</span>
                      </div>
                    ))}
                  </div>
                  {pkg.popular ? (
                    <Link href="/contact" className="bd-btn bd-btn-gradient bd-btn-block !py-[13px] text-[13px]">Book Now</Link>
                  ) : (
                    <Link href="/contact" className="bd-btn bd-btn-outline bd-btn-block !py-[13px] text-[13px]">Book Now</Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-11">
            <p className="text-[15px] text-body m-0 mb-2">Need something more comprehensive? Premium packages available up to $2,800+</p>
            <Link href="/services/wedding-packages" className="font-bold text-[14px] text-purple no-underline tracking-[0.02em]">
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEW FORM (dark) */}
      <ReviewForm />

      {/* CTA */}
      <section className="bg-white px-6 pb-24">
        <div className="max-w-[1240px] mx-auto bd-cta-band px-12 py-[72px] text-center">
          <div className="relative">
            <h2 className="bd-display text-white m-0 mb-[18px]" style={{ fontSize: 'clamp(24px,3vw,40px)', lineHeight: 1.2 }}>
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-[18px] leading-[1.6] max-w-[560px] mx-auto mb-[34px]" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Let&apos;s bring your vision to life with our professional equipment and expert team.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="bd-btn bd-btn-white">Get Your Free Quote</Link>
              <a href="tel:+12424493010" className="bd-btn bd-btn-glass">
                <Phone size={16} />
                Call 1-242-449-3010
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
