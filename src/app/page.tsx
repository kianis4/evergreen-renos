import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/hero-1.jpg"
          alt="Renovation work"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to Evergreen Renos</h1>
        <p className="text-center mt-4">
          Serving the GTA and surrounding areas since 1987. We specialize in providing high-quality renovation services to
          meet your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded shadow text-center">
            <h2 className="text-xl font-bold">Experienced</h2>
            <p>Over 35 years of industry expertise.</p>
          </div>
          <div className="p-4 border rounded shadow text-center">
            <h2 className="text-xl font-bold">Quality Materials</h2>
            <p>Only the best materials for your renovation.</p>
          </div>
          <div className="p-4 border rounded shadow text-center">
            <h2 className="text-xl font-bold">Customer Focused</h2>
            <p>Your satisfaction is our priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

