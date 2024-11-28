export default function CustomRenos() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/flooring-reno.jpg')" }}
    >
      <div className="bg-black/50 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto text-center text-white px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Custom Renovation Requests</h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
            Have a unique idea? Let’s make it a reality. From custom furniture to tailored designs,
            we specialize in bringing your creative visions to life.
          </p>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Collaborate with our expert team to create a personalized space that exceeds your
            expectations.
          </p>
          <div>
            <a
              href="/contact-us"
              className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
