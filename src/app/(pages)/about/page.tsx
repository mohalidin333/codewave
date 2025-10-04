// app/about/page.tsx (Next.js 13+ App Router)
// or pages/about.tsx (if using Pages Router)

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Driving digital transformation through innovation, collaboration,
            and excellence in software development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower businesses with reliable, scalable, and innovative
            software solutions that solve real-world challenges and unlock
            growth opportunities.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a global leader in custom software development, recognized for
            delivering value-driven solutions and building lasting partnerships.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Example team member */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src="/team1.jpg"
                alt="Team Member"
                width={400}
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-medium">Alex Johnson</h3>
              <p className="text-blue-600 font-semibold">CEO & Founder</p>
              <p className="text-gray-600 mt-2 text-sm">
                Visionary leader with a passion for building scalable software
                solutions and mentoring future innovators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src="/team2.jpg"
                alt="Team Member"
                width={400}
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-medium">Sophia Lee</h3>
              <p className="text-blue-600 font-semibold">
                Head of Engineering
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Expert in full-stack development, leading teams to deliver
                cutting-edge digital solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src="/team3.jpg"
                alt="Team Member"
                width={400}
                height={400}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-medium">David Kim</h3>
              <p className="text-blue-600 font-semibold">
                Cloud Solutions Architect
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Specializes in designing scalable cloud infrastructure and
                ensuring performance, security, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Culture
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
          At CodeWave Solutions, we believe in collaboration, innovation, and
          continuous learning. Our culture fosters creativity, inclusivity, and
          excellence. We empower our people to grow personally and
          professionally while making an impact through technology.
        </p>
      </section>

      {/* Certifications / Achievements */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Certifications & Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold">ISO 27001</p>
              <p className="text-gray-500 text-sm">Information Security</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold">AWS Partner</p>
              <p className="text-gray-500 text-sm">Cloud Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold">Scrum Alliance</p>
              <p className="text-gray-500 text-sm">Agile Development</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold">Google Cloud</p>
              <p className="text-gray-500 text-sm">Certified Partner</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
