export default function OnlinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Online Mode</h1>
        <div className="prose rounded-lg bg-white p-8 shadow-lg">
          <p className="text-lg text-slate-600">
            Learn at your own pace with our comprehensive online courses.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Features</h2>
          <ul className="text-slate-600 space-y-2">
            <li>✓ Live interactive sessions</li>
            <li>✓ Recorded lectures available anytime</li>
            <li>✓ Flexible schedule</li>
            <li>✓ 24/7 doubt clearing support</li>
            <li>✓ Certificate upon completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
