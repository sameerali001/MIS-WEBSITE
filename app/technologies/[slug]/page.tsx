import { notFound } from "next/navigation";
import Layout from "../../components/Layout";
import { technologyTracks } from "../../../lib/technologyTracks";

type TechnologyPageProps = {
  params: {
    slug: string;
  };
};

export default function TechnologyPage({ params }: TechnologyPageProps) {
  const track = technologyTracks.find((item) => item.slug === params.slug);

  if (!track) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="h-72 lg:h-full">
              <img src={track.image} alt={track.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                Dedicated Track Page
              </p>
              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{track.title}</h1>
              <p className="mt-4 text-base leading-7 text-slate-700">{track.overview}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Duration</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{track.duration}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Mode</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{track.mode}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Level</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{track.level}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Track</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{track.track}</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-slate-900">What You Will Learn</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {track.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
