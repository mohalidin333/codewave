// components/AboutSection.tsx

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image / Illustration */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src="/about-illustration.jpg" // replace with company/team image or illustration
            alt="About CodeWave Solutions"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <span className="font-semibold text-blue-600">CodeWave Solutions</span>, 
            we empower businesses through custom software, cloud solutions, 
            and AI-driven innovation. Our team is committed to turning complex 
            challenges into simple, scalable solutions.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With years of experience across industries like healthcare, fintech, 
            e-commerce, and education, we deliver reliable technology that fuels 
            growth and builds long-term partnerships.
          </p>

          {/* Quick highlights for trust */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">10+</p>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-gray-500 text-sm">Successful Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">15+</p>
              <p className="text-gray-500 text-sm">Industries Served</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
