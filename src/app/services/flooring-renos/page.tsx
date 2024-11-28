export default function FlooringRenos() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/flooring-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Flooring</h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Enhance your home with premium flooring options. From hardwood to tiles, we provide
            materials that match your aesthetic and durability requirements.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Our team ensures precise installation to deliver a flawless finish for every project.
          </p>
          <div>
            <a
              href="/contact-us"
              className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
            >
              Explore Flooring Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

  