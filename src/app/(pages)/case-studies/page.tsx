"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, Filter } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

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
    {
      id: 4,
      title: "E-commerce Personalization Engine",
      industry: "E-commerce",
      description:
        "Built an AI recommendation system that increased conversion rates by 25% and improved customer retention.",
      image: "/case-ecommerce.jpg",
      link: "/case-studies/ecommerce",
    },
    {
      id: 5,
      title: "Virtual Learning Ecosystem",
      industry: "Education",
      description:
        "Designed a scalable LMS platform with real-time video classes, quizzes, and analytics for global institutions.",
      image: "/case-education.jpg",
      link: "/case-studies/education",
    },
  ];

  const industries = [
    "All",
    "Healthcare",
    "Fintech",
    "E-commerce",
    "Education",
    "Logistics",
  ];

  const filteredStudies =
    selectedIndustry && selectedIndustry !== "All"
      ? caseStudies.filter((study) => study.industry === selectedIndustry)
      : caseStudies;

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Briefcase className="w-14 h-14 mx-auto mb-4 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover how we’ve helped businesses across industries drive growth
            and achieve measurable results with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center space-x-4 flex-wrap">
          <Filter className="w-5 h-5 text-gray-500" />
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedIndustry === industry
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 w-full bg-gray-200">
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
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
