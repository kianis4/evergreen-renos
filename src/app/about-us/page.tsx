export default function AboutUs() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/reno-1.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black/60 min-h-screen flex items-center">
        <div className="container mx-auto text-white px-6 py-16">
          {/* Title */}
          <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Section */}
            <div className="lg:pr-8">
              <p className="text-xl leading-relaxed mb-6">
                Welcome to <strong>Evergreen Renos</strong>. Since 1987, we have proudly served
                homeowners and businesses across the Greater Toronto Area (GTA), including
                Mississauga, Oakville, Hamilton, and Grimsby. With over 35 years of experience, our
                mission has always been the same: to deliver top-quality renovation services that
                exceed our customers’ expectations.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Our team of skilled professionals works tirelessly to transform your space into
                something extraordinary. From basement finishing and bathroom remodeling to kitchen
                renovations and custom projects, we take pride in every detail. We use only the
                finest materials to ensure durability, style, and satisfaction.
              </p>
              <p className="text-xl leading-relaxed">
                At <strong>Evergreen Renos</strong>, customer satisfaction is our top priority. We
                strive to bring your vision to life, whether you’re looking for a small update or a
                complete renovation. Let us help you create a space you’ll love for years to come.
              </p>
            </div>

            {/* Call-to-Action Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white/90 text-black p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed text-left">
                  <li>Over 35 years of experience in the industry</li>
                  <li>Top-quality materials for lasting renovations</li>
                  <li>Skilled professionals dedicated to your vision</li>
                  <li>Unparalleled customer satisfaction</li>
                </ul>
                <a
                  href="/contact-us"
                  className="mt-6 inline-block bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  