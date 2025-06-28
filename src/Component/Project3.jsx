import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import traditionalMedicinalsImage from "../assets/3d.jpg";

const Project3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 transition-all duration-500">
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-2">
                WELLNESS & HEALTH
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Traditional Medicinals
              </h1>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Campaign Services
                </h3>
                <p className="text-gray-700">
                  Content Strategy, Social Media, Wellness Campaigns
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Client Since
                </h3>
                <p className="text-gray-700">2018</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Herbal tea and wellness products rooted in traditional
                  medicine and sustainable practices.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
                View Case Study
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium">
                Visit Website
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={traditionalMedicinalsImage}
                alt="Traditional Medicinals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
