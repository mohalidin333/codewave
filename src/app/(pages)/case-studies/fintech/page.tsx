import React from "react";
import Link from "next/link";
import { Banknote, CheckCircle, ArrowLeft } from "lucide-react";

export default function FintechCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Banknote className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Secure Digital Banking Platform
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Driving financial inclusion with seamless digital banking, AI-driven
            fraud detection, and next-gen payment solutions.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-indigo-700 hover:underline font-medium"
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
            A fintech company needed a secure and scalable digital banking
            platform that could support high transaction volumes, ensure
            compliance, and protect against fraud—all while delivering a modern
            customer experience.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 leading-relaxed">
            We engineered a cloud-native fintech platform featuring
            AI-powered fraud detection, real-time payment processing, digital
            KYC onboarding, and an intuitive customer dashboard optimized for
            both web and mobile.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              40% increase in customer acquisition
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              99.99% uptime for payment transactions
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Reduced fraud losses by 65%
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
              "AI-Powered Fraud Detection",
              "Digital KYC & Onboarding",
              "Real-Time Payment Processing",
              "Mobile Banking App",
              "Automated Compliance Reporting",
              "Personalized Customer Dashboard",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600 mb-3" />
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
            "React",
            "Next.js",
            "Node.js",
            "AWS",
            "PostgreSQL",
            "Kubernetes",
            "TensorFlow",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full border border-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-lg italic text-gray-700 mb-6">
            “The new platform enabled us to scale faster, onboard new customers
            seamlessly, and cut down fraud significantly. It’s been a complete
            game-changer for our fintech operations.”
          </p>
          <h3 className="text-indigo-700 font-semibold">
            — CTO, Leading Fintech Startup
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Fintech Business?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Let’s build secure, scalable, and customer-friendly fintech solutions
          tailored for your needs.
        </p>
        <Link
          href="/contact"
          className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-800 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
