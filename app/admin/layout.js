"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ADMIN NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/admin/dashboard" className="font-bold text-2xl tracking-tighter uppercase">
            HQ<span className="text-gray-400 font-light text-xl italic ml-1 underline underline-offset-4 decoration-1 decoration-gray-300">Admin</span>
          </Link>

          {/* Nav links requested in your visual diagram */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-bold">
            <Link href="/admin/dashboard" className="hover:text-gray-400 transition">Dashboard</Link>
            <Link href="/admin/bookings" className="hover:text-gray-400 transition">Bookings</Link>
            <Link href="/admin/inventory" className="hover:text-gray-400 transition">Inventory</Link>
            <Link href="/admin/payment" className="hover:text-gray-400 transition">Payments</Link>
            <Link href="/admin/report" className="hover:text-gray-400 transition">Reports</Link>
            <Link href="/admin/settings" className="hover:text-gray-400 transition">Settings</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLogout}
              className="text-[10px] font-bold uppercase tracking-widest bg-zinc-100 px-4 py-2 rounded-sm hover:bg-zinc-200 transition"
            >
              Logout
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

      {/* ADMIN FOOTER (Matching landing page style) */}
      <footer className="bg-zinc-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-sm tracking-widest uppercase">HQ PRODUCTIONS | ADMIN PANEL</div>
            <p className="text-[10px] text-gray-400 uppercase tracking-tight mt-1">
              Internal Management System • Davao City, Philippines
            </p>
          </div>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest">
            Logged in as Administrator
          </div>
        </div>
      </footer>
    </div>
  );
}