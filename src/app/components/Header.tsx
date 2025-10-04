"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CodeWave
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <div className="relative group">
            <button className="hover:text-blue-600 focus:outline-none">
              Industries ▾
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 invisible">
              <ul className="py-2 text-gray-700">
                <li>
                  <Link
                    href="/industries/healthcare"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/fintech"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/ecommerce"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/education"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/logistics"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logistics
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/case-studies" className="hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="w-full text-left flex justify-between items-center"
              >
                Industries {industriesOpen ? "▴" : "▾"}
              </button>
              {industriesOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-600">
                  <li>
                    <Link
                      href="/industries/healthcare"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/fintech"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Fintech
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/ecommerce"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/education"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/logistics"
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Logistics
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
