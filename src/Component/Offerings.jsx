import React, { useState, useEffect } from "react";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaStream,
  FaCloud,
  FaCogs,
  FaCubes,
} from "react-icons/fa";
import Offer from "../assets/Offering.jpg";
import Navbar from "@/Navbar";
import Footer from "../Footer";
import CloudAndEdge from "../assets/cloudandEdge.jpg";
import DigitalTwin from "../assets/DigitalTwin.jpg";
import ITOT from "../assets/IT-OT-Integration-2.png";
import Trace from "../assets/Traceability.jpg";
// import Gantry2D from "../assets/Gantry2D.jpg";
// import Gantry3D from "../assets/Gantry3D.jpg";

const Offerings = () => {
  const [hoveredOffering, setHoveredOffering] = useState(null);

  const offerings = [
    {
      title: "Digital Twin",
      icon: <FaProjectDiagram className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Real-time replicas for predictive maintenance.",
      summary:
        "Our Digital Twin solutions offer real-time replicas of your physical systems, enabling predictive maintenance, simulation, and smarter decision-making.",
      image: DigitalTwin,
    },
    {
      title: "IT-OT Integration",
      icon: <FaNetworkWired className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Bridging IT and Operational Tech seamlessly.",
      summary:
        "Seamlessly bridge the gap between Information Technology and Operational Technology for unified, smart manufacturing processes and efficient data flow.",
      image: ITOT,
    },
    {
      title: "End-to-End traceability",
      icon: <FaStream className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Full supply chain visibility and tracking.",
      summary:
        "Achieve complete traceability across your supply chain with our advanced tracking systems, ensuring transparency, compliance, and product quality.",
      image: Trace,
    },
    {
      title: "Cloud & Edge",
      icon: <FaCloud className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Power of cloud + speed of edge.",
      summary:
        "Harness the combined power of cloud scalability and edge computing for real-time analytics, reduced latency, and decentralized operations.",
      image: CloudAndEdge,
    },
  ];

  const robotics = [
    {
      title: "2D-Gantry",
      icon: <FaCogs className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Precision motion in two dimensions.",
      summary:
        "Our 2D-Gantry systems offer accurate and reliable movement across two axes, ideal for tasks like pick-and-place, inspection, and material handling.",
      image: CloudAndEdge,
    },
    {
      title: "3D-Gantry",
      icon: <FaCubes className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Full 3-axis motion for advanced automation.",
      summary:
        "3D-Gantry solutions provide comprehensive motion in three dimensions, perfect for complex assembly lines and high-precision manufacturing.",
      image: CloudAndEdge,
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulseOnce {
        0% { transform: scale(0.95); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      .animate-pulse-once {
        animation: pulseOnce 0.5s ease-in-out;
      }
      @font-face {
        font-family: 'Cursive';
        src: url('https://fonts.cdnfonts.com/s/17863/GreatVibes-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Handwriting';
        src: url('https://fonts.cdnfonts.com/s/17863/DancingScript-Regular.woff') format('woff');
      }
      .font-cursive {
        font-family: 'Cursive', cursive;
      }
      .font-handwriting {
        font-family: 'Handwriting', cursive;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderCards = (dataArray) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {dataArray.map(({ title, icon, summary, image, shortInfo }, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredOffering(title)}
          onMouseLeave={() => setHoveredOffering(null)}
          className={`transition-all duration-300 overflow-hidden cursor-default 
  bg-gradient-to-tr from-[#e0f7fa]/70 via-[#73CEDA]/60 to-[#00E2FF]/90 
  backdrop-blur-md bg-opacity-60 p-6 rounded-xl shadow-md hover:shadow-xl 
  ${hoveredOffering === title ? "min-h-[360px]" : "min-h-[80px]"} mb-9`}
        >
          <h2 className="text-xl font-semibold text-[#1089D3] flex items-center mb-2">
            {icon}
            {title}
          </h2>

          {hoveredOffering !== title && (
            <p className="text-gray-700">{shortInfo}</p>
          )}
          {hoveredOffering === title && (
            <div className="mt-4 flex flex-col md:flex-row gap-4 animate-pulse-once">
              <div className="md:w-1/2">
                <p className="text-gray-800  text-lg leading-relaxed ">
                  <br />
                  {summary}
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={image}
                  alt={`${title} Illustration`}
                  className="w-full h-48 object-cover rounded-xl shadow"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div
        className="relative bg-cover bg-center min-h-[60vh] w-full flex items-center justify-start px-6 md:px-16"
        style={{ backgroundImage: `url(${Offer})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Our Offerings at{" "}
            <span className="text-blue-400 hover:text-blue-600 transition">
              KURO
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Explore our innovative solutions designed to elevate your business
            efficiency and performance.
          </p>
        </div>
      </div>

      <main className="flex-grow pt-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-bold text-5xl text-black mb-8">
            Industry 4.0
          </h2>
          {renderCards(offerings)}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <h2 className="text-center font-bold text-5xl text-black mb-8">
            Robotics
          </h2>
          {renderCards(robotics)}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offerings;
