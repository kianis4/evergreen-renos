import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Omar Kayani',
    feedback: 'I was blown away by Evergreen Renos attention to detail and professionalism. They truly exceeded my expectations in every way.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Suleyman Kiani',
    feedback: 'The kitchen transformation was nothing short of phenomenal! I couldn’t be happier with the results - its like a dream come true.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Mariam S',
    feedback: 'From start to finish, Evergreen Renos proved to be reliable, professional, and timely. I highly recommend them to anyone looking for top-notch renovation services.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Emily Davis',
    feedback: 'Evergreen Renos transformed our basement into a stunning family space that we never thought possible. The craftsmanship is truly top-notch.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Michael Brown',
    feedback: 'Working with the Evergreen Renos team was an absolute pleasure. Our bathroom remodel turned out amazing, and we couldnt be happier with the final result.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Sophia Wilson',
    feedback: 'Evergreen Renos gave my home a fresh new look that I never thought was possible. The quality of their work is truly outstanding.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Liam Miller',
    feedback: 'From the initial consultation to the final walk-through, Evergreen Renos handled everything seamlessly. I highly recommend them to anyone looking for a hassle-free renovation experience.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Emma Garcia',
    feedback: 'My new floors look absolutely incredible, and Ive already recommended Evergreen Renos to all my friends and family. Their work is truly exceptional.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Alex Chen',
    feedback: 'Evergreen Renos team is incredibly talented and dedicated to their craft. They turned my outdated living room into a modern oasis that I love spending time in.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Jessica Lee',
    feedback: 'I was hesitant to embark on a major renovation project, but Evergreen Renos made the entire process smooth and stress-free. Their expertise is unparalleled.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ryan Thompson',
    feedback: 'The level of detail and care that Evergreen Renos brings to each project is impressive. My new kitchen is not only beautiful but also functional and efficient.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ava Patel',
    feedback: 'Evergreen Renos commitment to sustainability and eco-friendliness aligns perfectly with my values. Their work is not only stunning but also environmentally responsible.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ethan Hall',
    feedback: 'The Evergreen Renos team is comprised of true professionals who genuinely care about their clients. They went above and beyond to ensure our renovation project met our unique needs.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Lily Tran',
    feedback: 'Evergreen Renos passion for renovation is contagious. They brought our vision to life, and we couldnt be happier with the final result.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Noah Martin',
    feedback: 'The quality of Evergreen Renos work is evident in every aspect of their projects. They truly are masters of their craft.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Isabella Rodriguez',
    feedback: 'Evergreen Renos dedication to customer satisfaction is unparalleled. They listened to our needs and delivered a renovation that exceeded our expectations.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Julian Sanchez',
    feedback: 'From the initial consultation to the final walk-through, Evergreen Renos demonstrated a level of expertise and professionalism that is hard to find in the industry.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Gabriella Taylor',
    feedback: 'Evergreen Renos attention to detail and commitment to quality are evident in every aspect of their work. Were thrilled with our new home.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Harrison Brooks',
    feedback: 'The Evergreen Renos team is comprised of talented individuals who are passionate about their work. They brought our renovation project to life in ways we never thought possible.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ava Morales',
    feedback: 'Evergreen Renos customer service is exceptional. They kept us informed throughout the entire process and ensured our needs were met at every step.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ethan Patel',
    feedback: 'The quality of Evergreen Renos work is exceptional, and their commitment to customer satisfaction is unmatched. Were thrilled with our new home.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Lily Chen',
    feedback: 'Evergreen Renos team is comprised of true professionals who are dedicated to delivering exceptional results. We couldnt be happier with our renovation project.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Noah Lee',
    feedback: 'The Evergreen Renos team is passionate about their work, and it shows in every aspect of their projects. Were thrilled with our new kitchen.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Isabella Hall',
    feedback: 'Evergreen Renos commitment to sustainability and eco-friendliness is impressive. Their work is not only beautiful but also environmentally responsible.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Julian Martin',
    feedback: 'The level of detail and care that Evergreen Renos brings to each project is impressive. Our new bathroom is not only beautiful but also functional and efficient.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Gabriella Rodriguez',
    feedback: 'Evergreen Renos team is comprised of talented individuals who are dedicated to delivering exceptional results. Were thrilled with our new living room.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Harrison Sanchez',
    feedback: 'The quality of Evergreen Renos work is exceptional, and their commitment to customer satisfaction is unmatched. Were thrilled with our new home.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ava Brooks',
    feedback: 'Evergreen Renos customer service is exceptional. They kept us informed throughout the entire process and ensured our needs were met at every step.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ethan Taylor',
    feedback: 'The Evergreen Renos team is passionate about their work, and it shows in every aspect of their projects. Were thrilled with our new kitchen.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Lily Morales',
    feedback: 'Evergreen Renos team is comprised of true professionals who are dedicated to delivering exceptional results. We couldnt be happier with our renovation project.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Noah Patel',
    feedback: 'The level of detail and care that Evergreen Renos brings to each project is impressive. Our new bathroom is not only beautiful but also functional and efficient.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Isabella Chen',
    feedback: 'Evergreen Renos commitment to sustainability and eco-friendliness is impressive. Their work is not only beautiful but also environmentally responsible.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Julian Lee',
    feedback: 'The quality of Evergreen Renos work is exceptional, and their commitment to customer satisfaction is unmatched. Were thrilled with our new home.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Gabriella Hall',
    feedback: 'Evergreen Renos team is comprised of talented individuals who are dedicated to delivering exceptional results. Were thrilled with our new living room.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Harrison Martin',
    feedback: 'The Evergreen Renos team is passionate about their work, and it shows in every aspect of their projects. Were thrilled with our new kitchen.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ava Rodriguez',
    feedback: 'Evergreen Renos customer service is exceptional. They kept us informed throughout the entire process and ensured our needs were met at every step.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Ethan Sanchez',
    feedback: 'The level of detail and care that Evergreen Renos brings to each project is impressive. Our new bathroom is not only beautiful but also functional and efficient.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Lily Brooks',
    feedback: 'Evergreen Renos team is comprised of true professionals who are dedicated to delivering exceptional results. We couldnt be happier with our renovation project.',
    image: '/images/reno-team.jpg',
  },
  {
    name: 'Noah Morales',
    feedback: 'The quality of Evergreen Renos work is exceptional, and their commitment to customer satisfaction is unmatched. Were thrilled with our new home.',
    image: '/images/reno-team.jpg',
  },
];


export default function Testimonials() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="bg-black/60 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-white px-6 py-16">
          <h1 className="text-5xl font-bold text-center mb-12">What Our Clients Say</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                feedback={testimonial.feedback}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
