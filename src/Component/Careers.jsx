import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaRocket,
  FaUpload,
} from "react-icons/fa";
import a from "../assets/Careers.avif";

const Careers = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });
  const [focusedInput, setFocusedInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleInputChange("resume", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000));
    alert("Application submitted successfully! 🎉");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
    });
    setIsSubmitting(false);
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
      placeholder: "+1 (555) 123-4567",
    },
    {
      name: "position",
      label: "Desired Position",
      type: "text",
      icon: FaBriefcase,
      placeholder: "Software Engineer",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${a})` }}
    >
      {/* Banner Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Hero Banner */}
      <div className="relative z-10 text-white py-24 px-6 md:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Careers at <span className="text-blue-400">KURO</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          Explore unlimited potential with us. Grow your career with cutting-edge
          innovation and global opportunities.
        </p>
      </div>

      {/* Form Section */}
      <div className="relative z-10 px-6 md:px-16 -mt-16 pb-20 flex justify-start">
        <div className="w-full max-w-lg bg-white rounded-2xl p-10 shadow-2xl backdrop-blur-md bg-opacity-95">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Apply Now</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {formFields.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-300 focus-within:border-blue-500">
                    <Icon className="text-lg text-gray-500 mr-2" />
                    <input
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      onFocus={() => setFocusedInput(field.name)}
                      onBlur={() => setFocusedInput("")}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Upload Resume
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-300 focus-within:border-blue-500">
                <FaUpload className="text-lg text-gray-500 mr-2" />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-700 bg-transparent focus:outline-none"
                />
              </div>
              {formData.resume && (
                <p className="text-sm text-green-600 mt-1">
                  Selected: {formData.resume.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 mt-4 rounded-lg text-white font-semibold transition-all duration-300 text-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <FaRocket />
                  <span>Submit Application</span>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
