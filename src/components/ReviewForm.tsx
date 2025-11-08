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
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          eventType: '',
          rating: 0,
          review: '',
          suggestions: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
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

  const eventTypes = [
    'Wedding',
    'Concert',
    'Corporate Event',
    'Birthday Party',
    'Festival',
    'Private Party',
    'Other',
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-purple to-primary-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <MessageSquare size={40} className="text-secondary-green" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We'd love to hear about your event! Your feedback helps us continue 
            delivering exceptional service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitStatus === 'success' && (
            <div className="bg-secondary-green/10 border-2 border-secondary-green backdrop-blur-sm text-white p-6 rounded-xl mb-8 animate-fadeIn">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <Star className="text-secondary-green fill-secondary-green" size={24} />
                Thank You for Your Feedback!
              </h3>
              <p>
                We appreciate you taking the time to share your experience. Your review 
                will be reviewed and may be featured on our website.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500/10 border-2 border-red-300 backdrop-blur-sm text-white p-4 rounded-xl mb-8 animate-fadeIn">
              <p className="font-semibold">Oops! Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg focus:border-secondary-green focus:outline-none transition-colors text-white placeholder-white/60"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg focus:border-secondary-green focus:outline-none transition-colors text-white placeholder-white/60"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm font-semibold mb-2">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg focus:border-secondary-green focus:outline-none transition-colors text-white"
              >
                <option value="" className="text-gray-900">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="text-gray-900">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Rate Your Experience *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={40}
                      className={`${
                        star <= (hoveredRating || formData.rating)
                          ? 'text-secondary-green fill-secondary-green'
                          : 'text-white/40'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="review" className="block text-sm font-semibold mb-2">
                Tell Us About Your Experience *
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg focus:border-secondary-green focus:outline-none transition-colors resize-none text-white placeholder-white/60"
                placeholder="Share what you loved about our service, equipment, and team..."
              />
            </div>

            <div>
              <label htmlFor="suggestions" className="block text-sm font-semibold mb-2">
                Any Suggestions for Improvement? (Optional)
              </label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg focus:border-secondary-green focus:outline-none transition-colors resize-none text-white placeholder-white/60"
                placeholder="Help us serve you better..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.rating === 0}
              className="w-full bg-secondary-green text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-neutral-dark" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Submit Review</span>
                </>
              )}
            </button>

            
          </form>
        </div>
      </div>
    </section>
  );
}
