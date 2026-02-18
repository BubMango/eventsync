import React from 'react';

export default function GalleryPage() {
  // Gallery items based on the "Service 1" labels in your wireframe grid
  const galleryItems = [
    { id: 1, title: "Event Management", category: "Corporate" },
    { id: 2, title: "Stage & Sound", category: "Concert" },
    { id: 3, title: "Lighting Design", category: "Wedding" },
    { id: 4, title: "Tent Rentals", category: "Outdoor" },
    { id: 5, title: "Crew Support", category: "Logistics" },
    { id: 6, title: "Special Effects", category: "Party" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. BREADCRUMB & HERO SECTION (Matches image_75f630.png) */}
      <section className="relative w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 pt-8 md:px-20">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-semibold">
            Home / About
          </p>
        </div>
        
        {/* Large Hero Banner */}
        <div className="w-full h-[300 md:h-[450px] bg-gray-200 border-y border-gray-300 flex items-center justify-center relative">
          <h1 className="text-6xl md:text-8xl font-bold italic tracking-tighter z-10">
            Gallery
          </h1>
          {/* Decorative X-pattern to match wireframe placeholder */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="2" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID (Matches image_75f630.png) */}
      <section className="py-16 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-gray-300 aspect-square overflow-hidden border border-gray-400 shadow-sm transition-all hover:shadow-xl"
              >
                {/* Image Placeholder with X-pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <svg className="w-full h-full opacity-20">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
                  </svg>
                </div>

                {/* Service Label (Matches "Service 1" text in wireframe) */}
                <div className="absolute bottom-10 left-8 z-20">
                  <h3 className="text-xl font-bold text-black bg-white/10 backdrop-blur-sm px-2 py-1 italic uppercase">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-widest uppercase border border-white px-4 py-2">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-20 text-center bg-white border-t border-gray-100">
        <h2 className="text-2xl font-bold italic mb-6">See our latest setups in Davao City</h2>
        <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
          View More Works
        </button>
      </section>
    </div>
  );
}