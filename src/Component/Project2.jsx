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
    color: "from-gray-900 to-gray-800",
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${project.color} p-6 xs:p-8 sm:p-10 lg:p-12 text-gray-100`}>
      <style>
        {`
          .back-button {
            background: linear-gradient(to right, #3b82f6, #9333ea);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }
          .section-title {
            position: relative;
            padding-bottom: 0.5rem;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 3rem;
            height: 2px;
            background: linear-gradient(to right, #3b82f6, #9333ea);
            transition: width 0.3s ease;
          }
          .section-title:hover::after {
            width: 5rem;
          }
          .content-card {
            background: rgba(31, 41, 55, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
       
        .image-container {
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
            transition: transform 0.3s ease;
          }
        
          .image-container::before {
            content: '';
            position: absolute;
            inset: 0;
                   
            transition: opacity 0.3s ease;
          }
     
          @media (max-width: 639px) {
            .back-button {
              padding: 0.4rem 0.8rem;
              font-size: 0.875rem;
            }
            .section-title {
              font-size: 1.25rem;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .back-button, .content-card, .image-container, .section-title::after {
              transition: none !important;
              transform: none !important;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/successtories")}
          className="flex items-center gap-2 text-gray-100 hover:text-white back-button"
          aria-label="Back to Success Stories"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-sm sm:text-base">Back to Success Stories</span>
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-10">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <div className="content-card">
              <h3 className="text-lg sm:text-xl font-semibold text-white section-title">Client Problem</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.problem}</p>
            </div>
            <div className="content-card">
              <h3 className="text-lg sm:text-xl font-semibold text-white section-title">KURO Solution</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.solution}</p>
            </div>
            <div className="content-card">
              <h3 className="text-lg sm:text-xl font-semibold text-white section-title">Conclusion</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                By integrating die-level intelligence into the moulding process, KURO empowered the client to shift from reactive to predictive maintenance, enforce discipline on the shop floor, and bring unprecedented clarity into the health and utilization of critical tooling.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;