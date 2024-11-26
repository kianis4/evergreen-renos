import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/images/reno-1.jpg"
            alt="Evergreen Renos team at work"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <strong>Evergreen Renos</strong>. Since 1987, we have proudly served
            homeowners and businesses across the Greater Toronto Area (GTA), including Mississauga,
            Oakville, Hamilton, and Grimsby. With over 35 years of experience, our mission has
            always been the same: to deliver top-quality renovation services that exceed our
            customers’ expectations.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our team of skilled professionals works tirelessly to transform your space into
            something extraordinary. From basement finishing and bathroom remodeling to kitchen
            renovations and custom projects, we take pride in every detail. We use only the finest
            materials to ensure durability, style, and satisfaction.
          </p>
          <p className="text-lg leading-relaxed">
            At <strong>Evergreen Renos</strong>, customer satisfaction is our top priority. We
            strive to bring your vision to life, whether you’re looking for a small update or a
            complete renovation. Let us help you create a space you’ll love for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

  