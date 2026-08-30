import React, { useState } from 'react';
import { Calendar, Wallet, CheckCircle2 } from 'lucide-react';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80';

export default function CityHeroBanner({ cityData, data }) {
  const activeData = cityData || data || {};
  const { name = 'Destination', tagline, duration, totalBudget, formattedBudget, foreignCurrency } = activeData;
  const heroImg = activeData.hero_image || activeData.heroImage || FALLBACK_HERO;

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (e) => {
    if (e.currentTarget.src !== FALLBACK_HERO) {
      e.currentTarget.src = FALLBACK_HERO;
    }
  };

  // Format budget display logic
  const displayBudget = formattedBudget || (
    foreignCurrency 
      ? `₹${totalBudget ? Number(totalBudget).toLocaleString('en-IN') : '30,000'} (approx. ${foreignCurrency})`
      : `₹${totalBudget ? Number(totalBudget).toLocaleString('en-IN') : '20,000'}`
  );

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#2C2926] border border-[#EFEBE1] shadow-xs h-44 sm:h-48 max-h-[200px] transition-all duration-300">
      {/* Background Image */}
      <img
        src={heroImg}
        alt={`${name} landscape`}
        onLoad={() => setImageLoaded(true)}
        onError={handleImageError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-0 ${
          imageLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
        }`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1816]/90 via-[#2C2926]/75 to-[#2C2926]/40 z-10 pointer-events-none"></div>

      {/* Main Horizontal Compact Header Content */}
      <div className="relative z-20 h-full p-4 sm:px-6 sm:py-4 md:px-8 flex flex-col justify-between">
        
        {/* Top Header Line: Tag Badge + Serif Title + Inline Tagline */}
        <div>
          <div className="flex items-center gap-2.5 mb-1 flex-wrap">
            <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
              DESTINATION SPOTLIGHT
            </span>
            {tagline && (
              <span className="hidden sm:inline-block text-xs font-serif italic text-white/90 truncate max-w-md">
                • {tagline}
              </span>
            )}
          </div>

          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-none drop-shadow-sm">
            {name}
          </h1>
        </div>

        {/* Bottom Stats Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Budget Pill */}
          <div className="bg-white text-[#2C2926] px-3 py-1.5 rounded-xl border border-[#EFEBE1] flex items-center gap-2 font-sans text-xs font-bold shadow-xs">
            <Wallet className="w-3.5 h-3.5 text-[#6B5B49] shrink-0" />
            <span className="truncate">
              Budget: <strong className="text-[#2C2926] font-bold">{displayBudget}</strong>
            </span>
          </div>

          {/* Duration Pill */}
          <div className="bg-white text-[#2C2926] px-3 py-1.5 rounded-xl border border-[#EFEBE1] flex items-center gap-2 font-sans text-xs font-bold shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#6B5B49] shrink-0" />
            <span>
              Duration: <strong className="text-[#2C2926] font-bold">{duration}</strong>
            </span>
          </div>

          {/* Feasibility Tag - Soft Mint Badge */}
          <div className="bg-[#D8F3DC] text-[#1B4332] px-3.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-xs ml-auto sm:ml-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] shrink-0" />
            <span>FEASIBILITY CHECKED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
