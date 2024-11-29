import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  feedback: string;
  image: string;
}

export default function TestimonialCard({ name, feedback, image }: TestimonialCardProps) {
  return (
    <div className="bg-white/90 text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full shadow"
        />
        <h3 className="ml-4 text-lg font-bold">{name}</h3>
      </div>
      <p className="text-gray-700 italic">&quot;{feedback}&quot;</p>
    </div>
  );
}



  