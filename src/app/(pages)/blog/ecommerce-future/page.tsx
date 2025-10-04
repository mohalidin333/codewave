"use client";
import React from "react";
import {
  Calendar,
  User,
  ShoppingBag,
  TrendingUp,
  Globe,
  Smartphone,
  Truck,
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
      title: "Education Tech: Personalizing Learning with AI",
      link: "/blog/education-tech-ai",
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
              E-commerce Growth: The Future of Online Retail
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                May 8, 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                David Kim
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}
              src="/blog-ecommerce.jpg"
              alt="E-commerce Growth"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              E-commerce continues to reshape the retail landscape, fueled by
              advancements in technology, changing consumer behavior, and
              innovative business models. The future of online retail promises
              faster, smarter, and more personalized shopping experiences.
            </p>

            <div className="space-y-12 mt-10">
              {/* Section 1 */}
              <div
                id="global"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    1. Global Expansion of Online Retail
                  </h2>
                </div>
                <p>
                  As internet penetration increases worldwide, e-commerce
                  platforms are reaching new markets. Emerging economies in
                  Asia, Africa, and Latin America are witnessing exponential
                  growth, creating opportunities for global brands and local
                  businesses alike.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="mobile"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">
                    2. Mobile-First Shopping Experiences
                  </h2>
                </div>
                <p>
                  Mobile commerce (m-commerce) is rapidly surpassing desktop
                  shopping. Retailers are optimizing apps, enabling one-click
                  checkouts, and integrating digital wallets to deliver seamless
                  mobile experiences.
                </p>
              </div>

              {/* Section 3 */}
              <div
                id="logistics"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Truck className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">3. Smarter Logistics</h2>
                </div>
                <p>
                  Fast, reliable delivery is becoming a baseline expectation.
                  Companies are investing in automation, drones, and AI-powered
                  logistics to shorten delivery times and improve customer
                  satisfaction.
                </p>
              </div>

              {/* Section 4 */}
              <div
                id="personalization"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ShoppingBag className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">
                    4. Hyper-Personalized Shopping
                  </h2>
                </div>
                <p>
                  AI-driven recommendation engines tailor product suggestions to
                  individual shoppers. Personalized marketing, dynamic pricing,
                  and customized promotions are shaping the next generation of
                  online retail.
                </p>
              </div>

              {/* Section 5 */}
              <div
                id="future"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">
                    5. The Future of Online Retail
                  </h2>
                </div>
                <p>
                  The future of e-commerce lies in blending technology and
                  customer experience. From AR-powered shopping to voice-driven
                  purchases, innovation will continue to push the boundaries of
                  online retail.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                E-commerce growth shows no signs of slowing down. Retailers that
                invest in mobile optimization, personalized experiences, and
                smarter logistics will thrive in the rapidly evolving digital
                marketplace.
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
                <a href="#global">Global Expansion</a>
              </li>
              <li>
                <a href="#mobile">Mobile Shopping</a>
              </li>
              <li>
                <a href="#logistics">Smarter Logistics</a>
              </li>
              <li>
                <a href="#personalization">Personalization</a>
              </li>
              <li>
                <a href="#future">Future of Retail</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
