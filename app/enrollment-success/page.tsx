import { Suspense } from 'react';
import EnrollmentSuccessContent from './EnrollmentSuccessContent';

export const metadata = {
  title: 'Enrollment Successful - MIS Academy',
  description: 'Your enrollment has been successfully processed',
};

export default function EnrollmentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700 font-semibold">Loading your enrollment details...</p>
        </div>
      </div>
    }>
      <EnrollmentSuccessContent />
    </Suspense>
  );
}
