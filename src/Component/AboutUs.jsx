import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full m-0 p-0">
      <div
        className="relative bg-cover bg-center min-h-[80vh] w-full flex items-center justify-start px-6 md:px-16"
        style={{
          backgroundImage:{}
       
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
            Since our establishment, we have been delivering high-quality and
            sustainable software solutions for corporate and business purposes.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md">
              Learn More →
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-800 transition">
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;