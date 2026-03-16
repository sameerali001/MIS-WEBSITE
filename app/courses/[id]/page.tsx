"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Layout from "../../components/Layout";
import CourseEnrollmentForm from "../../components/CourseEnrollmentForm";
import { courseCategories, getCourseBySlug, getRelatedCourses } from "../../../lib/courseData";
import { getEnrollmentAccessSnapshot, subscribeEnrollmentAccess } from "../../../lib/enrollmentAccess";

const emptyEnrollmentRecords: ReturnType<typeof getEnrollmentAccessSnapshot> = [];

const tabLabels = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "mentors", label: "Mentors" },
  { id: "outcomes", label: "Outcomes" },
];

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const course = getCourseBySlug(params.id);
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);
  const interestSentRef = useRef(false);
  const enrollmentRecords = useSyncExternalStore(
    subscribeEnrollmentAccess,
    getEnrollmentAccessSnapshot,
    () => emptyEnrollmentRecords
  );
  const isUnlocked = course
    ? enrollmentRecords.some((record) => record.courseSlug === course.slug)
    : false;

  useEffect(() => {
    if (!course || interestSentRef.current) {
      return;
    }

    interestSentRef.current = true;

    fetch("/api/course-interest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseName: course.title }),
    }).catch(() => {
      interestSentRef.current = false;
    });
  }, [course]);

  if (!course) {
    return (
      <Layout>
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Course not found</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">The requested course page does not exist.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Go back to the course catalog and choose one of the active learning tracks.
          </p>
          <Link
            href="/courses"
            className="mt-8 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to all courses
          </Link>
        </div>
      </Layout>
    );
  }

  const accent = courseCategories.find((category) => category.id === course.category)?.accent || "from-sky-700 to-cyan-500";
  const relatedCourses = getRelatedCourses(course.slug, course.category);

  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.78),rgba(8,47,73,0.72))]" />
        <div className={`absolute left-0 top-0 h-full w-full bg-gradient-to-r ${accent} opacity-25`} />

        <div className="relative px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-200">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/courses" className="transition hover:text-white">Courses</Link>
            <span>/</span>
            <span className="text-white">{course.title}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                {course.code} • {course.categoryLabel}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
                {course.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-100">
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.duration}</span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.mode}</span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.level}</span>
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.price}</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Rating</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{course.stats.rating}</p>
                  <p className="text-sm text-slate-300">from {course.stats.reviews} reviews</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Learners</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{course.stats.learners}</p>
                  <p className="text-sm text-slate-300">guided through this track</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Sessions</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{course.stats.sessions}</p>
                  <p className="text-sm text-slate-300">live sessions delivered</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Support</p>
                  <p className="mt-2 text-base font-semibold text-white">{course.stats.placementSupport}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => setIsEnrollmentFormOpen(true)}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Enroll and unlock learner page
                </button>
                {isUnlocked ? (
                  <Link
                    href={`/courses/${course.slug}/welcome`}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Open learner brief
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "overview" ? (
            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Course overview</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">A more focused learning path, built around execution.</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{course.overview}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Cohort format</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">{course.cohort}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{course.mentorNote}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Certification</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">{course.certification}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    This track includes guided preparation, revision structure, and output review aligned with the target credential.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "curriculum" ? (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Syllabus</p>
                <div className="mt-5 space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Hands-on projects</p>
                <div className="mt-5 space-y-4">
                  {course.projects.map((project) => (
                    <div key={project} className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-base font-semibold text-slate-900">{project}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Core tools</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {activeTab === "mentors" ? (
            <div className="grid gap-6 md:grid-cols-2">
              {course.instructors.map((instructor) => (
                <div key={instructor.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-lg font-semibold text-white`}>
                      {instructor.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-900">{instructor.name}</p>
                      <p className="text-sm text-slate-500">{instructor.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {instructor.experience} mentoring learners through project reviews, career guidance, and structured lab walkthroughs.
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {activeTab === "outcomes" ? (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What you will be able to do</p>
                <div className="mt-5 space-y-4">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-cyan-500" />
                      <p className="text-sm leading-7 text-slate-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Enrollment unlock</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{course.learnerAccess.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{course.learnerAccess.summary}</p>
                <div className="mt-6 space-y-3">
                  {course.learnerAccess.deliverables.map((item) => (
                    <div key={item} className="rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Enrollment status</p>
            {isUnlocked ? (
              <>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Learner brief unlocked</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This device has already completed enrollment for this course. You can open the course-specific learner page directly.
                </p>
                <Link
                  href={`/courses/${course.slug}/welcome`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Open learner page
                </Link>
              </>
            ) : (
              <>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Fill the enrollment form to continue</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The learner-specific page stays locked until the enrollment form is submitted. After that, the next page opens automatically for this course.
                </p>
                <button
                  onClick={() => setIsEnrollmentFormOpen(true)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Fill enrollment form
                </button>
              </>
            )}
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Related tracks</p>
            <div className="mt-5 space-y-4">
              {relatedCourses.map((relatedCourse) => (
                <Link
                  key={relatedCourse.slug}
                  href={`/courses/${relatedCourse.slug}`}
                  className="block rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <p className="text-base font-semibold text-slate-900">{relatedCourse.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{relatedCourse.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CourseEnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={() => setIsEnrollmentFormOpen(false)}
        courseTitle={course.title}
        courseSlug={course.slug}
        successPath={`/courses/${course.slug}/welcome`}
      />
    </Layout>
  );
}
