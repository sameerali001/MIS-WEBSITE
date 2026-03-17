import Layout from "../components/Layout";

export default function FacultyPage() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Director & Cloud Computing Expert",
      expertise: "Cloud Architecture, AWS, Azure",
      image: "👨‍💼"
    },
    {
      name: "Ms. Priya Singh",
      designation: "Cybersecurity Lead Instructor",
      expertise: "Ethical Hacking, Network Security, CISSP",
      image: "👩‍💼"
    },
    {
      name: "Amit Sharma",
      designation: "Full Stack Development Instructor",
      expertise: "React, Node.js, Python, Web Development",
      image: "👨‍💼"
    },
    {
      name: "Dr. Neha Patel",
      designation: "AI & Machine Learning Specialist",
      expertise: "Deep Learning, TensorFlow, Data Science",
      image: "👩‍💼"
    },
    {
      name: "Vikram Desai",
      designation: "DevOps & Infrastructure Expert",
      expertise: "Docker, Kubernetes, CI/CD, Linux",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      designation: "Blockchain Developer",
      expertise: "Solidity, Smart Contracts, Web3",
      image: "👩‍💼"
    }
  ];

  return (
    <Layout>
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.35)] sm:px-8 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.22),_transparent_30%),radial-gradient(circle_at_78%_20%,_rgba(59,130,246,0.20),_transparent_24%),linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.88))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-rose-200">
              Faculty Team
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Mentors with industry depth and practical teaching style.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Trainers combine enterprise project exposure with step-by-step pedagogy so learners can execute confidently.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-rose-200">Delivery style</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Live mentoring, practical labs, assignment reviews, and career prep integrated into every track.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {faculty.map((member, index) => (
          <div key={index} className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-5xl">{member.image}</div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{member.name}</h2>
            <p className="mt-2 text-sm font-semibold text-blue-700">{member.designation}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{member.expertise}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Why learners value our trainers</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Real implementation guidance",
            "Structured doubt-clearing support",
            "Updated tools and production workflows",
            "Interview and portfolio mentoring",
          ].map((point) => (
            <div key={point} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
