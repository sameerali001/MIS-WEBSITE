"use client";

import Layout from "../components/Layout";
import { useState } from "react";
import CourseEnrollmentForm from "../components/CourseEnrollmentForm";

export default function CoursesCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "cloud", name: "Cloud Computing", icon: "☁️" },
    { id: "cybersecurity", name: "Cyber Security", icon: "🔒" },
    { id: "ai", name: "AI & ML", icon: "🤖" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "network", name: "Networking", icon: "🔗" },
    { id: "devops", name: "DevOps", icon: "⚙️" },
    { id: "blockchain", name: "Blockchain", icon: "⛓️" },
  ];

  const allCourses = [
    {
      id: 1,
      code: "MC-101",
      title: "AWS Solutions Architect Associate",
      category: "cloud",
      duration: "6 Weeks",
      level: "Intermediate",
      mode: "Online + Offline",
      description: "Master AWS cloud architecture and become certified"
    },
    {
      id: 2,
      code: "CS-201",
      title: "Certified Ethical Hacker (CEH)",
      category: "cybersecurity",
      duration: "8 Weeks",
      level: "Advanced",
      mode: "Online",
      description: "Learn ethical hacking and penetration testing"
    },
    {
      id: 3,
      code: "AI-301",
      title: "Machine Learning with Python",
      category: "ai",
      duration: "10 Weeks",
      level: "Intermediate",
      mode: "Offline",
      description: "Build machine learning models with Python"
    },
    {
      id: 4,
      code: "WD-102",
      title: "Full Stack Web Development",
      category: "web",
      duration: "12 Weeks",
      level: "Beginner",
      mode: "Online",
      description: "Learn frontend and backend web development"
    },
    {
      id: 5,
      code: "NET-150",
      title: "Cisco CCNA Routing & Switching",
      category: "network",
      duration: "8 Weeks",
      level: "Intermediate",
      mode: "Offline",
      description: "Master network routing and switching concepts"
    },
    {
      id: 6,
      code: "DO-201",
      title: "Docker & Kubernetes Mastery",
      category: "devops",
      duration: "6 Weeks",
      level: "Advanced",
      mode: "Online + Offline",
      description: "Containerization and orchestration with Docker & K8s"
    },
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  const handleCourseClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsEnrollmentFormOpen(true);
  };

  const handleEnrollmentFormClose = () => {
    setIsEnrollmentFormOpen(false);
    setSelectedCourse(null);
  };

  return (
    <Layout>
      <div className="pb-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-3">All Courses</h1>
          <p className="text-slate-600 text-lg">Choose from our comprehensive selection of professional IT courses</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="text-2xl mb-1">{cat.icon}</span>
                <span className="text-center leading-tight">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? "s" : ""} Found
            </h2>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="h-full bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer flex flex-col text-left"
                >
                    {/* Course Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                      <div className="flex items-center justify-end mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${getLevelColor(course.level)}`} style={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'white'}}>
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-blue-100 transition-colors">
                        {course.title}
                      </h3>
                    </div>

                    {/* Course Body */}
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-slate-600 text-sm mb-4">{course.description}</p>

                      {/* Course Meta */}
                      <div className="space-y-2 mb-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.duration}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t border-slate-200 flex gap-2">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            handleCourseClick(course.title);
                          }}
                          className="flex-1 px-3 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded transition-colors"
                        >
                          Learn More
                        </button>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            handleCourseClick(course.title);
                          }}
                          className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg mb-4">No courses found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Course Enrollment Form */}
      <CourseEnrollmentForm 
        isOpen={isEnrollmentFormOpen} 
        onClose={handleEnrollmentFormClose} 
        courseTitle={selectedCourse || 'Master Course'}
      />
    </Layout>
  );
}
