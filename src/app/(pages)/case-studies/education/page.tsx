import React from "react";
import Link from "next/link";
import { GraduationCap, CheckCircle, ArrowLeft } from "lucide-react";

export default function EducationCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <GraduationCap className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Next-Gen Education Platform
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering students and educators with a modern, scalable digital
            learning platform designed for accessibility, engagement, and
            collaboration.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-indigo-600 hover:underline font-medium"
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
            A leading education provider needed to replace their outdated LMS
            with a scalable, interactive platform. They struggled with poor
            engagement, lack of mobile accessibility, and limited analytics for
            tracking student progress.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 leading-relaxed">
            We developed a next-gen education platform with interactive
            classrooms, gamified learning modules, AI-driven personalization,
            real-time assessments, and mobile-first accessibility for students
            worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              50% increase in student engagement
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              40% improvement in course completion rates
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
              Scalable platform serving 200,000+ learners globally
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
              "Interactive Virtual Classrooms",
              "Gamified Learning Modules",
              "AI-Powered Personalized Learning Paths",
              "Mobile-First User Experience",
              "Real-Time Assessments & Analytics",
              "Collaboration Tools (Chat, Forums, Groups)",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-indigo-600 mb-3" />
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
            "Next.js",
            "React",
            "Node.js",
            "GraphQL",
            "Firebase",
            "PostgreSQL",
            "AWS",
            "WebRTC",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full border border-indigo-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-lg italic text-gray-700 mb-6">
            “The new learning platform completely transformed our digital
            education strategy. Students are more engaged than ever, and our
            instructors finally have the tools they need to succeed online.”
          </p>
          <h3 className="text-indigo-600 font-semibold">
            — Director of Learning, Global Education Provider
          </h3>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Learning Experience?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We design scalable, engaging, and innovative education platforms that
          empower learners and educators worldwide.
        </p>
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Let’s Talk
        </Link>
      </section>
    </main>
  );
}
