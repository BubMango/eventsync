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

      if (!user) {
        router.push('/login');
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('full_name, role')
        .eq('id', user.id)
        .single();

      if (error || profile?.role !== 'admin') {
        router.push('/client/dashboard');
        return;
      }

      setAdminName(profile.full_name);
      setLoading(false);
    };

    checkAdmin();
  }, [router]);

  if (loading) return (
    <div className="flex h-96 items-center justify-center font-black italic uppercase text-xl animate-pulse">
      Syncing HQ Data...
    </div>
  );

  return (
    <div className="space-y-10">
      {/* HEADER SECTION */}
      <header>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Management <span className="text-gray-300">Overview</span>
        </h1>
        <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.3em] font-bold">
          System Status: <span className="text-green-500">Optimal</span> • Welcome back, {adminName}
        </p>
      </header>

      {/* 1️⃣ TOP KPI SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "Events Today", val: "04", color: "text-black", link: "/admin/bookings" },
          { label: "Upcoming (7d)", val: "12", color: "text-black", link: "/admin/bookings" },
          { label: "Revenue (Mo)", val: "₱142k", color: "text-green-600", link: "/admin/payment" },
          { label: "Conflicts", val: "02", color: "text-red-500", link: "/admin/bookings" },
          { label: "Equipment Out", val: "85%", color: "text-black", link: "/admin/inventory" },
          { label: "Staff Active", val: "18", color: "text-black", link: "/admin/staff" },
        ].map((kpi, i) => (
          <button 
            key={i}
            onClick={() => router.push(kpi.link)}
            className="bg-white p-5 border border-gray-100 rounded-2xl text-left hover:shadow-xl hover:border-black transition-all group"
          >
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 group-hover:text-black">{kpi.label}</p>
            <p className={`text-2xl font-bold tracking-tighter ${kpi.color}`}>{kpi.val}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2️⃣ TODAY'S EVENT TIMELINE (Center Panel) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="font-black uppercase text-xs tracking-widest">Today&apos;s Schedule</h2>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Feb 19, 2026</span>
          </div>
          
          <div className="space-y-4">
            {/* Example Event Item */}
            <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-[32px] hover:shadow-md transition-shadow">
              <div className="text-center min-w-[80px]">
                <p className="font-black text-lg leading-none">18:00</p>
                <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">22:00</p>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg uppercase tracking-tight">Grand Wedding Reception</h3>
                  <span className="bg-orange-50 text-orange-600 text-[8px] font-black px-2 py-1 rounded-full uppercase">Partial Payment</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 italic">Davao Convention Center • 8 Crew Assigned</p>
                <div className="flex gap-4 mt-4">
                   <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-[9px] font-bold uppercase text-gray-400">Gear Ready</span>
                   </div>
                   <div className="flex items-center gap-1 text-red-500">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[9px] font-bold uppercase">Conflict Detected</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3️⃣ ALERTS & QUICK ACTIONS (Right Side) */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <section className="bg-black text-white p-8 rounded-[40px] shadow-2xl">
            <h2 className="font-black uppercase text-[10px] tracking-widest mb-6 border-b border-zinc-800 pb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Create New Booking", icon: "➕" },
                { label: "Assign Crew", icon: "👥" },
                { label: "Add Equipment", icon: "📦" },
                { label: "Generate Report", icon: "📄" },
              ].map((act, i) => (
                <button key={i} className="flex items-center justify-between w-full bg-zinc-900 hover:bg-white hover:text-black p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">
                  {act.label} <span>{act.icon}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Alerts Panel */}
          <section className="bg-white border border-gray-100 p-8 rounded-[40px]">
            <h2 className="font-black uppercase text-[10px] tracking-widest mb-6 text-red-500">Critical Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-tighter">Double Booking Attempt</p>
                <p className="text-[9px] text-red-400 mt-1 uppercase">Hall B - March 12</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                <p className="text-[10px] font-black text-yellow-700 uppercase tracking-tighter">Low Inventory</p>
                <p className="text-[9px] text-yellow-600 mt-1 uppercase">Wireless Mics (2 left)</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 4️⃣ MINI ANALYTICS SNAPSHOT */}
      <section className="pt-10 border-t border-gray-100">
        <h2 className="font-black uppercase text-xs tracking-widest mb-8">Performance Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="h-32 bg-gray-50 rounded-3xl flex items-center justify-center text-[10px] uppercase font-black text-gray-300"> Revenue Trend Graph </div>
           <div className="h-32 bg-gray-50 rounded-3xl flex items-center justify-center text-[10px] uppercase font-black text-gray-300"> Equipment Usage Rate </div>
           <div className="h-32 bg-gray-50 rounded-3xl flex items-center justify-center text-[10px] uppercase font-black text-gray-300"> Staff Workload </div>
        </div>
      </section>
    </div>
  );
}