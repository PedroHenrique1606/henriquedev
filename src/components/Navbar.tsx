'use client'
import Image from "next/image";
import PedroLogo from "@/assets/logo-petrus.svg";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-customBlueSecondary p-5 fixed top-0 w-full z-[9999]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold flex items-center gap-4">
          <a href="/" className="no-underline flex gap-2">
            <Image
              src={PedroLogo}
              alt="Logo of Pedro Henrique"
              className="w-7"
            />
            <p>Pedro H</p>
          </a>
        </div>

        {/* Menu for large screens */}
        <div className="hidden md:flex space-x-16 font-medium">
          <a
            href="/"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Experience
          </a>
          <a
            href="#"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Projects
          </a>
          <a
            href="https://blogpetrus.netlify.app/"
            target="_blank"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Blog
          </a>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for mobile - Full screen with X to close */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-customBlueSecondary text-white font-medium p-8 transition-all duration-500 ease-in-out transform md:hidden">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-bold flex items-center gap-4">
              <a href="/" className="no-underline flex gap-2">
                <Image
                  src={PedroLogo}
                  alt="Logo of Pedro Henrique"
                  className="w-7"
                />
                <p>Pedro H</p>
              </a>
            </div>

            {/* Close button */}
            <button onClick={toggleMenu} className="text-white text-3xl">
              &times; {/* "X" icon */}
            </button>
          </div>

          <div className="mt-8 space-y-6">
            <a
              href="/"
              className="block transition-all duration-150 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              Home
            </a>
            <a
              href="/about"
              className="block transition-all duration-150 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              About
            </a>
            <a
              href="#"
              className="block transition-all duration-150 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              Experience
            </a>
            <a
              href="#"
              className="block transition-all duration-150 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              Projects
            </a>
            <a
              href="https://blogpetrus.netlify.app/"
              target="_blank"
              className="block transition-all duration-150 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
