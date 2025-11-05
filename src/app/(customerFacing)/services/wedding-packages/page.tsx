import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Wedding Packages - Big Dunn Entertainment | Nassau Wedding Equipment',
  description: 'Explore our premium wedding packages designed to make your special day unforgettable. From intimate ceremonies to grand celebrations in Nassau, Bahamas.',
};

export default function WeddingPackagesPage() {
  const packages = [
    {
      tier: 'Essentials',
      name: 'Bronze',
      price: '$250',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-bronze.jpg',
      features: [
        '8 Uplights',
        'OR',
        '1 Static Monogram',
      ],
      description: 'Perfect for intimate ceremonies and small receptions',
    },
    {
      tier: 'Essentials',
      name: 'Iron',
      price: '$500',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-iron.jpg',
      features: [
        'DJ Services - 4 hours',
        'Sound System Included',
      ],
      description: 'Essential entertainment package for memorable celebrations',
    },
    {
      tier: 'Essentials',
      name: 'Rhenium',
      price: '$650',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-rhenium.jpg',
      features: [
        'DJ Services',
        '8 Uplights',
        '1 Fog Machine',
        'Sound System Included',
      ],
      description: 'Enhanced package with lighting and atmospheric effects',
      popular: true,
    },
    {
      tier: 'Supreme',
      name: 'Silver',
      price: '$750',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-silver.jpg',
      features: [
        '8 Uplights',
        '8 Head table & Backdrop Lights',
        '1 Custom Animated Monogram',
      ],
      description: 'Elegant lighting design for sophisticated venues',
    },
    {
      tier: 'Supreme',
      name: 'Palladium',
      price: '$800',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-palladium.jpg',
      features: [
        '1 Custom Animated Monogram',
        'Intelligent Light',
        '2 RGB Fog Machines',
        '6 Head table & Backdrop Lights',
        '8 Uplights',
      ],
      description: 'Premium intelligent lighting with dynamic effects',
    },
    {
      tier: 'Supreme',
      name: 'Ruthenium',
      price: '$1,100',
      setupFee: 'Setup fee not included',
      image: '/images/wedding-ruthenium.jpg',
      features: [
        'DJ Services',
        '6 Uplights',
        '8 Aerial Lights',
        '8 Head table & Backdrop Lights',
        '1 Gold Microphone',
        'Sound System Included',
      ],
      description: 'Complete entertainment solution with aerial lighting',
    },
    {
      tier: 'Elite',
      name: 'Gold',
      price: '$1,300',
      setupFee: 'Setup fee included',
      image: '/images/wedding-gold.jpg',
      features: [
        'DJ Services',
        'Custom Gobo Heart or Rings',
        'Fog Machine',
        'Custom Monogram',
        '8 Aerial Lights',
        '8 Uplights',
        '8 Head table & Backdrop Lights',
        '1 Gold Microphone',
      ],
      description: 'Luxurious package with custom projection and premium sound',
    },
    {
      tier: 'Elite',
      name: 'Platinum',
      price: '$1,500',
      setupFee: 'Setup fee included',
      image: '/images/wedding-platinum.jpg',
      features: [
        '1 Custom Animated Monogram',
        'Intelligent Light',
        '2 Lighting Stands',
        '1 Spark Machine',
        '8 Uplights',
        '8 Head table & Backdrop Lights',
        '12 Uplights',
      ],
      description: 'Spectacular effects including spark machine for dramatic moments',
    },
    {
      tier: 'Elite',
      name: 'Rhodium',
      price: '$2,000',
      setupFee: 'Setup fee included',
      image: '/images/wedding-rhodium.jpg',
      features: [
        '1 Custom Monogram',
        '1 Intelligent Light',
        '8 Head table & Backdrop Lights',
        '12 Aerial Lights',
        '2 Lighting Stands',
        '2 Fog Machines',
        '24 Uplights',
        '1 Heart or Ring Gobo',
        '2 Spark Machines',
      ],
      description: 'Our most comprehensive wedding package for grand celebrations',
    },
    {
      tier: 'Exclusive',
      name: 'Exclusive Plus',
      price: '$2,800',
      setupFee: 'Setup fee included',
      image: '/images/wedding-exclusive.jpg',
      features: [
        'DJ Services & Sound',
        '(2) Custom Monograms',
        '(1) Gold Microphone',
        '(2) RGB Fog Machines',
        '(12) Aerial Lights',
        '(12) Head table & Backdrop Lighting',
        '(24) Uplights',
        '(2) Spark Machines',
        '(2) Throne Chairs',
      ],
      description: 'The ultimate wedding experience with throne chairs and complete entertainment',
    },
  ];

  const tiers = ['Essentials', 'Supreme', 'Elite', 'Exclusive'];

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
            Wedding <span className="text-secondary-green">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Transform your special day into an unforgettable celebration with our 
            premium wedding entertainment packages
          </p>
        </div>
      </section>

      {/* Package Tiers Navigation */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {tiers.map((tier) => (
              <a
                key={tier}
                href={`#${tier.toLowerCase()}`}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-primary-purple hover:text-white transition-all font-semibold"
              >
                {tier}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages by Tier */}
      {tiers.map((tier) => {
        const tierPackages = packages.filter(pkg => pkg.tier === tier);
        
        return (
          <section 
            key={tier}
            id={tier.toLowerCase()}
            className="section-padding bg-gray-50"
          >
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {tier} <span className="gradient-text">Packages</span>
                </h2>
                {tier === 'Essentials' && (
                  <p className="text-xl text-gray-600">Perfect for intimate ceremonies and budget-conscious couples</p>
                )}
                {tier === 'Supreme' && (
                  <p className="text-xl text-gray-600">Elevated elegance with sophisticated lighting design</p>
                )}
                {tier === 'Elite' && (
                  <p className="text-xl text-gray-600">Luxury packages with spectacular effects and premium service</p>
                )}
                {tier === 'Exclusive' && (
                  <p className="text-xl text-gray-600">The ultimate wedding experience for grand celebrations</p>
                )}
              </div>

              <div className="space-y-8">
                {tierPackages.map((pkg, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover ${
                      pkg.popular ? 'ring-4 ring-secondary-green' : ''
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-96 lg:h-auto bg-gradient-to-br from-primary-purple to-primary-blue">
                        <Image
                          src={pkg.image}
                          alt={`${pkg.name} wedding package`}
                          fill
                          className="object-cover"
                        />
                        {pkg.popular && (
                          <div className="absolute top-6 right-6 bg-secondary-green text-neutral-dark px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                            Most Popular
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                          <div className="mb-6">
                            <h3 className="text-4xl font-display font-bold text-neutral-dark mb-2">
                              {pkg.name}
                            </h3>
                            <p className="text-gray-600 mb-4">{pkg.description}</p>
                            <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-display font-bold text-primary-purple">
                                {pkg.price}
                              </span>
                              <span className="text-gray-500">per event</span>
                            </div>
                            <p className={`text-sm mt-2 ${
                              pkg.setupFee.includes('not') ? 'text-orange-600' : 'text-green-600'
                            } font-semibold`}>
                              {pkg.setupFee}
                            </p>
                          </div>

                          <div className="mb-8">
                            <h4 className="font-semibold text-lg mb-4 text-neutral-dark">
                              Package Includes:
                            </h4>
                            <ul className="space-y-3">
                              {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  {feature === 'OR' ? (
                                    <span className="text-primary-purple font-bold text-lg">
                                      {feature}
                                    </span>
                                  ) : (
                                    <>
                                      <CheckCircle 
                                        size={24} 
                                        className="text-secondary-green flex-shrink-0 mt-0.5" 
                                      />
                                      <span className="text-gray-700">{feature}</span>
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Link 
                            href="/contact"
                            className="btn-primary w-full text-center flex items-center justify-center gap-2"
                          >
                            <span>Book This Package</span>
                            <ArrowRight size={20} />
                          </Link>
                          <Link
                            href="/contact"
                            className="block text-center text-primary-purple hover:text-primary-blue font-semibold"
                          >
                            Request Custom Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Services Note */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-display font-bold mb-4">
                Need Something Custom?
              </h3>
              <p className="text-xl text-gray-100 mb-8">
                We specialize in creating bespoke packages tailored to your unique vision and budget. 
                Mix and match equipment, add special effects, or build your dream setup from scratch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-secondary-green text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg"
                >
                  Get Custom Quote
                </Link>
                <Link
                  href="/services/equipment"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-purple transition-all duration-300"
                >
                  View Equipment List
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
                Ready to Plan Your Perfect Wedding?
              </h3>
              <p className="text-xl text-neutral-dark/80 mb-6">
                Our wedding specialists are here to help you create the celebration of your dreams
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