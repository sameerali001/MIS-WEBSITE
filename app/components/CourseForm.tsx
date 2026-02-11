'use client';

import { useState } from 'react';
import type { Course } from '@/types/course';

interface CourseFormProps {
  course?: Course | null;
  onSave: (course: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function CourseForm({ course, onSave, onCancel, isLoading }: CourseFormProps) {
  const [name, setName] = useState(course?.name || '');
  const [description, setDescription] = useState(course?.description || '');
  const [duration, setDuration] = useState(course?.duration || '3 months');
  const [imageData, setImageData] = useState(course?.imageData || '');
  const [imageFileName, setImageFileName] = useState(course?.imageFileName || '');
  const [brochureContent, setBrochureContent] = useState('');
  const [brochureFileName, setBrochureFileName] = useState(course?.brochureFileName || 'brochure.pdf');
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(course?.imageData || '');

  const handleGeneratePDF = async () => {
    if (!brochureContent.trim()) {
      alert('Please enter brochure content first');
      return;
    }

    try {
      // Generate PDF using simple method
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
          <h1>${name}</h1>
          <h2>Course Details</h2>
          <p><strong>Duration:</strong> ${duration}</p>
          <p><strong>Description:</strong> ${description}</p>
          <h2>Brochure Content</h2>
          <div>${brochureContent.replace(/\n/g, '<br>')}</div>
          <p style="margin-top: 40px; color: #666; font-size: 10px;">
            Generated on ${new Date().toLocaleDateString()}
          </p>
        </div>
      `;
      
      // Print to PDF using browser's print dialog
      const printWindow = window.open('', '', 'height=400,width=600');
      if (printWindow) {
        printWindow.document.write('<html><head><title>' + brochureFileName + '</title></head><body>');
        printWindow.document.write(element.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    } catch (error) {
      alert('Failed to generate PDF');
      console.error(error);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        // Store base64 data
        setBrochureContent('PDF File Uploaded: ' + file.name);
        setFileInput(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setImageData(base64);
        setImageFileName(file.name);
        setImagePreview(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    onSave({
      name,
      description,
      duration,
      imageData,
      imageFileName,
      brochureData: fileInput ? 'file-uploaded' : brochureContent,
      brochureFileName
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Course Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Networking Basics"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Description *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter course description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Duration</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g., 3 months"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">📸 Course Image</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload Course Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            />
            <p className="mt-2 text-sm text-gray-600">Supported formats: JPG, PNG, GIF, WebP</p>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-gray-700 font-semibold mb-2">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Course preview"
                className="w-full h-48 object-cover rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Brochure Management</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Brochure File Name</label>
            <input
              type="text"
              value={brochureFileName}
              onChange={(e) => setBrochureFileName(e.target.value)}
              placeholder="e.g., course-brochure.pdf"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            />
            {fileInput && (
              <p className="mt-2 text-green-600 text-sm">File selected: {fileInput.name}</p>
            )}
          </div>

          <div className="border-t pt-4">
            <label className="block text-gray-700 font-semibold mb-2">Or Enter Brochure Content</label>
            <textarea
              value={brochureContent}
              onChange={(e) => setBrochureContent(e.target.value)}
              placeholder="Enter brochure content here (course overview, modules, benefits, etc.)"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <button
            type="button"
            onClick={handleGeneratePDF}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Preview & Generate PDF
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Save Course'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
