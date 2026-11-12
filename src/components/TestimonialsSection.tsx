import { ExternalLink, Quote } from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/capitolData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[#F9F8F4] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1C6659] mb-3">
              Client Perspectives
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
              Trusted by Oklahoma City Commercial Clients.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#263238]">
              Published client statements from Capitol Cleaning’s official website, reflecting recurring commercial cleaning, floor care, and responsive service.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm shrink-0">
            <a
              href={COMPANY_INFO.originalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#14243A] hover:text-[#1C6659] underline underline-offset-4 decoration-[#C8A66A]"
            >
              <span>Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <span aria-hidden="true" className="text-[#14243A]/30">·</span>
            <a
              href={COMPANY_INFO.googleReviewsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#14243A] hover:text-[#1C6659] underline underline-offset-4 decoration-[#C8A66A]"
            >
              <span>Public Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="bg-white border border-[#14243A]/12 rounded-md p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <Quote
                  className="w-6 h-6 text-[#C8A66A] mb-4"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-[#14243A]">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-6 pt-5 border-t border-[#14243A]/10">
                <p className="font-display text-lg font-semibold text-[#14243A]">
                  {item.author}
                </p>
                <p className="text-sm text-[#263238]/80 mt-0.5">
                  {item.roleOrContext}
                </p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#1C6659] hover:text-[#14243A]"
                >
                  <span>{item.sourceLabel}</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
