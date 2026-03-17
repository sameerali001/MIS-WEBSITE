"use client";

import Link from "next/link";
import { useDeferredValue, useState, useSyncExternalStore } from "react";
import Layout from "../components/Layout";
import CourseEnrollmentForm from "../components/CourseEnrollmentForm";
import { courses, courseCategories, type Course } from "../../lib/courseData";
import { getEnrollmentAccessSnapshot, subscribeEnrollmentAccess } from "../../lib/enrollmentAccess";

const emptyEnrollmentRecords: ReturnType<typeof getEnrollmentAccessSnapshot> = [];

const levelStyles = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-800",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function CoursesCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const enrollmentRecords = useSyncExternalStore(
    subscribeEnrollmentAccess,
    getEnrollmentAccessSnapshot,
    () => emptyEnrollmentRecords
  );
  const unlockedCourses = enrollmentRecords.map((record) => record.courseSlug);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch = `${course.title} ${course.categoryLabel} ${course.shortDescription}`
      .toLowerCase()
      .includes(deferredSearchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const openEnrollment = (course: Course) => {
    setSelectedCourse(course);
    setIsEnrollmentFormOpen(true);
  };

  const closeEnrollment = () => {
    setIsEnrollmentFormOpen(false);
    setSelectedCourse(null);
  };

  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_75%_25%,_rgba(251,191,36,0.20),_transparent_20%),linear-gradient(135deg,_rgba(14,116,144,0.18),_rgba(15,23,42,0.96))]" />
        <div className="absolute -right-16 top-10 h-48 w-48 rounded-full border border-white/10 bg-white/5 blur-2xl" />
        <div className="absolute -bottom-12 left-10 h-44 w-44 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-2xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Career-ready tracks
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Every course now has its own polished page and a learner-only next step.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Browse by domain, compare outcomes, and open a dedicated course experience. Once a learner fills the enrollment form, the course-specific learner brief unlocks automatically.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Tracks</p>
              <p className="mt-3 text-3xl font-semibold">{courses.length}</p>
              <p className="mt-1 text-sm text-slate-300">Specialized programs across cloud, security, AI, web, networking, and DevOps.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Mentors</p>
              <p className="mt-3 text-3xl font-semibold">14+</p>
              <p className="mt-1 text-sm text-slate-300">Working practitioners reviewing labs, projects, and interview readiness.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Learner access</p>
              <p className="mt-3 text-3xl font-semibold">{unlockedCourses.length}</p>
              <p className="mt-1 text-sm text-slate-300">Courses already unlocked on this device after completed enrollment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Find your fit</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Filter by role or learning goal</h2>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by course, tool, or skill"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:bg-white"
            />
            <svg className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35m1.1-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
          </div>

          <div className="space-y-3">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                  selectedCategory === category.id
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{category.icon}</p>
                    <p className="mt-1 text-sm font-semibold">{category.name}</p>
                  </div>
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${category.accent}`} />
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[1.5rem] bg-slate-100 p-5">
            <p className="text-sm font-semibold text-slate-900">Enrollment unlocks a learner brief</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Each course includes a gated next page with roadmap, deliverables, and mentor support details. That page opens only after the enrollment form is completed.
            </p>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Results</p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                {filteredCourses.length} course{filteredCourses.length === 1 ? "" : "s"} matched
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Open a dedicated course page for syllabus, outcomes, pricing, and mentor profile. Use enroll when you want to unlock the learner-specific follow-up page.
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 xl:grid-cols-2">
              {filteredCourses.map((course) => {
                const isUnlocked = unlockedCourses.includes(course.slug);

                return (
                  <article
                    key={course.slug}
                    className="group overflow-hidden rounded-[1.85rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                  >
                    <div className="relative overflow-hidden px-6 py-6 text-white">
                      <div className={`absolute inset-0 bg-gradient-to-br ${courseCategories.find((item) => item.id === course.category)?.accent || "from-sky-600 to-cyan-500"}`} />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_55%)]" />
                      <div className="relative flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">{course.code}</p>
                          <h3 className="mt-3 max-w-xl font-serif text-2xl leading-tight">{course.title}</h3>
                          <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">{course.shortDescription}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                            {course.mode}
                          </span>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[course.level]}`}>
                            {course.level}
                          </span>
                          {isUnlocked ? (
                            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50 backdrop-blur">
                              Unlocked
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 px-6 py-6">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Duration</p>
                          <p className="mt-2 text-lg font-semibold text-slate-900">{course.duration}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Details</p>
                          <p className="mt-2 text-lg font-semibold text-slate-900">Will discuss on call</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Learners</p>
                          <p className="mt-2 text-lg font-semibold text-slate-900">{course.stats.learners}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {course.tools.slice(0, 4).map((tool) => (
                          <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="inline-flex flex-1 items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Explore course page
                        </Link>
                        <button
                          onClick={() => openEnrollment(course)}
                          className="inline-flex flex-1 items-center justify-center rounded-2xl border border-cyan-500 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100"
                        >
                          Enroll to unlock next page
                        </button>
                      </div>

                      {isUnlocked ? (
                        <Link
                          href={`/courses/${course.slug}/welcome`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
                        >
                          Open learner brief
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6l6 6-6 6" />
                          </svg>
                        </Link>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[1.85rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">No courses matched your current filters</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
                Reset the category or search input to see the full catalog again.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CourseEnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={closeEnrollment}
        courseTitle={selectedCourse?.title || "Master Course"}
        courseSlug={selectedCourse?.slug}
        successPath={selectedCourse ? `/courses/${selectedCourse.slug}/welcome` : undefined}
      />
    </Layout>
  );
}
