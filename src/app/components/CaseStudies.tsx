import React from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Logistics Platform",
      industry: "Logistics",
      description:
        "We built a real-time fleet and shipment tracking system that reduced delivery delays by 30% and optimized operational efficiency.",
      image: "/case-logistics.jpg",
      link: "/case-studies/logistics",
    },
    {
      id: 2,
      title: "Digital Banking Super App",
      industry: "Fintech",
      description:
        "Developed a secure mobile-first banking platform enabling 2M+ users to access digital wallets, loans, and investments seamlessly.",
      image: "/case-fintech.jpg",
      link: "/case-studies/fintech",
    },
    {
      id: 3,
      title: "Smart Healthcare Records",
      industry: "Healthcare",
      description:
        "Implemented a cloud-based EHR system for hospitals, improving patient data accuracy and compliance with HIPAA regulations.",
      image: "/case-healthcare.jpg",
      link: "/case-studies/healthcare",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we’ve helped businesses across industries achieve
            measurable results with custom-built digital solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 w-full bg-gray-200">
                {/* Placeholder image */}
                <Image
                width={1000}
                height={1000}
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
                  {study.industry}
                </p>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>
                <Link
                  href={study.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/case-studies"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
