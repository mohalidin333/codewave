import React from "react";
import { CreditCard, Shield, BarChart3, Smartphone } from "lucide-react";
import Link from "next/link";

export default function FintechPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <CreditCard className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fintech Software Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Driving the future of finance with secure, scalable, and
            user-friendly digital solutions for payments, banking, and
            investments.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Powering Digital Transformation in Finance
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The financial industry demands solutions that are secure, compliant,
          and innovative. At <span className="font-semibold">CodeWave</span>, we
          help fintech startups, banks, and enterprises deliver cutting-edge
          products that build trust, streamline transactions, and unlock new
          opportunities in digital finance.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Fintech Solutions
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Smartphone className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Banking Apps</h3>
              <p className="text-gray-600">
                Secure, intuitive apps for digital banking, fund transfers, and
                account management built for modern users.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Shield className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Fraud Detection & Security
              </h3>
              <p className="text-gray-600">
                AI-powered fraud monitoring and compliance solutions to protect
                transactions and customer trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Investment & Trading Platforms
              </h3>
              <p className="text-gray-600">
                Scalable platforms for stock trading, crypto exchanges, and
                wealth management with real-time analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Regulatory Compliance
            </h3>
            <p className="text-gray-600">
              We build solutions that comply with PCI DSS, GDPR, KYC, AML, and
              other financial regulations worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Data Security First</h3>
            <p className="text-gray-600">
              End-to-end encryption, secure authentication, and advanced fraud
              detection ensure financial data protection.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
            <p className="text-gray-600">
              We deliver intuitive, accessible platforms that simplify complex
              financial processes for end-users.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
            <p className="text-gray-600">
              Our team has experience in delivering fintech platforms used by
              banks, startups, and enterprises across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build the Future of Finance?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Let’s create secure, innovative, and scalable fintech solutions that
          redefine financial services.
        </p>
        <Link
          href="/contact"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
