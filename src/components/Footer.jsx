import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-gray-300 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">DevBattle</h2>
          <p className="mt-2 text-sm text-gray-400">
            Train. Compete. Conquer. Level up your DSA skills with real-time code battles.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ms-25">
          <h3 className="text-lg font-semibold mb-3 text-white ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-white transition">Problems</a></li>
            <li><a href="/home" className="hover:text-white transition">Battle Mode</a></li>
            <li><a href="/admin/leaderboard" className="hover:text-white transition">Leaderboard</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Connect With Us</h3>
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} DevBattle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
