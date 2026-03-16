'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getEnrollmentAccess } from '../../lib/enrollmentAccess';

export default function EnrollmentSuccessContent() {
  const searchParams = useSearchParams();
  const courseName = searchParams.get('course') || 'the course';
  const slug = searchParams.get('slug') || '';
  const email = searchParams.get('email') || '';
  const name = searchParams.get('name') || 'Student';
  const learnerAccessHref = slug && getEnrollmentAccess(slug) ? `/courses/${slug}/welcome` : '/courses';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Enrollment Successful!
            </h1>
            <p className="text-xl text-slate-600">
              Thank you for enrolling, <span className="font-semibold text-blue-600">{name}</span>!
            </p>
          </div>

          {/* Course Details */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">Enrolled Course</p>
            <h2 className="text-2xl font-bold text-slate-900">{courseName}</h2>
          </div>

          {/* Confirmation Message */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 mb-8 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              What&apos;s Next?
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-semibold">Confirmation Email</p>
                  <p className="text-sm">We&apos;ve sent a confirmation email to <span className="font-medium text-blue-600">{email}</span></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-semibold">Welcome to MIS</p>
                  <p className="text-sm">Our admissions team will contact you within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-semibold">Course Access</p>
                  <p className="text-sm">You&apos;ll receive course materials and login details via email</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Start Learning</p>
              <p className="text-lg font-bold text-slate-900">Within 24 Hours</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Support</p>
              <p className="text-lg font-bold text-slate-900">24/7 Available</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Contact Us</p>
              <p className="text-lg font-bold text-slate-900">+91 9876543210</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-8">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-amber-900">📧 Questions?</span> Email us at <span className="font-medium text-blue-600">support@mis.edu.in</span> or call <span className="font-medium">+91-9876543210</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={learnerAccessHref} className="flex-1">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl">
                {slug && learnerAccessHref !== '/courses' ? 'Open Learner Page' : 'View More Courses'}
              </button>
            </Link>
            <Link href="/" className="flex-1">
              <button className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-lg transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
            <p className="text-slate-600 font-medium">Student Success Rate</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-green-600 mb-2">4.8★</p>
            <p className="text-slate-600 font-medium">Average Rating</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-purple-600 mb-2">30+</p>
            <p className="text-slate-600 font-medium">Industry Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
