import React from "react";
import Link from "next/link";
import { HeartPulse, CheckCircle, ArrowLeft } from "lucide-react";

export default function HealthcareCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-700 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <HeartPulse className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Health Transformation Platform
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering hospitals and clinics with cloud-based EHR, telemedicine,
            and patient analytics to deliver smarter, faster, and more
            personalized healthcare.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-blue-700 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>
      </div>

      {/* Challenge / Solution / Results */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-gray-600 leading-relaxed">
            A healthcare organization needed a unified, secure, and scalable
            system to manage patient records, telehealth services, and
            appointment workflows. Their existing infrastructure was fragmented,
            slowing down patient care and increasing administrative workload.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 leading-relaxed">
            We developed a cloud-based healthcare platform that integrates
            electronic health records (EHR), appointment management, and
            telemedicine services. Our solution featured secure role-based
            access, AI-driven analytics, and a seamless patient portal for
            improved engagement.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              50% reduction in administrative workload
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Improved patient satisfaction by 40%
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Enabled 24/7 remote consultations across departments
            </li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Cloud-Based Electronic Health Records (EHR)",
              "Telemedicine & Virtual Consultation",
              "AI-Powered Patient Analytics",
              "Appointment Scheduling & Automation",
              "HIPAA-Compliant Data Security",
              "Integrated Billing & Insurance Module",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="text-lg font-medium">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "Node.js",
            "AWS",
            "PostgreSQL",
            "Docker",
            "TensorFlow",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-lg italic text-gray-700 mb-6">
            “This platform revolutionized how we handle patient data and remote
            care. Our operations are now faster, more secure, and truly
            patient-centered. It’s an incredible leap forward for our hospital.”
          </p>
          <h3 className="text-blue-700 font-semibold">
            — CIO, Regional Healthcare Provider
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Modernize Your Healthcare System?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We design secure, scalable, and intelligent healthcare solutions that
          enhance patient care and operational efficiency.
        </p>
        <Link
          href="/contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
