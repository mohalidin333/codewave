import React from "react";
import { FileText, Shield, Users, ClipboardCheck, Globe, RefreshCw } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing or using CodeWave Solutions' services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
      icon: <FileText className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Services Provided",
      description:
        "We provide custom software development, cloud solutions, mobile and web apps, AI integration, and IT consulting. All services are subject to project agreements and scope.",
      icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "User Responsibilities",
      description:
        "Users must provide accurate information, comply with applicable laws, and use our services responsibly. Unauthorized use or misuse may result in termination of access.",
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Intellectual Property",
      description:
        "All intellectual property, including code, designs, content, and trademarks, remain the property of CodeWave Solutions unless explicitly transferred via agreements.",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Limitation of Liability",
      description:
        "We are not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific services provided.",
      icon: <RefreshCw className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Governing Law",
      description:
        "These Terms are governed by the laws of the jurisdiction where CodeWave Solutions operates. Disputes shall be resolved through binding arbitration where applicable.",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Detailed guidelines and rules for using CodeWave Solutions&apos; services.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">{section.icon}</div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
