"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // 1. Create User in Supabase Auth with metadata
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'client', // Sets default role for EventSync
        },
      },
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ 
        type: 'success', 
        text: "Success! Please check your inbox for a verification email." 
      });
      // Optional: Clear form on success
      setFullName('');
      setEmail('');
      setPassword('');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-center items-center px-8">
      {/* Container matches your high-end design pattern */}
      <div className="w-full max-w-md bg-white p-12 rounded-[40px] border border-gray-100 shadow-2xl">
        
        {/* Branding Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-black text-white px-3 py-1.5 rounded-lg mb-4 font-black text-[10px] uppercase tracking-[0.3em]">
            HQ
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter text-center uppercase">
            Join EventSync
          </h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-3 text-center">
            Create an account to manage your event bookings
          </p>
        </div>

        {/* Status Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-2xl text-[10px] font-bold uppercase tracking-wider text-center ${
            message.type === 'error' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Juan Dela Cruz" 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="juan@example.com" 
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            disabled={loading}
            className="w-full bg-black text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-gray-300 mt-4 shadow-xl"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Already have an account? 
            <Link href="/login" className="text-black font-black ml-2 hover:underline decoration-2">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}