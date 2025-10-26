import Link from 'next/link';
import { 
  Music, 
  Lightbulb, 
  Mic, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';
import Carousel from '@/src/components/Carousel';

export default function HomePage() {
  const carouselSlides = [
    {
      image: '/images/carousel1.jpg',
      title: 'Nassau\'s Premier Event Equipment Rental Company',
      subtitle: 'Professional audio, lighting, and staging solutions for unforgettable concerts and festivals',
      cta: {
        text: 'Get Your Free Quote',
        href: '/contact',
      },
    },
    {
      image: '/images/carousel2.jpg',
      title: 'Make Your Wedding Day Magical',
      subtitle: 'Transform your special day with stunning lighting, crystal-clear sound, and elegant décor',
      cta: {
        text: 'Plan Your Wedding',
        href: '/contact',
      },
    },
    {
      image: '/images/carousel3.jpg',
      title: 'Celebrate Life\'s Special Moments',
      subtitle: 'From baby showers to birthdays, we bring joy to every celebration',
      cta: {
        text: 'Book Your Event',
        href: '/contact',
      },
    },
    {
      image: '/images/carousel4.jpg',
      title: 'Elevate Your Corporate Events',
      subtitle: 'Impress clients and inspire teams with world-class AV solutions',
      cta: {
        text: 'Discover Solutions',
        href: '/contact',
      },
    },
  ];

  const packages = [
    {
      name: 'Bronze',
      price: '$250',
      features: ['8 Uplights or 1 Static Monogram'],
      color: 'from-orange-400 to-orange-600',
      popular: false,
    },
    {
      name: 'Iron',
      price: '$500',
      features: ['DJ Services - 4hrs', 'Sound System Included'],
      color: 'from-gray-400 to-gray-600',
      popular: false,
    },
    {
      name: 'Rhenium',
      price: '$650',
      features: ['DJ Services', '8 Uplights', '1 Fog Machine', 'Sound System'],
      color: 'from-purple-400 to-purple-600',
      popular: true,
    },
    {
      name: 'Gold',
      price: '$1,300',
      features: [
        'DJ Services',
        'Custom Gobo Heart/Rings',
        'Fog Machine',
        'Custom Monogram',
        '8 Aerial Lights',
        '8 Uplights',
        'Gold Microphone'
      ],
      color: 'from-yellow-400 to-yellow-600',
      popular: false,
    },
  ];

  const equipment = [
    {
      icon: Mic,
      title: 'Professional Audio',
      description: 'RCF Line Arrays, Double 18" Subs, Stage Monitors, and Wireless Microphones',
      image: '/images/carousel2.jpg',
    },
    {
      icon: Lightbulb,
      title: 'Premium Lighting',
      description: '50 Wireless Uplights, Intelligent Beam/Wash Lights, LED Panels, and Lasers',
      image: '/images/carousel2.jpg',
    },
    {
      icon: Music,
      title: 'Staging & Truss',
      description: 'Professional staging up to 32x32, Full truss rigging systems, and VIP sections',
      image: '/images/carousel2.jpg',
    },
    {
      icon: Users,
      title: 'Event Furniture',
      description: 'Tables, chairs, cocktail setups, dance floors, and portable bars',
      image: '/images/carousel2.jpg',
    },
  ];

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Equipment Items' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Big Dunn Entertainment made our wedding absolutely magical! The lighting was stunning and the sound quality was impeccable.',
    },
    {
      name: 'Michael Chen',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional, reliable, and top-tier equipment. They handled our corporate gala flawlessly.',
    },
    {
      name: 'Jennifer Williams',
      event: 'Concert Production',
      rating: 5,
      text: 'Their concert package exceeded all expectations. The stage setup was world-class!',
    },
  ];

  return (
    <>
      {/* Hero Section with Carousel */}
      <Carousel slides={carouselSlides} />

      {/* Stats Section */}
      <section className="section-padding bg-white -mt-20 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-2xl p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Images */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="gradient-text">Big Dunn Entertainment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring your vision to life with professional-grade equipment and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <item.icon size={64} className="mx-auto mb-4" />
                      <p className="text-sm opacity-80">{item.image}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mb-4">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Award className="text-primary-purple flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Premium Quality</h4>
                  <p className="text-gray-600">Top-tier professional equipment from leading brands</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-primary-purple flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">On-Time Setup</h4>
                  <p className="text-gray-600">Reliable delivery and professional installation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary-purple flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Expert Support</h4>
                  <p className="text-gray-600">Experienced team ensuring flawless execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Popular <span className="gradient-text">Event Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our curated packages or let us create a custom solution for your event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                  pkg.popular ? 'ring-4 ring-secondary-green scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-secondary-green text-neutral-dark px-4 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                <div className={`h-32 bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                  <h3 className="text-3xl font-display font-bold text-white">{pkg.name}</h3>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-display font-bold text-primary-purple mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle size={20} className="text-secondary-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="block w-full text-center btn-primary"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need something more comprehensive? We offer premium packages up to $2,800+
            </p>
            <Link href="/contact" className="text-primary-purple font-semibold hover:underline">
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-purple to-primary-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-secondary-green fill-secondary-green" />
                  ))}
                </div>
                <p className="text-gray-100 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-green">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-neutral-dark/80 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our professional equipment and expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-dark transition-all duration-300 shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <a 
              href="tel:+12424493010" 
              className="bg-white text-primary-purple px-8 py-4 rounded-lg font-semibold hover:bg-neutral-dark hover:text-white transition-all duration-300 shadow-lg"
            >
              Call 1-242-449-3010
            </a>
          </div>
        </div>
      </section>
    </>
  );
}