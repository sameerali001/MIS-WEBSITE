export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Master Institute of Software</h2>
            <p className="text-lg text-slate-600 mb-6">
              Master Institute of Software (MIS) is a leading training and development institute dedicated to providing industry-relevant education in software development, cybersecurity, cloud computing, and emerging technologies.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              With over a decade of experience, we have trained thousands of professionals and prepared them for successful careers in the IT industry.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To empower individuals with cutting-edge technical skills and industry expertise, enabling them to excel in their professional careers.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Highlights</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <span>1000+ Students Trained Annually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👨‍🏫</span>
                <span>Industry Expert Instructors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <span>30+ Comprehensive Courses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <span>95% Student Success Rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <span>Placement Assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <span>Corporate Training Programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
