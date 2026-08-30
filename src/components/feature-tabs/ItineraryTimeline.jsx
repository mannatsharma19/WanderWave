import React, { useState } from 'react';
import { Clock, MapPin, AlertTriangle, CheckCircle, Info, Maximize2, X, Compass } from 'lucide-react';

export default function ItineraryTimeline({ data, itinerary: itineraryProp }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const itinerary = itineraryProp || data?.itinerary || data;

  if (!itinerary) return null;

  const handleImageError = (indexKey) => {
    setImageErrors((prev) => ({ ...prev, [indexKey]: true }));
  };

  const renderDaySection = (dayKey, dayTitle) => {
    const stops = itinerary[dayKey] || [];

    return (
      <div key={dayKey} className="mb-8 relative">
        {/* Day Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-[#2C2926] text-white font-serif text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-xs">
            {dayTitle}
          </div>
          
          <div className="flex-1 h-[1px] bg-[#EFEBE1]"></div>
          
          <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3.5 py-1">
            {stops.length} Stops Scheduled
          </span>
        </div>

        {/* Timeline Stops Container */}
        <div className="relative pl-6 md:pl-8">
          {/* Dotted Route Line connecting stops */}
          <div className="absolute left-[12px] md:left-[16px] top-6 bottom-6 border-l-2 border-dashed border-[#2C2926]/20 z-0"></div>

          {stops.map((stop, index) => {
            const isOptimal = stop.feasibility?.status === 'optimal';
            const imgUrl = stop.image_url || stop.image;
            const stopKey = `${dayKey}-${index}`;
            const hasImgError = imageErrors[stopKey];

            return (
              <article 
                key={index} 
                className="relative bg-white border border-[#EFEBE1] rounded-2xl p-4 sm:p-5 mb-5 shadow-xs hover:shadow-md transition-all duration-300 z-10 flex flex-col sm:flex-row gap-4"
              >
                {/* Left Side Stop Indicator */}
                <div className="absolute -left-[18px] md:-left-[22px] top-6 w-[12px] h-[12px] rounded-full bg-[#6B5B49] border-2 border-white shadow-xs z-20"></div>

                {/* Left Side: Stop Information */}
                <div className="flex-1 min-w-0">
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="flex items-center gap-1.5 text-xs font-sans font-bold text-[#2C2926] bg-[#F9F6F0] px-3 py-1 rounded-lg border border-[#EFEBE1]">
                      <Clock className="w-3.5 h-3.5 text-[#6B5B49]" />
                      {stop.time}
                    </span>
                    
                    <span className="text-xs font-sans font-bold text-[#2C2926] bg-[#F9F6F0] px-3 py-1 rounded-lg border border-[#EFEBE1]">
                      ⏱️ {stop.duration}
                    </span>

                    {stop.highlight && (
                      <span className="bg-[#E76F51] text-white rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1 shadow-xs">
                        🔥 Highlight
                      </span>
                    )}
                  </div>

                  {/* Stop Name */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926] tracking-tight">
                    {stop.place}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans text-gray-600 mt-1.5 leading-relaxed">
                    {stop.description}
                  </p>

                  {/* Feasibility Panel */}
                  <div className="mt-3.5 p-3.5 bg-[#F9F6F0] rounded-xl border border-[#EFEBE1] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-0.5 text-[#2C2926]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#2A9D8F]" />
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#2A9D8F]">Transit Logistics</span>
                      </div>
                      <p className="font-sans text-xs leading-relaxed text-gray-600">{stop.feasibility?.travel}</p>
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        {isOptimal ? (
                          <CheckCircle className="w-3.5 h-3.5 text-[#2A9D8F]" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-[#E76F51]" />
                        )}
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#2A9D8F]">
                          Hours Check
                        </span>
                      </div>
                      <p className="font-sans text-xs leading-relaxed text-gray-600">
                        {stop.feasibility?.hours}
                      </p>
                    </div>
                  </div>

                  {/* Insider Tip */}
                  {stop.feasibility?.tip && (
                    <div className="mt-2.5 p-3 bg-[#2A9D8F]/10 rounded-xl border border-[#2A9D8F]/25 flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                      <p className="text-xs font-sans text-[#2C2926] leading-normal">
                        <strong className="font-bold text-[#2A9D8F]">Tip:</strong> {stop.feasibility.tip}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Side: Photo Frame */}
                <div className="w-full sm:w-[150px] md:w-[160px] shrink-0 self-start sm:self-stretch">
                  <div 
                    className="group relative overflow-hidden rounded-xl border border-[#EFEBE1] aspect-16/9 sm:aspect-square h-full cursor-pointer shadow-xs bg-[#F9F6F0]"
                    onClick={() => !hasImgError && imgUrl && setSelectedImage({ url: imgUrl, name: stop.place })}
                  >
                    {imgUrl && !hasImgError ? (
                      <img
                        src={imgUrl}
                        alt={stop.place}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={() => handleImageError(stopKey)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#F9F6F0] text-[#2C2926]">
                        <div className="p-2 bg-[#2A9D8F]/15 rounded-full mb-1">
                          <Compass className="w-5 h-5 text-[#2A9D8F]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#2C2926] line-clamp-2">{stop.place}</span>
                      </div>
                    )}

                    {imgUrl && !hasImgError && (
                      <div className="absolute right-2 bottom-2 p-1.5 bg-[#2C2926]/85 backdrop-blur-xs rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="fade-in space-y-6">
      <div className="bg-white border border-[#EFEBE1] rounded-2xl p-5 sm:p-6 shadow-xs">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926]">
          Feasible Route Schedule
        </h2>
        <p className="text-xs sm:text-sm font-serif italic text-gray-600 mt-1">
          Sequenced timeline optimized for walking, transit, and landmark operating windows.
        </p>
      </div>
      
      {renderDaySection('day1', 'DAY 01')}
      {renderDaySection('day2', 'DAY 02')}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white p-4 sm:p-5 rounded-2xl max-w-3xl w-full border border-[#EFEBE1] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 p-2 bg-[#F9F6F0] text-[#2C2926] hover:bg-[#2C2926] hover:text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-4 h-4" />
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.name} 
              className="w-full max-h-[70vh] object-cover rounded-xl border border-[#EFEBE1]" 
            />
            <div className="mt-3 px-1 flex flex-wrap justify-between items-center gap-2">
              <h4 className="font-serif text-lg font-bold text-[#2C2926]">
                {selectedImage.name}
              </h4>
              <span className="bg-[#D8F3DC] text-[#1B4332] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                WanderWise Verified Location
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
