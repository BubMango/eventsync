import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  // Updated IDs to match your folder names in image_775f42.png
  const services = [
    { id: "eventmanagement", title: "Event Management", description: "Comprehensive coordination from planning to execution for all event types in Davao City." },
    { id: "stage&soundsystem", title: "Stage & Sound System", description: "Professional audio-visual setups including high-quality stage production and engineering." },
    { id: "lighting", title: "Lighting", description: "Customizable lighting designs to set the perfect mood and visibility for any venue." },
    { id: "tent&equipment", title: "Tent & Equipment Rental", description: "Wide selection of tents, chairs, and specialized event hardware for various capacities." },
    { id: "logistics&coord", title: "Logistics & Coordination", description: "Seamless transportation and on-site movement of equipment and materials." },
    { id: "crewsupport", title: "Crew Support", description: "Skilled technicians and event staff trained to handle high-pressure environments." },
    { id: "productdesign", title: "Production Design", description: "Creative conceptualization and 3D mockups for unique event themes." },
    { id: "specialeffects", title: "Special Effects", description: "Adding flair with fog machines, pyrotechnics, and other specialty production elements." },
    { id: "equipmenttracking", title: "Equipment Tracking", description: "Utilizing our QR/RFID system for precise inventory and equipment security." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HEADER SECTION */}
      <section className="pt-12 pb-8 px-8 md:px-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Matches breadcrumb style in image_7663c6.png */}
          <p className="text-[10px] text-gray-400 mb-2 font-medium lowercase">Home / About</p>
          <h1 className="text-5xl font-bold text-center italic tracking-tight">Services</h1>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-16 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-gray-100 border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-2xl"
            >
              {/* Image Area with signature X pattern from wireframes */}
              <div className="w-full aspect-video bg-gray-200 border border-gray-300 flex items-center justify-center mb-6 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold z-10">[Service Image]</span>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4 italic">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Action Button - Updated to Link to subfolders */}
              <Link 
                href={`/services/${service.id}`}
                className="bg-[#6B7280] hover:bg-black text-white text-[10px] font-bold py-3 px-12 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-md active:scale-95"
              >
                More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-20 px-8 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6 italic">Ready to start your event?</h2>
        <Link 
          href="/quote" 
          className="inline-block border-2 border-white px-10 py-4 hover:bg-white hover:text-black transition-all font-bold uppercase text-[10px] tracking-widest rounded-xl"
        >
          Book an Event / Request a Quote
        </Link>
      </section>
    </div>
  );
}