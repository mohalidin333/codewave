import React from "react";
import Link from "next/link";
import { PenSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Blog() {
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
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <PenSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with technology trends, best practices, and our
            perspective on digital transformation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-48 w-full bg-gray-200">
                <Image
                width={1000}
                height={1000}
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
