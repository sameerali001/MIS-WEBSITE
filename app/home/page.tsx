'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            <h1 className="text-2xl font-bold text-gray-900">MIS Career</h1>
          </div>
          <div className="flex gap-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => router.push('/dashboard')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    fetch('/api/auth/logout', { method: 'POST' });
                    router.push('/login');
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to MIS Career
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive management information systems courses
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push('/courses')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Browse Courses
            </button>
            {!isLoggedIn && (
              <button
                onClick={() => router.push('/login')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-bold mb-2">Comprehensive Curriculum</h4>
              <p className="text-gray-600">
                Well-structured courses covering all aspects of management information systems
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-xl font-bold mb-2">Detailed Brochures</h4>
              <p className="text-gray-600">
                Access detailed course brochures and materials in PDF format
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
              <p className="text-gray-600">
                Learn from industry experts with years of experience in MIS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">About Our Courses</h3>
          <p className="text-lg text-gray-600 mb-4">
            MIS Career is dedicated to providing high-quality education in Management Information Systems.
            Our courses are designed to equip students with the skills and knowledge needed for successful careers
            in IT management, business analysis, and enterprise systems.
          </p>
          <p className="text-lg text-gray-600">
            Each course includes comprehensive materials, real-world case studies, and hands-on projects
            to ensure practical learning experience.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-lg mb-8">
            Join thousands of students who have advanced their careers with our courses
          </p>
          <button
            onClick={() => router.push('/login')}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Explore Courses Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MIS Career. All rights reserved.</p>
          <p className="mt-2">Empowering the next generation of MIS professionals</p>
        </div>
      </footer>
    </div>
  );
}
