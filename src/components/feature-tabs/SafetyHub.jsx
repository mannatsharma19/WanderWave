import React from 'react';
import { HeartPulse, Shield, PhoneCall, Building2, CheckCircle2, MapPin, LifeBuoy, Pill, AlertTriangle, Clock } from 'lucide-react';

const CITY_GUIDELINES = {
  shimla: [
    "Keep loose snacks and shiny items secured in zipped backpacks around Jakhoo Temple due to active monkeys.",
    "Carry sturdy non-slip footwear when walking steep cobblestone slopes along Mall Road and Ridge bypasses.",
    "Keep digital copies of hotel vouchers and emergency contacts accessible offline during mountain transit."
  ],
  jaipur: [
    "Avoid carrying open food or plastic bags near monkeys around Galta Ji (Monkey Temple) and Nahargarh Fort.",
    "Pre-book return cabs when visiting hilltop forts like Nahargarh, as app rides can be scarce after 7:00 PM.",
    "Keep passport and ID copies digital on your phone and drink bottled water from sealed, verified vendors."
  ],
  tokyo: [
    "Japan law requires foreign travelers to carry physical passports or valid digital ID at all times.",
    "Keep JPY cash on hand — small ramen shops, Tsukiji market stalls, and temple souvenir shops may not accept cards.",
    "Save offline maps of Tokyo subway lines and keep Suica/Pasmo IC cards loaded on Apple Wallet or Google Pay."
  ],
  dubai: [
    "Observe local dress etiquette and cultural norms when visiting heritage sites in Al Fahidi district.",
    "Stay hydrated under midday sun and carry extra water during desert safari trips.",
    "Ensure digital passport and visa copies are stored in cloud storage for quick consular reference."
  ],
  chandigarh: [
    "Adhere strictly to sector speed limits and traffic signals — automated CCTV enforcement is active city-wide.",
    "Emergency police and ambulance dispatch is accessible 24/7 via the unified helpline 112.",
    "Keep digital receipts of vehicle parking slips when exploring Sector 17 Plaza and Sukhna Lake."
  ]
};

