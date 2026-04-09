import { Facility, Room, ImageItem, PricingTier, LocationSpot, LocationAccess, NearbyTab } from './types';

export const FACILITIES: Facility[] = [
  { id: '1', name: 'Sea & Sunset View', iconName: 'Eye', description: 'Breathtaking 180-degree ocean views and spectacular daily sunsets.' },
  { id: '11', name: 'Cozy Kitchen-Bar', iconName: 'Beer', description: 'The heart of The Secret - a welcoming place where guests gather and enjoy friendly conversations.' },
  { id: '4', name: 'Private Garden', iconName: 'Leaf', description: 'Lush tropical private garden for ultimate tranquility.' },
  { id: '2', name: 'Private Veranda', iconName: 'Coffee', description: 'Spacious private outdoor living area to relax and unwind.' },
  { id: '8', name: 'Sunrise Breakfast', iconName: 'Sunrise', description: 'Delicious daily breakfast options to start your morning.' },
  { id: '10', name: 'Eco-conscious living', iconName: 'Recycle', description: 'Stay lightly on the island with the dedicated zero single-use plastic approach and effort to recycle and compost.' },
  { id: '9', name: 'Friendly Resident Dog', iconName: 'PawPrint', description: 'Our friendly dog is part of the family and may greet you during your stay.' },
  { id: '6', name: 'Daily Housekeeping', iconName: 'Sparkles', description: 'Daily cleaning service to ensure your comfort.' },
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
    bedDetails: 'King Bed (2m x 2m)',
    description: 'A secluded one-bedroom sanctuary with total privacy, a private kitchen, and a breezy veranda framing the sea and sunset beyond the palms.',
    imageUrl: '/assets/Cipaku/cipaku2.webp',
    gallery: [
      '/assets/Cipaku/cipaku2.webp',
      '/assets/Cipaku/cipaku12.webp',
      '/assets/Cipaku/cipaku13.webp',
      '/assets/Cipaku/cipaku5.webp',
      '/assets/Cipaku/cipaku3.webp',
      '/assets/Cipaku/cipaku17.webp',
      '/assets/Cipaku/cipaku18.webp',
    ],
    features: ['Private Kitchen', 'Private Veranda', 'Sea View', 'Sunset View'],
    startingPrice: 1600000,
    maxPrice: 1900000,
    lowSeasonPrice: 1600000,
    highSeasonPrice: 1900000,
  },
  {
    id: 'birdsong',
    name: 'Birdsong',
    typeLabel: 'Deluxe',
    bedDetails: 'King Bed (2m x 2m)',
    description: 'An airy deluxe retreat with generous indoor space and an expansive veranda, designed for uninterrupted sea and sunset views.',
    imageUrl: '/assets/Birdsong/Birdsong1.webp',
    gallery: [
      '/assets/Birdsong/Birdsong1.webp',
      '/assets/Birdsong/Birdsong2.webp',
      '/assets/Birdsong/Birdsong3.webp',
      '/assets/Birdsong/Birdsong4.webp',
      '/assets/Birdsong/Birdsong5.webp',
      '/assets/Birdsong/Birdsong6.webp',
      '/assets/Birdsong/Birdsong7.webp',
    ],
    features: ['Sea View', 'Sunset View', 'Spacious Veranda', 'Daily Housekeeping'],
    startingPrice: 1600000,
    maxPrice: 1900000,
    lowSeasonPrice: 1600000,
    highSeasonPrice: 1900000,
  },
  {
    id: 'tivoli-garden',
    name: 'Tivoli Garden',
    typeLabel: 'Superior',
    bedDetails: 'Queen Bed (1.8m x 2m) + Double Bed (1.5m x 2m)',
    description: 'A serene superior suite with a private garden, crafted for restful stays with flexible bedding for families or friends.',
    imageUrl: '/assets/TivoliGarden/TivoliGarden1.webp',
    gallery: [
      '/assets/TivoliGarden/TivoliGarden1.webp',
      '/assets/TivoliGarden/TivoliGarden2.webp',
    ],
    features: ['Private Garden', 'Garden View', 'Flexible Bedding', 'Daily Housekeeping'],
    startingPrice: 1500000,
    maxPrice: 1900000,
    lowSeasonPrice: 1500000,
    highSeasonPrice: 1900000,
    comingSoon: true,
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

export const WHATSAPP_NUMBER = '6289682381293';
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
  whatsappText: '+62 896-8238-1293',
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

export const NEARBY_TABS: NearbyTab[] = [
  {
    id: 'nearby',
    labelKey: 'location.tabs.nearby',
    places: [
      { name: 'Pantai Batu Topeng', category: 'Landmark', distance: '786m', categoryColor: '#4285F4' },
      { name: 'Bukit Maming', category: 'Landmark', distance: '1.2km', categoryColor: '#4285F4' },
      { name: 'Tanjung Gelam', category: 'Landmark', distance: '1.7km', categoryColor: '#4285F4' },
      { name: 'Syamsinar', category: 'Restoran', distance: '2.3km', categoryColor: '#EA4335' },
      { name: 'Whaleys Cafe', category: 'Restoran', distance: '2.6km', categoryColor: '#EA4335' },
    ],
  },
  {
    id: 'culinary',
    labelKey: 'location.tabs.culinary',
    places: [
      { name: 'Syamsinar', category: 'Restoran', distance: '2.3km', categoryColor: '#EA4335' },
      { name: 'Whaleys Cafe', category: 'Restoran', distance: '2.6km', categoryColor: '#EA4335' },
      { name: 'Alun-alun & Pasar Ikan', category: 'Kuliner Malam', distance: '2.8km', categoryColor: '#EA4335' },
      { name: 'Basa-basi Karimunjawa', category: 'Restoran', distance: '3.1km', categoryColor: '#EA4335' },
      { name: 'Eat & Meet Restaurant', category: 'Restoran', distance: '4km', categoryColor: '#EA4335' },
      { name: 'Hakuna Matata Resto', category: 'Restoran', distance: '4.2km', categoryColor: '#EA4335' },
      { name: 'Saung Odang', category: 'Restoran', distance: '4.5km', categoryColor: '#EA4335' },
    ],
  },
  {
    id: 'airport',
    labelKey: 'location.tabs.airport',
    places: [
      { name: 'Bandar Udara Dewadaru', category: 'Bandara', distance: '8km', categoryColor: '#4285F4' },
    ],
  },
  {
    id: 'transport',
    labelKey: 'location.tabs.transport',
    places: [
      { name: 'Pelabuhan Karimunjawa', category: 'Pelabuhan', distance: '4.9km', categoryColor: '#4285F4' },
    ],
  },
  {
    id: 'landmarks',
    labelKey: 'location.tabs.landmarks',
    places: [
      { name: 'Pantai Batu Topeng', category: 'Pantai', distance: '786m', categoryColor: '#4285F4' },
      { name: 'Bukit Maming', category: 'View Point', distance: '1.2km', categoryColor: '#4285F4' },
      { name: 'Tanjung Gelam', category: 'Pantai', distance: '1.7km', categoryColor: '#4285F4' },
      { name: 'Alun-alun Karimunjawa', category: 'Park', distance: '2.8km', categoryColor: '#34A853' },
      { name: 'Bukit Love', category: 'View Point', distance: '4.6km', categoryColor: '#4285F4' },
      { name: 'Bukit Bendera', category: 'View Point', distance: '4.8km', categoryColor: '#4285F4' },
      { name: 'Pelabuhan Karimunjawa', category: 'Pelabuhan', distance: '4.9km', categoryColor: '#4285F4' },
      { name: 'Bukit Joko Tuwo', category: 'View Point', distance: '5.1km', categoryColor: '#4285F4' },
      { name: 'Pantai Bobi', category: 'Pantai', distance: '5.4km', categoryColor: '#4285F4' },
      { name: 'Pantai Nirwana', category: 'Pantai', distance: '5.9km', categoryColor: '#4285F4' },
      { name: 'Pantai Pancuran', category: 'Pantai', distance: '6.3km', categoryColor: '#4285F4' },
      { name: 'Pantai Anora', category: 'Pantai', distance: '11.5km', categoryColor: '#4285F4' },
    ],
  },
];


export const TESTIMONIALS_SECTION = {
  eyebrow: 'Guest Voices',
  title: 'Moments from Our Guests',
  ratingLabel: 'Guest Rating',
  ratingValue: '9.6/10',
  ratingSource: 'Booking.com',
} as const;

export const GALLERY_IMAGES: ImageItem[] = [
  // ── Birdsong ──
  // Interiors
  { id: '1', url: '/assets/Birdsong/Birdsong6.webp', alt: 'Birdsong Spacious Interior', category: 'Interiors', span: true },
  { id: '2', url: '/assets/Birdsong/gallery8.webp', alt: 'Birdsong Bathroom Design', category: 'Interiors', span: false },
  { id: '3', url: '/assets/Birdsong/Birdsong3.webp', alt: 'Birdsong Bedroom View', category: 'Interiors', span: false },
  { id: '4', url: '/assets/Birdsong/Birdsong4.webp', alt: 'Birdsong Indoor Living Space', category: 'Interiors', span: false },
  // Exteriors
  { id: '5', url: '/assets/Birdsong/Birdsong7.webp', alt: 'Birdsong Veranda', category: 'Exteriors', span: true },
  { id: '6', url: '/assets/Birdsong/gallery5.webp', alt: 'Birdsong Exterior View', category: 'Exteriors', span: false },
  { id: '7', url: '/assets/Birdsong/gallery6.webp', alt: 'Birdsong Surrounding Nature', category: 'Exteriors', span: false },
  // Details
  { id: '8', url: '/assets/Birdsong/Birdsong2.webp', alt: 'Birdsong Hammock Detail', category: 'Details', span: false },
  { id: '9', url: '/assets/Birdsong/Birdsong5.webp', alt: 'Birdsong Wooden Architecture', category: 'Details', span: false },
  { id: '10', url: '/assets/Birdsong/gallery1.webp', alt: 'Birdsong Relaxing Corner', category: 'Details', span: false },
  { id: '11', url: '/assets/Birdsong/gallery2.webp', alt: 'Birdsong Decorative Elements', category: 'Details', span: false },
  { id: '12', url: '/assets/Birdsong/gallery3.webp', alt: 'Birdsong Artisan Details', category: 'Details', span: false },
  { id: '13', url: '/assets/Birdsong/gallery4.webp', alt: 'Birdsong Premium Amenities', category: 'Details', span: false },
  { id: '14', url: '/assets/Birdsong/gallery7.webp', alt: 'Birdsong Natural Textures', category: 'Details', span: false },
  // Night
  { id: '15', url: '/assets/Birdsong/Birdsong1.webp', alt: 'Birdsong at Sunset', category: 'Night', span: true },

  // ── Cipaku ──
  // Details
  { id: '16', url: '/assets/Cipaku/cipaku13.webp', alt: 'Cipaku Artisan Details', category: 'Details', span: false },
  { id: '17', url: '/assets/Cipaku/cipaku14.webp', alt: 'Cipaku Natural Textures', category: 'Details', span: false },
  { id: '18', url: '/assets/Cipaku/cipaku15.webp', alt: 'Cipaku Curated Amenities', category: 'Details', span: false },
  { id: '20', url: '/assets/Cipaku/cipaku18.webp', alt: 'Cipaku Finishing Touches', category: 'Details', span: false },
  // Interiors
  { id: '21', url: '/assets/Cipaku/cipaku2.webp', alt: 'Cipaku Bedroom Suite', category: 'Interiors', span: true },
  { id: '22', url: '/assets/Cipaku/cipaku1.webp', alt: 'Cipaku Living Space', category: 'Interiors', span: false },
  { id: '23', url: '/assets/Cipaku/cipaku4.webp', alt: 'Cipaku Interior Design', category: 'Interiors', span: false },
  { id: '24', url: '/assets/Cipaku/cipaku5.webp', alt: 'Cipaku Cozy Corner', category: 'Interiors', span: false },
  { id: '25', url: '/assets/Cipaku/cipaku12.webp', alt: 'Cipaku Kitchen Area', category: 'Interiors', span: false },
  { id: '26', url: '/assets/Cipaku/cipaku17.webp', alt: 'Cipaku Private Retreat', category: 'Interiors', span: false },
  // Exteriors
  { id: '27', url: '/assets/Cipaku/cipaku10.webp', alt: 'Cipaku Exterior Panorama', category: 'Exteriors', span: true },
  { id: '28', url: '/assets/Cipaku/cipaku6.webp', alt: 'Cipaku Garden Path', category: 'Exteriors', span: false },
  { id: '29', url: '/assets/Cipaku/cipaku7.webp', alt: 'Cipaku Tropical Surroundings', category: 'Exteriors', span: false },
  { id: '30', url: '/assets/Cipaku/cipaku9.webp', alt: 'Cipaku Veranda View', category: 'Exteriors', span: false },
  { id: '31', url: '/assets/Cipaku/cipaku11.webp', alt: 'Cipaku Outdoor Living', category: 'Exteriors', span: false },
  // General Exteriors
  { id: '33', url: '/assets/exterior1.jpeg', alt: 'The Secret Karimunjawa Aerial View', category: 'Exteriors', span: true },
  { id: '34', url: '/assets/exterior-2.jpeg', alt: 'The Secret Karimunjawa Beachfront', category: 'Exteriors', span: false },
  // Night
  { id: '32', url: '/assets/Cipaku/cipaku3.webp', alt: 'Cipaku at Night', category: 'Night', span: false },

  // ── Common Area ──
  // Exteriors
  { id: '35', url: '/assets/common-area/CA1.webp', alt: 'The Secret Common Area Overview', category: 'Exteriors', span: false },
  { id: '36', url: '/assets/common-area/CA2.webp', alt: 'The Secret Garden Pathway', category: 'Exteriors', span: false },
  { id: '37', url: '/assets/common-area/CA3.webp', alt: 'The Secret Tropical Courtyard', category: 'Exteriors', span: false },
  { id: '38', url: '/assets/common-area/CA4.webp', alt: 'The Secret Outdoor Lounge', category: 'Exteriors', span: false },
  { id: '39', url: '/assets/common-area/CA16.webp', alt: 'The Secret Beachfront Area', category: 'Exteriors', span: true },
  { id: '53', url: '/assets/common-area/CA22.webp', alt: 'Common Area Greenery', category: 'Exteriors', span: false },
  { id: '54', url: '/assets/common-area/CA25.webp', alt: 'Common Area Tropical Path', category: 'Exteriors', span: false },
  { id: '55', url: '/assets/common-area/CA26.webp', alt: 'Common Area Sunny View', category: 'Exteriors', span: false },
  { id: '56', url: '/assets/common-area/CA27.webp', alt: 'Common Area Open Space', category: 'Exteriors', span: false },
  { id: '57', url: '/assets/common-area/CA28.webp', alt: 'Common Area Architecture Overview', category: 'Exteriors', span: false },
  { id: '58', url: '/assets/common-area/CA29.webp', alt: 'Common Area Landscaping', category: 'Exteriors', span: false },
  { id: '59', url: '/assets/common-area/CA30.webp', alt: 'Common Area Walkway', category: 'Exteriors', span: false },
  { id: '60', url: '/assets/common-area/CA31.webp', alt: 'Common Area Coastal Vibe', category: 'Exteriors', span: false },
  { id: '61', url: '/assets/common-area/CA32.webp', alt: 'Common Area Rest Spot', category: 'Exteriors', span: false },
  { id: '62', url: '/assets/common-area/CA33.webp', alt: 'Common Area Scenic Corner', category: 'Exteriors', span: false },
  { id: '63', url: '/assets/common-area/CA35.webp', alt: 'Common Area Wide View', category: 'Exteriors', span: false },
  // Details
  { id: '40', url: '/assets/common-area/CA7.webp', alt: 'Common Area Wooden Decor', category: 'Details', span: false },
  { id: '41', url: '/assets/common-area/CA10.webp', alt: 'Common Area Rustic Accents', category: 'Details', span: false },
  { id: '42', url: '/assets/common-area/CA11_5.webp', alt: 'Common Area Tropical Details', category: 'Details', span: false },
  { id: '43', url: '/assets/common-area/CA13.webp', alt: 'Common Area Artisan Crafts', category: 'Details', span: false },
  { id: '44', url: '/assets/common-area/CA14.webp', alt: 'Common Area Natural Elements', category: 'Details', span: false },
  { id: '45', url: '/assets/common-area/CA15.webp', alt: 'Common Area Curated Fixtures', category: 'Details', span: false },
  { id: '46', url: '/assets/common-area/CA17.webp', alt: 'Common Area Island Textures', category: 'Details', span: false },
  { id: '47', url: '/assets/common-area/CA19.webp', alt: 'Common Area Premium Finishing', category: 'Details', span: true },
  { id: '48', url: '/assets/common-area/CA20.webp', alt: 'Common Area Cozy Touches', category: 'Details', span: false },
  { id: '64', url: '/assets/common-area/CA23.webp', alt: 'Common Area Texture Details', category: 'Details', span: false },
  { id: '65', url: '/assets/common-area/CA24.webp', alt: 'Common Area Artisan Material', category: 'Details', span: false },
  // Night
  { id: '49', url: '/assets/common-area/CA6.webp', alt: 'The Secret Evening Ambiance', category: 'Night', span: false },
  { id: '50', url: '/assets/common-area/CA9.webp', alt: 'The Secret Twilight View', category: 'Night', span: false },
  { id: '51', url: '/assets/common-area/CA12.webp', alt: 'The Secret Candlelit Terrace', category: 'Night', span: false },
  { id: '52', url: '/assets/common-area/CA21.webp', alt: 'The Secret Night Sky', category: 'Night', span: false },
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
    text: "3 malam disini sangat memuaskan, kami ber-empat sewa kamar type Alang2 dengan 2 kamar, dapur, private balkon. Hotel sangat nyaman, bersih dan tertata rapih. Yang bikin betah adalah serasa rumah sendiri karena keramahan sang owner Mr. Kang Eddy kebetulan sedang stay disitu, serta Mas Egif yang selalu helpful. Hotel dengan sunset view yg menawan. Ga sabar buat kesana lagi. Terima kasih The Secret Karimunjawa menjadikan liburan kami sangat berkesan.",
    author: "Dedup",
    origin: "5/5 — Google Maps (Indonesia)"
  },
  {
    id: 2,
    text: "Dari mulai pelayanan, kebersihan, toilet, menu breakfast dan kamar utama luar biasa, saya puas dan teman yang saya ajak saja sangat puas, nyaman dan viewnya luar biasa banget.",
    author: "Pak Pong",
    origin: "5/5 — Google Maps"
  },
  {
    id: 3,
    text: "Tempat yang bagus yang pernah kami kunjungi, teman2 yang belum coba silahkan coba ini tempat yang liburan yang indah.",
    author: "Asyer Giandra",
    origin: "5/5 — Google Maps"
  },
  {
    id: 4,
    text: "Hal terakhir yang saya sampaikan kepada pemiliknya adalah bahwa kunjungan kami di Karimunjawa tidak akan sama tanpa The Secret. Properti ini indah dan ramah, dirancang dengan gaya yang menyatu sempurna dengan lingkungan alam dan menghormati lingkungan. Kebersihan dan kenyamanan berada pada tingkat tertinggi. Kami disambut dan dilayani dengan sangat baik, tanpa kekurangan apa pun. Jika kami kembali ke Karimunjawa, kami pasti akan menginap di The Secret.",
    author: "Marcco Gatucci",
    origin: "5/5 — Google Maps"
  },
  {
    id: 5,
    text: "Akomodasi ini memiliki pemandangan yang menakjubkan dan dilengkapi dengan semua yang Anda butuhkan! Kebersihannya luar biasa dan stafnya profesional dan sangat ramah. Egif memastikan kami mendapatkan semua yang kami butuhkan dan memenuhi semua kebutuhan kami. Anda dapat menyewa skuter langsung dari properti dengan harga terjangkau. Saya merekomendasikannya kepada semua orang!",
    author: "Mariana Cornicello",
    origin: "5/5 — Google Maps"
  }
];
