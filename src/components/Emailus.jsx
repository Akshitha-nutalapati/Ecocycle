import React, { useState } from "react";

const Emailus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <div className="max-w-4xl w-full bg-black shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          <div>
            <h3 className="text-xl font-semibold text-gray-300">Get in Touch</h3>
            <p className="text-gray-400 mt-2">We'd love to hear from you!</p>
            <div className="mt-4 space-y-4 text-gray-400">
              <p><strong>📍 Address:</strong> 123 Business Street, Tech City</p>
              <p><strong>📞 Phone:</strong> +1 234 567 890</p>
              <p><strong>📧 Email:</strong> contact@yourcompany.com</p>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
            <p className="text-center text-white mt-2">{status}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Emailus;

