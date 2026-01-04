"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { isValidDate, formatPrice } from "@/lib/utils";
import { locations } from "@/data/locations";

export default function Hero() {
  const router = useRouter();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [locationId, setLocationId] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Validate dates
    if (!isValidDate(pickupDate) || !isValidDate(returnDate)) {
      setError("Please select both pickup and return dates");
      return;
    }

    // Check if return date is after pickup date
    if (new Date(returnDate) <= new Date(pickupDate)) {
      setError("Return date must be after pickup date");
      return;
    }

    // Clear error
    setError("");

    // Create URL search params
    const params = new URLSearchParams();
    params.set("pickup", pickupDate);
    params.set("return", returnDate);

    // Add location fee and name if location is selected
    if (locationId) {
      const selectedLocation = locations.find((loc) => loc.id === locationId);
      if (selectedLocation) {
        params.set("fee", selectedLocation.fee.toString());
        params.set("loc_name", selectedLocation.name);
      }
    }

    // Update URL and scroll to motorcycles section
    router.push(`/?${params.toString()}#motorcycles`);

    // Scroll to motorcycles section
    setTimeout(() => {
      document
        .getElementById("motorcycles")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-700">
                Rental Motor
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Make Your Ride
              <br />
              <span className="text-yellow-700">Easy & Affordable</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Rent motorcycles and scooters with no passport deposit. Enjoy free
              delivery to your villa or hotel with insurance included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center justify-center px-4 py-2 hover:bg-yellow-200 text-gray-900 font-semibold rounded-full transition-all duration-200 hover:shadow-xl transform"
              >
                <a href="#motorcycles">Booking</a>
              </Button>

              <Button
                asChild
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-yellow-100 text-gray-900 font-semibold rounded-full border-2 border-gray-200 transition-all duration-200"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative z-10">
              <Image
                src="/images/hero-scooter.png"
                alt="Yellow scooter"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.2fr_auto] gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Date
                </label>
                <Input
                  className="h-[42px]"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Date
                </label>
                <Input
                  className="h-[42px]"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Location
                </label>
                <select
                  className="h-[42px] w-full px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={locationId}
                  onChange={(e) => setLocationId(e.target.value)}
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}{" "}
                      {loc.fee === 0
                        ? "(Free Delivery)"
                        : `(+${formatPrice(loc.fee)})`}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                onClick={handleSearch}
                className="h-[42px] px-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md"
              >
                Search
              </Button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
