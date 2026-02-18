"use client"; // Required for the testimonial scrolling

import React, { useState } from 'react';

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Client Name 1",
      rating: 5,
      text: "HQ Productions transformed our corporate gala. Their attention to detail and professional crew in Davao is unmatched."
    },
    {
      name: "Client Name 2",
      rating: 5,
      text: "The best event management in Davao! Our wedding stage was exactly how we envisioned it. Highly recommended."
    },
    {
      name: "Client Name 3",
      rating: 4,
      text: "Extremely reliable equipment rentals. The team was prompt with the setup and very professional throughout the event."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      
      {/* 1. HERO SECTION (image_6af681.png) */}
      <section className="relative py-16 px-8 md:px-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Home / About</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-12 italic">About Us</h1>
          
          <div className="w-full aspect-[21/9] bg-gray-200 border border-gray-300 flex items-center justify-center relative mb-12">
            <span className="text-gray-400">[Main Office / Team Photo Placeholder]</span>
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" /></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <h2 className="text-3xl font-bold leading-tight italic">
              Leading event management services in Davao City since 2017.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HQ Productions specializes in high-quality logistics, stage production, and seamless event execution. We bring your vision to life with precision and creativity, ensuring every detail is managed professionally.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS & SCROLLING TESTIMONIALS (image_75fa6c.png) */}
      <section className="py-20 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="w-full aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
             <span className="text-gray-400">[Action Shot / Video]</span>
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <span className="text-4xl font-bold italic">500+</span>
                <p className="text-[10px] uppercase text-gray-500 mt-2 tracking-tighter font-bold">Events Managed</p>
              </div>
              <div>
                <span className="text-4xl font-bold italic">100%</span>
                <p className="text-[10px] uppercase text-gray-500 mt-2 tracking-tighter font-bold">Client Satisfaction</p>
              </div>
              <div>
                <span className="text-4xl font-bold italic">10+</span>
                <p className="text-[10px] uppercase text-gray-500 mt-2 tracking-tighter font-bold">Partnerships</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 italic underline underline-offset-8">Testimonials</h3>
              <div className="relative overflow-hidden bg-[#E5E7EB] p-8 rounded-lg">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                  {testimonials.map((t, i) => (
                    <div key={i} className="min-w-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center font-bold text-white text-xs">X</div>
                        <div>
                          <p className="font-bold text-sm">{t.name}</p>
                          <div className="flex text-yellow-600 text-[10px]">{"★".repeat(t.rating)}</div>
                        </div>
                      </div>
                      <p className="text-sm italic text-gray-600 leading-relaxed">"{t.text}"</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 transition-all duration-300 ${activeIndex === i ? 'w-10 bg-black' : 'w-3 bg-gray-400'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION - Matches image_765ee9.png */}
      <section className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="flex justify-center mb-16">
            <h2 className="text-3xl font-bold italic border-b-2 border-black pb-2 px-4">
              Our Story
            </h2>
          </div>
          
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gray-200"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              
              {/* 2017 - The Beginning (Right Side) */}
              <div className="relative flex justify-end items-start group">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-black z-10"></div>
                <div className="w-[45%] pl-8">
                  <span className="text-2xl font-bold italic block mb-1">2017</span>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">The Beginning</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    HQ Productions was founded in Davao City.
                  </p>
                </div>
              </div>

              {/* 2020 - Growth Phase (Left Side) */}
              <div className="relative flex justify-start items-start group">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-black z-10"></div>
                <div className="w-[45%] pr-8 text-right">
                  <span className="text-2xl font-bold italic block mb-1">2020</span>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Growth Phase</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Expanded inventory to include professional stage systems.
                  </p>
                </div>
              </div>

              {/* 2024 - EventSync Launch (Right Side) */}
              <div className="relative flex justify-end items-start group">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-black z-10"></div>
                <div className="w-[45%] pl-8">
                  <span className="text-2xl font-bold italic block mb-1">2024</span>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">EventSync Launch</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Introduced digital inventory and automated scheduling.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}