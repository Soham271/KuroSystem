/*import React from "react";
import Navbar from "@/Navbar";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <div>
          <img src=""/> 
        </div>
      </main>
    </div>
  );
};*/
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Thank you! We'll be in touch soon.");
  };

  return (
    <div className="flex flex-col min-h-screen  ">
      <main className="flex-grow container mx-auto p-6 flex flex-wrap md:flex-nowrap gap-6">
        {/* Left: Form */}
        <div className="md:w-1/2 w-full  rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone", "location"].map(f => (
              <input
                key={f}
                name={f}
                type={f === "email" ? "email" : "text"}
                placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
                value={form[f]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            ))}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-green-600 font-semibold mt-2">{status}</p>}
          </form>
        </div>

        {/* Right: Contact Info + Image */}
        <div className="md:w-1/2 w-full flex flex-col space-y-6">
          {/* Contact Info */}
          <div className=" rounded-2xl  p-6">
            <div className="flex items-center space-x-3 text-blue-700 mb-4">
              <FaPhoneAlt className="text-xl" />
              <span className="font-bold text-lg">+91 8956014042</span>
            </div>
            <p className="text-gray-700 mb-4">We are here to make your ideas a reality</p>
            <div className="flex items-center space-x-3 text-blue-700">
              <FaEnvelope className="text-xl" />
              <span className="font-bold text-lg">info@example.com</span>
            </div>
          </div>

          {/* Image */}
          <div className=" overflow-hidden">
            <img
              src="https://satyamtechnocrats.com/wp-content/uploads/2024/01/contact.jpg"
              alt="Contact"
              className="object-cover w-full h-48 md:h-96"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
