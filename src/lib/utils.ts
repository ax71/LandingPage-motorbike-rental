import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate the number of days between two dates
 * @param pickupDate - The pickup date string (YYYY-MM-DD format)
 * @param returnDate - The return date string (YYYY-MM-DD format)
 * @returns The number of days (minimum 1)
 */
export function calculateDays(pickupDate: string, returnDate: string): number {
  if (!pickupDate || !returnDate) return 1;

  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);

  const diffTime = returnD.getTime() - pickup.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(diffDays, 1); // Minimum 1 day
}

/**
 * Format price in Indonesian Rupiah
 * @param price - The price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Calculate total price based on daily rate and number of days
 * @param pricePerDay - Daily rental price
 * @param days - Number of rental days
 * @returns Total price
 */
export function calculateTotalPrice(pricePerDay: number, days: number): number {
  return pricePerDay * days;
}

/**
 * Validate if a date string is valid and not empty
 * @param dateString - Date string to validate
 * @returns True if valid, false otherwise
 */
export function isValidDate(dateString: string): boolean {
  if (!dateString) return false;
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}
