'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const CourseCards = dynamic(() => import('@/app/components/CourseCards'), {
  loading: () => <div className="px-6 py-8 text-center">Loading courses...</div>
});

interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  imageData: string;
  imageFileName: string;
  brochureData: string;
  brochureFileName: string;
  createdAt: string;
  updatedAt: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();

      if (data.success) {
        const coursesData = Array.isArray(data.data) ? data.data : [];
        setCourses(coursesData);
      }
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = async (course: Course) => {
    try {
      const response = await fetch(`/api/courses/${course.id}/download`);

      if (!response.ok) {
        alert('Failed to download brochure');
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = course.brochureFileName || 'brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download brochure');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => router.push('/home')}
            className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-blue-600"
          >
            <span>🎓</span>
            MIS Career
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Admin Dashboard
            </button>
            <button
              onClick={() => router.push('/login')}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎓 Available Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our comprehensive collection of management information systems courses
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black text-lg"
          />
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          {loading ? (
            <p>Loading courses...</p>
          ) : (
            <p>
              Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          )}
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading courses...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? 'No courses match your search'
                : 'No courses available at the moment'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Course Image */}
                {course.imageData && (
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={course.imageData}
                      alt={course.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Course Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white truncate">
                    {course.name}
                  </h3>
                </div>

                {/* Course Content */}
                <div className="px-6 py-4 space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Description</p>
                    <p className="text-gray-700 text-sm line-clamp-3 mt-1">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Duration</p>
                    <p className="text-gray-700 text-sm mt-1">{course.duration}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Last Updated</p>
                    <p className="text-gray-700 text-xs mt-1">
                      {new Date(course.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Course Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => handleDownload(course)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📥</span>
                    Download Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MIS Career. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
