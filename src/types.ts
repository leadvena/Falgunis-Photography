export interface CameraSettings {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'portrait' | 'family' | 'commercial';
  imageUrl: string;
  location: string;
  story: string;
  settings: CameraSettings;
  featured: boolean;
}

export interface ExtraCustomOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ServicePackage {
  id: string;
  category: 'wedding' | 'portrait' | 'family' | 'commercial';
  name: string;
  basePrice: number;
  tagline: string;
  duration: string;
  deliverables: string;
  inclusions: string[];
  extraOptions: ExtraCustomOption[];
}

export interface ClientReview {
  id: string;
  author: string;
  rating: number;
  reviewText: string;
  date: string;
  serviceType: string;
  location: string;
}

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  message: string;
  estimatedPrice: number;
  selectedExtras: string[];
  dateSubmitted: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
}
