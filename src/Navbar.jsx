import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import kurologo from "./assets/KuroLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const navLinkStyle = ({ isActive }) => `
    text-white text-base md:text-lg font-sans relative group px-4 py-2 rounded-lg
    transition-all duration-300 ease-in-out transform hover:scale-105
    ${
      isActive
        ? "bg-[#d32f2f]/20 text-[#d32f2f] font-semibold"
        : "hover:bg-[#d32f2f]/10 hover:text-[#d32f2f]"
    }
  `;

  return (
    <nav className="bg-gradient-to-r from-[#1a3558] to-[#2a4a78] border-b-4 border-[#d32f2f] px-0 py-3 z-10">
      <div className="flex items-center justify-between w-full px-4 md:px-8">
        {/* Logo - flush to the left */}
        <div
          className="cursor-pointer flex-shrink-0 hover:scale-110 transition-transform duration-300"
          onClick={handleLogoClick}
        >
          <img
            src={kurologo}
            alt="Logo"
            className="h-[70px] w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/aboutus" className={navLinkStyle}>
            About Us
          </NavLink>
          <NavLink to="/inspiration" className={navLinkStyle}>
            Inspiration
          </NavLink>
          <NavLink to="/offering" className={navLinkStyle}>
            Offerings
          </NavLink>
          <NavLink to="/suceesstories" className={navLinkStyle}>
            Success Stories
          </NavLink>
          <NavLink to="/careers" className={navLinkStyle}>
            Careers
          </NavLink>
          <NavLink to="/contactus" className={navLinkStyle}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl hover:text-[#d32f2f] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 px-4 pb-4 animate-slideIn">
          {[
            { to: "/aboutus", label: "About Us" },
            { to: "/inspiration", label: "Inspiration" },
            { to: "/offering", label: "Offerings" },
            { to: "/suceesstories", label: "Success Stories" },
            { to: "/careers", label: "Careers" },
            { to: "/contactus", label: "Contact Us" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={navLinkStyle}
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
