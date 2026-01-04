"use client";

import { motorcycles } from "@/data";
import MotorcycleCard from "./MotorcycleCard";
import { useSearchParams } from "next/navigation";

export default function MotorcycleListings() {
  const searchParams = useSearchParams();
  const pickupDate = searchParams.get("pickup") || undefined;
  const returnDate = searchParams.get("return") || undefined;

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
          {pickupDate && returnDate && (
            <p className="mt-4 text-sm text-gray-600 bg-yellow-50 inline-block px-4 py-2 rounded-full">
              Showing prices for{" "}
              <span className="font-semibold">{pickupDate}</span> to{" "}
              <span className="font-semibold">{returnDate}</span>
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard
              key={motorcycle.id}
              motorcycle={motorcycle}
              pickupDate={pickupDate}
              returnDate={returnDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
