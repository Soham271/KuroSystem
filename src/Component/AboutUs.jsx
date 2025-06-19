import React from "react";
import a from "../assets/aerial-view-business-team_53876-124515.avif";
import { useNavigate } from "react-router-dom";
import Accolades from "./Accolades";
import ABB from "../assets/Client/ABB logo.png";
import Atlas from "../assets/Client/Atlas Logo.png";
import Bajaj from "../assets/Client/Bajaj Logo.png";
import Bosch from "../assets/Client/Bosch logo.png";
import Bridgestone from "../assets/Client/Bridgestone logo.png";
import Endurance from "../assets/Client/Endurancelogo.png";
import G from "../assets/Client/G logo.png";
import Gsk from "../assets/Client/Gsk Logo.png";
import Hindustan from "../assets/Client/Hindustan Logo.png";
import IAC from "../assets/Client/IAC logo.png";
import JBM from "../assets/Client/JBM Logo.png";
import Jindal from "../assets/Client/JindalLogo.png";
import Mahindra from "../assets/Client/1.png";
import Parle from "../assets/Client/Parle Logo.png";
import Regal from "../assets/Client/Regal Logo.png";
import Siemens from "../assets/Client/Siemens logo.png";
import Supermax from "../assets/Client/Supermax logo.png";
import TDK from "../assets/Client/TDK Logo.png";
import thyssenkrup from "../assets/Client/thyssenkrup.png";
import UnitedSpirits from "../assets/Client/United Spirits Logo.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutUs = () => {
  const navigate = useNavigate();

  const { ref: clientsRef, inView: clientsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const clientLogos = [
    Mahindra,
    Siemens,
    Bajaj,
    ABB,
    JBM,
    Atlas,
    Bosch,
    Endurance,
    G,
    Hindustan,
    IAC,
    Jindal,
    Parle,
    Regal,
    Gsk,
    Bridgestone,
    TDK,
    Supermax,
    thyssenkrup,
    UnitedSpirits,
  ];

  return (
    <section className="w-full m-0 p-0">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center min-h-[80vh] w-full flex items-center justify-end px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Your Business with{" "}
            <span className="text-blue-400">KURO</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            At KURO, we specialize in intelligent, scalable IT solutions that
            drive innovation and deliver sustainable growth for enterprises
            worldwide.
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
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white text-black py-16 px-6 md:px-16 space-y-16">
        {[
          {
            title: "History of Industry 4.0",
            content:
              "Back in 2011, at the Hannover Messe in Germany—a major innovation trade fair—the German government introduced the term ‘Industry 4.0.’ As part of its High‑Tech Strategy 2020, this initiative aimed to advance manufacturing through smart, connected, and flexible systems.",
          },
          {
            title: "What is it?",
            content:
              "The Fourth Industrial Revolution—Industry 4.0—brings together IoT, AI, robotics, and cloud computing to create intelligent, connected, and highly flexible factories, building on previous eras of steam power, electricity, and automation.",
          },
          {
            title: "KURO's Journey",
            content:
              "• **The Vision Takes Root**: KURO started in 2015, founded by a small team driven by a passion to revolutionize industries with intelligent IT solutions.<br/>• **Early Steps**: The founders spent early years experimenting and building innovative tools that would become the foundation of KURO’s core offerings.<br/>• **A Growing Promise**: As KURO grew, so did its global vision—attracting like-minded innovators and staying true to the mission of ongoing production and progress.",
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="mx-auto max-w-3xl bg-slate-50 rounded-2xl p-8 shadow-lg prose prose-slate"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {section.title}
            </h2>
            <div
              className="text-lg md:text-xl leading-relaxed text-slate-800"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}

        <Accolades />

        {/* Clients Section */}
        <div className="clients-section pt-3" ref={clientsRef}>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8"
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUR CLIENTS
          </motion.h2>

          <motion.div
            className="max-w-7xl mx-auto px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-4 rounded-lg overflow-hidden"
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate={clientsInView ? "visible" : "hidden"}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-32 sm:max-h-40 md:max-h-48 w-auto object-contain transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .clients-section {
          background: linear-gradient(to right, #f3f4f6, #e5e7eb);
          position: relative;
          overflow: hidden;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .client-card {
          background: transparent;
          transition: all 0.3s ease-in-out;
          border-radius: 12px;
          border: none;
        }

        .client-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .client-card img {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
