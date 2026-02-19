"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Authenticate user credentials
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      alert(authError.message);
      setLoading(false);
      return;
    }

    // 2. Fetch the specific role from your 'profiles' table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single();

    if (profileError) {
      console.error("Error fetching profile:", profileError.message);
      // Fallback if profile row is missing
      router.push('/client/dashboard');
      setLoading(false);
      return;
    }

    // 3. Strict Role-Based Redirection
    const userRole = profile?.role;

    if (userRole === 'admin') {
      router.push('/admin/dashboard');
    } else if (userRole === 'crew' || userRole === 'staff') {
      router.push('/staff/dashboard');
    } else {
      // All other users (clients) go here
      router.push('/client/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl">
        
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-black flex items-center justify-center text-white font-bold text-xs mb-6 rounded-lg">
            HQ
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight italic">
            Welcome Back
          </h2>
          <p className="mt-2 text-xs text-gray-400 uppercase tracking-widest">
            Log in to manage your events in EventSync
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="Email address"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-gray-400"
          >
            {loading ? 'Verifying...' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
          New to EventSync? <Link href="/signup" className="text-black font-bold border-b border-black pb-0.5 ml-1">Create Account</Link>
        </p>
      </div>
    </div>
  );
}