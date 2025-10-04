"use client";
import React from "react";
import {
  Calendar,
  User,
  ShieldCheck,
  Lock,
  Database,
  Server,
  Cloud,
  CheckCircle2,
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
      title: "How Fintech is Transforming Global Payments",
      link: "/blog/fintech-transforming-payments",
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
              Best Practices for Secure Cloud Migration
            </h1>
            <div className="flex justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 10, 2025
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                John Smith
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={1000}
              height={1000}
              src="/blog-cloud.jpg"
              alt="Secure Cloud Migration"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-lg">
              Migrating to the cloud offers scalability, flexibility, and
              cost-efficiency. However, ensuring data security and compliance is
              critical during every step of the migration journey.
            </p>

            <div className="space-y-12 mt-10">
              {/* Section 1 */}
              <div
                id="assessment"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-10 h-10 text-blue-600" />
                  <h2 className="text-2xl font-bold">
                    1. Conduct a Comprehensive Assessment
                  </h2>
                </div>
                <p>
                  Before migration, assess your current infrastructure, data
                  sensitivity, and compliance requirements. Identifying risks
                  upfront ensures smoother transitions and prevents data
                  exposure.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="encryption"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Lock className="w-10 h-10 text-green-600" />
                  <h2 className="text-2xl font-bold">
                    2. Encrypt Data In-Transit and At-Rest
                  </h2>
                </div>
                <p>
                  Always use strong encryption protocols like TLS for data in
                  transit and AES-256 for stored data. This prevents unauthorized
                  access and ensures compliance with global security standards.
                </p>
              </div>

              {/* Section 3 */}
              <div
                id="identity"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-10 h-10 text-purple-600" />
                  <h2 className="text-2xl font-bold">
                    3. Implement Strong Identity & Access Management
                  </h2>
                </div>
                <p>
                  Adopt multi-factor authentication (MFA), role-based access
                  controls (RBAC), and the principle of least privilege to
                  minimize insider threats and unauthorized access.
                </p>
              </div>

              {/* Section 4 */}
              <div
                id="backup"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Server className="w-10 h-10 text-red-600" />
                  <h2 className="text-2xl font-bold">
                    4. Backup & Disaster Recovery Planning
                  </h2>
                </div>
                <p>
                  Ensure that backup systems are in place before migration.
                  Regularly test disaster recovery plans to guarantee business
                  continuity in case of data loss or system failure.
                </p>
              </div>

              {/* Section 5 */}
              <div
                id="monitoring"
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-10 h-10 text-yellow-600" />
                  <h2 className="text-2xl font-bold">
                    5. Continuous Monitoring & Compliance
                  </h2>
                </div>
                <p>
                  Use advanced monitoring tools and AI-driven analytics to detect
                  unusual activity in real-time. Continuously audit and update
                  your cloud systems to maintain regulatory compliance.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
              <p>
                Secure cloud migration is not a one-time task but an ongoing
                process. By combining assessments, encryption, IAM, disaster
                recovery, and continuous monitoring, businesses can ensure a
                seamless and secure transition to the cloud.
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
                <a href="#assessment">Assessment</a>
              </li>
              <li>
                <a href="#encryption">Encryption</a>
              </li>
              <li>
                <a href="#identity">Identity & Access</a>
              </li>
              <li>
                <a href="#backup">Backup & Recovery</a>
              </li>
              <li>
                <a href="#monitoring">Monitoring & Compliance</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
