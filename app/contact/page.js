export default function contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Got questions or need help? We're here for you! Reach out to us
          through the form below or use the provided contact details. We'd love
          to hear from you.
        </p>
        <form className="space-y-4">
          <div>
            <label
              for="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              for="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              for="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600">You can also reach us at:</p>
          <p className="text-gray-800 font-semibold">
            Email: support@ShortLinks.com
          </p>
          <p className="text-gray-800 font-semibold">Phone: +123-456-7890</p>
        </div>
      </div>
    </div>
  );
}
