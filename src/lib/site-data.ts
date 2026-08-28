export const MEDIA_ROOT = '/images/Bigdunn%20Photos';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  startingAt: number;
  priceContext: string;
  highlights: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: 'audio-production',
    name: 'Professional Audio',
    shortName: 'Audio',
    eyebrow: 'Sound with intention',
    description: 'Clear, even coverage for ceremonies, live music, speeches, DJs, and full concert productions.',
    longDescription:
      'We design the system around your audience, venue, programme, and performance needs—then manage delivery, tuning, and on-site operation.',
    image: `${MEDIA_ROOT}/equipment/RCF-HDL-30-Line-Arrays.jpeg`,
    startingAt: 500,
    priceContext: 'DJ and sound package',
    highlights: ['RCF HDL line arrays', 'Stage monitors and double 18-inch subwoofers', 'Shure wireless microphones', 'DJ controllers and professional engineering'],
    process: ['Review the venue and audience size', 'Design the right coverage and input plan', 'Deliver, tune, sound-check, and operate'],
  },
  {
    slug: 'lighting-design',
    name: 'Lighting Design',
    shortName: 'Lighting',
    eyebrow: 'Shape the atmosphere',
    description: 'Architectural uplighting, intelligent fixtures, monograms, and effects that make the room feel designed.',
    longDescription:
      'From a refined wedding palette to a high-energy concert look, our team builds lighting scenes around the mood and key moments of your event.',
    image: `${MEDIA_ROOT}/monogram.jpeg`,
    startingAt: 250,
    priceContext: 'uplighting or static monogram',
    highlights: ['Wireless uplighting', 'Intelligent beam and wash fixtures', 'Custom static and animated monograms', 'Fog, cold spark, and special effects'],
    process: ['Define the visual direction', 'Map fixtures to the room and programme', 'Program, install, and operate'],
  },
  {
    slug: 'staging-structures',
    name: 'Staging & Structures',
    shortName: 'Staging',
    eyebrow: 'Built for the moment',
    description: 'Modular stages, risers, truss, roofs, and safe event structures scaled to your venue and production.',
    longDescription:
      'We coordinate practical dimensions, sightlines, access, and production loads so performers and presenters have a confident platform.',
    image: `${MEDIA_ROOT}/riser.jpeg`,
    startingAt: 5170,
    priceContext: 'complete Core production package',
    highlights: ['Modular stage decks up to 32 × 32 feet', 'Truss systems and covered stage options', 'Speaker wings and VIP risers', 'Cable protection and coordinated setup'],
    process: ['Confirm footprint and programme', 'Plan the stage and technical structure', 'Install, inspect, and strike'],
  },
  {
    slug: 'video-visuals',
    name: 'Video & Visuals',
    shortName: 'Visuals',
    eyebrow: 'Every seat gets the view',
    description: 'LED walls, screens, projection, and displays for live visuals, branded content, films, and presentations.',
    longDescription:
      'We match display scale and brightness to the space, then manage signal, playback, and placement for a clean audience experience.',
    image: `${MEDIA_ROOT}/rentals-2.jpeg`,
    startingAt: 5170,
    priceContext: 'complete Core production package',
    highlights: ['Modular LED video walls', 'High-lumen projectors and large screens', '75-inch displays', 'Playback and signal support'],
    process: ['Review content and viewing distance', 'Specify the display and signal path', 'Install, test, and run playback'],
  },
  {
    slug: 'generator-rentals',
    name: 'Generator Rentals',
    shortName: 'Power',
    eyebrow: 'Power you can count on',
    description: 'Reliable event power from 6 kW to 100 kW, with delivery and fuel included for the published eight-hour rental period.',
    longDescription:
      'We help match capacity to your production, venue, and run time, with distribution and connection support available when needed.',
    image: `${MEDIA_ROOT}/generator-rental.jpeg`,
    startingAt: 200,
    priceContext: '6 kW / 8-hour rental',
    highlights: ['6 kW, 30 kW, 60 kW, and 100 kW options', 'Delivery and fuel included', 'Distribution rental available', 'Connection service available'],
    process: ['List equipment and service loads', 'Confirm capacity and access', 'Deliver, connect, and collect'],
  },
  {
    slug: 'event-rentals',
    name: 'Event Rentals',
    shortName: 'Rentals',
    eyebrow: 'The pieces that complete it',
    description: 'Furniture, screens, dance floors, portable bars, cable protection, and supporting equipment for polished events.',
    longDescription:
      'Choose individual rental pieces or combine them with production services. We help keep the delivery and setup plan coordinated.',
    image: `${MEDIA_ROOT}/exlusive-setup.jpeg`,
    startingAt: 200,
    priceContext: 'select individual rentals',
    highlights: ['Banquet and cocktail tables', 'Folding and cocktail chairs', 'Dance floors and portable bar', 'Outdoor cinema and presentation setups'],
    process: ['Build the item list', 'Confirm quantities and logistics', 'Deliver, place, and collect'],
  },
];

