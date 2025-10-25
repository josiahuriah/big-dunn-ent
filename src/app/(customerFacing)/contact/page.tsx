'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const eventTypes = [
    'Wedding',
    'Concert',
    'Corporate Event',
    'Birthday Party',
    'Festival',
    'Private Party',
    'Other',
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Carew Street', 'Nassau, Bahamas'],
      link: 'https://maps.google.com/?q=Carew+Street+Nassau+Bahamas',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['1-242-449-3010', '1-242-812-5683'],
      link: 'tel:+12424493010',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bigdunnentertainment.com'],
      link: 'mailto:info@bigdunnentertainment.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: By Appointment'],
      link: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom text-center text-white relative z-10 pt-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Get In <span className="text-secondary-green">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Let's start planning your unforgettable event
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link || '#'}
                target={info.link?.startsWith('http') ? '_blank' : undefined}
                rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  info.link ? 'card-hover cursor-pointer' : ''
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-neutral-dark">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Request a <span className="gradient-text">Free Quote</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with 
                a customized quote for your event.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-secondary-green/10 border-2 border-secondary-green text-neutral-dark p-4 rounded-lg mb-6">
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p className="text-sm">We'll be in touch shortly to discuss your event.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                      placeholder="242-123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors"
                      placeholder="100"
                      min="1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-purple focus:outline-none transition-colors resize-none"
                    placeholder="Share your vision, equipment needs, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Additional Info & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto mb-4 text-primary-purple" />
                  <p className="text-gray-600 font-semibold">Map Location</p>
                  <p className="text-sm text-gray-500 mt-2">
                    [Google Maps embed showing Carew Street, Nassau]
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Prefer to Talk Directly?
                </h3>
                <p className="text-gray-100 mb-6">
                  Our team is ready to answer your questions and provide expert guidance 
                  for your event.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+12424493010"
                    className="flex items-center space-x-3 text-secondary-green hover:text-white transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-semibold">Call: 1-242-449-3010</span>
                  </a>
                  <a
                    href="mailto:info@bigdunnentertainment.com"
                    className="flex items-center space-x-3 text-secondary-green hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                    <span className="font-semibold">Email: info@bigdunnentertainment.com</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-display font-bold mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest events, equipment, and special offers
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/bigdunnentertainment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#1877F2] text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Facebook size={20} />
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/bigdunnentertainment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={20} />
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock size={24} className="text-primary-purple" />
                  <h3 className="text-xl font-display font-bold">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend booking at least 2-3 months in advance for weddings and large events. However, we often accommodate last-minute requests based on availability.',
              },
              {
                q: 'Do you provide setup and breakdown services?',
                a: 'Yes! All our packages include professional setup and breakdown. Our experienced team ensures everything is perfectly installed and removed efficiently.',
              },
              {
                q: 'Can I customize a package?',
                a: 'Absolutely! While we offer pre-designed packages, we specialize in creating custom solutions tailored to your specific needs and budget.',
              },
              {
                q: 'Do you serve areas outside of Nassau?',
                a: 'Yes, we provide services throughout The Bahamas. Additional travel fees may apply for events outside Nassau.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, bank transfers, and major credit cards. A deposit is typically required to secure your booking.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-display font-bold text-lg text-primary-purple mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}