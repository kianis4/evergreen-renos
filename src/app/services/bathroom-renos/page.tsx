export default function BathroomRenos() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/bathroom-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">
            Bathroom Renovations/Remodelling
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Upgrade your bathroom with modern designs and features. We specialize in creating
            spa-like retreats tailored to your needs, with high-quality fixtures and finishes.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            From luxurious showers to elegant tiling, our team delivers bathrooms that combine style
            and functionality seamlessly.
          </p>
          <a
            href="/contact-us"
            className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
          >
            Get Your Dream Bathroom
          </a>
        </div>
      </div>
    </div>
  );
}

  