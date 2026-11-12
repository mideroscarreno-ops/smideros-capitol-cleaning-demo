import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/capitolData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceOption: string) => void;
}

export function ServicesSection({
  onSelectServiceForEstimate,
}: ServicesSectionProps) {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  const activeService: ServiceItem =
    SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section
      id="services"
      className="bg-[#F9F8F4] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#1C6659] mb-3">
            Commercial Cleaning Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
            Tailored Cleaning &amp; Facility Care Programs.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#263238]">
            Select any service below to review what Capitol Cleaning delivers across commercial offices, medical environments, retail properties, and industrial facilities.
          </p>
        </div>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div
            role="tablist"
            aria-label="Commercial Cleaning Services"
            className="lg:col-span-5 flex flex-col divide-y divide-[#14243A]/12 border-t border-b border-[#14243A]/12"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveId(service.id)}
                  className={`text-left py-5 px-4 sm:px-5 transition-colors duration-150 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#14243A] text-white'
                      : 'bg-transparent text-[#14243A] hover:bg-[#EAEDE9]'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold pt-1 tabular-nums shrink-0 ${
                      isSelected ? 'text-[#C8A66A]' : 'text-[#1C6659]'
                    }`}
                  >
                    {service.number}.
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="font-display text-lg sm:text-xl font-semibold block">
                      {service.title}
                    </span>
                    <span
                      className={`mt-1 text-sm block leading-snug ${
                        isSelected ? 'text-white/80' : 'text-[#263238]/80'
                      }`}
                    >
                      {service.headline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`service-panel-${activeService.id}`}
            aria-labelledby={`service-tab-${activeService.id}`}
            className="lg:col-span-7 bg-white border border-[#14243A]/12 rounded-md overflow-hidden"
          >
            <div className="aspect-[16/9] sm:aspect-[4/3] max-h-[340px] w-full bg-[#EAEDE9] overflow-hidden border-b border-[#14243A]/10">
              <ResilientImage
                src={activeService.image}
                alt={activeService.imageAlt}
                className="w-full h-full object-cover"
                fallbackTitle={activeService.title}
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#1C6659] tabular-nums">
                <span>Service {activeService.number}</span>
                <span aria-hidden="true" className="text-[#C8A66A]">·</span>
                <span>Oklahoma City Metro</span>
              </div>

              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#14243A] [text-wrap:balance]">
                {activeService.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[#263238]">
                {activeService.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#14243A]/10">
                <p className="text-xs font-semibold tracking-wide text-[#14243A]/70 mb-4">
                  Typical Program Scope
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {activeService.scopeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#263238] leading-snug"
                    >
                      <Check
                        className="w-4 h-4 text-[#1C6659] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#14243A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-[#263238]/80">
                  Customized to your building’s hours, square footage, and priorities.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onSelectServiceForEstimate(activeService.estimateOption)
                  }
                  className="min-h-[44px] px-5 py-2.5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request {activeService.title} Estimate</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
