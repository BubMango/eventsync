"use client";

import React from 'react';
import Link from 'next/link';

export default function ServiceDetailTemplate() {
  // Example data - You can customize these per service
  const serviceTitle = "Service Title"; 
  const serviceDescription = "Detailed description of the service and how it supports events in Davao City.";
  
  const technicalSpecs = [
    { label: "Performance", value: "Industrial Grade" },
    { label: "Deployment", value: "Rapid 2-Hour Setup" },
    { label: "Coverage", value: "Scalable to Venue Size" },
    { label: "Safety", value: "Standard Certified" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Services / {serviceTitle}</p>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="py-12 px-8 md:px-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold italic tracking-tighter mb-6">{serviceTitle}</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {serviceDescription}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {technicalSpecs.map((spec, i) => (
              <div key={i} className="border-l-2 border-black pl-4 py-1">
                <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest">{spec.label}</p>
                <p className="text-sm font-bold italic">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Hero Image (Photo 1) */}
        <div className="aspect-square bg-[#F3F4F6] rounded-[40px] border border-gray-100 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-full h-full"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" /></svg>
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-400">Featured Service Image</span>
        </div>
      </header>

      {/* 3. SHOWCASE GALLERY (The 5-Image Layout) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <h2 className="text-[10px] uppercase font-bold text-gray-400 mb-12 tracking-[0.3em] text-center">Service Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
            {/* Photo 2 - Large Vertical */}
            <div className="md:col-span-1 bg-white rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center relative">
               <span className="text-[9px] text-gray-300 font-bold uppercase">Detail Shot 01</span>
            </div>
            
            {/* Photo 3 - Main Central Square */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center relative">
               <span className="text-[9px] text-gray-300 font-bold uppercase">Main Action Shot</span>
            </div>
            
            {/* Stacked Right Column (Photos 4 & 5) */}
            <div className="md:col-span-1 grid grid-rows-2 gap-6">
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center">
                <span className="text-[9px] text-gray-300 font-bold uppercase">Detail Shot 02</span>
              </div>
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center">
                <span className="text-[9px] text-gray-300 font-bold uppercase">Wide View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto bg-black rounded-[50px] p-12 text-center text-white">
          <h2 className="text-4xl font-bold italic mb-6">Inquire About This Service</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm">
            Need this specific setup for your next Davao event? Get a custom quote based on your guest count and hours.
          </p>
          <Link 
            href="/quote" 
            className="inline-block bg-white text-black px-12 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Calculate Quote
          </Link>
        </div>
      </section>
    </div>
  );
}