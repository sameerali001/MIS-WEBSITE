"use client";
import Nav from './Nav';
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Nav />
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">MIS Institute — Practical IT training</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Hands-on courses in Networking, Hardware Repair and Cyber Security — industry-focused, placement oriented.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#courses" className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-semibold">
              View Courses
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5">
              Request Call
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

      <footer className="py-6 text-center text-sm text-slate-500">
        © MIS Institute — All rights reserved
      </footer>
    </div>
  );
}
