import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  // Service data based on your Sitemap (image_68c061.png)
  const services = [
    { id: 1, title: "Event Management", description: "Comprehensive coordination from planning to execution for all event types in Davao City." },
    { id: 2, title: "Stage & Sound System", description: "Professional audio-visual setups including high-quality stage production and engineering." },
    { id: 3, title: "Lighting", description: "Customizable lighting designs to set the perfect mood and visibility for any venue." },
    { id: 4, title: "Tent & Equipment Rental", description: "Wide selection of tents, chairs, and specialized event hardware for various capacities." },
    { id: 5, title: "Logistics & Coordination", description: "Seamless transportation and on-site movement of equipment and materials." },
    { id: 6, title: "Crew Support", description: "Skilled technicians and event staff trained to handle high-pressure environments." },
    { id: 7, title: "Production Design", description: "Creative conceptualization and 3D mockups for unique event themes." },
    { id: 8, title: "Special Effects", description: "Adding flair with fog machines, pyrotechnics, and other specialty production elements." },
    { id: 9, title: "Equipment Tracking", description: "Utilizing our QR/RFID system for precise inventory and equipment security." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HEADER SECTION (Matches image_6b11c4.png) */}
      <section className="pt-12 pb-8 px-8 md:px-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-400 mb-2 font-medium">Home / About</p>
          <h1 className="text-5xl font-bold text-center italic tracking-tight">Services</h1>
        </div>
      </section>

      {/* 2. SERVICES GRID (Matches image_6b11c4.png) */}
      <section className="py-16 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-100 border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              {/* Image/Placeholder Area */}
              <div className="w-full aspect-video bg-gray-200 border border-gray-300 flex items-center justify-center mb-6 overflow-hidden">
                <span className="text-gray-400 text-xs uppercase tracking-widest">[Service Image]</span>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-4 italic">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Action Button */}
              <button className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold py-3 px-10 rounded-full transition-colors uppercase tracking-widest">
                More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION (Standard for your wireframe flow) */}
      <section className="py-20 px-8 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6 italic italic">Ready to start your event?</h2>
        <Link 
          href="/quote" 
          className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors font-bold uppercase text-sm"
        >
          Book an Event / Request a Quote
        </Link>
      </section>
    </div>
  );
}