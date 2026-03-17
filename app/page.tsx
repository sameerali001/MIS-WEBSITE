"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "./components/Layout";
import MasterCareerCourses from "./components/MasterCareerCourses";
import CourseEnrollmentForm from "./components/CourseEnrollmentForm";

export default function Home() {
  const [isVisible] = useState(true);
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; slug: string } | null>(null);
  const router = useRouter();

  const handleCourseClick = (courseTitle: string, courseSlug: string) => {
    setSelectedCourse({ title: courseTitle, slug: courseSlug });
    setIsEnrollmentFormOpen(true);
  };

  const handleExploreCourse = (courseSlug: string) => {
    router.push(`/courses/${courseSlug}`);
  };

  const handleFormClose = () => {
    setIsEnrollmentFormOpen(false);
    setSelectedCourse(null);
  };

  const degreeCourses = [
    {
      slug: "bca-cloud-cyber-security",
      title: "BCA In Cloud Computing & Cyber Security",
      duration: "36 Months",
      mode: "Offline/Hybrid",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      slug: "bca-multimedia-animation",
      title: "BCA In Multimedia and Animation",
      duration: "36 Months",
      mode: "Offline/Hybrid",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      slug: "bca-data-science-ai",
      title: "BCA In Data Science with AI",
      duration: "36 Months",
      mode: "Offline/Hybrid",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
  ];

  return (
    <Layout>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-bg {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
          border: 2px solid transparent;
        }

        .degree-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .degree-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
        }

        .degree-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.2s;
        }

        .stagger-3 {
          animation-delay: 0.3s;
        }

        .stagger-4 {
          animation-delay: 0.4s;
        }

        .stagger-5 {
          animation-delay: 0.5s;
        }

        .stagger-6 {
          animation-delay: 0.6s;
        }

        .initial-hidden {
          opacity: 0;
        }

        @media (max-width: 640px) {
          .card-hover-effect:hover {
            transform: translateY(-4px) scale(1.01);
          }

          .degree-card:hover {
            transform: translateY(-3px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
                2025 Growth Plan
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Grow your business in 2025
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Build in-demand digital skills with MIS programs and convert learning into real outcomes through guided projects, mentorship, and job-focused execution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => router.push('/courses')}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Explore Courses
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Why this works</p>
              <div className="mt-4 space-y-3">
                {["Role-based training roadmap", "Live mentor feedback loops", "Portfolio and interview support"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm text-white">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/40 font-bold text-white">
                      {index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <MasterCareerCourses />

      {/* Degree Courses Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <section id="degree-courses" className="mt-20 mb-12">
          <h2 className="mb-8 text-3xl font-bold text-blue-600 sm:text-4xl lg:mb-10 lg:text-5xl">
            Degree Courses
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {degreeCourses.map((course, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden degree-card ${
                  isVisible
                    ? `animate-scaleIn stagger-${idx + 1}`
                    : "initial-hidden"
                }`}
              >
                <div className="relative flex h-28 items-center justify-center overflow-hidden bg-white sm:h-36">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover card-image"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="mb-3 text-base font-bold leading-tight text-blue-600 sm:text-xl">
                    {course.title}
                  </h3>

                  <div className="mb-4 flex flex-wrap gap-2 text-xs text-slate-600 sm:gap-4 sm:text-sm">
                    <div className="flex items-center gap-2 bg-white px-0 py-2 rounded-lg">
                      <svg
                        className="w-4 h-4 text-blue-600"
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
                      <span className="font-medium text-blue-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-0 py-2 rounded-lg">
                      <svg
                        className="w-4 h-4 text-blue-600"
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
                      <span className="font-medium text-blue-600">{course.mode}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-blue-600 pt-5 mt-5">
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleExploreCourse(course.slug)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors text-left"
                      >
                        Explore More
                      </button>

                      <button onClick={() => handleCourseClick(course.title, course.slug)} className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                        Enroll Now!
                      </button>
                      <button onClick={() => handleExploreCourse(course.slug)} className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CourseEnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={handleFormClose}
        courseTitle={selectedCourse?.title || "Master Course"}
        courseSlug={selectedCourse?.slug}
        successPath={selectedCourse ? `/courses/${selectedCourse.slug}/welcome` : "/courses"}
      />
    </Layout>
  );
}