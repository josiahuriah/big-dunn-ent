'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';

export default function EmailSubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, website }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" style={{ background: 'rgba(16,12,28,0.6)', backdropFilter: 'blur(4px)' }} onClick={handleClose} />

      <div
        className="relative bg-white rounded-[20px] max-w-lg w-full overflow-hidden animate-fadeInUp"
        style={{ boxShadow: '0 30px 80px rgba(16,12,28,0.4)' }}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10" aria-label="Close">
          <X size={22} />
        </button>

        {/* Decorative header */}
        <div className="relative h-28 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg,#3d1a7a,#6a26c9 60%,#2f39e8)' }}>
          <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%,#fff 1px,transparent 1px),radial-gradient(circle at 70% 70%,#fff 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Sparkles size={30} className="text-white" />
          </div>
        </div>

        <div className="p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg,rgba(106,38,201,0.12),rgba(47,57,232,0.12))' }}>
                <Mail size={32} className="text-purple" />
              </div>
              <h3 className="bd-display text-ink text-2xl mb-2">Thank You!</h3>
              <p className="text-body">You&apos;ve been successfully subscribed to our newsletter.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="bd-display text-ink m-0 mb-3" style={{ fontSize: '26px', lineHeight: 1.2 }}>Stay in the Loop</h3>
                <p className="text-body text-[15px]">
                  Subscribe to receive special offers and updates on our latest equipment and packages.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="newsletter-website">Website</label>
                  <input
                    type="text"
                    id="newsletter-website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="bd-input !pl-12 !py-4"
                    aria-label="Email Address"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs leading-[1.5] text-body cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 accent-purple"
                  />
                  <span>I agree to receive marketing emails from Big Dunn Entertainment. I can unsubscribe at any time.</span>
                </label>

                {submitStatus === 'error' && (
                  <div className="rounded-lg p-3 text-sm" style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.25)', color: '#b91c1c' }}>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting || !consent} className="bd-btn bd-btn-gradient bd-btn-block !py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Mail size={18} />
                      <span>Subscribe Now</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-muted text-center">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
