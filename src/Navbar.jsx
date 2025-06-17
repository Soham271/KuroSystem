import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import kurologo from "./assets/kurologo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/inspiration", label: "Inspiration" },
    { to: "/offering", label: "Offering" },
    { to: "/successtories", label: "Suceess stories" },
    { to: "/careers", label: "Careers" },
  ];

  const handleLogoClick = () => navigate("/");

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-4 md:px-10 relative">
        {/* Logo at leftmost edge */}
        <div
          onClick={handleLogoClick}
          className="cursor-pointer absolute left-0 md:left-4"
        >
          <img
            src={kurologo}
            alt="Logo"
            className="h-[90px] w-auto object-contain"
          />
        </div>

        {/* Spacer to prevent overlap with logo */}
        <div className="w-[90px] md:w-[100px]" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 bg-[#f5f5f5] px-6 py-2 rounded-full shadow-inner ml-12">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-base font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#d32f2f] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-[#d32f2f]"
                    : "text-gray-800 hover:text-[#d32f2f] hover:font-bold"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Contact Us Button */}
          <NavLink
            to="/contactus"
            className="ml-2 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-base font-semibold flex items-center gap-1 shadow-sm"
          >
            Contact Us →
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white shadow-inner space-y-3 rounded-b-lg">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#d32f2f] bg-[#fceeee]"
                    : "text-gray-800 hover:text-[#d32f2f] hover:bg-gray-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contactus"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-[#007FFF] transition duration-300 text-base font-semibold"
          >
            Contact Us →
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
