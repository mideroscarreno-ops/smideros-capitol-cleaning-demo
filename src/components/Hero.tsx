import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, HERO_IMAGE } from '../data/capitolData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onRequestEstimate: () => void;
  onExploreServices: () => void;
}

const ANCHOR_ITEMS = [
  { label: 'Established', value: '1990' },
  { label: 'Published Experience', value: '30+ Years' },
  { label: 'Operations', value: 'Locally Owned & Operated' },
  { label: 'Service Model', value: 'Customized Commercial Plans' },
];

export function Hero({ onRequestEstimate, onExploreServices }: HeroProps) {
  return (
    <section id="home" className="bg-[#F9F8F4] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[#14243A]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#1C6659] mb-5 tabular-nums">
              <span>Established in 1990</span>
              <span aria-hidden="true" className="text-[#C8A66A]">·</span>
              <span>Oklahoma City Metro</span>
              <span aria-hidden="true" className="text-[#C8A66A]">·</span>
              <span>Commercial &amp; Janitorial</span>
            </div>

            <h1 className="font-display text-[clamp(2.25rem,4vw,3.65rem)] font-semibold leading-[1.08] tracking-tight text-[#14243A] [text-wrap:balance] max-w-xl">
              Exceptional Spaces Start With Exceptional Care.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#263238] max-w-[56ch]">
              Trusted commercial cleaning and janitorial services tailored to businesses throughout the Oklahoma City metro. Decades of consistent crews, customized schedules, and quiet accountability for offices, medical suites, retail properties, and industrial facilities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onRequestEstimate}
                className="min-h-[48px] px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Request a Commercial Cleaning Estimate</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="min-h-[48px] px-5 py-3.5 inline-flex items-center justify-center text-sm sm:text-base font-medium text-[#14243A] bg-transparent hover:bg-[#EAEDE9] border border-[#14243A]/25 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-[#14243A]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#263238]">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-[#14243A] hover:text-[#1C6659] transition-colors duration-150 tabular-nums py-1"
              >
                <Phone className="w-4 h-4 text-[#1C6659]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span className="text-[#263238]/75">
                Commercial properties, offices, and ongoing janitorial contracts
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px] lg:min-h-[480px] rounded-md overflow-hidden border border-[#14243A]/10 bg-[#EAEDE9]">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                className="w-full h-full object-cover"
                fallbackTitle="Capitol Cleaning — Oklahoma City"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-14 pt-8 border-t border-[#14243A]/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ANCHOR_ITEMS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs font-medium tracking-wide text-[#263238]/70">
                {item.label}
              </p>
              <p className="font-display text-lg sm:text-xl font-semibold text-[#14243A] tabular-nums">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
