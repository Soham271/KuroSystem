import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const sectionsRef = useRef([]);
  const clientsRef = useRef(null);
  const accoladesRef = useRef(null);

  const { ref: clientsInViewRef, inView: clientsInView } = useInView({
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
        "Back in 2011, at the Hannover Messe in Germany—a major innovation trade fair—the German government introduced the term 'Industry 4.0.' As part of its High‑Tech Strategy 2020, this initiative aimed to advance manufacturing through smart, connected, and flexible systems.",
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
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    if (clientsRef.current) {
      gsap.fromTo(
        clientsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (accoladesRef.current) {
      gsap.fromTo(
        accoladesRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: accoladesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Add custom styles
    const style = document.createElement("style");
    style.innerHTML = `
      .section-heading {
        position: relative;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 100, 200, 0.2));
        backdrop-filter: blur(10px);
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
        padding: 2rem;
        border-radius: 1rem;
        backdrop-filter: blur(15px);
      }
      .client-card:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full">
      <section
        className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-end px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        <div className="absolute inset-0 bg-black/40" ref={heroRef} />
        <div
          className="relative z-10 text-white max-w-2xl text-right space-y-6"
          ref={heroTextRef}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Empowering Your Business with{" "}
            <span className="text-blue-400">KURO</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We specialize in scalable IT solutions that drive innovation and
            deliver sustainable growth.
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
      </section>

      <section className="py-16 px-6 md:px-16 space-y-16">
        {sections.map((section, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="mx-auto max-w-3xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4 section-heading">
              {section.title}
            </h2>
            <div
              className="text-lg md:text-xl text-gray-300 prose"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}

        <div ref={accoladesRef}>
          <Accolades />
        </div>

        <div className="clients-section pt-3" ref={clientsRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 section-heading">
            OUR CLIENTS
          </h2>
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
            ref={clientsInViewRef}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-4 rounded-lg"
                custom={idx}
                variants={itemVariants}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-24 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
