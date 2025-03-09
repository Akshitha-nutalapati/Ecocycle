import React from "react";

const Emailus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <div className="max-w-4xl w-full bg-black shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Get in Touch</h3>
            <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
            <div className="mt-4 space-y-4">
              <p><strong>📍 Address:</strong> 123 Business Street, Tech City</p>
              <p><strong>📞 Phone:</strong> +1 234 567 890</p>
              <p><strong>📧 Email:</strong> contact@yourcompany.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Emailus;
