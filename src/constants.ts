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
    imageUrl: 'https://picsum.photos/seed/room1/1200/800',
    features: ['King Size Bed', 'En-suite Bathroom', 'Direct Pool Access', 'Walk-in Closet']
  },
  {
    id: 'suite-2',
    name: 'Garden Suite I',
    description: 'Immersed in manicured greenery, this suite is a study in tranquility. Floor-to-ceiling glass walls frame the tropical landscape like a living painting, ensuring nature is never more than a glance away. Ideal for those seeking privacy and deep focus, it features a dedicated workspace and a plush queen-size bed.',
    imageUrl: 'https://picsum.photos/seed/room2/1200/800',
    features: ['Queen Size Bed', 'Private Garden Terrace', 'Work Desk', 'Safety Box']
  },
  {
    id: 'suite-3',
    name: 'Garden Suite II',
    description: 'Tucked away in the quietest wing of the villa, this versatile suite is perfect for family or friends. It can be configured as a king or twin setup, offering flexibility without compromising on luxury. The large windows overlook the fern garden, creating a cool, shaded retreat from the midday sun.',
    imageUrl: 'https://picsum.photos/seed/room3/1200/800',
    features: ['Twin/King Convertible', 'Garden View', 'Deep Soaking Tub', 'Smart TV']
  },
  {
    id: 'master-2',
    name: 'The Pavilion Suite',
    description: 'A standalone architectural gem, the Pavilion Suite offers the ultimate in seclusion. Detached from the main building, it functions as a private cottage with its own lounge area and meditative garden spot. The soaring ceilings and cross-ventilation design embrace the traditional Balinese way of living with a modern twist.',
    imageUrl: 'https://picsum.photos/seed/room4/1200/800',
    features: ['King Size Bed', 'Private Lounge', 'Outdoor Shower', 'Mini Bar']
  }
];

// EXPANDED GALLERY FOR MASONRY LAYOUT WITH CATEGORIES
export const GALLERY_IMAGES: ImageItem[] = [
  { id: '1', url: 'https://picsum.photos/seed/poolvb/1200/800', alt: 'Main Pool at Dusk', category: 'Exteriors', span: true },
  { id: '2', url: 'https://picsum.photos/seed/livingvb/800/1200', alt: 'Living Area High Ceiling', category: 'Interiors', span: false },
  { id: '3', url: 'https://picsum.photos/seed/gardenvb/800/800', alt: 'Tropical Garden Path', category: 'Exteriors', span: false },
  { id: '4', url: 'https://picsum.photos/seed/kitchenvb/800/600', alt: 'Gourmet Kitchen', category: 'Interiors', span: false },
  { id: '5', url: 'https://picsum.photos/seed/bathvb/800/1200', alt: 'Stone Bathtub Details', category: 'Details', span: false },
  { id: '6', url: 'https://picsum.photos/seed/archvb/1200/800', alt: 'Architectural Facade', category: 'Exteriors', span: true },
  { id: '7', url: 'https://picsum.photos/seed/bedvb/800/600', alt: 'Linen Details', category: 'Details', span: false },
  { id: '8', url: 'https://picsum.photos/seed/nightvb/800/800', alt: 'Villa by Night', category: 'Night', span: false },
  { id: '9', url: 'https://picsum.photos/seed/loungevb/800/600', alt: 'Sunset Lounge', category: 'Interiors', span: false },
  { id: '10', url: 'https://picsum.photos/seed/artvb/800/1200', alt: 'Balinese Artifacts', category: 'Details', span: false },
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
    text: "Honestly, we booked this just to escape the Canggu crowds, and it was the best decision. The photos don't capture the actual scale of the living area—it is massive. Waking up to that quiet every morning was exactly what we needed.",
    author: "James & Sophie",
    origin: "London, UK"
  },
  {
    id: 2,
    text: "It wasn't just the design, it was the team. They anticipated things before we asked—from fresh coconuts by the pool to sorting out our dinner reservations. It felt completely private, yet we never felt abandoned.",
    author: "The Anderson Family",
    origin: "Perth, Australia"
  }
];