"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') { router.push('/client/dashboard'); return; }
      setAdminName(profile.full_name);
      setLoading(false);
    };
    checkAdmin();
  }, [router]);

  if (loading) return (
    <div className="flex h-screen items-center justify-center font-black italic uppercase text-2xl tracking-tighter animate-pulse">
      Initialising Mission Control...
    </div>
  );

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      {/* 1️⃣ TOP ROW: MISSION CRITICAL KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-black text-white p-6 border-b-4 border-zinc-700">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">Active Bookings</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-black italic tracking-tighter">04</span>
            <span className="text-[10px] font-bold uppercase text-green-500 animate-pulse">Live Now</span>
          </div>
        </div>
        
        <div className="bg-white border-2 border-black p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Inventory Out</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-black italic tracking-tighter">82%</span>
            <span className="text-[10px] font-bold uppercase text-gray-500 underline decoration-1">Gear Deployed</span>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Pending Payments</p>
          <div className="flex items-baseline gap-3 text-red-600">
            <span className="text-4xl font-black italic tracking-tighter leading-none">₱142K</span>
            <span className="text-[10px] font-bold uppercase">Uncollected</span>
          </div>
        </div>

        {/* PRIMARY ENTRY POINT: ADD NEW BOOKING */}
        <button 
          onClick={() => router.push('/admin/bookings/new')}
          className="bg-zinc-100 border-2 border-black border-dashed flex flex-col items-center justify-center p-6 hover:bg-black hover:text-white transition-all group"
        >
          <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">➕</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add New Booking</span>
        </button>
      </div>

      {/* 2️⃣ MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: COORDINATION & TASKS (Staff of 10-15) */}
        <div className="xl:col-span-8 space-y-8">
          <section>
            <div className="flex items-end justify-between border-b-2 border-black pb-2 mb-6">
              <h2 className="text-xl font-black italic uppercase tracking-tighter">Daily Coordination Checklist</h2>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Davao HQ • Staff Capacity: 15</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 inline-block">Tasks</h3>
                {[
                  "Conduct Site Inspection - SMX Davao",
                  "Finalize Gear List for Saturday Wedding",
                  "Audit Barcode Scanners (Station A-C)",
                  "Staff Briefing for Concert Logistics"
                ].map((task, i) => (
                  <label key={i} className="flex items-center gap-4 p-4 border border-zinc-100 hover:bg-zinc-50 cursor-pointer transition-colors group">
                    <input type="checkbox" className="w-4 h-4 accent-black rounded-none border-2 border-black" />
                    <span className="text-xs font-bold uppercase tracking-tight group-hover:italic">{task}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest bg-zinc-200 px-2 py-1 inline-block">Meetings</h3>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-[11px] font-black uppercase italic">09:00 - Staff Morning Sync</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Main Office / Zoom</p>
                </div>
                <div className="border-l-4 border-zinc-200 pl-4 py-2 opacity-50">
                  <p className="text-[11px] font-black uppercase italic">14:30 - Client Franccizca Consultation</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest underline underline-offset-4">EventSync HQ Lounge</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: ALGORITHMIC ALERTS (Interval Tree Notifications) */}
        <div className="xl:col-span-4 space-y-6">
          <section className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.3em]">Conflict Alerts</h2>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[8px] font-black uppercase text-red-500 tracking-tighter">Algorithmic Feed</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-500">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">Critical Overlap Detected</p>
                <h4 className="text-sm font-bold uppercase tracking-tight mt-1">Equipment Over-Reservation</h4>
                <p className="text-[10px] text-gray-500 mt-2 italic leading-tight uppercase font-medium">
                  Interval Tree detected: 12 Wireless Mics requested for Feb 25th (Available: 10)
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-orange-400 opacity-80">
                <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Crew Conflict</p>
                <h4 className="text-sm font-bold uppercase tracking-tight mt-1">Staff Double-Assigned</h4>
                <p className="text-[10px] text-gray-500 mt-2 italic leading-tight uppercase font-medium">
                  R. Santos assigned to SMX Davao and Convention Center simultaneously.
                </p>
              </div>
              
              <div className="pt-4 border-t border-zinc-100">
                <button className="w-full py-3 text-[9px] font-black uppercase tracking-[0.4em] bg-zinc-900 text-white hover:bg-black transition-colors">
                  Resolve All Conflicts
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}