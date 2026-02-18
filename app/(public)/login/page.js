"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('client'); // Default for demo purposes

  const handleLogin = (e) => {
    e.preventDefault();

    // Logic for redirection based on Sitemap roles
    // In a real app, this logic follows a successful API response
    if (email.includes('admin')) {
      router.push('/admin/dashboard');
    } else if (email.includes('staff')) {
      router.push('/staff/dashboard');
    } else {
      router.push('/client/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 shadow-xl border border-gray-100">
        
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-black flex items-center justify-center text-white font-bold text-xs mb-4">
            HQ
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Log in to manage your events in EventSync
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address (use 'admin@' or 'staff@' to test)"
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded text-[11px] text-gray-500 border border-gray-200">
            <strong>Testing Note:</strong> <br />
            - Type <b>admin@test.com</b> to go to Admin Dashboard. <br />
            - Type <b>staff@test.com</b> to go to Staff Dashboard. <br />
            - Anything else goes to Client Dashboard.
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}