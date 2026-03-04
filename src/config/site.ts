import { Facility, Room, ImageItem, PricingTier, LocationSpot, LocationAccess } from './types';

export const FACILITIES: Facility[] = [
  { id: '1', name: 'Sea & Sunset View', iconName: 'Eye', description: 'Breathtaking 180-degree ocean views and spectacular daily sunsets.' },
  { id: '2', name: 'Private Veranda', iconName: 'Coffee', description: 'Spacious private outdoor living area to relax and unwind.' },
  { id: '3', name: 'Private Kitchen', iconName: 'Utensils', description: 'Fully equipped private kitchen available in selected villas.' },
  { id: '4', name: 'Private Garden', iconName: 'Leaf', description: 'Lush tropical private garden for ultimate tranquility.' },
  { id: '5', name: 'Airport Transfer', iconName: 'Car', description: 'Convenient pick-up and drop-off service (subject to additional charge).' },
  { id: '6', name: 'Daily Housekeeping', iconName: 'Sparkles', description: 'Daily cleaning service to ensure your comfort.' },
  { id: '7', name: 'Direct Booking', iconName: 'Smartphone', description: 'Book directly via WhatsApp for 0% commission.' },
  { id: '8', name: 'Sunrise Breakfast', iconName: 'Sunrise', description: 'Delicious daily breakfast options to start your morning.' },
];

export const EXPERIENCE_SECTION = {
  eyebrow: 'The Experience',
  title: 'Island',
  titleAccent: 'Adventures',
  description: 'From sea views to private gardens, every detail is curated so you can focus on the island\'s calm rhythm.',
  ctaLabel: 'Request Services',
} as const;

export const ROOMS: Room[] = [
  {
    id: 'cipaku',
    name: 'Cipaku',
    typeLabel: 'One-Bedroom',
    bedDetails: 'King Bed 2x2m',
    description: 'A secluded one-bedroom sanctuary with total privacy, a private kitchen, and a breezy veranda framing the sea and sunset beyond the palms.',
    imageUrl: '/assets/room-The-Ocean-Master.png',
    features: ['Private Kitchen', 'Private Veranda', 'Sea View', 'Sunset View']
  },
  {
    id: 'birdsong',
    name: 'Birdsong',
    typeLabel: 'Deluxe',
    bedDetails: 'King Bed',
    description: 'An airy deluxe retreat with generous indoor space and an expansive veranda, designed for uninterrupted sea and sunset views.',
    imageUrl: '/assets/room-deluxe.png',
    features: ['Sea View', 'Sunset View', 'Spacious Veranda', 'Daily Housekeeping']
  },
  {
    id: 'tivoli-garden',
    name: 'Tivoli Garden',
    typeLabel: 'Superior',
    bedDetails: 'Queen Bed 1.8x2m + Single Bed 1.5x2m',
    description: 'A serene superior suite with a private garden, crafted for restful stays with flexible bedding for families or friends.',
    imageUrl: '/assets/room-guest.png',
    features: ['Private Garden', 'Garden View', 'Flexible Bedding', 'Daily Housekeeping']
  }
];

export const SUITES_SECTION = {
  eyebrow: 'Accommodation',
  title: 'The Private Sanctuaries',
  description: 'Three distinct villas crafted for privacy, comfort, and the island\'s most evocative views.',
  featuresLabel: 'Suite Features',
  ctaLabel: 'Book Now',
  bedLabel: 'Bed Configuration',
  typeLabel: 'Room Type',
} as const;

export const WHATSAPP_NUMBER = '628131011434';
export const WHATSAPP_MESSAGE_TEMPLATE = 'Halo, saya ingin memesan Villa [NAMA UNIT] untuk tanggal [TANGGAL]';
export const WHATSAPP_SERVICE_MESSAGE = 'Halo, saya ingin menanyakan layanan tambahan untuk menginap di The Secret Karimunjawa.';
export const WHATSAPP_AVAILABILITY_MESSAGE = 'Halo, saya ingin mengetahui ketersediaan menginap di The Secret Karimunjawa.';

export const CONTACT_SECTION = {
  eyebrow: 'Connection',
  title: 'Begin Your',
  titleAccent: 'Journey',
  description: 'Tim kami siap membantu pertanyaan Anda terkait The Secret Karimunjawa, termasuk ketersediaan unit dan informasi kunjungan.',
  formTitle: 'Direct Inquiry',
  formSubtitle: 'Response within 2 hours',
  submitLabel: 'Send Request',
  locationLabel: 'Location',
  locationText: 'Jl. I. J. Kasimo, Karimunjawa, Jepara',
  locationLink: 'https://maps.app.goo.gl/N7ZEBC1pCWXsCh2W8',
  whatsappLabel: 'WhatsApp',
  whatsappText: '+62 813 1011 434',
  instagramHandle: '@thesecretkarimunjawa',
  instagramLink: 'https://www.instagram.com/thesecretkarimunjawa/',
} as const;

