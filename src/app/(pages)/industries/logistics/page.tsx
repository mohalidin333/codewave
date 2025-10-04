import React from "react";
import { Truck, Globe, Package, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Truck className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Logistics & Supply Chain Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Driving efficiency, visibility, and real-time insights for logistics, 
            supply chain, and transportation businesses worldwide.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Streamlining Global Supply Chains
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">CodeWave</span>, we develop 
          technology that simplifies complex logistics operations. From fleet 
          management and warehouse automation to last-mile delivery tracking, 
          our solutions help businesses optimize processes, reduce costs, 
          and deliver faster.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Logistics Solutions
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Supply Chain Visibility</h3>
              <p className="text-gray-600">
                End-to-end tracking systems providing real-time visibility into 
                shipments, orders, and inventory for better decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Package className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Warehouse Automation</h3>
              <p className="text-gray-600">
                Smart inventory management and automation tools that 
                reduce errors, improve efficiency, and optimize storage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and reporting tools to forecast demand, 
                optimize routes, and reduce operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Logistics Tech?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
            <p className="text-gray-600">
              Improve customer satisfaction with accurate, live updates on 
              shipments and deliveries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Optimized Operations</h3>
            <p className="text-gray-600">
              Streamline routes, reduce delays, and manage fleets with AI-driven solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Global Scalability</h3>
            <p className="text-gray-600">
              Support for cross-border logistics and international supply chain management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p className="text-gray-600">
              Enterprise-grade security to protect sensitive trade and 
              logistics data from risks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Move Logistics Forward Together
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Partner with us to design innovative, reliable, and scalable 
          logistics technology that keeps your supply chain moving efficiently.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
