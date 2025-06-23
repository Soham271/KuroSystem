import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      {/* Background Effects */}
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

      <main className="flex-grow pt-24 px-4 md:px-0">
        {/* Hero Section */}
        <section
          ref={heroInViewRef}
          className={`py-12 min-h-screen flex items-center transition-all duration-768 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-16 gap-12 px-6 rounded-xl"
            ref={heroRef}
          >
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Powering the Future with{" "}
                <span className="text-blue-500">Industry 4.0</span>
              </h1>
              <p className="text-gray-300 text-lg">
                At{" "}
                <strong className="text-2xl font-bold text-red-500">
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
                className="mt-4 px-6 py-3 text-lg font-semibold bg-gray-800 text-white rounded-xl hover:bg-blue-600 transition shadow-lg"
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
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Technologies
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {[
                {
                  title: "Digital Twin",
                  icon: "🔄",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "IT-OT Integration",
                  icon: "🔗",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "End-to-end Traceability",
                  icon: "📊",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "Cloud & Edge",
                  icon: "☁️",
                  gradient: "from-orange-500 to-red-500",
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
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform -skew-y-2" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform skew-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Transform Your Industry
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Join the revolution of smart manufacturing and intelligent
              automation
            </p>
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
              <p className="text-gray-300 text-lg leading-relaxed">
                Industry 4.0 is the fourth industrial revolution—built on
                cyber‑physical systems, IoT, big data, AI, and smart automation.
                It transforms traditional manufacturing into ‘smart factories’
                with real-time data exchange and autonomous decision-making.
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap -mx-2">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  Start Your Journey
                </button>
              </div>

              <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <div
                className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
