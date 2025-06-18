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
    { to: "/successtories", label: "Success Stories" },
    { to: "/careers", label: "Careers" },
    { to: "/contactus", label: "Contact Us →" },
  ];

  const handleLogoClick = () => navigate("/");

  const commonBtnClasses =
    "px-5 py-2 rounded-full text-base font-semibold flex items-center justify-center shadow-sm";

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-4 md:px-10 relative">
        <div
          onClick={handleLogoClick}
          className="cursor-pointer absolute left-0 md:left-4"
        >
          <img
            src={kurologo}
            alt="Logo"
            className="h-[50px] w-auto object-contain"
          />
        </div>
        <div className="w-[90px] md:w-[100px]" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 bg-[#f5f5f5] px-6 py-2 rounded-full shadow-inner ml-12">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? `${commonBtnClasses} bg-blue-500 text-white hover:bg-blue-700`
                  : `px-4 py-2 rounded-full text-base font-semibold text-gray-800 hover:text-[#d32f2f] hover:font-bold`
              }
            >
              {label}
            </NavLink>
          ))}
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
                isActive
                  ? `${commonBtnClasses} block w-full bg-blue-500 text-white hover:bg-blue-700`
                  : `block text-base font-medium w-full px-4 py-2 rounded-full  text-gray-800 hover:text-[#d32f2f] hover:bg-gray-100`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
