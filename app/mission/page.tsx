export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Our Mission</h1>
        <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mission Statement</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To deliver world-class technical education that bridges the gap between academic knowledge and industry requirements, ensuring every student develops the skills, confidence, and expertise needed to succeed in a rapidly evolving technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Quality</h3>
              <p className="text-slate-600">
                We maintain the highest standards in curriculum design, instructor expertise, and learning outcomes.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">💡 Innovation</h3>
              <p className="text-slate-600">
                We constantly update our courses to reflect the latest industry trends and emerging technologies.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🤝 Support</h3>
              <p className="text-slate-600">
                We provide ongoing mentorship and career guidance to ensure student success beyond the classroom.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span><strong>Excellence:</strong> Striving for the highest quality in everything we do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span><strong>Integrity:</strong> Maintaining ethical standards and transparency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span><strong>Student-Centric:</strong> Putting learner success at the forefront</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span><strong>Innovation:</strong> Embracing new technologies and methodologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
