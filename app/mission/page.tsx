import Layout from "../components/Layout";

export default function MissionPage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.24),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.18),_transparent_24%),linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.88))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-200">
              Our Mission
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Build skilled professionals ready for real project environments.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              MIS focuses on practical, accountable training where learners gain implementation confidence and career direction.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Mission statement</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              To bridge the gap between academic theory and industry execution with mentorship-led, outcome-driven IT education.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Quality", "High standards in content, delivery, and learner support."],
          ["Innovation", "Frequent updates to tools, labs, and market-relevant workflows."],
          ["Mentorship", "Continuous trainer guidance from onboarding to interview readiness."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">{title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Core values we follow</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Excellence in learning outcomes",
            "Integrity and transparent mentorship",
            "Student-first decision making",
            "Continuous practical improvement",
          ].map((value) => (
            <div key={value} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {value}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
