import React, { useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaComment,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
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
    emailjs
      .sendForm(
        "service_bt7lvig",
        "template_c5grkxm",
        formRef.current,
        "Jj8GC9_w-bFpwuKc1"
      )
      .then(
        () => {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            phone: "",
            location: "",
            message: "",
          });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow pt-24 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch px-6">
          {/* Left: Form */}
          <div className="md:w-1/2 bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-center font-bold text-2xl text-[#1089D3] mb-6">
              Get in Touch
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {[
                { field: "name", icon: <FaUser /> },
                { field: "email", icon: <FaEnvelope /> },
                { field: "phone", icon: <FaPhoneAlt /> },
                { field: "location", icon: <FaMapMarkerAlt /> },
              ].map(({ field, icon }) => (
                <div key={field} className="relative">
                  <label className="text-xs text-[#8B8E98] font-semibold">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="absolute left-3 top-[36px] text-[#8B8E98] text-lg">
                    {icon}
                  </div>
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full h-10 pl-10 pr-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1089D3] focus:outline-none text-sm"
                  />
                </div>
              ))}

              {/* Message Field */}
              <div className="relative">
                <label className="text-xs text-[#8B8E98] font-semibold">
                  Message
                </label>
                <div className="absolute left-3 top-[36px] text-[#8B8E98]">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 pt-2 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#1089D3] focus:outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-[#115DFC] text-white rounded-md hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`text-center font-medium mt-3 ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status === "success"
                    ? "Thank you! We'll be in touch soon."
                    : "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </div>

          {/* Right: Image + Contact Info */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://satyamtechnocrats.com/wp-content/uploads/2024/01/contact.jpg"
                alt="Contact"
                className="object-cover w-full h-56 md:h-full"
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-3 text-blue-700">
                <FaPhoneAlt className="text-xl" />
                <a href="tel:+918956014041" className="font-bold text-lg">
                  +91 8956014041
                </a>
              </div>
              <p className="text-gray-700">
                We are here to make your ideas a reality.
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