import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaLink,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import a from "../assets/Careers2.avif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Careers = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume_link: "",
  });
  const [focusedInput, setFocusedInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const templateParams = { ...formData, time: new Date().toLocaleString() };
    try {
      await emailjs.send(
        "service_hgrw6l9",
        "template_6kjk94a",
        templateParams,
        "2jJ9q21-7VC94TD7c"
      );
      toast.success("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        resume_link: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      icon: FaUser,
      placeholder: "John Doe",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      icon: FaEnvelope,
      placeholder: "john@example.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      icon: FaPhone,
      placeholder: "+1 555‑123‑4567",
    },
    {
      name: "position",
      label: "Desired Position",
      type: "text",
      icon: FaBriefcase,
      placeholder: "Software Engineer",
    },
    {
      name: "resume_link",
      label: "Resume Link",
      type: "url",
      icon: FaLink,
      placeholder: "https://drive.google.com/…",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideInFromTop {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in { animation: slideInFromTop 1.5s ease-out forwards; }
      `}</style>

      <div
        className="min-h-screen bg-cover bg-center relative flex flex-col filter brightness-125"
        style={{
          backgroundImage: `url(${a})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ToastContainer position="top-right" autoClose={4000} />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div
          className="relative z-10 text-white pt-7 px-6 sm:px-10 md:px-16 text-left animate-slide-in pb-2 "
          style={{
            backgroundImage: `linear-gradient(75deg, rgba(255,255,255,0.2), transparent)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Careers at{" "}
            <strong className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600">
              KURO
            </strong>
          </h1>
        </div>

        <div className="relative z-10 px-4 sm:px-10 md:px-16 py-10 flex justify-start">
          <div className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Apply Now</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {formFields.map((field) => {
                const Icon = field.icon;
                const isActive =
                  focusedInput === field.name || formData[field.name];
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold text-white mb-1">
                      {field.label}
                    </label>
                    <div
                      className={`flex items-center bg-white/20 rounded-lg px-3 py-2 border transition duration-200 ${
                        isActive
                          ? "border-blue-500 scale-[1.01]"
                          : "border-white/30"
                      }`}
                    >
                      <Icon className="text-md text-white/80 mr-2" />
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                        onFocus={() => setFocusedInput(field.name)}
                        onBlur={() => setFocusedInput("")}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                );
              })}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 mt-4 rounded-lg text-white font-semibold transition duration-300 text-lg ${
                  isSubmitting
                    ? "bg-white/30 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
