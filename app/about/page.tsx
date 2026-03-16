export default function AboutPage() {
  const stats = [
    { value: "1,000+", label: "Students Trained Annually" },
    { value: "95%", label: "Placement Success Rate" },
    { value: "30+", label: "Industry Certifications" },
    { value: "10+", label: "Years of Excellence" },
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Industry Expert Instructors",
      desc: "Learn from certified professionals with real-world enterprise experience.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "30+ Comprehensive Courses",
      desc: "Structured curricula covering cloud, cybersecurity, networking, and full-stack development.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Globally Recognised Certifications",
      desc: "Courses aligned with AWS, Microsoft, CompTIA, Cisco, and other leading certification bodies.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Placement Assistance",
      desc: "Dedicated career support including mock interviews, resume building, and hiring partner network.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Corporate Training Programs",
      desc: "Tailored upskilling solutions for teams and enterprises across all industry verticals.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Flexible Learning Modes",
      desc: "Choose from online, offline, and hybrid formats designed around your schedule.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.18),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 mb-6">
              About Us
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Shaping the Next Generation of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                IT Professionals
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Master Institute of Software (MIS) is a premier technology training institution delivering industry-aligned education in software development, cybersecurity, cloud computing, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
          <p className="text-slate-600 leading-relaxed mb-5">
            Founded with the mission to bridge the gap between academia and industry, MIS has spent over a decade developing professionals who are job-ready from day one. Our curriculum is continuously updated to reflect real-world demands and the latest technology trends.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            With hands-on labs, live projects, and mentorship from certified experts, our students graduate with the skills, confidence, and credentials to thrive in a competitive job market.
          </p>
          <div className="space-y-5">
            <div className="flex gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Our Mission</p>
                <p className="text-sm text-slate-600 mt-0.5">To deliver world-class technical education that empowers individuals to build impactful, future-ready careers.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Our Vision</p>
                <p className="text-sm text-slate-600 mt-0.5">To be the most trusted name in technology education across India, known for excellence, integrity, and measurable outcomes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Practical Learning", desc: "Hands-on labs, live projects, and real-world simulations." },
            { label: "Expert Mentorship", desc: "1-on-1 guidance from industry-certified professionals." },
            { label: "Career Focus", desc: "Every course is designed with placement outcomes in mind." },
            { label: "Continuous Updates", desc: "Curricula refreshed every quarter to stay current with industry shifts." },
          ].map((v) => (
            <div key={v.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-1 bg-blue-600 rounded-full mb-4" />
              <p className="font-semibold text-slate-900 mb-1">{v.label}</p>
              <p className="text-sm text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose MIS?</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Everything you need to accelerate your technology career — under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  {h.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{h.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8">
            Join thousands of professionals who have transformed their careers with MIS. Explore our courses and enrol today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow">
              Explore Courses
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
