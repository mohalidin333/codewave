import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CodeWave</h2>
          <p className="text-gray-400 text-sm mb-6">
            Building scalable, innovative, and custom digital solutions that
            drive business growth across industries.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-white transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white transition">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/industries/healthcare"
                className="hover:text-white transition"
              >
                Healthcare
              </Link>
            </li>
            <li>
              <Link
                href="/industries/fintech"
                className="hover:text-white transition"
              >
                Fintech
              </Link>
            </li>
            <li>
              <Link
                href="/industries/ecommerce"
                className="hover:text-white transition"
              >
                E-commerce
              </Link>
            </li>
            <li>
              <Link
                href="/industries/education"
                className="hover:text-white transition"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/industries/logistics"
                className="hover:text-white transition"
              >
                Logistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>123 Innovation Drive, Tech City</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <a
                href="mailto:contact@codewave.com"
                className="hover:text-white transition"
              >
                contact@codewave.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <a href="tel:+1234567890" className="hover:text-white transition">
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} CodeWave. All Rights Reserved. |{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}
