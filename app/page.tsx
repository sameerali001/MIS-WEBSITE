"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      slug: "networking-basics",
      title: "Networking Basics",
      short: "Intro to networking and hardware.",
      image:
        "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "hardware-repair",
      title: "Hardware Repair & Maintenance",
      short: "PC repair & diagnostics.",
      image:
        "https://plus.unsplash.com/premium_photo-1663021816337-be7fb3833336?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "cyber-security",
      title: "Cyber Security Essentials",
      short: "Security fundamentals.",
      image:
        "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const degreeCourses = [
    {
      title: "BCA In Cloud Computing & Cyber Security",
      duration: "36 Months",
      mode: "Offline/Hybrid",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      title: "BCA In Multimedia and Animation",
      duration: "36 Months",
      mode: "Offline/Hybrid",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
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
      <section id="courses" className="space-y-6 mb-12">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 ${
            isVisible ? "animate-fadeInUp" : "initial-hidden"
          }`}
        >
          Our flagship courses
        </h1>
        <p
          className={`text-base md:text-lg text-blue-600 max-w-2xl leading-relaxed ${
            isVisible ? "animate-fadeInUp stagger-1" : "initial-hidden"
          }`}
        >
          Learn networking, hardware repair and cyber security with hands-on,
          practical training designed for real-world jobs.
        </p>
      </section>

      {/* Course Cards Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, idx) => (
          <article
            key={c.slug}
            className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm card-hover-effect ${
              isVisible
                ? `animate-scaleIn stagger-${idx + 2}`
                : "initial-hidden"
            }`}
          >
            <div className="relative h-48 sm:h-40 md:h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="h-full w-full object-cover card-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-slate-900 leading-tight">
                {c.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 flex-1">
                {c.short}
              </p>
              <Link
                href={`/courses/${c.slug}`}
                className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View course
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Degree Courses Section */}
      <section id="degree-courses" className="mt-20 mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-10">
          Degree Courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {degreeCourses.map((course, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden degree-card ${
                  isVisible
                    ? `animate-scaleIn stagger-${idx + 1}`
                    : "initial-hidden"
                }`}
              >
                <div className="h-32 sm:h-36 bg-white flex items-center justify-center overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover card-image"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-4 leading-tight">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-slate-600 mb-5">
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
                      <Link
                        href="#"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Explore More
                      </Link>

                      <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                        Enroll Now!
                      </button>
                      <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </Layout>
  );
}