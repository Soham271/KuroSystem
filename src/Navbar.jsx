import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import kurologo from "./assets/kurologo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const navLinkStyle = ({ isActive }) => `
    relative text-base md:text-lg font-medium
    transition-all duration-300 ease-in-out
    flex items-center justify-center px-4 py-2 rounded-lg z-10 
    ${isActive
      ? "text-[#d32f2f]"
      : "text-white hover:text-[#d32f2f] hover:bg-white/10 "}
  `;

  const navLinkWrapperStyle = ({ isActive }) => `
    relative flex items-center justify-center
    w-[150px] h-12 md:h-[59px] 
    transition-all duration-300 ease-in-out
    ${isActive ? "bg-white  shadow-md border-t-4 border-l-4 border-r-4 border-red-500 border-b-5 border-b-white"  : ""}
  `;

  const links = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/inspiration", label: "Inspiration" },
    { to: "/offering", label: "Offerings" },
    { to: "/suceesstories", label: "SuccessStories" },
    { to: "/careers", label: "Careers" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <nav className=" bg-gradient-to-r from-[#1a3558] to-[#2a4a78]  pt-6  h-20 w-full z-50 border-b-4 border-red-500">
      <div className="flex items-center justify-between w-full px-4 md:px-8 h-full">
        {/* Logo */}
        <div
          className="cursor-pointer mb-[20px] hover:scale-110 transition-transform duration-300"
          onClick={handleLogoClick}
        >
          <img src={kurologo} alt="Logo" className="h-[50px] w-auto object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-3">
          {links.map(({ to, label }) => (
            <div
              key={to}
              className={navLinkWrapperStyle({ isActive: window.location.pathname === to })}
            >
              <NavLink to={to} className={navLinkStyle}>
                {label}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl hover:text-[#d32f2f] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 flex flex-col gap-2 animate-slideIn">
          {links
            .filter(({ to }) => to !== "/") // Optional: omit Home
            .map(({ to, label }) => (
              <div
                key={to}
                className={navLinkWrapperStyle({ isActive: window.location.pathname === to })}
              >
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={navLinkStyle}
                >
                  {label}
                </NavLink>
              </div>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;