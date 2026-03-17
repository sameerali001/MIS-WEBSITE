import Link from "next/link";
import Layout from "../components/Layout";

const stats = [
  { value: "1,000+", label: "Learners each year" },
  { value: "95%", label: "Placement support outcomes" },
  { value: "30+", label: "Career-focused tracks" },
  { value: "10+", label: "Years of training delivery" },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.20),_transparent_30%),radial-gradient(circle_at_82%_20%,_rgba(59,130,246,0.18),_transparent_24%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.9))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
              About MIS
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Practical IT training designed for real hiring outcomes.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              We combine structured curriculum, mentor-led delivery, and project-first execution so learners can move from basics to placement-ready capability.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Focus</p>
            <p className="mt-3 text-xl font-semibold">Career transition and role-specific upskilling.</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Programs are aligned to cloud, cyber security, AI, software, networking, and interview preparedness.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What makes MIS different</h2>
          <div className="mt-5 space-y-3">
            {[
              "Mentors with active industry exposure",
              "Project and lab-driven implementation",
              "Certification-mapped course pathways",
              "Mock interview and career readiness support",
            ].map((point, index) => (
              <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Next step</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Explore the full catalog or connect with our team to choose a track based on your current background and target role.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-300 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
