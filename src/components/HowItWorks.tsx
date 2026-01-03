export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search Location",
      description:
        "Choose your preferred pickup location - we deliver to villas, hotels, and popular areas.",
    },
    {
      number: "02",
      title: "Select Pick Up Date",
      description:
        "Pick your rental dates and choose from our fleet of well-maintained motorcycles.",
    },
    {
      number: "03",
      title: "Book It",
      description:
        "Contact us via WhatsApp with your details. Quick verification, no passport deposit needed.",
    },
    {
      number: "04",
      title: "Take A Ride",
      description:
        "Receive your motorcycle with free delivery. Hit the road and enjoy your adventure!",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-primary">Rental Motor</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rent a motorcycle in 4 simple steps. It's quick, easy, and
            hassle-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
