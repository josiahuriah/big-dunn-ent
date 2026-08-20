'use client';

import { useState } from 'react';
import { Star, Send, MessageSquare } from 'lucide-react';

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    rating: 0,
    review: '',
    suggestions: '',
    website: '',
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', eventType: '', rating: 0, review: '', suggestions: '', website: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Review submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = ['Wedding', 'Concert', 'Corporate Event', 'Birthday Party', 'Festival', 'Private Party', 'Other'];
  const activeRating = hoveredRating || formData.rating;

  return (
    <section className="relative overflow-hidden px-6 py-24" style={{ background: '#100c1c' }}>
      <div
        className="absolute pointer-events-none"
        style={{ top: '-120px', right: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(106,38,201,0.35),transparent 70%)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: '-140px', left: '-60px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(47,57,232,0.28),transparent 70%)' }}
      />

      <div className="relative max-w-[820px] mx-auto">
        <div className="text-center mb-11">
          <div
            className="inline-flex items-center justify-center w-[66px] h-[66px] rounded-[18px] mb-[22px]"
            style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 14px 34px rgba(106,38,201,0.4)' }}
          >
            <MessageSquare size={30} className="text-white" />
          </div>
          <h2 className="bd-display text-white m-0 mb-4" style={{ fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.2 }}>
            Share Your Experience
          </h2>
          <p className="text-[16px] leading-[1.7] max-w-[520px] mx-auto m-0" style={{ color: '#b6afc9' }}>
            We&apos;d love to hear about your event. Your feedback helps us keep raising the bar.
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div
            className="rounded-[16px] p-[26px] text-center animate-fadeIn"
            style={{ background: 'rgba(47,57,232,0.14)', border: '1px solid rgba(47,57,232,0.4)' }}
          >
            <Star size={30} style={{ color: '#8b7fd6' }} fill="#8b7fd6" className="mx-auto" />
            <h3 className="bd-display text-white text-[18px] mt-3 mb-2">Thank You!</h3>
            <p className="text-[15px] m-0" style={{ color: '#b6afc9' }}>We appreciate you sharing your experience.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] p-10"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}
          >
            <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="review-website">Website</label>
              <input
                type="text"
                id="review-website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="bd-label-dark">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bd-input-dark" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="bd-label-dark">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bd-input-dark" placeholder="john@example.com" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="eventType" className="bd-label-dark">Event Type</label>
              <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="bd-input-dark">
                <option value="">Select event type</option>
                {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="mb-5">
              <label className="bd-label-dark">Rate Your Experience</label>
              <div className="flex gap-2.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="bg-none border-none p-0 cursor-pointer transition-transform hover:scale-110"
                  >
                    <Star
                      size={34}
                      style={{ color: star <= activeRating ? '#8b7fd6' : 'rgba(255,255,255,0.3)' }}
                      fill={star <= activeRating ? '#8b7fd6' : 'transparent'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="review" className="bd-label-dark">Tell Us About Your Experience</label>
              <textarea
                id="review" name="review" value={formData.review} onChange={handleChange} required rows={4}
                className="bd-input-dark resize-none"
                placeholder="Share what you loved about our service, equipment, and team..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="suggestions" className="bd-label-dark">Any Suggestions for Improvement? (Optional)</label>
              <textarea
                id="suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange} rows={3}
                className="bd-input-dark resize-none"
                placeholder="Help us serve you better..."
              />
            </div>

            {submitStatus === 'error' && (
              <div className="mb-5 rounded-[10px] p-3 text-sm text-white" style={{ background: 'rgba(220,38,38,0.14)', border: '1px solid rgba(248,113,113,0.4)' }}>
                Oops! Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || formData.rating === 0}
              className="w-full text-white font-bold text-[14px] tracking-[0.04em] uppercase border-none p-4 rounded-[11px] cursor-pointer transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg,#6a26c9,#2f39e8)', boxShadow: '0 14px 34px rgba(106,38,201,0.4)' }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={17} />
                  <span>Submit Review</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
