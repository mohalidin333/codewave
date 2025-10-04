"use client";
import React from "react";
import {
  Calendar,
  User,
  Truck,
  Network,
  BarChart,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const relatedArticles = [
    {
      id: 1,
      title: "E-commerce Growth: The Future of Online Retail",
      link: "/blog/ecommerce-future",
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
              Logistics Tech: Optimizing Supply Chains
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                October 3, 2025
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
              src="/blog-logistics.jpg"
              alt="Logistics Tech"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              Supply chains are the backbone of global trade. As consumer
              expectations rise and markets become increasingly interconnected,
              logistics technology is transforming how businesses manage,
              monitor, and optimize supply chains.
            </p>

            <div className="space-y-12 mt-10">
              {/* Section 1 */}
              <div
                id="automation"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Truck className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    1. Automation in Warehousing & Transport
                  </h2>
                </div>
                <p>
                  Robotics, automated guided vehicles (AGVs), and drones are
                  streamlining warehouse operations and last-mile delivery. This
                  not only reduces human error but also improves speed and
                  efficiency.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="iot"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Network className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">
                    2. IoT and Real-Time Tracking
                  </h2>
                </div>
                <p>
                  Internet of Things (IoT) sensors allow businesses to monitor
                  shipments in real time, tracking temperature, humidity, and
                  location. This is especially critical for industries like
                  pharmaceuticals and food delivery.
                </p>
              </div>

              {/* Section 3 */}
              <div
                id="analytics"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <BarChart className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">
                    3. Predictive Analytics for Supply Chains
                  </h2>
                </div>
                <p>
                  By leveraging AI and predictive analytics, companies can
                  forecast demand, optimize inventory, and mitigate risks caused
                  by delays or disruptions.
                </p>
              </div>

              {/* Section 4 */}
              <div
                id="globalization"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">4. Global Supply Chain Resilience</h2>
                </div>
                <p>
                  The COVID-19 pandemic highlighted vulnerabilities in global
                  supply chains. Businesses are now focusing on creating
                  resilient, flexible systems with diversified suppliers and
                  regional hubs.
                </p>
              </div>

              {/* Section 5 */}
              <div
                id="sustainability"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">
                    5. Sustainability and Green Logistics
                  </h2>
                </div>
                <p>
                  Eco-friendly practices, such as electric delivery fleets,
                  optimized routes, and circular supply chains, are becoming
                  essential for businesses aiming to reduce carbon footprints.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                Logistics technology is driving efficiency, visibility, and
                resilience in supply chains. Organizations that invest in
                automation, IoT, and sustainability will be better positioned to
                meet future challenges in global commerce.
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
                <a href="#automation">Automation</a>
              </li>
              <li>
                <a href="#iot">IoT & Tracking</a>
              </li>
              <li>
                <a href="#analytics">Predictive Analytics</a>
              </li>
              <li>
                <a href="#globalization">Global Resilience</a>
              </li>
              <li>
                <a href="#sustainability">Sustainability</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