export type EventPage = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  gallery: string[];
  startingAt: number;
  priceContext: string;
  inclusions: string[];
};

export const events: EventPage[] = [
  {
    slug: 'weddings',
    name: 'Weddings',
    eyebrow: 'Designed around your day',
    description: 'Ceremony sound, reception lighting, DJ services, monograms, and effects built into one coordinated celebration.',
    image: `${MEDIA_ROOT}/wedding-decor-2.jpeg`,
    gallery: [`${MEDIA_ROOT}/wedding-decor.jpeg`, `${MEDIA_ROOT}/wedding-decor-3.jpeg`, `${MEDIA_ROOT}/wedding-decor-4.jpeg`],
    startingAt: 250,
    priceContext: 'Bronze package',
    inclusions: ['Ceremony and reception audio', 'Architectural and feature lighting', 'DJ and microphone options', 'Monograms and special effects'],
  },
  {
    slug: 'concerts-festivals',
    name: 'Concerts & Festivals',
    eyebrow: 'Production that carries',
    description: 'Scalable audio, lighting, staging, video, power, and technical support for live audiences of every size.',
    image: `${MEDIA_ROOT}/concert-2.jpeg`,
    gallery: [`${MEDIA_ROOT}/concert-1.jpeg`, `${MEDIA_ROOT}/concert-5.jpeg`, `${MEDIA_ROOT}/concert-6.jpeg`],
    startingAt: 5170,
    priceContext: 'Core production package',
    inclusions: ['Line-array audio and stage monitoring', 'Stage, truss, and roof options', 'Show lighting and LED walls', 'Generator and professional engineering'],
  },
  {
    slug: 'corporate-events',
    name: 'Corporate Events',
    eyebrow: 'Clear, polished, on cue',
    description: 'Professional sound, screens, staging, and branded environments for meetings, launches, awards, and hospitality.',
    image: `${MEDIA_ROOT}/riser.jpeg`,
    gallery: [`${MEDIA_ROOT}/rentals-2.jpeg`, `${MEDIA_ROOT}/monogram.jpeg`],
    startingAt: 500,
    priceContext: 'audio and presentation support',
    inclusions: ['Wireless microphones and playback', 'Presentation screens and LED displays', 'Stages, risers, and lectern support', 'Branded lighting and on-site technicians'],
  },
  {
    slug: 'private-celebrations',
    name: 'Private Celebrations',
    eyebrow: 'Make the setting feel special',
    description: 'Flexible production and rentals for birthdays, anniversaries, showers, dinners, and milestone gatherings.',
    image: `${MEDIA_ROOT}/exlusive-setup.jpeg`,
    gallery: [`${MEDIA_ROOT}/wedding-decor-3.jpeg`, `${MEDIA_ROOT}/rentals-2.jpeg`, `${MEDIA_ROOT}/monogram.jpeg`],
    startingAt: 250,
    priceContext: 'lighting and atmosphere package',
    inclusions: ['DJ and sound options', 'Uplighting and visual effects', 'Tables, chairs, screens, and dance floors', 'Custom packages for homes and venues'],
  },
];

export const weddingPackages = [
  { name: 'Bronze', price: 250, note: 'Setup fee not included' },
  { name: 'Iron', price: 500, note: 'Setup fee not included' },
  { name: 'Rhenium', price: 650, note: 'Setup fee not included' },
  { name: 'Silver', price: 750, note: 'Setup fee not included' },
  { name: 'Palladium', price: 800, note: 'Setup fee not included' },
  { name: 'Ruthenium', price: 1100, note: 'Setup fee not included' },
  { name: 'Gold', price: 1300, note: 'Setup fee included' },
  { name: 'Platinum', price: 1500, note: 'Setup fee included' },
  { name: 'Rhodium', price: 2000, note: 'Setup fee included' },
  { name: 'Exclusive Plus', price: 2800, note: 'Setup fee included' },
] as const;

export const productionPackages = [
  { name: 'Core Package', price: 5170 },
  { name: 'Prime Package', price: 6780 },
  { name: 'Premium Package', price: 9095 },
  { name: 'Elite Package', price: 16000 },
] as const;

export const generatorPackages = [
  { name: '6 kW Generator — 8 hours', price: 200 },
  { name: '30 kW Generator — 8 hours', price: 625 },
  { name: '60 kW Generator — 8 hours', price: 825 },
  { name: '100 kW Generator — 8 hours', price: 925 },
] as const;

export const generatorAddOns = [
  { name: 'Distribution rental', price: 150 },
  { name: 'Connection service', price: 100 },
] as const;

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
