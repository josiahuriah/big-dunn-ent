'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Send, Sparkles } from 'lucide-react';
import {
  formatPrice,
  generatorAddOns,
  generatorPackages,
  productionPackages,
  weddingPackages,
} from '@/src/lib/site-data';

const eventTypes = [
  { value: 'Wedding', label: 'Wedding', detail: 'Ceremony, reception, or both' },
  { value: 'Concert', label: 'Concert', detail: 'Live music and performance' },
  { value: 'Festival', label: 'Festival', detail: 'Outdoor or multi-act production' },
  { value: 'Corporate Event', label: 'Corporate', detail: 'Meeting, launch, gala, or awards' },
  { value: 'Birthday Party', label: 'Birthday', detail: 'Milestone or private celebration' },
  { value: 'Private Party', label: 'Private event', detail: 'Dinner, shower, or gathering' },
  { value: 'Equipment Rental', label: 'Equipment rental', detail: 'Individual items or a custom list' },
  { value: 'Generator Rental', label: 'Generator rental', detail: '6 kW to 100 kW event power' },
  { value: 'Other', label: 'Something else', detail: 'Tell us what you are planning' },
] as const;

const serviceOptions = [
  { value: 'Audio', description: 'Speakers, microphones, monitors, and engineering' },
  { value: 'Lighting', description: 'Uplighting, intelligent fixtures, and programming' },
  { value: 'Staging', description: 'Stages, risers, truss, and roofs' },
  { value: 'Visuals', description: 'LED walls, screens, projection, and displays' },
  { value: 'Power', description: 'Generators, distribution, and cable management' },
  { value: 'Event Rentals', description: 'Furniture, dance floors, bars, and support pieces' },
  { value: 'DJ Services', description: 'DJ performance and music programming' },
  { value: 'Special Effects', description: 'Fog, cold spark, snow, and monograms' },
] as const;

const budgetOptions = ['Under $500', '$500–$1,500', '$1,500–$5,000', '$5,000–$10,000', '$10,000+', 'Not sure yet'];

type BuilderData = {
  eventType: string;
  packageName: string;
  services: string[];
  addOns: string[];
  eventDate: string;
  eventTime: string;
  setupTime: string;
  guests: string;
  venue: string;
  island: string;
  budget: string;
  message: string;
  name: string;
  email: string;
  phone: string;
  contactPreference: string;
  referralSource: string;
  website: string;
};

const initialData: BuilderData = {
  eventType: '', packageName: '', services: [], addOns: [], eventDate: '', eventTime: '', setupTime: '', guests: '', venue: '', island: 'New Providence', budget: '', message: '', name: '', email: '', phone: '', contactPreference: 'No preference', referralSource: '', website: '',
};

