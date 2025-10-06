"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Logistics Platform",
      industry: "Logistics",
      description:
        "We built a real-time fleet and shipment tracking system that reduced delivery delays by 30% and optimized operational efficiency.",
      image: "/case_studies/logistics.jpg",
      link: "/case-studies/logistics",
    },
    {
      id: 2,
      title: "Digital Banking Super App",
      industry: "Fintech",
      description:
        "Developed a secure mobile-first banking platform enabling 2M+ users to access digital wallets, loans, and investments seamlessly.",
      image: "/case_studies/fintech.jpg",
      link: "/case-studies/fintech",
    },
    {
      id: 3,
      title: "Smart Healthcare Records System",
      industry: "Healthcare",
      description:
        "Implemented a cloud-based EHR system for hospitals, improving patient data accuracy and compliance with HIPAA regulations.",
      image: "/case_studies/healthcare.jpg",
      link: "/case-studies/healthcare",
    },
    {
      id: 4,
      title: "E-commerce Personalization Engine",
      industry: "E-commerce",
      description:
        "Built an AI recommendation system that increased conversion rates by 25% and improved customer retention.",
      image: "/case_studies/ecommerce.jpg",
      link: "/case-studies/ecommerce",
    },
    {
      id: 5,
      title: "Virtual Learning Ecosystem",
      industry: "Education",
      description:
        "Designed a scalable LMS platform with real-time video classes, quizzes, and analytics for global institutions.",
      image: "/case_studies/education.jpg",
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

  const [activeIndustry, setActiveIndustry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const studiesPerPage = 6; // items per page

  // Filter and pagination logic
  const filteredStudies =
    activeIndustry === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.industry === activeIndustry);

  const totalPages = Math.ceil(filteredStudies.length / studiesPerPage);
  const startIndex = (currentPage - 1) * studiesPerPage;
  const paginatedStudies = filteredStudies.slice(
    startIndex,
    startIndex + studiesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Briefcase className="w-14 h-14 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we’ve helped businesses across industries drive growth
            and achieve measurable results through innovative technology
            solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setActiveIndustry(industry);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border transition ${
                activeIndustry === industry
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        {paginatedStudies.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="h-48 w-full bg-gray-200">
                    <Image
                      width={600}
                      height={400}
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">
                      {study.industry}
                    </p>
                    <h2 className="text-xl font-semibold mb-2">
                      {study.title}
                    </h2>
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

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No case studies available in this category.
          </p>
        )}
      </div>
    </section>
  );
}
