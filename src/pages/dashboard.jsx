import React from 'react';

export default function CoastalDerbyTrophy() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-blue-50 rounded-lg shadow-lg border-2 border-gray-800">
      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-black tracking-wider text-gray-800 mb-2">COASTAL DERBY TROPHY</h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto"></div>
      </div>
      
      {/* Trophy Blocks Container - Horizontal Layout */}
      <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
        {[1, 2, 3].map((number) => (
          <div 
            key={number}
            className="relative transition-all duration-300 hover:scale-105"
          >
            {/* Trophy Block */}
            <div className="w-64 h-80">
              {/* Block without 3D effects */}
              <div className="bg-white border-2 border-gray-800 rounded shadow-lg p-6 h-full">
                {/* Number */}
                <div className="text-8xl font-bold text-center mb-4">{number}</div>
                
                {/* Text */}
                <div className="text-xl font-bold text-center">COASTAL WINNERS</div>
                
                {/* Logo placeholder - only on first block */}
                {number === 1 && (
                  <div className="absolute -top-16 -left-16">
                    <div className="rounded-full bg-white border-2 border-gray-800 w-16 h-16 flex items-center justify-center">
                      <span className="text-xs font-bold">LOGO</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer with watermark */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Coastal Derby Association
      </div>
    </div>
  );
}