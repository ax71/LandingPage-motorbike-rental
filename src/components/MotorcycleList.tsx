"use client";

import { motorcycles } from "@/data";
import MotorcycleCard from "./MotorcycleCard";
import { useSearchParams } from "next/navigation";
import { calculateDays, formatPrice } from "@/lib/utils";

export default function MotorcycleList() {
  const searchParams = useSearchParams();
  const pickupDate = searchParams.get("pickup") || undefined;
  const returnDate = searchParams.get("return") || undefined;
  const fee = searchParams.get("fee")
    ? parseInt(searchParams.get("fee")!)
    : undefined;
  const locationName = searchParams.get("loc_name") || undefined;
  const customerType =
    (searchParams.get("type") as "foreigner" | "local") || undefined;

  // Check if user has performed a search
  const hasSearched = !!(pickupDate && returnDate);

  // Calculate rental duration
  const days = hasSearched ? calculateDays(pickupDate!, returnDate!) : 1;

  return (
    <section id="motorcycles" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-yellow-600">Perfect Ride</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All our motorcycles are well-maintained, reliable, and ready to take
            you on your adventure.
          </p>
          {hasSearched && (
            <div className="mt-4 inline-block bg-yellow-50 px-6 py-3 rounded-full">
              <p className="text-sm text-gray-600">
                Showing prices for{" "}
                <span className="font-semibold">{pickupDate}</span> to{" "}
                <span className="font-semibold">{returnDate}</span>
                {locationName && (
                  <>
                    {" · "}
                    <span className="font-semibold">
                      Delivery to {locationName}
                    </span>
                  </>
                )}
              </p>
              {fee !== undefined && (
                <p className="text-xs text-gray-500 mt-1">
                  {fee === 0 ? (
                    <span className="text-green-600 font-medium">
                      🎉 Free Shipping
                    </span>
                  ) : (
                    <>Delivery Fee: {formatPrice(fee)}</>
                  )}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard
              key={motorcycle.id}
              motorcycle={motorcycle}
              pickupDate={pickupDate}
              returnDate={returnDate}
              shippingFee={fee}
              hasSearched={hasSearched}
              days={days}
              locationName={locationName}
              customerType={customerType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
