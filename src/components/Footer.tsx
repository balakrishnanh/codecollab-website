import React from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cc-maroon py-6 px-4 mt-10 text-[#ffe0e9ff] shadow-inner z-30 relative font-playfair"> 
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn transition-all duration-700">
          {/* Left: Logo */}
            <div className="flex items-center gap-4">
            <img
              src="/assets/codeLogo.png"
              alt="CodeCollab Logo"
              className="w-[100px] rounded-full object-cover shadow-md hover:scale-105 transition-transform bg-[#ffe0e9ff] duration-300"
            />
            <p className="font-semibold text-xl hidden sm:block">
              UMass CodeCollab
            </p>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col md:items-end items-center">
            <div className="flex gap-6 text-lg">
              <a
                href="https://www.instagram.com/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <Instagram/>
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/supriyaahejib/personal-portfolio-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <Github />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/company/umass-codecollab/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs mt-0 text-center opacity-70">
          &copy; 2025 UMass CodeCollab
        </p>
      </footer>
  );
}
