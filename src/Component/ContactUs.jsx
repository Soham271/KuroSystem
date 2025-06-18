import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaComment,
} from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(" Thank you! We'll be in touch soon.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-6 relative">
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-start">
          {/* Left: Form */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-4 p-[50px_40px_20px_40px] bg-white rounded-[11px] font-['Inter',sans-serif]">
            <h2 className="text-center font-black text-[30px] text-[#1089D3] mb-6">
              Get in Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              {[
                { field: "name", icon: <FaUser /> },
                { field: "email", icon: <FaEnvelope /> },
                { field: "phone", icon: <FaPhoneAlt /> },
                { field: "location", icon: <FaMapMarkerAlt /> },
              ].map(({ field, icon }) => (
                <div
                  key={field}
                  className="relative w-full flex flex-col gap-1"
                >
                  <label className="text-xs text-[#8B8E98] font-semibold">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="absolute left-3 bottom-2 text-[#8B8E98] z-10 text-xl">
                    {icon}
                  </div>
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full h-8 pl-10 pr-3 rounded-[7px] outline-none border border-[#e5e5e5] shadow-[0_1px_0_#efefef,0_1px_0.5px_rgba(239,239,239,0.5)] transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)] focus:border-transparent focus:shadow-[0_0_0_2px_#242424] focus:bg-transparent text-sm"
                  />
                </div>
              ))}
              <div className="relative w-full flex flex-col gap-1">
                <label className="text-xs text-[#8B8E98] font-semibold">
                  Message
                </label>
                <div className="absolute left-3 bottom-3 text-[#8B8E98] z-10 text-sm">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full h-20 pt-2 pl-10 pr-3 rounded-[7px] outline-none border border-[#e5e5e5] shadow-[0_1px_0_#efefef,0_1px_0.5px_rgba(239,239,239,0.5)] transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)] focus:border-transparent focus:shadow-[0_0_0_2px_#242424] focus:bg-transparent resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 bg-[#115DFC] rounded-[7px] outline-none text-white cursor-pointer"
              >
                Send Message
              </button>
              {status && (
                <p className="text-center text-green-600 font-semibold mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right: Contact Info + Image */}
          <div className="md:w-1/2 w-full flex flex-col space-y-6 absolute right-0 top-0">
            <div className="overflow-hidden">
              <img
                src="https://satyamtechnocrats.com/wp-content/uploads/2024/01/contact.jpg"
                alt="Contact"
                className="object-cover w-full h-56 md:h-96 "
              />
            </div>
            <div className="rounded-2xl p-6">
              <div className="flex items-center space-x-3 text-blue-700 mb-4">
                <FaPhoneAlt className="text-xl" />
                <a href="tel:+918956014041" className="font-bold text-lg">
                  +91 8956014041
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                We are here to make your ideas a reality
              </p>
              <div className="flex items-center space-x-3 text-blue-700">
                <FaEnvelope className="text-xl" />
                <a href="mailto:info@example.com" className="font-bold text-lg">
                  info@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
