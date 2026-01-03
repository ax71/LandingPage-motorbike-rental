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

// Booking form data
export interface BookingFormData {
  pickupDate: string;
  returnDate: string;
  location: string;
}
