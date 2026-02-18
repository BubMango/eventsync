"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'client', // Default role for new signups
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Verification email sent! Please check your inbox.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-center items-center px-8">
      <div className="w-full max-w-md bg-white p-12 rounded-[40px] border border-gray-100 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-black text-white p-3 rounded-lg mb-4 font-bold text-xs uppercase tracking-widest">HQ</div>
          <h1 className="text-3xl font-bold italic tracking-tight text-center">Join EventSync</h1>
          <p className="text-gray-400 text-xs mt-2">Create an account to manage your event bookings.</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button 
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-gray-400"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
          Already have an account? <Link href="/login" className="text-black font-bold border-b border-black pb-0.5">Login</Link>
        </p>
      </div>
    </div>
  );
}