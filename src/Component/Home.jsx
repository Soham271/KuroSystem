import Navbar from "../Navbar";
import Footer from "../Footer";
import industry4 from "../assets/Industry4.gif";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main
        className="flex-grow p-6 md:p-12 bg-white"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent calc(5em - 1px),
              rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
              rgba(255, 255, 255, 0.2) 5em
            ),
            linear-gradient(
              to bottom,
              transparent calc(5em - 1px),
              rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
              rgba(255, 255, 255, 0.2) 5em
            )
          `,
          backgroundSize: "5em 5em",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-16 gap-12">
          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Powering the Future with{" "}
              <span className="text-[#d32f2f]">Industry 4.0</span>
            </h1>
            <p className="text-gray-600 text-lg">
              At <strong>Kuro</strong>, we integrate IoT, AI, big data, and
              digital twins to build smart, resilient software.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mx-auto md:mx-0">
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
            <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Explore Our Solutions →
            </button>
          </div>

          {/* GIF Image */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={industry4}
              alt="Industry 4.0"
              className="h-[600px] w-[700px] md:w-[450px] lg:w-[520px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Four Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
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
      </main>
    </div>
  );
};

export default Home;
