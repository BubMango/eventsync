import React from 'react';

export default function PackagesPage() {
  const packageList = [
    {
      id: 1,
      title: "Package 1",
      description: "Comprehensive coordination from planning to execution for all event types in Davao City."
    },
    {
      id: 2,
      title: "Package 2",
      description: "Professional audio-visual setups including high-quality stage production and engineering."
    },
    {
      id: 3,
      title: "Service 1",
      description: "Customizable lighting designs to set the perfect mood and visibility for any venue."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. BREADCRUMB - Matches image_7663c6.png */}
      <nav className="max-w-7xl mx-auto w-full px-8 pt-12 md:px-20">
        <p className="text-[10px] text-gray-400 font-medium">Home / About</p>
      </nav>

      {/* 2. HEADER - Matches image_7663c6.png */}
      <header className="py-8">
        <h1 className="text-5xl font-bold text-center italic tracking-tight">
          Packages
        </h1>
      </header>

      {/* 3. PACKAGES GRID */}
      <section className="pb-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {packageList.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#F3F4F6] border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center 
                         transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:bg-white"
            >
              {/* Image Placeholder with Hover Effect - Matches image_7663c6.png */}
              <div className="w-full aspect-video bg-[#D1D5DB] rounded-xl relative mb-8 overflow-hidden border border-gray-200 
                              transition-colors duration-300 group-hover:bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50">
                  <svg className="w-full h-full">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  [Package Image]
                </span>
              </div>

              {/* Package Content */}
              <h3 className="text-2xl font-bold mb-4 italic transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-10 flex-grow">
                {item.description}
              </p>

              {/* Transition Button - Matches image_7666ee.png hover style */}
              <button className="bg-[#6B7280] hover:bg-black text-white text-[10px] font-bold py-3 px-12 rounded-xl 
                                 transition-all duration-300 uppercase tracking-widest shadow-md active:scale-95">
                More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}