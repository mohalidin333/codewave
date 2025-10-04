import React from "react";
import { Stethoscope, ShieldCheck, Smartphone, Users } from "lucide-react";
import Link from "next/link";

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <Stethoscope className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healthcare Software Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering healthcare providers, patients, and organizations with
            secure, innovative, and scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Transforming Healthcare Through Technology
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The healthcare industry demands secure, reliable, and user-friendly
          solutions that enhance patient outcomes and streamline provider
          workflows. At <span className="font-semibold">CodeWave</span>, we
          specialize in building digital healthcare platforms that comply with
          industry standards while driving innovation in telemedicine, hospital
          management, and patient engagement.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Healthcare Solutions
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Telemedicine Apps</h3>
              <p className="text-gray-600">
                Enable remote consultations, appointment scheduling, and virtual
                care with secure and intuitive telemedicine platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                EHR & Patient Portals
              </h3>
              <p className="text-gray-600">
                HIPAA-compliant systems that centralize patient records, improve
                accessibility, and empower patients with real-time health data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Hospital Management
              </h3>
              <p className="text-gray-600">
                Comprehensive solutions for staff management, billing, resource
                allocation, and workflow optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Industry Compliance</h3>
            <p className="text-gray-600">
              Our solutions meet international standards such as HIPAA, GDPR,
              and HL7 to ensure patient safety and data privacy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
            <p className="text-gray-600">
              From startups to large hospital systems, our platforms are built
              to grow with your organization’s needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Patient-Centered Design</h3>
            <p className="text-gray-600">
              We design intuitive, accessible interfaces that improve engagement
              for patients and efficiency for providers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
            <p className="text-gray-600">
              Our team brings years of experience delivering digital health
              solutions for diverse healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Innovate in Healthcare?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Let’s build secure, scalable, and impactful healthcare solutions
          together.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
