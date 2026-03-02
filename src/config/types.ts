export interface Facility {
  id: string;
  name: string;
  iconName: 'Anchor' | 'Utensils' | 'Car' | 'PawPrint' | 'Eye' | 'CigaretteOff' | 'ConciergeBell' | 'Sunrise';
  description: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
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
  details: string;
}