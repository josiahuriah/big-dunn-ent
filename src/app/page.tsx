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

export default function HomePage() {
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
    },
    {
      icon: Lightbulb,
      title: 'Premium Lighting',
      description: '50 Wireless Uplights, Intelligent Beam/Wash Lights, LED Panels, and Lasers',
    },
    {
      icon: Music,
      title: 'Staging & Truss',
      description: 'Professional staging up to 32x32, Full truss rigging systems, and VIP sections',
    },
    {
      icon: Users,
      title: 'Event Furniture',
      description: 'Tables, chairs, cocktail setups, dance floors, and portable bars',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-purple via-primary-blue to-neutral-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom text-center text-white relative z-10 pt-24">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Transform Your Event<br />
              Into An <span className="text-secondary-green">Unforgettable</span> Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Nassau's premier event equipment rental company. Professional audio, lighting, 
              and staging solutions for weddings, concerts, and corporate events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary bg-secondary-green hover:bg-white hover:text-primary-purple">
                Get Your Free Quote
              </Link>
              <Link href="/about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary-purple backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-display font-bold text-secondary-green mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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