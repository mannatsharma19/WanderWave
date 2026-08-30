import React from 'react';
import { Compass, Check, Edit3 } from 'lucide-react';

export default function TopNavigation({ activeCity, selectedCity, onSelectCity, onModifyTrip }) {
  const currentCityKey = activeCity || selectedCity || 'jaipur';
  const cities = [
    { key: 'shimla', name: 'Shimla' },
    { key: 'jaipur', name: 'Jaipur' },
    { key: 'tokyo', name: 'Tokyo' },
    { key: 'dubai', name: 'Dubai' },
    { key: 'chandigarh', name: 'Chandigarh' }
  ];

  const currentCity = cities.find((c) => c.key === currentCityKey) || {
    key: currentCityKey,
    name: currentCityKey ? currentCityKey.charAt(0).toUpperCase() + currentCityKey.slice(1) : 'Jaipur'
  };

  return (
    <header className="w-full bg-white border border-[#EFEBE1] rounded-2xl p-4 sm:p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Brand Logo & Motto */}
        <div className="flex items-center gap-3.5">
          <img src="/images/logo.png" alt="WanderWise Logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs border border-[#EFEBE1] shrink-0" />
          <div>
            <div className="flex flex-wrap items-baseline gap-2.5">
              <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C2926] m-0 leading-none">
                WanderWise
              </h1>
              <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                Feasibility Engine v2.0
              </span>
            </div>
            <p className="text-xs font-serif italic text-gray-600 mt-1">
              "Experience the wanderlust, skip the guesswork."
            </p>
          </div>
        </div>

        {/* Right Controls: Modify Trip & Selected City Pill */}
        <div className="flex items-center gap-2.5 flex-wrap justify-start sm:justify-end">
          {onModifyTrip && (
            <button
              onClick={onModifyTrip}
              className="px-4 py-2 text-xs font-sans font-semibold tracking-wide text-[#2C2926] bg-[#F9F6F0] hover:bg-[#2C2926] hover:text-white border border-[#EFEBE1] rounded-xl transition-all duration-200 shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Modify Trip</span>
            </button>
          )}

          {/* Active Viewing City Pill */}
          <div 
            className="px-4 py-2 text-xs font-serif font-bold tracking-wide uppercase rounded-xl bg-[#2C2926] text-white flex items-center gap-1.5 shrink-0 shadow-xs"
            title={`Active viewing city: ${currentCity.name}`}
          >
            <Check className="w-3.5 h-3.5 text-[#F0EBE1] stroke-[3]" />
            <span>{currentCity.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
