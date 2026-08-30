import React, { useState, useEffect } from 'react';
import { wanderwiseData } from './components/core-layout/wanderwiseData';
import Dashboard from './components/core-layout/Dashboard';
import TripInputForm from './components/core-layout/TripInputForm';

export default function App() {
  // Navigation View State: 'input' (Page 1) or 'dashboard' (Page 2)
  const [currentView, setCurrentView] = useState('input');

  // Automatically scroll window to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Active City Key for wanderwiseData
  const [activeCityKey, setActiveCityKey] = useState('jaipur');

  // Input Form State (Defaults: Domestic = ₹20,000, Foreign = ₹30,000)
  const [cityInput, setCityInput] = useState('Jaipur');
  const [duration, setDuration] = useState(2);
  const [budget, setBudget] = useState(20000);
  const [includeEmergency, setIncludeEmergency] = useState(true);
  const [verifyHours, setVerifyHours] = useState(true);
  const [pace, setPace] = useState('balanced');

  // Simulation & Toast State
  const [isSimulating, setIsSimulating] = useState(false);
  const [toastNotice, setToastNotice] = useState(null);

  // Known Pilot Cities Map (lowercase for case-insensitive matching)
  const PILOT_CITY_MAP = {
    shimla: 'shimla',
    jaipur: 'jaipur',
    tokyo: 'tokyo',
    dubai: 'dubai',
    chandigarh: 'chandigarh'
  };

  // Handle Form Submission (Input Screen -> Feasibility Simulation -> Dashboard)
  const handleSubmitForm = (e) => {
    if (e) e.preventDefault();
    setIsSimulating(true);

    setTimeout(() => {
      const normalizedInput = cityInput.trim().toLowerCase();
      const matchedKey = PILOT_CITY_MAP[normalizedInput];

      if (matchedKey) {
        setActiveCityKey(matchedKey);
        const cityObj = wanderwiseData[matchedKey];
        if (cityObj) {
          setBudget(cityObj.totalBudget);
        }
        setToastNotice(null);
      } else {
        // Fallback to Jaipur if city is unrecognized
        setActiveCityKey('jaipur');
        setBudget(20000);
        setToastNotice('Pilot Mode: Showing demo itinerary for Jaipur');
      }

      setIsSimulating(false);
      setCurrentView('dashboard');
    }, 1000);
  };

  // Handle selecting city from Dashboard Quick Switcher pills
  const handleSelectCityFromHeader = (cityKey) => {
    setActiveCityKey(cityKey);
    setToastNotice(null);
    const matchedData = wanderwiseData[cityKey];
    if (matchedData) {
      setCityInput(matchedData.name);
      setBudget(matchedData.totalBudget);
      setDuration(parseInt(matchedData.duration) || 2);
    }
  };

  // Handle Modify Trip button (Dashboard -> Input Screen)
  const handleModifyTrip = () => {
    setCurrentView('input');
  };

  // Resolve base city data and merge custom duration/budget
  const baseCityData = wanderwiseData[activeCityKey] || wanderwiseData.jaipur;
  const isDefaultBudget = Number(budget) === baseCityData.totalBudget;
  const currentCityData = {
    ...baseCityData,
    duration: `${duration} ${Number(duration) === 1 ? 'Day' : 'Days'}`,
    totalBudget: Number(budget),
    formattedBudget: isDefaultBudget ? baseCityData.formattedBudget : `₹${Number(budget).toLocaleString('en-IN')}`
  };

  return (
    <div className="min-h-screen font-sans bg-[#F8F5F0]">
      {/* PAGE 1: Trip Setup / User Input View */}
      {currentView === 'input' && (
        <TripInputForm
          cityInput={cityInput}
          setCityInput={setCityInput}
          duration={duration}
          setDuration={setDuration}
          budget={budget}
          setBudget={setBudget}
          includeEmergency={includeEmergency}
          setIncludeEmergency={setIncludeEmergency}
          verifyHours={verifyHours}
          setVerifyHours={setVerifyHours}
          pace={pace}
          setPace={setPace}
          onSubmit={handleSubmitForm}
          isSimulating={isSimulating}
        />
      )}

      {/* PAGE 2: Itinerary Dashboard View */}
      {currentView === 'dashboard' && (
        <Dashboard
          selectedCity={activeCityKey}
          activeCity={activeCityKey}
          onSelectCity={handleSelectCityFromHeader}
          onModifyTrip={handleModifyTrip}
          cityData={currentCityData}
          toastNotice={toastNotice}
          onCloseToast={() => setToastNotice(null)}
        />
      )}
    </div>
  );
}
