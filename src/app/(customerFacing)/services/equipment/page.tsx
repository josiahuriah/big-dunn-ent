import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ArrowRight, Mic, Lightbulb, Layers, Plus } from 'lucide-react';

export const metadata = {
  title: 'Equipment Inventory - Big Dunn Entertainment | Professional AV Equipment Rental',
  description: 'Browse our comprehensive inventory of professional audio, lighting, staging, and event equipment available for rent in Nassau, Bahamas.',
};

export default function EquipmentPage() {
  const audioEquipment = [
    {
      name: 'RCF - Stage Monitor',
      quantity: '16',
      image: '/images/equipment/stage-monitor.jpg',
      description: 'Professional stage monitors for crystal-clear on-stage sound',
    },
    {
      name: 'RCF - HDL Line Arrays',
      quantity: '30 (16 Arrays)',
      image: '/images/equipment/line-arrays.jpg',
      description: 'Premium line array speakers for exceptional coverage',
    },
    {
      name: 'RCF - Double 18" Subs',
      quantity: '12 Passive',
      image: '/images/equipment/subs.jpeg',
      description: 'Powerful subwoofers for deep, impactful bass',
    },
    {
      name: 'RCF - Column Arrays 44',
      quantity: '4',
      image: '/images/equipment/column-arrays.jpg',
      description: 'Versatile column arrays for various venue sizes',
    },
    {
      name: 'QSC - Monitor',
      quantity: '4 Stage Monitors',
      image: '/images/equipment/qsc-monitor.jpeg',
      description: 'High-quality QSC stage monitoring systems',
    },
    {
      name: 'Shure Wireless Microphones',
      quantity: '7',
      image: '/images/equipment/wireless-mic.jpg',
      description: 'Professional wireless microphone systems',
    },
    {
      name: 'Pioneer DJ Controllers',
      quantity: '5',
      image: '/images/equipment/dj-controller.png',
      description: 'Professional DJ controllers and mixing equipment',
    },
  ];

  const lightingEquipment = [
    {
      name: 'Wireless Uplights',
      quantity: '50',
      image: '/images/equipment/uplights.jpg',
      description: 'Battery-powered wireless uplights in various colors',
    },
    {
      name: 'Intelligent Beam Lights',
      quantity: '8',
      image: '/images/equipment/beam-lights.jpg',
      description: 'Moving head beam lights for dynamic effects',
    },
    {
      name: 'Intelligent Wash Lights',
      quantity: '4',
      image: '/images/equipment/wash-lights.jpg',
      description: 'Powerful wash lights for broad color coverage',
    },
    {
      name: 'Lasers (10W)',
      quantity: '2',
      image: '/images/equipment/lasers.jpg',
      description: 'Professional laser systems for spectacular effects',
    },
    {
      name: 'Waterproof Par Lights',
      quantity: '16',
      image: '/images/equipment/par-lights.jpeg',
      description: 'Weather-resistant PAR lights for outdoor events',
    },
    {
      name: 'LED Panels',
      quantity: '40',
      image: '/images/equipment/led-panels.jpg',
      description: 'Modular LED video wall panels',
    },
    {
      name: 'Projectors',
      quantity: '3',
      image: '/images/equipment/projectors.jpeg',
      description: 'High-lumen projectors for large-scale displays',
    },
    {
      name: 'Projector Screens',
      quantity: '20x20 (1), 10x10 (1)',
      image: '/images/equipment/screens.jpg',
      description: 'Professional projection screens',
    },
  ];

  const stagingTruss = [
    {
      name: 'Stage Deck',
      quantity: '32x32 ft capabilities',
      image: '/images/equipment/stage-deck.jpg',
      description: 'Modular staging with various configurations',
    },
    {
      name: 'Trussing System',
      quantity: '30x30 ft Full Rig',
      image: '/images/equipment/truss.jpeg',
      description: 'Professional aluminum truss rigging systems',
    },
    {
      name: '20x20 Risers',
      quantity: 'Available',
      image: '/images/equipment/risers.jpg',
      description: 'Elevated platforms for VIP sections and lounge areas',
    },
  ];

  const furniture = [
    {
      name: 'Banquet Tables',
      quantity: '30',
      image: '/images/equipment/banquet-table.jpg',
      description: 'Standard 6ft and 8ft banquet tables',
    },
    {
      name: 'Cocktail Tables',
      quantity: '50',
      image: '/images/equipment/cocktail-table.jpg',
      description: 'High-top cocktail tables for standing events',
    },
    {
      name: 'Folding Chairs',
      quantity: '200',
      image: '/images/equipment/folding-chairs.jpg',
      description: 'White folding chairs for ceremonies and events',
    },
    {
      name: 'Cocktail Chairs',
      quantity: '24',
      image: '/images/equipment/cocktail-chair.jpg',
      description: 'High chairs for cocktail table seating',
    },
    {
      name: 'Spandex Table Cloths',
      quantity: 'Black (16), Blue (11), White (1), Red (7)',
      image: '/images/equipment/spandex-cloth.jpg',
      description: 'Stretch table covers in multiple colors',
    },
    {
      name: 'Portable Bar',
      quantity: '1',
      image: '/images/equipment/portable-bar.jpg',
      description: 'Mobile bar setup for beverage service',
    },
    {
      name: 'Dance Floor',
      quantity: '16x16 ft',
      image: '/images/equipment/dance-floor.jpg',
      description: 'Professional interlocking dance floor',
    },
    {
      name: 'LED Flat Screens',
      quantity: '2 (75")',
      image: '/images/equipment/flat-screen.jpg',
      description: 'Large format displays for presentations',
    },
  ];

  const effects = [
    {
      name: 'Fog Machines',
      quantity: '5',
      image: '/images/equipment/fog-machine.jpg',
      description: 'Professional fog machines for atmospheric effects',
    },
    {
      name: 'Spark Machines',
      quantity: '4',
      image: '/images/equipment/spark-machine.jpg',
      description: 'Cold spark fountains for dramatic moments',
    },
    {
      name: 'Snow Machine',
      quantity: '1',
      image: '/images/equipment/snow-machine.jpg',
      description: 'Artificial snow effects for winter themes',
    },
  ];

  const power = [
    {
      name: 'Generator (7k)',
      quantity: '2',
      image: '/images/equipment/generator-7k.jpg',
      description: 'Portable generators for outdoor events',
    },
    {
      name: 'Generator (60k)',
      quantity: '1',
      image: '/images/equipment/generator-60k.jpg',
      description: 'High-capacity generator for large productions',
    },
    {
      name: 'Wire Mats',
      quantity: '14',
      image: '/images/equipment/wire-mats.jpg',
      description: 'Cable protection and trip hazard prevention',
    },
  ];

  const categories = [
    {
      title: 'Professional Audio',
      icon: Mic,
      items: audioEquipment,
      gradient: 'from-primary-purple to-primary-blue',
    },
    {
      title: 'Lighting & Visual',
      icon: Lightbulb,
      items: lightingEquipment,
      gradient: 'from-primary-blue to-secondary-green',
    },
    {
      title: 'Staging & Truss',
      icon: Layers,
      items: stagingTruss,
      gradient: 'from-secondary-green to-primary-purple',
    },
    {
      title: 'Event Furniture',
      icon: Plus,
      items: furniture,
      gradient: 'from-primary-purple to-primary-blue',
    },
    {
      title: 'Special Effects',
      icon: Lightbulb,
      items: effects,
      gradient: 'from-primary-blue to-primary-purple',
    },
    {
      title: 'Power & Safety',
      icon: Plus,
      items: power,
      gradient: 'from-primary-purple to-secondary-green',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom text-center text-white relative z-10 pt-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Equipment Inventory
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
            Browse our comprehensive collection of professional-grade audio, lighting, 
            staging, and event equipment
          </p>
        </div>
      </section>

      {/* Top CTA */}
      <section className="section-padding bg-white -mt-20 relative z-20">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Need Equipment for Your Event?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Contact us for customized quotes based on your specific requirements. 
                We'll help you select the perfect equipment mix for your event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-secondary-green text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+12424493010"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-purple transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  <span>Call 1-242-449-3010</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      {categories.map((category, catIndex) => (
        <section 
          key={catIndex}
          className={catIndex % 2 === 0 ? 'section-padding bg-gray-50' : 'section-padding bg-white'}
        >
          <div className="container-custom">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${category.gradient} mb-6`}>
                <category.icon size={40} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {category.title}
              </h2>
            </div>

            {/* Equipment Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary-green text-neutral-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {item.quantity}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-neutral-dark mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-primary-purple">
                        Available: {item.quantity}
                      </span>
                      <Link
                        href="/contact"
                        className="text-primary-purple hover:text-primary-blue font-semibold text-sm flex items-center gap-1"
                      >
                        <span>Inquire</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services Note */}
      <section className="section-padding bg-gradient-to-br from-neutral-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional Service <span className="text-secondary-green">Included</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              All equipment rentals include:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                'Professional Delivery & Setup',
                'On-Site Technical Support',
                'Equipment Testing & Backup',
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Built Packages CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-2 border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-display font-bold mb-4">
                Looking for Complete Packages?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Check out our pre-designed wedding and event packages for convenient, 
                all-in-one solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/wedding-packages"
                  className="bg-primary-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue transition-all duration-300 shadow-lg"
                >
                  View Wedding Packages
                </Link>
                <Link
                  href="/services/event-packages"
                  className="bg-white text-primary-purple border-2 border-primary-purple px-8 py-4 rounded-lg font-semibold hover:bg-primary-purple hover:text-white transition-all duration-300"
                >
                  View Event Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-secondary-green">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-display font-bold text-neutral-dark mb-4">
                Ready to Book Your Equipment?
              </h3>
              <p className="text-xl text-neutral-dark/80 mb-6">
                Contact us today for pricing and availability. Our team will help you 
                select the perfect equipment for your event.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+12424493010"
                className="flex items-center gap-3 bg-white text-primary-purple p-4 rounded-lg font-semibold hover:bg-primary-purple hover:text-white transition-all shadow-lg"
              >
                <Phone size={24} />
                <div>
                  <div className="text-sm">Call us now</div>
                  <div className="text-xl">1-242-449-3010</div>
                </div>
              </a>
              <a
                href="mailto:info@bigdunnentertainment.com"
                className="flex items-center gap-3 bg-white text-primary-purple p-4 rounded-lg font-semibold hover:bg-primary-purple hover:text-white transition-all shadow-lg"
              >
                <Mail size={24} />
                <div>
                  <div className="text-sm">Email us</div>
                  <div className="text-xl">info@bigdunnentertainment.com</div>
                </div>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary-purple text-white p-4 rounded-lg font-semibold hover:bg-neutral-dark transition-all shadow-lg"
              >
                <span>Request Detailed Quote</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}