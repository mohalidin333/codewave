"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across multiple industries including healthcare, fintech, education, e-commerce, and logistics. Our team tailors solutions to each industry's unique challenges and compliance requirements.",
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer:
        "Timelines vary depending on project scope and complexity. On average, small-to-medium projects take 3–6 months, while larger enterprise solutions may take 6–12 months.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support, maintenance, and updates to ensure your system remains secure, scalable, and aligned with your business needs.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Absolutely. We specialize in seamless integrations with existing tools, APIs, and platforms, ensuring smooth workflows without disruption.",
    },
    {
      question: "What is the cost of developing a custom solution?",
      answer:
        "Costs depend on project complexity, features, and integrations. We provide a detailed estimate after discussing your requirements and goals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services,
            process, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
