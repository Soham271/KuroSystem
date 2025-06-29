import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture1 from "../assets/pic1.png";

const Project1 = () => {
  const navigate = useNavigate();

  const project = {
    id: "project1",
    title: "Driving Efficiency & Traceability for a Leading Vehicle Manufacturer",
    category: "Client Product",
    services: "Strategy, Media Relations, Influencer Relations",
    problem:
      "A vehicle maker faced messy, error-prone production processes, leading to frequent delays and quality issues.",
    solution:
      "KURO implemented real-time tracking systems and smart alerts, streamlining production and reducing errors significantly.",
    image: Picture1,
    color: "from-amber-50 to-orange-100",
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${project.color} p-8`}>
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/successtories")}
          className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Success Stories</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Client Problem</h3>
              <p className="text-gray-600 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Kuro Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Conclusion</h3>
              <p className="text-gray-600 leading-relaxed">
                KURO’s innovative approach transformed the client’s operations, ensuring scalability and maintaining high standards in quality and efficiency.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;