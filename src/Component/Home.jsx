import { useNavigate } from "react-router-dom";

import industry4 from "../assets/Industry4.gif";
import depoy from "../assets/depoy.jpg";
import Card from "./Card";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.jpg";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white pt-24 px-4 md:px-0">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-16 gap-12 px-6 bg-white rounded-xl">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Powering the Future with{" "}
              <span className="text-blue-500">Industry 4.0</span>
            </h1>
            <p className="text-gray-700 text-lg">
              At <strong className="text-2xl text-[#d32f2f]">KURO</strong>, we
              integrate IoT, AI, big data, and digital twins to build smart,
              resilient software.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                <strong>Real-time Monitoring</strong> via IoT sensors
              </li>
              <li>
                <strong>AI-Powered Automation</strong> with analytics
              </li>
              <li>
                <strong>Seamless OT + IT Integration</strong>
              </li>
            </ul>
            <button
              className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-xl hover:bg-slate-700 transition shadow-lg"
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
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20 px-6">
          {[
            "Digital Twin",
            "IoT Sensors",
            "AI & Analytics",
            "Cloud & Edge",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-center text-gray-800 font-semibold text-lg"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="relative bg-white text-black py-12 px-6 md:px-16">
          <div
            className="absolute top-0 left-0 w-full h-9"
            style={{
              background:
                "linear-gradient(to right, #1e3a8a, #3b82f6, #60a5fa)",
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              zIndex: 0,
            }}
          />
        </div>
        {/* What is Industry 4.0 Section */}
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 bg-white px-6 py-12 rounded-xl sm:mb-10 md:mb-16">
          <div className="md:w-1/2">
            <img
              src={depoy}
              alt="Deploy 4.0"
              className="w-full max-w-[700px] rounded-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              What is <span className="text-blue-500 ">Industry 4.0?</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Industry 4.0 is the fourth industrial revolution—built on
              cyber‑physical systems, IoT, big data, AI, and smart automation.
              It transforms traditional manufacturing into ‘smart factories’
              with real-time data exchange and autonomous decision-making.
            </p>
          </div>
        </div>

        {/* Why Choose Kuro Section */}
        <div className="text-center mt-20 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Why choose <span className="text-blue-500">KURO?</span>
          </h1>
          <p className="mx-auto text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            We combine technical expertise with creative vision to deliver
            solutions that drive real business results.
          </p>
        </div>

        {/* Card Section */}
        <div className="p-6 md:p-10 mb-5">
          <div className="flex flex-wrap -mx-2">
            <Card img={Picture1} text="Integrated Architecture Design" />
            <Card img={Picture2} text="Continuous Innovation & Improvement" />
            <Card img={Picture3} text="Agile Project Management" />
            <Card img={Picture4} text="Remote Support Team" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
