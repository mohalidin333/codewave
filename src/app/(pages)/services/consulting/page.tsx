import React from "react";
import { Briefcase, Target, Layers, BarChart } from "lucide-react";
import Link from "next/link";

export default function ITConsultingPage() {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
      title: "Strategic IT Consulting",
      description:
        "Align technology initiatives with your business goals, reduce costs, and maximize ROI through expert guidance.",
    },
    {
      icon: <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
      title: "IT Strategy & Roadmap",
      description:
        "Develop a comprehensive IT strategy and roadmap that supports scalability, efficiency, and innovation.",
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
      title: "Infrastructure Optimization",
      description:
        "Analyze and optimize your IT infrastructure to improve performance, reliability, and security.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
      title: "Data & Analytics Consulting",
      description:
        "Transform raw data into actionable insights using analytics, reporting, and business intelligence tools.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Assessment",
      description:
        "We analyze your current IT environment, business goals, and challenges to identify opportunities for improvement.",
    },
    {
      step: 2,
      title: "Planning",
      description:
        "Develop a strategic IT roadmap and actionable plan tailored to your organizational needs.",
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "Deploy solutions, optimize infrastructure, and integrate technology aligned with your strategy.",
    },
    {
      step: 4,
      title: "Monitoring & Support",
      description:
        "Continuous monitoring, performance optimization, and ongoing support to ensure sustained success.",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Consulting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Expert guidance to align technology with your business strategy,
          optimize operations, and drive growth.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Request Consultation
        </Link>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Our IT Consulting Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Consulting Workflow
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {workflowSteps.map((step) => (
              <div key={step.step}>
                <div className="bg-white rounded-xl p-6 shadow mb-4">
                  <p className="text-xl font-bold text-blue-600">{step.step}</p>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          With years of experience in IT strategy, infrastructure, and data analytics,
          we deliver actionable insights and innovative solutions that empower your
          organization to thrive in a competitive market.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Schedule a Consultation
        </Link>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Selected IT Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-it1.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">
                Enterprise IT Strategy Overhaul
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive IT strategy development for a multinational company.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-it2.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">
                Cloud Migration & Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                Migrated and optimized cloud infrastructure for improved scalability and security.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-it3.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">
                Data Analytics Implementation
              </h3>
              <p className="text-gray-600 text-sm">
                Implemented analytics and BI tools to support data-driven decision-making.
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

      {/* CTA Section */}
      <div className="bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your IT Strategy?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let’s implement IT solutions that streamline operations, reduce costs, and
          drive growth across your organization.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Request Consultation
        </Link>
      </div>
    </section>
  );
}
