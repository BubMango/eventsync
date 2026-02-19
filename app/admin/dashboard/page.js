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
      const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).single();
      if (profile?.role !== 'admin') { router.push('/client/dashboard'); return; }
      setAdminName(profile.full_name);
      setLoading(false);
    };
    checkAdmin();
  }, [router]);

  if (loading) return (
    <div className="flex h-screen items-center justify-center font-black italic uppercase text-2xl animate-pulse">
      Initialising Command Center...
    </div>
  );

  return (
    <div className="w-full space-y-8">
      {/* 1️⃣ HEADER: UTILISING FULL WIDTH */}
      <header className="flex justify-between items-end border-b-4 border-black pb-6">
        <div>
          <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.8]">Command</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mt-4">
            HQ Productions Operational Interface • {adminName}
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-4xl font-black tracking-tighter italic">2026</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-green-500">System: Active</p>
        </div>
      </header>

      {/* 2️⃣ MAIN DASHBOARD GRID (Fluid 12-Column) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT PANEL: ONGOING & WEEKLY SCHEDULE (8 Columns) */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Ongoing Events */}
          <section className="bg-black text-white p-8 rounded-sm">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-zinc-500">Ongoing Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-green-500 pl-4">
                <h3 className="text-2xl font-bold uppercase italic italic">Tech Expo Davao</h3>
                <p className="text-[10px] text-zinc-400 uppercase">Convention Center • Floor 2</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-[8px] font-black bg-zinc-800 px-2 py-1 uppercase">12 Crew</span>
                  <span className="text-[8px] font-black bg-green-900 text-green-400 px-2 py-1 uppercase">Live</span>
                </div>
              </div>
            </div>
          </section>

          {/* Events This Week */}
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Events This Week</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Fri, Feb 20 - Gala Night', 'Sat, Feb 21 - Wedding', 'Sun, Feb 22 - Concert'].map((item, i) => (
                <div key={i} className="border border-gray-100 p-6 hover:border-black transition-all group">
                  <p className="text-[9px] font-black text-gray-400 uppercase mb-2 group-hover:text-black">{item.split(' - ')[0]}</p>
                  <h4 className="text-sm font-black uppercase italic tracking-tight">{item.split(' - ')[1]}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* To-Do List and Meetings */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-50 p-6 border border-zinc-200">
              <h2 className="text-[10px] font-black uppercase tracking-widest mb-4">Immediate To-Do</h2>
              <ul className="space-y-3 text-[11px] font-bold uppercase">
                <li className="flex gap-2"><span>[ ]</span> Verify Equipment Return #882</li>
                <li className="flex gap-2 text-red-500"><span>[ ]</span> Finalize Staff Payroll</li>
                <li className="flex gap-2"><span>[ ]</span> Update Barcode Master List</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-zinc-200">
              <h2 className="text-[10px] font-black uppercase tracking-widest mb-4">Meetings Today</h2>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase">14:00 • Client: Franccizca</p>
                <p className="text-[11px] font-bold uppercase">16:30 • Venue Site Inspection</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT PANEL: LOGISTICS & ALERTS (4 Columns) */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Notification Panel (Conflicts/Alerts) */}
          <section className="bg-white border-[3px] border-black p-6">
            <h2 className="text-xs font-black uppercase tracking-widest mb-6 bg-black text-white px-2 py-1 inline-block">Alert System</h2>
            <div className="space-y-4 divide-y divide-gray-100">
              <div className="pt-2">
                <p className="text-[9px] font-black text-red-500 uppercase">Conflict Detected</p>
                <p className="text-[11px] font-bold uppercase underline italic">Double Booking: Hall B / Mar 12</p>
              </div>
              <div className="pt-4">
                <p className="text-[9px] font-black text-black uppercase">Barcode Scan Log</p>
                <p className="text-[11px] font-medium uppercase text-gray-400">Scanner #2: Mic-014 [Deployed]</p>
              </div>
            </div>
          </section>

          {/* Logistics Summary */}
          <section className="bg-zinc-900 text-white p-8">
            <div className="space-y-8">
              {/* Equipment */}
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Equipment Low Availability</h3>
                <div className="flex justify-between font-bold border-b border-zinc-800 pb-2">
                  <span className="text-[11px] uppercase tracking-tighter">Wireless Transmitters</span>
                  <span className="text-red-500 text-xs">02 LEFT</span>
                </div>
              </div>

              {/* Staff */}
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Crew Deployment</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div><p className="text-3xl font-black">18</p><p className="text-[8px] uppercase font-bold text-green-500">Assigned</p></div>
                   <div><p className="text-3xl font-black text-zinc-600">04</p><p className="text-[8px] uppercase font-bold text-zinc-600">Free/Unassigned</p></div>
                </div>
              </div>

              {/* Payments */}
              <div>
                <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Payment Pendings</h3>
                <p className="text-2xl font-black tracking-tighter italic">₱182,400.00</p>
                <p className="text-[8px] font-bold uppercase text-red-500 mt-1">12 Overdue Invoices</p>
              </div>
            </div>
          </section>

          {/* Dashboard Quick Actions */}
          <button className="w-full bg-white border-2 border-black py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
             Scan Equipment Barcode
          </button>
        </div>
      </div>
    </div>
  );
}