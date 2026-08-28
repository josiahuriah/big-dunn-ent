import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mic, Lightbulb, Layers, Armchair, Sparkles, Plug, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Equipment Inventory - Big Dunn Entertainment | Professional AV Equipment Rental',
  description:
    'Browse our comprehensive inventory of professional audio, lighting, staging, and event equipment available for rent in Nassau, Bahamas.',
};

type Item = { name: string; quantity: string; image: string; description: string; fit?: 'cover' | 'contain'; isNew?: boolean };
const categories: { id: string; title: string; Icon: typeof Mic; items: Item[] }[] = [
  { id: 'audio', title: 'Professional Audio', Icon: Mic, items: [
    { name: 'RCF HDL 30 Line Array', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/RCF-HDL-30-Line-Arrays.jpeg', description: 'Touring-grade line-array module for powerful, even audience coverage.', fit: 'contain', isNew: true },
    { name: 'RCF HDL 20 Line Array', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/RCF-HDL-20-Line-Arrays.jpeg', description: 'Compact active line-array module for scalable event sound systems.', fit: 'contain', isNew: true },
    { name: 'Yorkville EXM10 Monitor', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/Yorkville-EXM10-Monitor.jpeg', description: 'Portable battery-powered monitor for stages, ceremonies, and presentations.', fit: 'contain', isNew: true },
    { name: 'Yorkville EXM Tower', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/Yorkville-EXM-Tower-Bluetooth-Speaker.jpeg', description: 'Portable column speaker with Bluetooth for compact event setups.', fit: 'contain', isNew: true },
    { name: 'RCF Double 18" Subs', quantity: '12', image: '/images/equipment/subs.jpeg', description: 'Powerful subwoofers for deep, impactful bass.' },
    { name: 'RCF Column Arrays 44', quantity: '4', image: '/images/equipment/column-arrays.jpg', description: 'Versatile column arrays for various venue sizes.' },
    { name: 'QSC Monitor', quantity: '4', image: '/images/equipment/qsc-monitor.jpeg', description: 'High-quality QSC stage monitoring systems.' },
    { name: 'Shure Wireless SLX3 Microphone', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/Shure-Wireless-SLX3-Mic.jpeg', description: 'Professional wireless microphone system for clear speech and performance.', fit: 'contain', isNew: true },
    { name: 'Pioneer DDJ-REV5 Controller', quantity: 'Available', image: '/images/Bigdunn%20Photos/equipment/Pioneer-DDJ-Rev5-Controller.jpeg', description: 'Performance DJ controller for polished, flexible music programming.', fit: 'contain', isNew: true },
  ]},
  { id: 'lighting', title: 'Lighting & Visual', Icon: Lightbulb, items: [
    { name: 'Wireless Uplights', quantity: '50', image: '/images/equipment/uplights.jpg', description: 'Battery-powered wireless uplights in various colors.' },
    { name: 'Intelligent Beam Lights', quantity: '8', image: '/images/equipment/beam-lights.jpg', description: 'Moving head beam lights for dynamic effects.' },
    { name: 'Intelligent Wash Lights', quantity: '4', image: '/images/equipment/wash-lights.jpg', description: 'Powerful wash lights for broad color coverage.' },
    { name: 'Lasers (10W)', quantity: '2', image: '/images/equipment/lasers.jpg', description: 'Professional laser systems for spectacular effects.' },
    { name: 'Waterproof Par Lights', quantity: '16', image: '/images/equipment/par-lights.jpeg', description: 'Weather-resistant PAR lights for outdoor events.' },
    { name: 'LED Panels', quantity: '40', image: '/images/equipment/led-panels.jpeg', description: 'Modular LED video wall panels.' },
    { name: 'Projectors', quantity: '3', image: '/images/equipment/projectors.jpeg', description: 'High-lumen projectors for large-scale displays.' },
    { name: 'Projector Screens', quantity: '2', image: '/images/equipment/screens.jpg', description: 'Professional projection screens up to 20x20.' },
  ]},
  { id: 'staging', title: 'Staging & Truss', Icon: Layers, items: [
    { name: 'Stage Deck', quantity: '32x32', image: '/images/equipment/stage-deck.jpg', description: 'Modular staging with various configurations.' },
    { name: 'Trussing System', quantity: '30x30', image: '/images/equipment/truss.jpeg', description: 'Professional aluminum truss rigging systems.' },
    { name: '20x20 Risers', quantity: 'Available', image: '/images/equipment/risers.jpg', description: 'Elevated platforms for VIP sections and lounges.' },
  ]},
  { id: 'furniture', title: 'Event Furniture', Icon: Armchair, items: [
    { name: 'Banquet Tables', quantity: '30', image: '/images/equipment/banquet-table.jpg', description: 'Standard 6ft and 8ft banquet tables.' },
    { name: 'Cocktail Tables', quantity: '50', image: '/images/equipment/cocktail-table.jpg', description: 'High-top cocktail tables for standing events.' },
    { name: 'Folding Chairs', quantity: '200', image: '/images/equipment/folding-chairs.jpg', description: 'White folding chairs for ceremonies and events.' },
    { name: 'Cocktail Chairs', quantity: '24', image: '/images/equipment/cocktail-chair.jpg', description: 'High chairs for cocktail table seating.' },
    { name: 'Spandex Table Cloths', quantity: '35', image: '/images/equipment/spandex-cloth.jpg', description: 'Stretch table covers in black, blue, white and red.' },
    { name: 'Portable Bar', quantity: '1', image: '/images/equipment/portable-bar.jpg', description: 'Mobile bar setup for beverage service.' },
    { name: 'Dance Floor', quantity: '16x16', image: '/images/equipment/dance-floor.jpg', description: 'Professional interlocking dance floor.' },
    { name: 'LED Flat Screens', quantity: '2 (75")', image: '/images/equipment/flat-screen.jpg', description: 'Large format displays for presentations.' },
  ]},
  { id: 'effects', title: 'Special Effects', Icon: Sparkles, items: [
    { name: 'Fog Machines', quantity: '5', image: '/images/equipment/fog-machine.jpg', description: 'Professional fog machines for atmospheric effects.' },
    { name: 'Spark Machines', quantity: '4', image: '/images/equipment/spark-machine.jpg', description: 'Cold spark fountains for dramatic moments.' },
    { name: 'Snow Machine', quantity: '1', image: '/images/equipment/snow-machine.jpg', description: 'Artificial snow effects for winter themes.' },
  ]},
  { id: 'power', title: 'Power & Safety', Icon: Plug, items: [
    { name: 'Generator (7k)', quantity: '2', image: '/images/equipment/generator-7k.jpg', description: 'Portable generators for outdoor events.' },
    { name: 'Generator (60k)', quantity: '1', image: '/images/equipment/generator-60k.jpg', description: 'High-capacity generator for large productions.' },
    { name: 'Wire Mats', quantity: '14', image: '/images/equipment/wire-mats.jpg', description: 'Cable protection and trip hazard prevention.' },
  ]},
];

const included = ['Professional Delivery & Setup', 'On-Site Technical Support', 'Equipment Testing & Backup'];

export default function EquipmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="bd-page-hero">
        <Image src="/images/Bigdunn%20Photos/concert-3.jpeg" alt="Big Dunn professional event production equipment" fill priority className="bd-page-hero-media" sizes="100vw" />
        <div className="bd-container relative z-[1]">
          <div className="flex items-center gap-3.5 mb-[22px]">
            <span className="bd-kline" />
            <span className="bd-kicker-light">Production inventory</span>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div><h1 className="bd-display text-white m-0 mb-5" style={{ fontSize: 'clamp(32px,4.8vw,62px)', lineHeight: 1.08 }}>Equipment, ready for the room.</h1><p className="font-light m-0" style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.7, color: '#c4bed5', maxWidth: '670px' }}>Professional audio, lighting, staging, visuals, power, furniture, and effects—available individually or as a coordinated production.</p></div>
            <div className="bd-price-lockup shrink-0"><small>Rentals starting at</small><span className="bd-display text-[25px]">$200</span><span className="text-[11px] text-white/60">published generator rate</span></div>
          </div>
        </div>
      </section>

      {/* GENERATOR FEATURE + CATEGORIES */}
      <section className="px-6 py-[88px]" style={{ background: '#f6f5fa' }}>
        <div className="mx-auto mb-24 grid max-w-[1120px] overflow-hidden rounded-[24px] border border-line bg-dark shadow-[0_30px_70px_rgba(22,19,31,0.18)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-dark">
            <Image src="/images/Bigdunn%20Photos/generator-rental.jpeg" alt="Big Dunn generator rental rates" width={1080} height={1350} sizes="(max-width: 1024px) 100vw, 45vw" className="h-auto w-full" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="bd-kicker-light">Featured rental</span>
            <h2 className="bd-display mb-7 mt-4 text-white" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>Reliable power for events of every size.</h2>
            <div>
              <Link href="/quote?eventType=Generator%20Rental" className="bd-btn bd-btn-primary bd-btn-sm">
                GET A QUOTE <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto flex flex-col gap-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="text-center mb-11">
                <div className="inline-flex items-center justify-center w-[66px] h-[66px] rounded-[18px] text-white text-[30px] mb-5" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 14px 34px rgba(106,38,201,0.28)' }}>
                  <cat.Icon size={30} />
                </div>
                <h2 className="bd-display text-ink m-0" style={{ fontSize: 'clamp(22px,2.6vw,34px)', lineHeight: 1.2 }}>{cat.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-[18px] overflow-hidden transition-all duration-[250ms] hover:-translate-y-1" style={{ border: '1px solid #ece9f3', boxShadow: '0 10px 26px rgba(22,19,31,0.05)' }}>
                    <div className="relative h-[220px]" style={{ background: '#f0eef6' }}>
                      <div className="absolute inset-0" style={{ backgroundImage: `url('${item.image}')`, backgroundSize: item.fit ?? 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                      {item.isNew && <div className="absolute left-3.5 top-3.5 rounded-full bg-purple px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">New</div>}
                      <div className="absolute top-3.5 right-3.5 text-white font-bold text-[12px] px-3.5 py-1.5 rounded-full" style={{ background: 'rgba(16,12,28,0.78)', backdropFilter: 'blur(4px)' }}>{item.quantity}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="bd-display text-ink text-[14px] leading-[1.35] m-0 mb-2.5">{item.name}</h3>
                      <p className="text-[13.5px] leading-[1.6] text-body m-0 mb-[18px]">{item.description}</p>
                      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #f0eef6' }}>
                        <span className="text-[12.5px] font-semibold text-purple">Available: {item.quantity}</span>
                        <Link href={`/quote?eventType=Equipment%20Rental&services=${encodeURIComponent(cat.title)}`} className="text-[13px] font-bold text-purple no-underline inline-flex items-center gap-1.5 hover:text-blue transition-colors">
                          Inquire<ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE INCLUDED */}
      <section className="relative overflow-hidden px-6 py-[88px]" style={{ background: '#100c1c' }}>
        <div className="absolute pointer-events-none" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.16),transparent 70%)' }} />
        <div className="relative max-w-[1000px] mx-auto text-center">
          <h2 className="bd-display text-white m-0 mb-3.5" style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.25 }}>Professional Service Included</h2>
          <p className="text-[16px] m-0 mb-10" style={{ color: '#b6afc9' }}>Every equipment rental includes:</p>
          <div className="grid md:grid-cols-3 gap-5">
            {included.map((s, i) => (
              <div key={i} className="rounded-[16px] px-6 py-[30px]" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                <CheckCircle size={30} style={{ color: '#8b7fd6' }} />
                <p className="font-semibold text-[15px] text-white m-0 mt-3.5">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES CTA */}
      <section className="bg-white px-6 py-[88px]">
        <div className="max-w-[1000px] mx-auto rounded-[22px] px-11 py-[52px] text-center" style={{ background: '#f6f5fa', border: '1px solid #ece9f3' }}>
          <h3 className="bd-display text-ink m-0 mb-3.5" style={{ fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: 1.25 }}>Looking for Complete Packages?</h3>
          <p className="text-[16px] leading-[1.6] text-body max-w-[520px] mx-auto mb-7">
            Check out our pre-designed wedding and event packages for convenient, all-in-one solutions.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/services/wedding-packages" className="bd-btn bd-btn-primary bd-btn-sm">Wedding Packages</Link>
            <Link href="/quote?eventType=Equipment%20Rental" className="bd-btn bd-btn-outline bd-btn-sm">Build Equipment Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
