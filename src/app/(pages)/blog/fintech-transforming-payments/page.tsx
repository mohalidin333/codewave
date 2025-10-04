"use client";
import React from "react";
import { Calendar, User, ArrowRight, Globe, Smartphone, Banknote, Shield, TrendingUp } from "lucide-react";
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
      title: "E-commerce Growth: The Future of Online Retail",
      link: "/blog/ecommerce-future",
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
              How Fintech is Transforming Global Payments
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                August 28, 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Jane Doe
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}
              src="/blog-fintech.jpg"
              alt="Fintech Transforming Payments"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              Fintech is revolutionizing how money moves across the globe. With
              digital wallets, blockchain, and real-time payments, financial
              technology is driving accessibility, speed, and transparency like
              never before.
            </p>

            <div className="space-y-12 mt-10">
              {/* Section 1 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    1. Cross-Border Payments Made Simple
                  </h2>
                </div>
                <p>
                  Traditional remittances often take days and come with high
                  fees. Fintech platforms now leverage blockchain and APIs to
                  enable near-instant, low-cost cross-border transfers, making
                  global commerce and remittances faster and more accessible.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">
                    2. Mobile Wallets and Digital Banking
                  </h2>
                </div>
                <p>
                  Mobile wallets like PayPal, GCash, and Apple Pay are changing
                  how people transact. These solutions provide financial access
                  to millions of unbanked individuals, allowing secure payments,
                  peer-to-peer transfers, and even credit options.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Banknote className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">
                    3. Blockchain and Cryptocurrency Integration
                  </h2>
                </div>
                <p>
                  Cryptocurrencies and blockchain are enabling decentralized
                  payments, reducing reliance on banks, and creating trustless
                  ecosystems. Stablecoins, in particular, are being adopted as a
                  way to settle transactions instantly and securely.
                </p>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">
                    4. Security and Compliance in Fintech
                  </h2>
                </div>
                <p>
                  With digital payments rising, ensuring security is paramount.
                  Fintechs are implementing biometric verification, AI-powered
                  fraud detection, and strict KYC/AML compliance to protect users
                  and maintain trust.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">
                    5. Financial Inclusion at Scale
                  </h2>
                </div>
                <p>
                  Fintech is bridging the financial gap by offering affordable
                  and accessible services to underserved populations. By removing
                  traditional banking barriers, millions gain opportunities to
                  save, invest, and grow their businesses.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                Fintech is not just transforming payments—it’s transforming
                lives. By making financial services faster, more secure, and more
                inclusive, fintech is reshaping the global economy and the way we
                interact with money.
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

        {/* Sidebar (Quick Navigation) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-3 text-blue-600">
              <li><a href="#crossborder">Cross-Border Payments</a></li>
              <li><a href="#wallets">Mobile Wallets</a></li>
              <li><a href="#blockchain">Blockchain & Crypto</a></li>
              <li><a href="#security">Security & Compliance</a></li>
              <li><a href="#inclusion">Financial Inclusion</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
