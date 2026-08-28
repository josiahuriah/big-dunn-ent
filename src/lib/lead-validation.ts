import { z } from 'zod';

export const EVENT_TYPES = [
  'Wedding',
  'Concert',
  'Corporate Event',
  'Birthday Party',
  'Festival',
  'Private Party',
  'Equipment Rental',
  'Generator Rental',
  'Other',
] as const;

export const QUOTE_SERVICE_OPTIONS = [
  'Audio',
  'Lighting',
  'Staging',
  'Visuals',
  'Power',
  'Event Rentals',
  'DJ Services',
  'Special Effects',
] as const;

export const CONTACT_PREFERENCES = ['Phone', 'Email', 'WhatsApp', 'No preference'] as const;

function isValidDate(value: string) {
  if (value === '') return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export const quoteLeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(254),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .refine((value) => value.replace(/\D/g, '').length >= 7, 'Enter a valid phone number'),
  eventType: z.enum(EVENT_TYPES),
  eventDate: z.string().trim().max(10).refine(isValidDate, 'Enter a valid event date').default(''),
  guests: z
    .string()
    .trim()
    .max(5)
    .refine((value) => value === '' || /^[1-9]\d{0,4}$/.test(value), 'Enter a valid guest count')
    .default(''),
  message: z.string().trim().min(10).max(3000),
  eventTime: z.string().trim().max(20).default(''),
  setupTime: z.string().trim().max(20).default(''),
  venue: z.string().trim().max(160).default(''),
  island: z.string().trim().max(100).default(''),
  services: z.array(z.enum(QUOTE_SERVICE_OPTIONS)).max(QUOTE_SERVICE_OPTIONS.length).default([]),
  addOns: z.array(z.string().trim().min(1).max(100)).max(12).default([]),
  packageName: z.string().trim().max(120).default(''),
  budget: z.string().trim().max(80).default(''),
  contactPreference: z.enum(CONTACT_PREFERENCES).optional(),
  referralSource: z.string().trim().max(120).default(''),
  estimatedTotal: z.number().finite().nonnegative().max(1_000_000).optional(),
  pricingNote: z.string().trim().max(500).default(''),
  website: z.string().max(200).optional().default(''),
});

export const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(''),
});

export const reviewSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(254),
  eventType: z.enum(EVENT_TYPES),
  rating: z.number().int().min(1).max(5),
  review: z.string().trim().min(10).max(3000),
  suggestions: z.string().trim().max(1500).default(''),
  website: z.string().max(200).optional().default(''),
});

export type QuoteLead = z.infer<typeof quoteLeadSchema>;
export type ReviewSubmission = z.infer<typeof reviewSchema>;
