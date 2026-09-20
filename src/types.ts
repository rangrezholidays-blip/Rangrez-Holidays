export interface TourPackage {
  id: string;
  title: string;
  category: 'golden-triangle' | 'rajasthan' | 'char-dham' | 'same-day' | 'himachal' | 'luxury';
  duration: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  destinations: string[];
  overview: string;
  highlights: string[];
  bestTimeToVisit: string;
  tourType: 'Private Chauffeur' | 'Luxury Guided' | 'Pilgrimage Special' | 'Express Day Tour' | 'Himalayan Explorer';
  groupSize: string;
  travelStyles?: ('family' | 'honeymoon' | 'friends' | 'solo' | 'corporate')[];
  rating?: number;
  reviewsCount?: number;
  startingPrice?: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    overnight: string;
    image?: string;
    imageCaption?: string;
  }[];
  videoUrl?: string;
  videoPoster?: string;
  inclusions: string[];
  exclusions: string[];
  faq?: { question: string; answer: string }[];
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  state: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  culturalSignificance: string;
  topAttractions: {
    name: string;
    description: string;
    image?: string;
  }[];
  bestTimeToVisit: string;
  climateInfo: string;
  travelTips: string[];
  recommendedVehicles: string[];
  popularTours: string[]; // Tour package IDs
}

export interface TaxiVehicle {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'van' | 'luxury';
  tagline: string;
  capacity: string;
  luggage: string;
  fuelType: string;
  image: string;
  features: string[];
  idealFor: string;
  popularRoutes: string[];
  specs: {
    ac: boolean;
    gps: boolean;
    chargingPorts: boolean;
    pushbackSeats: boolean;
    musicSystem: boolean;
    carrier: boolean;
  };
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  country: string;
  avatar: string;
  rating: number;
  tourTaken: string;
  date: string;
  review: string;
  verifiedTrip: boolean;
  userPhotos?: string[];
}

export interface InstaReel {
  id: string;
  title: string;
  location: string;
  authorHandle: string;
  views: string;
  likes: string;
  thumbnail: string;
  videoUrl?: string;
  caption: string;
  tourTag: string;
}

export interface InquiryFormData {
  type: 'tour_package' | 'taxi_rental' | 'custom_plan';
  packageName?: string;
  destination?: string;
  startDate?: string;
  duration?: string;
  adults: number;
  children: number;
  cabPreference?: string;
  pickupLocation?: string;
  dropLocation?: string;
  hotelCategory?: string;
  fullName: string;
  email: string;
  phone: string;
  whatsappSameAsPhone: boolean;
  specialRequests?: string;
}

export interface AvailabilityResult {
  available: boolean;
  slotsRemaining: number;
  isFastFilling: boolean;
  season: string;
  guaranteedDeparture: boolean;
  freeCancellationAllowed: boolean;
  flexiblePostponement: boolean;
  message: string;
}

export interface TravelStylePerk {
  title: string;
  description: string;
  icon?: string;
}

export interface TravelStyleFAQ {
  question: string;
  answer: string;
}

export interface TravelStyle {
  id: 'family' | 'honeymoon' | 'friends' | 'solo' | 'corporate';
  title: string;
  navLabel: string;
  badge: string;
  icon: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  overview: string;
  whyChooseUs: string[];
  tailoredPerks: TravelStylePerk[];
  recommendedVehicleIds: string[];
  vehicleRecommendation: string;
  idealDestinations: string[];
  matchingTourIds: string[];
  travelPacing: string;
  bestMonths: string;
  startingPrice: string;
  stats: {
    toursCount: number;
    satisfactionRate: string;
    avgTripDays: string;
  };
  testimonial: {
    name: string;
    city: string;
    quote: string;
    tourTaken: string;
    rating: number;
    avatar: string;
  };
  faqs: TravelStyleFAQ[];
}
