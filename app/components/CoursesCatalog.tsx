"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CourseEnrollmentForm from "./CourseEnrollmentForm";

export default function CoursesCatalog({ onCourseClick }: { onCourseClick?: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{ id: number; title: string } | null>(null);
  const router = useRouter();

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "master", name: "Master Courses" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "cybersecurity", name: "Cybersecurity" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "web", name: "Web Development" },
    { id: "network", name: "Networking" },
    { id: "devops", name: "DevOps" },
    { id: "blockchain", name: "Blockchain" },
    { id: "basic", name: "Basic Courses" },
    { id: "flagship", name: "Flagship Courses" },
  ];

  const courses = [
    {
      id: 1,
      code: "MC-101",
      title: "AWS Solutions Architect Associate",
      category: "cloud",
      duration: "6 Weeks",
      level: "Intermediate",
      rating: 4.8,
      mode: "Online + Offline",
    },
    {
      id: 2,
      code: "CS-201",
      title: "Certified Ethical Hacker (CEH)",
      category: "cybersecurity",
      duration: "8 Weeks",
      level: "Advanced",
      rating: 4.9,
      mode: "Online",
    },
    {
      id: 3,
      code: "AI-301",
      title: "Machine Learning with Python",
      category: "ai",
      duration: "10 Weeks",
      level: "Intermediate",
      rating: 4.7,
      mode: "Offline",
    },
    {
      id: 4,
      code: "WD-102",
      title: "Full Stack Web Development",
      category: "web",
      duration: "12 Weeks",
      level: "Beginner",
      rating: 4.6,
      mode: "Online",
    },
    {
      id: 5,
      code: "NET-150",
      title: "Cisco CCNA Routing & Switching",
      category: "network",
      duration: "8 Weeks",
      level: "Intermediate",
      rating: 4.5,
      mode: "Offline",
    },
    {
      id: 6,
      code: "DO-201",
      title: "Docker & Kubernetes Mastery",
      category: "devops",
      duration: "6 Weeks",
      level: "Advanced",
      rating: 4.8,
      mode: "Online + Offline",
    },
    {
      id: 7,
      code: "BC-101",
      title: "Blockchain Development Fundamentals",
      category: "blockchain",
      duration: "8 Weeks",
      level: "Intermediate",
      rating: 4.4,
      mode: "Online",
    },
    {
      id: 8,
      code: "MC-102",
      title: "Microsoft Azure Fundamentals",
      category: "cloud",
      duration: "4 Weeks",
      level: "Beginner",
      rating: 4.7,
      mode: "Online",
    },
    {
      id: 9,
      code: "CS-202",
      title: "Network Security Essentials",
      category: "cybersecurity",
      duration: "6 Weeks",
      level: "Beginner",
      rating: 4.5,
      mode: "Offline",
    },
    {
      id: 10,
      code: "AI-302",
      title: "Deep Learning with TensorFlow",
      category: "ai",
      duration: "10 Weeks",
      level: "Advanced",
      rating: 4.9,
      mode: "Online + Offline",
    },
    {
      id: 11,
      code: "WD-103",
      title: "React.js Advanced",
      category: "web",
      duration: "8 Weeks",
      level: "Intermediate",
      rating: 4.8,
      mode: "Online",
    },
    {
      id: 12,
      code: "NET-151",
      title: "Network Administration Pro",
      category: "network",
      duration: "10 Weeks",
      level: "Advanced",
      rating: 4.6,
      mode: "Offline",
    },
    // Master Courses
    {
      id: 13,
      code: "MST-101",
      title: "Master Certified Cloud Computing & Cyber Security Engineer",
      category: "master",
      duration: "18 Months",
      level: "Advanced",
      rating: 4.9,
      mode: "Offline + Hybrid",
    },
    {
      id: 14,
      code: "MST-102",
      title: "Master Certified Cloud Computing Professional with Artificial Intelligence",
      category: "master",
      duration: "6 Months",
      level: "Advanced",
      rating: 4.8,
      mode: "Offline + Hybrid",
    },
    {
      id: 15,
      code: "MST-103",
      title: "Master Certified Cloud Computing & Cyber Security Professional",
      category: "master",
      duration: "18 Months",
      level: "Advanced",
      rating: 4.9,
      mode: "Offline + Hybrid",
    },
    {
      id: 16,
      code: "MST-104",
      title: "Master In Gaming & Metaverse Design",
      category: "master",
      duration: "26 Months",
      level: "Advanced",
      rating: 4.7,
      mode: "Offline",
    },
    // Basic Courses
    {
      id: 17,
      code: "BSC-101",
      title: "FULL STACK DEVELOPMENT WITH AI INTEGRATION",
      category: "basic",
      duration: "12/6 Months",
      level: "Beginner",
      rating: 4.5,
      mode: "Online + Offline",
    },
    {
      id: 18,
      code: "BSC-102",
      title: "Video Editing Fundamentals",
      category: "basic",
      duration: "2 Months",
      level: "Beginner",
      rating: 4.4,
      mode: "Online + Offline",
    },
    {
      id: 19,
      code: "BSC-103",
      title: "Digital Marketing Essentials",
      category: "basic",
      duration: "3 Months",
      level: "Beginner",
      rating: 4.3,
      mode: "Online + Offline",
    },
    // Flagship Courses
    {
      id: 20,
      code: "FLG-101",
      title: "Advanced Web Development Masterclass",
      category: "flagship",
      duration: "12 Months",
      level: "Advanced",
      rating: 4.8,
      mode: "Online + Offline",
    },
    {
      id: 21,
      code: "FLG-102",
      title: "AI & Machine Learning Intensive",
      category: "flagship",
      duration: "10 Months",
      level: "Advanced",
      rating: 4.9,
      mode: "Online + Offline",
    },
    {
      id: 22,
      code: "FLG-103",
      title: "Cybersecurity & Network Mastery",
      category: "flagship",
      duration: "14 Months",
      level: "Advanced",
      rating: 4.8,
      mode: "Offline + Hybrid",
    },
    {
      id: 23,
      code: "FLG-104",
      title: "Cloud Architecture & DevOps",
      category: "flagship",
      duration: "9 Months",
      level: "Advanced",
      rating: 4.7,
      mode: "Online + Offline",
    },
  ];

  // Filter courses based on category and search
  let filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner": 
        return { bg: "bg-emerald-100", text: "text-emerald-700", badge: "bg-emerald-500" };
      case "Intermediate": 
        return { bg: "bg-amber-100", text: "text-amber-700", badge: "bg-amber-500" };
      case "Advanced": 
        return { bg: "bg-red-100", text: "text-red-700", badge: "bg-red-500" };
      default: 
        return { bg: "bg-slate-100", text: "text-slate-700", badge: "bg-slate-500" };
    }
  };

  const getCategoryCount = (categoryId: string) => {
    return categoryId === "all" 
      ? courses.length 
      : courses.filter(c => c.category === categoryId).length;
  };

  const handleCourseClick = (courseId: number, courseTitle: string) => {
    setSelectedCourse({ id: courseId, title: courseTitle });
    setIsEnrollmentFormOpen(true);
    if (onCourseClick) {
      onCourseClick();
    }
  };

  const handleFormClose = () => {
    setIsEnrollmentFormOpen(false);
    if (selectedCourse) {
      router.push(`/courses/${selectedCourse.id}`);
    }
    setSelectedCourse(null);
  };

  return (
    <div className="flex w-full h-full gap-0">
      {/* Left Sidebar - Categories */}
      <div className="w-48 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 overflow-y-auto m-0">
        <h3 className="text-xs font-bold text-cyan-400 text-uppercase tracking-wider mb-4">Categories</h3>
        <nav className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-5 overflow-y-auto max-h-[560px] m-0">
        <div>
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-900 mb-1">
              {categories.find(c => c.id === selectedCategory)?.name || "All Courses"}
            </h2>
            <p className="text-slate-600 text-xs">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {/* Courses Grid - 3 Column Layout (6 tiles visible) */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {filteredCourses.map((course) => {
                const colors = getLevelColor(course.level);
                return (
                  <div
                    key={course.id}
                    className="bg-slate-50 hover:bg-blue-50 p-4 rounded-lg transition-all duration-200 group border border-slate-200 hover:border-cyan-300 h-full flex flex-col"
                  >
                      {/* Course Title */}
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-cyan-600 transition-colors mb-3 mt-1">
                        {course.title}
                      </h4>

                      {/* Level Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center font-semibold px-2 py-0.5 rounded-full text-xs ${colors.bg} ${colors.text}`}>
                          <span className={`w-1 h-1 rounded-full ${colors.badge} mr-1`}></span>
                          {course.level}
                        </span>
                      </div>

                      {/* Course Meta */}
                      <div className="space-y-1 text-xs text-slate-600 mb-4 flex-1">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {course.mode === "Online" && (
                            <>
                              <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H4V5h16v12z"/>
                              </svg>
                              <span className="font-semibold text-blue-600">Online</span>
                            </>
                          )}
                          {course.mode === "Offline" && (
                            <>
                              <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                              </svg>
                              <span className="font-semibold text-green-600">Offline</span>
                            </>
                          )}
                          {course.mode === "Online + Offline" && (
                            <>
                              <svg className="w-3 h-3 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                              <span className="font-semibold text-purple-600">Hybrid</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <span className="font-semibold text-slate-900">{course.rating}</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-auto pt-3">
                        <button
                          onClick={() => router.push(`/courses/${course.id}`)}
                          className="flex-1 px-2 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded transition-colors"
                        >
                          Learn More
                        </button>
                        <button
                          onClick={() => handleCourseClick(course.id, course.title)}
                          className="flex-1 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors"
                        >
                          Enroll Now
                        </button>
                      </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-600 text-xs font-medium">
                No courses found
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Enrollment Form */}
      {isEnrollmentFormOpen && selectedCourse && (
        <CourseEnrollmentForm
          isOpen={isEnrollmentFormOpen}
          onClose={handleFormClose}
          courseTitle={selectedCourse.title}
        />
      )}
    </div>
  );
}
