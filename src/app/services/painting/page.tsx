export default function Painting() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/painting-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Painting Services</h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Refresh your home with our professional painting services. Whether it’s interior or
            exterior, we deliver a flawless finish every time.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Choose from a wide range of colors and finishes to bring your vision to life.
          </p>
          <div>
            <a
              href="/contact-us"
              className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
            >
              Get a Fresh Look Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

  