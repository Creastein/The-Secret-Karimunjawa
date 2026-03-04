export interface Facility {
  id: string;
  name: string;
  iconName: 'Anchor' | 'Utensils' | 'Car' | 'PawPrint' | 'Eye' | 'CigaretteOff' | 'ConciergeBell' | 'Sunrise' | 'Coffee' | 'Leaf' | 'Sparkles' | 'Smartphone';
  description: string;
}

export interface Room {
  id: string;
  name: string;
  typeLabel: string;
  bedDetails: string;
  description: string;
  imageUrl: string;
  features: string[];
  startingPrice: number;
}

export type ImageCategory = 'Exteriors' | 'Interiors' | 'Details' | 'Night';

export interface ImageItem {
  id: string;
  url: string;
  alt: string;
  category: ImageCategory;
  span?: boolean; // For masonry layout
}

export interface PricingTier {
  season: string;
  price: string;
  currency: string;
  currencySymbol: string;
  details: string;
}

export type LocationIconName = 'Waves' | 'Ship' | 'Mountain' | 'MapPin';

export interface LocationSpot {
  name: string;
  time: string;
  description: string;
  iconName: LocationIconName;
}

export interface LocationAccess {
  label: string;
  description: string;
}
