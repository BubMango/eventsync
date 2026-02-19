"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function StaffLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* STAFF NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/staff/dashboard" className="font-bold text-2xl tracking-tighter uppercase">
            HQ<span className="text-gray-400 font-light text-xl italic ml-1 underline underline-offset-4 decoration-1 decoration-gray-300">Staff</span>
          </Link>

          {/* Navigation links based on your staff diagram */}
          <nav className="hidden md:flex items-center space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold">
            <Link href="/staff/dashboard" className="hover:text-gray-400 transition">Dashboard</Link>
            <Link href="/staff/assignedevents" className="hover:text-gray-400 transition">My Assigned Events</Link>
            <Link href="/staff/equipmentcheck" className="hover:text-gray-400 transition">Equipment Check</Link>
            <Link href="/staff/attendance" className="hover:text-gray-400 transition">Attendance</Link>
            <Link href="/staff/messages" className="hover:text-gray-400 transition">Messages</Link>
            <Link href="/staff/profile" className="hover:text-gray-400 transition">Profile</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLogout}
              className="text-[9px] font-black uppercase tracking-[0.2em] border border-black px-4 py-2 hover:bg-black hover:text-white transition-all active:scale-95"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      {/* STAFF FOOTER */}
      <footer className="bg-zinc-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-sm tracking-widest uppercase mb-1 italic">HQ Staff Operations</div>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
              Internal Field & Logistics Management • Davao City
            </p>
          </div>
          <div className="flex space-x-6 text-[9px] font-bold uppercase tracking-widest text-gray-400">
            <span className="cursor-default text-zinc-300">Operational Integrity Since 2017</span>
            <span className="cursor-default">© 2026 HQ Productions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}