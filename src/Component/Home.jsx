import Navbar from "../Navbar";
import Footer from "../Footer";
import industry4 from "../assets/Industry4.gif";
import depoy from "../assets/depoy.jpg";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main
        className="flex-grow p-6 md:p-9"
       
      >
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-16 gap-12 bg-white  rounded-xl">
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Powering the Future with{" "}
              <span className="text-blue-500">Industry 4.0</span>
            </h1>
            <p className="text-gray-700 text-lg">
              At <strong className="text-2xl text-[#d32f2f]">Kuro</strong>, we
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
              className="mt-4 px-6 py-3  bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition shadow-lg"
              onClick={() => navigate("/offering")}
            >
              Explore Our Solutions →
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={industry4}
              alt="Industry 4.0"
              className="w-full max-w-[750px] mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {["Digital Twin", "IoT Sensors", "AI & Analytics", "Cloud & Edge"].map(
            (item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-center text-gray-800 font-semibold text-lg"
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* What is Industry 4.0 Section */}
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 bg-white p-10 rounded-xl s">
          {/* Image on Left */}
          <div className="md:w-1/2">
            <img
              src={depoy}
              alt="Deploy 4.0"
              className="w-full max-w-[750px] rounded-xl "
            />
          </div>

          {/* Description on Right */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              What is <span className="text-blue-500">Industry 4.0 </span>?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Industry 4.0 is the fourth industrial revolution—built on
              cyber‑physical systems, IoT, big data, AI, and smart automation.
              It transforms traditional manufacturing into ‘smart factories’
              with real-time data exchange and autonomous decision-making.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
