import { Suspense } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MotorcycleList from "@/components/MotorcycleList";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Suspense
        fallback={
          <div className="py-20 bg-white">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
              <p className="text-gray-600">Loading motorcycles...</p>
            </div>
          </div>
        }
      >
        <MotorcycleList />
      </Suspense>
      <Testimonials />
      <LocationMap />
      <FAQ />
      <Footer />
    </main>
  );
}
