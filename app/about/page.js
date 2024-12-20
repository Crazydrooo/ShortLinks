export default function about() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">ShortLinks</span> – your
          go-to solution for simplifying long, messy URLs into clean, memorable,
          and custom short links. Whether you're sharing a link on social media,
          in an email, or on your website, our service makes it easy and
          efficient.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Customizable short links using keywords for better recall.</li>
          <li>Easy-to-use interface for quick link shortening.</li>
          <li>Perfect for social media, emails, and more.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          How It Works
        </h2>
        <ol className="list-decimal list-inside text-gray-600 mb-6">
          <li>Paste your long URL into the input field.</li>
          <li>Add a custom keyword to create a meaningful short link.</li>
          <li>Click the "Shorten" button and share your link!</li>
        </ol>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-blue-500">ShortLinks</span>, we
          aim to make sharing links effortless, intuitive, and visually
          appealing. Our focus is on creating a seamless user experience while
          maintaining high performance and reliability.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/shorten"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
