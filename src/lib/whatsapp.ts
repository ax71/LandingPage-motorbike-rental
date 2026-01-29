import { CustomerType } from "@/types";
import { formatPrice } from "./utils";

interface WhatsAppBookingData {
  motorcycleName: string;
  pickupDate: string;
  returnDate: string;
  duration: number;
  location: string;
  deliveryFee: number;
  pricePerDay: number;
  totalPrice: number;
  customerType: CustomerType;
}

/**
 * Generate WhatsApp booking link with formatted message
 * @param data - Booking data including motorcycle, dates, location, prices, and customer type
 * @param phoneNumber - WhatsApp business number (default: your business number)
 * @returns WhatsApp link with pre-filled message
 */
export function generateWhatsAppLink(
  data: WhatsAppBookingData,
  phoneNumber: string = "6281234567890", // Replace with your actual WhatsApp business number
): string {
  const {
    motorcycleName,
    pickupDate,
    returnDate,
    duration,
    location,
    deliveryFee,
    pricePerDay,
    totalPrice,
  } = data;

  // Format dates for better readability
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Build WhatsApp message
  const message = `*MOTORCYCLE RENTAL BOOKING*

*Motorcycle:* ${motorcycleName}

*Rental Period:*
• Pickup: ${formatDate(pickupDate)}
• Return: ${formatDate(returnDate)}
• Duration: ${duration} hari

*Delivery Location:* ${location}

*Price Details:*
• Rental: ${formatPrice(pricePerDay)} × ${duration} hari = ${formatPrice(
    pricePerDay * duration,
  )}
• Delivery Fee: ${deliveryFee === 0 ? "FREE ✨" : formatPrice(deliveryFee)}
• *Total: ${formatPrice(totalPrice)}*

I would like to proceed with this booking. Please confirm availability.`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Generate WhatsApp link
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp link in new tab
 */
export function openWhatsAppBooking(
  data: WhatsAppBookingData,
  phoneNumber?: string,
): void {
  const link = generateWhatsAppLink(data, phoneNumber);
  window.open(link, "_blank");
}
