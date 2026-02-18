"use client";

import React from 'react';
import Link from 'next/link';

export default function PackageTwoDetail() {
  const inclusions = [
    { 
      category: "Pro Audio", 
      items: ["Line Array Speaker System", "Dual 18\" Subwoofers", "Digital Mixing Console (32 Ch)", "Monitor Wedges"] 
    },
    { 
      category: "Stage Visuals", 
      items: ["P3 High-Res LED Wall (4x3m)", "Live Feed Camera Integration", "Resolume Visual Mapping", "Heavy-duty Trussing"] 
    },
    { 
      category: "Pro Lighting", 
      items: ["Moving Head Beams", "Strobe & Blinders", "Smoke/Haze Machines", "GrandMA Lighting Control"] 
    },
    { 
      category: "Technical Team", 
      items: ["Lead Audio Engineer", "Lighting Designer", "LED Wall Tech", "4x Professional Stage Hands"] 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Packages / Package 2</p>
      </nav>

      {/* 2. HERO HEADER - Concert Focus */}
      <header className="py-12 px-8 md:px-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block bg-black text-white px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
            Premium Choice
          </div>
          <h1 className="text-6xl font-bold italic tracking-tighter mb-6 leading-none">Package 2: <br/>Concert Series</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            The ultimate "Concert-Grade" setup for festivals, large indoor rallies, and high-impact concerts. 
            Designed for audiences of up to 1,000+ with crystal clear sound and immersive visuals.
          </p>
          <div className="flex gap-4">
            <span className="border border-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">500-1000+ Pax</span>
            <span className="border border-black px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Live Broadcast Ready</span>
          </div>
        </div>
        <div className="order-1 lg:order-2 aspect-square bg-[#D9D9D9] rounded-[60px] border border-gray-200 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="2" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="2" />
              </svg>
           </div>
           <span className="text-[10px] uppercase font-bold text-gray-400">Concert Stage Visual</span>
        </div>
      </header>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-bold italic">Technical Inventory</h2>
               <div className="w-20 h-1 bg-black mt-2"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {inclusions.map((section, idx) => (
              <div key={idx} className="flex flex-col border-b border-gray-200 pb-8">
                <h3 className="text-lg font-bold italic mb-4">{section.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="text-sm text-gray-600 flex items-center gap-3">
                      <span className="text-black font-bold">+</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Interactive Logic */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto bg-[#F3F4F6] rounded-[50px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold italic mb-4">Scale your event properly.</h2>
            <p className="text-gray-500 text-sm">
              Use our calculator to adjust for travel outside Davao City, additional event hours, or specific theme requirements.
            </p>
          </div>
          <Link 
            href="/quote" 
            className="whitespace-nowrap bg-black text-white px-16 py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-zinc-800 transition-all active:scale-95"
          >
            Open Event Calculator
          </Link>
        </div>
      </section>
    </div>
  );
}