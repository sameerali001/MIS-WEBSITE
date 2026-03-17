import Layout from "../components/Layout";

const onlineSchedule = [
  ["Monday - Friday", "6:00 PM - 8:00 PM IST"],
  ["Saturday", "9:00 AM - 1:00 PM IST"],
  ["Sunday", "10:00 AM - 2:00 PM IST"],
];

const offlineSchedule = [
  ["Monday - Friday", "10:00 AM - 1:00 PM & 2:00 PM - 5:00 PM"],
  ["Saturday", "9:00 AM - 1:00 PM"],
];

export default function SchedulePage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_24%),linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.88))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-200">
              Schedule
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">Course timing for online and offline batches.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Select the mode that fits your routine and coordinate your learning roadmap with our counsellors.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Note</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Batch timings may vary by course. Final slot confirmation is shared during enrollment.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Online Classes</h2>
          <div className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50">
            {onlineSchedule.map(([day, time]) => (
              <div key={day} className="grid gap-2 px-4 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-sm font-semibold text-slate-800">{day}</p>
                <p className="text-sm text-slate-600">{time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Offline Classes</h2>
          <div className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50">
            {offlineSchedule.map(([day, time]) => (
              <div key={day} className="grid gap-2 px-4 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-sm font-semibold text-slate-800">{day}</p>
                <p className="text-sm text-slate-600">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
