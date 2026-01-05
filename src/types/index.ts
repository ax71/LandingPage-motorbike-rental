// Motorcycle data interface
export interface Motorcycle {
  id: string;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  specs: {
    capacity: string;
    transmission: string;
    fuelType?: string;
  };
}

// Location with delivery fee
export interface Location {
  id: string;
  name: string;
  fee: number;
}

// Testimonial data interface
export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  avatar: string;
  review: string;
  rating: number;
}

// FAQ item interface
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Customer type for document requirements
export type CustomerType = "foreigner" | "local";

// Booking form data
export interface BookingFormData {
  pickupDate: string;
  returnDate: string;
  location: string;
  locationFee: number;
  duration: number;
  customerType: CustomerType;
}
