import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss custom software solutions? 
            Reach out and let’s build innovative technology together.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>AI & Automation</option>
                  <option>IT Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <span>123 Innovation Drive, Tech City, Global Business District</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <a href="mailto:contact@codewave.com" className="hover:text-blue-600 transition">
                  contact@codewave.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <a href="tel:+1234567890" className="hover:text-blue-600 transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="text-blue-600 hover:underline">
                  Our Services
                </Link>
                <Link href="/portfolio" className="text-blue-600 hover:underline">
                  Portfolio
                </Link>
                <Link href="/blog" className="text-blue-600 hover:underline">
                  Blog
                </Link>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093246!2d144.9537353159042!3d-37.81720974202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e96f5d8b6c0!2sTech%20City!5e0!3m2!1sen!2sph!4v1679999999999!5m2!1sen!2sph"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
