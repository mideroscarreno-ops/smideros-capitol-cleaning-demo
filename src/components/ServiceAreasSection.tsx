import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import {
  ADDITIONAL_CONFIRMED_COMMUNITIES,
  SERVICE_AREAS,
  type ServiceAreaItem,
} from '../data/capitolData';

interface ServiceAreasSectionProps {
  onRequestAreaEstimate: (cityName: string) => void;
}

export function ServiceAreasSection({
  onRequestAreaEstimate,
}: ServiceAreasSectionProps) {
  const [selectedCityId, setSelectedCityId] = useState<string>(
    SERVICE_AREAS[0].id
  );

  const activeArea: ServiceAreaItem =
    SERVICE_AREAS.find((area) => area.id === selectedCityId) ??
    SERVICE_AREAS[0];

  return (
    <section
      id="service-areas"
      className="bg-[#EAEDE9] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#1C6659] mb-3">
              Oklahoma City Metro Coverage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              Proudly Serving Oklahoma City Businesses.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#263238]">
              Commercial cleaning and janitorial services throughout Oklahoma City and confirmed surrounding communities. Select a city to view local commercial service focus and request a tailored facility estimate.
            </p>

            <div
              role="tablist"
              aria-label="Confirmed Metro Service Areas"
              className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5"
            >
              {SERVICE_AREAS.map((area) => {
                const isSelected = area.id === activeArea.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`area-panel-${area.id}`}
                    onClick={() => setSelectedCityId(area.id)}
                    className={`min-h-[44px] px-4 py-2.5 text-left text-sm font-medium rounded-md border transition-colors duration-150 cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#14243A] text-white border-[#14243A]'
                        : 'bg-white text-[#14243A] border-[#14243A]/15 hover:bg-[#EAEDE9]'
                    }`}
                  >
                    <span className="truncate">{area.city}</span>
                    <MapPin
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isSelected ? 'text-[#C8A66A]' : 'text-[#1C6659]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-[#14243A]/10 text-sm text-[#263238]/85">
              <p className="font-medium text-[#14243A]">
                Additional Metro Communities Served
              </p>
              <p className="mt-1">
                {ADDITIONAL_CONFIRMED_COMMUNITIES.join(' · ')}
              </p>
              <p className="mt-2 text-xs text-[#263238]/75 leading-relaxed">
                For commercial properties outside the core Oklahoma City metro, please enter your city or ZIP code in the estimate form—service availability is confirmed directly by Capitol Cleaning.
              </p>
            </div>
          </div>

          <div
            role="tabpanel"
            id={`area-panel-${activeArea.id}`}
            className="lg:col-span-7 bg-white border border-[#14243A]/12 rounded-md p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#1C6659]">
              <span>Local Commercial Service Area</span>
              <span aria-hidden="true" className="text-[#C8A66A]">·</span>
              <span>{activeArea.city}, OK</span>
            </div>

            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-[#14243A] [text-wrap:balance]">
              {activeArea.headline}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#263238]">
              {activeArea.intro}
            </p>

            <div className="mt-7 pt-6 border-t border-[#14243A]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#14243A]/70 mb-3">
                  Facilities Supported in {activeArea.city}
                </p>
                <ul className="space-y-2.5">
                  {activeArea.facilitiesServed.map((facility) => (
                    <li
                      key={facility}
                      className="text-sm text-[#263238] flex items-baseline gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#1C6659] font-semibold"
                      >
                        —
                      </span>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wide text-[#14243A]/70 mb-3">
                  Scheduling &amp; Program Fit
                </p>
                <p className="text-sm leading-relaxed text-[#263238]">
                  {activeArea.schedulingNote}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#263238]/80">
                  Available programs include commercial cleaning, recurring janitorial schedules, high-touch sanitizing, and hard-surface floor care.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#14243A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm text-[#263238]/80">
                Pre-fills {activeArea.city}, OK in your estimate inquiry.
              </span>
              <button
                type="button"
                onClick={() => onRequestAreaEstimate(`${activeArea.city}, OK`)}
                className="min-h-[48px] px-6 py-3 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{activeArea.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
