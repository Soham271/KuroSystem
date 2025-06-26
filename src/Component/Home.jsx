import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import homepagewhykuro from "../assets/homepagewhykuro.jpg";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaStream,
  FaCloud,
  FaCogs,
  FaEye,
  FaCubes,
} from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import industry4 from "../assets/Industry4.gif";
import depoy from "../assets/depoy.jpg";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.jpg";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const heroRef = useRef(null);
  const technologiesRef = useRef(null);
  const { ref: heroInViewRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const scrollToTechnologies = () => {
    if (technologiesRef.current) {
      technologiesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    setIsVisible(true);

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const style = document.createElement("style");
    style.innerHTML = `
      .explore-button {
        background: linear-gradient(to right, #3b82f6, #9333ea);
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        border-radius: 0.75rem;
        transition: transform 0.3s ease, box-shadow 0.5s ease;
        min-height: 42px;
      }
      .explore-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 22px rgba(59, 130, 246, 0.3);
                

      }
      
      .slider-container {
        overflow: hidden;
        width: 100%;
        position: relative;
        z-index: 1;
      }
      .slider-track {
        display: flex;
        width: fit-content;
        animation: slide 25s linear infinite;
      }
      .slider-track.paused {
        animation-play-state: paused;
      }
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .slider-card {
        flex: 0 0 auto;
        width: 280px;
        margin-right: 20px;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }
      .slider-card:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
      }
      @media (max-width: 639px) {
        .explore-button {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        .slider-card {
          width: 220px;
          margin-right: 16px;
        }
      }
      @media (max-width: 374px) {
        .slider-card {
          width: 180px;
          margin-right: 12px;
        }
      }
      @media (min-width: 640px) {
        .explore-button {
          padding: 1rem 2rem;
          font-size: 1.25rem;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .slider-track, .animate-shine, .group-hover\\:scale-*, .animate-pulse, .slider-card:hover {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [handleScroll]);

  const techItems = [
    {
      title: "Digital Twin",
      icon: <FaProjectDiagram />,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "IT-OT Integration",
      icon: <FaNetworkWired />,
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "End-End Traceability",
      icon: <FaStream />,
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "Cloud & Edge",
      icon: <FaCloud />,
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "2D Gantry",
      icon: <FaCogs />,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "3D Gantry",
      icon: <FaCubes />,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Vision Inspection",
      icon: <FaEye />,
      gradient: "from-indigo-600 to-blue-600",
    },
  ];

  const doubledTechItems = [...techItems, ...techItems];

  const sliderRef = useRef(null);
  const handlers = useSwipeable({
    onSwiping: ({ deltaX }) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += deltaX / 2;
      }
    },
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-64 xs:w-80 h-64 xs:h-80 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />
        <div
          className="absolute top-1/2 -left-40 w-72 xs:w-96 h-72 xs:h-96 bg-gradient-to-br from-indigo-100/10 to-cyan-200/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-56 xs:w-72 h-56 xs:h-72 bg-gradient-to-br from-rose-50/10 to-blue-100/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(0, ${scrollY * 0.08}px)` }}
        />
      </div>

      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <main className="flex-grow mt-5 xl:mt-16">
        <section
          ref={heroInViewRef}
          className={`pt-4 pb-8 xs:pb-12 h-auto flex items-center transition-all duration-768 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4 xs:gap-6 px-4 xs:px-6"
            ref={heroRef}
          >
            <div className="md:w-2/3">
              <h1 className="text-4xl xs:text-3xl md:text-[40px] font-bold leading-tight mb-4">
                <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-slate-500 bg-[length:200%_auto] animate-shine">
                  Making Production as easy
                </span>{" "}
                <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-slate-500 bg-[length:200%_auto] animate-shine">
                  as the flick of fingers
                </span>
              </h1>
              <p className="text-gray-300 mt-4 mb-6 text-lg xs:text-lg md:text-xl space-y-3">
                At{" "}
                <strong className="text-lg xs:text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">
                  KURO
                </strong>
                , we make sure that intelligent, future-ready automation
                technology is widely accessible, to power the manufacturing
                industry both at scale and at the grassroots.
              </p>
              <ul className="list-disc pl-5 text-lg xs:text-base md:text-xl text-gray-300 space-y-2 xs:space-y-1">
                <li>
                  <strong className="text-gray-400">
                    Real-Time Monitoring{" "}
                  </strong>{" "}
                  with our Industry 4.0 Solutions
                </li>
                <li>
                  <strong className="text-gray-400">
                    AI-powered Automation{" "}
                  </strong>{" "}
                  is here
                </li>
                <li>
                  <strong className="text-gray-400">Smooth integration</strong>{" "}
                  of OT systems, new or old, with IT systems.
                </li>
              </ul>
              <div className="mt-8 xs:mt-10">
                <button
                  className="px-4 xs:px-6 py-2 xs:py-3 text-2xl xs:text-lg font-semibold bg-blue-600 text-white rounded-xl hover:bg-gray-400 hover:text-black transition shadow-lg explore-button"
                  onClick={() => navigate("/offering")}
                  aria-label="Explore KURO's solutions"
                >
                  Explore Our Solutions →
                </button>
              </div>
            </div>
            <div
              className="
    ml-0 md:ml-10
    md:w-[75%]
    mt-6 xs:mt-8 md:mt-0
    bg-white bg-clip-padding backdrop-filter backdrop-blur-xl
    border border-white/30 rounded-xl overflow-hidden
    shadow-lg transition-all duration-300
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30
  "
            >
              <img
                src={industry4}
                alt="Industry 4.0"
                className="
      w-full max-w-[400px] xs:max-w-[500px] md:max-w-[600px]
      mx-auto
      rounded-xl
    "
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          className="py-6 xs:py-8 sm:py-12 technologies-section"
          ref={technologiesRef}
        >
          <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
            <div className="text-center mb-8 xs:mb-12">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Technologies
                </span>
              </h2>
              <div className="w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            <div
              className="slider-container"
              {...handlers}
              ref={sliderRef}
              onMouseEnter={() => sliderRef.current?.classList.add("paused")}
              onMouseLeave={() => sliderRef.current?.classList.remove("paused")}
            >
              <div className={`slider-track ${heroInView ? "" : "paused"}`}>
                {doubledTechItems.map((item, i) => (
                  <div
                    key={`${item.title}-${i}`}
                    className="slider-card group relative p-5 xs:p-6 sm:p-7 bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/60 hover:border-blue-500/60 transition-all duration-400 text-center cursor-pointer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-400 rounded-2xl`}
                    />
                    <div className="text-3xl xs:text-4xl sm:text-5xl mb-4 xs:mb-5 group-hover:scale-110 transition-transform duration-300">
                      <div className="flex justify-center">{item.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-base xs:text-lg sm:text-xl relative z-10 group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 rounded-b-2xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-6 xs:py-12 sm:py-24 overflow-hidden">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform skew-y-1 origin-top-left" />
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-8 xs:py-12 sm:py-16 px-4 xs:px-6 md:px-16 transform -skew-y-1 origin-top-left">
              <div className="transform skew-y-1 text-center">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-3xl font-black text-white mb-4 xs:mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white bg-[length:200%_auto] animate-shine">
                    Transform Your Industry
                  </span>
                </h2>
                <p className="text-gray-900 text-lg xs:text-xl sm:text-2xl max-w-xl xs:max-w-2xl sm:max-w-3xl mx-auto">
                  Join the revolution of smart manufacturing and intelligent
                  automation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-10 sm:gap-14 px-4 sm:px-6">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={depoy}
                alt="Industry 4.0"
                className="w-full max-w-[600px] sm:max-w-[600px] md:max-w-[700px] rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-center text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                What is <span className="text-blue-500">Industry 4.0?</span>
              </h2>
              <p className=" lg:relative lg:left-5 text-gray-200 text-pretty sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                Industry 4.0 is the fourth industrial revolution built on cyber
                physical systems, IoT, big data, AI, and smart automation. It
                transforms traditional manufacturing into ‘smart factories’ with
                real-time data exchange and autonomous decision-making.
              </p>
            </div>
          </div>
        </section>

        <div
          className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${homepagewhykuro})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-md">
                Why choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
                  KURO?
                </span>
              </h2>
              <p className="mx-auto text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed mt-6 sm:mt-8 drop-shadow">
                We combine technical expertise with creative vision to deliver
                solutions that drive real business results. Our approach ensures
                innovation and efficiency for your business success.
              </p>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card img={Picture1} text="Integrated Architecture Design" />
                <Card
                  img={Picture2}
                  text="Continuous Innovation & Improvement"
                />
                <Card img={Picture3} text="Agile Project Management" />
                <Card img={Picture4} text="Remote Support Team" />
              </div>
            </div>
          </div>
        </div>
        <section className="py-6 xs:py-12 sm:py-24">
          <div className="max-w-8xl mx-auto px-4 xs:px-6 lg:px-8">
            <div className="relative p-6 xs:p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
              <div className="relative z-10">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 xs:mb-6">
                  Ready to Transform Your Manufacturing?
                </h2>
                <p className="text-gray-300 text-base xs:text-lg sm:text-xl mb-6 xs:mb-8 max-w-xl xs:max-w-2xl mx-auto leading-relaxed">
                  Join industry leaders who trust KURO to power their digital
                  transformation journey
                </p>
                <button
                  className="px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-base xs:text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl min-h-[48px]"
                  onClick={() => navigate("/contactus")}
                  aria-label="Start your journey with KURO"
                >
                  "Start Your Journey With Us!"
                </button>
              </div>
              <div className="absolute top-6 xs:top-8 left-6 xs:left-8 w-3 xs:w-4 h-2 xs:h-3 bg-blue-400 rounded-full animate-pulse" />
              <div
                className="absolute bottom-6 xs:bottom-8 right-6 xs:right-8 w-2 xs:w-3 h-2 xs:h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
