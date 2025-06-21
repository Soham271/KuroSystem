import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Accolades from "./Accolades";

import a from "../assets/aerial-view-business-team_53876-124515.avif";

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
  const headingRefs = useRef([]);

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
  <li><strong>Standardizing for Industry 4.0:</strong> Developed a modular Industry 4.0 platform for digital transformation.</li>
</ul>
`,
    },
  ];

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
      .section-heading:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
      }
      .clients-section {
        background: linear-gradient(to right, rgba(243, 244, 246, 0.2), rgba(229, 231, 235, 0.2));
        overflow: hidden;
        padding: 2rem;
        border-radius: 1rem;
        backdrop-blur-xl;
      }
      .client-card:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }
      ${Array.from({ length: 50 }, (_, i) => {
        const circleSize = Math.random() * 10;
        const startPositionY = Math.random() * 10 + 100;
        const moveDuration = 7000 + Math.random() * 4000;
        const moveDelay = Math.random() * 11000;
        const circleDelay = Math.random() * 4000;
        return `
          .circle-container:nth-child(${i + 1}) {
            width: ${circleSize}px;
            height: ${circleSize}px;
            animation: move-frames-${i} ${moveDuration}ms linear ${moveDelay}ms infinite;
          }
          .circle-container:nth-child(${i + 1}) .circle {
            animation-delay: ${circleDelay}ms;
          }
          @keyframes move-frames-${i} {
            from {
              transform: translate3d(${Math.random() * 100}vw, ${startPositionY}vh, 0);
            }
            to {
              transform: translate3d(${Math.random() * 100}vw, ${-startPositionY - Math.random() * 30}vh, 0);
            }
          }
        `;
      }).join('')}
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('underline-active');
          }
        });
      },
      { threshold: 0.5 }
    );

    headingRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      headingRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full m-0 p-0">
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

      <div className="relative py-16 px-6 md:px-16 space-y-16">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="circle-container">
            <div className="circle" />
          </div>
        ))}
        <div className="relative z-10">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="mx-auto max-w-3xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg mb-5"
            >
              <h2
                className="text-3xl md:text-4xl text-white mb-4 section-heading"
                ref={(el) => (headingRefs.current[idx] = el)}
              >
                {section.title}
              </h2>
              <div
                className="text-lg md:text-xl leading-relaxed text-gray-300 prose"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}

          <Accolades />

          <div className="flex justify-center flex-wrap clients-section pt-3" ref={clientsRef}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-8 section-heading"
              ref={(el) => (headingRefs.current[sections.length] = el)}
            >
              OUR CLIENTS
            </h2>

            <motion.div
              className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center"
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
                    className="w-full h-auto max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;