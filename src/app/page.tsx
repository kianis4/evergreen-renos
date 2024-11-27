import Image from 'next/image';
export default function HomePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/hero-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/50 min-h-screen flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Evergreen Renos</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Serving the GTA and surrounding areas since 1987. We specialize in providing high-quality
            renovation services to meet your unique needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
  {/* Experienced Card */}
  <div className="p-8 bg-white/90 rounded-lg shadow-lg flex flex-col items-center text-center">
    <div className="mb-4 text-5xl text-teal-500">🏆</div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Experienced</h2>
    <p className="text-gray-600">
      With over 35 years of experience, we have honed our skills to deliver exceptional results for
      every project.
    </p>
  </div>

  {/* Quality Materials Card */}
        <div className="p-8 bg-white/90 rounded-lg shadow-lg flex flex-col items-center text-center">
          <div className="mb-4 text-5xl text-teal-500">🛠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quality Materials</h2>
          <p className="text-gray-600">
            We use only the best materials available, ensuring that your renovation lasts for years to
            come.
          </p>
        </div>

        {/* Customer Focused Card */}
        <div className="p-8 bg-white/90 rounded-lg shadow-lg flex flex-col items-center text-center">
          <div className="mb-4 text-5xl text-teal-500">🤝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Focused</h2>
          <p className="text-gray-600">
            Your satisfaction is our top priority. We work closely with you to bring your vision to life.
          </p>
        </div>
      </div>

      </div>
    </div>
  );
}

