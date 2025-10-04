"use client";
import React from "react";
import {
  Calendar,
  User,
  Brain,
  LineChart,
  BookOpen,
  Laptop,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const relatedArticles = [
    {
      id: 1,
      title: "Top 5 Trends in Custom Software Development",
      link: "/blog/software-trends-2025",
    },
    {
      id: 2,
      title: "Best Practices for Secure Cloud Migration",
      link: "/blog/secure-cloud-migration",
    },
    {
      id: 3,
      title: "How Fintech is Transforming Global Payments",
      link: "/blog/fintech-transforming-payments",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl grid lg:grid-cols-4 gap-12">
        {/* Main Blog Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
              Education Tech: Personalizing Learning with AI
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sarah Johnson
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}
              src="/blog-education-ai.jpg"
              alt="AI in Education"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              Artificial Intelligence (AI) is redefining the way we teach and
              learn. From adaptive learning systems to personalized feedback,
              AI-powered education technologies are transforming classrooms into
              smarter, more engaging environments.
            </p>

            <div className="space-y-12 mt-10">
              {/* Section 1 */}
              <div
                id="adaptive"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    1. Adaptive Learning Platforms
                  </h2>
                </div>
                <p>
                  AI-driven platforms can analyze a learner’s progress in
                  real-time and adjust the difficulty of lessons accordingly.
                  This ensures that every student learns at their own pace,
                  making education more inclusive and effective.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="analytics"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <LineChart className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">
                    2. Data-Driven Insights for Teachers
                  </h2>
                </div>
                <p>
                  AI provides educators with actionable insights by analyzing
                  student performance data. Teachers can identify struggling
                  learners early and provide targeted interventions, boosting
                  overall classroom success.
                </p>
              </div>

              {/* Section 3 */}
              <div
                id="content"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">
                    3. Personalized Content Recommendations
                  </h2>
                </div>
                <p>
                  Just like streaming platforms recommend movies, AI tools can
                  suggest learning materials tailored to each student’s interests
                  and skill level, making the learning experience more engaging
                  and relevant.
                </p>
              </div>

              {/* Section 4 */}
              <div
                id="virtual"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Laptop className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">
                    4. Virtual Tutors and AI Assistants
                  </h2>
                </div>
                <p>
                  AI-powered virtual tutors are available 24/7, offering students
                  additional support outside traditional classroom hours. These
                  systems can answer questions, explain concepts, and guide
                  learners through problem-solving exercises.
                </p>
              </div>

              {/* Section 5 */}
              <div
                id="future"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">
                    5. The Future of Personalized Learning
                  </h2>
                </div>
                <p>
                  As AI evolves, the future of education will become more
                  personalized, immersive, and accessible. Technologies like
                  natural language processing and AI-driven simulations promise
                  to make learning more interactive than ever before.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                AI in education isn’t about replacing teachers—it’s about
                empowering them with smarter tools to create personalized and
                meaningful learning experiences. The key lies in balancing
                technology with human connection to ensure the best outcomes for
                learners.
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
                  <span className="font-medium text-gray-800">
                    {article.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-3 text-blue-600">
              <li>
                <a href="#adaptive">Adaptive Learning</a>
              </li>
              <li>
                <a href="#analytics">Teacher Insights</a>
              </li>
              <li>
                <a href="#content">Content Recommendations</a>
              </li>
              <li>
                <a href="#virtual">Virtual Tutors</a>
              </li>
              <li>
                <a href="#future">Future of Learning</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
