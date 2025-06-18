import React from "react";
import certificate from "../assets/Accolades.jpg";

const Accolades = () => (
  <section className="h-auto py-8 px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] flex items-center justify-center rounded-xl shadow-md">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 tracking-wide decoration-dashed decoration-slate-800">
        Accolades
      </h2>
      <div className="flex justify-center">
        <img
          src={certificate}
          alt="Certificate"
          className="h-64 md:h-96 object-contain transition-transform duration-500 hover:scale-110 drop-shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Accolades;
