import React from "react";
import { ShoppingCart, Globe, BarChart4, Package } from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            E-commerce Software Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering businesses with scalable, secure, and high-performing
            e-commerce platforms that drive sales and customer loyalty.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Building the Future of Online Commerce
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Today’s e-commerce landscape is fast-paced and customer-driven. At{" "}
          <span className="font-semibold">CodeWave</span>, we design and build
          end-to-end commerce solutions, from online stores to multi-vendor
          platforms, that are optimized for performance, security, and user
          experience.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our E-commerce Solutions
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Online Stores</h3>
              <p className="text-gray-600">
                Tailored e-commerce websites with secure checkout, product
                catalogs, and seamless integrations for any business size.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Package className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-vendor Platforms</h3>
              <p className="text-gray-600">
                Scalable marketplaces for vendors, customers, and logistics with
                advanced management features.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <BarChart4 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analytics & Optimization</h3>
              <p className="text-gray-600">
                Real-time sales insights, conversion tracking, and AI-driven
                recommendations to boost revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Scalability</h3>
            <p className="text-gray-600">
              From startups to enterprise-level marketplaces, our solutions grow
              with your business.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Seamless Integrations</h3>
            <p className="text-gray-600">
              Payment gateways, logistics, CRM, and ERP integrations that
              simplify operations and improve efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Mobile-first Design</h3>
            <p className="text-gray-600">
              Optimized for mobile shopping experiences to increase engagement
              and sales conversions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Proven Performance</h3>
            <p className="text-gray-600">
              High-performing platforms that handle large product catalogs,
              traffic spikes, and global audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Online Store?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Let’s create a powerful, scalable e-commerce platform that delights
          customers and accelerates growth.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started Today
        </Link>
      </section>
    </main>
  );
}
