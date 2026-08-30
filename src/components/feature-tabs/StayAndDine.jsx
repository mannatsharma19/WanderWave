import React, { useState } from 'react';
import { Home, Coffee, Star } from 'lucide-react';

export default function StayAndDine({ data, hotel: hotelProp, localEats: eatsProp, currency: currencyProp, stay_and_dine: stayDineProp }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (key) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Resolve hotel data safely from data prop or explicit props
  const resolvedHotel = hotelProp || data?.hotel || data?.stay_and_dine?.hotel || stayDineProp?.hotel;
  const hotelImg = resolvedHotel?.image_url || resolvedHotel?.image;
  const hotelCheckIn = resolvedHotel?.check_in || resolvedHotel?.checkIn;
  const hotelPrice = resolvedHotel?.cost || resolvedHotel?.price;

  // Resolve cafes list safely
  const resolvedEats = eatsProp || data?.localEats || data?.stay_and_dine?.cafes || stayDineProp?.cafes || [];

  return (
    <section className="fade-in space-y-6">
      {/* Section Title */}
      <div className="bg-white border border-[#EFEBE1] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926]">
            Stay & Culinary Recommendations
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-gray-600 mt-1">
            Hand-picked lodging & verified culinary spots matching your travel window and budget.
          </p>
        </div>
        <span className="bg-[#D8F3DC] text-[#1B4332] rounded-full uppercase tracking-wider text-[10px] font-bold px-3.5 py-1.5 shrink-0">
          ✨ Verified Accommodations
        </span>
      </div>

      {/* Hotel Recommendation Showcase */}
      {resolvedHotel && (
        <article className="bg-white border border-[#EFEBE1] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Image Showcase */}
            <div className="md:col-span-5 relative aspect-16/10 md:aspect-auto min-h-[220px] bg-[#F9F6F0] overflow-hidden group">
              {hotelImg && !imgErrors['hotel'] ? (
                <img
                  src={hotelImg}
                  alt={resolvedHotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={() => handleImgError('hotel')}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#F9F6F0]">
                  <div className="p-3 bg-[#F0EBE1] rounded-full mb-2">
                    <Home className="w-8 h-8 text-[#6B5B49]" />
                  </div>
                  <span className="text-xs font-serif font-bold text-[#2C2926]">{resolvedHotel.name}</span>
                </div>
              )}
              
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 bg-white/95 text-[#2C2926] px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-xs border border-[#EFEBE1]">
                <Star className="w-3.5 h-3.5 fill-[#6B5B49] text-[#6B5B49]" />
                <span className="text-xs font-sans font-bold">{resolvedHotel.rating} / 5.0</span>
              </div>
            </div>

            {/* Right Details Container */}
            <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#6B5B49] mb-1.5">
                  <Home className="w-3.5 h-3.5 text-[#6B5B49]" />
                  Primary Accommodation
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2C2926] leading-snug">
                  {resolvedHotel.name}
                </h3>
                
                <p className="text-xs sm:text-sm font-sans text-gray-600 mt-2 leading-relaxed">
                  {resolvedHotel.description}
                </p>
              </div>

              {/* Check-In / Price Grid */}
              <div className="bg-[#F9F6F0] p-3.5 rounded-xl border border-[#EFEBE1] grid grid-cols-2 gap-3 text-xs">
                <div className="border-r border-[#EFEBE1] pr-2">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#6B5B49]">Check-In Window</p>
                  <p className="font-sans font-semibold text-[#2C2926] mt-0.5">{hotelCheckIn || '02:00 PM'}</p>
                </div>

                <div className="pl-1">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#6B5B49]">Est. Nightly Rate</p>
                  <p className="font-sans font-bold text-[#2C2926] mt-0.5">{hotelPrice}</p>
                </div>
              </div>
            </div>

          </div>
        </article>
      )}

      {/* Culinary Recommendations Showcase */}
      <div>
        <h3 className="font-serif text-xl font-bold text-[#2C2926] mb-4 flex items-center gap-2">
          <Coffee className="w-5 h-5 text-[#6B5B49]" />
          Curated Local Dining & Cafes
        </h3>

        <div className="flex flex-col gap-4">
          {resolvedEats.map((cafe, idx) => {
            const cafeImg = cafe.image_url || cafe.image;
            const key = `cafe-${idx}`;
            const hasErr = imgErrors[key];

            return (
              <article 
                key={idx} 
                className="bg-white border border-[#EFEBE1] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Left Side: Cafe Image Showcase */}
                <div className="w-full md:w-56 lg:w-64 aspect-16/10 md:aspect-auto min-h-[180px] sm:min-h-[200px] relative bg-[#F9F6F0] overflow-hidden shrink-0 group">
                  {cafeImg && !hasErr ? (
                    <img 
                      src={cafeImg} 
                      alt={cafe.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy"
                      onError={() => handleImgError(key)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#F9F6F0]">
                      <div className="p-3 bg-[#F0EBE1] rounded-full mb-2">
                        <Coffee className="w-6 h-6 text-[#6B5B49]" />
                      </div>
                      <span className="text-xs font-serif font-bold text-[#2C2926]">{cafe.name}</span>
                    </div>
                  )}
                </div>

                {/* Right Side: Details Container */}
                <div className="p-5 sm:p-6 flex flex-col justify-between space-y-4 flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#6B5B49] mb-1.5">
                      <Coffee className="w-3.5 h-3.5 text-[#6B5B49]" />
                      {cafe.vibe || 'Curated Culinary Spot'}
                    </div>

                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#2C2926] leading-snug">
                      {cafe.name}
                    </h4>

                    <p className="text-xs sm:text-sm font-sans text-gray-600 mt-2 leading-relaxed">
                      {cafe.details || cafe.vibe}
                    </p>
                  </div>

                  {/* Estimated Spend Box */}
                  <div className="bg-[#F9F6F0] p-3.5 rounded-xl border border-[#EFEBE1] flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#6B5B49]">Average Dining Cost</span>
                    <span className="font-sans font-bold text-[#2C2926]">{cafe.cost}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
