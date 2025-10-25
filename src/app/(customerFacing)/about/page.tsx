import Link from 'next/link';
import { Target, Heart, Award, Users, Zap, Shield } from 'lucide-react';

export const metadata = {
  title: 'About Us - Big Dunn Entertainment | Nassau Event Equipment Experts',
  description: 'Learn about Big Dunn Entertainment, Nassau\'s premier event equipment rental company. Discover our story, mission, and commitment to creating unforgettable events.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We pour our heart into every event, treating each celebration as if it were our own.',
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Top-tier equipment and expert service that meets international standards.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision drives us. We listen, adapt, and deliver exactly what you need.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying ahead with the latest technology and creative event solutions.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable service you can count on, every time, without exception.',
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Perfecting every element to ensure seamless, memorable experiences.',
    },
  ];

  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'Founded by Glenn Williams Jr. with a vision to revolutionize event entertainment in Nassau.',
    },
    {
      year: '2016',
      title: 'Major Expansion',
      description: 'Invested in professional-grade RCF audio systems and intelligent lighting equipment.',
    },
    {
      year: '2019',
      title: 'Industry Leader',
      description: 'Became Nassau\'s go-to provider for large-scale concerts and corporate events.',
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Serving 500+ events annually with cutting-edge equipment and exceptional service.',
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
            About <span className="text-secondary-green">Big Dunn</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Transforming visions into unforgettable experiences through professional 
            audio-visual excellence
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Big Dunn Entertainment was born from a passion for creating extraordinary 
                  moments. Founded by <strong>Glenn Williams Jr.</strong>, a visionary young 
                  Bahamian entrepreneur, our company has grown from humble beginnings to 
                  become Nassau's most trusted name in event equipment and entertainment.
                </p>
                <p>
                  What started as a dream to elevate the entertainment industry in The Bahamas 
                  has evolved into a full-service audio-visual company delivering world-class 
                  solutions. We believe every event—whether an intimate wedding or a large-scale 
                  concert—deserves the same level of dedication, precision, and professional excellence.
                </p>
                <p>
                  Today, we're proud to serve over 500 events annually, from elegant weddings 
                  at premier venues to high-energy concerts and corporate galas. Our commitment 
                  to innovation keeps us at the forefront of technology, while our focus on 
                  personalized service ensures every client feels valued and heard.
                </p>
                <p className="font-semibold text-primary-purple text-lg">
                  "Ideas for Life" isn't just our tagline—it's our promise to bring your 
                  vision to life with creativity, expertise, and unwavering dedication.
                </p>
              </div>
            </div>

            {/* Placeholder for company image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-purple to-primary-blue rounded-2xl flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <Users size={80} className="mx-auto mb-4" />
                  <p className="text-2xl font-display font-bold">Company Image</p>
                  <p className="text-gray-200 mt-2">
                    [Image: Team photo or event setup showcasing equipment]
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary-green text-neutral-dark p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-display font-bold">10+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white p-12 rounded-2xl shadow-xl">
              <Target size={48} className="mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-100 leading-relaxed">
                To deliver top-quality, customizable audio-visual solutions using the latest 
                technology, providing comprehensive and reliable services that transform events 
                into unforgettable experiences. We strive to exceed expectations through 
                innovation, expertise, and exceptional customer service.
              </p>
            </div>

            <div className="bg-white border-4 border-secondary-green p-12 rounded-2xl shadow-xl">
              <Heart size={48} className="mb-6 text-secondary-green" />
              <h3 className="text-3xl font-display font-bold mb-4 text-neutral-dark">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the Caribbean's premier event equipment and entertainment company, 
                recognized for setting industry standards in quality, innovation, and client 
                satisfaction. We envision a future where every event we touch becomes a 
                masterpiece of creativity and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-neutral-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-secondary-green">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A decade of growth, innovation, and unforgettable events
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary-green" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <div className="text-secondary-green text-3xl font-display font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>

                  {/* Circle marker */}
                  <div className="hidden lg:block w-6 h-6 bg-secondary-green rounded-full border-4 border-neutral-dark z-10" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary behind Big Dunn Entertainment
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-purple to-primary-blue rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Placeholder for founder image */}
              <div className="aspect-square bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Users size={80} className="mx-auto mb-4" />
                  <p className="text-xl font-display font-bold">Glenn Williams Jr.</p>
                  <p className="text-gray-200 mt-2">[Professional Photo]</p>
                </div>
              </div>

              <div className="text-white flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold mb-4">Glenn Williams Jr.</h3>
                <p className="text-secondary-green font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-100 leading-relaxed mb-6">
                  A youthful Bahamian entrepreneur with unmatched dedication and precision, 
                  Glenn consistently exceeds client expectations. With a commitment to 
                  innovation and excellence, he leads Big Dunn Entertainment in staying 
                  ahead of industry trends to offer cutting-edge solutions and exceptional service.
                </p>
                <p className="italic text-gray-200">
                  "Every event is an opportunity to create something extraordinary. That's 
                  what drives me and our entire team every single day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-green">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-neutral-dark/80 mb-8 max-w-2xl mx-auto">
            Experience the Big Dunn difference for your next event
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-dark transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}