import { motorcycles } from "@/data";
import MotorcycleCard from "./MotorcycleCard";

export default function MotorcycleListings() {
  return (
    <section id="motorcycles" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-primary">Perfect Ride</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All our motorcycles are well-maintained, reliable, and ready to take
            you on your adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((motorcycle) => (
            <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>
      </div>
    </section>
  );
}
