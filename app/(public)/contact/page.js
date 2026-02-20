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
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      {/* 1. BREADCRUMB - Consistent with Packages feel */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-16 md:px-20 text-center">
        <p className="text-[10px] text-gray-400 font-black tracking-[0.4em] uppercase">Home / Contact Us</p>
      </nav>

      {/* 2. HEADER - Matched to Packages Page font style */}
      <header className="py-12">
        <h1 className="text-7xl font-black text-center italic tracking-tighter uppercase leading-none">
          Get In <span className="text-gray-900">Touch</span>
        </h1>
      </header>

      {/* 3. MAIN CONTENT GRID */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT: FORM CARD - Adopting Package Card Soft Gray (#F3F4F6) */}
          <div className="bg-[#F3F4F6] border border-gray-100 rounded-[45px] p-12 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-3xl font-black mb-10 italic uppercase tracking-tighter">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                  <input required type="text" className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm font-bold outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Rhaiah Franccizca" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                  <input required type="email" className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm font-bold outline-none focus:ring-2 focus:ring-black transition-all" placeholder="hello@hqp.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                <textarea required rows="5" className="w-full bg-white border-none rounded-3xl px-6 py-5 text-sm font-bold outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="How can we help you?" />
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-300 shadow-xl active:scale-[0.98] ${submitted ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}
              >
                {loading ? 'Processing...' : submitted ? '✓ Sent Successfully' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* RIGHT: INFO & MAP */}
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Call Us Card */}
              <div className="bg-[#F3F4F6] border border-gray-100 p-10 rounded-[35px] shadow-sm group hover:bg-black transition-all duration-500">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-2 group-hover:text-zinc-500 tracking-widest">Call Us</h4>
                <p className="text-lg font-black italic group-hover:text-white transition-colors">+63 (082) 123-4567</p>
              </div>
              {/* Email Us Card */}
              <div className="bg-[#F3F4F6] border border-gray-100 p-10 rounded-[35px] shadow-sm group hover:bg-black transition-all duration-500">
                <h4 className="text-[9px] uppercase font-black text-gray-400 mb-2 group-hover:text-zinc-500 tracking-widest">Email Us</h4>
                <p className="text-lg font-black italic group-hover:text-white transition-colors">hello@hqproductions.com</p>
              </div>
            </div>

            {/* THE MAP CONTAINER - Adjusted colors and corner radius */}
            <div className="flex-grow min-h-[400px] w-full bg-[#F3F4F6] rounded-[45px] border border-gray-100 overflow-hidden shadow-inner relative z-0 group">
               {isMounted && (
                 <MapContainer 
                    center={davaoPosition} 
                    zoom={15} 
                    scrollWheelZoom={false}
                    className="h-full w-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer url={mapTilerUrl} attribution={attribution} />
                    <Marker position={davaoPosition}>
                      <Popup>
                        <div className="text-center p-2">
                          <strong className="block font-black italic uppercase tracking-tighter">HQ Productions</strong>
                          <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Davao City HQ</span>
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