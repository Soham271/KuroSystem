import React, { useState, useEffect } from "react";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaStream,
  FaCloud,
  FaCogs,
  FaCubes,
  FaEye,
} from "react-icons/fa";
import Offer from "../assets/Offering.jpg";
import CloudAndEdge from "../assets/cloudandEdge.jpg";
import DigitalTwin from "../assets/DigitalTwin.jpg";
import ITOT from "../assets/IT-OT-Integration-2.png";
import Trace from "../assets/Traceability.jpg";
import Gantry2D from "../assets/2d.jpg";
import Gantry3D from "../assets/3d.jpg";

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
      image: Gantry2D,
    },
    {
      title: "3D-Gantry",
      icon: <FaCubes className="inline mr-2 text-blue-900 text-2xl" />,
      shortInfo: "Full 3-axis motion for advanced automation.",
      summary:
        "3D-Gantry solutions provide comprehensive motion in three dimensions, perfect for complex assembly lines and high-precision manufacturing.",
      image: Gantry3D,
    },
  ];

  const vision = [
    {
      title: "Vision Inspection",
      icon: <FaEye className="inline mr-2 text-blue-500 text-2xl" />,
      shortInfo: "Advanced visual quality control.",
      summary:
        "Our vision inspection systems provide high-precision quality control, detecting defects and ensuring product consistency with advanced imaging technology.",
      image: Gantry2D,
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
      @keyframes smoothExpand {
        0% { transform: scale(1); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .smooth-expand {
        animation: smoothExpand 0.5s ease-in-out;
      }
      @keyframes lineAppear {
        0% { transform: translateY(10px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .line-appear {
        display: inline-block;
        opacity: 0;
        animation: lineAppear 0.3s ease-out forwards;
      }
      .line-appear:nth-child(1) { animation-delay: 0.1s; }
      .line-appear:nth-child(2) { animation-delay: 0.2s; }
      .line-appear:nth-child(3) { animation-delay: 0.3s; }
      .line-appear:nth-child(4) { animation-delay: 0.4s; }
      @keyframes imageFadeIn {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }
      .image-fade-in {
        animation: imageFadeIn 0.5s ease-in-out 0.5s forwards;
        opacity: 0;
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dataArray.map(({ title, icon, summary, image, shortInfo }, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredOffering(title)}
          onMouseLeave={() => setHoveredOffering(null)}
          className={`transition-all duration-500 overflow-hidden cursor-default 
            bg-gradient-to-r from-gray-300/25 to-blue-900/80 
            backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg 
            ${hoveredOffering === title ? 'min-h-[200px]' : 'min-h-[80px]'} mb-6`}
          style={{
            transitionProperty: 'min-height, transform, opacity',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          <h2 className="text-xl font-semibold text-blue-900 flex items-center mb-2">
            {icon}
            {title}
          </h2>
          {hoveredOffering !== title && (
            <p className="text-gray-700 text-sm transition-transform ease-linear">{shortInfo}</p>
          )}
          {hoveredOffering === title && (
            <div className="mt-2 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                {summary.split('. ').map((sentence, idx) => (
                  sentence && (
                    <p key={idx} className="text-gray-800 text-base leading-relaxed line-appear">
                      {sentence}{sentence.endsWith('.') ? '' : '.'}
                    </p>
                  )
                ))}
              </div>
              <div className="w-full md:w-1/2 h-32 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} Illustration`}
                  className="w-full h-full object-cover rounded-lg   image-fade-in "
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div
        className="relative bg-cover bg-center min-h-[40vh] w-full flex items-center justify-start px-6 md:px-16"
        style={{ backgroundImage: `url(${Offer})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white max-w-2xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Offerings at <span className="text-blue-300">KURO</span>
          </h1>
          <p className="text-md md:text-lg">
            Explore our innovative solutions designed to elevate your business efficiency and performance.
          </p>
        </div>
      </div>
      <main className="flex-grow pt-8 px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-extrabold text-4xl text-blue-900 mb-6 underline decoration-solid decoration-red-600 p-3 rounded">
            Industry 4.0
          </h2>
          {renderCards(offerings)}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <h2 className="font-extrabold text-4xl text-blue-900 mb-6 underline decoration-solid decoration-red-600 p-3 rounded">
            Robotics
          </h2>
          {renderCards(robotics)}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <h2 className="font-extrabold text-4xl text-blue-900 mb-6 underline decoration-solid decoration-red-600 p-3 rounded">
            Factory Vision
          </h2>
          {renderCards(vision)}
        </div>
      </main>
    </div>
  );
};

export default Offerings;