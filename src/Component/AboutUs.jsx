import React, { useEffect, useRef, useState } from "react";
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
import TDK from "../assets/Client/TDK logo.png";
import ThyssenKrupp from "../assets/Client/thyssenkrup.png";
import UnitedSpirits from "../assets/Client/United Spirits Logo.png";

const AboutUs = () => {
  const navigate = useNavigate();

  // Localized history progress state
  const [historyProgress, setHistoryProgress] = useState(0);
  const historyRef = useRef(null);

  // Intersection observers
  const { ref: clientsRef, inView: clientsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: philosophyRef, inView: philosophyInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const headingRefs = useRef([]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };
  const timelineVariants = {
    hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -100 : 100 }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.3, ease: "easeOut" },
    }),
  };

  // Logo assets
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

  // Sections data
  const sections = [
    {
      title: "History of Industry 4.0",
      content:
        "Back in 2011, at the Hannover Messe in Germany—the term 'Industry 4.0' originated as part of Germany's High‑Tech Strategy.",
    },
    {
      title: "What is Industry 4.0?",
      content:
        "The Fourth Industrial Revolution brings IoT, AI, robotics, and cloud computing together for smart, connected factories.",
    },
    {
      title: "KURO's Journey",
      content: `
<ul class="list-decimal pl-5 space-y-3">
  <li><strong>Robotics Solution Provider:</strong> KURO began its journey with custom robotics automation.</li>
  <li><strong>Discovering Traceability Needs:</strong> We identified gaps in manufacturing traceability.</li>
  <li><strong>Turnkey Automotive Breakthrough:</strong> Delivered end-to-end traceability solution.</li>
  <li><strong>Scaling Opportunity:</strong> Built scalable factory platforms.</li>
  <li><strong>Industry 4.0 Standard:</strong> Developed a modular platform for digital transformation.</li>
</ul>
      `,
    },
  ];

  const inspirationSections = [
    {
      title: "Our Vision",
      content:
        "Democratizing Industry 4.0 for all manufacturers across India and beyond.",
    },
    {
      title: "Our Mission",
      content:
        "Empowering manufacturers with innovative, cost-effective automation for growth and excellence.",
    },
    {
      title: "Why We Started",
      content:
        "Bridging the gap between cutting-edge tech and practical factory-floor solutions.",
    },
  ];

  const philosophyCards = [
    {
      title: "Reliability",
      description: "Systems that minimize downtime and build trust.",
    },
    {
      title: "Customer Satisfaction",
      description: "Delivering value and exceeding expectations every time.",
    },
    {
      title: "Relentless Innovation",
      description: "Bringing tomorrow’s tech to today's factories.",
    },
    {
      title: "Mastery",
      description:
        "Excellence in every solution through expertise and commitment.",
    },
  ];

  // Track scroll progress only for the History timeline
  useEffect(() => {
    const updateHistoryProgress = () => {
      const el = historyRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = top + scrollTop;
      const scrollable = height;
      const scrolled = Math.max(
        0,
        scrollTop - sectionTop + window.innerHeight / 2
      );
      const percent = (scrolled / scrollable) * 100;
      setHistoryProgress(Math.min(100, Math.max(0, percent)));
    };

    window.addEventListener("scroll", updateHistoryProgress);
    window.addEventListener("resize", updateHistoryProgress);
    updateHistoryProgress();
    return () => {
      window.removeEventListener("scroll", updateHistoryProgress);
      window.removeEventListener("resize", updateHistoryProgress);
    };
  }, []);

  // Inject scoped CSS for timeline + progress bar + flip cards
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .timeline { position: relative; max-width: 1000px; margin: 0 auto; padding-left: 32px; }
      .history-progress-track { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; }
      .history-progress-fill { position: absolute; left: 0; top: 0; width: 6px; background: #3b82f6; border-radius: 3px; transition: height 0.1s ease; }
      .history-progress-handle {
        position: absolute;
        left: -3px;
        width: 12px;
        height: 12px;
        background: white;
        border: 4px solid rgba(0, 100, 200, 0.5);
        border-radius: 50%;
        transform: translateY(-50%);
        transition: top 0.1s ease;
      }
      .timeline-item { position: relative; margin-bottom: 3rem; width: 400px; }
      .timeline-item:nth-child(even) { margin-left: calc(100% - 400px); }
      .timeline-connector { position: absolute; z-index: 1; stroke: rgba(255,255,255,0.3); stroke-width: 2; stroke-dasharray: 5; }
      .flip-card-inner { transition: transform 0.8s; transform-style: preserve-3d; }
      .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
      .flip-card-front, .flip-card-back { backface-visibility: hidden; }
      .flip-card-back { transform: rotateY(180deg); }
      @media (max-width: 768px) {
        .timeline-item { width: 100%; margin-left: 0 !important; }
        .history-progress-track { width: 5px; }
        .history-progress-fill { width: 5px; }
        .history-progress-handle { width: 10px; height: 10px; left: -2.5px; border-width: 3px; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="w-full p-0 m-0 bg-gray-950 text-white">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center min-h-[70vh] w-full flex items-center justify-end px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl text-white text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Empowering Your Business with{" "}
            <span className="text-blue-400">KURO</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We specialize in intelligent, scalable IT solutions that drive
            innovation and sustainable growth.
          </p>
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              onClick={() => navigate("/offering")}
            >
              Learn More →
            </button>
            <button
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-800"
              onClick={() => navigate("/contactus")}
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      <div className="relative py-16 px-6 md:px-16 space-y-16">
        {/* Our History with localized progress bar */}
        <div ref={historyRef} className="timeline relative">
          <div className="history-progress-track">
            <div
              className="history-progress-fill"
              style={{ height: `${historyProgress}%` }}
            />
            <div
              className="history-progress-handle"
              style={{ top: `${historyProgress}%` }}
            />
          </div>

          <h2
            className="text-3xl md:text-4xl text-white mb-8 text-center section-heading"
            ref={(el) => (headingRefs.current[0] = el)}
          >
            Our History
          </h2>

          {sections.map((section, idx) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });
            const isOdd = idx % 2 === 0;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  className="timeline-item"
                  ref={ref}
                  custom={idx}
                  variants={timelineVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-lg">
                    <h3
                      className="text-2xl md:text-3xl text-white mb-4 section-heading"
                      ref={(el) => (headingRefs.current[idx + 1] = el)}
                    >
                      {section.title}
                    </h3>
                    <div
                      className="text-base md:text-lg text-gray-300 leading-relaxed prose"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </motion.div>
                {idx < sections.length - 1 && (
                  <svg
                    className="timeline-connector"
                    style={{
                      top: `${(idx + 1) * 200 + 50}px`,
                      left: isOdd ? "400px" : "100px",
                      width: isOdd ? "calc(100% - 500px)" : "500px",
                      height: "150px",
                    }}
                  >
                    <path
                      d={isOdd ? "M0,0 L100%,100%" : "M100%,0 L0,100%"}
                      fill="none"
                    />
                  </svg>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Inspiration */}
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-white mb-8 text-center section-heading"
            ref={(el) => (headingRefs.current[sections.length + 1] = el)}
          >
            Our Inspiration
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-5">
            {inspirationSections.map((sec, idx) => {
              const { ref, inView } = useInView({
                threshold: 0.2,
                triggerOnce: true,
              });
              return (
                <motion.div
                  key={idx}
                  className="vision-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg"
                  ref={ref}
                  custom={idx}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <h3 className="text-lg md:text-xl text-blue-400 mb-2 font-semibold">
                    {sec.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    {sec.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Philosophy */}

        <div
          ref={philosophyRef}
          className="clients-section pt-3 mb-16 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-8 section-heading"
            ref={(el) =>
              (headingRefs.current[
                sections.length + inspirationSections.length + 2
              ] = el)
            }
          >
            Our Core Philosophy
          </h2>

          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4"
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {philosophyCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="flip-card w-full h-52 perspective-[1000px]"
                custom={idx}
                variants={itemVariants}
              >
                <div className="flip-card-inner relative w-full h-full text-center">
                  {/* FRONT side — updated like inspiration */}
                  <div className="flip-card-front absolute w-full h-full flex flex-col justify-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-400/50">
                      {card.title}
                    </h3>
                  </div>

                  {/* BACK side — same style */}
                  <div className="flip-card-back absolute w-full h-full flex flex-col justify-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg">
                    <p className="text-xl text-gray-400 px-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Accolades */}
        <Accolades />

        {/* Clients Logos */}
        <div
          ref={clientsRef}
          className="flex justify-center flex-wrap clients-section pt-3"
        >
          <h2
            className="text-3xl md:text-5xl text-white mb-8 section-heading"
            ref={(el) =>
              (headingRefs.current[
                sections.length + inspirationSections.length + 3
              ] = el)
            }
          >
            Our Clients
          </h2>
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-4 rounded-lg transition-transform"
                custom={idx}
                variants={itemVariants}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="w-full h-auto max-h-28 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
