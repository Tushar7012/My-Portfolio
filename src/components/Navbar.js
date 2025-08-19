// src/components/Navbar.js

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3">
          
          {/* Logo / Portfolio Title */}
          <a href="#home" className="text-2xl font-bold text-white tracking-wider">
            My<span className="text-purple-400">Portfolio</span>
          </a>
          
          {/* Navigation Links */}
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#home" className="text-white font-medium hover:text-purple-400 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white font-medium hover:text-purple-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              {/* This is the link that needed to be added/corrected */}
              <a href="#projects" className="text-white font-medium hover:text-purple-400 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white font-medium hover:text-purple-400 transition-colors duration-300">
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-300 shadow-lg shadow-purple-600/30"
              >
                Contact
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
}
