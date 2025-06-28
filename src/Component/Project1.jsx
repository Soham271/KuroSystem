import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import autocampImage from "../assets/2d.jpg";

const Project1 = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // Start with Project1

  const projects = [
    {
      id: "project1",
      title:
        "Driving Efficiency & Traceability for a Leading Vehicle Manufacturer",
      category: "Client Product",
      services: "Strategy, Media Relations, Influencer Relations",
      description:
        "A vehicle maker faced messy, error-prone production. KURO brought real-time tracking and smart alerts, cutting downtime and boosting quality so they could grow with confidence.",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
      color: "from-amber-50 to-orange-100",
    },
    {
      id: "project2",
      title:
        "Precision Maintenance and Utilization Tracking for a Global Components Manufacturer",
      category: "Client Product",
      services: "Brand Strategy, Digital Marketing, PR",
      clientSince: "2020",
      description:
        "A top auto supplier faced hidden die issues and stoppages. KURO brought real-time die tracking, smart checklists, and error-proof controls, cutting downtime by 40% and making maintenance proactive, not reactive.",
      image:
        "https://images.unsplash.com/photo-1549652756-95b31b6b8040?w=800&h=600&fit=crop",
      color: "from-pink-50 to-red-100",
    },
    {
      id: "project3",
      title: "AI-Powered Traceability for an FMCG Nano-Factory",
      category: "Client Product",
      services: "Content Strategy, Social Media, Wellness Campaigns",
      clientSince: "2018",
      description:
        "An FMCG firm faced chaos in changeovers. KURO’s AI traceability cut errors, sped changeovers by 45%, and ensured full compliance.",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop",
      color: "from-green-50 to-emerald-100",
    },
  ];

  useEffect(() => {
    if (!projects[currentIndex]) {
      setCurrentIndex(0); // Reset if current project is invalid
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  if (!currentProject) return <div>Loading...</div>;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentProject.color} transition-all duration-500`}
    >
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/successtories")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-medium">Back</span>
          </button>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
                {currentProject.title}
              </h1>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Client Problem
                </h3>
                <p className="text-gray-700">
                  {currentProject.description.split("\n")[0]}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kuro Solution:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentProject.description.split("\n").slice(1).join("\n")}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Conclusion
                </h3>
                <p className="text-gray-700">
                  This transformation positioned KURO not just as a technology
                  provider, but as a true manufacturing intelligence partner. By
                  bridging ERP data, shopfloor automation, and user-centric
                  alerts, KURO enabled the client to confidently scale
                  operations while maintaining world-class standards in quality
                  and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={autocampImage}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
