import Image from "next/image";
import { Motorcycle } from "@/types";
import { generateWhatsAppURL } from "@/data";
import { Button } from "./ui/button";
import { formatPrice, calculateDays, calculateTotalPrice } from "@/lib/utils";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
  pickupDate?: string;
  returnDate?: string;
  shippingFee?: number;
  hasSearched?: boolean;
  days?: number;
}

export default function MotorcycleCard({
  motorcycle,
  pickupDate,
  returnDate,
  shippingFee = 0,
  hasSearched = false,
  days: propDays,
}: MotorcycleCardProps) {
  // Calculate rental duration and total price
  const calculatedDays =
    pickupDate && returnDate ? calculateDays(pickupDate, returnDate) : 1;
  const days = propDays || calculatedDays;
  const basePrice = calculateTotalPrice(motorcycle.pricePerDay, days);
  const totalPrice = basePrice + shippingFee;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        <Image
          src={motorcycle.image}
          alt={motorcycle.name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {motorcycle.name}
          </h3>
          <p className="text-sm text-gray-500">{motorcycle.type}</p>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{motorcycle.specs.capacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>{motorcycle.specs.transmission}</span>
          </div>
        </div>

        <div className="flex items-end justify-between mb-4">
          <div className="flex-1">
            {hasSearched ? (
              <>
                <p className="text-sm text-gray-500 mb-2">
                  Total Price for {days} {days === 1 ? "day" : "days"}
                </p>

                {/* Price Breakdown */}
                <div className="mb-2">
                  <p className="text-xs text-gray-600">
                    ({formatPrice(motorcycle.pricePerDay)} × {days}{" "}
                    {days === 1 ? "Day" : "Days"})
                    {shippingFee > 0 &&
                      ` + Shipping Fee of ${formatPrice(shippingFee)}`}
                  </p>
                  {shippingFee === 0 && (
                    <p className="text-xs text-green-600 font-medium mt-1">
                      + Free Shipping 🎉
                    </p>
                  )}
                </div>

                <p className="text-2xl font-bold text-yellow-600">
                  {formatPrice(totalPrice)}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-1">Price per day</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {formatPrice(motorcycle.pricePerDay)}
                </p>
              </>
            )}
          </div>
        </div>
        <Button asChild variant="outline" className="w-full">
          <a
            href={generateWhatsAppURL(motorcycle.name, days)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rent Now
          </a>
        </Button>
      </div>
    </div>
  );
}
