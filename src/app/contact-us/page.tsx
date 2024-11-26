export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We’d love to hear from you! Reach out today.</p>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-2">
              <strong>Phone:</strong>{' '}
              <a href="tel:+14162303900" className="text-green-600 hover:underline">
                (416) 230-3900
              </a>
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@evergreenrenos.ca" className="text-green-600 hover:underline">
                info@evergreenrenos.ca
              </a>
            </p>
            <p className="text-lg">
              <strong>Website:</strong>{' '}
              <a href="https://evergreenrenos.ca" className="text-green-600 hover:underline">
                evergreenrenos.ca
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border rounded-lg"
                  rows={5}
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

  