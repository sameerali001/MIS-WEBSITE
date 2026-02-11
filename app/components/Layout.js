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

      <main className="flex-1 max-w-[1200px] mx-auto px-2 py-10">
        {children}
      </main>



      <footer className="py-6 text-center text-sm text-slate-500">
        © MIS Institute — All rights reserved
      </footer>

      <a
        href="https://wa.me/8279897142"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp MIS Institute"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.28 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.62.23-1.15.16-1.28-.07-.13-.25-.2-.52-.34M16.01 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.72 1.42 5.35L5 27l5.88-1.54c1.58.86 3.35 1.32 5.13 1.32 5.89 0 10.67-4.78 10.67-10.67 0-5.89-4.78-10.67-10.67-10.67m0 19.57c-1.63 0-3.23-.44-4.63-1.26l-.33-.2-3.48.91.93-3.39-.22-.35a8.77 8.77 0 0 1-1.39-4.76c0-4.83 3.93-8.76 8.76-8.76 4.83 0 8.76 3.93 8.76 8.76 0 4.83-3.93 8.76-8.76 8.76" />
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
