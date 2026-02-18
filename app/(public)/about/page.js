import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION - Matches image_6af681.png */}
      <section className="relative w-full py-16 px-8 md:px-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Home / About</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-12 italic">About Us</h1>
          
          {/* Main Hero Placeholder */}
          <div className="w-full aspect-[21/9] bg-gray-200 border border-gray-300 flex items-center justify-center relative mb-16">
            <span className="text-gray-400">[Main Office / Team Photo]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight italic">
              Leading event management services in Davao City since 2017.
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2 h-32 bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">[Workshop]</span>
                </div>
                <div className="w-1/2 h-32 bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">[Equipment]</span>
                </div>
              </div>
              <p className="text-gray-600">
                HQ Productions specializes in high-quality logistics, stage production, and seamless event execution. We bring your vision to life with precision and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & TESTIMONIALS - Matches image_6af681.png */}
      <section className="py-20 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="w-full aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
             <span className="text-gray-400">[Action Shot / Video]</span>
          </div>
          
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <span className="text-4xl font-bold italic">500+</span>
                <p className="text-xs uppercase text-gray-500 mt-2 tracking-tighter">Events Managed</p>
              </div>
              <div>
                <span className="text-4xl font-bold italic">100%</span>
                <p className="text-xs uppercase text-gray-500 mt-2 tracking-tighter">Client Satisfaction</p>
              </div>
              <div>
                <span className="text-4xl font-bold italic">10+</span>
                <p className="text-xs uppercase text-gray-500 mt-2 tracking-tighter">Partnerships</p>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-xl font-bold mb-6 italic">Testimonials</h3>
              <div className="bg-gray-200 p-8 rounded-sm relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center font-bold text-white">X</div>
                  <div>
                    <p className="font-bold text-sm">Client Name</p>
                    <div className="flex text-yellow-500 text-xs">★★★★★</div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-600">
                  "HQ Productions transformed our corporate gala. Their attention to detail and professional crew in Davao is unmatched."
                </p>
                {/* Carousel indicators */}
                <div className="flex gap-2 mt-6">
                  <div className="h-1 w-8 bg-black"></div>
                  <div className="h-1 w-2 bg-gray-400"></div>
                  <div className="h-1 w-2 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY TIMELINE - Matches image_6af69f.png and image_6af6bf.png */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 italic border-b border-black w-fit pr-8 pb-2">Our Story</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

            {/* Timeline Events */}
            {[
              { year: "2017", title: "The Beginning", desc: "HQ Productions was founded in Davao City with a small crew and a big vision for event logistics." },
              { year: "2019", title: "Expanding Services", desc: "Integrated full-scale stage production and lighting equipment into our inventory tracking system." },
              { year: "2021", title: "The New Standard", desc: "Implemented EventSync's real-time booking conflict prevention to handle high-volume event seasons." },
              { year: "2024", title: "Current Excellence", desc: "Leading the industry with QR/RFID inventory management and automated staff scheduling." }
            ].map((event, index) => (
              <div key={index} className={`relative flex items-center justify-between mb-24 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Image Block */}
                <div className="w-[45%] aspect-video bg-gray-200 border border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">[Historical Image {event.year}]</span>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black z-10 border-4 border-white"></div>

                {/* Content Block */}
                <div className="w-[45%]">
                  <span className="text-2xl font-bold italic mb-2 block">{event.year} {event.title}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}