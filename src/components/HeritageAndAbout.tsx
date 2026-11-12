import { ArrowRight } from 'lucide-react';
import { ABOUT_IMAGE, HERITAGE_MILESTONES } from '../data/capitolData';
import { ResilientImage } from './ResilientImage';

interface SectionActionProps {
  onRequestEstimate: () => void;
}

export function HeritageSection() {
  return (
    <section className="bg-[#EAEDE9] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#1C6659] mb-3 tabular-nums">
              Company Heritage · Since 1990
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              Built on Experience. Driven by Consistency.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#263238]">
              For more than 30 years, Capitol Cleaning has focused exclusively on keeping Oklahoma commercial environments dependable, orderly, and ready for business. Our longevity comes from showing up on schedule with consistent teams and personal accountability.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#14243A]/15 border-t border-b border-[#14243A]/15">
            {HERITAGE_MILESTONES.map((milestone, index) => (
              <div
                key={milestone.period}
                className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-4 flex items-baseline gap-3">
                  <span className="text-xs font-semibold text-[#C8A66A] tabular-nums">
                    0{index + 1}.
                  </span>
                  <span className="text-sm font-semibold text-[#14243A] tabular-nums">
                    {milestone.period}
                  </span>
                </div>
                <div className="sm:col-span-8">
                  <h3 className="font-display text-xl font-semibold text-[#14243A]">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#263238]">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ onRequestEstimate }: SectionActionProps) {
  return (
    <section
      id="about"
      className="bg-[#EAEDE9] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-full min-h-[340px] rounded-md overflow-hidden border border-[#14243A]/10 bg-[#F9F8F4]">
              <ResilientImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                className="w-full h-full object-cover"
                fallbackTitle="Oklahoma City Commercial Architecture"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#1C6659] mb-3">
              About Capitol Cleaning
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              Local Roots. Lasting Standards.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#263238] max-w-[62ch]">
              <p>
                Established in 1990, Capitol Cleaning is a family-owned, locally operated commercial cleaning company rooted in Oklahoma City. When you partner with our team, you work directly with people who know your building, your neighborhood, and the operational demands of Oklahoma businesses.
              </p>
              <p>
                We believe commercial facility care is built on long-term business relationships rather than short-term turnover. Rather than rotating unfamiliar crews through your property, we assign consistent cleaning professionals, tailor every schedule around your hours, and maintain active quality-control practices.
              </p>
              <p>
                From multi-suite corporate offices to neighborhood medical clinics and industrial administrative buildings, we provide personalized attention backed by screened personnel and references available upon request.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#14243A]/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-lg font-semibold text-[#14243A]">
                  Family-Owned
                </p>
                <p className="mt-1 text-sm text-[#263238]/80">
                  Locally operated in Oklahoma City since 1990
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-[#14243A]">
                  Direct Oversight
                </p>
                <p className="mt-1 text-sm text-[#263238]/80">
                  Quality-control practices and responsive support
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-[#14243A]">
                  Long-Term Focus
                </p>
                <p className="mt-1 text-sm text-[#263238]/80">
                  Built for multi-year commercial partnerships
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onRequestEstimate}
                className="min-h-[44px] inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#1C6659] hover:text-[#14243A] transition-colors duration-150 cursor-pointer"
              >
                <span>Discuss a customized plan for your building</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
