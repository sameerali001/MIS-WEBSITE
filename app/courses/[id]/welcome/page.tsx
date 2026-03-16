"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Layout from "../../../components/Layout";
import { getCourseBySlug } from "../../../../lib/courseData";
import { getEnrollmentAccess, EnrollmentRecord } from "../../../../lib/enrollmentAccess";

export default function CourseWelcomePage() {
  const params = useParams<{ id: string }>();
  const course = getCourseBySlug(params.id);
  const [enrollment, setEnrollment] = useState<EnrollmentRecord | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (course) {
      setEnrollment(getEnrollmentAccess(course.slug));
    }
  }, [course]);

  if (!mounted) {
    return (
      <Layout>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-slate-500">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
          <h1 className="text-4xl font-semibold text-slate-900">Course not found</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The learner page could not be opened because this course does not exist.
          </p>
          <Link href="/courses" className="mt-8 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Back to courses
          </Link>
        </div>
      </Layout>
    );
  }

  if (!enrollment) {
    return (
      <Layout>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Enrollment required</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">This page opens only after the enrollment form is submitted.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Fill the enrollment form on the course page first. Once you submit it, this learner page unlocks automatically on this device.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Go to course page
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Browse all courses
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.16),_transparent_22%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(3,7,18,0.92))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Learner access unlocked
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Welcome, {enrollment.name}. Your {course.title} learner brief is ready.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">
              {course.learnerAccess.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-100">
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.duration}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.mode}</span>
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur">{course.certification}</span>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Enrollment record</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Learner</p>
                <p className="mt-2 text-lg font-semibold text-white">{enrollment.name}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Email</p>
                <p className="mt-2 text-lg font-semibold text-white break-all">{enrollment.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Course</p>
                <p className="mt-2 text-lg font-semibold text-white">{course.code}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Activated</p>
                <p className="mt-2 text-lg font-semibold text-white">{new Date(enrollment.enrolledAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Your roadmap</p>
            <div className="mt-6 space-y-4">
              {course.learnerAccess.roadmap.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What you receive</p>
              <div className="mt-5 space-y-3">
                {course.learnerAccess.deliverables.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Support channels</p>
              <div className="mt-5 space-y-3">
                {course.learnerAccess.support.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Next action</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Start with the first checkpoint this week.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Review the roadmap, attend the opening session, and keep this page as your quick reference for the first milestones.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href={`/courses/${course.slug}`} className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Revisit course page
              </Link>
              <Link href="/courses" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Explore more courses
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
}