import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-lg font-bold text-blue-700">
          <Link href="/">MIS Institute</Link>
        </div>
        <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <li>
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-700">
              Courses
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
