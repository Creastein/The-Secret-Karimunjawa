import { Facility, Room, ImageItem, PricingTier } from './types';

export const FACILITIES: Facility[] = [
  { id: '1', name: 'Beachfront Location', iconName: 'Anchor', description: 'Direct access to pristine Karimunjawa beach with crystal clear water.' },
  { id: '2', name: 'Restaurant & Bar', iconName: 'Utensils', description: 'Indian, Indonesian & Mediterranean cuisine with halal & vegan options.' },
  { id: '3', name: 'Airport Transfer', iconName: 'Car', description: 'Complimentary shuttle from Karimunjawa airport & harbor.' },
  { id: '4', name: 'Pet Friendly', iconName: 'PawPrint', description: 'Furry friends are welcome at the property.' },
  { id: '5', name: 'Sea View Terrace', iconName: 'Eye', description: 'Private terrace overlooking the Java Sea.' },
  { id: '6', name: 'Non-Smoking Rooms', iconName: 'CigaretteOff', description: 'Clean, smoke-free accommodations throughout.' },
  { id: '7', name: 'Room Service', iconName: 'ConciergeBell', description: 'Daily housekeeping and in-room dining available.' },
  { id: '8', name: 'Sunrise Breakfast', iconName: 'Sunrise', description: 'Asian, vegetarian & vegan breakfast options daily.' },
];

export const ROOMS: Room[] = [
  {
    id: 'villa-1',
    name: 'One Bedroom Villa',
    description: 'A private sanctuary where the Java Sea becomes your backdrop. This stunning one-bedroom villa features a super king-size bed, a dedicated sea-view terrace, and a luxurious en-suite bathroom with rain shower. The rustic teak and bamboo interior captures the essence of island living while providing every modern comfort. Wake up to the sound of waves and the sight of turquoise waters stretching to the horizon.',
    imageUrl: '/assets/room-The-Ocean-Master.png',
    features: ['Super King Bed', 'Sea View', 'Private Terrace', 'En-suite Bathroom']
  },
];

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
  season: 'Standard Rate',
  price: '1,350,000',
  currency: 'IDR',
  details: 'Per malam. Sudah termasuk pajak & layanan.'
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
