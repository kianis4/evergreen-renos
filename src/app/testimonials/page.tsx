import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  { name: 'John Doe', feedback: 'Excellent service and great attention to detail!' },
  { name: 'Jane Smith', feedback: 'They transformed my kitchen beautifully. Highly recommended!' },
];

export default function Testimonials() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} name={testimonial.name} feedback={testimonial.feedback} />
        ))}
      </div>
    </div>
  );
}
