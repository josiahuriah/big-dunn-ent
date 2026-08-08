import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Wedding Packages - Big Dunn Entertainment | Nassau Wedding Equipment',
  description:
    'Explore our premium wedding packages designed to make your special day unforgettable. From intimate ceremonies to grand celebrations in Nassau, Bahamas.',
};

type Pkg = {
  name: string; price: string; setupFee: string; image: string; description: string; features: string[]; popular?: boolean;
};

const tiers: { id: string; name: string; bg: string; blurb: string; packages: Pkg[] }[] = [
  {
    id: 'essentials', name: 'Essentials', bg: '#f6f5fa', blurb: 'Perfect for intimate ceremonies and budget-conscious couples.',
    packages: [
      { name: 'Bronze', price: '$250', setupFee: 'Setup fee not included', image: '/images/wedding-bronze.jpeg', description: 'Perfect for intimate ceremonies and small receptions.', features: ['8 Uplights', 'OR', '1 Static Monogram'] },
      { name: 'Iron', price: '$500', setupFee: 'Setup fee not included', image: '/images/wedding-iron.jpeg', description: 'Essential entertainment package for memorable celebrations.', features: ['DJ Services – 4 hours', 'Sound System Included'] },
      { name: 'Rhenium', price: '$650', setupFee: 'Setup fee not included', image: '/images/wedding-rhenium.jpeg', description: 'Enhanced package with lighting and atmospheric effects.', features: ['DJ Services', '8 Uplights', '1 Fog Machine', 'Sound System Included'], popular: true },
    ],
  },
  {
    id: 'supreme', name: 'Supreme', bg: '#ffffff', blurb: 'Elevated elegance with sophisticated lighting design.',
    packages: [
      { name: 'Silver', price: '$750', setupFee: 'Setup fee not included', image: '/images/wedding-silver.jpeg', description: 'Elegant lighting design for sophisticated venues.', features: ['8 Uplights', '8 Head Table & Backdrop Lights', '1 Custom Animated Monogram'] },
      { name: 'Palladium', price: '$800', setupFee: 'Setup fee not included', image: '/images/wedding-palladium.jpeg', description: 'Premium intelligent lighting with dynamic effects.', features: ['1 Custom Animated Monogram', 'Intelligent Light', '2 RGB Fog Machines', '6 Head Table & Backdrop Lights', '8 Uplights'] },
      { name: 'Ruthenium', price: '$1,100', setupFee: 'Setup fee not included', image: '/images/wedding-ruthenium.jpeg', description: 'Complete entertainment solution with aerial lighting.', features: ['DJ Services', '6 Uplights', '8 Aerial Lights', '8 Head Table & Backdrop Lights', '1 Gold Microphone', 'Sound System Included'] },
    ],
  },
  {
    id: 'elite', name: 'Elite', bg: '#f6f5fa', blurb: 'Luxury packages with spectacular effects and premium service.',
    packages: [
      { name: 'Gold', price: '$1,300', setupFee: 'Setup fee included', image: '/images/wedding-gold.jpeg', description: 'Luxurious package with custom projection and premium sound.', features: ['DJ Services', 'Custom Gobo Heart or Rings', 'Fog Machine', 'Custom Monogram', '8 Aerial Lights', '8 Uplights', '8 Head Table & Backdrop Lights', '1 Gold Microphone'] },
      { name: 'Platinum', price: '$1,500', setupFee: 'Setup fee included', image: '/images/wedding-platinum.jpeg', description: 'Spectacular effects including spark machine for dramatic moments.', features: ['1 Custom Animated Monogram', 'Intelligent Light', '2 Lighting Stands', '1 Spark Machine', '8 Head Table & Backdrop Lights', '12 Uplights'] },
      { name: 'Rhodium', price: '$2,000', setupFee: 'Setup fee included', image: '/images/wedding-rhodium.jpeg', description: 'Our most comprehensive wedding package for grand celebrations.', features: ['1 Custom Monogram', '1 Intelligent Light', '8 Head Table & Backdrop Lights', '12 Aerial Lights', '2 Lighting Stands', '2 Fog Machines', '24 Uplights', '2 Spark Machines'] },
    ],
  },
  {
    id: 'exclusive', name: 'Exclusive', bg: '#ffffff', blurb: 'The ultimate wedding experience for grand celebrations.',
    packages: [
      { name: 'Exclusive Plus', price: '$2,800', setupFee: 'Setup fee included', image: '/images/wedding-exclusive.jpeg', description: 'The ultimate wedding experience with throne chairs and complete entertainment.', features: ['DJ Services & Sound', '2 Custom Monograms', '1 Gold Microphone', '2 RGB Fog Machines', '12 Aerial Lights', '12 Head Table & Backdrop Lighting', '24 Uplights', '2 Spark Machines', '2 Throne Chairs'] },
    ],
  },
];

