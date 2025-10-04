import React from "react";
import { BookOpen, Users, Laptop, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Education Technology Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Transforming learning with scalable, interactive, and innovative 
            digital platforms designed for schools, universities, and training providers.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Empowering the Future of Learning
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">CodeWave</span>, we build 
          technology that makes learning more accessible, engaging, and 
          impactful. From digital classrooms to advanced e-learning platforms, 
          our solutions help educators deliver knowledge effectively 
          while improving student outcomes.
        </p>
      </section>

      {/* Key Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Education Solutions
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Laptop className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">E-Learning Platforms</h3>
              <p className="text-gray-600">
                Interactive learning management systems (LMS) that enable 
                virtual classrooms, assessments, and student engagement tools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Virtual Collaboration</h3>
              <p className="text-gray-600">
                Real-time collaboration tools, video conferencing, and 
                group projects that connect students and teachers globally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-gray-600">
                Data-driven insights on student performance, engagement, and 
                curriculum effectiveness to improve learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Education Tech?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Accessible Learning</h3>
            <p className="text-gray-600">
              Platforms designed for inclusivity, ensuring every student 
              has equal access to learning resources.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Engagement Focused</h3>
            <p className="text-gray-600">
              Gamification, interactive quizzes, and multimedia content 
              that keep learners motivated.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
            <p className="text-gray-600">
              Systems built to handle classrooms of any size — from 
              small tutoring groups to global online universities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
            <p className="text-gray-600">
              Safe platforms that protect sensitive student data and 
              provide uninterrupted learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Smarter Learning Together
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Partner with us to design modern, innovative, and scalable 
          education technology solutions that inspire learning and growth.
        </p>
        <Link
          href="/contact"
          className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
