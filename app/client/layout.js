"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ClientLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* CLIENT NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/client/dashboard" className="font-bold text-2xl tracking-tighter uppercase">
            HQ<span className="text-gray-400 font-light text-xl italic ml-1 underline underline-offset-4 decoration-1 decoration-gray-300">Client</span>
          </Link>

          {/* Navigation links based on your client diagram */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            <Link href="/client/dashboard" className="hover:text-gray-400 transition">Dashboard</Link>
            <Link href="/client/bookings" className="hover:text-gray-400 transition">My Bookings</Link>
            <Link href="/quote" className="hover:text-gray-400 transition">New Booking</Link>
            <Link href="/client/payment" className="hover:text-gray-400 transition">Payments</Link>
            <Link href="/client/messages" className="hover:text-gray-400 transition">Messages</Link>
            <Link href="/client/profile" className="hover:text-gray-400 transition">Profile</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLogout}
              className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-5 py-2.5 rounded-sm hover:bg-zinc-800 transition shadow-lg"
            >
              Sign Out
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

      {/* CLIENT FOOTER */}
      <footer className="bg-zinc-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-sm tracking-widest uppercase mb-1">HQ PRODUCTIONS</div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              Event Management Portal • Davao City
            </p>
          </div>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/contact" className="hover:text-black transition">Help Center</Link>
            <Link href="/services" className="hover:text-black transition">Our Services</Link>
            <span className="cursor-default">© 2026 HQ Productions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}