import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Accolades from "./Accolades";

// Background image
import a from "../assets/aerial-view-business-team_53876-124515.avif";

// Client logos
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
import ThyssenKrupp from "../assets/Client/thyssenkrup.png";
import UnitedSpirits from "../assets/Client/United Spirits Logo.png";

const AboutUs = () => {
  const navigate = useNavigate();
  const { ref: clientsRef, inView: clientsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
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
    ThyssenKrupp,
    UnitedSpirits,
  ];

  const sections = [
    {
      title: "History of Industry 4.0",
      content:
        "Back in 2011, at the Hannover Messe in Germany—a major innovation trade fair—the German government introduced the term ‘Industry 4.0.’ As part of its High‑Tech Strategy 2020, this initiative aimed to advance manufacturing through smart, connected, and flexible systems.",
    },
    {
      title: "What is Industry 4.0?",
      content:
        "The Fourth Industrial Revolution—Industry 4.0—brings together IoT, AI, robotics, and cloud computing to create intelligent, connected, and highly flexible factories, building on previous eras of steam power, electricity, and automation.",
    },
    {
      title: "KURO's Journey",
      content: `
<ul class="list-decimal pl-5 space-y-3">
  <li><strong>Robotics Solution Provider:</strong> KURO began its journey as a robotics-focused tech firm delivering customized automation solutions.</li>
  <li><strong>Discovering Traceability Needs:</strong> A project revealed a gap in traceability in complex manufacturing.</li>
  <li><strong>Turnkey Automotive Breakthrough:</strong> KURO built a full solution for end-to-end traceability in automotive deployment.</li>
  <li><strong>Spotting the Scaling Opportunity:</strong> Identified market demand for scalable intelligent factory platforms.</li>
  <li><strong>Standardizing for Industry 4.0:</strong> Developed a modular Industry 4.0 platform for digital transformation.</li>
</ul>
`,
    },
  ];

  return (
    <section className="w-full m-0 p-0">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[80vh] w-full flex items-center justify-end px-6 md:px-16"
        style={{
          backgroundImage: `url(${a})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-2xl text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Your Business with{" "}
            <span className="text-blue-400 transition duration-300 ease-in-out">
              KURO
            </span>
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
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="mx-auto max-w-3xl bg-slate-50 rounded-2xl p-8 shadow-lg"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl text-black mb-4 border-b-2 border-red-500 inline-block pb-1"
            >
              {section.title}
            </motion.h2>
            <div
              className="text-lg md:text-xl leading-relaxed text-gray-700 prose"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}

        <Accolades />

        {/* Clients Grid */}
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
            className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-4 rounded-lg transition-transform duration-300 ease-in-out"
                custom={idx}
                variants={itemVariants}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-32 sm:max-h-40 md:max-h-48 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .clients-section {
          background: linear-gradient(to right, #f3f4f6, #e5e7eb);
          overflow: hidden;
        }
        .client-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
