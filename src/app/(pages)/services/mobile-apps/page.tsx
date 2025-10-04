import React from "react";
import { Smartphone, Code, Cpu } from "lucide-react";
import Link from "next/link";

export default function MobileAppDevelopmentPage() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mobile App Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Build robust, user-friendly, and high-performance mobile applications
          for iOS and Android that drive engagement and business growth.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">iOS App Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Native iOS apps designed for performance, usability, and seamless
              integration with Apple devices and ecosystem.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Android App Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Feature-rich Android apps optimized for multiple devices and
              screen sizes, ensuring smooth user experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Cpu className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Apps</h3>
            <p className="text-gray-600 leading-relaxed">
              Develop apps using React Native, Flutter, or other frameworks for
              faster deployment on both iOS and Android platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our App Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">1</p>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business needs and defining app goals.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">2</p>
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Creating wireframes, UI/UX designs, and interactive prototypes.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">3</p>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Writing clean, efficient code and integrating essential features.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">4</p>
              </div>
              <h3 className="font-semibold mb-2">Launch & Support</h3>
              <p className="text-gray-600 text-sm">
                Deploying the app, monitoring performance, and providing
                ongoing updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            React Native
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Flutter
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Swift
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Kotlin
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Node.js
          </span>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Selected Mobile App Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-app1.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Fitness Tracker App</h3>
              <p className="text-gray-600 text-sm">
                Cross-platform app for tracking workouts, nutrition, and goals.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-app2.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Fintech Mobile App</h3>
              <p className="text-gray-600 text-sm">
                Secure banking and payment solutions with intuitive UI/UX.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-app3.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">E-commerce Mobile App</h3>
              <p className="text-gray-600 text-sm">
                Full-featured shopping app with payment integration and analytics.
              </p>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Launch Your Mobile App?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Partner with us to create innovative mobile solutions that engage your
          users and grow your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
