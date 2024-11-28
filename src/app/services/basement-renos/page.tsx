export default function BasementRenos() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/basement-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">
            Basement Finishing &amp; Renovation
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Transform your basement into a functional and beautiful space. Whether you&apos;re
            looking for a cozy family room, a home office, or extra storage, we&apos;ve got you
            covered with expert craftsmanship and premium materials.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Our team ensures every detail is perfected, from flooring to lighting, to create a space
            that matches your vision. Let us bring your dream basement to life.
          </p>
          <a
            href="/contact-us"
            className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
          >
            Contact Us for a Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}


  
  