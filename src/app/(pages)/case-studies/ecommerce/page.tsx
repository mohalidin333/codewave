import React from "react";
import Link from "next/link";
import { ShoppingCart, CheckCircle, ArrowLeft } from "lucide-react";

export default function EcommerceCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-pink-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <ShoppingCart className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Scalable E-commerce Platform
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Enabling a seamless shopping experience with personalized product
            recommendations, lightning-fast checkout, and optimized performance
            across devices.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-pink-600 hover:underline font-medium"
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
            A global retailer faced challenges with slow site performance,
            abandoned carts, and difficulty managing high traffic during sales
            events like Black Friday and holiday campaigns.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 leading-relaxed">
            We built a scalable e-commerce platform powered by headless
            architecture, integrated AI-driven product recommendations,
            streamlined checkout with multiple payment gateways, and
            real-time inventory management.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              35% boost in conversion rate
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              60% reduction in cart abandonment
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Seamless handling of 5x traffic during flash sales
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
              "Headless Commerce Architecture",
              "AI-Powered Product Recommendations",
              "One-Click Checkout",
              "Multi-Currency & Payment Gateway Integration",
              "Mobile-First Shopping Experience",
              "Real-Time Inventory Management",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-pink-600 mb-3" />
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
          {[
            "Next.js",
            "React",
            "Node.js",
            "Stripe",
            "Shopify API",
            "PostgreSQL",
            "AWS",
            "Redis",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-pink-50 text-pink-700 font-medium rounded-full border border-pink-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-lg italic text-gray-700 mb-6">
            “Our new e-commerce platform transformed the way we engage with
            customers. Sales skyrocketed, and the site never slowed down, even
            during massive sales campaigns.”
          </p>
          <h3 className="text-pink-600 font-semibold">
            — Head of Digital, Global Retailer
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Scale Your Online Store?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We create future-ready e-commerce solutions that maximize conversions,
          reduce friction, and delight your customers.
        </p>
        <Link
          href="/contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
