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
      <MotorcycleList />
      <Testimonials />
      <LocationMap />
      <FAQ />
      <Footer />
    </main>
  );
}
