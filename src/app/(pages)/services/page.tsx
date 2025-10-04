import React from "react";
import { Code, Smartphone, Cloud, Cpu, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "We design and build high-performing websites and web applications using modern frameworks such as Next.js, React, and Node.js. From corporate websites to enterprise-grade platforms, our solutions are fast, scalable, and optimized for user experience.",
      benefits: [
        "Responsive and mobile-friendly",
        "SEO-optimized architecture",
        "Custom CMS or headless CMS integration",
        "Performance and security best practices",
      ],
      icon: <Code className="w-12 h-12 text-blue-600" />,
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "We create powerful iOS and Android applications tailored to your business needs. Our apps combine beautiful UI/UX design with robust backend functionality, ensuring seamless performance across devices.",
      benefits: [
        "Native and cross-platform apps",
        "Intuitive, user-focused design",
        "Integration with APIs and third-party services",
        "App store deployment and support",
      ],
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      link: "/services/mobile-apps",
    },
    {
      title: "Cloud Solutions",
      description:
        "Harness the power of the cloud to modernize your infrastructure. We provide cloud-native app development, migration, and optimization services to enhance agility, scalability, and cost efficiency.",
      benefits: [
        "Cloud migration and modernization",
        "Serverless applications",
        "DevOps automation and CI/CD pipelines",
        "AWS, Azure, and Google Cloud expertise",
      ],
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      link: "/services/cloud",
    },
    {
      title: "AI & Automation",
      description:
        "Stay ahead with artificial intelligence and automation solutions. We help businesses implement machine learning, data-driven insights, and workflow automation to improve efficiency and unlock innovation.",
      benefits: [
        "AI-driven insights and analytics",
        "Chatbots and virtual assistants",
        "Process automation (RPA)",
        "Predictive modeling and machine learning",
      ],
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      link: "/services/ai-automation",
    },
    {
      title: "IT Consulting",
      description:
        "Our consulting services help you align IT strategy with business goals. We assess your systems, identify opportunities for improvement, and provide expert guidance on digital transformation.",
      benefits: [
        "Tailored technology roadmaps",
        "Cost reduction and efficiency gains",
        "Risk management and compliance",
        "Long-term IT strategy planning",
      ],
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      link: "/services/consulting",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business,
            enhance efficiency, and drive growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 py-20 space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon / Visual */}
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-blue-50 p-8 rounded-2xl shadow">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
