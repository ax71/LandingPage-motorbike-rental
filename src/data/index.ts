import { Motorcycle, Testimonial, FAQItem } from "@/types";

// Motorcycle listing data
export const motorcycles: Motorcycle[] = [
  {
    id: "1",
    name: "Honda PCX",
    type: "Automatic Scooter",
    image: "/images/motorcycles/honda-pcx.png",
    pricePerDay: 70000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
  {
    id: "2",
    name: "Yamaha NMAX",
    type: "Premium Scooter",
    image: "/images/motorcycles/yamaha-nmax.png",
    pricePerDay: 80000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
  {
    id: "3",
    name: "Vespa Primavera",
    type: "Classic Scooter",
    image: "/images/motorcycles/vespa-primavera.png",
    pricePerDay: 100000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
  {
    id: "4",
    name: "Honda Scoopy",
    type: "City Scooter",
    image: "/images/motorcycles/honda-scoopy.png",
    pricePerDay: 60000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
  {
    id: "5",
    name: "Yamaha Aerox",
    type: "Sport Scooter",
    image: "/images/motorcycles/AEROX-Metallic-Red.png",
    pricePerDay: 85000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
  {
    id: "6",
    name: "Honda Beat",
    type: "Economic Scooter",
    image: "/images/motorcycles/honda-beat.png",
    pricePerDay: 55000,
    specs: {
      capacity: "2 Person",
      transmission: "Automatic",
      fuelType: "Petrol",
    },
  },
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Anderson",
    origin: "Australia",
    avatar: "/images/avatars/customer-1.png",
    review:
      "Amazing service! No passport deposit required which was perfect for us. The scooter was delivered right to our villa on time. Highly recommend!",
    rating: 5,
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    origin: "Japan",
    avatar: "/images/avatars/customer-2.png",
    review:
      "Very professional and friendly service. The bike was in excellent condition and the rental process was so easy. Will definitely rent again!",
    rating: 5,
  },
  {
    id: "3",
    name: "Marco & Sofia",
    origin: "Italy",
    avatar: "/images/avatars/customer-3.png",
    review:
      "Best motorcycle rental experience in Bali! Free delivery, great prices, and excellent customer service. The insurance coverage gave us peace of mind.",
    rating: 5,
  },
];

// FAQ data
export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What documents are needed to rent a motorcycle?",
    answer:
      "You only need a valid driver's license and a photo of your passport. No passport deposit required! We'll verify your documents and you're ready to ride.",
  },
  {
    id: "2",
    question: "Is gasoline included in the rental price?",
    answer:
      "The motorcycle will be delivered with a full tank. You can return it with any fuel level - no need to refill before returning. However, for weekly/monthly rentals, fuel is your responsibility during the rental period.",
  },
  {
    id: "3",
    question: "How does the insurance work?",
    answer:
      "All our motorcycles come with basic insurance coverage included in the rental price. This covers third-party liability. We also offer optional comprehensive insurance for additional protection.",
  },
  {
    id: "4",
    question: "Do you provide free delivery?",
    answer:
      "Yes! We offer free delivery and pickup to your villa, hotel, or location within our service area. Just let us know where you're staying when you book.",
  },
  {
    id: "5",
    question: "What if the motorcycle breaks down?",
    answer:
      "We provide 24/7 roadside assistance. If you experience any mechanical issues, just contact us and we'll either fix it on-site or provide a replacement motorcycle at no extra cost.",
  },
  {
    id: "6",
    question: "Can I extend my rental period?",
    answer:
      "Absolutely! Just contact us via WhatsApp before your rental period ends. We'll check availability and arrange the extension with discounted rates for longer periods.",
  },
];

// Service areas
export const serviceAreas = ["Canggu", "Kuta", "Sanur", "Ubud", "Denpasar"];

// WhatsApp number (user should update this)
export const WHATSAPP_NUMBER = "6281234567890"; // TODO: Update with actual number

// Helper function to generate WhatsApp URL
export function generateWhatsAppURL(
  motorcycleName: string,
  days: number = 1
): string {
  const message = `Hello! I want to rent ${motorcycleName} for ${days} day${
    days > 1 ? "s" : ""
  }`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
