"use client";

import React from 'react';
import Link from 'next/link';

// Mock data for your Davao City setups
const galleryItems = [
  { id: 1, title: 'Concert Stage Setup', category: 'Stage & Sound', location: 'Davao City', image: '/images/gallery/work1.jpg' },
  { id: 2, title: 'Wedding Ambient Lighting', category: 'Lighting', location: 'Samal Island', image: '/images/gallery/work2.jpg' },
  { id: 3, title: 'Corporate LED Wall', category: 'Special Effects', location: 'SMX Davao', image: '/images/gallery/work3.jpg' },
  { id: 4, title: 'Outdoor Festival Rigging', category: 'Rigging', location: 'Crocodile Park', image: '/images/gallery/work4.jpg' },
  { id: 5, title: 'Intimate Event Sound', category: 'Stage & Sound', location: 'Abreeza', image: '/images/gallery/work5.jpg' },
  { id: 6, title: 'Night Market Lighting', category: 'Lighting', location: 'Roxas Avenue', image: '/images/gallery/work6.jpg' },
];

export default function AllWorksPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6 sm:px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold italic tracking-tighter mb-4 uppercase">Our Portfolio</h1>
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Latest setups across Davao City & Beyond</p>
      </div>

      {/* Modern Masonry Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm border border-gray-100">
              {/* Image Placeholder - Replace 'src' with your actual images later */}
              <div className="absolute inset-0 bg-zinc-200 group-hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center text-zinc-400 italic">
                 [ Setup Photo ]
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-1 text-gray-300">{item.category}</p>
                <h3 className="text-xl font-bold italic leading-none">{item.title}</h3>
                <p className="text-[10px] mt-2 opacity-70">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-20 text-center">
        <Link href="/gallery" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          ← Back to Main Gallery
        </Link>
      </div>
    </div>
  );
}