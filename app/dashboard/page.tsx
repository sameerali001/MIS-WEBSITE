'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { Course } from '@/types/course';

const CourseForm = dynamic(() => import('@/app/components/CourseForm'), { loading: () => <div>Loading form...</div> });
const CourseList = dynamic(() => import('@/app/components/CourseList'), { loading: () => <div className="px-6 py-8 text-center">Loading courses...</div> });
const CourseCards = dynamic(() => import('@/app/components/CourseCards'), { loading: () => <div className="px-6 py-8 text-center">Loading courses...</div> });

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'cards'>('cards');
  const router = useRouter();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = useCallback(async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();

      if (!data.success) {
        if (response.status === 401) {
          router.push('/login');
        } else {
          setError('Failed to fetch courses');
        }
        return;
      }

      // Ensure data.data is an array
      const coursesData = Array.isArray(data.data) ? data.data : [];
      setCourses(coursesData);
      setError('');
    } catch (err) {
      setError('Failed to fetch courses');
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleSaveCourse = async (courseData: any) => {
    try {
      setLoading(true);
      const method = editingCourse ? 'PUT' : 'POST';
      const url = editingCourse 
        ? `/api/courses?id=${editingCourse.id}`
        : '/api/courses';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData)
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to save course');
        return;
      }

      fetchCourses();
      setShowForm(false);
      setEditingCourse(null);
    } catch (err) {
      setError('Failed to save course');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      const response = await fetch(`/api/courses?id=${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (!data.success) {
        setError('Failed to delete course');
        return;
      }

      fetchCourses();
    } catch (err) {
      setError('Failed to delete course');
    }
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">MIS Career Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage courses and brochures</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Add Course Button */}
        {!showForm && (
          <div className="mb-6">
            <button
              onClick={() => {
                setEditingCourse(null);
                setShowForm(true);
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              + Add New Course
            </button>
          </div>
        )}

        {/* Course Form */}
        {showForm && (
          <div className="mb-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              {editingCourse ? 'Edit Course' : 'Add New Course'}
            </h2>
            <CourseForm
              course={editingCourse}
              onSave={handleSaveCourse}
              onCancel={() => {
                setShowForm(false);
                setEditingCourse(null);
              }}
              isLoading={loading}
            />
          </div>
        )}

        {/* Courses List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Courses ({courses.length})</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎨 Cards
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                📋 List
              </button>
            </div>
          </div>
          {loading && !showForm ? (
            <div className="px-6 py-8 text-center text-gray-500">Loading...</div>
          ) : courses.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              No courses found. Create one to get started!
            </div>
          ) : viewMode === 'cards' ? (
            <CourseCards
              courses={courses}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
            />
          ) : (
            <CourseList
              courses={courses}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
            />
          )}
        </div>
      </main>
    </div>
  );
}
