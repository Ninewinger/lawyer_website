"use client";
import { useState } from "react";
import Link from "next/link";
import { halant } from "@/app/fonts";
import { FaBalanceScale } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 w-full bg-black text-white py-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between mx-10 items-center h-16">
          {/* Logo con ícono de balanza */}
          <div className={`${halant.className} flex items-center border-4 border-gray-700 p-5`}>
            <FaBalanceScale className="text-yellow-500 text-3xl" />
            <h1 className="ml-2 text-xl sm:text-3xl font-normal uppercase text-gray-400 tracking-wide">
              Empresa <span className="text-blue-500">Genérica</span>
            </h1>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-20">
            <Link
              href="/"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-widest"
            >
              Inicio
            </Link>
            <Link
              href="/about-us"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Acerca de
            </Link>
            <Link
              href="/personal"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Equipo
            </Link>
            <Link
              href="/resources"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Recursos
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white uppercase text-xs tracking-wider"
            >
              Contacto
            </Link>
          </div>

          {/* Botón del Menú Móvil */}
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

      {/* Menú Móvil */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className={`${halant.className} px-6 pt-5 pb-3 space-y-1 sm:px-3`}>
          <Link
            href="/"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Inicio
          </Link>
          <Link
            href="/about-us"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Acerca de
          </Link>
          <Link
            href="/personal"
            className="block text-gray-300 hover:text-white uppercase text-xs py-2 tracking-wider"
          >
            Equipo
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
