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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Faculty</h1>
        <p className="text-xl text-slate-600 mb-12">
          Expert instructors from leading tech companies with years of industry experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.designation}</p>
              <p className="text-slate-600 text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Faculty?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <span>Advanced degrees from top universities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <span>10+ years of industry experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <span>Certified & award-winning professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <span>Continuously updated with latest tech</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <span>Dedicated mentorship approach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <span>Track record of student success</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
