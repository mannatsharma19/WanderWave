import React, { useState } from 'react';
import { wanderwiseData } from './wanderwiseData';
import TopNavigation from './TopNavigation';
import CityHeroBanner from './CityHeroBanner';
import TabSelector from './TabSelector';
import ItineraryTimeline from '../feature-tabs/ItineraryTimeline';
import StayAndDine from '../feature-tabs/StayAndDine';
import BudgetVisualizer from '../feature-tabs/BudgetVisualizer';
import SafetyHub from '../feature-tabs/SafetyHub';
import { CheckCircle2, Info, X, Compass } from 'lucide-react';

export default function Dashboard({ 
  selectedCity: parentSelectedCity, 
  activeCity: parentActiveCity,
  onSelectCity: parentOnSelectCity, 
  onModifyTrip,
  cityData: parentCityData,
  toastNotice: parentToastNotice,
  onCloseToast
}) {
  // State management for active tab view and selected city
  const [activeTab, setActiveTab] = useState('itinerary');
  const [internalSelectedCity, setInternalSelectedCity] = useState('jaipur');

  // Determine effective active city key
  const selectedCity = parentActiveCity || parentSelectedCity || internalSelectedCity;

  // Handle selecting city from top navigation
  const handleSelectCity = (cityKey) => {
    setInternalSelectedCity(cityKey);
    if (parentOnSelectCity) {
      parentOnSelectCity(cityKey);
    }
  };

  // Get resolved city dataset
  const currentCityData = parentCityData || wanderwiseData[selectedCity] || wanderwiseData.jaipur;

  return (
    <div className="min-h-screen w-full bg-[#F9F6F0] font-sans antialiased text-[#2C2926] selection:bg-[#6B5B49] selection:text-white flex flex-col justify-between">
      <div className="pt-6 pb-0 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto space-y-6 w-full flex-1 flex flex-col">
        
        {/* Top Header / Switcher */}
        <TopNavigation 
          activeCity={selectedCity} 
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity} 
          onModifyTrip={onModifyTrip}
        />

        {/* Optional Toast Notification */}
        {parentToastNotice && (
          <div className="bg-white border border-[#EFEBE1] rounded-2xl p-4 flex items-center justify-between gap-4 text-xs font-sans text-[#2C2926] shadow-xs animate-fade-in">
            <div className="flex items-center gap-3">
              <Info className="w-4 h-4 shrink-0 text-[#6B5B49]" />
              <span className="font-semibold">{parentToastNotice}</span>
            </div>
            {onCloseToast && (
              <button
                onClick={onCloseToast}
                className="p-1 hover:bg-[#F9F6F0] rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-[#2C2926]" />
              </button>
            )}
          </div>
        )}

        {/* City Hero Banner */}
        <CityHeroBanner cityData={currentCityData} data={currentCityData} />

        {/* Feasibility Alert Banner */}
        <div className="bg-white border border-[#EFEBE1] rounded-2xl p-4 sm:p-5 shadow-xs flex items-start gap-4">
          <div className="p-2.5 bg-[#D8F3DC] rounded-xl text-[#1B4332] shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
          </div>
          <div className="min-w-0">
            <span className="bg-[#D8F3DC] text-[#1B4332] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1 inline-block">
              WanderWise Feasibility Report: ACTIVE
            </span>
            <p className="text-xs sm:text-sm font-sans text-gray-600 mt-2 leading-relaxed">
              We have cross-checked the travel times between landmarks, verified local shop opening hours, and synced live emergency services for <strong className="font-semibold text-[#2C2926]">{currentCityData.name}</strong>. All stops are calculated within a safe travel window ({currentCityData.duration}, Budget: {currentCityData.formattedBudget || `₹${currentCityData.totalBudget?.toLocaleString()}`}).
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <TabSelector 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Conditional Render of Active Feature Tab */}
        <main className="w-full min-h-[400px] pt-1">
          {activeTab === 'itinerary' && (
            <div key="itinerary" className="fade-in max-w-4xl mx-auto">
              <ItineraryTimeline data={currentCityData} itinerary={currentCityData.itinerary} />
            </div>
          )}

          {activeTab === 'stayDine' && (
            <div key="stayDine" className="fade-in max-w-5xl mx-auto">
              <StayAndDine data={currentCityData} />
            </div>
          )}

          {activeTab === 'budget' && (
            <div key="budget" className="fade-in max-w-4xl mx-auto">
              <BudgetVisualizer data={currentCityData} />
            </div>
          )}

          {activeTab === 'safety' && (
            <div key="safety" className="fade-in max-w-6xl mx-auto">
              <SafetyHub data={currentCityData} cityKey={selectedCity} cityName={currentCityData.name} />
            </div>
          )}
        </main>

        {/* Editorial Earthy-Brown Footer */}
        <footer className="w-full bg-[#6B5B49] text-white py-10 px-4 text-center mt-auto mb-0 rounded-t-3xl sm:rounded-t-[2.5rem]">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2.5">
              <img src="/images/logo.png" alt="WanderWise Logo" className="w-6 h-6 rounded-full object-cover border border-white/30" />
              <span className="font-serif text-xl font-bold text-white tracking-tight">WanderWise</span>
            </div>
            <p className="italic font-serif text-white/90 text-sm sm:text-base max-w-md mx-auto">
              "Experience the wanderlust, skip the guesswork."
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/75 pt-2 border-t border-white/20">
              WanderWise © 2026 — Places Worth The Journey. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
