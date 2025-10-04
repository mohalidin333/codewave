import React from "react";
import { Cpu, Github, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AiAutomationPage() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI & Automation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Harness the power of artificial intelligence and automation to
          optimize workflows, improve decision-making, and drive innovation for
          your business.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Our AI & Automation Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Cpu className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Gain insights from data with predictive analytics, machine
              learning models, and AI-driven dashboards.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Brain className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
            <p className="text-gray-600 leading-relaxed">
              Automate repetitive tasks and workflows using RPA, scripts, and
              AI-driven tools for efficiency and cost savings.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition">
            <Github className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom AI Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Build tailored AI models and intelligent systems to solve unique
              business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* AI Workflow */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI & Automation Workflow
          </h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-purple-600">1</p>
              </div>
              <h3 className="font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600 text-sm">
                Gather and preprocess structured and unstructured data for AI
                models.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-purple-600">2</p>
              </div>
              <h3 className="font-semibold mb-2">Model Development</h3>
              <p className="text-gray-600 text-sm">
                Train machine learning, deep learning, or NLP models to meet
                business needs.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-purple-600">3</p>
              </div>
              <h3 className="font-semibold mb-2">Integration</h3>
              <p className="text-gray-600 text-sm">
                Integrate AI systems into existing applications, workflows, and
                cloud platforms.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow mb-4">
                <p className="text-xl font-bold text-purple-600">4</p>
              </div>
              <h3 className="font-semibold mb-2">Monitoring & Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuously monitor models and automation performance to refine
                and improve outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tools & Tech */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Python",
            "TensorFlow",
            "PyTorch",
            "OpenAI API",
            "RPA Tools",
            "Power Automate",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-white rounded-full shadow text-gray-700 hover:bg-purple-50 transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Selected AI Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <Image
                width={500}
                height={500}
                src="/portfolio-ai1.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">
                AI-Powered Analytics Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Predictive analytics and insights for real-time business
                decisions.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-ai2.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">
                RPA Workflow Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Automated repetitive tasks across finance and HR departments.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <img
                src="/portfolio-ai3.jpg"
                alt="Project"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">Custom NLP Chatbot</h3>
              <p className="text-gray-600 text-sm">
                Natural language understanding chatbot to enhance customer
                support.
              </p>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="mt-8 inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Let’s implement AI & automation strategies that improve efficiency,
          reduce costs, and drive innovation across your organization.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
