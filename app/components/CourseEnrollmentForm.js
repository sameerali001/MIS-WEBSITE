'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

export default function CourseEnrollmentForm({ isOpen, onClose, courseTitle = 'Master Course' }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: courseTitle,
    message: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate form
      if (!formData.name.trim()) {
        setError('Full name is required.');
        setLoading(false);
        return;
      }

      if (!formData.email.trim()) {
        setError('Email is required.');
        setLoading(false);
        return;
      }

      if (!formData.phone.trim()) {
        setError('Phone number is required.');
        setLoading(false);
        return;
      }

      if (!formData.city.trim()) {
        setError('City is required.');
        setLoading(false);
        return;
      }

      // Submit form
      const response = await fetch('/api/course-enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to submit form');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        course: courseTitle,
        message: '',
      });

      // Close modal and redirect to enrollment success page after 1.5 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
        const params = new URLSearchParams({
          course: courseTitle,
          email: data.email || formData.email,
          name: formData.name,
        });
        router.push(`/enrollment-success?${params.toString()}`);
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Enroll Now" showFooter={false}>
      <div className="space-y-4" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <div className="text-center py-6">
            <div className="mb-4">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-600 mb-2">Submission Successful!</h3>
            <p className="text-slate-600">We have sent confirmation email to you and our team will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="tel"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                autoComplete="address-level2"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                placeholder="Your city"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Course Interested In</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                disabled
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base bg-slate-100 text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                placeholder="Any additional message or questions..."
              />
            </div>

            {error && <p className="text-xs sm:text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-2.5 text-sm sm:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Enrollment'}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
