import { ArrowRight } from 'lucide-react';
import { CREDIBILITY_POINTS, PROCESS_STEPS } from '../data/capitolData';

interface CredibilityAndProcessProps {
  onRequestEstimate: () => void;
}

export function CredibilityAndProcess({
  onRequestEstimate,
}: CredibilityAndProcessProps) {
  return (
    <>
      <section className="bg-[#14243A] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#C8A66A] mb-3 tracking-wide">
                Why Businesses Choose Capitol Cleaning
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-white [text-wrap:balance]">
                Consistency You Can See. Service You Can Rely On.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Facility managers and business owners rely on a janitorial partner they do not have to manage every week. Our published operating practices focus on continuity, screening, and clear communication.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onRequestEstimate}
                  className="min-h-[48px] px-6 py-3 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#14243A] bg-[#C8A66A] hover:bg-[#d6b77f] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request a Commercial Estimate</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-8 lg:border-t-0 lg:pt-0">
              {CREDIBILITY_POINTS.map((point, index) => (
                <div
                  key={point.title}
                  className="pb-6 border-b border-white/12"
                >
                  <span className="text-xs font-semibold text-[#C8A66A] tabular-nums block mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/78">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F4] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#1C6659] mb-3">
              How Our Process Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              A Straightforward Path to Reliable Facility Care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="pt-6 border-t-2 border-[#1C6659]/35"
              >
                <span className="font-display text-3xl sm:text-4xl font-semibold text-[#C8A66A] tabular-nums block">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-[#14243A]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#263238]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
