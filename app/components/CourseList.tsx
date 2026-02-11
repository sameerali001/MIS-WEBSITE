'use client';

import type { Course } from '@/types/course';

interface CourseListProps {
  courses: Course[];
  onEdit: (course: Course) => void;
  onDelete: (id: string) => void;
}

export default function CourseList({ courses, onEdit, onDelete }: CourseListProps) {
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Course Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Duration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Last Updated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {courseArray.map((course) => (
            <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {course.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                {course.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {course.duration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {new Date(course.updatedAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                <button
                  onClick={() => onEdit(course)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDownload(course)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => onDelete(course.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
