import React, { useEffect } from "react";
import certificate from "../assets/Accolades.jpg";

const Accolades = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-image: radial-gradient(#021027, #000000);
      }
      .circle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      .circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        mix-blend-mode: screen;
        background-image: radial-gradient(
          hsl(180, 100%, 80%),
          hsl(180, 100%, 80%) 10%,
          hsla(180, 100%, 80%, 0) 56%
        );
        animation: fade-frames 200ms infinite, scale-frames 2s infinite;
      }
      @keyframes fade-frames {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
      }
      @keyframes scale-frames {
        0% { transform: scale3d(0.4, 0.4, 1); }
        50% { transform: scale3d(2.2, 2.2, 1); }
        100% { transform: scale3d(0.4, 0.4, 1); }
      }
      .section-heading {
        position: relative;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 100, 200, 0.2));
        backdrop-blur-md;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 1rem 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: inline-block;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        color: white;
      }
     
      .accolades-section {
        background: rgba(255, 255, 255, 0.2);
        backdrop-blur-xl;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
      }
      
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="h-auto py-8 px-6 sm:px-10 md:px-20 relative accolades-section mb-5">
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 section-heading">
          Accolades
        </h2>
        <div className="flex justify-center">
          <img
            src={certificate}
            alt="Certificate"
            className="w-[160px] h-[213px] sm:w-[200px] sm:h-[266px] md:w-[240px] md:h-[320px] max-w-full rounded-lg shadow-lg border-2 border-white/30 transition-transform duration-300 ease-in-out hover:scale-[1.02] drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Accolades;
