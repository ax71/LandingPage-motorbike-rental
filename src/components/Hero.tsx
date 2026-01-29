"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { isValidDate, formatPrice } from "@/lib/utils";
import { Motorbike } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [locationId, setLocationId] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!isValidDate(pickupDate) || !isValidDate(returnDate)) {
      setError("Please select both pickup and return dates");
      return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
      setError("Return date must be after pickup date");
      return;
    }

    // 2. Hitung Durasi Sewa
    const pickupDateTime = new Date(pickupDate).getTime();
    const returnDateTime = new Date(returnDate).getTime();
    const duration = Math.ceil(
      (returnDateTime - pickupDateTime) / (1000 * 60 * 60 * 24),
    );

    if (duration < 3) {
      setError("Minimal sewa motor adalah 3 hari untuk semua lokasi.");
      return;
    }

    setError("");

    // 3. Buat URL Params
    const params = new URLSearchParams();
    params.set("pickup", pickupDate);
    params.set("return", returnDate);
    params.set("duration", duration.toString());

    router.push(`/?${params.toString()}#motorcycles`);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 rounded-lg mb-6">
              <div className="w-6 h-6 text-gray-800">
                <Motorbike />
              </div>
              <span className="text-sm font-medium text-white">
                Rental Motor
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Sanur Best Motorbike Rental
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
