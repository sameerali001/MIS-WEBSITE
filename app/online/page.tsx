"use client";

import Link from "next/link";
import Layout from "../components/Layout";

const features = [
  "Live mentor-led classes with Q&A support",
  "Session recordings for revision anytime",
  "Flexible schedules suitable for working learners",
  "Doubt-clearing and assignment guidance online",
  "Structured assessment and certificate path",
];

export default function OnlinePage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.18),_transparent_24%),linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.88))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Learning Mode
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">Online Mode</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Learn from anywhere with structured live sessions, recordings, and guided progression.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Best suited for</p>
            <p className="mt-3 text-xl font-semibold">Learners who need flexibility without losing mentor support.</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Great for students and professionals balancing college, job, and upskilling timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Online highlights</p>
          <div className="mt-5 space-y-3">
            {features.map((feature, index) => (
              <div key={feature} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Actions</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Pick your track and proceed.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Learn More takes you to course-specific detail pages. Enroll activates gated learner pages after form completion.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/courses" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Learn More Courses
            </Link>
            <Link href="/courses" className="inline-flex items-center justify-center rounded-2xl border border-blue-300 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100">
              Enroll Now
            </Link>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
