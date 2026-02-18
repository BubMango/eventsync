import React from 'react';

export default function PackagesPage() {
  // Package data based on the wireframe labels
  const packageList = [
    {
      id: 1,
      title: "Package 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Package 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. BREADCRUMB SECTION (Matches image_765881.png) */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-8 md:px-20">
        <p className="text-[10px] font-bold text-gray-800 tracking-tight">
          Home / About
        </p>
      </nav>

      {/* 2. TITLE SECTION */}
      <header className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center italic tracking-tight text-gray-900">
          Packages
        </h1>
      </header>

      {/* 3. PACKAGES GRID (Matches image_765881.png) */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageList.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#D9D9D9] rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm"
            >
              {/* Image Placeholder with X-pattern */}
              <div className="w-full aspect-[16/9] bg-gray-300 border border-black relative mb-6 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                  <svg className="w-full h-full">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              {/* Package Details */}
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Action Button */}
              <button className="bg-[#606060] hover:bg-zinc-700 text-white text-xs font-bold py-2.5 px-12 rounded-full transition-colors uppercase tracking-widest">
                More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}