export const CONTACT_FORM = {
  nameLabel: 'Nama Lengkap',
  namePlaceholder: 'Contoh: Diah Ayu',
  checkInLabel: 'Tanggal Check-in',
  checkOutLabel: 'Tanggal Check-out',
  unitLabel: 'Pilihan Unit',
  unitPlaceholder: 'Pilih unit',
  selectIndicator: '▼',
  whatsappTemplate: 'Halo, saya ingin inquiry ketersediaan di The Secret Karimunjawa.\n\nNama: [NAME]\nCheck-in: [CHECKIN]\nCheck-out: [CHECKOUT]\nUnit: [UNIT]',
} as const;

export const AVAILABILITY_BAR = {
  statusLabel: 'Available',
  priceSuffix: '/ malam',
  reserveLabel: 'Reserve Online',
  whatsappLabel: 'Chat on WhatsApp',
  floatingLabel: 'WhatsApp',
} as const;

export const LOCATION_SECTION = {
  eyebrow: 'The Island',
  title: 'Remote yet',
  titleAccent: 'Reachable',
  description: 'Karimunjawa is an island escape in the Java Sea with calm beaches, warm waters, and a quiet pace of life.',
  directionsLabel: 'Get Directions',
  directionsLink: 'https://maps.app.goo.gl/N7ZEBC1pCWXsCh2W8',
  mapTitle: 'The Secret Karimunjawa Location',
  mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.3965912197481!2d110.41984441013562!3d-5.844144373356223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e73cd8de2eab7fd%3A0xc9e37a881c2d2c92!2sThe%20Secret%20Karimunjawa!5e0!3m2!1sen!2sid!4v1772511849083!5m2!1sen!2sid',
} as const;

export const LOCATION_ACCESS: LocationAccess[] = [
  {
    label: 'From Karimunjawa Airport',
    description: 'Arrange a paid transfer or local taxi for direct access to the villa.',
  },
  {
    label: 'From Karimunjawa Harbor',
    description: 'A short drive from the ferry and speedboat harbor to the property.',
  },
];

export const LOCATION_SPOTS: LocationSpot[] = [
  { name: 'Pantai Batu Topeng', time: '1.3 km', description: 'Pantai terdekat dari The Secret', iconName: 'MapPin' },
  { name: 'Pantai Sunset', time: '1.4 km', description: 'Spot favorit menikmati sunset', iconName: 'MapPin' },
  { name: 'Pantai Ujung Gelam', time: '1.7 km', description: 'Pantai dengan pemandangan sunset ikonik', iconName: 'MapPin' },
  { name: 'Pantai Legon Lele', time: '5 km', description: 'Pantai tenang untuk berenang dan bersantai', iconName: 'MapPin' },
  { name: 'Pantai Kanjen', time: '5 km', description: 'Pantai yang masih relatif sepi dan alami', iconName: 'MapPin' },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: 'Guest Voices',
  title: 'Moments from Our Guests',
  ratingLabel: 'Guest Rating',
  ratingValue: '9.6/10',
  ratingSource: 'Booking.com',
} as const;

export const GALLERY_IMAGES: ImageItem[] = [
  { id: '1', url: '/assets/gallery-exteriors-1.png', alt: 'Aerial View of The Secret Karimunjawa', category: 'Exteriors', span: true },
  { id: '2', url: '/assets/gallery-interiors-1.png', alt: 'Rustic Wooden Living Area', category: 'Interiors', span: false },
  { id: '3', url: '/assets/gallery-exteriors-2.png', alt: 'Beachfront Terrace with Umbrellas', category: 'Exteriors', span: false },
  { id: '4', url: '/assets/gallery-interiors-2.png', alt: 'Seaside Restaurant Pavilion', category: 'Interiors', span: false },
  { id: '5', url: '/assets/gallery-details-1.png', alt: 'Tropical Outdoor Shower', category: 'Details', span: false },
  { id: '6', url: '/assets/gallery-details-2.png', alt: 'Sunrise Breakfast by the Sea', category: 'Details', span: false },
  { id: '7', url: '/assets/gallery-night-1.png', alt: 'The Secret at Sunset', category: 'Night', span: false },
  { id: '8', url: '/assets/gallery-night-2.png', alt: 'Candlelit Evening Terrace', category: 'Night', span: false },
];

export const PRICING: PricingTier = {
  season: 'Seasonal Rates',
  price: '1,600,000 - 2,000,000',
  currency: 'IDR',
  currencySymbol: 'Rp',
  details: 'Per malam tergantung musim (High/Low Season).'
};

export const REVIEWS = [
  {
    id: 1,
    text: "Great view. Staff sangat ramah. Breakfast enak. Bersih. Air dan wc juga bersih. Superb!",
    author: "Ria",
    origin: "9.6/10 — Booking.com"
  },
  {
    id: 2,
    text: "Diluar ekspetasi, tempat menginap yang sangat luar biasa dari segi kenyamanan, staff dan fasilitas. Pengalaman yang luar biasa menginap disini, ditambah owner dan staff yang seperti keluarga padahal baru kenal. Pokoknya rekomendet next time!",
    author: "Muthmainnah",
    origin: "9.6/10 — Booking.com"
  },
  {
    id: 3,
    text: "Properti ini indah dan ramah, dirancang dengan gaya yang menyatu sempurna dengan alam sekitar dan menghargai lingkungan. Masa tinggal kami di Karimunjawa tidak akan sama tanpa The Secret.",
    author: "Marco",
    origin: "9.6/10 — Booking.com"
  }
];
