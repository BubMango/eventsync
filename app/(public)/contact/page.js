"use client";

import React, { useState, useEffect } from 'react'; // Added useEffect
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// 1. Keep dynamic imports for components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To ensure we are in the browser

  // 2. Fix for Leaflet Icons - executed ONLY in the browser
  useEffect(() => {
    setIsMounted(true);
    
    // Import Leaflet inside useEffect so it doesn't run on the server
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

  // ... (Keep your handleSendMessage and the rest of the return UI exactly the same)

  // 3. Only render the map if we are in the browser
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ... (breadcrumb and header) */}
      
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ... (form) */}

          <div className="flex flex-col space-y-6">
            {/* ... (info cards) */}

            <div className="flex-grow w-full min-h-[400px] bg-gray-100 rounded-[40px] border border-gray-200 relative overflow-hidden shadow-inner group">
               {isMounted && (
                 <MapContainer 
                    center={davaoPosition} 
                    zoom={14} 
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url={mapTilerUrl} attribution={attribution} />
                    <Marker position={davaoPosition}>
                      <Popup>
                        <div className="text-center p-1">
                          <strong className="block italic">HQ Productions</strong>
                          <span className="text-[10px] uppercase text-gray-500">Davao City, PH</span>
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