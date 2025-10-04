"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PenSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Trends in Custom Software Development",
      excerpt:
        "Explore the latest innovations in AI, cloud, and automation that are shaping the future of software development.",
      date: "September 15, 2025",
      author: "CodeWave Insights Team",
      image: "/blog-software-trends.jpg",
      link: "/blog/software-trends-2025",
      category: "Technology",
    },
    {
      id: 2,
      title: "How Fintech is Transforming Global Payments",
      excerpt:
        "A deep dive into the role of fintech in reshaping payment systems, digital banking, and financial inclusion.",
      date: "August 28, 2025",
      author: "Jane Doe",
      image: "/blog-fintech.jpg",
      link: "/blog/fintech-transforming-payments",
      category: "Fintech",
    },
    {
      id: 3,
      title: "Best Practices for Secure Cloud Migration",
      excerpt:
        "Discover how to migrate to the cloud while ensuring data security, compliance, and scalability.",
      date: "July 10, 2025",
      author: "John Smith",
      image: "/blog-cloud.jpg",
      link: "/blog/secure-cloud-migration",
      category: "Cloud",
    },
    {
      id: 4,
      title: "Education Tech: Personalizing Learning with AI",
      excerpt:
        "How AI-driven solutions are improving student outcomes and enabling personalized education at scale.",
      date: "June 20, 2025",
      author: "Sarah Lee",
      image: "/blog-education.jpg",
      link: "/blog/education-tech-ai",
      category: "Education",
    },
    {
      id: 5,
      title: "E-commerce Growth: The Future of Online Retail",
      excerpt:
        "Key factors driving e-commerce expansion and how businesses can adapt to shifting consumer behavior.",
      date: "May 8, 2025",
      author: "David Kim",
      image: "/blog-ecommerce.jpg",
      link: "/blog/ecommerce-future",
      category: "E-commerce",
    },
    {
      id: 6,
      title: "Logistics Tech: Optimizing Supply Chains",
      excerpt:
        "Learn how logistics companies are using AI and IoT to streamline operations and reduce costs.",
      date: "April 15, 2025",
      author: "Emily Davis",
      image: "/blog-logistics.jpg",
      link: "/blog/logistics-tech",
      category: "Logistics",
    },
    
  ];

  const categories = [
    "All",
    "Technology",
    "Fintech",
    "Cloud",
    "Education",
    "E-commerce",
    "Logistics",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // how many per page

  // Filter posts dynamically
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <PenSquare className="w-14 h-14 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, strategies, and updates from our team of experts in
            software development, fintech, e-commerce, education, logistics, and
            more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // reset pagination when changing category
              }}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="h-48 w-full bg-gray-200">
                    <Image
                      width={500}
                      height={500}
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">
                      {post.date} • {post.category}
                    </p>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
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
            No posts available in this category.
          </p>
        )}
      </div>
    </section>
  );
}
