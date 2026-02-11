'use client';

import type { Course } from '@/types/course';
import { useState } from 'react';

interface CourseCardsProps {
  courses: Course[];
  onEdit: (course: Course) => void;
  onDelete: (id: string) => void;
}

export default function CourseCards({ courses, onEdit, onDelete }: CourseCardsProps) {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (course: Course) => {
    try {
      setDownloading(course.id);
      const response = await fetch(`/api/courses/${course.id}/download`);
      
      if (!response.ok) {
        alert('Failed to download brochure');
        setDownloading(null);
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
      setDownloading(null);
    } catch (error) {
      alert('Failed to download brochure');
      console.error(error);
      setDownloading(null);
    }
  };

  // Ensure courses is an array
  const courseArray = Array.isArray(courses) ? courses : [];

  if (courseArray.length === 0) {
    return (
      <div className="px-6 py-8 text-center text-gray-500">
        No courses found. Create one to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courseArray.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Card Image */}
          {course.imageData && (
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <img
                src={course.imageData}
                alt={course.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}

          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white truncate">
              {course.name}
            </h3>
          </div>

          {/* Card Content */}
          <div className="px-6 py-4 space-y-3">
            {/* Description */}
            <div>
              <p className="text-sm text-gray-600 font-semibold">Description</p>
              <p className="text-gray-700 text-sm line-clamp-3 mt-1">
                {course.description}
              </p>
            </div>

            {/* Duration */}
            <div>
              <p className="text-sm text-gray-600 font-semibold">Duration</p>
              <p className="text-gray-700 text-sm mt-1">
                {course.duration}
              </p>
            </div>

            {/* Last Updated */}
            <div>
              <p className="text-sm text-gray-600 font-semibold">Last Updated</p>
              <p className="text-gray-700 text-xs mt-1">
                {new Date(course.updatedAt).toLocaleDateString()} {new Date(course.updatedAt).toLocaleTimeString()}
              </p>
            </div>
          </div>

          {/* Card Footer - Actions */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-2">
            <button
              onClick={() => handleDownload(course)}
              disabled={downloading === course.id}
              className={`w-full py-2 px-4 rounded font-semibold text-white text-sm transition-colors duration-200 flex items-center justify-center gap-2 ${
                downloading === course.id
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {downloading === course.id ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Downloading...
                </>
              ) : (
                <>
                  <span>📥</span>
                  Download PDF
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onEdit(course)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <span>✏️</span>
                Edit
              </button>
              <button
                onClick={() => {
                  if (confirm(`Are you sure you want to delete "${course.name}"?`)) {
                    onDelete(course.id);
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <span>🗑️</span>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