export default function SafetyHub({ data, safetyData: propSafetyData, cityKey: propCityKey, cityName: propCityName }) {
  const safetyData = propSafetyData || data?.safety;
  const cityName = propCityName || data?.name || 'Destination';
  const cityKey = propCityKey || data?.key || (cityName ? cityName.toLowerCase() : 'jaipur');

  if (!safetyData) return null;

  const { hospital, hospitalPhone, hospitalDist, police, embassy, touristHelpline, isDomestic: dataIsDomestic } = safetyData;
  const isDomestic = dataIsDomestic !== undefined ? dataIsDomestic : (!embassy || embassy === 'Domestic Travel — N/A');

  const resolvedCityKey = (cityKey || 'jaipur').toLowerCase();
  const guidelines = CITY_GUIDELINES[resolvedCityKey] || CITY_GUIDELINES.jaipur;

  return (
    <section className="fade-in space-y-6">
      {/* Section Title */}
      <div className="bg-white border border-[#EFEBE1] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926] flex items-center gap-2.5">
            <div className="p-2 bg-[#2A9D8F]/15 rounded-xl text-[#2A9D8F]">
              <Shield className="w-6 h-6" />
            </div>
            Safety & Emergency Hub
          </h2>
          <p className="text-xs sm:text-sm font-serif italic text-gray-600 mt-1">
            Verified local emergency hotlines, medical centers, 24/7 pharmacies, and consular assistance synced for real-time safety.
          </p>
        </div>
        <div className="bg-[#D8F3DC] text-[#1B4332] rounded-full uppercase tracking-wider text-[10px] font-bold px-3.5 py-1.5 shrink-0 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332]" />
          <span>Emergency Hotlines Active</span>
        </div>
      </div>

      {/* Emergency Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Hospital */}
        <article className="bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-[#2A9D8F]/15 text-[#2A9D8F] rounded-xl">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                Hospital Care
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2C2926] leading-snug">
                {hospital}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#2A9D8F] font-semibold mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Emergency Room: 24/7 Open</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              Fully equipped emergency trauma center, intensive care unit, and round-the-clock ambulance dispatch.
            </p>

            <div className="flex items-center gap-2 text-xs font-sans text-[#2C2926] bg-[#F9F6F0] p-3 rounded-xl border border-[#EFEBE1]">
              <MapPin className="w-4 h-4 shrink-0 text-[#2A9D8F]" />
              <span>Distance: <strong className="font-semibold">{hospitalDist}</strong></span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#EFEBE1]">
            <a 
              href={`tel:${hospitalPhone}`}
              className="w-full py-2.5 px-4 bg-[#2A9D8F] hover:bg-[#238377] text-white font-sans text-xs font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              aria-label={`Call Hospital at ${hospitalPhone}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Emergency: {hospitalPhone}</span>
            </a>
          </div>
        </article>

        {/* Card 2: Police */}
        <article className="bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-[#264653]/15 text-[#264653] rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                Police Patrol
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2C2926] leading-snug">
                Police & Security
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#264653] font-semibold mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Dispatch Center: 24/7 Active</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              City law enforcement hotline for immediate police assistance, crime reporting, and night security patrols.
            </p>

            <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EFEBE1] text-xs font-sans text-gray-600">
              <p className="font-medium leading-relaxed">
                Emergency Hotline: <strong className="text-[#2C2926] font-bold">{police}</strong>
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#EFEBE1]">
            <a 
              href={`tel:${police}`}
              className="w-full py-2.5 px-4 bg-[#264653] hover:bg-[#1D353F] text-white font-sans text-xs font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              aria-label={`Call Police at ${police}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Police: {police}</span>
            </a>
          </div>
        </article>

        {/* Card 3: 24/7 Pharmacy */}
        <article className="bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-[#2A9D8F]/15 text-[#2A9D8F] rounded-xl">
                <Pill className="w-5 h-5" />
              </div>
              <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                24/7 Pharmacy
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2C2926] leading-snug">
                24/7 Pharmacies
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#2A9D8F] font-semibold mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Night Medical Supplies: 24/7</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              Round-the-clock pharmacies stocking prescription drugs, emergency medical kits, travel motion sickness pills, and first aid supplies.
            </p>

            <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EFEBE1] text-xs font-sans text-gray-600">
              <p className="font-medium leading-relaxed">
                Emergency Store: <strong className="text-[#2C2926] font-bold">In-Hospital Chemist & App Delivery Active</strong>
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#EFEBE1]">
            <a 
              href={`tel:${hospitalPhone}`}
              className="w-full py-2.5 px-4 bg-[#2A9D8F] hover:bg-[#238377] text-white font-sans text-xs font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              aria-label="Contact Duty Chemist"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Duty Chemist: {hospitalPhone}</span>
            </a>
          </div>
        </article>

        {/* Card 4: Tourist Support */}
        <article className="bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-[#E76F51]/15 text-[#E76F51] rounded-xl">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                Tourist Support
              </span>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2C2926] leading-snug">
                Tourist Police & Helpline
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#E76F51] font-semibold mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Visitor Support: 08:00 AM - 10:00 PM</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              Multilingual tourist assistance hotline for lost belongings, travel disputes, transport guidance, and city safety advisories.
            </p>

            <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EFEBE1] text-xs font-sans text-gray-600">
              <p className="font-medium leading-relaxed">
                Helpline: <strong className="text-[#2C2926] font-bold">{touristHelpline || police}</strong>
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#EFEBE1]">
            <a 
              href={`tel:${touristHelpline || police}`}
              className="w-full py-2.5 px-4 bg-[#E76F51] hover:bg-[#D45D3F] text-white font-sans text-xs font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              aria-label="Call Tourist Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Helpline: {touristHelpline || police}</span>
            </a>
          </div>
        </article>

        {/* Card 5: Diplomatic Support (Conditional rendering ONLY for foreign cities) */}
        {!isDomestic && (
          <article className="bg-white border border-[#EFEBE1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-[#F0EBE1] text-[#6B5B49] rounded-xl">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="bg-[#F0EBE1] text-[#6B5B49] rounded-full uppercase tracking-wider text-[10px] font-bold px-3 py-1">
                  Diplomatic Support
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#2C2926] leading-snug">
                  Embassy & Diplomatic Support
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#6B5B49] font-semibold mt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Consular Services: Mon - Fri</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Diplomatic mission assistance for passport loss, legal aid, emergency travel documents, and citizen advisories.
              </p>

              <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EFEBE1] text-xs font-sans text-[#2C2926]">
                <p className="font-medium leading-relaxed">{embassy}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EFEBE1]">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#1B4332] bg-[#D8F3DC] p-2.5 rounded-xl justify-center shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                <span>Indian Embassy Verified</span>
              </div>
            </div>
          </article>
        )}

      </div>

      {/* Local Safety Guidelines */}
      <div className="bg-white border border-[#EFEBE1] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 text-[#2C2926] border-b border-[#EFEBE1] pb-3">
          <div className="p-2 bg-[#F0EBE1] rounded-xl text-[#6B5B49]">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#2C2926]">
              Local Safety Guidelines & Emergency Customs
            </h3>
            <p className="text-xs text-gray-600 font-serif italic">
              Recommended safety practices for {cityName}.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {guidelines.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-gray-600 bg-[#F9F6F0] p-3.5 rounded-xl border border-[#EFEBE1] leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-[#6B5B49] shrink-0 mt-1.5"></span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
