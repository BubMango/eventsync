"use client";

import React, { useState } from 'react';

export default function RequestQuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Request a Quote</p>
      </nav>

      {/* 2. HEADER */}
      <header className="py-8">
        <h1 className="text-5xl font-bold text-center italic tracking-tight">
          Let's Plan Your Event
        </h1>
        <p className="text-center text-gray-500 text-sm mt-4 px-4">
          Provide your event details below, and our Davao team will craft a custom proposal for you.
        </p>
      </header>

      {/* 3. MULTI-FACTOR SELECTION FORM */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F3F4F6] border border-gray-100 rounded-[40px] p-8 md:p-16 shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-white">
            
            <form className="space-y-12">
              
              {/* SECTION A: EVENT TYPE & THEME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Event Category</label>
                  <select className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer">
                    <option>Wedding</option>
                    <option>Birthday / Debut</option>
                    <option>Corporate Event</option>
                    <option>Concert / Festival</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Desired Theme</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rustic, Modern, Tropical" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
              </div>

              {/* SECTION B: LOGISTICS (PAX, HOURS, DATE) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Estimated Pax (Guests)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 150" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Duration (No. of Hours)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 5" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Target Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
              </div>

              {/* SECTION C: BUDGET & LOCATION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Estimated Budget (PHP)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 50,000 - 100,000" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Location / Venue</label>
                  <input 
                    type="text" 
                    placeholder="Enter venue or type 'N/A' for us to decide" 
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>
              </div>

              {/* SECTION D: SPECIAL NOTES */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Additional Requirements</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white border border-gray-200 rounded-[30px] px-6 py-5 outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                  placeholder="Tell us more about your vision (Stage, Sound, Lighting needs)..."
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex flex-col items-center pt-6 border-t border-gray-200">
                <button className="w-full md:w-auto bg-[#6B7280] hover:bg-black text-white text-[11px] font-bold py-5 px-20 rounded-2xl transition-all duration-300 uppercase tracking-widest shadow-lg active:scale-95">
                  Calculate My Quote
                </button>
                <p className="text-[9px] text-gray-400 mt-4 uppercase tracking-tighter font-bold">
                  No commitment required. We will reach out via email shortly.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}