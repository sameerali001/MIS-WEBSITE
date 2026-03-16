'use client';

import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children, showFooter = true, onSave = () => {} }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with Blur Only */}
      <div
        className="fixed inset-0 backdrop-blur-md z-[9999] transition-all duration-300 animate-fadeIn"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none p-4 overflow-y-auto">
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full my-auto pointer-events-auto animate-slideUp max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
            <h5 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h5>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6">{children}</div>

          {/* Modal Footer */}
          {showFooter && (
            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 font-medium transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={onSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Save changes
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}
