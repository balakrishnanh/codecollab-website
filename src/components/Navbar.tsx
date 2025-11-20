import React from 'react';
import { Link } from '@tanstack/react-router';
// @ts-ignore: allow importing image assets without declarations

const Navbar = () => {
  return (
    <header className="flex flex-col mid:flex-row md:justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-8 bg-cc-maroon font-playfair shadow-md sticky top-0 z-50 text-[#fce4eb]">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/public/assets/codeLogo.png"
          alt="CodeCollab Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-pink-100 object-cover"
        />
        <span className="text-lg sm:text-2xl mid:text-4xl font-extrabold leading-none">
          CodeCollab
        </span>
      </Link>

      {/* stack nav below brand on small screens to prevent overlap */}
      <nav className="mt-3 sm:mt-0 flex items-center gap-x-3 sm:gap-x-7 mid:gap-x-10 text-sm sm:text-base md:text-lg font-bold">
        <Link to="/projects" className="hover:opacity-80 transition px-2 py-1">
          Projects
        </Link>
        <Link to="/members" className="hover:opacity-80 transition px-2 py-1">
          EBoard Members
        </Link>
        <Link to="/contactUs" className="hover:opacity-80 transition px-2 py-1">
          Contact Us
        </Link>
        <Link to="/join" className="hover:opacity-80 transition px-2 py-1">
          Join Fall Cycle!
        </Link>
      </nav>
    </header>
    
  );
};

export default Navbar;