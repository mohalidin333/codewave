import React from "react";
import { Code, Smartphone, Cloud, Cpu, Briefcase } from "lucide-react"; // icons
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks for performance, scalability, and seamless user experiences.",
      icon: <Code className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Mobile App Development",
      description:
        "iOS and Android applications that combine intuitive design with robust functionality, ensuring smooth mobile experiences.",
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud-native development, migration, and optimization services that enable businesses to scale securely and efficiently.",
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "AI & Automation",
      description:
        "Leverage artificial intelligence and automation to streamline processes, enhance decision-making, and unlock innovation.",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "IT Consulting",
      description:
        "Strategic IT consulting to align technology with business goals, reduce costs, and maximize ROI.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-100 max-w-xl">
              Let&apos;s collaborate and build scalable, innovative solutions for your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
