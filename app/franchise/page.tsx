import Link from "next/link";
import Layout from "../components/Layout";

const benefits = [
  "Strong MIS brand and training framework",
  "Complete onboarding for academic and operations",
  "Marketing and admission process support",
  "Faculty training and content delivery guidance",
  "Technology platform and reporting assistance",
  "Growth plan with regional expansion support",
];

export default function FranchisePage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_24%),linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.88))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Franchise
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Start your MIS training center in your city.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Partner with us to deliver high-demand IT education programs with operational, academic, and branding support.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Ideal partner profile</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Education entrepreneurs, coaching operators, and institutions looking to expand into job-oriented technology training.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What you get</h2>
          <div className="mt-5 space-y-3">
            {benefits.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Apply</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Discuss franchise opportunities.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Share your city, available infrastructure, and expected timeline. Our team will guide you through the next steps.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Franchise Team
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-300 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              View Programs
            </Link>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
