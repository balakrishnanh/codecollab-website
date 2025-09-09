import React from 'react';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-8 bg-[#bd7581] shadow-md sticky top-0 z-50">
      <Link
        to="/"
        className="text-5xl font-extrabold hover:opacity-80 tracking-tight text-[#2d2d2d]"
      >
        CodeCollab
      </Link>
      <nav className="flex gap-x-12 text-xl font-bold">
        {/* <a href="#about" className="hover:text-[#a3747e] transition text-[#2d2d2d]">
          About
        </a> */}
        <Link to="/projects" className="hover:text-[#a3747e] transition text-[#2d2d2d]">
          Projects
        </Link>
        <Link to="/members" className="hover:text-[#a3747e] transition text-[#2d2d2d]">
          Members
        </Link>
        <Link
          to="/contactUs"
          className="hover:text-[#a3747e] transition text-[#2d2d2d]"
        >
          Contact Us
        </Link>
        <Link
          to="/join"
          className="hover:text-[#a3747e] transition text-[#2d2d2d]"
        >
          Join Fall Cycle!
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
