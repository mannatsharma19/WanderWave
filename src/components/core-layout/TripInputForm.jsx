import React, { useState } from 'react';
import { Compass, Search, Calendar, Wallet, ShieldCheck, Clock, Sparkles, MapPin, Check, ArrowRight } from 'lucide-react';

const PILOT_CITIES = ['Shimla', 'Jaipur', 'Tokyo', 'Dubai', 'Chandigarh'];

export default function TripInputForm({
  cityInput,
  setCityInput,
  duration,
  setDuration,
  budget,
  setBudget,
  includeEmergency,
  setIncludeEmergency,
  verifyHours,
  setVerifyHours,
  pace,
  setPace,
  onSubmit,
  isSimulating
}) {
  const [inputFocus, setInputFocus] = useState(false);

  const handleSelectPill = (cityName) => {
    setCityInput(cityName);
    const normalized = cityName.toLowerCase();
    if (normalized === 'tokyo' || normalized === 'dubai') {
      setBudget(30000);
    } else {
      setBudget(20000);
    }
  };

  const handleStepperChange = (delta) => {
    const newVal = Math.max(1, Math.min(14, Number(duration) + delta));
    setDuration(newVal);
  };

  const formatCurrency = (val) => {
    const num = Number(val) || 0;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80')" }}
    >
      {/* Dark Overlay for optimal text contrast */}
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-90 z-0"></div>

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full max-w-6xl mx-auto">
        
        {/* Compact Header Text: Logo, Main Title, Tagline in Crisp White Serif */}
        <header className="text-center space-y-1 pt-1 sm:pt-2">
          <div className="flex items-center justify-center gap-2.5 mb-0.5">
            <img src="/images/logo.png" alt="WanderWise Logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm border border-white/20" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              WanderWise
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className="italic text-white/90 text-xs sm:text-sm font-light drop-shadow-sm">
              "Experience the wanderlust, skip the guesswork."
            </p>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-white/90 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 shadow-2xs inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              Real-Time Feasibility Engine
            </span>
          </div>
        </header>

        {/* The Floating Card: compact white/cream card floating in center */}
        <div className="w-full max-w-5xl mx-auto my-2 sm:my-3 bg-[#FDFBF7] md:bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 p-4 sm:p-5 lg:p-6 text-[#2C2926]">
          
          {/* Loading / Feasibility Check Simulation Overlay */}
          {isSimulating ? (
            <div className="py-8 md:py-10 px-4 flex flex-col items-center justify-center text-center transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full border-4 border-[#EFEBE1] border-t-[#605444] animate-spin"></div>
                <Compass className="w-8 h-8 text-[#605444] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926] mb-1">
                Generating Feasible Itinerary...
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A6B] mb-4 bg-[#F8F5F0] px-3 py-1 rounded-full border border-[#EFEBE1]">
                Evaluating route logistics for {cityInput || 'Jaipur'}
              </p>

              {/* Simulated Verification Steps */}
              <div className="max-w-md w-full space-y-2 text-left bg-white p-4 rounded-xl border border-[#EFEBE1] shadow-xs">
                <div className="flex items-center gap-3 text-xs font-sans text-[#2C2926] animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-[#605444]"></span>
                  <span>Checking route feasibility & travel windows...</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#2C2926] animate-pulse delay-150">
                  <span className="w-2 h-2 rounded-full bg-[#8C7A6B]"></span>
                  <span>Cross-verifying landmark opening hours...</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#2C2926] animate-pulse delay-300">
                  <span className="w-2 h-2 rounded-full bg-[#605444]"></span>
                  <span>Syncing local emergency contacts & safe havens...</span>
                </div>
              </div>
            </div>
          ) : (
            /* Form Content in Compact Desktop Grid Layout */
            <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-4">
              
              {/* Step 1: Destination City */}
              <div className="lg:col-span-2 space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A6B]">
                  1. Select Destination City
                </label>

                <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#605444]">
                      <MapPin className="w-4 h-4 text-[#605444]" />
                    </div>
                    <input
                      type="text"
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                      placeholder="Enter a city (e.g. Shimla, Jaipur, Tokyo, Dubai, Chandigarh)..."
                      className={`w-full pl-10 pr-10 py-2.5 bg-[#F8F5F0] text-[#2C2926] font-sans text-xs sm:text-sm rounded-xl border transition-all outline-none ${
                        inputFocus
                          ? 'border-[#605444] ring-2 ring-[#605444]/20 bg-white'
                          : 'border-[#EFEBE1] hover:border-[#605444]/50'
                      }`}
                      required
                    />
                    {cityInput && (
                      <button
                        type="button"
                        onClick={() => setCityInput('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-sans text-gray-500 hover:text-[#2C2926]"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Popular Pilot Destinations inline */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#8C7A6B] shrink-0">
                      Popular:
                    </span>
                    {PILOT_CITIES.map((city) => {
                      const isSelected = cityInput.trim().toLowerCase() === city.toLowerCase();
                      return (
                        <button
                          key={city}
                          type="button"
                          onClick={() => handleSelectPill(city)}
                          className={`px-3 py-1 text-xs font-sans font-medium rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                            isSelected
                              ? 'bg-[#605444] text-white shadow-xs'
                              : 'bg-[#F8F5F0] text-[#2C2926] hover:bg-[#EFEBE1]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          {city}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 2: Trip Duration */}
              <div className="space-y-2 bg-[#F8F5F0] p-3.5 sm:p-4 rounded-2xl border border-[#EFEBE1] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A6B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#605444]" />
                    2. Trip Duration
                  </label>
                  <span className="text-[11px] font-sans text-gray-500">
                    (1 - 14 Days)
                  </span>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleStepperChange(-1)}
                      className="w-8 h-8 rounded-full bg-white border border-[#EFEBE1] hover:border-[#605444] text-[#2C2926] font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <div className="bg-white border border-[#EFEBE1] rounded-xl px-3 py-1 text-center min-w-[95px]">
                      <span className="font-serif text-base font-bold text-[#2C2926]">
                        {duration} {Number(duration) === 1 ? 'Day' : 'Days'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleStepperChange(1)}
                      className="w-8 h-8 rounded-full bg-white border border-[#EFEBE1] hover:border-[#605444] text-[#2C2926] font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Preset Pills */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 5].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`px-2.5 py-0.5 text-xs font-sans rounded-full transition-colors ${
                          Number(duration) === d
                            ? 'bg-[#2C2926] text-white font-medium'
                            : 'bg-white text-[#2C2926] border border-[#EFEBE1] hover:border-[#2C2926]'
                        }`}
                      >
                        {d}d
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Total Budget */}
              <div className="space-y-2 bg-[#F8F5F0] p-3.5 sm:p-4 rounded-2xl border border-[#EFEBE1] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A6B] flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-[#605444]" />
                    3. Total Budget
                  </label>
                  <span className="font-serif text-base font-bold text-[#605444]">
                    {formatCurrency(budget)}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-[#605444] cursor-pointer"
                  />
                  <div className="relative w-28 shrink-0">
                    <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-xs font-sans text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="1000"
                      max="500000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full pl-5 pr-2 py-1 bg-white text-[#2C2926] text-xs font-sans rounded-lg border border-[#EFEBE1] focus:outline-[#605444]"
                    />
                  </div>
                </div>

                {/* Preset Budget Options */}
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] text-gray-500 uppercase font-medium">Presets:</span>
                  <div className="flex gap-1">
                    {[15000, 20000, 30000, 50000].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`px-2 py-0.5 text-xs font-sans rounded-full transition-colors ${
                          Number(budget) === b
                            ? 'bg-[#2C2926] text-white font-medium'
                            : 'bg-white text-[#2C2926] border border-[#EFEBE1] hover:border-[#2C2926]'
                        }`}
                      >
                        ₹{(b/1000).toFixed(b % 1000 === 0 ? 0 : 1)}k
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4: Feasibility Engine Preferences & Pace */}
              <div className="lg:col-span-2 space-y-2.5">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C7A6B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#605444]" />
                  4. Feasibility Engine Preferences
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Emergency Toggle */}
                  <label className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-[#F8F5F0] rounded-xl border border-[#EFEBE1] cursor-pointer hover:border-[#605444]/60 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeEmergency}
                      onChange={(e) => setIncludeEmergency(e.target.checked)}
                      className="accent-[#605444] w-4 h-4 cursor-pointer shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#2C2926] block leading-tight">
                        Include Emergency Safe Zones
                      </span>
                      <span className="text-[11px] font-sans text-gray-600 block truncate">
                        Sync official hotlines & medical centers along itinerary
                      </span>
                    </div>
                  </label>

                  {/* Hours Verification Toggle */}
                  <label className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-[#F8F5F0] rounded-xl border border-[#EFEBE1] cursor-pointer hover:border-[#605444]/60 transition-colors">
                    <input
                      type="checkbox"
                      checked={verifyHours}
                      onChange={(e) => setVerifyHours(e.target.checked)}
                      className="accent-[#605444] w-4 h-4 cursor-pointer shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#2C2926] block leading-tight">
                        Cross-Verify Opening Hours
                      </span>
                      <span className="text-[11px] font-sans text-gray-600 block truncate">
                        Ensure stop timings align with live operating schedules
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#2C2926] hover:bg-[#1A1816] text-white font-sans text-xs sm:text-sm font-medium tracking-widest uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Generate Feasible Itinerary</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Footer */}
        <footer className="w-full text-center py-2 border-t border-white/10 relative z-10 mt-auto">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
            WanderWise © 2026 — Experience the wanderlust, skip the guesswork.
          </p>
        </footer>

      </div>
    </div>
  );
}
