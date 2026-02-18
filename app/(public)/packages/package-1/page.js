"use client";

import React from 'react';
import Link from 'next/link';

export default function PackageOneDetail() {
  const inclusions = [
    { category: "Audio", items: ["2x High-fidelity Speakers", "Digital Mixer", "2x Wireless Mics"] },
    { category: "Visual", items: ["9x12ft LED Wall", "Video Processor", "Technical Operator"] },
    { category: "Lighting", items: ["8x RGB LED Par Lights", "DMX Controller", "Basic Mood Lighting"] },
    { category: "Manpower", items: ["1x On-site Coordinator", "2x Setup Crew", "1x Sound Engineer"] }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Packages / Package 1</p>
      </nav>

      {/* 2. HERO HEADER */}
      <header className="py-12 px-8 md:px-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold italic tracking-tighter mb-6">Package 1</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Our most popular all-in-one solution for corporate events and medium-sized celebrations in Davao City. 
            Engineered for clarity, impact, and seamless execution.
          </p>
          <div className="flex gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">150-300 Pax</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Full Production</span>
          </div>
        </div>
        <div className="aspect-video bg-[#D9D9D9] rounded-[40px] border border-gray-200 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" /></svg>
           </div>
           <span className="text-[10px] uppercase font-bold text-gray-400">Main Package Visual</span>
        </div>
      </header>

      {/* 3. EQUIPMENT & INCLUSIONS */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <h2 className="text-3xl font-bold italic mb-12 underline underline-offset-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-[0.2em]">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm font-medium flex items-center gap-2">
                      <div className="w-1 h-1 bg-black rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOOKING CALL TO ACTION */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto bg-black rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6">Ready to secure this package?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Use our interactive calculator to adjust factors like event hours, theme, and budget for a final proposal.
            </p>
            <Link 
              href="/quote" 
              className="inline-block bg-white text-black px-12 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform active:scale-95"
            >
              Go to Event Calculator
            </Link>
          </div>
          {/* Abstract decoration to match visual identity */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-colors" />
        </div>
      </section>
    </div>
  );
}