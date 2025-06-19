import React from "react";
import certificate from "../assets/Accolades.jpg";

const Accolades = () => (
  <section className="h-auto py-8 px-6 sm:px-10 md:px-20 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb] flex items-center justify-center rounded-xl shadow-md">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 underline decoration-2 decoration-red-500">
        Accolades
      </h2>
      <div className="flex justify-center">
        <img
          src={certificate}
          alt="Certificate"
          className="w-[190px] h-[254px] bg-white rounded-lg shadow-lg border-2 border-gray-300 transition duration-500 ease-out hover:scale-110 drop-shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Accolades;
