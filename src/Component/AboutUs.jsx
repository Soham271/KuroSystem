import React from "react";
import a from "../assets/aerial-view-business-team_53876-124515.avif";
import { useNavigate } from "react-router-dom";
import Accolades from "./Accolades";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full m-0 p-0">
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

      <div className="relative bg-white text-black py-16 px-6 md:px-16">
        <div
          className="absolute top-0 left-0 w-full h-9"
          style={{
            background: "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
            zIndex: 0,
          }}
        />
        <div
          className="relative z-10 mx-auto"
          style={{ width: "70%", marginLeft: "15%", marginRight: "15%" }}
        >
          <h2 className="text-4xl md:text-5xl  mb-4 tracking-wide text-gray-900 font-montserrat">
            History of Industry 4.0
          </h2>
          <p className="text-2xl md:text-2xl leading-relaxed text-gray-700 my-4 mb-8">
            Back in 2011, at the Hannover Messe in Germany—a huge trade fair
            buzzing with innovation—the German government dropped a big idea
            called Industry 4.0. It was part of their High-Tech Strategy 2020, a
            plan to keep Germany at the top of the manufacturing game. Picture
            engineers, policymakers, and researchers teaming up, dreaming of
            factories that think for themselves, powered by cutting-edge tech.
            That’s where it all began.
          </p>
          <h2 className="text-4xl md:text-5xl   mb-4 tracking-wide text-gray-900 font-montserrat">
            What is it?
          </h2>
          <p className="text-2xl md:text-2xl leading-relaxed text-gray-700 my-4 mb-8">
            It’s the Fourth Industrial Revolution, where factories get a brain!
            Building on steam power (1.0), electricity and assembly lines (2.0),
            and computer automation (3.0), Industry 4.0 uses tech like the
            Internet of Things, AI, robotics, and cloud computing to make
            production super smart, connected, and flexible.
          </p>
          <h2 className="text-5xl md:text-3xl mb-4 tracking-wide text-black font-montserrat">
            KURO's Journey:-
          </h2>
          <p className="text-2xl md:text-2xl leading-relaxed text-gray-700 my-4">
            <strong>The Vision Takes Root :</strong> Imagine a small group of
            tech enthusiasts gathering around a table, fueled by coffee and big
            dreams. KURO began in 2015, born from a passion to revolutionize
            industries with intelligent, scalable IT solutions. It started as a
            bold idea to empower businesses worldwide with cutting-edge
            technology.
          </p>
          <p className="text-2xl md:text-2xl leading-relaxed text-gray- my-8">
            <strong>Early Steps :</strong> Those first years were all about
            experimentation and grit. KURO’s founders dove into developing
            innovative tools, laying the foundation for what would become our
            signature approach to driving sustainable growth and automation.
          </p>
          <p className="text-2xl md:text-2xl leading-relaxed text-gray-700 my-8">
            <strong>A Growing Promise :</strong> As the team expanded, so did
            our vision. By, KURO was gaining traction, attracting like-minded
            innovators and setting the stage for a global impact, all while
            staying true to our mission of non-stop production and progress.
          </p>
        </div>
        <Accolades />
      </div>
    </section>
  );
};

export default AboutUs;
