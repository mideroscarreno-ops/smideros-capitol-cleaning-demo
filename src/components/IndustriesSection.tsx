import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/capitolData';

interface IndustriesSectionProps {
  onSelectFacilityForEstimate: (facilityTitle: string) => void;
}

export function IndustriesSection({
  onSelectFacilityForEstimate,
}: IndustriesSectionProps) {
  return (
    <section
      id="industries"
      className="bg-[#EAEDE9] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#1C6659] mb-3">
              Industries &amp; Commercial Properties
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              Every Facility Deserves a Cleaning Plan That Fits.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#263238]">
              Different commercial spaces carry distinct foot-traffic patterns, surface materials, and operating hours. Capitol Cleaning adapts each schedule to match the environment inside your doors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <article
              key={industry.id}
              className="bg-[#F9F8F4] border border-[#14243A]/12 rounded-md p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#263238]/70 pb-4 border-b border-[#14243A]/10">
                  <span className="font-medium text-[#1C6659]">{industry.subtitle}</span>
                  <span className="font-semibold text-[#14243A]/50 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-[#14243A]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#263238]">
                  {industry.description}
                </p>

                <ul className="mt-5 pt-4 border-t border-[#14243A]/10 space-y-2">
                  {industry.priorities.map((priority) => (
                    <li
                      key={priority}
                      className="text-sm text-[#263238]/85 flex items-baseline gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#C8A66A] font-semibold"
                      >
                        —
                      </span>
                      <span>{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#14243A]/10">
                <button
                  type="button"
                  onClick={() => onSelectFacilityForEstimate(industry.title)}
                  className="min-h-[40px] inline-flex items-center gap-2 text-sm font-semibold text-[#1C6659] hover:text-[#14243A] transition-colors duration-150 cursor-pointer"
                >
                  <span>Request plan for {industry.title}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
