'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: '' });
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const eventTypes = ['Wedding', 'Concert', 'Corporate Event', 'Birthday Party', 'Festival', 'Private Party', 'Other'];

  const contacts = [
    { Icon: MapPin, title: 'Location', details: ['Carew Street', 'Nassau, Bahamas'], link: 'https://maps.google.com/?q=Carew+Street+Nassau+Bahamas' },
    { Icon: Phone, title: 'Phone', details: ['1-242-449-3010', '1-242-812-5683'], link: 'tel:+12424493010' },
    { Icon: Mail, title: 'Email', details: ['info@bigdunnentertainment.com'], link: 'mailto:info@bigdunnentertainment.com' },
    { Icon: Clock, title: 'Business Hours', details: ['Mon–Fri: 9AM–6PM', 'Sat: 10AM–4PM', 'Sun: By Appointment'], link: '#' },
  ];

  const faqs = [
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-3 months in advance for weddings and large events. However, we often accommodate last-minute requests based on availability.' },
    { q: 'Do you provide setup and breakdown services?', a: 'Yes! All our packages include professional setup and breakdown. Our experienced team ensures everything is perfectly installed and removed efficiently.' },
    { q: 'Can I customize a package?', a: 'Absolutely! While we offer pre-designed packages, we specialize in creating custom solutions tailored to your specific needs and budget.' },
    { q: 'Do you serve areas outside of Nassau?', a: 'Yes, we provide services throughout The Bahamas. Additional travel fees may apply for events outside Nassau.' },
    { q: 'What payment methods do you accept?', a: 'We accept cash, bank transfers, and major credit cards. A deposit is typically required to secure your booking.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6" style={{ background: '#100c1c', paddingTop: '170px', paddingBottom: '150px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-140px', right: '-60px', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.4),transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '-140px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(47,57,232,0.3),transparent 70%)' }} />
        <div className="relative max-w-[1240px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3.5 mb-[22px]">
            <span style={{ height: '2px', width: '44px', background: 'linear-gradient(90deg,transparent,#6a26c9)' }} />
            <span className="bd-kicker-light">Get In Touch</span>
            <span style={{ height: '2px', width: '44px', background: 'linear-gradient(90deg,#2f39e8,transparent)' }} />
          </div>
          <h1 className="bd-display text-white m-0 mb-5" style={{ fontSize: 'clamp(32px,4.6vw,60px)', lineHeight: 1.12 }}>
            Let&apos;s Talk
          </h1>
          <p className="font-light m-0 mx-auto" style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.6, color: '#c4bed5', maxWidth: '560px' }}>
            Let&apos;s start planning your unforgettable event.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS + FORM */}
      <section className="px-6 pb-24" style={{ background: '#f6f5fa' }}>
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-[22px]" style={{ transform: 'translateY(-84px)', marginBottom: '-60px' }}>
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bd-card bd-card-hover p-6 block no-underline"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-[18px]" style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)' }}>
                <c.Icon size={22} />
              </div>
              <h3 className="bd-display text-ink text-[14px] m-0 mb-3">{c.title}</h3>
              {c.details.map((d, j) => (
                <p key={j} className="text-[13.5px] leading-[1.5] text-body m-0 mb-[3px]">{d}</p>
              ))}
            </a>
          ))}
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-14">
          {/* Form */}
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <span className="bd-kline" />
              <span className="bd-kicker">Request a Quote</span>
            </div>
            <h2 className="bd-display text-ink m-0 mb-3.5" style={{ fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.2 }}>
              Free Quote
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-body m-0 mb-8">
              Fill out the form and we&apos;ll get back to you within 24 hours with a customized quote for your event.
            </p>

            {submitStatus === 'success' && (
              <div className="rounded-[14px] px-[22px] py-5 mb-6 flex gap-3.5 items-start" style={{ background: 'rgba(47,57,232,0.08)', border: '1px solid rgba(106,38,201,0.35)' }}>
                <CheckCircle size={24} className="text-blue flex-shrink-0" />
                <div>
                  <p className="font-bold text-[15px] text-ink m-0 mb-1">Thank you for reaching out!</p>
                  <p className="text-sm text-body m-0">We&apos;ll be in touch shortly to discuss your event.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="bd-label">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bd-input" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="bd-label">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bd-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="bd-label">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="bd-input" placeholder="242-123-4567" />
                </div>
                <div>
                  <label htmlFor="eventType" className="bd-label">Event Type *</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="bd-input">
                    <option value="">Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventDate" className="bd-label">Event Date</label>
                  <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} className="bd-input" />
                </div>
                <div>
                  <label htmlFor="guests" className="bd-label">Expected Guests</label>
                  <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="bd-input" placeholder="100" min="1" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="bd-label">Tell us about your event *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bd-input resize-none" placeholder="Share your vision, equipment needs, special requirements, or any questions you have..." />
              </div>
              <button type="submit" disabled={isSubmitting} className="bd-btn bd-btn-gradient bd-btn-block !p-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              <p className="text-[12.5px] text-muted text-center m-0">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[18px] overflow-hidden" style={{ border: '1px solid #ece9f3', boxShadow: '0 16px 40px rgba(22,19,31,0.1)', aspectRatio: '4/3' }}>
              <iframe
                title="Big Dunn Entertainment location"
                src="https://www.google.com/maps?q=Carew+Street+Nassau+Bahamas&output=embed"
                className="w-full h-full block"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="text-white p-8 rounded-[18px]" style={{ background: 'linear-gradient(135deg,#3d1a7a,#6a26c9 60%,#2f39e8)', boxShadow: '0 20px 46px rgba(106,38,201,0.28)' }}>
              <h3 className="bd-display text-[18px] m-0 mb-2.5">Prefer to Talk Directly?</h3>
              <p className="text-[14px] leading-[1.6] m-0 mb-[22px]" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Our team is ready to answer your questions and provide expert guidance for your event.
              </p>
              <a href="tel:+12424493010" className="flex items-center gap-3 text-white no-underline font-semibold text-[15px] mb-3.5">
                <Phone size={18} style={{ color: '#c9b8f2' }} />
                1-242-449-3010
              </a>
              <a href="mailto:info@bigdunnentertainment.com" className="flex items-center gap-3 text-white no-underline font-semibold text-[14px]">
                <Mail size={18} style={{ color: '#c9b8f2' }} />
                info@bigdunnentertainment.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-[18px]" style={{ border: '1px solid #ece9f3', boxShadow: '0 12px 30px rgba(22,19,31,0.05)' }}>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={22} className="text-purple" />
                <h3 className="bd-display text-ink text-[16px] m-0">Office Hours</h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  ['Monday – Friday', '9:00 AM – 6:00 PM'],
                  ['Saturday', '10:00 AM – 4:00 PM'],
                  ['Sunday', 'By Appointment'],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between text-sm">
                    <span className="font-semibold" style={{ color: '#3a3646' }}>{d}</span>
                    <span className="text-body">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-12">
            <span className="bd-kicker">FAQ</span>
            <h2 className="bd-display text-ink m-0 mt-3.5" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3.5">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-[14px] px-[30px] py-[26px]" style={{ background: '#f9f8fc', border: '1px solid #ece9f3' }}>
                <h3 className="font-bold text-[16px] m-0 mb-2.5" style={{ color: '#3d1a7a' }}>{f.q}</h3>
                <p className="text-[14.5px] leading-[1.7] text-body m-0">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
