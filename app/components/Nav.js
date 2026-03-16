'use client';

import Link from 'next/link';
import { useState } from 'react';
import CoursesCatalog from './CoursesCatalog';
import CourseEnrollmentForm from './CourseEnrollmentForm';

export default function Nav() {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <nav className="sticky top-0 z-[100] bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center gap-0">
            <div className="text-3xl font-bold text-blue-600 leading-none">MIS</div>
            {/* <div className="text-xs font-semibold text-slate-700 tracking-wide text-center">MASTER IN NETWORK & SOFTWARE TRAINING</div> */}
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {/* All Courses - Click Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleCoursesDropdown}
              className="relative px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg"
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
            <button className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors">
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

          {/* About Us */}
          <Link href="/about" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
            About Us
          </Link>

          {/* Online Mode */}
          <Link href="/online" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Online
          </Link>

          {/* Offline Mode */}
          <Link href="/offline" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Offline
          </Link>

          {/* Schedule */}
          <Link href="/schedule" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Schedule
          </Link>

          {/* Contact */}
          <Link href="/contact" className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Search and Login */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400 w-48"
            />
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Profile Icon */}
          <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold transition-colors">
            U
          </button>

          {/* Enroll Button */}
          <button
            onClick={handleEnrollClick}
            className="hidden sm:block px-6 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full font-semibold transition-colors"
          >
            Enroll
          </button>
        </div>
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
