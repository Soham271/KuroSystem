import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../assets/success-stories-banner.jpg";
import Picture1 from "../assets/Picture1.png";
import honeyMamasImage from "../assets/2d.jpg";
import traditionalMedicinalsImage from "../assets/3d.jpg";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      id: "project1",
      title: "Driving Efficiency & Traceability for a Leading Vehicle Manufacturer",
      category: "Client Product",
      services: "Strategy, Media Relations, Influencer Relations",
      description:
        "A vehicle maker faced messy, error-prone production. KURO brought real-time tracking and smart alerts, cutting downtime and boosting quality so they could grow with confidence.",
      image: Picture1,
      color: "from-amber-50 to-orange-100",
    },
    {
      id: "project2",
      title: "Precision Maintenance and Utilization Tracking for a Global Components Manufacturer",
      category: "Client Product",
      services: "Brand Strategy, Digital Marketing, PR",
      clientSince: "2020",
      description:
        "A top auto supplier faced hidden die issues and stoppages. KURO brought real-time die tracking, smart checklists, and error-proof controls, cutting downtime by 40% and making maintenance proactive, not reactive.",
      image: honeyMamasImage,
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
      image: traditionalMedicinalsImage,
      color: "from-green-50 to-emerald-100",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background: linear-gradient(135deg, #0a192f 0%, #000000 100%);
        min-height: 100vh;
      }

      @keyframes slideInFromLeft {
        0% { opacity: 0; transform: translateX(-100px) rotateY(-30deg); }
        100% { opacity: 1; transform: translateX(0) rotateY(0deg); }
      }

      @keyframes slideInFromRight {
        0% { opacity: 0; transform: translateX(100px) rotateY(30deg); }
        100% { opacity: 1; transform: translateX(0) rotateY(0deg); }
      }

      @keyframes slideInFromBottom {
        0% { opacity: 0; transform: translateY(50px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }

      @keyframes bounceIn {
        0% { opacity: 0; transform: scale(0.3) rotateZ(-10deg); }
        50% { opacity: 0.7; transform: scale(1.1) rotateZ(5deg); }
        100% { opacity: 1; transform: scale(1) rotateZ(0deg); }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }

      .animated-input {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .animated-input.slide-in-left {
        animation: slideInFromLeft 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }

      .animated-input.slide-in-right {
        animation: slideInFromRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }

      .animated-input.slide-in-bottom {
        animation: slideInFromBottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }

      .animated-input.bounce-in {
        animation: bounceIn 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }

      .pulse-button {
        animation: pulse 2s ease-in-out infinite;
      }

      .contact-section {
        position: relative;
        z-index: 1;
        background: linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%);
      }

      .contact-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('data:image/svg+xml,%3Csvg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" opacity=".05"%3E%3Cpath d="M0 0h2v2H0zM2 2h2v2H2zM4 4h2v2H4zM6 6h2v2H6zM8 8h2v2H8zM10 10h2v2H10zM12 12h2v2H12zM14 14h2v2H14zM16 16h2v2H16zM18 18h2v2H18zM20 20h2v2H20zM22 22h2v2H22zM24 24h2v2H24zM26 26h2v2H26zM28 28h2v2H28zM30 30h2v2H30zM32 32h2v2H32z" fill="%2355DDFF"/%3E%3C/svg%3E');
        background-size: 34px 34px;
        pointer-events: none;
        z-index: -1;
      }

      .form-card, .info-card {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }

      .form-card:hover, .info-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
      }

      @media (prefers-reduced-motion: reduce) {
        .form-card:hover, .info-card:hover { transform: none; }
        .animated-input { animation: none; }
        .pulse-button { animation: none; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const navigateToProject = (projectId) => {
    navigate(`/successtories/${projectId}`);
  };

  const PortfolioGrid = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of successful projects and brand partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => navigateToProject(project.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full h-[450px]">
                <div className="relative w-full h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blackbbleslack/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    VIEW
                  </div>
                </div>

                <div className="p-6 flex flex-col space-y-2">
                  <div className="text-sm text-gray-500 font-medium tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] flex items-center justify-center sm:justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-white max-w-none sm:max-w-2xl lg:max-w-3xl text-center sm:text-left space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight drop-shadow-md">
              <span className="inline text-4xl sm:inline">
                Your Success Stories
              </span>{" "}
              <strong className="inline sm:inline text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-200 drop-shadow-lg">
                KURO
              </strong>
            </h1>
            <p className="text-lg xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow max-w-lg sm:max-w-xl md:max-w-2xl mx-auto sm:mx-0">
              We are here to help you connect and explore how KURO can support
              your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default SuccessStories;