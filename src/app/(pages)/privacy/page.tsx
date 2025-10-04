import React from "react";
import { Shield, Lock, Users, Globe, RefreshCw, Mail } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      description:
        "We collect personal data you provide (name, email, company) and automatically via cookies and analytics (IP address, browser type, pages visited) to improve your experience.",
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "How We Use Your Information",
      description:
        "To deliver, maintain, and improve services; communicate updates; analyze usage; ensure security and compliance.",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Data Sharing & Security",
      description:
        "We never sell data. We share with trusted service providers, legal authorities when required, or during business transfers. We use robust security measures to protect your data.",
      icon: <Lock className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Cookies & Tracking",
      description:
        "Cookies and analytics help enhance functionality, personalize content, and improve performance. You can manage cookies via your browser.",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Your Rights",
      description:
        "Access, correct, or request deletion of your data. Opt-out of marketing communications anytime.",
      icon: <RefreshCw className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Contact Us",
      description:
        "Questions or concerns? Reach out via email or phone, or visit our office.",
      icon: <Mail className="w-10 h-10 text-blue-600" />,
      contact: [
        { label: "Email", value: "privacy@codewave.com", link: "mailto:privacy@codewave.com" },
        { label: "Phone", value: "+1 (234) 567-890", link: "tel:+1234567890" },
        { label: "Address", value: "123 Innovation Drive, Tech City, Global Business District" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Your privacy matters. Learn how we collect, use, and protect your personal data.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">{section.icon}</div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-3">{section.description}</p>
              {section.contact && (
                <ul className="space-y-2 mt-2 text-gray-700">
                  {section.contact.map((c, i) => (
                    <li key={i}>
                      <strong>{c.label}:</strong>{" "}
                      {c.link ? (
                        <a href={c.link} className="text-blue-600 hover:underline">
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
