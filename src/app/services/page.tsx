
const services = [
  {
    title: "Basement Finishing/Renovation",
    description: "Transform your basement into a functional and beautiful space.",
    icon: "🏠",
  },
  {
    title: "Bathroom Renovations/Remodelling",
    description: "Upgrade your bathroom with modern designs and features.",
    icon: "🛁",
  },
  {
    title: "Kitchen Renovations",
    description: "Create your dream kitchen with quality materials and craftsmanship.",
    icon: "🍳",
  },
  {
    title: "Flooring",
    description: "Premium flooring options to elevate your space.",
    icon: "🪵",
  },
  {
    title: "Painting",
    description: "Professional painting services to refresh your interiors.",
    icon: "🎨",
  },
  {
    title: "Custom Requests",
    description: "Have a unique idea? Let’s make it a reality.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/reno-2.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black/50 min-h-screen">
        {/* Hero Section */}
        <div className="relative text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg">
              At Evergreen Renos, we offer a range of renovation services to transform your space.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white/90 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

