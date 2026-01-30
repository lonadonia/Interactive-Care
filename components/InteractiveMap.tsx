
import React, { useState } from 'react';
import { SITE_CONTENT } from '../content';
import { Location } from '../types';

const InteractiveMap: React.FC = () => {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row h-[600px]">
      {/* Sidebar List */}
      <div className="w-full lg:w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
        <div className="p-6 border-b border-gray-100 bg-white">
          <h3 className="font-bold text-lg">Our Locations</h3>
          <p className="text-sm text-gray-500 mt-1">Residential homes and hubs</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {SITE_CONTENT.locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelected(loc)}
              className={`w-full text-left p-4 rounded-xl transition-all border ${
                selected?.id === loc.id 
                  ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                  : 'bg-white border-transparent hover:border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  loc.type === 'home' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {loc.type === 'home' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    )}
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{loc.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-tight mt-0.5">{loc.type === 'home' ? 'Residential' : 'Outreach Hub'}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Map Simulation */}
      <div className="flex-1 relative bg-indigo-50/30 overflow-hidden">
        {/* Placeholder SVG map representation for demo stability */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
           <svg className="w-full h-full text-indigo-100 opacity-50" viewBox="0 0 400 600" fill="currentColor">
              <path d="M150,50 Q200,20 250,50 L300,150 Q320,250 250,400 Q200,550 100,500 Q50,400 80,200 Z" />
           </svg>
           
           {/* Markers */}
           {SITE_CONTENT.locations.map((loc) => (
             <button
               key={loc.id}
               onClick={() => setSelected(loc)}
               className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group ${
                 selected?.id === loc.id ? 'scale-125 z-10' : 'hover:scale-110'
               }`}
               style={{
                 left: `${((loc.lng + 5) * 10) % 80 + 10}%`,
                 top: `${((loc.lat - 50) * 30) % 80 + 10}%`
               }}
             >
                <div className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center border-4 border-white ${
                  loc.type === 'home' ? 'bg-indigo-600' : 'bg-emerald-600'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-[10px] font-bold rounded shadow border whitespace-nowrap transition-opacity ${selected?.id === loc.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                   {loc.name}
                </div>
             </button>
           ))}
        </div>

        {/* Info Overlay */}
        {selected && (
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-2xl border border-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-start">
              <div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block ${
                  selected.type === 'home' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {selected.type === 'home' ? 'Residential Home' : 'Community Hub'}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{selected.name}</h3>
                <p className="text-gray-500 mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {selected.address}
                </p>
              </div>
              <button 
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex space-x-3">
               <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700">Enquire for Placement</button>
               <button className="px-4 border border-gray-200 py-2 rounded-lg font-semibold text-sm hover:bg-gray-50">View Details</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
