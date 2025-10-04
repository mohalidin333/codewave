import React from "react";
import { Code, Monitor } from "lucide-react";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Building modern, scalable, and high-performing websites and web
          applications that help businesses grow and succeed online.
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
            <Code className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom Web Apps</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored web applications built to fit your business requirements,
              delivering performance, scalability, and reliability.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Monitor className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Responsive Websites</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern, mobile-friendly websites that provide a seamless user
              experience across devices.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Code className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Scalable online stores with secure payment integration, inventory
              management, and smooth customer experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">1</p>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business goals and requirements.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">2</p>
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Strategizing architecture, technology stack, and project roadmap.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">3</p>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Writing clean code, creating responsive interfaces, and integrating features.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">4</p>
              </div>
              <h3 className="font-semibold mb-2">Launch & Support</h3>
              <p className="text-gray-600 text-sm">
                Deploying your web solution and providing ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            React
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Next.js
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Node.js
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Tailwind CSS
          </span>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Selected Web Development Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img src="/portfolio-web1.jpg" alt="Project" className="rounded-lg mb-4 h-48 w-full object-cover" />
              <h3 className="font-semibold text-xl mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm">
                Full-featured online store with integrated payments and analytics.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img src="/portfolio-web2.jpg" alt="Project" className="rounded-lg mb-4 h-48 w-full object-cover" />
              <h3 className="font-semibold text-xl mb-2">SaaS Web App</h3>
              <p className="text-gray-600 text-sm">
                Subscription-based web application with dashboard and user management.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img src="/portfolio-web3.jpg" alt="Project" className="rounded-lg mb-4 h-48 w-full object-cover" />
              <h3 className="font-semibold text-xl mb-2">Corporate Website</h3>
              <p className="text-gray-600 text-sm">
                Professional website showcasing company services and case studies.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Partner with us to build custom web solutions that drive results and elevate your business.
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
