import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture3 from "../assets/pic3.png";

const Project3 = () => {
  const navigate = useNavigate();

  const project = {
    id: "project3",
    title: "AI-Powered Traceability for an FMCG Nano-Factory",
    category: "Client Product",
    services: "Content Strategy, Social Media, Wellness Campaigns",
    clientSince: "2018",
    problem: "An FMCG firm faced chaotic changeovers, leading to errors and delays in production.",
    solution: "KURO’s AI-powered traceability system reduced errors, accelerated changeovers by 45%, and ensured full regulatory compliance.",
    image: Picture3,
    color: "from-green-50 to-emerald-100",
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
              <h3 className="text-xl font-semibold text-gray-900">Campaign Services</h3>
              <p className="text-gray-600 leading-relaxed">{project.services}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Client Since</h3>
              <p className="text-gray-600 leading-relaxed">{project.clientSince}</p>
            </div>
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
                KURO’s AI-driven approach streamlined changeovers, enhanced compliance, and positioned the client for scalable, error-free production.
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

export default Project3;