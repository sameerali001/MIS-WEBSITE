"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CourseEnrollmentForm from "./CourseEnrollmentForm";
import { courses, courseCategories, type Course } from "../../lib/courseData";
import { hasEnrollmentAccess } from "../../lib/enrollmentAccess";

export default function CoursesCatalog({ onNavigateAway }: { onNavigateAway?: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const router = useRouter();

  const filteredCourses = useMemo(
    () => (selectedCategory === "all" ? courses : courses.filter((course) => course.category === selectedCategory)),
    [selectedCategory]
  );

  const closeEnrollment = () => {
    setIsEnrollmentFormOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setIsEnrollmentFormOpen(true);
  };

  return (
    <div className="flex w-full h-full gap-0">
      <div className="w-52 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 overflow-y-auto m-0 border-r border-slate-700/60">
        <h3 className="text-xs font-bold tracking-[0.22em] uppercase text-cyan-300 mb-4">Categories</h3>
        <nav className="space-y-1.5">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 bg-white p-5 overflow-y-auto max-h-[560px] m-0">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">
              {courseCategories.find((category) => category.id === selectedCategory)?.name || "All Courses"}
            </h2>
            <p className="text-slate-600 text-xs">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} available
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/courses");
              setTimeout(() => onNavigateAway?.(), 0);
            }}
            className="text-xs font-semibold text-cyan-700 hover:text-cyan-800"
          >
            Open full catalog
          </button>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {filteredCourses.map((course) => {
              const unlocked = hasEnrollmentAccess(course.slug);

              return (
                <div
                  key={course.slug}
                  className="bg-slate-50 hover:bg-white p-4 rounded-xl transition-all duration-200 group border border-slate-200 hover:border-cyan-300 hover:shadow-md h-full flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-500">{course.code}</p>
                    {unlocked ? (
                      <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Unlocked</span>
                    ) : null}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-cyan-700 transition-colors mb-3">
                    {course.title}
                  </h4>

                  <div className="space-y-1 text-xs text-slate-600 mb-4 flex-1">
                    <p>{course.duration} • {course.mode}</p>
                    <p className="font-medium text-slate-700">{course.level} • {course.categoryLabel}</p>
                    <p className="line-clamp-2 text-slate-500">{course.shortDescription}</p>
                  </div>

                  <div className="flex gap-2 mt-auto pt-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      onClick={() => setTimeout(() => onNavigateAway?.(), 0)}
                      className="flex-1 px-2 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <button
                      onClick={() => handleEnroll(course)}
                      className="flex-1 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-slate-600 text-xs font-medium">No courses found</p>
          </div>
        )}
      </div>

      {isEnrollmentFormOpen && selectedCourse ? (
        <CourseEnrollmentForm
          isOpen={isEnrollmentFormOpen}
          onClose={closeEnrollment}
          courseTitle={selectedCourse.title}
          courseSlug={selectedCourse.slug}
          successPath={`/courses/${selectedCourse.slug}/welcome`}
        />
      ) : null}
    </div>
  );
}
