export interface Facility {
  id: string;
  name: string;
  iconName: 'Anchor' | 'Utensils' | 'Car' | 'PawPrint' | 'Eye' | 'CigaretteOff' | 'ConciergeBell' | 'Sunrise' | 'Coffee' | 'Leaf' | 'Sparkles' | 'Smartphone' | 'Recycle' | 'Beer';
  description: string;
}

export interface Room {
  id: string;
  name: string;
  typeLabel: string;
  bedDetails: string;
  description: string;
  imageUrl: string;
  gallery?: string[];
  features: string[];
  startingPrice: number;
  maxPrice?: number;
  lowSeasonPrice?: number;
  highSeasonPrice?: number;
  comingSoon?: boolean;
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

export interface NearbyPlace {
  name: string;
  category: string;
  distance: string;
  categoryColor: string;
}

export interface NearbyTab {
  id: string;
  labelKey: string;
  places: NearbyPlace[];
}
