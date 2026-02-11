'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Login failed');
        
        // Check if it's a MongoDB connection error
        if (data.error?.includes('ECONNREFUSED') || data.error?.includes('connection')) {
          setError('MongoDB connection error. Please ensure MongoDB is running and DATABASE_URL is correct in .env.local');
        }
        setLoading(false);
        return;
      }

      setMessage('Login successful! Redirecting...');
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Network error. Please check your connection and MongoDB status.');
      setLoading(false);
    }
  }, [username, password, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Home Button */}
      <button
        onClick={() => router.push('/home')}
        className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors"
      >
        ← Home
      </button>

      {/* Courses Button */}
      <button
        onClick={() => router.push('/courses')}
        className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
      >
        Browse Courses →
      </button>

      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">MIS Career</h1>
        <p className="text-center text-gray-500 mb-6">Admin Dashboard Login</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
              <strong>Error:</strong> {error}
              {error.includes('ECONNREFUSED') && (
                <div className="mt-2 text-xs border-t border-red-400 pt-2">
                  MongoDB is not running. You can still login with fallback storage (data won't persist after restart).
                  <br/>
                  To use MongoDB: Install it from mongodb.com and start the service.
                </div>
              )}
            </div>
          )}

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm">
              {message}
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600 font-semibold mb-2">Demo Credentials:</p>
          <p className="text-sm text-gray-600">Username: <strong>admin</strong></p>
          <p className="text-sm text-gray-600">Password: <strong>admin123</strong></p>
          <p className="text-xs text-gray-500 mt-3 border-t pt-3">
            <strong>Note:</strong> Make sure MongoDB is running and DATABASE_URL is set in .env.local
          </p>
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
