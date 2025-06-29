import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture2 from "../assets/pic2.png";

const Project2 = () => {
  const navigate = useNavigate();

  const project = {
    id: "project2",
    title: "Precision Maintenance and Utilization Tracking for a Global Components Manufacturer",
    category: "Client Product",
    services: "Brand Strategy, Digital Marketing, PR",
    clientSince: "2020",
    problem: "A top auto supplier faced hidden die issues and frequent production stoppages, leading to inefficiencies.",
    solution: "KURO implemented real-time die tracking, smart checklists, and error-proof controls, reducing downtime by 40% and enabling proactive maintenance.",
    image: Picture2,
    color: "from-pink-50 to-red-100",
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
                By integrating die-level intelligence into the moulding process, KURO empowered the client to shift from reactive to predictive maintenance, enforce discipline on the shop floor, and bring unprecedented clarity into the health and utilization of critical tooling.
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

export default Project2;