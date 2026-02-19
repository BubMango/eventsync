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
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      {/* FULL-WIDTH NAVIGATION */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-black">
        <div className="w-full px-8 h-20 flex items-center justify-between">
          <Link href="/admin/dashboard" className="font-black text-3xl tracking-tighter uppercase italic">
            HQ<span className="text-zinc-300 not-italic ml-1">ADMIN</span>
          </Link>

          {/* Navigation links utilizing more horizontal space */}
          <nav className="hidden xl:flex items-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-black">
            <Link href="/admin/dashboard" className="hover:line-through transition">Dashboard</Link>
            <Link href="/admin/bookings" className="hover:line-through transition">Bookings</Link>
            <Link href="/admin/inventory" className="hover:line-through transition">Inventory</Link>
            <Link href="/admin/payment" className="hover:line-through transition">Payments</Link>
            <Link href="/admin/report" className="hover:line-through transition">Reports</Link>
            <Link href="/admin/settings" className="hover:line-through transition">Settings</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:block text-right mr-4 border-r border-zinc-200 pr-6">
              <p className="text-[9px] font-black uppercase tracking-widest leading-none">Status</p>
              <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest mt-1">System Live</p>
            </div>
            <button 
              onClick={handleLogout}
              className="text-[10px] font-black uppercase tracking-[0.2em] bg-black text-white px-6 py-3 rounded-none hover:bg-zinc-800 transition shadow-[4px_4px_0px_0px_rgba(212,212,212,1)]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* FULL-WIDTH PAGE CONTENT */}
      <main className="flex-grow w-full">
        {/* Removed max-w-7xl and adjusted padding for edge-to-edge data density */}
        <div className="w-full px-8 py-10">
          {children}
        </div>
      </main>

      {/* EXPANSIVE FOOTER */}
      <footer className="bg-black text-white py-10">
        <div className="w-full px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="font-black text-lg tracking-tighter uppercase italic">HQ Productions</div>
            <div className="h-4 w-[1px] bg-zinc-700 hidden md:block"></div>
            <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
              Operational Command Console • Davao City, PH
            </p>
          </div>
          
          <div className="flex items-center gap-12 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">
            <span className="text-zinc-200">Session: Admin Verified</span>
            <span>© 2026 Internal Use Only</span>
          </div>
        </div>
      </footer>
    </div>
  );
}