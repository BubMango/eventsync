"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 1. Fix for Leaflet Default Icons in Next.js
if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

// 2. Dynamic Imports for Map components (Prevents SSR Errors)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const davaoPosition = [7.0707, 125.6087]; 
  const mapTilerUrl = "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=LQIVRT8tDKEDNfqOIdy6";
  const attribution = '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>';

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.target.reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navigation Breadcrumb */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Home / Contact Us</p>
      </nav>

      {/* Hero Header */}
      <header className="py-10">
        <h1 className="text-6xl font-black text-center italic tracking-tighter uppercase">
          Get In Touch
        </h1>
        <p className="text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-2">
          HQ Productions • Davao City, Philippines
        </p>
      </header>

      {/* Contact Content */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Form */}
          <div className="bg-[#F9FAFB] border border-gray-100 rounded-[40px] p-10 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-8 italic tracking-tight">Send a Message</h2>
            
            <form className="space-y-5" onSubmit={handleSendMessage}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Juan Dela Cruz" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all" placeholder="juan@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] uppercase font-black text-gray-400 ml-1">Your Message</label>
                <textarea required rows="5" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="Tell us about your event details..." />
              </div>

              <button 
                disabled={loading}
                className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg active:scale-95 ${submitted ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}
              >
                {loading ? 'Sending...' : submitted ? '✓ Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side: Map & Details */}
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 p-8 rounded-[30px] shadow-sm hover:border-black transition-colors">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-3 tracking-widest">Call Us</h4>
                <p className="text-md font-bold italic tracking-tight">+63 (082) 123-4567</p>
              </div>
              <div className="bg-white border border-gray-100 p-8 rounded-[30px] shadow-sm hover:border-black transition-colors">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-3 tracking-widest">Email Us</h4>
                <p className="text-md font-bold italic tracking-tight">hello@hqproductions.com</p>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-grow w-full min-h-[400px] bg-gray-100 rounded-[40px] border border-gray-200 relative overflow-hidden shadow-inner group">
               <MapContainer 
                  center={davaoPosition} 
                  zoom={14} 
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url={mapTilerUrl} attribution={attribution} />
                  <Marker position={davaoPosition}>
                    <Popup className="font-sans">
                      <div className="text-center p-1">
                        <strong className="block italic">HQ Productions</strong>
                        <span className="text-[10px] uppercase text-gray-500">Davao City, PH</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}