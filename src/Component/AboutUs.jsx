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
      title: "2021 – KURO Systems Founded",
      content:
        "KURO Systems was born in 2021 with a clear purpose — to empower the Indian manufacturing ecosystem, starting with a bold step into the world of refurbished robots. As a value dealer catering to the Indian MSME market, KURO began by addressing a crucial need: making reliable and cost-effective automation accessible to manufacturers who demanded performance without compromising affordability.",
    },
    {
      title: "Launched Traceability with Automotive Client",
      content:
        "Driven by a mission to make production robust, seamless, and unstoppable, KURO soon transitioned into delivering cutting-edge End-to-End Traceability solutions, beginning with a major automobile manufacturer as its very first customer. This marked a pivotal moment — KURO was no longer just a provider, but a partner in productivity.",
    },
    {
      title: "Fit for Partnership with Germany Certified",
      content:
        "Our aspirations didn't stop there. As we delved deeper into the realm of Industry 4.0, an opportunity arose to collaborate with pioneers of automation — Germany, the global benchmark for advanced manufacturing. Seizing this, KURO earned the prestigious Fit for Partnership with Germany certification, solidifying our position among the select few equipped to adopt and adapt world-class Industry 4.0 practices",
    },
    {
      title: "Industry 4.0 Solutions for MSMEs",
      content:
        "Since then, KURO has continued to innovate with purpose — building reliable, scalable, and easy-to-implement Industry 4.0 solutions not just for large-scale manufacturers, but for MSMEs as well, ensuring that automation isn't just for the giants, but for every visionary maker out there.",
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
      description:
        "We don't just build systems that work  we build systems that keep working, consistently and effortlessly. Our solutions are designed to be stress free for our customers, minimizing downtime and maximizing trust.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Every deployment is a promise  that the solution will deliver measurable value, exceed expectations, and help customers realize clear, effective returns on their investments. We stay with our clients until success is not just promised, but proven.",
    },
    {
      title: "Relentless Innovation",
      description:
        "We constantly challenge conventions. While others catch up, KURO stays ahead  bringing tomorrow's technology to the factory floor today. Our mission is to make cutting-edge Industry 4.0 solutions not just futuristic, but accessible and practical for all.",
    },
    {
      title: "Mastery",
      description:
        "Excellence is not an act  it's our habit. Every member of the KURO team is committed to the pursuit of mastery, refining skills and knowledge to deliver only the very best  every time, without compromise.",
    },
  ];

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
      .timeline-item {
        position: relative;
        margin-bottom: 3rem;
        width: 100%;
        max-width: 1000px;
      }
      .timeline-item:nth-child(even) { 
        margin-left: auto; 
      }
      .timeline-connector { 
        position: absolute; 
        z-index: 1; 
        stroke: rgba(255,255,255,0.3); 
        stroke-width: 2; 
        stroke-dasharray: 5; 
        display: none;
      }
        
      .flip-card {
        perspective: 1000px;
        height: 220px;
        width: 100%;
        cursor: pointer;
        margin-bottom: 1rem;
      }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
      .flip-card:hover .flip-card-inner,
      .flip-card:active .flip-card-inner {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        box-sizing: border-box;
      }
      .flip-card-front {
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
      }
      .flip-card-back {
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        color: white;
        transform: rotateY(180deg);
      }
      .hover-prompt {
        position: absolute;
        bottom: 12px;
        font-size: 0.7rem;
        color: rgba(255,255,255,0.7);
        opacity: 0;
        animation: fadeInOut 2s infinite;
      }
      @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
      
      /* Desktop large screens */
      @media (min-width: 1024px) {
        .flip-card {
          height: 240px;
        }
        .flip-card-front, .flip-card-back {
          padding: 24px;
        }
      }
      
      /* Desktop styles */
      @media (min-width: 769px) and (max-width: 1023px) {
        .timeline-item { 
          width: 400px;
        }
        .timeline-item:nth-child(even) { 
          margin-left: calc(100% - 400px); 
        }
        .timeline-connector { 
          display: block;
        }
        .flip-card {
          height: 200px;
        }
        .flip-card-front, .flip-card-back {
          padding: 16px;
        }
      }
      
      /* Tablet styles */
      @media (min-width: 641px) and (max-width: 768px) {
        .timeline { 
          padding-left: 20px; 
        }
        .timeline-item { 
          width: calc(100% - 24px); 
          margin-left: 0 !important; 
          margin-bottom: 2.5rem;
        }
        .flip-card {
          height: 180px;
          margin-bottom: 1.5rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 16px;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }
        .flip-card-back p {
          font-size: 0.85rem;
          line-height: 1.4;
        }
      }
      
      /* Mobile styles */
      @media (max-width: 640px) {
        .timeline { 
          padding-left: 16px; 
          max-width: 100%;
        }
        .timeline-item { 
          width: calc(100% - 20px); 
          margin-left: 0 !important; 
          margin-bottom: 2rem;
        }
        .history-progress-track { width: 4px; }
        .history-progress-fill { width: 4px; }
        .history-progress-handle { 
          width: 10px; 
          height: 10px; 
          left: -3px; 
          border-width: 2px; 
        }
        .flip-card {
          height: 180px;
          margin-bottom: 2rem;
        }
        .flip-card-front, .flip-card-back {
          height: 180px;
          padding: 12px;
          min-height: 180px;
          overflow: hidden;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 0.9rem;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .flip-card-back p {
          font-size: 0.7rem;
          line-height: 1.3;
          overflow-y: auto;
          max-height: calc(100% - 35px);
        }
        .hover-prompt {
          font-size: 0.6rem;
          bottom: 8px;
        }
      }
      
      /* Very small mobile screens */
      @media (max-width: 480px) {
        .timeline { 
          padding-left: 12px; 
        }
        .timeline-item { 
          width: calc(100% - 16px); 
        }
        .flip-card { 
          height: 170px;
          margin-bottom: 1.75rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 10px;
          height: 170px;
          min-height: 170px;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 0.85rem;
          margin-bottom: 6px;
        }
        .flip-card-back p {
          font-size: 0.65rem;
          line-height: 1.25;
          max-height: calc(100% - 30px);
        }
      }
      
      /* Extra small screens */
      @media (max-width: 360px) {
        .flip-card { 
          height: 160px;
          margin-bottom: 1.5rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 8px;
          height: 160px;
          min-height: 160px;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 0.8rem;
          margin-bottom: 4px;
        }
        .flip-card-back p {
          font-size: 0.6rem;
          line-height: 1.2;
          max-height: calc(100% - 28px);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="w-full p-0 m-0 overflow-x-hidden">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center min-h-[70vh] w-full flex items-center justify-center md:justify-end px-4 sm:px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl text-white text-center md:text-right space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Empowering Your Business with{" "}
            <strong className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-200 block mt-2">
              KURO
            </strong>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            We specialize in intelligent, scalable IT solutions that drive
            innovation and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 sm:gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
              onClick={() => navigate("/offering")}
            >
              Learn More →
            </button>
            <button
              className="border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-white hover:text-blue-800 text-sm sm:text-base"
              onClick={() => navigate("/contactus")}
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      <div className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16 space-y-8 sm:space-y-12 md:space-y-16">
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

          <div className="text-center mb-8 sm:mb-10 md:mb-12 font-bold">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 text-center section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                History
              </span>
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
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
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-400 mb-3 sm:mb-4"
                      ref={(el) => (headingRefs.current[idx + 1] = el)}
                    >
                      {section.title}
                    </h3>
                    <div
                      className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed prose"
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
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-center mb-8 sm:mb-10 font-bold">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 text-center section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Inspiration
              </span>
            </h2>
            <div className="w-32 sm:w-36 md:w-44 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-5">
            {inspirationSections.map((sec, idx) => {
              const { ref, inView } = useInView({
                threshold: 0.2,
                triggerOnce: true,
              });
              return (
                <motion.div
                  key={idx}
                  className="vision-card bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-3 sm:p-4 shadow-lg"
                  ref={ref}
                  custom={idx}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <h3 className="text-base sm:text-lg md:text-xl text-blue-400 mb-2 font-semibold">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
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
          className="clients-section pt-3 mb-6 sm:mb-8 text-center"
        >
          <div className="text-center mb-8 sm:mb-10 font-bold">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 text-center section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Core Philosophy
              </span>
            </h2>
            <div className="w-40 sm:w-48 md:w-52 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {philosophyCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="flip-card"
                custom={idx}
                variants={itemVariants}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
                      {card.title}
                    </h3>
                    <span className="hover-prompt hidden lg:block">
                      Hover Me
                    </span>
                    <span className="hover-prompt lg:hidden">Tap Me</span>
                  </div>
                  <div className="flip-card-back">
                    <h3 className="text-lg sm:text-xl font-semibold text-violet-200 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            With these principles at our core,{" "}
            <span className="text-base sm:text-xl md:text-3xl font-bold text-orange-800">
              KURO's
            </span>{" "}
            intent is clear: to build accessible, intelligent, and future-ready
            automation solutions that power the manufacturing industry both at
            scale and at the grassroots. We're here to ensure{" "}
            <span className="text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Industry 4.0
            </span>{" "}
            isn't exclusive but inclusive, scalable, and transformative for all.
          </p>
        </div>

        {/* Accolades */}
        <Accolades />

        {/* Clients Logos */}
        <div
          ref={clientsRef}
          className="flex justify-center flex-wrap clients-section pt-3"
        >
          <div className="mb-8 sm:mb-10 text-center font-bold w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-2 section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Clients
              </span>
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-2" />
          </div>

          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg transition-transform"
                custom={idx}
                variants={itemVariants}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="w-full h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 object-contain"
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