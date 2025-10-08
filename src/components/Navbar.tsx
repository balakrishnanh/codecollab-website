import React from 'react';
import { Link } from '@tanstack/react-router';
import logo from "../assets/codeLogo.png"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-8 bg-cc-maroon font-playfair shadow-md sticky top-0 z-50 text-[#fce4eb]">
      <Link
        to="/"
        className="flex items-center gap-3"
      >
        <img
          src={logo}
          alt="CodeCollab Logo"
          className="w-[75px] rounded-full bg-pink-100"
        />
        <span className="text-3xl md:text-5xl font-extrabold leading-none ">
          CodeCollab
        </span>
      </Link>
      <nav className="flex gap-x-12 lg:text-2xl sm:text-xl font-bold">
        {/* <a href="#about" className="hover:text-[#a3747e] transition text-[#2d2d2d]">
          About
        </a> */}
        <Link to="/projects" className="hover:opacity-80 transition">
          Projects
        </Link>
        <Link to="/members" className="hover:opacity-80 transition ">
          Members
        </Link>
        <Link
          to="/contactUs"
          className="hover:opacity-80 transition"
        >
          Contact Us
        </Link>
        <Link
          to="/join"
          className="hover:opacity-80 transition "
        >
          Join Fall Cycle!
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
