import React from "react";
import { Cloud, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CloudSolutionsPage() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Cloud Solutions Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Scalable, secure, and reliable cloud solutions tailored to your
          business needs—migrate, optimize, and innovate with confidence.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>

      {/* Cloud Services Overview */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Our Cloud Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Cloud className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamless migration from on-premises or legacy systems to cloud
              platforms with minimal downtime and risk.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Cpu className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cloud-Native Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Build scalable, performant, and resilient cloud-native applications
              optimized for AWS, Azure, or Google Cloud.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure your cloud infrastructure meets industry standards and best
              practices for security, governance, and regulatory compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Cloud Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">1</p>
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluate existing infrastructure and identify cloud readiness.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">2</p>
              </div>
              <h3 className="font-semibold mb-2">Strategy & Planning</h3>
              <p className="text-gray-600 text-sm">
                Define architecture, migration approach, and cloud optimization goals.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">3</p>
              </div>
              <h3 className="font-semibold mb-2">Deployment & Integration</h3>
              <p className="text-gray-600 text-sm">
                Implement cloud solutions, integrate with existing systems, and
                optimize performance.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-blue-600">4</p>
              </div>
              <h3 className="font-semibold mb-2">Monitoring & Support</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring, performance tuning, and support for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Cloud Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            AWS
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Azure
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Google Cloud
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Kubernetes
          </span>
          <span className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-blue-50 transition">
            Docker
          </span>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Selected Cloud Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-cloud1.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Enterprise Cloud Migration</h3>
              <p className="text-gray-600 text-sm">
                Migrated legacy systems to AWS cloud for a global enterprise with zero downtime.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-cloud2.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Cloud-Native SaaS Platform</h3>
              <p className="text-gray-600 text-sm">
                Developed scalable SaaS solutions leveraging serverless architecture.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-cloud3.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Secure Multi-Cloud Setup</h3>
              <p className="text-gray-600 text-sm">
                Implemented multi-cloud environment with robust security and monitoring.
              </p>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Modernize Your Cloud Infrastructure?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Partner with us to design, migrate, and manage cloud solutions that
          enhance performance, security, and scalability.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