export default function QuoteBuilder() {
  const searchParams = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BuilderData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const eventType = searchParams.get('eventType');
    const packageName = searchParams.get('package');
    const requestedServices = searchParams.get('services')?.split(',').filter(Boolean) ?? [];
    const matchedEventType = eventTypes.find((item) => item.value === eventType)?.value ?? '';
    const matchedServices = serviceOptions
      .filter((option) => requestedServices.some((requested) => requested.toLowerCase().includes(option.value.toLowerCase())))
      .map((option) => option.value);
    setData((current) => ({ ...current, eventType: matchedEventType || current.eventType, packageName: packageName || current.packageName, services: matchedServices.length ? matchedServices : current.services }));
  }, [searchParams]);

  const packageOptions = useMemo(() => {
    if (data.eventType === 'Wedding') return weddingPackages.map((item) => ({ ...item }));
    if (['Concert', 'Festival', 'Corporate Event'].includes(data.eventType)) return productionPackages.map((item) => ({ ...item, note: 'Production scope subject to venue review' }));
    if (data.eventType === 'Generator Rental') return generatorPackages.map((item) => ({ ...item, note: 'Delivery and fuel included for 8 hours' }));
    return [] as Array<{ name: string; price: number; note?: string }>;
  }, [data.eventType]);

  const selectedPackage = packageOptions.find((item) => item.name === data.packageName);
  const addOnTotal = generatorAddOns.filter((item) => data.addOns.includes(item.name)).reduce((sum, item) => sum + item.price, 0);
  const estimatedTotal = selectedPackage ? selectedPackage.price + addOnTotal : undefined;

  const setField = <K extends keyof BuilderData>(field: K, value: BuilderData[K]) => {
    setData((current) => ({ ...current, [field]: value }));
  };

  const toggleListValue = (field: 'services' | 'addOns', value: string) => {
    setData((current) => ({
      ...current,
      [field]: current[field].includes(value) ? current[field].filter((item) => item !== value) : [...current[field], value],
    }));
  };

  const moveTo = (nextStep: number) => {
    if (step === 1 && nextStep > step && !data.eventType) {
      setError('Choose the type of event or rental to continue.');
      return;
    }
    setError('');
    setStep(nextStep);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const handleEventType = (eventType: string) => {
    setData((current) => ({ ...current, eventType, packageName: '', addOns: [] }));
    setError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const pricingNote = estimatedTotal !== undefined
      ? `${selectedPackage?.note ?? 'Website starting price'}; final pricing is subject to scope, venue, duration, delivery, setup, and availability.`
      : 'Custom configuration selected; manual pricing required after scope review.';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          message: data.message.trim() || 'No additional notes were provided in the website Quote Builder.',
          estimatedTotal,
          pricingNote,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'We could not send your quote request. Please try again.');
      setSubmitted(true);
      requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'We could not send your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div ref={topRef} className="scroll-mt-28 rounded-[24px] border border-line bg-white p-8 text-center shadow-[0_24px_70px_rgba(22,19,31,0.09)] md:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple text-white"><Check size={30} /></div>
        <span className="bd-kicker mt-7 inline-block">Request received</span>
        <h2 className="bd-display mx-auto mb-4 mt-4 max-w-[680px] text-ink" style={{ fontSize: 'clamp(27px,3.5vw,42px)' }}>Your event details are with our production team.</h2>
        <p className="mx-auto mb-0 max-w-[590px] text-[15.5px] leading-[1.75] text-body">We will review the scope and follow up using your preferred contact method. Your selected starting price is not a final booking total until the venue and requirements are confirmed.</p>
        <div className="mx-auto mt-8 max-w-[420px] rounded-[16px] border border-line bg-alt p-5 text-left">
          <div className="flex justify-between gap-4 text-[13px]"><span className="text-muted">Event</span><strong className="text-right text-ink">{data.eventType}</strong></div>
          <div className="mt-3 flex justify-between gap-4 text-[13px]"><span className="text-muted">Package</span><strong className="text-right text-ink">{data.packageName || 'Custom configuration'}</strong></div>
          <div className="mt-3 flex justify-between gap-4 text-[13px]"><span className="text-muted">Starting estimate</span><strong className="text-right text-purple">{estimatedTotal !== undefined ? formatPrice(estimatedTotal) : 'To be scoped'}</strong></div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 lg:grid-cols-[1fr_340px] lg:items-start">
      <div ref={topRef} className="scroll-mt-28 overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_24px_70px_rgba(22,19,31,0.09)]">
        <div className="border-b border-line px-6 py-6 md:px-9">
          <div className="mb-4 flex items-center justify-between gap-4 text-[11px] font-extrabold uppercase tracking-[0.16em]"><span className="text-purple">Step {step} of 4</span><span className="text-muted">{['Event', 'Package & services', 'Logistics', 'Contact'][step - 1]}</span></div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-gradient-to-r from-purple to-blue transition-[width]" style={{ width: `${step * 25}%` }} /></div>
        </div>

        <div className="p-6 md:p-9">
          {step === 1 && (
            <fieldset>
              <legend className="bd-display text-[23px] text-ink md:text-[28px]">What are you planning?</legend>
              <p className="mb-7 mt-3 text-[14.5px] leading-[1.65] text-body">Choose the closest fit. You can customize the technical scope next.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {eventTypes.map((item) => {
                  const selected = data.eventType === item.value;
                  return <button key={item.value} type="button" className="bd-choice text-left" data-selected={selected} onClick={() => handleEventType(item.value)} aria-pressed={selected}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${selected ? 'border-purple bg-purple text-white' : 'border-line-2 text-transparent'}`}><Check size={14} /></span><span><strong className="block text-[14px] text-ink">{item.label}</strong><span className="mt-1 block text-[12.5px] leading-[1.5] text-muted">{item.detail}</span></span></button>;
                })}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <div>
              <h2 className="bd-display m-0 text-[23px] text-ink md:text-[28px]">Choose a starting point.</h2>
              <p className="mb-7 mt-3 text-[14.5px] leading-[1.65] text-body">Select a published package or leave it custom. Then choose every service you expect to need.</p>
              {packageOptions.length > 0 && <div className="mb-8"><div className="bd-label">Package</div><div className="grid gap-3 sm:grid-cols-2"><button type="button" className="bd-choice text-left" data-selected={!data.packageName} onClick={() => setField('packageName', '')}><span className="mt-0.5 text-purple"><Sparkles size={20} /></span><span><strong className="block text-[14px] text-ink">Custom configuration</strong><span className="mt-1 block text-[12px] text-muted">Priced after scope review</span></span></button>{packageOptions.map((item) => { const selected = data.packageName === item.name; return <button key={item.name} type="button" className="bd-choice text-left" data-selected={selected} onClick={() => setField('packageName', item.name)}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${selected ? 'border-purple bg-purple text-white' : 'border-line-2 text-transparent'}`}><Check size={14} /></span><span><strong className="block text-[14px] text-ink">{item.name}</strong><span className="mt-1 block text-[12px] font-bold text-purple">Starting at {formatPrice(item.price)}</span><span className="mt-1 block text-[11.5px] leading-[1.45] text-muted">{item.note}</span></span></button>; })}</div></div>}
              <div className="bd-label">Services needed</div>
              <div className="grid gap-3 sm:grid-cols-2">{serviceOptions.map((item) => { const selected = data.services.includes(item.value); return <button key={item.value} type="button" className="bd-choice text-left" data-selected={selected} onClick={() => toggleListValue('services', item.value)} aria-pressed={selected}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] border ${selected ? 'border-purple bg-purple text-white' : 'border-line-2 text-transparent'}`}><Check size={14} /></span><span><strong className="block text-[14px] text-ink">{item.value}</strong><span className="mt-1 block text-[12px] leading-[1.45] text-muted">{item.description}</span></span></button>; })}</div>
              {data.eventType === 'Generator Rental' && <div className="mt-8"><div className="bd-label">Generator add-ons</div><div className="grid gap-3 sm:grid-cols-2">{generatorAddOns.map((item) => { const selected = data.addOns.includes(item.name); return <button key={item.name} type="button" className="bd-choice min-h-0 text-left" data-selected={selected} onClick={() => toggleListValue('addOns', item.name)}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] border ${selected ? 'border-purple bg-purple text-white' : 'border-line-2 text-transparent'}`}><Check size={14} /></span><span><strong className="block text-[14px] text-ink">{item.name}</strong><span className="mt-1 block text-[12px] font-bold text-purple">{formatPrice(item.price)}</span></span></button>; })}</div></div>}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="bd-display m-0 text-[23px] text-ink md:text-[28px]">Help us plan the logistics.</h2>
              <p className="mb-7 mt-3 text-[14.5px] leading-[1.65] text-body">Share what you know now. Unknown details can be confirmed with our team.</p>
              <div className="grid gap-5 sm:grid-cols-2"><div><label className="bd-label" htmlFor="eventDate">Event date</label><input className="bd-input" id="eventDate" type="date" value={data.eventDate} onChange={(e) => setField('eventDate', e.target.value)} /></div><div><label className="bd-label" htmlFor="guests">Expected guests</label><input className="bd-input" id="guests" type="number" min="1" max="99999" placeholder="e.g. 150" value={data.guests} onChange={(e) => setField('guests', e.target.value)} /></div><div><label className="bd-label" htmlFor="eventTime">Event start time</label><input className="bd-input" id="eventTime" type="time" value={data.eventTime} onChange={(e) => setField('eventTime', e.target.value)} /></div><div><label className="bd-label" htmlFor="setupTime">Preferred setup time</label><input className="bd-input" id="setupTime" type="time" value={data.setupTime} onChange={(e) => setField('setupTime', e.target.value)} /></div><div><label className="bd-label" htmlFor="venue">Venue</label><input className="bd-input" id="venue" placeholder="Venue name or private residence" value={data.venue} onChange={(e) => setField('venue', e.target.value)} /></div><div><label className="bd-label" htmlFor="island">Island / area</label><input className="bd-input" id="island" placeholder="New Providence" value={data.island} onChange={(e) => setField('island', e.target.value)} /></div><div className="sm:col-span-2"><label className="bd-label" htmlFor="budget">Working budget</label><select className="bd-input" id="budget" value={data.budget} onChange={(e) => setField('budget', e.target.value)}><option value="">Select a range (optional)</option>{budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></div><div className="sm:col-span-2"><label className="bd-label" htmlFor="message">Anything else we should know?</label><textarea className="bd-input min-h-[130px] resize-y" id="message" maxLength={3000} placeholder="Programme, performers, venue restrictions, equipment quantities, load-in details, or the experience you want to create..." value={data.message} onChange={(e) => setField('message', e.target.value)} /></div></div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="bd-display m-0 text-[23px] text-ink md:text-[28px]">Where should we send the follow-up?</h2>
              <p className="mb-7 mt-3 text-[14.5px] leading-[1.65] text-body">These details create or update your contact and associate this request with a sales deal in HubSpot.</p>
              <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="quote-website">Website</label><input id="quote-website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => setField('website', e.target.value)} /></div>
              <div className="grid gap-5 sm:grid-cols-2"><div className="sm:col-span-2"><label className="bd-label" htmlFor="quote-name">Full name *</label><input className="bd-input" id="quote-name" autoComplete="name" required minLength={2} maxLength={100} value={data.name} onChange={(e) => setField('name', e.target.value)} /></div><div><label className="bd-label" htmlFor="quote-email">Email *</label><input className="bd-input" id="quote-email" type="email" autoComplete="email" required maxLength={254} value={data.email} onChange={(e) => setField('email', e.target.value)} /></div><div><label className="bd-label" htmlFor="quote-phone">Phone / WhatsApp *</label><input className="bd-input" id="quote-phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} value={data.phone} onChange={(e) => setField('phone', e.target.value)} /></div><div><label className="bd-label" htmlFor="contactPreference">Preferred contact</label><select className="bd-input" id="contactPreference" value={data.contactPreference} onChange={(e) => setField('contactPreference', e.target.value)}><option>Phone</option><option>Email</option><option>WhatsApp</option><option>No preference</option></select></div><div><label className="bd-label" htmlFor="referralSource">How did you hear about us?</label><input className="bd-input" id="referralSource" maxLength={120} placeholder="Referral, Instagram, Google..." value={data.referralSource} onChange={(e) => setField('referralSource', e.target.value)} /></div></div>
              <div className="mt-7 rounded-[15px] border border-line bg-alt p-5"><div className="flex items-start gap-3"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-blue" /><p className="m-0 text-[12.5px] leading-[1.65] text-body">By submitting, you agree that Big Dunn Entertainment may contact you about this request. A starting estimate is not a reservation or final invoice.</p></div></div>
            </div>
          )}

          {error && <div className="mt-6 rounded-[12px] border border-red-200 bg-red-50 p-4 text-[13px] text-red-700" role="alert">{error}</div>}
          <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
            {step > 1 ? <button type="button" className="bd-btn bd-btn-outline !px-5 !py-3" onClick={() => moveTo(step - 1)}><ArrowLeft size={15} /> Back</button> : <span />}
            {step < 4 ? <button type="button" className="bd-btn bd-btn-primary !px-5 !py-3" onClick={() => moveTo(step + 1)}>Continue <ArrowRight size={15} /></button> : <button type="submit" className="bd-btn bd-btn-gradient !px-5 !py-3 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : <>Send request <Send size={15} /></>}</button>}
          </div>
        </div>
      </div>

      <aside className="rounded-[22px] border border-line bg-dark p-6 text-white shadow-[0_20px_55px_rgba(22,19,31,0.16)] lg:sticky lg:top-[104px]">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-purple-soft">Quote summary</span>
        <h2 className="bd-display mb-0 mt-3 text-[18px]">{data.eventType || 'Your event'}</h2>
        <div className="my-6 border-y border-white/10 py-5"><div className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/50">Starting estimate</div><div className="bd-display mt-2 text-[28px] text-white">{estimatedTotal !== undefined ? formatPrice(estimatedTotal) : 'To scope'}</div><p className="mb-0 mt-2 text-[11.5px] leading-[1.55] text-white/50">{estimatedTotal !== undefined ? 'Based on selected package and published add-ons.' : 'Choose a package for a published starting price.'}</p></div>
        <dl className="m-0 grid gap-4 text-[12.5px]"><div><dt className="mb-1 text-white/45">Package</dt><dd className="m-0 font-semibold text-white/85">{data.packageName || 'Custom configuration'}</dd></div><div><dt className="mb-1 text-white/45">Services</dt><dd className="m-0 font-semibold leading-[1.5] text-white/85">{data.services.length ? data.services.join(', ') : 'Not selected yet'}</dd></div><div><dt className="mb-1 text-white/45">Date</dt><dd className="m-0 font-semibold text-white/85">{data.eventDate || 'To be confirmed'}</dd></div><div><dt className="mb-1 text-white/45">Venue</dt><dd className="m-0 font-semibold text-white/85">{data.venue || data.island || 'To be confirmed'}</dd></div></dl>
      </aside>
    </form>
  );
}
