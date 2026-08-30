import React from 'react';

export default function TabSelector({ activeTab, setActiveTab, onTabChange, onSelectTab, tabs }) {
  const handleTabClick = (tabId) => {
    if (setActiveTab) setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
    if (onSelectTab) onSelectTab(tabId);
  };

  const defaultTabs = [
    { id: 'itinerary', label: 'Itinerary', icon: '📅' },
    { id: 'stayDine', label: 'Stay & Dine', icon: '🏨' },
    { id: 'budget', label: 'Budget', icon: '📊' },
    { id: 'safety', label: 'Safety Hub', icon: '🛡️' }
  ];

  const activeTabsList = tabs || defaultTabs;

  return (
    <nav className="pt-1 pb-1" aria-label="Dashboard Navigation Tabs">
      <div className="flex items-center gap-2.5 sm:gap-4 overflow-x-auto pb-2 scrollbar-none snap-x border-b border-[#EFEBE1]">
        {activeTabsList.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              aria-selected={isActive}
              role="tab"
              className={`px-5 py-2.5 rounded-xl font-serif text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap snap-start shrink-0 ${
                isActive
                  ? 'bg-[#2C2926] text-white shadow-sm'
                  : 'bg-white text-[#6B5B49] hover:text-[#2C2926] hover:bg-[#FDFBF7] border border-[#EFEBE1]'
              }`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
