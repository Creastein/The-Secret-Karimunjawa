import { Facility, Room, ImageItem, PricingTier } from './types';

export const FACILITIES: Facility[] = [
  { id: '1', name: 'High-Speed Wi-Fi', iconName: 'Wifi', description: 'Fiber optic connection throughout the estate.' },
  { id: '2', name: 'Climate Control', iconName: 'Wind', description: 'Silent air-conditioning in all suites.' },
  { id: '3', name: 'Entertainment', iconName: 'Tv', description: '65" Smart TVs with Netflix & intl channels.' },
  { id: '4', name: 'Gourmet Kitchen', iconName: 'Utensils', description: 'Fully equipped with microwave, oven & stove.' },
  { id: '5', name: 'Private Pool', iconName: 'Waves', description: '15m x 4m lap pool with salt filtration.' },
  { id: '6', name: 'Expansive Garden', iconName: 'Trees', description: '600m² of manicured tropical landscape.' },
  { id: '7', name: 'Safety', iconName: 'Shield', description: 'In-room safes and 24/7 neighborhood security.' },
  { id: '8', name: 'Concierge', iconName: 'Coffee', description: 'Daily housekeeping and butler services.' },
];

export const ROOMS: Room[] = [
  {
    id: 'master-1',
    name: 'The Ocean Master',
    description: 'Commanding the prime position of the estate, this master sanctuary offers seamless indoor-outdoor living. Wake up to the sight of the shimmering lap pool, accessible directly from your private teak terrace. The interior features a bespoke king-size canopy bed, a dedicated reading corner, and a luxurious semi-outdoor rain shower that captures the essence of tropical bathing.',
    imageUrl: '/assets/room-The-Ocean-Master.png',
    features: ['King Size Bed', 'En-suite Bathroom', 'Direct Pool Access', 'Walk-in Closet']
  },
  {
    id: 'suite-2',
    name: 'The Master Suite',
    description: 'Immersed in manicured greenery, this suite is a study in tranquility. Floor-to-ceiling glass walls frame the tropical landscape like a living painting, ensuring nature is never more than a glance away. Ideal for those seeking privacy and deep focus, it features a dedicated workspace and a plush queen-size bed.',
    imageUrl: '/assets/room-The-Master-Suite.png',
    features: ['Queen Size Bed', 'Private Garden Terrace', 'Work Desk', 'Safety Box']
  },
  {
    id: 'suite-3',
    name: 'Deluxe Suite',
    description: 'Tucked away in the quietest wing of the villa, this versatile suite is perfect for family or friends. It can be configured as a king or twin setup, offering flexibility without compromising on luxury. The large windows overlook the fern garden, creating a cool, shaded retreat from the midday sun.',
    imageUrl: '/assets/room-deluxe.png',
    features: ['Twin/King Convertible', 'Garden View', 'Deep Soaking Tub', 'Smart TV']
  },
  {
    id: 'master-2',
    name: 'Guest Suite',
    description: 'A standalone architectural gem, the Pavilion Suite offers the ultimate in seclusion. Detached from the main building, it functions as a private cottage with its own lounge area and meditative garden spot. The soaring ceilings and cross-ventilation design embrace the traditional Balinese way of living with a modern twist.',
    imageUrl: '/assets/room-guest.png',
    features: ['King Size Bed', 'Private Lounge', 'Outdoor Shower', 'Mini Bar']
  }
];

// EXPANDED GALLERY FOR MASONRY LAYOUT WITH CATEGORIES
export const GALLERY_IMAGES: ImageItem[] = [
  { id: '1', url: '/assets/gallery-exteriors-1.png', alt: 'Main Pool at Dusk', category: 'Exteriors', span: true },
  { id: '2', url: '/assets/gallery-interiors-1.png', alt: 'Living Area High Ceiling', category: 'Interiors', span: false },
  { id: '3', url: '/assets/gallery-exteriors-2.png', alt: 'Tropical Garden Path', category: 'Exteriors', span: false },
  { id: '4', url: '/assets/gallery-interiors-2.png', alt: 'Gourmet Kitchen', category: 'Interiors', span: false },
  { id: '5', url: '/assets/gallery-details-1.png', alt: 'Stone Bathtub Details', category: 'Details', span: false },
  { id: '6', url: '/assets/gallery-details-2.png', alt: 'Linen Details', category: 'Details', span: false },
  { id: '7', url: '/assets/gallery-night-1.png', alt: 'Villa by Night', category: 'Night', span: false },
  { id: '8', url: '/assets/gallery-night-2.png', alt: 'Evening Terrace Glow', category: 'Night', span: false },
];

export const PRICING: PricingTier = {
  season: 'Standard Rate',
  price: '8,910,000',
  currency: 'IDR',
  details: 'Per 2 nights. Includes tax & service. Min 2 nights.'
};

export const REVIEWS = [
  {
    id: 1,
    text: "This is the most 'homely' place I've ever stayed in during my time in Bali. The surroundings are quiet and safe, and the villa rooms are spotlessly clean. The breakfast is absolutely delicious — fresh, hygienic, and we always felt completely full every morning. I would definitely choose to stay here again.",
    author: "Chuchun Cheng",
    origin: "5/5 — Google Review"
  },
  {
    id: 2,
    text: "Staying at this villa for our honeymoon was truly unforgettable. The serene surroundings, breathtaking views, and thoughtful attention to every detail created a perfect sense of peace and romance. When the owner got to know we were here for our honeymoon, he surprisingly left a cake for us. One of the best owners and staff — must check out this place.",
    author: "Himani Gupta",
    origin: "5/5 — Google Review"
  },
  {
    id: 3,
    text: "We had an amazing stay at the villa. The place was spotless, spacious, and beautifully designed. The rooms were cozy, the pool was clean and private, and the surroundings were incredibly peaceful. The staff were friendly and always ready to help. It truly felt like a home away from home. Highly recommended!",
    author: "Rupeash Gautam",
    origin: "5/5 — Google Review"
  }
];