export default function WeddingPackagesPage() {
  const tabs = ['Essentials', 'Supreme', 'Elite', 'Exclusive'];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6" style={{ background: '#100c1c', paddingTop: '170px', paddingBottom: '96px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-140px', right: '-60px', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.4),transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-140px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(47,57,232,0.3),transparent 70%)' }} />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="flex items-center gap-3.5 mb-[22px]">
            <span className="bd-kline" />
            <span className="bd-kicker-light">Weddings</span>
          </div>
          <h1 className="bd-display text-white m-0 mb-5" style={{ fontSize: 'clamp(30px,4.4vw,56px)', lineHeight: 1.12 }}>Wedding Packages</h1>
          <p className="font-light m-0" style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.6, color: '#c4bed5', maxWidth: '620px' }}>
            Transform your special day into an unforgettable celebration with our premium wedding entertainment packages.
          </p>
        </div>
      </section>

      {/* STICKY TIER NAV */}
      <div className="sticky z-40 px-6 py-4" style={{ top: '76px', background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #ece9f3' }}>
        <div className="max-w-[1240px] mx-auto flex justify-center gap-3 flex-wrap">
          {tabs.map((t) => (
            <a
              key={t}
              href={`#${t.toLowerCase()}`}
              className="px-[22px] py-[9px] rounded-full font-bold text-[13px] tracking-[0.02em] no-underline transition-all hover:!bg-purple hover:!text-white hover:!border-purple"
              style={{ background: '#f2eff9', border: '1px solid #e5dff5', color: '#3d1a7a' }}
            >
              {t}
            </a>
          ))}
        </div>
      </div>

      {/* TIERS */}
      {tiers.map((tier) => (
        <section key={tier.id} id={tier.id} className="px-6 py-[88px]" style={{ background: tier.bg }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="bd-kicker">{tier.name}</span>
              <h2 className="bd-display text-ink m-0 my-3" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>{tier.name} Packages</h2>
              <p className="text-[16px] text-body m-0 max-w-[560px] mx-auto">{tier.blurb}</p>
            </div>

            <div className="flex flex-col gap-7">
              {tier.packages.map((pkg, i) => {
                const feeColor = pkg.setupFee.includes('not') ? '#c2410c' : '#15803d';
                return (
                  <div
                    key={i}
                    className="relative bg-white rounded-[20px] overflow-hidden grid md:grid-cols-[0.85fr_1.15fr] transition-all duration-[250ms] hover:-translate-y-1"
                    style={{ border: `1px solid ${pkg.popular ? '#6a26c9' : '#ece9f3'}`, boxShadow: pkg.popular ? '0 24px 55px rgba(106,38,201,0.2)' : '0 12px 30px rgba(22,19,31,0.05)' }}
                  >
                    <div className="relative min-h-[280px] md:min-h-[340px]">
                      <div className="absolute inset-0" style={{ backgroundImage: `url('${pkg.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,transparent 55%,rgba(61,26,122,0.35))' }} />
                      {pkg.popular && (
                        <div className="absolute top-5 left-5 text-white font-bold text-[11px] tracking-[0.1em] uppercase px-4 py-2 rounded-full" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 8px 20px rgba(106,38,201,0.4)' }}>
                          Most Popular
                        </div>
                      )}
                    </div>
                    <div className="p-10 flex flex-col justify-between">
                      <div>
                        <h3 className="bd-display text-ink text-[26px] m-0 mb-2.5">{pkg.name}</h3>
                        <p className="text-[14.5px] leading-[1.6] text-body m-0 mb-[18px]">{pkg.description}</p>
                        <div className="flex items-baseline gap-2 mb-1.5">
                          <span className="bd-display text-[38px] text-purple">{pkg.price}</span>
                          <span className="text-[14px]" style={{ color: '#8b869a' }}>per event</span>
                        </div>
                        <p className="text-[12.5px] font-semibold m-0 mb-6" style={{ color: feeColor }}>{pkg.setupFee}</p>
                        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-2">
                          {pkg.features.map((f, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle size={16} className="text-blue flex-shrink-0 mt-0.5" />
                              <span className="text-[13.5px] leading-[1.45] text-body-3">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-[26px] flex flex-col gap-3">
                        <Link href="/contact" className="bd-btn bd-btn-gradient bd-btn-block !py-[15px] text-[13.5px]">
                          Book This Package
                          <ArrowRight size={17} />
                        </Link>
                        <Link href="/contact" className="text-center text-purple font-bold text-[13.5px] no-underline hover:text-blue transition-colors">
                          Request Custom Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CUSTOM NOTE */}
      <section className="bg-white px-6 py-[88px]">
        <div className="max-w-[1000px] mx-auto bd-cta-band px-11 py-14 text-center">
          <div className="relative">
            <h3 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: 1.25 }}>Need Something Custom?</h3>
            <p className="text-[16px] leading-[1.65] max-w-[560px] mx-auto mb-7" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We specialize in bespoke packages tailored to your unique vision and budget. Mix and match equipment, add special effects, or build your dream setup from scratch.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/contact" className="bd-btn bd-btn-white bd-btn-sm">Get Custom Quote</Link>
              <Link href="/services/equipment" className="bd-btn bd-btn-glass bd-btn-sm">View Equipment List</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20" style={{ background: '#100c1c' }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <h3 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.25 }}>Ready to Plan Your Perfect Wedding?</h3>
            <p className="text-[17px] leading-[1.6] m-0" style={{ color: '#b6afc9' }}>Our wedding specialists are here to help you create the celebration of your dreams.</p>
          </div>
          <div className="flex flex-col gap-3.5">
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
                <div className="text-[15px] font-bold text-white">info@bigdunnentertainment.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
