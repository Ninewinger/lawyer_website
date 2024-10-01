"use client";
import { useState } from "react";
import Link from "next/link";
import { halant } from "@/app/fonts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 w-full bg-black text-white py-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between mx-10 items-center h-16">
          {/* Logo and Title */}
          <div
            className={`${halant.className} flex items-center border-4 border-gray-700 p-5`}
          >
            <h1 className="text-xl sm:text-3xl font-normal uppercase text-gray-400 tracking-wide flex gap-2">
              lex <p className="text-blue-500">norte</p>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-20">
            <Link
              href="/"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-widest"
            >
              Homepage
            </Link>
            <Link
              href="/about-us"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Nosotros
            </Link>
            <Link
              href="/personal"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              personal
            </Link>
            <Link
              href="/resources"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              recursos
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className={`${halant.className} px-6 pt-5 pb-3 space-y-1 sm:px-3`}>
          <Link
            href="/"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Homepage
          </Link>
          <Link
            href="/about-us"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Nosotros
          </Link>
          <Link
            href="/personal"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Personal
          </Link>
          <Link
            href="/resources"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Recursos
          </Link>
          <Link
            href="/contact"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
