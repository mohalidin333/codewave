import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "CTO, HealthFirst",
      feedback:
        "The CodeWave team transformed our healthcare system with a secure, user-friendly platform. Their attention to detail and commitment to compliance was impressive.",
      avatar: "/avatars/emily.jpg",
    },
    {
      id: 2,
      name: "David Kim",
      role: "Founder, ShopSmart",
      feedback:
        "Thanks to their e-commerce expertise, we scaled our platform to handle thousands of users seamlessly. Revenue increased by 45% within six months.",
      avatar: "/avatars/david.jpg",
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Head of Operations, FinPay",
      feedback:
        "They delivered a secure, scalable fintech solution that allowed us to expand globally. The integration with payment gateways was flawless.",
      avatar: "/avatars/sophia.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by businesses across healthcare, fintech, logistics,
          education, and e-commerce.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 mb-6 italic">
                “{testimonial.feedback}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
