import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="relative">
      {/* Trapezium shape above the logo */}
      <div className="hidden md:block absolute top-0 left-[130px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[20px] border-b-[#d32f2f] z-10"></div>

      {/* Navigation bar */}
      <nav className="bg-[#1a3558] border-b-4 border-[#d32f2f] px-5 py-2 md:py-3 relative z-0">
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
          {/* Logo with trapezium effect */}
          <div
            className="relative bg-white p-1 cursor-pointer"
            onClick={handleLogoClick}
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)", // Trapezium shape for logo container
            }}
          >
            <img src={Logo} alt="Logo" className="h-[50px] w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  {/* Trapezium underline on active/hover */}
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  {/* Trapezium shape after the link */}
                  <span className="absolute top-1/2 right-[-20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#d32f2f] transform -translate-y-1/2"></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/inspiration"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Inspiration
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  <span className="absolute top-1/2 right-[-20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#d32f2f] transform -translate-y-1/2"></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/offering"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Offerings
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  <span className="absolute top-1/2 right-[-20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#d32f2f] transform -translate-y-1/2"></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/suceesstories"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Success Stories
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  <span className="absolute top-1/2 right-[-20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#d32f2f] transform -translate-y-1/2"></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Careers
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                  <span className="absolute top-1/2 right-[-20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#d32f2f] transform -translate-y-1/2"></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `text-white text-base md:text-lg font-sans relative transition-colors duration-300 group ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact Us
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#d32f2f] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2">
            <NavLink
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/inspiration"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              Inspiration
            </NavLink>
            <NavLink
              to="/offering"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              Offerings
            </NavLink>
            <NavLink
              to="/suceesstories"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              Success Stories
            </NavLink>
            <NavLink
              to="/careers"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans relative ${
                  isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;