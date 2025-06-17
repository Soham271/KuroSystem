import React from "react";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./assets/KuroLogo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center">
              <img src={Logo} height={"40px"} width={"130px"}></img>
            </h2>
            <p className="text-gray-400 mt-2">We are what we do</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-white text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Floor marking robot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-3 text-white text-lg">Social</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.linkedin.com/company/kurosystems/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <FaLinkedinIn className="mr-2 text-xl" />
                Kuro System
              </a>
              <a
                href="https://www.youtube.com/@KUROSystems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <FaYoutube className="mr-2 text-xl" />
                Kuro System
              </a>
              <a
                href="mailto:contact@intmach.com"
                className="flex items-center text-gray-400 hover:text-white transition"
              >
                <MdEmail className="mr-2 text-xl" />
                Kuro System
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 KURO Systemes LLP . All rights reserved.
          </p>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
