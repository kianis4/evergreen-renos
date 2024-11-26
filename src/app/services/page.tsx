const services = [
    "Basement Finishing/Renovation",
    "Bathroom Renovations/Remodelling",
    "Kitchen Renovations",
    "Flooring",
    "Painting",
    "Custom Requests",
  ];
  
  export default function Services() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <ul className="mt-4 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-lg">{service}</li>
          ))}
        </ul>
      </div>
    );
  }
  