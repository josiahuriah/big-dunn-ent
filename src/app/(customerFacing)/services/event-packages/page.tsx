import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, ArrowRight, Music } from 'lucide-react';

export const metadata = {
  title: 'Concert & Event Packages - Big Dunn Entertainment | Nassau Event Production',
  description: 'Professional concert and event production packages for festivals, corporate events, and large-scale celebrations in Nassau, Bahamas.',
};

export default function EventPackagesPage() {
  const packages = [
    {
      name: 'Core Package',
      price: '$5,170.00',
      image: '/images/event-core.jpg',
      features: [
        '3 Stage Monitors',
        '6 Line Arrays',
        '4 Double 18 Subs',
        'DJ Controller',
        '12x12 Stage',
        '15x15 Trussing Rig',
        'Basic Lighting',
        'Generator',
        '2 Wireless Mics',
        'Professional Engineer',
      ],
      description: 'Essential package for small to medium events and outdoor concerts',
      idealFor: 'Corporate events, festivals, community gatherings (up to 500 guests)',
    },
    {
      name: 'Prime Package',
      price: '$6,780.00',
      image: '/images/event-prime.jpg',
      features: [
        '4 Stage Monitors',
        '8 Line Arrays',
        '6 Double 18 Subs',
        'DJ Controller',
        '2 Wireless Mics',
        '20x16 Stage',
        '20x20 Trussing Rig',
        '20x20 Tent Cover',
        'Advanced Lighting',
        'Generator',
      ],
      description: 'Enhanced setup with covered staging and advanced lighting effects',
      idealFor: 'Outdoor festivals, concerts, large private events (500-1,000 guests)',
      popular: true,
    },
    {
      name: 'Premium Package',
      price: '$9,095.00',
      image: '/images/event-premium.jpg',
      features: [
        '5 Stage Monitors',
        '12 Line Arrays',
        '8 Double 18 Subs',
        'DJ Controller',
        '20x20 Stage',
        '20x20 Trussing Rig',
        'Advanced Lighting',
        '8x6 LED Wall',
        'Generator',
        '2 Wireless Mics',
        'Professional Engineer',
      ],
      description: 'Professional-grade production with LED video wall for maximum impact',
      idealFor: 'Major concerts, corporate galas, high-profile events (1,000-2,000 guests)',
    },
    {
      name: 'Elite Package',
      price: '$16,000.00',
      image: '/images/event-elite.jpg',
      features: [
        '5 Stage Monitors',
        '16 Line Arrays',
        '12 Double 18 Subs',
        'DJ Controller',
        '2 Wireless Mics',
        '28x28 Stage',
        '30x30 Trussing Rig',
        '30x30 Roof',
        'Speaker Wings',
        'Advanced Lighting',
        '16x9 LED Wall',
        'Generator',
      ],
      description: 'Our flagship concert package with full production capabilities',
      idealFor: 'Large-scale concerts, festivals, major sporting events (2,000+ guests)',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-blue to-primary-purple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom text-center text-white relative z-10 pt-24">
          <div className="flex justify-center mb-6">
            <Music size={80} className="text-secondary-green" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Concert & Event <span className="text-secondary-green">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Professional audio-visual production for unforgettable concerts, festivals, 
            and large-scale celebrations
          </p>
        </div>
      </section>

      {/* Package Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              World-Class Production for Every Scale
            </h2>
            <p className="text-lg text-gray-600">
              From intimate gatherings to massive festivals, our concert packages deliver 
              professional-grade audio, lighting, and staging that rivals international productions.
            </p>
          </div>

          {/* Quick Comparison */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg, index) => (
              <a
                key={index}
                href={`#${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-50 border-2 border-gray-200 hover:border-primary-purple p-6 rounded-xl transition-all card-hover text-center"
              >
                <h3 className="font-display font-bold text-xl mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary-purple mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-600">{pkg.idealFor.split('(')[0]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Package Cards */}
      {packages.map((pkg, index) => (
        <section 
          key={index}
          id={pkg.name.toLowerCase().replace(/\s+/g, '-')}
          className={index % 2 === 0 ? 'section-padding bg-gray-50' : 'section-padding bg-white'}
        >
          <div className="container-custom">
            <div 
              className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${
                pkg.popular ? 'ring-4 ring-secondary-green' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className={`relative h-96 lg:h-auto ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="relative h-full bg-gradient-to-br from-primary-purple to-primary-blue">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.name} concert package`}
                      fill
                      className="object-cover"
                    />
                    {pkg.popular && (
                      <div className="absolute top-6 left-6 bg-secondary-green text-neutral-dark px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
                        Most Popular
                      </div>
                    )}
                    <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
                      <div className="text-sm">Starting at</div>
                      <div className="text-3xl font-display font-bold">{pkg.price}</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 flex flex-col justify-between ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div>
                    <div className="mb-6">
                      <h3 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark mb-4">
                        {pkg.name}
                      </h3>
                      <p className="text-xl text-gray-700 mb-4">{pkg.description}</p>
                      <div className="bg-primary-purple/10 border-l-4 border-primary-purple p-4 rounded">
                        <p className="text-sm font-semibold text-primary-purple mb-1">Ideal For:</p>
                        <p className="text-gray-700">{pkg.idealFor}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-xl mb-6 text-neutral-dark flex items-center gap-2">
                        <CheckCircle className="text-secondary-green" />
                        Complete Package Includes:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary-green flex-shrink-0 mt-2" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t-2 border-gray-100">
                    <Link 
                      href="/contact"
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <span>Book {pkg.name}</span>
                      <ArrowRight size={20} />
                    </Link>
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/contact"
                        className="text-center py-3 text-primary-purple hover:text-primary-blue font-semibold border-2 border-primary-purple hover:border-primary-blue rounded-lg transition-all"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/services/equipment"
                        className="text-center py-3 text-gray-600 hover:text-primary-purple font-semibold border-2 border-gray-300 hover:border-primary-purple rounded-lg transition-all"
                      >
                        View Equipment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What's Included Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Professional Service <span className="text-secondary-green">Included</span>
            </h2>
            <p className="text-xl text-gray-300">
              Every package comes with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Setup',
                description: 'Professional installation and sound check by experienced technicians',
              },
              {
                title: 'On-Site Support',
                description: 'Dedicated engineer throughout your event to ensure perfect audio',
              },
              {
                title: 'Equipment Insurance',
                description: 'All equipment fully insured and maintained to highest standards',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <CheckCircle size={40} className="text-secondary-green mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Need a Custom Production Solution?
              </h3>
              <p className="text-xl text-gray-100 mb-8">
                Planning a unique event or need specialized equipment? We create custom packages 
                tailored to your specific requirements, venue, and budget. From multi-day festivals 
                to corporate product launches, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-secondary-green text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg"
                >
                  Request Custom Quote
                </Link>
                <Link
                  href="/services/equipment"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-purple transition-all duration-300"
                >
                  Browse Equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary-green">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-display font-bold text-neutral-dark mb-4">
                Let's Make Your Event Legendary
              </h3>
              <p className="text-xl text-neutral-dark/80 mb-6">
                Our production team is ready to bring your concert or event vision to life
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}