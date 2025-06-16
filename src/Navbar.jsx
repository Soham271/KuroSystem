import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Added useNavigate for logo navigation
import Logo from "./assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-0 left-[150px] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-red-600 z-10"></div>

      {/* Navigation bar */}
      <nav className="bg-[#1a3558] border-b-4 border-[#d32f2f] px-5 py-2 md:py-3 relative z-0">
        <div className="flex justify-between items-center w-full">
          {/* Logo with navigation */}
          <div
            className="bg-white p-1 border-2 border-[#1a3558] shadow-md cursor-pointer"
            onClick={handleLogoClick}
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
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 mt-2 ml-[-20px]">
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/inspiration"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            Inspiration
          </NavLink>
          <NavLink
            to="/offering"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            Offerings
          </NavLink>
          <NavLink
            to="/suceesstories"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `text-white text-base md:text-lg font-sans ${
                isActive ? "text-[#d32f2f]" : "hover:text-[#d32f2f]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2">
            <NavLink
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-white text-base font-sans ${
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
                `text-white text-base font-sans ${
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
                `text-white text-base font-sans ${
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
                `text-white text-base font-sans ${
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
                `text-white text-base font-sans ${
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
                `text-white text-base font-sans ${
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
