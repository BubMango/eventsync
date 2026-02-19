"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamic imports to prevent SSR "window is not defined" errors
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fix for Leaflet marker icons
    const initLeaflet = async () => {
      const L = (await import('leaflet')).default;
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
    };
    initLeaflet();
  }, []);

  const davaoPosition = [7.0707, 125.6087];
  const mapTilerUrl = "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=LQIVRT8tDKEDNfqOIdy6";
  const attribution = '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>';

  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Home / Contact Us</p>
      </nav>

      {/* 2. HEADER */}
      <header className="py-10">
        <h1 className="text-6xl font-black text-center italic tracking-tighter uppercase">Get In Touch</h1>
      </header>

      {/* 3. MAIN CONTENT GRID */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT: FORM CARD */}
          <div className="bg-[#F9FAFB] border border-gray-100 rounded-[40px] p-10 shadow-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8 italic tracking-tight">Send a Message</h2>
            <form className="space-y-5" onSubmit={handleSendMessage}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Full Name" />
                <input required type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Email Address" />
              </div>
              <textarea required rows="5" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="How can we help you?" />
              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg ${submitted ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}
              >
                {loading ? 'Sending...' : submitted ? '✓ Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* RIGHT: INFO & MAP */}
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 p-8 rounded-[30px] shadow-sm">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-2">Call Us</h4>
                <p className="text-md font-bold italic">+63 (082) 123-4567</p>
              </div>
              <div className="bg-white border border-gray-100 p-8 rounded-[30px] shadow-sm">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-2">Email Us</h4>
                <p className="text-md font-bold italic">hello@hqproductions.com</p>
              </div>
            </div>

            {/* THE MAP CONTAINER - Fixed Height to match design */}
            <div className="h-[400px] w-full bg-gray-100 rounded-[40px] border border-gray-200 overflow-hidden shadow-inner relative z-0">
               {isMounted && (
                 <MapContainer 
                    center={davaoPosition} 
                    zoom={14} 
                    scrollWheelZoom={false}
                    className="h-full w-full"
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer url={mapTilerUrl} attribution={attribution} />
                    <Marker position={davaoPosition}>
                      <Popup>
                        <div className="text-center font-sans">
                          <strong className="block italic">HQ Productions</strong>
                          <span className="text-[10px] text-gray-500 uppercase">Davao City, PH</span>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
               )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}