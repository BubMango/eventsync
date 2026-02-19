"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components to prevent SSR errors
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const davaoPosition = [7.0707, 125.6087]; 
  const mapTilerUrl = "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=LQIVRT8tDKEDNfqOIdy6";
  
  // Attribution string including MapTiler and OpenStreetMap
  const attribution = '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>';

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Home / Contact Us</p>
      </nav>

      <header className="py-8">
        <h1 className="text-5xl font-bold text-center italic tracking-tight">Contact Us</h1>
      </header>

      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Form */}
          <div className="bg-[#F3F4F6] border border-gray-100 rounded-3xl p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white group">
            <h2 className="text-2xl font-bold mb-6 italic">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Full Name</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all" placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all" placeholder="juan@example.com" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-2 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all resize-none" placeholder="Tell us about your event..." />
              </div>
              <button className="w-full bg-[#6B7280] hover:bg-black text-white text-[10px] font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-md active:scale-95">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Info & Live Map */}
          <div className="flex flex-col space-y-8">
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

            {/* MAP CONTAINER */}
            <div className="flex-grow w-full min-h-[400px] bg-gray-200 rounded-3xl border border-gray-300 relative overflow-hidden shadow-inner">
               <MapContainer 
                  center={davaoPosition} 
                  zoom={13} 
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url={mapTilerUrl}
                    attribution={attribution}
                  />
                  <Marker position={davaoPosition}>
                    <Popup>
                      <span className="font-bold italic">HQ Productions HQ</span> <br /> Davao City, Philippines.
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