export default function KitchenRenos() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/kitchen-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Kitchen Renovations</h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Create your dream kitchen with quality materials and expert craftsmanship. We bring your
            vision to life with customized cabinetry, countertops, and modern appliances.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            From initial design to final installation, we focus on creating a kitchen that's both
            functional and visually stunning.
          </p>
          <div>
            <a
              href="/contact-us"
              className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
            >
              Design Your Dream Kitchen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

  