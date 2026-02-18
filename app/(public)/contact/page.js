"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB - Consistent with image_7663c6.png and image_7666ee.png */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium lowercase">Home / Contact Us</p>
      </nav>

      {/* 2. HEADER - Consistent italic styling */}
      <header className="py-8">
        <h1 className="text-5xl font-bold text-center italic tracking-tight">
          Contact Us
        </h1>
      </header>

      {/* 3. CONTACT SECTION */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Form in a styled card - Matches Package card aesthetic */}
          <div className="bg-[#F3F4F6] border border-gray-100 rounded-3xl p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white group">
            <h2 className="text-2xl font-bold mb-6 italic">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all"
                  placeholder="juan@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button className="w-full bg-[#6B7280] hover:bg-black text-white text-[10px] font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-md active:scale-95">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info & Map Placeholder */}
          <div className="flex flex-col space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-2">Call Us</h4>
                <p className="text-sm font-bold">+63 (082) 123-4567</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-2">Email Us</h4>
                <p className="text-sm font-bold">hello@hqproductions.com</p>
              </div>
            </div>

            {/* Map Placeholder - Matches the Gallery/Services placeholder style */}
            <div className="flex-grow w-full min-h-[300px] bg-gray-200 rounded-3xl border border-gray-300 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
                <div className="text-center z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Our Location</p>
                  <p className="text-sm italic text-gray-600">Davao City, Philippines</p>
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}