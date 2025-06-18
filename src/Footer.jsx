import React from "react";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./assets/KuroLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Logo */}
          <div>
            <img
              src={Logo}
              height="30"
              width="110"
              alt="Kuro Logo"
              className="mb-2"
            />
            <p className="text-gray-400">striving for non-stop production</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2 text-white text-base">
              Quick Links
            </h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Floor marking robot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-2 text-white text-base">Social</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/kurosystems/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <FaLinkedinIn className="mr-2" />
                  Kuro System
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@KUROSystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <FaYoutube className="mr-2" />
                  Kuro System
                </a>
              </li>
              <li>
                <a
                  href="mailto:kunal.z@kurosystems.net"
                  className="flex items-center hover:text-white"
                >
                  <MdEmail className="mr-2" />
                  Kuro System
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 mb-2 md:mb-0 text-xs">
            © 2025 KURO Systemes LLP. All rights reserved.
          </p>
          <a href="#" className="text-gray-400 hover:text-white text-xs">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
