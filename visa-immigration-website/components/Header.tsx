"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919879894530" className="hover:text-primary-200 transition">
              📞 +91 98798 94530
            </a>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline text-xs">A-502 ABC Business Hub, Nikol, Ringroad, Ahmedabad</span>
          </div>
          <div className="text-xs">
            <span>🕒 Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              VI
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-700">Visa Immigration</h1>
              <p className="text-xs text-gray-600">Consultant Services</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Services
            </Link>
            <Link href="/visa-types" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Visa Types
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-primary-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/visa-types"
              className="block text-gray-700 hover:text-primary-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Visa Types
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
