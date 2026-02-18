"use client";

import React from 'react';
import Link from 'next/link';

export default function PackageThreeDetail() {
  const inclusions = [
    { 
      category: "Ambient Sound", 
      items: ["Compact High-Fidelity System", "Subtle Stage Monitoring", "Wireless Mic for Toasts", "Curated Playlist Support"] 
    },
    { 
      category: "Atmospheric Lighting", 
      items: ["Warm White Uplighting", "Fairy Light Integration", "Spotlight for Cake/Key Areas", "Wireless LED Bars"] 
    },
    { 
      category: "Social Visuals", 
      items: ["55\" Clean-Bezel LED Display", "Digital Photo Slideshow", "Custom Branding/Graphics", "Slim-line TV Stand"] 
    },
    { 
      category: "Elite Service", 
      items: ["1x Discrete Tech Operator", "Rapid Setup & Teardown", "Pre-event Sound Check", "Themed Equipment Masking"] 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Packages / Package 3</p>
      </nav>

      {/* 2. HERO HEADER - Elegant/Social Focus */}
      <header className="py-16 px-8 md:px-20 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold italic tracking-tighter mb-8">
            Package 3: <br/>Social & Private
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Designed for intimate celebrations where atmosphere is everything. 
            We provide high-end equipment that blends seamlessly into your theme, 
            perfect for birthdays, debuts, and private dinners in Davao's finest venues.
          </p>
          <div className="flex justify-center gap-6 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold italic">50-100</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Ideal Pax</span>
            </div>
            <div className="w-[1px] h-10 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold italic">Boutique</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Visual Style</span>
            </div>
          </div>
        </div>
        
        {/* Themed Visual Placeholder */}
        <div className="w-full aspect-[21/9] bg-[#F3F4F6] rounded-[50px] border border-gray-100 relative overflow-hidden flex items-center justify-center group hover:bg-white transition-colors duration-500">
           <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-full h-full">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
           </div>
           <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.4em]">Atmosphere Preview</span>
        </div>
      </header>

      {/* 3. ATMOSPHERE BREAKDOWN */}
      <section className="py-24 px-8 md:px-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {inclusions.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-300">0{idx + 1}</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">{section.category}</h3>
                </div>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 italic border-l border-gray-100 pl-4 hover:border-black transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Integrated with your Budget Logic */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto border-2 border-black rounded-[60px] p-12 md:p-20 flex flex-col items-center text-center gap-8 group hover:bg-black hover:text-white transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold italic">Perfecting the Vibe</h2>
          <p className="max-w-xl text-sm leading-relaxed opacity-60">
            Every private event is unique. Use our calculator to select your theme, 
            set your budget range, and choose your venue location in Davao City.
          </p>
          <Link 
            href="/quote" 
            className="bg-black text-white group-hover:bg-white group-hover:text-black px-16 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all active:scale-95"
          >
            Start Customizing
          </Link>
        </div>
      </section>
    </div>
  );
}