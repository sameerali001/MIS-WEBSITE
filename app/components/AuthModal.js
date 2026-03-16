'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

export default function AuthModal({ isOpen, onClose }) {
  const router = useRouter();
  const [mode, setMode] = useState('login');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Signup state
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    password: '',
    confirmPassword: '',
  });
  const [signupError, setSignupError] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);

  const handleKeyDown = (event) => {
    // Prevent Enter key from submitting the form
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const result = await signIn('credentials', {
        email: loginEmail,
        password: loginPassword,
        redirect: false,
      });

      if (result?.error) {
        setLoginError('Invalid email or password.');
        setLoginLoading(false);
        return;
      }

      onClose();
      router.push('/courses');
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
      setLoginLoading(false);
    }
  };

  const handleSignupChange = (field, value) => {
    setSignupForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupError('');

    if (!signupForm.name.trim()) {
      setSignupError('Full name is required.');
      return;
    }

    if (!signupForm.email.trim()) {
      setSignupError('Email is required.');
      return;
    }

    if (!signupForm.phone.trim()) {
      setSignupError('Phone number is required.');
      return;
    }

    if (!signupForm.city.trim()) {
      setSignupError('City is required.');
      return;
    }

    if (!signupForm.password) {
      setSignupError('Password is required.');
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setSignupError('Passwords do not match.');
      return;
    }

    if (signupForm.password.length < 6) {
      setSignupError('Password must be at least 6 characters long.');
      return;
    }

    setSignupLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: JSON.stringify({
          name: signupForm.name.trim(),
          email: signupForm.email.trim(),
          phone: signupForm.phone.trim(),
          city: signupForm.city.trim(),
          password: signupForm.password,
        }),
      });

      const data = await response.json().catch(() => ({
        error: 'Failed to parse server response',
      }));

      if (!response.ok) {
        throw new Error(data?.error || `Server error: ${response.status}`);
      }

      if (!data.user || !data.user.email) {
        throw new Error('Invalid response from server');
      }

      const result = await signIn('credentials', {
        email: signupForm.email.trim(),
        password: signupForm.password,
        redirect: false,
      });

      if (result?.error) {
        console.warn('Auto-login after signup failed:', result.error);
        setSignupError('Signup succeeded! Please log in with your credentials.');
        setSignupLoading(false);
        return;
      }

      onClose();
      router.push('/courses');
    } catch (error) {
      console.error('Signup error:', error);
      setSignupError(
        error.message || 'An error occurred during signup. Please try again.'
      );
      setSignupLoading(false);
    }
  };

  const handleClose = () => {
    setLoginEmail('');
    setLoginPassword('');
    setLoginError('');
    setSignupForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      password: '',
      confirmPassword: '',
    });
    setSignupError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} showFooter={false} title="">
      <div className="w-full">
        {/* Toggle buttons */}
        <div className="flex gap-2 mb-4 sm:mb-6">
          <button
            onClick={() => {
              setMode('login');
              setLoginError('');
            }}
            className={`flex-1 py-2 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
              mode === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setMode('signup');
              setSignupError('');
            }}
            className={`flex-1 py-2 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
              mode === 'signup'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {mode === 'login' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Login</h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">Sign in to view course details.</p>
            <form onSubmit={handleLoginSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              {loginError ? <p className="text-xs sm:text-sm text-red-600">{loginError}</p> : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-2.5 text-sm sm:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loginLoading}
              >
                {loginLoading ? 'Signing in...' : 'Login'}
              </button>
            </form>
          </div>
        )}

        {/* Signup Form */}
        {mode === 'signup' && (
          <div className="animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Sign Up</h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">Create your account to view course details.</p>
            <form onSubmit={handleSignupSubmit} className="space-y-2.5 sm:space-y-3">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={signupForm.name}
                  onChange={(e) => handleSignupChange('name', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={signupForm.email}
                  onChange={(e) => handleSignupChange('email', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={signupForm.phone}
                  onChange={(e) => handleSignupChange('phone', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">City</label>
                <input
                  type="text"
                  value={signupForm.city}
                  onChange={(e) => handleSignupChange('city', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  value={signupForm.password}
                  onChange={(e) => handleSignupChange('password', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={signupForm.confirmPassword}
                  onChange={(e) => handleSignupChange('confirmPassword', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full rounded-lg border border-slate-300 px-3 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
                  required
                />
              </div>
              {signupError ? <p className="text-xs sm:text-sm text-red-600">{signupError}</p> : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-2.5 text-sm sm:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-3 sm:mt-4"
                disabled={signupLoading}
              >
                {signupLoading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>
          </div>
        )}
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </Modal>
  );
}
