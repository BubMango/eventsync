import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-20 bg-gray-50">
        <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-300 flex items-center justify-center border-2 border-dashed border-gray-400">
          <span className="text-gray-500">[Hero Image/Video]</span>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">HQ Productions</h1>
          <p className="text-lg text-gray-600 mb-6">
            Leading event management services in Davao City since 2017. We specialize in high-quality 
            logistics, stage production, and seamless event execution.
          </p>
          <Link href="/quote" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
            Book an Event
          </Link>
        </div>
      </section>

      {/* 2. ABOUT / SERVICES GRID */}
      <section className="p-8 md:p-20 text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">About Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Event Planning", desc: "Full coordination and logistics." },
            { title: "Stage & Lighting", desc: "Professional sound and visual setups." },
            { title: "Equipment Rentals", desc: "Tents, chairs, and event hardware." },
            { title: "Crew Support", desc: "Expert staff for event-day execution." }
          ].map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-video bg-gray-200 mb-4 border border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-400">[Service Icon]</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{service.desc}</p>
              <button className="text-xs border border-black px-4 py-2 hover:bg-black hover:text-white">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS (The Process) */}
      <section className="flex flex-col md:flex-row items-center p-8 md:p-20 bg-gray-50">
        <div className="w-full md:w-1/2 aspect-video bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">[Process Visual]</span>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-black text-white flex-shrink-0 flex items-center justify-center mr-4">1</div>
              <div>
                <h4 className="font-bold">Send Your Event Details</h4>
                <p className="text-sm text-gray-600">Fill out our quote request form with your event requirements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-black text-white flex-shrink-0 flex items-center justify-center mr-4">2</div>
              <div>
                <h4 className="font-bold">We Plan & Prepare</h4>
                <p className="text-sm text-gray-600">Using our real-time inventory and scheduling, we finalize the logistics.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-black text-white flex-shrink-0 flex items-center justify-center mr-4">3</div>
              <div>
                <h4 className="font-bold">Event Day Execution</h4>
                <p className="text-sm text-gray-600">Our crew arrives and handles everything from setup to sweep-line audit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECENT WORKS (Gallery Sneak Peek) */}
      <section className="p-8 md:p-20">
        <h2 className="text-3xl font-bold mb-12">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 pb-8">
              <div className="w-full sm:w-1/2 aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400">[Project Image]</span>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-6 mt-4 sm:mt-0 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">Project Name {i}</h3>
                <p className="text-sm text-gray-500 mb-4">A brief description of the successful event managed by HQ Productions in Davao.</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-[10px] bg-gray-100 px-2 py-1">Lighting</span>
                  <span className="text-[10px] bg-gray-100 px-2 py-1">Stage</span>
                </div>
                <button className="w-fit text-xs border border-black px-4 py-2 hover:bg-black hover:text-white">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}