import React from "react";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./assets/KuroLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-10">
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <img
              src={Logo}
              alt="Kuro Logo"
              className="mx-auto sm:mx-0 mb-2"
              width={110}
              height={30}
            />
            <p className="text-gray-400 text-sm">… striving for non‑stopping production</p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-gray-400 text-base">
              {["Home", "About Us", "Offerings", "Success Stories", "Careers", "Contact Us"]
                .map(label => (
                  <li key={label}>
                    <a
                      href={`/${label.replace(/\s+/g, "").toLowerCase()}`}
                      className="hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

         {/* /social links */}
         <div className="text-center sm:text-left">
  <h3 className="font-semibold text-lg mb-4">Social</h3>
  <div className="flex flex-col items-center sm:items-start space-y-4">
    <a
      href="https://www.linkedin.com/company/kurosystems/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white text-lg"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://www.youtube.com/@KUROSystems"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white text-lg"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
    <a
      href="mailto:kunal.z@kurosystems.net"
      className="text-gray-400 hover:text-white text-lg"
      aria-label="Email"
    >
      <MdEmail />
    </a>
  </div>
</div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-xs">&copy; 2025 KURO Systemes LLP. All rights reserved.</p>
          <a href="#" className="mt-2 sm:mt-0 text-gray-400 hover:text-white text-xs">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
