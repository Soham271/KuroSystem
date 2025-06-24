import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaStream,
  FaCloud,
  FaCogs,
  FaCubes,
  FaEye,
} from "react-icons/fa";
import industry4 from "../assets/Industry4.gif";
import depoy from "../assets/depoy.jpg";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.jpg";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ img, text }) => (
  <div className="group relative h-72 sm:h-80 overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 mx-2 mb-4 w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-16px)]">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <img
      src={img}
      alt={text}
      className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors duration-300">
        {text}
      </h3>
    </div>
  </div>
);

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

  // Optimized scroll
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Smooth scroll
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

    // Custom styles
    const style = document.createElement("style");
    style.innerHTML = `
      .explore-button {
        background: linear-gradient(to right, #3b82f6, #9333ea);
        padding: 1rem 2rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        border-radius: 0.75rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .explore-button:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        />
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-100/10 to-cyan-200/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-rose-50/10 to-blue-100/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translate(0, ${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <main className="flex-grow pt-12 px-4 md:px-0">
        {/* Hero Section */}
        <section
          ref={heroInViewRef}
          className={`py-12 min-h-screen flex items-center transition-all duration-768 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-8 gap-6 px-6 rounded-xl"
            ref={heroRef}
          >
            <div className="md:w-2/3 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className=" font-serif text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-slate-500 bg-[length:200%_auto] animate-shine mb-1">
                  Making Production as easy
                </span>{" "}
                <span className=" font-serif text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-slate-500 bg-[length:200%_auto] animate-shine">
                  as the flick of fingers
                </span>
              </h1>

              <p className="text-gray-300 text-lg">
                At{" "}
                <strong className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">
                  KURO
                </strong>
                , we integrate IoT, AI, big data, and digital twins to build
                smart, resilient software.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>
                  <strong>Real-time Monitoring</strong> via IoT sensors
                </li>
                <li>
                  <strong>AI-Powered Automation</strong> with analytics
                </li>
                <li>
                  <strong>Seamless Integration</strong> for OT + IT systems
                </li>
              </ul>
              <button
                className="mt-4 px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-xl hover:bg-gray-400 hover:text-black transition shadow-lg"
                onClick={() => navigate("/offering")}
              >
                Explore Our Solutions →
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={industry4}
                alt="Industry 4.0"
                className="w-full max-w-[700px] mx-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Feature Cards (Technologies) */}
        <section className="py-8 sm:py-12" ref={technologiesRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Technologies
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {[
                {
                  title: <div className="mt-3">Digital Twin</div>,
                  icon: (
                    <div className="flex justify-center">
                      <FaProjectDiagram />
                    </div>
                  ),
                  gradient: "from-blue-600 to-cyan-600",
                },
                {
                  title: <div className="mt-3">IT-OT Integration</div>,
                  icon: (
                    <div className="flex justify-center">
                      <FaNetworkWired />
                    </div>
                  ),
                  gradient: "from-purple-600 to-indigo-600",
                },
                {
                  title: <div className="mt-3">End-End Traceability</div>,
                  icon: (
                    <div className="flex justify-center">
                      <FaStream />
                    </div>
                  ),
                  gradient: "from-green-600 to-emerald-600",
                },
                {
                  title: <div className="mt-3">Cloud & Edge</div>,
                  icon: (
                    <div className="flex justify-center">
                      <FaCloud />
                    </div>
                  ),
                  gradient: "from-orange-600 to-red-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-6 sm:p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 text-center hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  />
                  <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg relative z-10 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skewed Section */}
        <section className="relative py-2 sm:py-24 overflow-hidden">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform skew-y-1 origin-top-left" />
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-16 px-6 md:px-16 transform -skew-y-1 origin-top-left">
              <div className="transform skew-y-1 text-center">
                <h2 className="text-5xl md:text-3xl font-black text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-white bg-[length:200%_auto] animate-shine">
                    Transform Your Industry
                  </span>
                </h2>
                <p className="text-grey-200 text-2xl text-black max-w-3xl  sm:max-w-xl mx-auto">
                  Join the revolution of smart manufacturing and intelligent
                  automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry 4.0 Section */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 px-6">
            <div className="md:w-1/2">
              <img
                src={depoy}
                alt="Industry 4.0"
                className="w-full max-w-[700px] rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                What is <span className="text-blue-500">Industry 4.0?</span>
              </h2>
              <p className="text-gray-200  pl-2 text-xl leading-relaxed">
                Industry 4.0 is the fourth industrial revolution built on cyber
                physical systems, IoT, big data, AI, and smart automation. It
                transforms traditional manufacturing into ‘smart factories’ with
                real-time data exchange and autonomous decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose KURO Section */}
        <section className="py-12">
          <div className="text-center mb-12 px-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why choose <span className="text-blue-500">KURO?</span>
            </h2>
            <p className="mx-auto text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mt-4">
              We combine technical expertise with creative vision to deliver
              solutions that drive real business results.
            </p>
          </div>
          <div className="max-w-full mx-auto px-6">
            <div className="flex flex-wrap -mx-2 ">
              {[
                { img: Picture1, text: "Integrated Architecture Design" },
                { img: Picture2, text: "Continuous Innovation & Improvement" },
                { img: Picture3, text: "Agile Project Management" },
                { img: Picture4, text: "Remote Support Team" },
              ].map((item, i) => (
                <Card key={i} img={item.img} text={item.text} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 sm:py-24">
          <div className="max-w-full  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join industry leaders who trust KURO to power their digital
                  transformation journey
                </p>
                <button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  onClick={() => navigate("/contactus")}
                >
                  Start Your Journey
                </button>
              </div>

              <div className="absolute top-8 left-8 w-4 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div
                className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "s" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
