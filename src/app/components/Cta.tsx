import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center text-white">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Ready to Transform Your Business with Custom Software?
        </h2>

        {/* Supporting text */}
        <p className="text-lg lg:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Whether you’re in logistics, fintech, education, or e-commerce, we build
          scalable, secure, and innovative solutions tailored to your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl shadow hover:shadow-lg hover:bg-blue-900 transition"
          >
            View Our Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
