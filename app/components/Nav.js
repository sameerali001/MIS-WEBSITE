'use client';

import Link from 'next/link';
import { useState } from 'react';
import CoursesCatalog from './CoursesCatalog';
import CourseEnrollmentForm from './CourseEnrollmentForm';

export default function Nav() {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const closeCoursesDropdown = () => {
    setIsCoursesDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white shadow-md">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center gap-4 xl:gap-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex flex-col items-center gap-0">
            <div className="text-3xl font-bold text-blue-600 leading-none">MIS</div>
            {/* <div className="text-xs font-semibold text-slate-700 tracking-wide text-center">MASTER IN NETWORK & SOFTWARE TRAINING</div> */}
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden xl:flex min-w-0 flex-1 items-center justify-center gap-0.5 2xl:gap-1">
          {/* All Courses - Click Dropdown */}
          <div className="relative">
            <button
              onClick={toggleCoursesDropdown}
              className="relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg 2xl:px-6"
              aria-label="Toggle courses catalog"
            >
              All Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            {/* Courses Catalog Dropdown - Click State */}
            {isCoursesDropdownOpen && (
              <>
                {/* Backdrop to close dropdown */}
                <div 
                  className="fixed inset-0 z-[90]" 
                  onClick={closeCoursesDropdown}
                />
                <div className="absolute top-full left-0 pt-2 z-[95]">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden w-[900px] max-h-[650px] overflow-y-auto">
                    <CoursesCatalog onNavigateAway={closeCoursesDropdown} />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors 2xl:px-4">
              About Master
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 py-2">
              <Link href="/about" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm">About Us</Link>
              <Link href="/mission" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm">Our Mission</Link>
              <Link href="/faculty" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm">Faculty</Link>
            </div>
          </div>

          {/* Online Mode */}
          <Link href="/online" className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors 2xl:px-4">
            Online
          </Link>

          {/* Offline Mode */}
          <Link href="/offline" className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors 2xl:px-4">
            Offline
          </Link>

          {/* Schedule */}
          <Link href="/schedule" className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors 2xl:px-4">
            Schedule
          </Link>

          {/* Franchise */}
          <Link href="/franchise" className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors 2xl:px-4">
            Franchise
          </Link>

          {/* Contact */}
          <Link href="/contact" className="px-3 py-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors 2xl:px-4">
            Contact Us
          </Link>
        </div>

        {/* Search and Login */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="tel:+919318306116"
            className="hidden lg:inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            +91 9318306116
          </a>

          <div className="hidden xl:flex items-center bg-slate-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-40 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none 2xl:w-52"
            />
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Profile Icon */}
          <button className="hidden sm:flex w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full items-center justify-center font-bold transition-colors">
            U
          </button>

          {/* Enroll Button */}
          <button
            onClick={handleEnrollClick}
            className="hidden lg:block px-5 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full font-semibold transition-colors"
          >
            Enroll
          </button>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex xl:hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[98] xl:hidden transition ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <button
          onClick={closeMobileMenu}
          aria-label="Close menu backdrop"
          className={`absolute inset-0 bg-slate-950/35 transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[86vw] max-w-sm border-l border-slate-200 bg-white px-4 pb-6 pt-5 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <p className="text-base font-bold text-slate-900">Menu</p>
            <button
              onClick={closeMobileMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700"
              aria-label="Close menu"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid gap-2">
            <Link onClick={closeMobileMenu} href="/courses" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
              All Courses
            </Link>
            <Link onClick={closeMobileMenu} href="/about" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              About Us
            </Link>
            <Link onClick={closeMobileMenu} href="/mission" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Our Mission
            </Link>
            <Link onClick={closeMobileMenu} href="/faculty" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Faculty
            </Link>
            <Link onClick={closeMobileMenu} href="/online" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Online
            </Link>
            <Link onClick={closeMobileMenu} href="/offline" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Offline
            </Link>
            <Link onClick={closeMobileMenu} href="/schedule" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Schedule
            </Link>
            <Link onClick={closeMobileMenu} href="/franchise" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Franchise
            </Link>
            <Link onClick={closeMobileMenu} href="/contact" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Contact Us
            </Link>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="tel:+919318306116"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              +91 9318306116
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                handleEnrollClick();
              }}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Enroll
            </button>
          </div>
        </aside>
      </div>

      {/* Course Enrollment Form */}
      <CourseEnrollmentForm 
        isOpen={isModalOpen} 
        onClose={handleModalClose}
        courseTitle="Master Course"
        successPath="/courses"
      />
    </nav>
  );
}
