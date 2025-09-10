import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center mt-10 sm:mt-15">
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
          We reply fast
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Have a question about the library? Send a message or reach us via the
          links. We typically respond within 1–2 business days.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-16">
        {/* Left Side - Form */}
        <div className="md:col-span-2 bg-blue-50 rounded-xl p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
            Send a message
          </h2>

          <form className="space-y-4">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring focus:ring-blue-200 outline-none"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring focus:ring-blue-200 outline-none"
            />

            {/* Message */}
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring focus:ring-blue-200 outline-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Links & FAQ */}
        <div className="space-y-6">
          {/* Alternative Links */}
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
              Alternative Links
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:hello@uicomponents.dev"
                className="block bg-white border border-gray-200 rounded-lg px-4 py-2 text-center sm:text-left hover:bg-gray-50 text-sm sm:text-base"
              >
                webname.support@gmail.com
              </a>
              <a
                href="https://github.com/Jeet000001"
                className="block bg-white border border-gray-200 rounded-lg px-4 py-2 text-center sm:text-left hover:bg-gray-50 text-sm sm:text-base"
              >
                github.com/Jeet000001
              </a>
              <a
                href="https://www.linkedin.com/in/jeet-paul-8b4a74310/"
                className="block bg-white border border-gray-200 rounded-lg px-4 py-2 text-center sm:text-left hover:bg-gray-50 text-sm sm:text-base"
              >
                linkedin.com/in/your-profile
              </a>
            </div>

            {/* Response Stats */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 text-xs sm:text-sm font-medium text-center sm:text-left space-y-2 sm:space-y-0">
              <span>1-2d Response</span>
              <span>99% Satisfaction</span>
              <span>24/7 Email</span>
            </div>

            <div className="mt-4 bg-green-500 text-white text-xs sm:text-sm px-3 py-2 rounded-lg text-center sm:text-left">
              Tip: Include versions and steps to reproduce if reporting an issue.
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
              FAQ
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center sm:text-left">
                <p className="font-semibold text-xs sm:text-sm">
                  Do you support enterprise use?
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Yes, reach out for licensing and support options.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center sm:text-left">
                <p className="font-semibold text-xs sm:text-sm">Where can I report a bug?</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Open an issue on GITHUB or use the form with steps to reproduce.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center sm:text-left">
                <p className="font-semibold text-xs sm:text-sm">
                  Can I request a component?
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Absolutely—tell us your use case and any constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
