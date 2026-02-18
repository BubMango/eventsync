"use client";

import React, { useState } from 'react';

export default function RequestQuotePage() {
  const [budget, setBudget] = useState(50000);

  // Format number to Philippine Peso
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Request a Quote</p>
      </nav>

      {/* 2. HEADER */}
      <header className="py-8">
        <h1 className="text-5xl font-bold text-center italic tracking-tight">
          Event Calculator
        </h1>
        <p className="text-center text-gray-500 text-sm mt-4 px-4">
          Select your event factors to help our Davao crew prepare the best equipment for you.
        </p>
      </header>

      {/* 3. GUIDED FORM SECTION */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F3F4F6] border border-gray-100 rounded-[40px] p-8 md:p-16 shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-white">
            
            <form className="space-y-12">
              
              {/* CATEGORY & THEME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Event Category</label>
                  <select className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer">
                    <option>Wedding</option>
                    <option>Birthday / Debut</option>
                    <option>Corporate Gala</option>
                    <option>Concert / Festival</option>
                    <option>Private Party</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Event Theme</label>
                  <input type="text" placeholder="e.g. Bohemian, Cyberpunk, Classic White" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all" />
                </div>
              </div>

              {/* PAX & TIME & LOCATION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Expected Pax</label>
                  <input type="number" placeholder="No. of guests" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Duration (Hours)</label>
                  <input type="number" placeholder="e.g. 4" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Venue / Location</label>
                  <input type="text" placeholder="N/A if undecided" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all" />
                </div>
              </div>

              {/* INTERACTIVE BUDGET SLIDER */}
              <div className="space-y-6 bg-white/50 p-8 rounded-3xl border border-gray-100">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Estimated Budget Range</label>
                  <span className="text-2xl font-bold italic text-black">{formatCurrency(budget)}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000000" 
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>₱10,000</span>
                  <span>₱500,000+</span>
                </div>
              </div>

              {/* SUBMIT */}
              <div className="flex flex-col items-center pt-8 border-t border-gray-200">
                <button className="w-full md:w-auto bg-[#6B7280] hover:bg-black text-white text-[11px] font-bold py-5 px-24 rounded-2xl transition-all duration-300 uppercase tracking-widest shadow-xl active:scale-95">
                  Send My Request
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}