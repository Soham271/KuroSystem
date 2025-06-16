import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a3558] to-[#2a4a78] text-white border-t-4 border-[#d32f2f]">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16">
        {/* Top flex of links */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-base md:text-lg mb-10">
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3 text-white">KuroDev</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Free Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Learn Web Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kuro Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="font-semibold mb-3 text-white">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-500 pt-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white">KURO</h2>
            <p className="text-gray-300 text-base mt-2">
              © 2025 KuroSystem Inc. All rights reserved.
            </p>
            <p className="text-gray-400 text-base">Legal · Privacy · Terms</p>
          </div>

          {/* Socials with hover effects */}
          <div className="flex space-x-5 text-gray-300 text-2xl mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/kurosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
