"use client";
import React from "react";
import { Calendar, User, ArrowRight, Cpu, Cloud, Shield, Layout, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const relatedArticles = [
    {
      id: 1,
      title: "How Fintech is Transforming Global Payments",
      link: "/blog/fintech-transforming-payments",
    },
    {
      id: 2,
      title: "Best Practices for Secure Cloud Migration",
      link: "/blog/secure-cloud-migration",
    },
    {
      id: 3,
      title: "Education Tech: Personalizing Learning with AI",
      link: "/blog/education-tech-ai",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl grid lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
              Top 5 Trends in Custom Software Development
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                September 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                CodeWave Insights Team
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}  
              src="/blog-software-trends.jpg"
              alt="Software Development Trends 2025"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              The software development landscape is evolving at lightning speed,
              driven by AI, cloud, and the demand for secure, scalable, and
              personalized solutions. Let’s dive into the top five trends shaping
              custom software development in 2025.
            </p>

            {/* Trends */}
            <div className="space-y-12 mt-10">
              {/* Trend 1 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">1. AI-Driven Development</h2>
                </div>
                <p>
                  AI has become the backbone of modern applications. From
                  predictive analytics to intelligent automation, developers are
                  embedding AI and ML frameworks into custom software to
                  streamline workflows and enhance user experience.
                </p>
              </div>

              {/* Trend 2 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">2. Cloud-Native Solutions</h2>
                </div>
                <p>
                  Microservices, Kubernetes, and serverless architectures are
                  enabling scalable and resilient solutions. Businesses adopting
                  cloud-native strategies reduce infrastructure costs while
                  gaining agility in deployment.
                </p>
              </div>

              {/* Trend 3 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Layout className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">3. Low-Code & No-Code Platforms</h2>
                </div>
                <p>
                  Low-code platforms empower non-technical users to prototype
                  apps quickly, while developers focus on complex logic. This
                  trend accelerates innovation and reduces time-to-market.
                </p>
              </div>

              {/* Trend 4 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">4. Cybersecurity-First Development</h2>
                </div>
                <p>
                  With rising cyber threats, developers are adopting DevSecOps,
                  zero-trust models, and encryption-first principles. Security is
                  no longer an afterthought but a built-in requirement.
                </p>
              </div>

              {/* Trend 5 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">5. Personalized & Human-Centered Design</h2>
                </div>
                <p>
                  Modern software prioritizes user experience. Behavioral
                  analytics and adaptive interfaces help build apps that feel
                  personal, intuitive, and inclusive.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                The future of custom software is intelligent, cloud-powered,
                secure, and user-centric. Businesses that embrace these trends
                will unlock innovation and long-term competitiveness.
              </p>
            </div>
          </article>

          {/* Recommended Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6">Recommended Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.link}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800">{article.title}</span>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar (Table of Contents) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-3 text-blue-600">
              <li><a href="#ai">AI-Driven Development</a></li>
              <li><a href="#cloud">Cloud-Native Solutions</a></li>
              <li><a href="#lowcode">Low-Code Platforms</a></li>
              <li><a href="#security">Cybersecurity-First</a></li>
              <li><a href="#ux">Human-Centered Design</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
