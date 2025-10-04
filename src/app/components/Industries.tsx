import React from "react";
import { Stethoscope, Banknote, ShoppingCart, GraduationCap, Truck } from "lucide-react";
import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Building secure, HIPAA-compliant healthcare platforms, telemedicine apps, and patient management systems that improve care delivery and efficiency.",
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      link: "/industries/healthcare",
    },
    {
      title: "Fintech",
      description:
        "Empowering financial services with secure payment gateways, digital banking apps, and blockchain-powered solutions.",
      icon: <Banknote className="w-10 h-10 text-blue-600" />,
      link: "/industries/fintech",
    },
    {
      title: "E-commerce",
      description:
        "Creating high-converting online stores, multi-vendor platforms, and custom e-commerce solutions that scale with your business.",
      icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
      link: "/industries/ecommerce",
    },
    {
      title: "Education",
      description:
        "Delivering e-learning platforms, virtual classrooms, and mobile apps that make education accessible and engaging.",
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      link: "/industries/education",
    },
    {
      title: "Logistics",
      description:
        "Optimizing supply chains with fleet management, route optimization, and real-time tracking applications.",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      link: "/industries/logistics",
    },
  ];

  return (
    <section id="industries">
      <div className="sub-container text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Industries We Serve
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We deliver tailored digital solutions across diverse industries,
          helping businesses innovate, scale, and succeed in the digital era.
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
              <Link
                href={industry.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
