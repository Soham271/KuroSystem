import React from "react";
import a from "../assets/aerial-view-business-team_53876-124515.avif";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full m-0 p-0">
      <div
        className="relative bg-cover bg-center min-h-[80vh] w-full flex items-center justify-end px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text block aligned to the right */}
        <div className="relative z-10 text-white max-w-2xl text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Your Business with <span className="text-blue-400">KURO</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            At KURO, we specialize in intelligent, scalable IT solutions that drive
            innovation and deliver sustainable growth for enterprises worldwide.
          </p>

          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md font-medium"
              onClick={() => navigate("/offering")}
            >
              Learn More →
            </button>
            <button
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-800 transition font-medium"
              onClick={() => navigate("/contactus")}
            >
              Get In  Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
