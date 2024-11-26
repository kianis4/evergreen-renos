import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Omar Kayani',
    feedback: 'Evergreen Renos exceeded my expectations! Their attention to detail and professionalism are unmatched.',
    image: '/images/testimonials/john.jpg',
  },
  {
    name: 'Suleyman Kiani',
    feedback: 'The kitchen transformation was phenomenal! I couldn’t be happier with the results.',
    image: '/images/testimonials/jane.jpg',
  },
  {
    name: 'Mariam S',
    feedback: 'Reliable, professional, and delivered on time. I highly recommend Evergreen Renos.',
    image: '/images/testimonials/alex.jpg',
  },
  {
    name: 'Emily Davis',
    feedback: 'They turned our basement into a stunning family space. The craftsmanship is top-notch.',
    image: '/images/testimonials/emily.jpg',
  },
  {
    name: 'Michael Brown',
    feedback: 'Their team was a pleasure to work with. Our bathroom remodel looks amazing.',
    image: '/images/testimonials/michael.jpg',
  },
  {
    name: 'Sophia Wilson',
    feedback: 'Evergreen Renos gave my home a fresh new look. The quality of work is outstanding.',
    image: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Liam Miller',
    feedback: 'They handled everything from start to finish seamlessly. Highly recommended!',
    image: '/images/testimonials/liam.jpg',
  },
  {
    name: 'Emma Garcia',
    feedback: 'My new floors look incredible. I’ve already recommended Evergreen Renos to friends!',
    image: '/images/testimonials/emma.jpg',
  },
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
