export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Course Schedule</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Online Classes</h2>
              <table className="w-full text-slate-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Monday - Friday</td>
                    <td className="py-3">6:00 PM - 8:00 PM IST</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Saturday</td>
                    <td className="py-3">9:00 AM - 1:00 PM IST</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Sunday</td>
                    <td className="py-3">10:00 AM - 2:00 PM IST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Offline Classes</h2>
              <table className="w-full text-slate-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Monday - Friday</td>
                    <td className="py-3">10:00 AM - 1:00 PM & 2:00 PM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Saturday</td>
                    <td className="py-3">9:00 AM - 1:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
