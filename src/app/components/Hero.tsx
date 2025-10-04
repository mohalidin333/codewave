import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transforming Ideas <br /> Into Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
            We build custom software, web, and mobile solutions that drive
            innovation, efficiency, and growth for businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/portfolio"
              className="bg-blue-500 border border-white/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Content (Image/Illustration) */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            width={500}
            height={500}
            src="/hero-illustration.png"
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
