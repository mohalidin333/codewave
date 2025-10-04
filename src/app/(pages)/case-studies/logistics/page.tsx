import React from "react";
import Link from "next/link";
import { Truck, CheckCircle, ArrowLeft } from "lucide-react";

export default function LogisticsCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Truck className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Logistics Platform
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Revolutionizing supply chain management with real-time tracking,
            predictive analytics, and streamlined fleet operations.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>
      </div>

      {/* Challenge / Solution / Results */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-gray-600 leading-relaxed">
            A logistics company faced delivery delays, inefficient route
            planning, and lack of visibility into real-time operations. Their
            legacy system couldn’t handle the scale of modern supply chain
            demands.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 leading-relaxed">
            We developed a cloud-based logistics platform with AI-powered route
            optimization, IoT-enabled fleet tracking, and predictive maintenance
            analytics to ensure smooth operations and reduce downtime.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              30% reduction in delivery delays
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              25% increase in operational efficiency
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Enhanced visibility and customer satisfaction
            </li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Real-time Fleet Tracking",
              "AI-Powered Route Optimization",
              "Predictive Maintenance Alerts",
              "Driver Performance Dashboard",
              "Automated Invoicing & Billing",
              "Analytics & Reporting",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="text-lg font-medium">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "TensorFlow"].map(
            (tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full border border-blue-200"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-lg italic text-gray-700 mb-6">
            “The platform transformed how we manage logistics. We now have
            real-time visibility and predictive insights that saved us millions
            in operational costs.”
          </p>
          <h3 className="text-blue-700 font-semibold">
            — COO, Global Logistics Company
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Let’s build a smarter, AI-powered logistics solution tailored to your
          business needs.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
