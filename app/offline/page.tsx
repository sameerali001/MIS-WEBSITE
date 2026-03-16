export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Offline Mode</h1>
        <div className="prose rounded-lg bg-white p-8 shadow-lg">
          <p className="text-lg text-slate-600">
            Immersive classroom learning experience with hands-on training.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Features</h2>
          <ul className="text-slate-600 space-y-2">
            <li>✓ Classroom-based training</li>
            <li>✓ Direct mentorship from industry experts</li>
            <li>✓ Hands-on lab sessions</li>
            <li>✓ Group projects and collaboration</li>
            <li>✓ Certificate and placement assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
