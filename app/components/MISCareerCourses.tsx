export default function MISCareerCourses() {
  return (
    <section className="mt-16 w-full">
      <div className="rounded-3xl bg-slate-800 text-white p-6 sm:p-8 lg:p-10 w-full">
        <div className="grid gap-8 w-full grid-cols-1 lg:grid-cols-[280px_1fr_320px] items-start">
          {/* Left Image Panel */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="MIS Career Courses"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-3xl font-bold">Career Courses</h3>
            <div className="mt-2 h-0.5 w-32 bg-white/70" />
          </div>

          {/* Middle Content */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-5 text-slate-100/90 leading-relaxed">
              <p>
                At MIS, we offer a wide range of career-focused certification
                courses designed to equip students with the skills and knowledge
                needed to succeed in today's technology landscape.
              </p>
              <p>
                Our certification courses are recognized by industry leaders, and
                our curriculum is updated regularly to match the latest industry
                trends and technologies. Whether you are a beginner or an
                experienced professional, MIS has a course that fits your goals.
              </p>
              <p>
                Our courses are taught by experienced trainers who are passionate
                about helping learners advance their careers.
              </p>
            </div>

            <div className="space-y-5 text-slate-100/90 leading-relaxed">
              <p>
                Get certified in your field of choice with comprehensive MIS
                programs designed by industry experts. Learn at your own pace
                with flexible online and hybrid formats.
              </p>
              <p>
                Our courses include interactive lessons, hands-on exercises, and
                real-world scenarios to ensure you are fully prepared for
                certification exams.
              </p>
              <p>
                Invest in your future with MIS career courses and take the next
                step toward your professional goals.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white text-slate-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-5">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="MIS Certification"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
            <div className="px-5 pb-6">
              <h4 className="text-blue-600 font-bold text-lg leading-snug">
                MIS Certified Cloud Computing Engineer with Artificial
                Intelligence
              </h4>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span>12 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <span>Offline/Hybrid</span>
                </div>
              </div>
              <div className="mt-4 border-t border-red-600" />
              <div className="mt-3 text-sm font-semibold text-blue-600">
                Explore More
              </div>
              <div className="mt-4">
                <button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}